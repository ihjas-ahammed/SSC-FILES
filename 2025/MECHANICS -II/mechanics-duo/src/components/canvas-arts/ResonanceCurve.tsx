import React, { useEffect, useRef } from 'react';

const ResonanceCurve: React.FC = () => {
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
    const cx = w / 2;
    const base = h - 30;

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(30, base); ctx.lineTo(w - 20, base); // omega axis
    ctx.moveTo(40, 20); ctx.lineTo(40, h - 20); // Amp axis
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 14px serif';
    ctx.fillText('ω_d', w - 15, base - 5);
    ctx.fillText('A²', 15, 15);

    // Resonance params
    const w0 = 100; 
    const b_m = 15; // bandwidth factor
    const F0_m = 20000;

    // Draw curve
    ctx.beginPath();
    let first = true;
    for (let wd = 20; wd <= 180; wd += 1) {
      // A^2 formula
      const denom = Math.pow(w0*w0 - wd*wd, 2) + Math.pow(wd * b_m, 2);
      const amp2 = Math.pow(F0_m, 2) / denom;
      
      const px = 40 + (wd - 20) * ((w - 80) / 160);
      const py = base - amp2 * 120; // scale visually

      if (first) {
        ctx.moveTo(px, py);
        first = false;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.strokeStyle = '#3b82f6'; // Blue
    ctx.lineWidth = 3;
    ctx.stroke();

    // Mark omega_0
    const w0_px = 40 + (w0 - 20) * ((w - 80) / 160);
    ctx.beginPath();
    ctx.moveTo(w0_px, base);
    ctx.lineTo(w0_px, base - 130);
    ctx.strokeStyle = '#f59e0b'; // Amber
    ctx.setLineDash([4,4]);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('ω₀', w0_px - 8, base + 15);

    // Draw FWHM Delta Omega line
    const halfMaxY = base - 60; // Approximate half height visually
    ctx.beginPath();
    ctx.moveTo(w0_px - 15, halfMaxY);
    ctx.lineTo(w0_px + 15, halfMaxY);
    ctx.strokeStyle = '#10b981'; // Green
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#10b981';
    ctx.fillText('Δω', w0_px + 20, halfMaxY + 4);

  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export default ResonanceCurve;