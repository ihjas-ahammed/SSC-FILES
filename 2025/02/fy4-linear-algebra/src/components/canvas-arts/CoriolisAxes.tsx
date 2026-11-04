import React, { useEffect, useRef } from 'react';

const CoriolisAxes: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = 220;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2 + 20;

    // Draw localized Earth surface curve
    ctx.beginPath();
    ctx.arc(cx, cy + 300, 320, 1.2 * Math.PI, 1.8 * Math.PI);
    ctx.strokeStyle = '#334155'; // slate-700
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw Z-axis (Up)
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx, cy - 100);
    ctx.strokeStyle = '#f87171'; // red-400
    ctx.lineWidth = 2;
    ctx.stroke();
    // Arrow
    ctx.beginPath();
    ctx.moveTo(cx, cy - 100);
    ctx.lineTo(cx - 5, cy - 90);
    ctx.lineTo(cx + 5, cy - 90);
    ctx.fillStyle = '#f87171';
    ctx.fill();
    ctx.fillText('z (Up)', cx - 15, cy - 110);

    // Draw Y-axis (North)
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + 90, cy - 30);
    ctx.strokeStyle = '#34d399'; // emerald-400
    ctx.stroke();
    // Arrow
    ctx.beginPath();
    ctx.moveTo(cx + 90, cy - 30);
    ctx.lineTo(cx + 80, cy - 30);
    ctx.lineTo(cx + 85, cy - 20);
    ctx.fillStyle = '#34d399';
    ctx.fill();
    ctx.fillText('y (North)', cx + 95, cy - 35);

    // Draw X-axis (East, pointing 'into/out of' screen, represented diagonally left)
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx - 80, cy + 40);
    ctx.strokeStyle = '#60a5fa'; // blue-400
    ctx.stroke();
    // Arrow
    ctx.beginPath();
    ctx.moveTo(cx - 80, cy + 40);
    ctx.lineTo(cx - 70, cy + 35);
    ctx.lineTo(cx - 75, cy + 25);
    ctx.fillStyle = '#60a5fa';
    ctx.fill();
    ctx.fillText('x (East)', cx - 100, cy + 60);

    // Draw Omega Vector
    const lambda = Math.PI / 6; // Colatitude 30 deg
    const omegaLen = 80;
    const ox = cx + omegaLen * Math.sin(lambda); // In y-z plane
    const oy = cy - omegaLen * Math.cos(lambda);
    
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(ox, oy);
    ctx.strokeStyle = '#f59e0b'; // amber-500
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.setLineDash([]);
    // Arrow
    ctx.beginPath();
    ctx.arc(ox, oy, 4, 0, 2*Math.PI);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();
    
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Ω', ox + 10, oy);

    // Draw colatitude angle arc
    ctx.beginPath();
    ctx.arc(cx, cy, 40, -Math.PI/2, -Math.PI/2 + lambda);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#fcd34d';
    ctx.fillText('λ', cx + 15, cy - 45);

  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default CoriolisAxes;