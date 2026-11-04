import React, { useState } from 'react';
import { Slide } from '../types';
import MathRenderer from './MathRenderer';
import { playGeminiAudio } from '../utils/audio';
import { BookOpen, Search, Code, Volume2, Loader2 } from 'lucide-react';

interface Props {
  slide: Slide;
  onComplete: () => void;
}

const WordCardView: React.FC<Props> = ({ slide, onComplete }) => {
  const card = slide.wordCard;
  const [playingId, setPlayingId] = useState<string | null>(null);

  if (!card) return null;

  const handleTTS = async (text: string, type: 'word' | 'example') => {
    if (playingId) return;
    setPlayingId(type);
    
    try {
      const prompt = "Read this Arabic text clearly and accurately:";
      await playGeminiAudio(text, prompt);
    } finally {
      setPlayingId(null);
    }
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* FIXED OVERFLOW: Allows long morphology/context blocks to scroll easily */}
      <div className="flex-grow overflow-y-auto no-scrollbar pb-6 px-1 flex flex-col">
        
        <h2 className="text-xl font-black text-white mb-4 text-center tracking-tight shrink-0 mt-4">Word Focus</h2>
        
        <div className="m-auto w-full space-y-4">
          {/* Main Word Section */}
          <div className="glass-panel p-6 rounded-3xl shadow-lg border-2 border-duo-violet/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-duo-violet opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
             
             <div className="flex justify-between items-start mb-2">
               <span className="text-xs font-bold text-duo-violet uppercase tracking-widest">Vocabulary</span>
               <button 
                 onClick={() => handleTTS(card.word, 'word')} 
                 disabled={playingId !== null}
                 className={`p-2 rounded-full transition-all ${playingId === 'word' ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 hover:bg-white/10 active:scale-90 text-slate-300'}`}
               >
                 {playingId === 'word' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Volume2 className="w-4 h-4" />}
               </button>
             </div>
             
             <div className="text-center my-4">
                <h3 className="arabic-text text-5xl font-bold text-white mb-4 drop-shadow-md">{card.word}</h3>
                <p className="text-2xl font-black text-amber-400">{card.translation}</p>
             </div>
          </div>

          {/* Context Section */}
          <div className="glass-panel p-5 rounded-2xl bg-black/20">
            <div className="flex items-center gap-2 mb-2 text-duo-blue">
              <Search className="w-4 h-4" />
              <h4 className="font-bold text-sm uppercase tracking-wider">Context in Ayah</h4>
            </div>
            <div className="text-slate-300 text-sm leading-relaxed">
               <MathRenderer content={card.context} />
            </div>
          </div>

          {/* Example Section */}
          <div className="glass-panel p-5 rounded-2xl bg-black/20">
            <div className="flex items-center justify-between mb-3">
               <div className="flex items-center gap-2 text-duo-green">
                 <BookOpen className="w-4 h-4" />
                 <h4 className="font-bold text-sm uppercase tracking-wider">Example Usage</h4>
               </div>
               <button 
                 onClick={() => handleTTS(card.example, 'example')} 
                 disabled={playingId !== null}
                 className={`transition-all ${playingId === 'example' ? 'text-green-400' : 'text-slate-400 hover:text-white'}`}
               >
                 {playingId === 'example' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Volume2 className="w-4 h-4" />}
               </button>
            </div>
            <p className="arabic-text text-2xl text-white mb-2 text-right">{card.example}</p>
            <p className="text-slate-400 text-sm italic">{card.exampleTranslation}</p>
          </div>

          {/* Morphology Section (if exists) */}
          {card.morphology && (
            <div className="glass-panel p-5 rounded-2xl bg-black/20 border border-slate-700">
              <div className="flex items-center gap-2 mb-2 text-duo-orange">
                <Code className="w-4 h-4" />
                <h4 className="font-bold text-sm uppercase tracking-wider">Word Roots & Forms</h4>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed">
                 <MathRenderer content={card.morphology} />
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="pt-4 border-t border-white/10 shrink-0">
        <button
          onClick={onComplete}
          className="w-full bg-duo-violet border-duo-violet-dark border-b-4 hover:bg-purple-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest transition-all active:border-b-0 active:translate-y-1 shadow-md"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default WordCardView;