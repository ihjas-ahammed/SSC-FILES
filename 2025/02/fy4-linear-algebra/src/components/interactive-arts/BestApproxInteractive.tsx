import React, { useRef, useEffect } from 'react';

const BestApproxInteractive: React.FC = () => {
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

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2 + 50;

      // Draw Plane W (Parallelogram)
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy + 20);
      ctx.lineTo(cx + 60, cy + 20);
      ctx.lineTo(cx + 100, cy - 40);
      ctx.lineTo(cx - 60, cy - 40);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText('W', cx - 80, cy - 10);

      // Vector y (point in space)
      const yx = cx + 20;
      const yy = cy - 120;
      
      // Projection y_hat (point on plane)
      const phx = cx + 20;
      const phy = cy - 10;

      // Draw line from origin to y_hat (vector y_hat)
      ctx.beginPath();
      ctx.moveTo(cx - 20, cy); // approx origin
      ctx.lineTo(phx, phy);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.stroke();
      // Arrow
      ctx.fillStyle = '#10b981';
      ctx.beginPath(); ctx.arc(phx, phy, 4, 0, 2*Math.PI); ctx.fill();
      ctx.fillText('ŷ', phx + 10, phy + 5);

      // Draw line from y_hat to y (vector z)
      ctx.beginPath();
      ctx.moveTo(phx, phy);
      ctx.lineTo(yx, yy);
      ctx.strokeStyle = '#ef4444';
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#ef4444';
      ctx.fillText('z', phx - 15, (phy+yy)/2);

      // Vector y (from origin)
      ctx.beginPath();
      ctx.moveTo(cx - 20, cy);
      ctx.lineTo(yx, yy);
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Point y
      ctx.beginPath(); ctx.arc(yx, yy, 5, 0, 2*Math.PI); ctx.fillStyle = '#fff'; ctx.fill();
      ctx.fillText('y', yx + 10, yy);

      // Random other point v in W to show distance is larger
      const vx = cx + 70;
      const vy = cy - 20;
      ctx.beginPath(); ctx.arc(vx, vy, 4, 0, 2*Math.PI); ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.fillText('v', vx+5, vy);
      
      // Distance y to v
      ctx.beginPath(); ctx.moveTo(yx, yy); ctx.lineTo(vx, vy); 
      ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth=1; ctx.stroke();

      ctx.fillStyle = '#fff';
      ctx.font = '12px Nunito';
      ctx.fillText('||y - ŷ|| < ||y - v||', cx - 60, height - 10);
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default BestApproxInteractive;