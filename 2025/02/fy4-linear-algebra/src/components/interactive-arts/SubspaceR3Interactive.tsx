import React, { useRef, useEffect } from 'react';

const SubspaceR3Interactive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const cy = height / 2 + 20;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw 3D Axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      
      // z-axis
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, cy - 100); ctx.stroke();
      ctx.fillStyle = '#94a3b8'; ctx.font = '14px Nunito'; ctx.fillText('z (x3)', cx - 25, cy - 90);
      
      // y-axis
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + 100, cy); ctx.stroke();
      ctx.fillText('y (x2)', cx + 80, cy - 10);
      
      // x-axis
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx - 70, cy + 60); ctx.stroke();
      ctx.fillText('x (x1)', cx - 90, cy + 70);

      // Draw Subspace H (the xy-plane)
      ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.beginPath();
      ctx.moveTo(cx - 70, cy + 60);
      ctx.lineTo(cx + 30, cy + 60);
      ctx.lineTo(cx + 100, cy);
      ctx.lineTo(cx, cy);
      ctx.closePath();
      ctx.fill();
      
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText('H: z = 0', cx + 40, cy + 50);

      // Draw a vector in H
      const vx = cx + 20;
      const vy = cy + 20;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(vx, vy);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // arrowhead
      ctx.beginPath();
      ctx.moveTo(vx, vy);
      ctx.lineTo(vx - 8, vy - 2);
      ctx.lineTo(vx - 2, vy - 8);
      ctx.fillStyle = '#10b981';
      ctx.fill();

      ctx.fillStyle = '#10b981';
      ctx.fillText('v in H', vx + 10, vy + 10);
      
      ctx.fillStyle = '#fff';
      ctx.font = '12px Nunito';
      ctx.fillText('H is a subspace of R³ that acts like R²', cx - 110, cy - 50);
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default SubspaceR3Interactive;