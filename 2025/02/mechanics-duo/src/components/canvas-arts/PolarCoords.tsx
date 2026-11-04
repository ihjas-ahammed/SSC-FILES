import React, { useEffect, useRef } from 'react';

const PolarCoords: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = 200;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2 - 30;
    const cy = canvas.height / 2 + 30;
    const r = 90;
    const theta = -Math.PI / 4;
    
    ctx.beginPath();
    ctx.moveTo(cx - 20, cy); ctx.lineTo(cx + 120, cy);
    ctx.moveTo(cx, cy + 20); ctx.lineTo(cx, cy - 120);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.stroke();

    const pX = cx + r * Math.cos(theta);
    const pY = cy + r * Math.sin(theta);
    
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(pX, pY);
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 30, theta, 0, false);
    ctx.strokeStyle = '#f59e0b';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(pX, pY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#ef4444';
    ctx.fill();
    
    ctx.fillStyle = '#fff';
    ctx.font = 'italic 16px serif';
    ctx.fillText('θ', cx + 35, cy - 10);
    ctx.fillText('r', cx + 40, cy - 40);
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export default PolarCoords;