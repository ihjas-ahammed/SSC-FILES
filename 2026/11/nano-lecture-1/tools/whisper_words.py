"""Audio -> word timeline. Prints one JSON line: {"words": [[word, start, end], ...], "duration": seconds}.
Used by tools/voice.mjs align (runs inside ~/.cache/explain-3d/venv)."""
import json, subprocess, sys
import numpy as np
from faster_whisper import WhisperModel

pcm = subprocess.run(['ffmpeg', '-v', 'error', '-i', sys.argv[1], '-ac', '1', '-ar', '16000', '-f', 'f32le', '-'],
                     capture_output=True, check=True).stdout
a = np.frombuffer(pcm, dtype=np.float32)
model = WhisperModel('small.en', device='cpu', compute_type='int8')
segs, _ = model.transcribe(a, word_timestamps=True, beam_size=5)
words = [[w.word.strip(), round(w.start, 2), round(w.end, 2)] for s in segs for w in s.words]
print(json.dumps({'words': words, 'duration': len(a) / 16000}))
