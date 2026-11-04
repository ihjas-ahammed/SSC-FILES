#!/usr/bin/env python3
"""Check image packaging and protect all authored derivation content.

Browser interaction checks are left to the user.
"""
import base64
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'src/assets/generated'


def script_json(html, element_id):
    match = re.search(r'<script id="%s" type="application/json">(.*?)</script>' % element_id, html, re.S)
    assert match, element_id
    return json.loads(match.group(1))


def main():
    source = json.loads((ROOT / 'data/data.json').read_text())
    inventory = json.loads((ASSETS / 'inventory.json').read_text())
    expected_ids = set(inventory['cards'].values()) | set(inventory['icons'].values())
    filenames = {image_id + '-' + theme + '.webp' for image_id in expected_ids for theme in ('light', 'dark')}
    report = {'image_assets': len(filenames), 'builds': []}
    for relative in ('dist/study-match.html', 'dist/app/index.html'):
        html = (ROOT / relative).read_text()
        data = script_json(html, 'course-data')
        protected, setups, replaced = 0, 0, 0
        assert len(data['sections']) == len(source['sections'])
        for original_section, section in zip(source['sections'], data['sections']):
            assert len(original_section['sheets']) == len(section['sheets'])
            for original_sheet, sheet in zip(original_section['sheets'], section['sheets']):
                assert original_sheet['id'] == sheet['id']
                assert len(original_sheet['cards']) == len(sheet['cards'])
                for index, (original, card) in enumerate(zip(original_sheet['cards'], sheet['cards'])):
                    if original['type'] == 'derivation':
                        assert card == original, 'Changed derivation: ' + original['title']
                        protected += 1
                        setups += bool(original.get('setup'))
                    else:
                        key = sheet['id'] + ':' + str(index)
                        expected = dict(original)
                        if key in inventory['cards']:
                            expected['art'] = {'image': inventory['cards'][key], 'alt': original.get('title', '')}
                            replaced += 1
                        assert card == expected, 'Changed authored content: ' + key
        assert protected == 63 and setups == 27 and replaced == 59
        assert 'jsxgraph/1.14.0/jsxgraphcore.js' in html
        assert 'jsxgraph/1.14.0/jsxgraph.min.css' in html
        assert (ROOT / 'src/components/02-mathflow.js').read_text() in html
        sources_match = re.search(r'window.SM_IMAGE_SOURCES = (.*?);</script>', html)
        assert sources_match
        sources = json.loads(sources_match.group(1))
        assert set(sources) == filenames
        for name, value in sources.items():
            contents = (ASSETS / name).read_bytes()
            assert contents[:4] == b'RIFF' and contents[8:12] == b'WEBP', name
            if relative.endswith('study-match.html'):
                assert value.startswith('data:image/webp;base64,')
                assert base64.b64decode(value.split(',', 1)[1]) == contents
            else:
                assert value == 'images/' + name
                assert (ROOT / 'dist/app' / value).read_bytes() == contents
        report['builds'].append({'file': relative, 'derivations_preserved': protected,
            'jsxgraph_setups_preserved': setups, 'non_derivation_images': replaced})
    sw = (ROOT / 'dist/app/sw.js').read_text()
    assert '{{' not in sw
    for name in filenames:
        assert 'images/' + name in sw, 'Missing offline image: ' + name
    assert {p.name for p in (ROOT / 'dist/app/images').glob('*.webp')} == filenames
    assert 'generated-dark' in (ROOT / 'src/styles/16-generated-images.css').read_text()
    report['offline_images'] = len(filenames)
    (ROOT / 'verification/generated-images-report.json').write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps(report, indent=2))


if __name__ == '__main__':
    main()
