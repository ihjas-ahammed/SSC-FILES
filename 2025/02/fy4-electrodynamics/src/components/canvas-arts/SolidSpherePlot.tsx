import React, { useEffect, useRef } from 'react';

const SolidSpherePlot: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 250;
    canvas.width = width;
    canvas.height = height;

    // Clear background
    ctx.clearRect(0, 0, width, height);

    const margin = 40;
    const graphWidth = width - 2 * margin;
    const graphHeight = height - 2 * margin;
    
    // Coordinates
    const originX = margin;
    const originY = height - margin;
    const R_pixel = originX + graphWidth / 3; // R is at 1/3 of graph width

    // Axes
    ctx.beginPath();
    ctx.moveTo(originX, margin);
    ctx.lineTo(originX, originY); // Y axis (E)
    ctx.lineTo(width - margin/2, originY); // X axis (r)
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#fff';
    ctx.font = '14px Nunito';
    ctx.fillText('E', originX - 25, margin + 10);
    ctx.fillText('r', width - margin, originY + 5);
    ctx.fillText('R', R_pixel - 5, originY + 20);
    ctx.fillText('0', originX - 15, originY + 20);

    // Plot Inside (0 to R): Linear
    const E_max_pixel = originY - graphHeight * 0.8;
    
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(R_pixel, E_max_pixel);
    ctx.strokeStyle = '#3b82f6'; // Blue
    ctx.lineWidth = 3;
    ctx.stroke();

    // Plot Outside (R to end): 1/r^2
    ctx.beginPath();
    ctx.moveTo(R_pixel, E_max_pixel);
    
    // Draw curve
    for (let x = R_pixel; x < width - margin; x += 2) {
        // Map x to r
        // x=R_pixel -> r=1 (normalized)
        // x -> r = (x - originX) / (R_pixel - originX)
        const r_norm = (x - originX) / (R_pixel - originX);
        const y_norm = 1 / (r_norm * r_norm);
        
        const y = originY - (originY - E_max_pixel) * y_norm;
        ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Dashed line for R
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(R_pixel, originY);
    ctx.lineTo(R_pixel, margin);
    ctx.stroke();
    ctx.setLineDash([]);

    // Annotations
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('E ~ r', originX + 20, originY - 20);
    ctx.fillText('E ~ 1/r²', R_pixel + 40, originY - 20);

  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default SolidSpherePlot;