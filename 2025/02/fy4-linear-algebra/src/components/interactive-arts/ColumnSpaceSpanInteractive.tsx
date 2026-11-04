import React, { useRef, useEffect } from 'react';

const ColumnSpaceSpanInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 300;
    canvas.width = width;
    canvas.height = height;
    
    const cx = width / 2;
    const cy = height / 2 + 30;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, cy - 100); ctx.stroke(); // z
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + 100, cy); ctx.stroke(); // y
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx - 70, cy + 60); ctx.stroke(); // x

      // Matrix A = [a1 a2]
      // a1 = [1, 0, 1]^T -> Visually (right, up)
      // a2 = [0, 1, 1]^T -> Visually (left/fwd, up)

      const a1 = { x: 60, y: -60 };
      const a2 = { x: -40, y: -50 };

      // Draw Plane (Col A)
      ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + a1.x, cy + a1.y);
      ctx.lineTo(cx + a1.x + a2.x, cy + a1.y + a2.y);
      ctx.lineTo(cx + a2.x, cy + a2.y);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.stroke();

      // Draw Column Vectors
      const drawVec = (vx: number, vy: number, color: string, label: string) => {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + vx, cy + vy);
          ctx.strokeStyle = color;
          ctx.lineWidth = 3;
          ctx.stroke();
          // Arrowhead logic omitted for simplicity in static render
          ctx.fillStyle = color;
          ctx.fillText(label, cx + vx + 10, cy + vy);
      };

      drawVec(a1.x, a1.y, '#f59e0b', 'a1');
      drawVec(a2.x, a2.y, '#3b82f6', 'a2');

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px Nunito';
      ctx.fillText('Col A = Span{a1, a2}', cx - 60, height - 30);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText('A 2D plane in R³', cx - 40, height - 15);
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default ColumnSpaceSpanInteractive;