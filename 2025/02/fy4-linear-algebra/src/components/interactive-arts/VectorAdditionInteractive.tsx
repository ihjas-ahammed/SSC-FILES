import React, { useRef, useEffect } from 'react';

const VectorAdditionInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    a: { x: 40, y: -60 },
    b: { x: -30, y: -50 },
    dragging: null as 'a' | 'b' | null
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fixed internal resolution for consistent math mapping
    const width = canvas.parentElement?.clientWidth || 300;
    const height = 280;
    canvas.width = width;
    canvas.height = height;
    
    const cx = width / 2;
    const cy = height - 60; // Origin lower down

    const drawArrow = (fx: number, fy: number, tx: number, ty: number, color: string, label: string) => {
      const headlen = 12;
      const angle = Math.atan2(ty - fy, tx - fx);
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(tx, ty);
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(tx - headlen * Math.cos(angle - Math.PI / 6), ty - headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(tx - headlen * Math.cos(angle + Math.PI / 6), ty - headlen * Math.sin(angle + Math.PI / 6));
      ctx.fillStyle = color;
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(label, tx + 10, ty + 10);
      
      // Hitbox indicator
      ctx.beginPath();
      ctx.arc(tx, ty, 15, 0, 2*Math.PI);
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i=0; i<width; i+=20) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke(); }
      for (let i=0; i<height; i+=20) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke(); }

      const { a, b } = state.current;
      const c = { x: a.x + b.x, y: a.y + b.y };

      // Parallelogram dashed lines
      ctx.beginPath();
      ctx.moveTo(cx + a.x, cy + a.y);
      ctx.lineTo(cx + c.x, cy + c.y);
      ctx.lineTo(cx + b.x, cy + b.y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      drawArrow(cx, cy, cx + a.x, cy + a.y, '#3b82f6', 'A');
      drawArrow(cx, cy, cx + b.x, cy + b.y, '#f59e0b', 'B');
      drawArrow(cx, cy, cx + c.x, cy + c.y, '#10b981', 'A+B');
      
      // Origin point
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, 2*Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
    };

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      return {
        x: (clientX - rect.left) * (width / rect.width) - cx,
        y: (clientY - rect.top) * (height / rect.height) - cy
      };
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const pos = getPos(e);
      const { a, b } = state.current;
      if (Math.hypot(pos.x - a.x, pos.y - a.y) < 30) state.current.dragging = 'a';
      else if (Math.hypot(pos.x - b.x, pos.y - b.y) < 30) state.current.dragging = 'b';
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      const pos = getPos(e);
      if (state.current.dragging === 'a') state.current.a = pos;
      if (state.current.dragging === 'b') state.current.b = pos;
      requestAnimationFrame(draw);
    };

    const onEnd = () => { state.current.dragging = null; };

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

export default VectorAdditionInteractive;