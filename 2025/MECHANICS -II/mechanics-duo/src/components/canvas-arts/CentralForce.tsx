import React, { useEffect, useRef } from 'react';

const CentralForce: React.FC = () => {
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
    ctx.arc(cx, cy, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#10b981';
    ctx.fill();
    
    const pX = cx + 80;
    const pY = cy - 40;
    
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(pX, pY);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(pX, pY);
    ctx.lineTo(pX - 40, pY + 20);
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(pX - 40, pY + 20);
    ctx.lineTo(pX - 35, pY + 10);
    ctx.lineTo(pX - 30, pY + 25);
    ctx.fillStyle = '#ef4444';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(pX, pY, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();
    
    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.fillText('r', cx + 40, cy - 10);
    ctx.fillText('F', pX - 25, pY + 5);
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export default CentralForce;