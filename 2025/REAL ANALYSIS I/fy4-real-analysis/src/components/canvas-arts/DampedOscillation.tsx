import React, { useEffect, useRef } from 'react';

const DampedOscillation: React.FC = () => {
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
    const cy = h / 2;

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(20, cy); ctx.lineTo(w - 20, cy); // t axis
    ctx.moveTo(30, 20); ctx.lineTo(30, h - 20); // x axis
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Arial';
    ctx.fillText('t', w - 15, cy - 10);
    ctx.fillText('x', 10, 15);

    // Params
    const A = 80;
    const gamma = 0.015;
    const omega = 0.15;

    // Draw Exponential Envelopes
    ctx.beginPath();
    for (let t = 0; t < w - 50; t += 2) {
      const envelope = A * Math.exp(-gamma * t);
      const px = 30 + t;
      if (t === 0) ctx.moveTo(px, cy - envelope);
      else ctx.lineTo(px, cy - envelope);
    }
    ctx.strokeStyle = '#f87171'; // Red dashed
    ctx.setLineDash([4, 4]);
    ctx.stroke();

    ctx.beginPath();
    for (let t = 0; t < w - 50; t += 2) {
      const envelope = A * Math.exp(-gamma * t);
      const px = 30 + t;
      if (t === 0) ctx.moveTo(px, cy + envelope);
      else ctx.lineTo(px, cy + envelope);
    }
    ctx.stroke();
    ctx.setLineDash([]); // reset

    // Draw Damped Sine Wave
    ctx.beginPath();
    for (let t = 0; t < w - 50; t++) {
      const x = A * Math.exp(-gamma * t) * Math.cos(omega * t);
      const px = 30 + t;
      const py = cy - x;
      if (t === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.strokeStyle = '#3b82f6'; // Blue
    ctx.lineWidth = 2.5;
    ctx.stroke();
    
    // Annotation
    ctx.fillStyle = '#f87171';
    ctx.fillText('Ae^(-γt)', 40, cy - A + 10);

  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export default DampedOscillation;