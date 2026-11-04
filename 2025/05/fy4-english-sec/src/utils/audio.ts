
/**
 * Parses bits per sample and rate from an audio MIME type string.
 * Example: "audio/L16;rate=24000" -> { bitsPerSample: 16, rate: 24000 }
 */
const parseAudioMimeType = (mimeType: string) => {
  let bitsPerSample = 16;
  let rate = 24000;

  const parts = mimeType.split(";");
  for (let param of parts) {
    param = param.trim();
    if (param.toLowerCase().startsWith("rate=")) {
      const rateStr = param.split("=")[1];
      const parsedRate = parseInt(rateStr, 10);
      if (!isNaN(parsedRate)) rate = parsedRate;
    } else if (param.startsWith("audio/L")) {
      const bitsStr = param.substring(7);
      const parsedBits = parseInt(bitsStr, 10);
      if (!isNaN(parsedBits)) bitsPerSample = parsedBits;
    } else if (param === "audio/pcm") {
       bitsPerSample = 16; // default for basic pcm
    }
  }

  return { bitsPerSample, rate };
};

/**
 * Generates a WAV file header for the given raw PCM data and creates a playable Blob URL.
 */
const createWavUrl = (base64Pcm: string, sampleRate: number, bitsPerSample: number): string => {
  // Decode base64 to binary string
  const binaryString = atob(base64Pcm);
  const dataSize = binaryString.length;
  
  // Create an array buffer holding the 44-byte WAV header + the PCM data
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  const numChannels = 1;
  const bytesPerSample = bitsPerSample / 8;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const chunkSize = 36 + dataSize; // 36 bytes for header fields after ChunkSize

  // RIFF chunk descriptor
  writeString(0, 'RIFF');
  view.setUint32(4, chunkSize, true);
  writeString(8, 'WAVE');
  
  // fmt sub-chunk
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);             // Subchunk1Size (16 for PCM)
  view.setUint16(20, 1, true);              // AudioFormat (1 for PCM)
  view.setUint16(22, numChannels, true);    // NumChannels
  view.setUint32(24, sampleRate, true);     // SampleRate
  view.setUint32(28, byteRate, true);       // ByteRate
  view.setUint16(32, blockAlign, true);     // BlockAlign
  view.setUint16(34, bitsPerSample, true);  // BitsPerSample
  
  // data sub-chunk
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);       // Subchunk2Size

  // Write PCM data payload
  const audioData = new Uint8Array(buffer, 44);
  for (let i = 0; i < dataSize; i++) {
    audioData[i] = binaryString.charCodeAt(i);
  }

  // Create playable Blob URL
  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
};

const stripMarkdownForTTS = (text: string): string =>
  text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/#{1,6}\s+/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\$\$?[^$]+\$\$?/g, '')  // strip math
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const splitIntoSentences = (text: string): string[] =>
  (text.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) ?? [])
    .map(s => s.trim())
    .filter(s => s.length > 5);

const fetchAudioUrl = async (text: string, prompt: string): Promise<string | null> => {
  const apiKey = "AIzaSyAT2oFfKW8mfPT8iP-SetxXfeFdwfFi0ro";
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: `${prompt}\n\n${text}` }] }],
          generationConfig: {
            temperature: 0.7,
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
            },
          },
        }),
      }
    );
    const data = await response.json();
    if (!response.ok) return null;
    const inlineData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData;
    if (!inlineData?.data) return null;
    const mimeType: string = inlineData.mimeType || 'audio/pcm;rate=24000';
    if (mimeType.includes('audio/pcm') || mimeType.includes('audio/L') || mimeType.includes('rate=')) {
      const { bitsPerSample, rate } = parseAudioMimeType(mimeType);
      return createWavUrl(inlineData.data, rate, bitsPerSample);
    }
    return `data:${mimeType};base64,${inlineData.data}`;
  } catch {
    return null;
  }
};

export interface TtsHandle {
  stopped: boolean;
  currentAudio?: HTMLAudioElement;
}

export const playTextAsync = async (
  text: string,
  prompt: string,
  handle: TtsHandle
): Promise<void> => {
  const sentences = splitIntoSentences(stripMarkdownForTTS(text));
  if (sentences.length === 0) return;

  // Kick off all fetches concurrently so later sentences are ready while earlier ones play
  const urlPromises = sentences.map(s => fetchAudioUrl(s, prompt));

  for (const urlPromise of urlPromises) {
    if (handle.stopped) break;
    const url = await urlPromise;
    if (!url || handle.stopped) { if (url) URL.revokeObjectURL(url); continue; }

    await new Promise<void>(resolve => {
      if (handle.stopped) { URL.revokeObjectURL(url); resolve(); return; }
      const audio = new Audio(url);
      handle.currentAudio = audio;
      const done = () => { URL.revokeObjectURL(url); handle.currentAudio = undefined; resolve(); };
      audio.onended = done;
      audio.onerror = done;
      audio.play().catch(done);
    });
  }
};

export const playGeminiAudio = async (text: string, prompt: string): Promise<void> => {
  const apiKey = "AIzaSyAT2oFfKW8mfPT8iP-SetxXfeFdwfFi0ro";
  
  if (!text) return;

  try {
    // Calling the model with TTS generation configurations
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents:[
          {
            role: "user",
            parts: [{ text: `${prompt}\n\n${text}` }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                // "Aoede", "Charon", "Fenrir", "Kore", "Puck", "Zephyr"
                voiceName: "Zephyr" 
              }
            }
          }
        }
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
        console.error("API Error generating audio:", data);
        return;
    }

    const inlineData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData;
    
    if (inlineData && inlineData.data) {
      const base64Audio = inlineData.data;
      const mimeType = inlineData.mimeType || "audio/pcm;rate=24000";
      
      let audioUrl = '';

      // Check if it's raw PCM/L16 and needs a WAV header for browser playback
      if (mimeType.includes('audio/pcm') || mimeType.includes('audio/L') || mimeType.includes('rate=')) {
        const { bitsPerSample, rate } = parseAudioMimeType(mimeType);
        audioUrl = createWavUrl(base64Audio, rate, bitsPerSample);
      } else {
        // Fallback for native formats (if Gemini ever returns standard mp3/wav directly)
        audioUrl = `data:${mimeType};base64,${base64Audio}`;
      }

      const audio = new Audio(audioUrl);
      
      await new Promise<void>((resolve, reject) => {
        audio.onended = () => {
          URL.revokeObjectURL(audioUrl); // Clean up memory
          resolve();
        };
        audio.onerror = (e) => {
          URL.revokeObjectURL(audioUrl);
          reject(e);
        };
        audio.play();
      });
      
    } else {
      console.error("No audio data returned from Gemini", data);
    }
  } catch (error) {
    console.error("Error playing Gemini audio:", error);
  }
};