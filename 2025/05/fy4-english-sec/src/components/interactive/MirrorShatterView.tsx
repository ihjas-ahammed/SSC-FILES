import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const MirrorShatterView: React.FC = () => {
  const [shatter, setShatter] = useState<number>(0);

  // shatter goes from 0 to 100
  const isShattered = shatter > 50;

  const words = [
    { text: "ANGRY", top: "15%", left: "10%", color: "text-red-400", delay: "0s" },
    { text: "INTELLIGENT", top: "25%", left: "55%", color: "text-blue-400", delay: "0.1s" },
    { text: "WITTY", top: "45%", left: "15%", color: "text-purple-400", delay: "0.2s" },
    { text: "KLUTZY", top: "60%", left: "60%", color: "text-orange-400", delay: "0.3s" },
    { text: "ADVENTUROUS", top: "80%", left: "20%", color: "text-green-400", delay: "0.4s" },
    { text: "TALENTED", top: "70%", left: "70%", color: "text-yellow-400", delay: "0.5s" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 select-none touch-none-canvas bg-gradient-to-br from-[#0b0f19] to-slate-900">
      
      <div className="relative w-48 h-64 mb-6 mt-2">
        {/* The Mirror Frame */}
        <div className="absolute inset-0 border-8 border-slate-700 rounded-t-full shadow-2xl bg-gradient-to-tr from-slate-300 to-slate-100 overflow-hidden flex items-center justify-center transition-all duration-500">
          
          {/* Base Reflection (Beautiful) */}
          <div 
            className="text-2xl font-serif text-slate-800 transition-opacity duration-300"
            style={{ opacity: 1 - shatter / 60 }}
          >
            Beautiful
          </div>

          {/* Shatter Lines (SVG) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
            style={{ opacity: shatter / 100 }}
            viewBox="0 0 100 150"
          >
            <path d="M 50 75 L 20 20 M 50 75 L 80 10 M 50 75 L 10 100 M 50 75 L 90 120 M 50 75 L 55 140" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />
            <path d="M 50 75 L 30 0 M 50 75 L 100 50 M 50 75 L 0 60 M 50 75 L 80 150" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" fill="none" />
          </svg>

          {/* New Words Popping Up */}
          {words.map((word, idx) => (
            <div
              key={idx}
              className={`absolute font-black tracking-widest text-[10px] transform transition-all duration-500 ease-out ${word.color}`}
              style={{
                top: word.top,
                left: word.left,
                opacity: shatter > 40 + idx * 5 ? 1 : 0,
                transform: shatter > 40 + idx * 5 ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-10deg)',
                textShadow: '0 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              {word.text}
            </div>
          ))}

          {/* Black overlay simulating shattered glass falling away */}
          <div 
             className="absolute inset-0 bg-[#0b0f19] transition-opacity duration-700 mix-blend-overlay"
             style={{ opacity: shatter > 80 ? 0.8 : 0 }}
          />

        </div>
      </div>

      {/* Slider Controls */}
      <div className="w-full max-w-[200px] flex flex-col items-center z-30">
        <div className="flex items-center gap-2 mb-2 w-full justify-between">
          <Sparkles className="w-4 h-4 text-slate-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Shatter the Standard</span>
          <Sparkles className="w-5 h-5 text-duo-violet" />
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={shatter} 
          onChange={(e) => setShatter(parseInt(e.target.value))}
          className="range-slider w-full"
          style={{ accentColor: '#ce82ff' }}
        />
        <p className="text-[10px] font-medium text-slate-400 mt-4 h-4 transition-opacity text-center">
          {shatter < 30 ? "Society's narrow reflection." : 
           shatter < 70 ? "Breaking the conventional mold..." : 
           "An eternity of other things to be!"}
        </p>
      </div>

    </div>
  );
};

export default MirrorShatterView;