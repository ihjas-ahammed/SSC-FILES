import React, { useRef, useEffect, useState } from 'react';

const GaussianPillboxInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [heightFactor, setHeightFactor] = useState(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 250;
    canvas.width = width;
    canvas.height = height;
    const cx = width / 2;
    const cy = height / 2;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Plane Sheet (Perspective parallelogram)
      ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy + 20);
      ctx.lineTo(cx + 60, cy + 20);
      ctx.lineTo(cx + 100, cy - 20);
      ctx.lineTo(cx - 60, cy - 20);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('σ', cx + 80, cy - 10);

      // Pillbox
      const h = 20 + heightFactor * 60; // total height
      const w = 40; // width of pillbox
      
      const px = cx; 
      const py = cy;

      // Draw Back/Hidden Lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(px - w/2, py - h/2); ctx.lineTo(px - w/2, py + h/2);
      ctx.moveTo(px + w/2, py - h/2); ctx.lineTo(px + w/2, py + h/2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Top Cap
      ctx.strokeStyle = '#3b82f6';
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.beginPath();
      ctx.ellipse(px, py - h/2, w/2, w/6, 0, 0, 2*Math.PI);
      ctx.fill();
      ctx.stroke();

      // Bottom Cap
      ctx.beginPath();
      ctx.ellipse(px, py + h/2, w/2, w/6, 0, 0, 2*Math.PI);
      ctx.fill();
      ctx.stroke();

      // Sides (Front)
      ctx.beginPath();
      // approximate cylinder sides for visual
      // Left edge
      // ctx.moveTo(px - w/2, py - h/2); ctx.lineTo(px - w/2, py + h/2);
      // Right edge
      // ctx.moveTo(px + w/2, py - h/2); ctx.lineTo(px + w/2, py + h/2);
      // Actually simpler to draw just the caps and a rectangle
      
      // Electric Field Vectors
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      const arrowLen = 40;

      // Up arrow (Top flux)
      ctx.beginPath();
      ctx.moveTo(px, py - h/2); ctx.lineTo(px, py - h/2 - arrowLen);
      ctx.stroke();
      // Arrowhead
      ctx.beginPath();
      ctx.moveTo(px, py - h/2 - arrowLen);
      ctx.lineTo(px - 3, py - h/2 - arrowLen + 5);
      ctx.lineTo(px + 3, py - h/2 - arrowLen + 5);
      ctx.fillStyle = '#ef4444';
      ctx.fill();

      // Down arrow (Bottom flux)
      ctx.beginPath();
      ctx.moveTo(px, py + h/2); ctx.lineTo(px, py + h/2 + arrowLen);
      ctx.stroke();
      // Arrowhead
      ctx.beginPath();
      ctx.moveTo(px, py + h/2 + arrowLen);
      ctx.lineTo(px - 3, py + h/2 + arrowLen - 5);
      ctx.lineTo(px + 3, py + h/2 + arrowLen - 5);
      ctx.fill();

      ctx.fillText('E', px + 5, py - h/2 - 20);
      ctx.fillText('E', px + 5, py + h/2 + 30);
      
      // Flux Area Label
      ctx.fillStyle = '#3b82f6';
      ctx.fillText('Area A', px + w/2 + 5, py - h/2);

    };

    draw();
  }, [heightFactor]);

  return (
    <div className="flex flex-col items-center w-full">
      <canvas ref={canvasRef} className="touch-none-canvas mb-2" />
      <div className="w-full px-4">
        <label className="text-xs text-slate-400 block mb-1">Pillbox Height ($\epsilon$)</label>
        <input 
          type="range" min="0" max="1" step="0.01"
          value={heightFactor}
          onChange={(e) => setHeightFactor(parseFloat(e.target.value))}
          className="w-full accent-blue-500"
        />
        <p className="text-[10px] text-slate-500 mt-1 text-center">As height $\to 0$, side flux vanishes.</p>
      </div>
    </div>
  );
};

export default GaussianPillboxInteractive;