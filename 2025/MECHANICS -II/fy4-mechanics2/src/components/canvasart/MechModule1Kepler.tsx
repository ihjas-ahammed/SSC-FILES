import React, { useState, useEffect } from 'react';

export const renderMechModule1Kepler = (id: string) => {
  switch (id) {
    case 'kepler-brahe-data':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
           <svg className="w-full h-full" viewBox="0 0 200 100">
              <circle cx="100" cy="50" r="40" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
              <circle cx="100" cy="50" r="5" fill="#facc15" /> {/* Sun */}
              
              {/* Brahe's Data Points ( scattered slightly off a perfect circle ) */}
              <circle cx="140" cy="50" r="1.5" fill="#60a5fa" className="animate-pulse" />
              <circle cx="128" cy="78" r="1.5" fill="#60a5fa" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
              <circle cx="100" cy="92" r="1.5" fill="#60a5fa" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
              <circle cx="70" cy="78" r="1.5" fill="#60a5fa" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
              <circle cx="58" cy="50" r="1.5" fill="#60a5fa" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
              
              {/* Kepler's Ellipse fitting the data */}
              <ellipse cx="95" cy="50" rx="45" ry="38" fill="none" stroke="#4ade80" strokeWidth="2" opacity="0">
                 <animate attributeName="opacity" values="0;1;1" dur="4s" repeatCount="indefinite" />
              </ellipse>
           </svg>
           <p className="absolute bottom-2 text-[10px] text-green-400 font-bold">Data (Blue) {"->"} Elliptical Synthesis (Green)</p>
        </div>
      );

    case 'platonic-solids-model':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <div className="relative w-32 h-32 flex items-center justify-center animate-spin-slow" style={{ transformStyle: 'preserve-3d' }}>
              {/* Outer Sphere */}
              <div className="absolute w-32 h-32 rounded-full border border-white/20"></div>
              {/* Inner Cube (simplified as square) */}
              <div className="absolute w-20 h-20 border-2 border-blue-400 rotate-45"></div>
              {/* Inner Sphere */}
              <div className="absolute w-14 h-14 rounded-full border border-white/40"></div>
              {/* Inner Tetrahedron (triangle) */}
              <div className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[34px] border-b-purple-400"></div>
              {/* Sun */}
              <div className="absolute w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_yellow]"></div>
           </div>
           <p className="absolute bottom-2 text-[10px] text-slate-400 text-center">Nested "Perfect" Solids <br/>(Beautiful Theory, Discarded by Data)</p>
        </div>
      );

    case 'circle-to-ellipse':
      return (
        <div className="flex items-center justify-center w-full h-full relative">
           <svg className="w-full h-full" viewBox="0 0 200 100">
              <circle cx="100" cy="50" r="5" fill="#facc15" /> {/* Sun */}
              
              <ellipse cx="100" cy="50" rx="40" ry="40" fill="none" stroke="#4ade80" strokeWidth="2">
                 <animate attributeName="rx" values="40; 60; 40" dur="4s" repeatCount="indefinite" />
                 <animate attributeName="cx" values="100; 80; 100" dur="4s" repeatCount="indefinite" />
              </ellipse>
              <text x="10" y="20" fill="#4ade80" fontSize="10">Circle to Ellipse</text>
           </svg>
        </div>
      );

    case 'kepler-first-law':
      return (
         <div className="flex items-center justify-center w-full h-full relative">
            <svg className="w-full h-full" viewBox="0 0 200 100">
               {/* Foci */}
               <circle cx="70" cy="50" r="4" fill="#facc15" shadow="0 0 5px yellow" />
               <text x="65" y="65" fill="#facc15" fontSize="8">Sun</text>
               <circle cx="130" cy="50" r="2" fill="#475569" />
               <text x="115" y="65" fill="#475569" fontSize="8">Empty Focus</text>
               
               {/* Ellipse */}
               <ellipse cx="100" cy="50" rx="70" ry="45" fill="none" stroke="#60a5fa" strokeWidth="2" />
               
               {/* Planet */}
               <circle cx="0" cy="0" r="3" fill="#38bdf8">
                  <animateMotion dur="5s" repeatCount="indefinite" path="M 170 50 A 70 45 0 1 0 30 50 A 70 45 0 1 0 170 50" />
               </circle>
            </svg>
         </div>
      );

    case 'kepler-second-law':
      return (
         <div className="flex items-center justify-center w-full h-full relative">
            <svg className="w-full h-full" viewBox="0 0 200 100">
               <ellipse cx="100" cy="50" rx="70" ry="45" fill="none" stroke="#334155" strokeWidth="1" />
               <circle cx="70" cy="50" r="4" fill="#facc15" />
               
               {/* Area 1 (Perihelion - fast, wide angle, short radius) */}
               <path d="M 70 50 L 30 50 A 70 45 0 0 1 40 26 Z" fill="rgba(74, 222, 128, 0.4)" stroke="#4ade80" strokeWidth="1" />
               <text x="35" y="45" fill="#4ade80" fontSize="8">Area A</text>
               
               {/* Area 2 (Aphelion - slow, narrow angle, long radius) */}
               <path d="M 70 50 L 165 33 A 70 45 0 0 1 165 67 Z" fill="rgba(192, 132, 252, 0.4)" stroke="#c084fc" strokeWidth="1" />
               <text x="135" y="52" fill="#c084fc" fontSize="8">Area B</text>

               <text x="80" y="10" fill="white" fontSize="10" fontWeight="bold">Area A = Area B</text>
            </svg>
         </div>
      );

    case 'kepler-third-law':
       return (
          <div className="flex items-center justify-center w-full h-full relative">
             <svg className="w-full h-full" viewBox="0 0 200 100">
                <circle cx="50" cy="50" r="4" fill="#facc15" />
                
                {/* Inner Orbit */}
                <ellipse cx="80" cy="50" rx="40" ry="25" fill="none" stroke="#60a5fa" strokeWidth="1" />
                <circle cx="0" cy="0" r="2.5" fill="#60a5fa">
                   <animateMotion dur="2s" repeatCount="indefinite" path="M 120 50 A 40 25 0 1 0 40 50 A 40 25 0 1 0 120 50" />
                </circle>

                {/* Outer Orbit */}
                <ellipse cx="110" cy="50" rx="75" ry="45" fill="none" stroke="#f87171" strokeWidth="1" />
                <circle cx="0" cy="0" r="3.5" fill="#f87171">
                   <animateMotion dur="5.19s" repeatCount="indefinite" path="M 185 50 A 75 45 0 1 0 35 50 A 75 45 0 1 0 185 50" />
                </circle>

                <text x="10" y="15" fill="#60a5fa" fontSize="8">Inner: Small a, Fast T</text>
                <text x="10" y="85" fill="#f87171" fontSize="8">Outer: Large a, Slow T</text>
             </svg>
          </div>
       );

    default:
      return null;
  }
};