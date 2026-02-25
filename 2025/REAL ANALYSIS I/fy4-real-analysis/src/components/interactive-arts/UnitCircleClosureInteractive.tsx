import React, { useRef, useEffect } from 'react';

const UnitCircleClosureInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    // Positions of two vectors, constrained to unit circle roughly
    uAngle: -Math.PI / 6,
    vAngle: -Math.PI / 3,
    dragging: null as 'u' | 'v' | null
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
    const R = 80; // Scale radius

    const drawArrow = (fx: number, fy: number, tx: number, ty: number, color: string, label: string) => {
      const dx = tx - fx;
      const dy = ty - fy;
      if (Math.hypot(dx, dy) < 2) return;
      const headlen = 8;
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
      ctx.fillText(label, tx + 5, ty);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Unit Circle
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, 2*Math.PI);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.fill();
      ctx.strokeStyle = '#3b82f6';
      ctx.stroke();
      ctx.fillStyle = '#3b82f6';
      ctx.fillText('H (Unit Circle)', cx - 40, cy - R - 10);

      const ux = cx + R * 0.9 * Math.cos(state.current.uAngle);
      const uy = cy + R * 0.9 * Math.sin(state.current.uAngle);
      
      const vx = cx + R * 0.9 * Math.cos(state.current.vAngle);
      const vy = cy + R * 0.9 * Math.sin(state.current.vAngle);

      drawArrow(cx, cy, ux, uy, '#10b981', 'u');
      drawArrow(cx, cy, vx, vy, '#f59e0b', 'v');

      // Sum
      const sumX = ux + (vx - cx);
      const sumY = uy + (vy - cy);
      
      // Check magnitude
      const dist = Math.hypot(sumX - cx, sumY - cy);
      const isInside = dist <= R;
      
      // Parallelogram
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.setLineDash([4,4]);
      ctx.beginPath(); ctx.moveTo(ux, uy); ctx.lineTo(sumX, sumY); ctx.lineTo(vx, vy); ctx.stroke();
      ctx.setLineDash([]);

      drawArrow(cx, cy, sumX, sumY, isInside ? '#10b981' : '#ef4444', 'u+v');

      // Controls
      ctx.beginPath(); ctx.arc(ux, uy, 15, 0, 2*Math.PI); ctx.fillStyle = 'rgba(16,185,129,0.2)'; ctx.fill();
      ctx.beginPath(); ctx.arc(vx, vy, 15, 0, 2*Math.PI); ctx.fillStyle = 'rgba(245,158,11,0.2)'; ctx.fill();

      if (!isInside) {
          ctx.fillStyle = '#ef4444';
          ctx.fillText('Closure Failed!', 20, height - 20);
      }
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
      const uScreenX = R * 0.9 * Math.cos(state.current.uAngle);
      const uScreenY = R * 0.9 * Math.sin(state.current.uAngle);
      const vScreenX = R * 0.9 * Math.cos(state.current.vAngle);
      const vScreenY = R * 0.9 * Math.sin(state.current.vAngle);

      if (Math.hypot(pos.x - uScreenX, pos.y - uScreenY) < 30) state.current.dragging = 'u';
      else if (Math.hypot(pos.x - vScreenX, pos.y - vScreenY) < 30) state.current.dragging = 'v';
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      const pos = getPos(e);
      const angle = Math.atan2(pos.y, pos.x);
      if (state.current.dragging === 'u') state.current.uAngle = angle;
      if (state.current.dragging === 'v') state.current.vAngle = angle;
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

export default UnitCircleClosureInteractive;