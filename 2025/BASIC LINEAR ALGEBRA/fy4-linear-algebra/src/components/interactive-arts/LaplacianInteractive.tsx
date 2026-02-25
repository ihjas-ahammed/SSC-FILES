import React, { useRef, useEffect } from 'react';

const LaplacianInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    x: 0,
    dragging: false
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
    
    const cx = width / 2;
    const cy = height / 2; 

    const T = (x: number) => 60 * Math.sin(x / 40);
    const d2T = (x: number) => -(60 / 1600) * Math.sin(x / 40);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Curve
      ctx.beginPath();
      for (let px = -cx; px < cx; px++) {
          const py = T(px);
          if (px === -cx) ctx.moveTo(cx + px, cy - py);
          else ctx.lineTo(cx + px, cy - py);
      }
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 3;
      ctx.stroke();

      const px = state.current.x;
      const py = T(px);
      const laplace = d2T(px);

      // Draw Laplacian vector
      const scale = -1000; // Visual scale for 2nd derivative
      const vecY = laplace * scale;

      const scrX = cx + px;
      const scrY = cy - py;

      ctx.beginPath();
      ctx.moveTo(scrX, scrY);
      ctx.lineTo(scrX, scrY - vecY);
      ctx.strokeStyle = laplace > 0 ? '#10b981' : '#ef4444'; // Green if concave up, Red if down
      ctx.lineWidth = 5;
      ctx.stroke();
      
      // Probe
      ctx.beginPath();
      ctx.arc(scrX, scrY, 12, 0, 2*Math.PI);
      ctx.fillStyle = '#3b82f6';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#fff';
      ctx.stroke();

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(`∇²T ${laplace > 0 ? '> 0' : (laplace < 0 ? '< 0' : '= 0')}`, scrX - 25, scrY - vecY - (laplace > 0 ? 10 : -20));
    };

    const getX = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return (clientX - rect.left) * (width / rect.width) - cx;
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const currX = getX(e);
      if (Math.abs(currX - state.current.x) < 50) {
        state.current.dragging = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      // Constrain within bounds
      let newX = getX(e);
      if (newX > cx - 20) newX = cx - 20;
      if (newX < -cx + 20) newX = -cx + 20;
      state.current.x = newX;
      requestAnimationFrame(draw);
    };

    const onEnd = () => { state.current.dragging = false; };

    canvas.addEventListener('mousedown', onStart);
    canvas.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    canvas.addEventListener('touchstart', onStart, { passive: false });
    canvas.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);

    draw();

    return () => {
      canvas.removeEventListener('mousedown', onStart);
      canvas.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      canvas.removeEventListener('touchstart', onStart);
      canvas.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, []);

  return <canvas ref={canvasRef} className="touch-none-canvas"></canvas>;
};

export default LaplacianInteractive;