import React, { useState } from 'react';

const FunctionDefinitionCanvas: React.FC = () => {
  const [isValid, setIsValid] = useState(true);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center p-2">
       <button 
          onClick={() => setIsValid(!isValid)}
          className={`mb-4 px-4 py-2 rounded-xl font-bold text-sm text-white transition-all active:scale-95 ${isValid ? 'bg-duo-green border-b-4 border-duo-green-dark' : 'bg-duo-red border-b-4 border-duo-red-dark'}`}
       >
         {isValid ? 'Status: Valid Function' : 'Status: Invalid (Not a function)'}
       </button>

       <svg viewBox="0 0 300 150" className="w-full max-w-[300px]">
          {/* Domain Oval */}
          <ellipse cx="60" cy="75" rx="35" ry="60" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <text x="60" y="15" textAnchor="middle" className="fill-slate-400 text-[10px] font-bold">Domain A</text>

          {/* Range Oval */}
          <ellipse cx="240" cy="75" rx="35" ry="60" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <text x="240" y="15" textAnchor="middle" className="fill-slate-400 text-[10px] font-bold">Range B</text>

          {/* Nodes Domain */}
          <circle cx="60" cy="40" r="5" className="fill-blue-400" />
          <circle cx="60" cy="75" r="5" className={`transition-colors ${!isValid ? 'fill-red-400' : 'fill-blue-400'}`} />
          <circle cx="60" cy="110" r="5" className="fill-blue-400" />

          {/* Nodes Range */}
          <circle cx="240" cy="55" r="5" className="fill-green-400" />
          <circle cx="240" cy="95" r="5" className="fill-green-400" />

          {/* Arrows */}
          <defs>
             <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#94a3b8" />
             </marker>
             <marker id="arrowheadRed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#ff4b4b" />
             </marker>
          </defs>

          {/* Valid lines */}
          <line x1="68" y1="40" x2="232" y2="55" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="68" y1="110" x2="232" y2="95" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* The contested line */}
          {isValid ? (
             <line x1="68" y1="75" x2="232" y2="95" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
          ) : (
             <>
               <line x1="68" y1="75" x2="232" y2="55" stroke="#ff4b4b" strokeWidth="2" markerEnd="url(#arrowheadRed)" className="animate-pulse" />
               <line x1="68" y1="75" x2="232" y2="95" stroke="#ff4b4b" strokeWidth="2" markerEnd="url(#arrowheadRed)" className="animate-pulse" />
             </>
          )}
       </svg>
    </div>
  );
};

export default FunctionDefinitionCanvas;