import React, { useEffect, useRef } from 'react';

const KeplerOrbits: React.FC = () => {
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
    const cy = canvas.height / 2;
    const a = 80; const b = 60;
    const c = Math.sqrt(a * a - b * b);
    
    ctx.beginPath();
    ctx.ellipse(cx, cy, a, b, 0, 0, 2 * Math.PI);
    ctx.strokeStyle = '#ffffff';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const sunX = cx - c; const sunY = cy;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 14, 0, 2 * Math.PI);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();
    
    const t = Math.PI / 4;
    const planetX = cx + a * Math.cos(t);
    const planetY = cy - b * Math.sin(t);
    
    ctx.beginPath();
    ctx.moveTo(sunX, sunY);
    ctx.lineTo(planetX, planetY);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.setLineDash([]);
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(planetX, planetY, 7, 0, 2 * Math.PI);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export default KeplerOrbits;