import React, { useRef, useEffect } from 'react';

const SubspaceIntersectionInteractive: React.FC = () => {
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
    const cy = height / 2;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Plane H (xy-plane lookalike)
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy + 20);
      ctx.lineTo(cx + 60, cy + 20);
      ctx.lineTo(cx + 100, cy - 20);
      ctx.lineTo(cx - 60, cy - 20);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#3b82f6';
      ctx.stroke();
      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText('H (Plane)', cx + 80, cy - 30);

      // Draw Plane K (vertical plane)
      ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
      ctx.beginPath();
      ctx.moveTo(cx, cy - 100);
      ctx.lineTo(cx, cy + 100);
      ctx.lineTo(cx - 40, cy + 60);
      ctx.lineTo(cx - 40, cy - 140); // perspective shift
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#ef4444';
      ctx.stroke();
      ctx.fillStyle = '#ef4444';
      ctx.fillText('K (Plane)', cx - 50, cy - 110);

      // Draw Intersection (Line through origin)
      // The intersection of "horizontal" and "vertical" plane is a line
      // Here represented visually
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(cx - 40, cy - 20); // rough approximate
      ctx.lineTo(cx + 40, cy + 20); // line passing through center region
      ctx.stroke();

      // Zero vector
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, 2*Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();

      ctx.fillStyle = '#10b981';
      ctx.fillText('H ∩ K (Line)', cx + 45, cy + 25);
      
      ctx.fillStyle = '#fff';
      ctx.font = '12px Nunito';
      ctx.fillText('Intersection of two planes is a line (subspace)', cx - 110, height - 20);
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default SubspaceIntersectionInteractive;