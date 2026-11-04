import React, { useRef, useEffect } from 'react';

const PolynomialSpaceInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    c: 1,
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
    const cy = height / 2 + 50; 

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Axes
      ctx.beginPath();
      ctx.moveTo(0, cy); ctx.lineTo(width, cy);
      ctx.moveTo(cx, 0); ctx.lineTo(cx, height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Scaled x mapping
      const toScreenX = (x: number) => cx + x * 20;
      const toScreenY = (y: number) => cy - y * 20;

      const p = (x: number) => x * x; 
      const q = (x: number) => -x + state.current.c; 

      // Draw p
      ctx.beginPath();
      for (let x = -5; x <= 5; x += 0.1) {
          if (x === -5) ctx.moveTo(toScreenX(x), toScreenY(p(x)));
          else ctx.lineTo(toScreenX(x), toScreenY(p(x)));
      }
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#3b82f6';
      ctx.fillText('p(t) = t²', 20, 40);

      // Draw q
      ctx.beginPath();
      for (let x = -5; x <= 5; x += 0.1) {
          if (x === -5) ctx.moveTo(toScreenX(x), toScreenY(q(x)));
          else ctx.lineTo(toScreenX(x), toScreenY(q(x)));
      }
      ctx.strokeStyle = '#ef4444';
      ctx.stroke();
      ctx.fillStyle = '#ef4444';
      ctx.fillText(`q(t) = -t + c`, 20, 60);

      // Draw p+q
      ctx.beginPath();
      for (let x = -5; x <= 5; x += 0.1) {
          if (x === -5) ctx.moveTo(toScreenX(x), toScreenY(p(x) + q(x)));
          else ctx.lineTo(toScreenX(x), toScreenY(p(x) + q(x)));
      }
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.fillStyle = '#10b981';
      ctx.fillText('(p+q)(t) = t² - t + c', 20, 80);

      // Slider UI
      ctx.fillStyle = '#334155';
      ctx.fillRect(40, height - 20, width - 80, 6);
      
      const cNorm = (state.current.c + 5) / 10;
      const sliderX = 40 + cNorm * (width - 80);
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(sliderX, height - 17, 10, 0, 2*Math.PI);
      ctx.fill();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText(`Drag to adjust constant c = ${state.current.c.toFixed(1)}`, cx - 80, height - 30);
    };

    const getX = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return (clientX - rect.left) * (width / rect.width);
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const currX = getX(e);
      const cNorm = (state.current.c + 5) / 10;
      const sliderX = 40 + cNorm * (width - 80);
      if (Math.abs(currX - sliderX) < 30) {
        state.current.dragging = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      let newX = getX(e);
      if (newX < 40) newX = 40;
      if (newX > width - 40) newX = width - 40;
      
      const cNorm = (newX - 40) / (width - 80);
      state.current.c = cNorm * 10 - 5; 
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

export default PolynomialSpaceInteractive;