import React, { useState } from 'react';

export const renderModule4NumberSystems = (id: string) => {
  switch (id) {
    case 'binary-positional-weights':
      return <BinaryWeightsInteractive />;
    case 'msb-lsb-identifier':
      return <MsbLsbVisual />;
    case 'double-dabble-vis':
      return <DoubleDabbleVisual />;
    case 'fractional-mult-vis':
      return <FractionalMultVisual />;
    case 'hex-circle-diagram':
      return <HexCircleVisual />;
    case 'hex-grouping-visual':
      return <HexGroupingVisual />;
    case 'octal-grouping-visual':
      return <OctalGroupingVisual />;
    case 'bcd-decimal-mapping':
      return <BcdMappingVisual />;
    case 'bcd-vs-binary-visual':
      return <BcdVsBinaryVisual />;
    default:
      return null;
  }
};

const BinaryWeightsInteractive = () => {
  const [bits, setBits] = useState([0, 0, 0, 0]); // 4 bits: 8, 4, 2, 1

  const toggleBit = (index: number) => {
    const newBits = [...bits];
    newBits[index] = newBits[index] === 0 ? 1 : 0;
    setBits(newBits);
  };

  const calculateDecimal = () => {
    return bits[0] * 8 + bits[1] * 4 + bits[2] * 2 + bits[3] * 1;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 gap-6">
      <div className="flex gap-2">
        {bits.map((bit, index) => {
          const power = 3 - index;
          const weight = Math.pow(2, power);
          return (
            <div key={index} className="flex flex-col items-center gap-1">
              <span className="text-[10px] text-slate-400 font-mono">2^{power}</span>
              <span className="text-xs text-blue-400 font-bold mb-1">({weight})</span>
              <button
                onClick={() => toggleBit(index)}
                className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-2xl font-black transition-all ${
                  bit === 1
                    ? 'bg-blue-500 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'bg-slate-800 border-slate-600 text-slate-500'
                }`}
              >
                {bit}
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2 bg-slate-900/50 px-6 py-3 rounded-2xl border border-white/10">
        <span className="text-slate-400 text-sm uppercase tracking-widest font-bold">Decimal:</span>
        <span className="text-2xl font-black text-yellow-400">{calculateDecimal()}</span>
      </div>
    </div>
  );
};

const MsbLsbVisual = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <div className="flex items-center gap-1 mb-8">
        <div className="flex flex-col items-center relative group">
          <div className="w-10 h-12 bg-purple-900/40 border-2 border-purple-500 rounded flex items-center justify-center text-xl font-bold text-white relative z-10">
            1
          </div>
          <div className="absolute -top-8 bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded animate-bounce">
            MSB
          </div>
          <div className="absolute -bottom-6 text-[10px] text-purple-300">Most Weight</div>
        </div>
        <div className="w-10 h-12 bg-slate-800/40 border border-slate-700 rounded flex items-center justify-center text-xl font-bold text-slate-500">0</div>
        <div className="w-10 h-12 bg-slate-800/40 border border-slate-700 rounded flex items-center justify-center text-xl font-bold text-slate-500">0</div>
        <div className="flex flex-col items-center relative group">
          <div className="w-10 h-12 bg-green-900/40 border-2 border-green-500 rounded flex items-center justify-center text-xl font-bold text-white relative z-10">
            1
          </div>
          <div className="absolute -top-8 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded animate-bounce" style={{ animationDelay: '0.5s' }}>
            LSB
          </div>
          <div className="absolute -bottom-6 text-[10px] text-green-300">Least Weight</div>
        </div>
      </div>
      <p className="text-xs text-slate-400 text-center max-w-[200px]">
        MSB has the highest positional value.<br/>LSB has the lowest ($2^0=1$).
      </p>
    </div>
  );
};

const DoubleDabbleVisual = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2">
      <div className="grid grid-cols-4 gap-x-2 gap-y-2 text-sm w-full max-w-[280px]">
        {/* Header */}
        <div className="col-span-2 text-slate-400 border-b border-slate-600 pb-1">Div by 2</div>
        <div className="text-slate-400 border-b border-slate-600 pb-1 text-center">Rem</div>
        <div className="text-slate-400 border-b border-slate-600 pb-1 text-center">Bit</div>

        {/* Row 1 */}
        <div className="col-span-2 flex justify-between px-2 bg-slate-800/50 rounded">
          <span>13</span> <span>÷ 2 = 6</span>
        </div>
        <div className="text-center font-bold text-yellow-400 bg-yellow-900/20 rounded">1</div>
        <div className="text-[10px] flex items-center justify-center text-slate-500">LSB</div>

        {/* Row 2 */}
        <div className="col-span-2 flex justify-between px-2 bg-slate-800/50 rounded">
          <span>6</span> <span>÷ 2 = 3</span>
        </div>
        <div className="text-center font-bold text-slate-200 bg-slate-700/30 rounded">0</div>
        <div className="text-[10px]"></div>

        {/* Row 3 */}
        <div className="col-span-2 flex justify-between px-2 bg-slate-800/50 rounded">
          <span>3</span> <span>÷ 2 = 1</span>
        </div>
        <div className="text-center font-bold text-yellow-400 bg-yellow-900/20 rounded">1</div>
        <div className="text-[10px]"></div>

        {/* Row 4 */}
        <div className="col-span-2 flex justify-between px-2 bg-slate-800/50 rounded">
          <span>1</span> <span>÷ 2 = 0</span>
        </div>
        <div className="text-center font-bold text-yellow-400 bg-yellow-900/20 rounded">1</div>
        <div className="text-[10px] flex items-center justify-center text-purple-400 font-bold">MSB</div>
      </div>
      
      <div className="absolute right-4 top-1/2 h-32 w-1 bg-gradient-to-t from-purple-500 to-slate-700 rounded-full"></div>
      <div className="absolute right-2 top-[30%] text-[10px] text-purple-400 rotate-90 origin-left">Read Up</div>
    </div>
  );
};

const FractionalMultVisual = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2">
      <div className="grid grid-cols-3 gap-x-2 gap-y-2 text-sm w-full max-w-[280px]">
        {/* Header */}
        <div className="col-span-2 text-slate-400 border-b border-slate-600 pb-1">Mult by 2</div>
        <div className="text-slate-400 border-b border-slate-600 pb-1 text-center">Integer</div>

        {/* Row 1 */}
        <div className="col-span-2 flex justify-between px-2 bg-slate-800/50 rounded">
          <span>0.625</span> <span>× 2 = 1.25</span>
        </div>
        <div className="text-center font-bold text-purple-400 bg-purple-900/20 rounded border border-purple-500/50">1</div>

        {/* Row 2 */}
        <div className="col-span-2 flex justify-between px-2 bg-slate-800/50 rounded">
          <span>0.25</span> <span>× 2 = 0.50</span>
        </div>
        <div className="text-center font-bold text-slate-200 bg-slate-700/30 rounded">0</div>

        {/* Row 3 */}
        <div className="col-span-2 flex justify-between px-2 bg-slate-800/50 rounded">
          <span>0.50</span> <span>× 2 = 1.00</span>
        </div>
        <div className="text-center font-bold text-yellow-400 bg-yellow-900/20 rounded border border-yellow-500/50">1</div>
      </div>
      
      <div className="flex items-center gap-2 mt-4 text-lg">
        <span className="text-slate-400">Result: </span>
        <span className="font-mono font-black tracking-widest">
          0.<span className="text-purple-400">1</span><span className="text-white">0</span><span className="text-yellow-400">1</span>
        </span>
      </div>
      <div className="text-[10px] text-slate-500 mt-1">Read Downwards</div>
    </div>
  );
};

const HexCircleVisual = () => {
  const digits = "0123456789ABCDEF".split('');
  return (
    <div className="flex items-center justify-center w-full h-full p-4 relative">
      <div className="w-48 h-48 rounded-full border-2 border-slate-600 relative">
        {digits.map((d, i) => {
          const angle = (i * (360 / 16)) - 90;
          const radius = 80;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          const isLetter = i >= 10;
          
          return (
            <div 
              key={d} 
              className={`absolute w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold transform -translate-x-1/2 -translate-y-1/2
                ${isLetter ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400'}
              `}
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
            >
              {d}
            </div>
          );
        })}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
           <span className="text-indigo-400 font-black text-2xl">16</span>
           <span className="text-slate-500 text-[10px] uppercase tracking-widest">Radix</span>
        </div>
      </div>
    </div>
  );
};

const HexGroupingVisual = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2">
       <div className="flex gap-2">
          {/* Group 2 */}
          <div className="flex flex-col items-center">
             <div className="flex gap-1 bg-slate-800 p-2 rounded-t-xl border-b-2 border-indigo-500">
                <span className="w-4 text-center">1</span>
                <span className="w-4 text-center">1</span>
                <span className="w-4 text-center">0</span>
                <span className="w-4 text-center">1</span>
             </div>
             <div className="bg-indigo-900/30 w-full p-2 rounded-b-xl text-center border-x border-b border-indigo-500/30">
                <span className="text-xl font-black text-indigo-400">D</span>
                <div className="text-[8px] text-slate-400">(13)</div>
             </div>
          </div>
          
          {/* Group 1 */}
          <div className="flex flex-col items-center">
             <div className="flex gap-1 bg-slate-800 p-2 rounded-t-xl border-b-2 border-purple-500">
                <span className="w-4 text-center">1</span>
                <span className="w-4 text-center">0</span>
                <span className="w-4 text-center">1</span>
                <span className="w-4 text-center">0</span>
             </div>
             <div className="bg-purple-900/30 w-full p-2 rounded-b-xl text-center border-x border-b border-purple-500/30">
                <span className="text-xl font-black text-purple-400">A</span>
                <div className="text-[8px] text-slate-400">(10)</div>
             </div>
          </div>
       </div>
       <div className="mt-4 text-xs text-slate-400">Groups of 4 bits</div>
    </div>
  );
};

const OctalGroupingVisual = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2">
       <div className="flex gap-2">
          <div className="text-slate-500 text-sm py-4">0.</div>
          {/* Group 1 */}
          <div className="flex flex-col items-center">
             <div className="flex gap-1 bg-slate-800 p-2 rounded-t-xl border-b-2 border-green-500">
                <span className="w-4 text-center">1</span>
                <span className="w-4 text-center">0</span>
                <span className="w-4 text-center">1</span>
             </div>
             <div className="w-full text-center py-1">
                <span className="text-lg font-bold text-green-400">5</span>
             </div>
          </div>
          
          {/* Group 2 */}
          <div className="flex flex-col items-center">
             <div className="flex gap-1 bg-slate-800 p-2 rounded-t-xl border-b-2 border-teal-500">
                <span className="w-4 text-center">0</span>
                <span className="w-4 text-center">1</span>
                <span className="w-4 text-center">0</span>
             </div>
             <div className="w-full text-center py-1">
                <span className="text-lg font-bold text-teal-400">2</span>
             </div>
          </div>

          {/* Group 3 */}
          <div className="flex flex-col items-center">
             <div className="flex gap-1 bg-slate-800 p-2 rounded-t-xl border-b-2 border-cyan-500">
                <span className="w-4 text-center">1</span>
                <span className="w-4 text-center">1</span>
                <span className="w-4 text-center">0</span>
             </div>
             <div className="w-full text-center py-1">
                <span className="text-lg font-bold text-cyan-400">6</span>
             </div>
          </div>
       </div>
       <div className="mt-4 text-xs text-slate-400">Groups of 3 bits</div>
    </div>
  );
};

const BcdMappingVisual = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-4">
       <div className="flex items-center gap-4">
          <div className="w-16 h-16 border-2 border-slate-600 rounded-xl flex items-center justify-center bg-slate-800">
             <span className="text-3xl font-black text-white">9</span>
          </div>
          <div className="text-xl text-slate-500">&rarr;</div>
          <div className="flex gap-1">
             <div className="w-8 h-10 border border-slate-500 rounded bg-slate-900 flex items-center justify-center text-sm font-bold text-yellow-400">1</div>
             <div className="w-8 h-10 border border-slate-500 rounded bg-slate-900 flex items-center justify-center text-sm font-bold text-slate-500">0</div>
             <div className="w-8 h-10 border border-slate-500 rounded bg-slate-900 flex items-center justify-center text-sm font-bold text-slate-500">0</div>
             <div className="w-8 h-10 border border-slate-500 rounded bg-slate-900 flex items-center justify-center text-sm font-bold text-yellow-400">1</div>
          </div>
       </div>
       
       <div className="flex items-center gap-4 opacity-50">
          <div className="w-16 h-16 border-2 border-slate-700 rounded-xl flex items-center justify-center bg-slate-900">
             <span className="text-3xl font-black text-slate-500">5</span>
          </div>
          <div className="text-xl text-slate-700">&rarr;</div>
          <div className="flex gap-1">
             <div className="w-8 h-10 border border-slate-700 rounded bg-black flex items-center justify-center text-xs text-slate-600">0</div>
             <div className="w-8 h-10 border border-slate-700 rounded bg-black flex items-center justify-center text-xs text-slate-400">1</div>
             <div className="w-8 h-10 border border-slate-700 rounded bg-black flex items-center justify-center text-xs text-slate-600">0</div>
             <div className="w-8 h-10 border border-slate-700 rounded bg-black flex items-center justify-center text-xs text-slate-400">1</div>
          </div>
       </div>
    </div>
  );
};

const BcdVsBinaryVisual = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2">
       <div className="text-2xl font-black text-white mb-6">Decimal 12</div>
       
       <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
          <div className="flex flex-col items-center">
             <span className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-2">Binary</span>
             <div className="bg-blue-900/20 border border-blue-500/50 px-4 py-2 rounded-lg">
                <span className="font-mono text-xl">1100</span>
             </div>
             <span className="text-[10px] text-slate-500 mt-1">Efficient</span>
          </div>
          
          <div className="flex flex-col items-center">
             <span className="text-xs text-green-400 font-bold uppercase tracking-widest mb-2">BCD</span>
             <div className="flex gap-2">
                <div className="bg-green-900/20 border border-green-500/50 px-2 py-2 rounded-lg">
                   <span className="font-mono text-sm block text-center mb-1 text-slate-400">1</span>
                   <span className="font-mono text-lg">0001</span>
                </div>
                <div className="bg-green-900/20 border border-green-500/50 px-2 py-2 rounded-lg">
                   <span className="font-mono text-sm block text-center mb-1 text-slate-400">2</span>
                   <span className="font-mono text-lg">0010</span>
                </div>
             </div>
             <span className="text-[10px] text-slate-500 mt-1">Separated Digits</span>
          </div>
       </div>
    </div>
  );
};