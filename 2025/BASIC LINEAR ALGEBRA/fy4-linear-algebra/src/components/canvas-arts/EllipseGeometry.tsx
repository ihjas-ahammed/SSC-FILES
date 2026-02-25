import React, { useEffect, useRef } from 'react';

const EllipseGeometry: React.FC = () => {
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
    const a = 90; 
    const b = 55;
    const c = Math.sqrt(a * a - b * b); 
    
    ctx.beginPath();
    ctx.ellipse(cx, cy, a, b, 0, 0, 2 * Math.PI);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx - a - 10, cy);
    ctx.lineTo(cx + a + 10, cy);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.stroke();

    const f1X = cx - c;
    const f2X = cx + c;
    
    ctx.beginPath();
    ctx.arc(f1X, cy, 4, 0, 2 * Math.PI);
    ctx.arc(f2X, cy, 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();
    
    const t = -Math.PI / 3; 
    const pX = cx + a * Math.cos(t);
    const pY = cy + b * Math.sin(t);
    
    ctx.beginPath();
    ctx.arc(pX, pY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(f1X, cy);
    ctx.lineTo(pX, pY);
    ctx.lineTo(f2X, cy);
    ctx.strokeStyle = '#38bdf8';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.fillText("F'", f1X - 5, cy + 20);
    ctx.fillText("F", f2X - 5, cy + 20);
    ctx.fillText("P", pX + 10, pY - 10);
    
    ctx.fillStyle = '#38bdf8';
    ctx.fillText("r'", (f1X + pX)/2 - 10, (cy + pY)/2 - 10);
    ctx.fillText("r", (f2X + pX)/2 + 10, (cy + pY)/2 + 10);

    ctx.beginPath();
    ctx.moveTo(cx, cy + b + 15);
    ctx.lineTo(cx + a, cy + b + 15);
    ctx.strokeStyle = '#94a3b8';
    ctx.stroke();
    ctx.fillStyle = '#94a3b8';
    ctx.fillText("a", cx + a/2 - 5, cy + b + 10);
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export default EllipseGeometry;