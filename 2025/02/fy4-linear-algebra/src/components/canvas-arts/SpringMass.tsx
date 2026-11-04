import React, { useEffect, useRef } from 'react';

const SpringMass: React.FC = () => {
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
    
    ctx.beginPath();
    ctx.moveTo(30, cy - 40); ctx.lineTo(30, cy + 30);
    ctx.moveTo(20, cy + 30); ctx.lineTo(canvas.width - 20, cy + 30);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(32, cy);
    for(let i=1; i<=10; i++) {
      ctx.lineTo(32 + i*10, cy + (i%2 === 0 ? 10 : -10));
    }
    ctx.lineTo(132, cy);
    ctx.strokeStyle = '#f87171';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(132, cy - 20, 40, 40);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('m', 145, cy + 6);
    
    ctx.beginPath();
    ctx.moveTo(152, cy + 40); ctx.lineTo(152, cy + 60);
    ctx.strokeStyle = '#475569';
    ctx.setLineDash([4,4]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Arial';
    ctx.fillText('x = 0', 140, cy + 75);
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export default SpringMass;