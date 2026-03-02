import React, { useRef, useEffect, useState } from 'react';

const SolidSphereFieldPlot: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rPos, setRPos] = useState(0.5); // 0 to 1 along x-axis

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 250;
    canvas.width = width;
    canvas.height = height;

    const margin = 40;
    const graphWidth = width - 2 * margin;
    const graphHeight = height - 2 * margin;
    
    // Coordinates
    const originX = margin;
    const originY = height - margin;
    const R_pixel = originX + graphWidth / 3; 

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Axes
      ctx.beginPath();
      ctx.moveTo(originX, margin);
      ctx.lineTo(originX, originY); 
      ctx.lineTo(width - margin/2, originY); 
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#fff';
      ctx.font = '14px Nunito';
      ctx.fillText('E', originX - 25, margin + 10);
      ctx.fillText('r', width - margin, originY + 5);
      ctx.fillText('R', R_pixel - 5, originY + 20);

      // Plot
      const E_max_pixel = originY - graphHeight * 0.8;
      
      // Inside: Linear
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(R_pixel, E_max_pixel);
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Outside: 1/r^2
      ctx.beginPath();
      ctx.moveTo(R_pixel, E_max_pixel);
      for (let x = R_pixel; x < width - margin; x += 2) {
          const r_norm = (x - originX) / (R_pixel - originX);
          const y_norm = 1 / (r_norm * r_norm);
          const y = originY - (originY - E_max_pixel) * y_norm;
          ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Dashed line for R
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(R_pixel, originY);
      ctx.lineTo(R_pixel, margin);
      ctx.stroke();
      ctx.setLineDash([]);

      // Interactive Probe
      const probeX = originX + rPos * graphWidth;
      let probeY;
      let isInside = probeX < R_pixel;
      
      if (isInside) {
        const slope = (originY - E_max_pixel) / (R_pixel - originX);
        probeY = originY - slope * (probeX - originX);
      } else {
        const r_norm = (probeX - originX) / (R_pixel - originX);
        const y_norm = 1 / (r_norm * r_norm);
        probeY = originY - (originY - E_max_pixel) * y_norm;
      }

      ctx.beginPath();
      ctx.arc(probeX, probeY, 6, 0, 2*Math.PI);
      ctx.fillStyle = '#ef4444';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.stroke();

      // Label current value
      ctx.fillStyle = '#ef4444';
      ctx.fillText(isInside ? 'E ∝ r' : 'E ∝ 1/r²', probeX + 10, probeY - 10);
    };

    draw();
  }, [rPos]);

  return (
    <div className="flex flex-col items-center w-full">
      <canvas ref={canvasRef} className="touch-none-canvas mb-2" />
      <div className="w-full px-4">
        <label className="text-xs text-slate-400 block mb-1">Probe Position (r)</label>
        <input 
          type="range" min="0" max="1" step="0.01"
          value={rPos}
          onChange={(e) => setRPos(parseFloat(e.target.value))}
          className="w-full accent-red-500"
        />
      </div>
    </div>
  );
};

export default SolidSphereFieldPlot;