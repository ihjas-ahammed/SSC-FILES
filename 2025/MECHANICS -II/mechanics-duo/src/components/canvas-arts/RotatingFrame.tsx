import React, { useEffect, useRef } from 'react';

const RotatingFrame: React.FC = () => {
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
    const r = 60;

    // Draw Earth Sphere
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Equator (ellipse)
    ctx.beginPath();
    ctx.ellipse(cx, cy, r, r/3, 0, 0, Math.PI, false);
    ctx.strokeStyle = '#475569';
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(cx, cy, r, r/3, 0, Math.PI, 2*Math.PI, false);
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Z-axis (rotation axis)
    ctx.beginPath();
    ctx.moveTo(cx, cy + r + 20);
    ctx.lineTo(cx, cy - r - 40);
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Arrow for Z
    ctx.beginPath();
    ctx.moveTo(cx, cy - r - 40);
    ctx.lineTo(cx - 5, cy - r - 30);
    ctx.lineTo(cx + 5, cy - r - 30);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();
    
    ctx.fillStyle = '#fff';
    ctx.font = 'italic 16px serif';
    ctx.fillText("z, z'", cx + 10, cy - r - 30);

    // Omega vector (curved arrow)
    ctx.beginPath();
    ctx.arc(cx, cy - r - 15, 15, Math.PI, 2*Math.PI);
    ctx.strokeStyle = '#f59e0b';
    ctx.stroke();
    // Arrowhead for Omega
    ctx.beginPath();
    ctx.moveTo(cx + 15, cy - r - 15);
    ctx.lineTo(cx + 10, cy - r - 22);
    ctx.lineTo(cx + 20, cy - r - 22);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();
    ctx.fillText("Ω", cx + 25, cy - r - 10);

    // X and Y axes
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx - r*0.8, cy + r*0.6);
    ctx.strokeStyle = '#10b981';
    ctx.stroke();
    ctx.fillText("x", cx - r*0.8 - 15, cy + r*0.6 + 10);

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r*1.1, cy + r*0.2);
    ctx.strokeStyle = '#10b981';
    ctx.stroke();
    ctx.fillText("y", cx + r*1.1 + 5, cy + r*0.2 + 5);

    // X' and Y' rotating axes
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx - r*0.3, cy + r*0.9);
    ctx.strokeStyle = '#3b82f6';
    ctx.stroke();
    ctx.fillText("x'", cx - r*0.3 - 10, cy + r*0.9 + 15);

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r*0.8, cy - r*0.2);
    ctx.strokeStyle = '#3b82f6';
    ctx.stroke();
    ctx.fillText("y'", cx + r*0.8 + 5, cy - r*0.2 - 5);

  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default RotatingFrame;