import React, { useRef, useEffect, useState } from 'react';

const RankTheoremInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cols, setCols] = useState(5); // n
  const [rank, setRank] = useState(3); // r

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 220;
    canvas.width = width;
    canvas.height = height;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const barHeight = 40;
      const startY = 80;
      const totalWidth = width - 40;
      const startX = 20;

      const unitWidth = totalWidth / cols;

      // Draw Pivot Columns (Rank)
      ctx.fillStyle = '#3b82f6'; // duo-blue
      for (let i = 0; i < rank; i++) {
        ctx.fillRect(startX + i * unitWidth, startY, unitWidth - 4, barHeight);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 12px Nunito';
        ctx.fillText('P', startX + i * unitWidth + unitWidth/2 - 4, startY + 25);
        ctx.fillStyle = '#3b82f6';
      }

      // Draw Free Variables (Nullity)
      ctx.fillStyle = '#ef4444'; // duo-red
      for (let i = rank; i < cols; i++) {
        ctx.fillRect(startX + i * unitWidth, startY, unitWidth - 4, barHeight);
        ctx.fillStyle = '#fff';
        ctx.fillText('F', startX + i * unitWidth + unitWidth/2 - 4, startY + 25);
        ctx.fillStyle = '#ef4444';
      }

      // Labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '14px Nunito';
      ctx.fillText(`Total Columns (n) = ${cols}`, startX, startY - 20);
      
      // Braces or lines
      ctx.strokeStyle = '#3b82f6';
      ctx.beginPath();
      ctx.moveTo(startX, startY + barHeight + 10);
      ctx.lineTo(startX + rank * unitWidth - 4, startY + barHeight + 10);
      ctx.stroke();
      ctx.fillText(`Rank A = ${rank}`, startX, startY + barHeight + 30);

      ctx.strokeStyle = '#ef4444';
      ctx.beginPath();
      ctx.moveTo(startX + rank * unitWidth, startY + barHeight + 10);
      ctx.lineTo(startX + cols * unitWidth - 4, startY + barHeight + 10);
      ctx.stroke();
      ctx.fillText(`dim Nul A = ${cols - rank}`, startX + rank * unitWidth, startY + barHeight + 30);
    };

    draw();
  }, [cols, rank]);

  return (
    <div className="flex flex-col items-center w-full">
      <canvas ref={canvasRef} className="touch-none-canvas mb-4"></canvas>
      <div className="flex gap-4 w-full px-4">
        <div className="flex-1">
            <label className="text-xs text-slate-400 uppercase font-bold">Columns (n): {cols}</label>
            <input 
                type="range" min="2" max="8" value={cols} 
                onChange={(e) => {
                    const n = parseInt(e.target.value);
                    setCols(n);
                    if (rank > n) setRank(n);
                }}
                className="w-full"
            />
        </div>
        <div className="flex-1">
            <label className="text-xs text-slate-400 uppercase font-bold">Rank (r): {rank}</label>
            <input 
                type="range" min="0" max={cols} value={rank} 
                onChange={(e) => setRank(parseInt(e.target.value))}
                className="w-full"
            />
        </div>
      </div>
    </div>
  );
};

export default RankTheoremInteractive;