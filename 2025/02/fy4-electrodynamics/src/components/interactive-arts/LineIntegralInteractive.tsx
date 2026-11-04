import React, { useRef, useEffect, useState } from 'react';

const LineIntegralInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [t, setT] = useState(0); // Parameter 0 to 1
  const requestRef = useRef<number>();

  // Field: v = y*x_hat + x*y_hat (Conservative field, potential = xy)
  // Path: Parabola y = x^2 from (0,0) to (1,1) scaled to canvas
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 300;
    canvas.width = width;
    canvas.height = height;

    // Coordinate mapping
    // Origin at bottom left (50, height-50)
    // Scale: 200px = 1 unit
    const ox = 50;
    const oy = height - 50;
    const scale = 200;

    const toScreen = (x: number, y: number) => ({
      x: ox + x * scale,
      y: oy - y * scale
    });

    const drawArrow = (x: number, y: number, vx: number, vy: number, color: string, label?: string) => {
      const start = toScreen(x, y);
      const end = toScreen(x + vx * 0.3, y + vy * 0.3); // Scale vector visual length
      
      const headLen = 10;
      const angle = Math.atan2(end.y - start.y, end.x - start.x);

      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(end.x, end.y);
      ctx.lineTo(end.x - headLen * Math.cos(angle - Math.PI / 6), end.y - headLen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(end.x - headLen * Math.cos(angle + Math.PI / 6), end.y - headLen * Math.sin(angle + Math.PI / 6));
      ctx.fillStyle = color;
      ctx.fill();

      if (label) {
        ctx.fillStyle = color;
        ctx.font = '14px Nunito';
        ctx.fillText(label, end.x + 5, end.y);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Axes
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(ox, oy); ctx.lineTo(ox + 220, oy); // x
      ctx.moveTo(ox, oy); ctx.lineTo(ox, oy - 220); // y
      ctx.stroke();
      ctx.fillStyle = '#64748b';
      ctx.fillText('x', ox + 230, oy);
      ctx.fillText('y', ox, oy - 230);

      // Draw Path (y = x^2)
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(ox, oy);
      for (let i = 0; i <= 100; i++) {
        const px = i / 100;
        const py = px * px;
        const s = toScreen(px, py);
        ctx.lineTo(s.x, s.y);
      }
      ctx.stroke();

      // Current position
      const currX = t;
      const currY = t * t;
      const pos = toScreen(currX, currY);

      // Field vector v = y*i + x*j
      const vx = currY;
      const vy = currX;
      drawArrow(currX, currY, vx, vy, '#f59e0b', 'v');

      // Tangent vector (dl) -> derivative of path: (1, 2x) normalized
      // Actually dl is displacement. Let's show unit tangent.
      const mag = Math.sqrt(1 + 4*currX*currX);
      const tx = 1 / mag;
      const ty = 2 * currX / mag;
      drawArrow(currX, currY, tx, ty, '#10b981', 'dl');

      // Projection
      const dot = vx * tx + vy * ty;
      
      // Draw Dot Product visualization
      ctx.fillStyle = '#fff';
      ctx.font = '16px Nunito';
      ctx.fillText(`Path: y = x²`, 160, 40);
      ctx.fillText(`v = y î + x ĵ`, 160, 60);
      ctx.fillText(`v · dl ≈ ${dot.toFixed(2)}`, 160, 90);

      // Draw particle
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();

      setT(prev => (prev + 0.005) % 1.05);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current!);
  }, [t]);

  return <canvas ref={canvasRef} className="touch-none-canvas" />;
};

export default LineIntegralInteractive;