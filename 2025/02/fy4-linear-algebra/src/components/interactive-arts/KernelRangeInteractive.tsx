import React, { useRef, useEffect } from 'react';

const KernelRangeInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 300;
    canvas.width = width;
    canvas.height = height;
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cxV = width / 4; // Center of Domain V
      const cxW = (3 * width) / 4; // Center of Codomain W
      const cy = height / 2;

      // Draw Blobs for V and W
      ctx.fillStyle = 'rgba(59, 130, 246, 0.1)'; // Blue for V
      ctx.beginPath(); ctx.ellipse(cxV, cy, 60, 100, 0, 0, 2*Math.PI); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#3b82f6'; ctx.fillText('Domain V', cxV - 30, cy - 110);

      ctx.fillStyle = 'rgba(16, 185, 129, 0.1)'; // Green for W
      ctx.beginPath(); ctx.ellipse(cxW, cy, 60, 100, 0, 0, 2*Math.PI); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#10b981'; ctx.fillText('Codomain W', cxW - 35, cy - 110);

      // Draw Kernel in V
      ctx.fillStyle = 'rgba(239, 68, 68, 0.3)'; // Red Kernel
      ctx.beginPath(); ctx.ellipse(cxV, cy, 30, 15, 0, 0, 2*Math.PI); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#ef4444'; ctx.fillText('Kernel', cxV - 20, cy + 5);

      // Draw Range in W
      ctx.fillStyle = 'rgba(245, 158, 11, 0.3)'; // Amber Range
      ctx.beginPath(); ctx.ellipse(cxW, cy, 40, 60, 0, 0, 2*Math.PI); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#f59e0b'; ctx.fillText('Range', cxW - 20, cy + 70);

      // Draw Zero vectors
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(cxV, cy, 3, 0, 2*Math.PI); ctx.fill();
      ctx.beginPath(); ctx.arc(cxW, cy, 3, 0, 2*Math.PI); ctx.fill();
      ctx.fillText('0', cxV - 5, cy - 5);
      ctx.fillText('0', cxW + 5, cy - 5);

      // Arrows mapping Kernel to 0
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cxV + 30, cy);
      ctx.lineTo(cxW - 5, cy);
      ctx.stroke();
      
      // Arrowhead
      ctx.beginPath(); ctx.moveTo(cxW - 5, cy); ctx.lineTo(cxW - 15, cy - 5); ctx.lineTo(cxW - 15, cy + 5); ctx.fill();

      // Arrow mapping general V to Range
      ctx.strokeStyle = '#94a3b8';
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(cxV, cy - 60);
      ctx.quadraticCurveTo(width/2, cy - 100, cxW, cy - 40);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Arrowhead
      ctx.beginPath(); ctx.moveTo(cxW, cy - 40); ctx.lineTo(cxW - 10, cy - 45); ctx.lineTo(cxW - 5, cy - 30); ctx.fill();
      
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText('T', width/2 - 5, cy - 90);
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default KernelRangeInteractive;