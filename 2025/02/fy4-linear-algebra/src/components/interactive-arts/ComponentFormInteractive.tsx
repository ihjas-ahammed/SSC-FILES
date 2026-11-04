import React, { useRef, useEffect } from 'react';

const ComponentFormInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    v: { x: 80, y: -60 },
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
    
    const cx = 50;
    const cy = height - 50; 

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i=0; i<width; i+=20) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke(); }
      for (let i=0; i<height; i+=20) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke(); }

      // Axes
      ctx.beginPath();
      ctx.moveTo(cx, 0); ctx.lineTo(cx, height);
      ctx.moveTo(0, cy); ctx.lineTo(width, cy);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      const { v } = state.current;
      const tx = cx + v.x;
      const ty = cy + v.y;

      // X and Y projections
      ctx.beginPath();
      ctx.moveTo(tx, ty); ctx.lineTo(tx, cy);
      ctx.moveTo(tx, ty); ctx.lineTo(cx, ty);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw X component (Red)
      ctx.beginPath();
      ctx.moveTo(cx, cy); ctx.lineTo(tx, cy);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 5;
      ctx.stroke();

      // Draw Y component (Green)
      ctx.beginPath();
      ctx.moveTo(cx, cy); ctx.lineTo(cx, ty);
      ctx.strokeStyle = '#10b981';
      ctx.stroke();

      // Draw Main Vector (Blue)
      const headlen = 12;
      const angle = Math.atan2(v.y, v.x);
      ctx.beginPath();
      ctx.moveTo(cx, cy); ctx.lineTo(tx, ty);
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 4;
      ctx.stroke();
      
      // Arrowhead
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(tx - headlen * Math.cos(angle - Math.PI / 6), ty - headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(tx - headlen * Math.cos(angle + Math.PI / 6), ty - headlen * Math.sin(angle + Math.PI / 6));
      ctx.fillStyle = '#3b82f6';
      ctx.fill();

      // Hitbox indicator
      ctx.beginPath();
      ctx.arc(tx, ty, 20, 0, 2*Math.PI);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.fill();

      // Labels
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(`v_x`, cx + v.x/2 - 10, cy + 20);
      
      ctx.fillStyle = '#10b981';
      ctx.fillText(`v_y`, cx - 35, cy + v.y/2 + 5);

      ctx.fillStyle = '#3b82f6';
      ctx.fillText(`v`, tx + 10, ty - 10);
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
      if (Math.hypot(pos.x - state.current.v.x, pos.y - state.current.v.y) < 40) {
        state.current.dragging = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      state.current.v = getPos(e);
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

export default ComponentFormInteractive;