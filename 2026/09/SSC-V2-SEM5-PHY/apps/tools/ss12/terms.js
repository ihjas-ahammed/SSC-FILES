/* "where" notes: after each displayed equation, a list of what every symbol means.
   terms.txt holds the notes (window.TERMS_RAW); an entry is shown once per section. */
(function () {
  var entries = [];
  String(window.TERMS_RAW || '').split(/\n(?=## )/).forEach(function (blk) {
    var lines = blk.split('\n').filter(function (l) { return l.trim() && l.charAt(0) !== '#' || l.slice(0, 3) === '## '; });
    var head = lines.shift();
    if (!head || head.slice(0, 3) !== '## ') return;
    var keys = head.slice(3).split('||').map(function (k) { return k.replace(/\s+/g, ''); }).filter(Boolean);
    var rows = lines.map(function (l) { var i = l.indexOf(' | '); return i < 0 ? null : [l.slice(0, i).trim(), l.slice(i + 3).trim()]; }).filter(Boolean);
    if (keys.length && rows.length) entries.push({ keys: keys, rows: rows });
  });
  function block(rows) {
    return '<span class="terms"><span class="tw">where</span>' + rows.map(function (r) {
      return '<span class="tr"><span class="ts">$' + r[0] + '$</span><span class="td">' + r[1] + '</span></span>';
    }).join('') + '</span>';
  }
  window.TERMS_COUNT = entries.length;
  window.TERMS_ENTRIES = entries;
  window.addTerms = function (html) {
    var used = {};
    return html.replace(/\$\$([\s\S]*?)\$\$/g, function (m, tex) {
      var norm = tex.replace(/\s+/g, ''), idx = -1;
      for (var i = 0; i < entries.length && idx < 0; i++)
        if (entries[i].keys.some(function (k) { return norm.indexOf(k) >= 0; })) idx = i;
      if (idx < 0 || used[idx]) return m;
      used[idx] = 1;
      return m + block(entries[idx].rows);
    });
  };
})();
