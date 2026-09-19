#!/usr/bin/env python3
import glob, re, json

files = sorted(glob.glob("../2025/REAL ANALYSIS I/fy4-real-analysis/src/data/*exercise*.ts"))

def extract_from_file(filepath):
    content = open(filepath).read()
    # Find unit id and section
    unit_m = re.search(r'id:\s*[\"\']unit-(\d+)-(\d+)-(\d+)[\"\']', content)
    sec = ""
    if unit_m:
        sec = f"{unit_m.group(1)}.{unit_m.group(2)}"
    
    # Extract lessons
    # Pattern for lessons
    lessons_raw = re.split(r'id:\s*[\"\']les-', content)[1:]
    exercises = []
    for l_raw in lessons_raw:
        title_m = re.search(r'title:\s*[\"\']([^\"\']+)[\"\']', l_raw)
        title = title_m.group(1) if title_m else "Exercise"
        
        # prompt from slide 0
        prompt_m = re.search(r'content:\s*[\"\'](.*?)[\"\']\s*\}', l_raw, re.DOTALL)
        prompt = prompt_m.group(1) if prompt_m else ""
        # Clean escaped newlines/quotes
        prompt = prompt.replace('\\n', '\n').replace('\\"', '"')
        
        # extract steps
        steps = re.findall(r'stepText:\s*[\"\'](.*?)[\"\']', l_raw)
        steps_clean = [s.replace('\\n', '\n').replace('\\"', '"') for s in steps]
        
        # approach
        approach_m = re.search(r'title:\s*[\"\'](?:Properties Used|Approach|Strategy)[\"\'],\s*content:\s*[\"\'](.*?)[\"\']', l_raw, re.DOTALL)
        approach = approach_m.group(1).replace('\\n', '\n').replace('\\"', '"') if approach_m else f"Apply definitions and theorems of Section {sec} systematically."
        
        exercises.append({
            "title": title,
            "sec": sec,
            "prompt": prompt,
            "steps": steps_clean,
            "approach": approach
        })
    return exercises

total = 0
all_parsed = []
for f in files:
    exs = extract_from_file(f)
    total += len(exs)
    all_parsed.extend(exs)

print(f"Parsed {total} exercises from {len(files)} files.")
with open("tools/scratch/parsed_2025.json", "w") as out:
    json.dump(all_parsed, out, indent=2)
print("Saved to tools/scratch/parsed_2025.json")
