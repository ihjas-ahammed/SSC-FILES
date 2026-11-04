import React, { useRef, useEffect } from 'react';

const CycloidMotionInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    time: 0,
    trail: [] as {x: number, y: number}[]
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 280;
    canvas.width = width;
    canvas.height = height;

    const E = 40; // Scale factor for E
    const B = 1;  // Scale factor for B
    const omega = B; 
    const R = E / omega; // Radius of the rolling circle
    
    // Origin for drawing
    const originY = height - 40;
    const originX = 20;

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw E and B field indicators
      ctx.fillStyle = '#ef4444'; // Red E field UP
      ctx.font = 'bold 16px Nunito';
      ctx.fillText('E ↑', width - 40, 30);
      
      ctx.fillStyle = '#3b82f6'; // Blue B field OUT
      ctx.fillText('B ⊙', width - 40, 50);

      // Draw Axes
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(10, originY); ctx.lineTo(width - 10, originY); // x-axis
      ctx.moveTo(originX, height - 20); ctx.lineTo(originX, 20); // z-axis (drawn as y on screen)
      ctx.stroke();

      // Cycloid equations (x is horizontal, z is vertical on screen)
      // x(t) = R(wt - sin wt)
      // z(t) = R(1 - cos wt)
      
      const t = state.current.time;
      const x = R * (omega * t - Math.sin(omega * t));
      const z = R * (1 - Math.cos(omega * t));

      const px = originX + x;
      const py = originY - z;

      // Add to trail
      if (t === 0) {
        state.current.trail = [{x: px, y: py}];
      } else {
        state.current.trail.push({x: px, y: py});
      }

      // Draw Trail
      ctx.strokeStyle = '#10b981'; // Green path
      ctx.lineWidth = 3;
      ctx.beginPath();
      if (state.current.trail.length > 0) {
        ctx.moveTo(state.current.trail[0].x, state.current.trail[0].y);
        for (let i = 1; i < state.current.trail.length; i++) {
          ctx.lineTo(state.current.trail[i].x, state.current.trail[i].y);
        }
      }
      ctx.stroke();

      // Draw Particle
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, 2*Math.PI);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Rolling Circle (Ghost)
      const cx = originX + R * omega * t;
      const cy = originY - R;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, 2*Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Draw spoke to particle
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(px, py);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.stroke();

      // Increment time
      state.current.time += 0.05;
      
      // Reset if off screen
      if (px > width) {
          state.current.time = 0;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="touch-none-canvas"></canvas>;
};

export default CycloidMotionInteractive;