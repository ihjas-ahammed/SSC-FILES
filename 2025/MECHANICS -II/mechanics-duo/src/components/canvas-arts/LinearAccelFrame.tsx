import React, { useEffect, useRef } from 'react';

const LinearAccelFrame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = 200;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = canvas.width;
    const h = canvas.height;

    // Inertial Frame O
    const ox = 40;
    const oy = h - 40;
    ctx.beginPath();
    ctx.moveTo(ox, oy); ctx.lineTo(ox + 80, oy);
    ctx.moveTo(ox, oy); ctx.lineTo(ox, oy - 80);
    ctx.strokeStyle = '#94a3b8'; // slate-400
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 16px serif';
    ctx.fillText('O', ox - 15, oy + 15);

    // Accelerating Frame O'
    const opx = 120;
    const opy = h - 70;
    ctx.beginPath();
    ctx.moveTo(opx, opy); ctx.lineTo(opx + 80, opy);
    ctx.moveTo(opx, opy); ctx.lineTo(opx, opy - 80);
    ctx.strokeStyle = '#3b82f6'; // blue-500
    ctx.stroke();
    ctx.fillStyle = '#3b82f6';
    ctx.fillText("O'", opx - 15, opy + 15);

    // Acceleration vector of O'
    ctx.beginPath();
    ctx.moveTo(opx + 90, opy);
    ctx.lineTo(opx + 130, opy);
    ctx.strokeStyle = '#f59e0b'; // amber-500
    ctx.lineWidth = 3;
    ctx.stroke();
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(opx + 130, opy);
    ctx.lineTo(opx + 120, opy - 5);
    ctx.lineTo(opx + 120, opy + 5);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();
    ctx.fillText('r̈', opx + 105, opy - 10);

    // Particle m
    const mx = 220;
    const my = 40;
    ctx.beginPath();
    ctx.arc(mx, my, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#ef4444'; // red-500
    ctx.fill();
    ctx.fillText('m', mx + 10, my);

    // Vector r_O (from O to m)
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(mx, my);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.stroke();

    // Vector r_O' (from O' to m)
    ctx.beginPath();
    ctx.moveTo(opx, opy);
    ctx.lineTo(mx, my);
    ctx.strokeStyle = '#3b82f6';
    ctx.stroke();
    
    // Vector r (from O to O')
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(opx, opy);
    ctx.strokeStyle = '#10b981'; // green-500
    ctx.stroke();
    ctx.setLineDash([]);

  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default LinearAccelFrame;