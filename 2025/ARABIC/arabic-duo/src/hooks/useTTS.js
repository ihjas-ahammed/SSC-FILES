import { useCallback } from 'react';

export const useTTS = () => {
  const speak = useCallback((text) => {
    if (!('speechSynthesis' in window)) {
      console.warn("Text-to-Speech is not supported in this browser.");
      return;
    }
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel(); 
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA'; // Arabic (Saudi Arabia) gives good classical pronunciation
    utterance.rate = 0.85;    // Slower for learning
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }, []);

  return { speak };
};