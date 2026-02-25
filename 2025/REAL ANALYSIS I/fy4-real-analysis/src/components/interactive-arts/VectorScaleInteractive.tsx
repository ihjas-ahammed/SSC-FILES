import React, { useRef, useEffect } from 'react';

const VectorScaleInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    c: 1.5,
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
    const cy = height / 2 + 30;

    const drawArrow = (fx: number, fy: number, tx: number, ty: number, color: string, label: string, offset: number = 10) => {
      const dx = tx - fx;
      const dy = ty - fy;
      if (Math.hypot(dx, dy) < 2) return;
      const headlen = 10;
      const angle = Math.atan2(dy, dx);
      
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(tx, ty);
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(tx - headlen * Math.cos(angle - Math.PI / 6), ty - headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(tx - headlen * Math.cos(angle + Math.PI / 6), ty - headlen * Math.sin(angle + Math.PI / 6));
      ctx.fillStyle = color;
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(label, tx + offset, ty + offset);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i=0; i<width; i+=20) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke(); }
      for (let i=0; i<height; i+=20) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke(); }

      const u = { x: 40, y: -40 };
      const cu = { x: u.x * state.current.c, y: u.y * state.current.c };

      drawArrow(cx, cy, cx + u.x, cy + u.y, 'rgba(255, 255, 255, 0.3)', 'u', -20);
      drawArrow(cx, cy, cx + cu.x, cy + cu.y, '#58cc02', `c u`, 15);
      
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, 2*Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.fillText('0', cx - 15, cy + 15);

      // Slider UI
      ctx.fillStyle = '#334155';
      ctx.fillRect(40, height - 30, width - 80, 6);
      
      const cNorm = (state.current.c + 2) / 4; // -2 to 2 mapped to 0 to 1
      const sliderX = 40 + cNorm * (width - 80);
      ctx.fillStyle = '#1cb0f6';
      ctx.beginPath();
      ctx.arc(sliderX, height - 27, 10, 0, 2*Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText(`c = ${state.current.c.toFixed(2)} (Drag to scale)`, cx - 60, height - 10);
    };

    const getX = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return (clientX - rect.left) * (width / rect.width);
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const currX = getX(e);
      const cNorm = (state.current.c + 2) / 4;
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
      state.current.c = cNorm * 4 - 2; 
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

export default VectorScaleInteractive;