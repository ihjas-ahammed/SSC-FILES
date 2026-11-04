import React, { useRef, useEffect } from 'react';

const QuadrantClosureInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    ux: 40,
    uy: -40, // Screen coords: up is negative
    scalar: -1,
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

    const drawArrow = (fx: number, fy: number, tx: number, ty: number, color: string, label: string) => {
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

      ctx.fillStyle = color;
      ctx.font = 'bold 14px Nunito';
      ctx.fillText(label, tx + 10, ty);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(width, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, height); ctx.stroke();

      // Highlight Quadrant 1
      ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.fillRect(cx, 0, width/2, cy); // Top right
      ctx.fillStyle = '#10b981';
      ctx.fillText('Q1 (Vector Space?)', cx + 20, 30);

      // Vector u
      const uScreenX = cx + state.current.ux;
      const uScreenY = cy + state.current.uy;
      drawArrow(cx, cy, uScreenX, uScreenY, '#3b82f6', 'u');

      // Scaled Vector c*u
      const c = state.current.scalar;
      const cuX = cx + state.current.ux * c;
      const cuY = cy + state.current.uy * c;
      
      const isInQ1 = (cuX >= cx) && (cuY <= cy); // check screen coords
      const color = isInQ1 ? '#10b981' : '#ef4444';
      
      drawArrow(cx, cy, cuX, cuY, color, `c*u (${c.toFixed(1)})`);

      // Slider UI
      ctx.fillStyle = '#334155';
      ctx.fillRect(40, height - 30, width - 80, 6);
      
      const cNorm = (c + 2) / 4; // -2 to 2
      const sliderX = 40 + cNorm * (width - 80);
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(sliderX, height - 27, 8, 0, 2*Math.PI); ctx.fill();
      
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`c = ${c.toFixed(1)}`, cx - 20, height - 10);
    };

    const getX = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return (clientX - rect.left) * (width / rect.width);
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const currX = getX(e);
      const cNorm = (state.current.scalar + 2) / 4;
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
      state.current.scalar = cNorm * 4 - 2; 
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

export default QuadrantClosureInteractive;