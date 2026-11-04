import React, { useRef, useEffect, useState } from 'react';

const GaussianCylinderInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [radius, setRadius] = useState(0.5); // 0 to 1

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 280;
    canvas.width = width;
    canvas.height = height;
    const cx = width / 2;
    const cy = height / 2;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Infinite Line Charge
      ctx.beginPath();
      ctx.moveTo(cx, 20);
      ctx.lineTo(cx, height - 20);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 4;
      ctx.stroke();
      
      // Charge signs
      ctx.fillStyle = '#f59e0b';
      ctx.font = '14px Arial';
      for(let y=40; y<height-20; y+=40) ctx.fillText('+', cx + 6, y);
      ctx.fillText('λ', cx + 10, 30);

      // Gaussian Cylinder dimensions
      const s = 30 + radius * 80;
      const h = 120;
      const topY = cy - h/2;
      const botY = cy + h/2;

      // Draw Cylinder (Back)
      ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 1;
      
      // Top Ellipse Back
      ctx.beginPath();
      ctx.ellipse(cx, topY, s, s/4, 0, Math.PI, 2*Math.PI);
      ctx.stroke();
      
      // Bottom Ellipse Back
      ctx.beginPath();
      ctx.ellipse(cx, botY, s, s/4, 0, Math.PI, 2*Math.PI);
      ctx.stroke();
      ctx.fill(); // faint fill

      // Cylinder Sides
      ctx.beginPath();
      ctx.moveTo(cx - s, topY); ctx.lineTo(cx - s, botY);
      ctx.moveTo(cx + s, topY); ctx.lineTo(cx + s, botY);
      ctx.stroke();

      // Field Vectors E
      // E = lambda / 2 pi eps s
      // Visual length inversely prop to s
      const arrowLen = 600 / s; 
      
      ctx.strokeStyle = '#ef4444';
      ctx.fillStyle = '#ef4444';
      ctx.lineWidth = 2;

      const drawArrow = (x:number, y:number, dir: number) => {
        const ex = x + dir * arrowLen;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(ex, y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ex, y); 
        ctx.lineTo(ex - dir*5, y-3); ctx.lineTo(ex - dir*5, y+3); ctx.fill();
      };

      // Draw arrows on the surface
      drawArrow(cx + s, cy, 1);
      drawArrow(cx - s, cy, -1);
      drawArrow(cx + s, cy - h/3, 1);
      drawArrow(cx - s, cy + h/3, -1);

      // Draw Cylinder (Front) to create 3D effect
      ctx.beginPath();
      ctx.ellipse(cx, topY, s, s/4, 0, 0, Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx, botY, s, s/4, 0, 0, Math.PI);
      ctx.stroke();

      // Labels
      ctx.fillStyle = '#3b82f6';
      ctx.fillText(`s`, cx + s/2, topY - 5);
      ctx.fillText(`L`, cx + s + 10, cy);
      ctx.fillStyle = '#ef4444';
      ctx.fillText(`E`, cx + s + arrowLen + 5, cy);
    };

    draw();
  }, [radius]);

  return (
    <div className="flex flex-col items-center w-full">
      <canvas ref={canvasRef} className="touch-none-canvas mb-2" />
      <div className="w-full px-4">
        <label className="text-xs text-slate-400 block mb-1">Gaussian Surface Radius (s)</label>
        <input 
          type="range" min="0" max="1" step="0.01"
          value={radius}
          onChange={(e) => setRadius(parseFloat(e.target.value))}
          className="w-full accent-blue-500"
        />
      </div>
    </div>
  );
};

export default GaussianCylinderInteractive;