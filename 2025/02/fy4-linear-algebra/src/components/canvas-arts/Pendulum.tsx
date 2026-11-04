import React, { useEffect, useRef } from 'react';

const Pendulum: React.FC = () => {
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
    const cy = 20; 
    const l = 120; 
    const theta = Math.PI / 6; 
    
    ctx.beginPath();
    ctx.moveTo(cx - 30, cy); ctx.lineTo(cx + 30, cy);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx, cy); ctx.lineTo(cx, cy + 150);
    ctx.strokeStyle = '#475569';
    ctx.setLineDash([4,4]);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);

    const bX = cx + l * Math.sin(theta);
    const bY = cy + l * Math.cos(theta);

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(bX, bY);
    ctx.strokeStyle = '#f87171';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 40, Math.PI/2 - theta, Math.PI/2, true);
    ctx.strokeStyle = '#f59e0b';
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = 'italic 16px serif';
    ctx.fillText('θ', cx + 10, cy + 50);

    ctx.beginPath();
    ctx.arc(bX, bY, 12, 0, 2 * Math.PI);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export default Pendulum;