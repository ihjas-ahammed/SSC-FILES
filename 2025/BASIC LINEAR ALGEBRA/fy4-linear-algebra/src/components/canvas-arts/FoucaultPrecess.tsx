import React, { useEffect, useRef } from 'react';

const FoucaultPrecess: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = 200;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2 + 10;
    
    // Axes
    ctx.beginPath();
    ctx.moveTo(cx - 100, cy); ctx.lineTo(cx + 100, cy);
    ctx.moveTo(cx, cy - 80); ctx.lineTo(cx, cy + 80);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px Arial';
    ctx.fillText('x', cx + 105, cy + 5);
    ctx.fillText('y', cx - 5, cy - 85);

    // Precessed path (dotted)
    const angle = Math.PI / 6; // 30 degrees precession
    const L = 80;
    const p1x = cx + L * Math.cos(angle);
    const p1y = cy - L * Math.sin(angle);
    const p2x = cx - L * Math.cos(angle);
    const p2y = cy + L * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(p2x, p2y);
    ctx.lineTo(p1x, p1y);
    ctx.strokeStyle = '#34d399'; // green dashed
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);

    // Precession arc
    ctx.beginPath();
    ctx.arc(cx, cy, 30, 0, -angle, true);
    ctx.strokeStyle = '#f59e0b';
    ctx.stroke();
    
    // Arrow for arc
    ctx.beginPath();
    ctx.moveTo(cx + 30 * Math.cos(-angle), cy + 30 * Math.sin(-angle));
    ctx.lineTo(cx + 30 * Math.cos(-angle) - 2, cy + 30 * Math.sin(-angle) + 8);
    ctx.lineTo(cx + 30 * Math.cos(-angle) + 8, cy + 30 * Math.sin(-angle) + 2);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();

    ctx.fillStyle = '#fcd34d';
    ctx.fillText('Kt', cx + 35, cy - 10);

    // Pendulum Bob
    const swingDist = 50; 
    const bx = cx + swingDist * Math.cos(angle);
    const by = cy - swingDist * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(bx, by);
    ctx.strokeStyle = '#60a5fa'; // solid blue path to bob
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(bx, by, 6, 0, 2*Math.PI);
    ctx.fillStyle = '#ef4444';
    ctx.fill();

  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default FoucaultPrecess;