import React, { useRef, useEffect } from 'react';

const BiotSavartInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    p: { x: 80, y: 0 },
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
      const headlen = 10;
      const angle = Math.atan2(ty - fy, tx - fx);
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
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(label, tx + 10, ty + 10);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Wire at center (looking top down)
      // Let's pretend we are looking DOWN the wire. Current is coming OUT towards us.
      ctx.beginPath();
      ctx.arc(cx, cy, 15, 0, 2*Math.PI);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      // Dot to signify OUT of page
      ctx.beginPath(); ctx.arc(cx, cy, 3, 0, 2*Math.PI); ctx.fillStyle = '#fff'; ctx.fill();
      
      ctx.fillStyle = '#f59e0b';
      ctx.font = '14px Nunito';
      ctx.fillText('Wire (Current OUT)', cx - 55, cy - 25);

      const px = cx + state.current.p.x;
      const py = cy + state.current.p.y;

      // Draw magnetic field circle
      const r = Math.hypot(state.current.p.x, state.current.p.y);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 2*Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Observation Point
      ctx.beginPath();
      ctx.arc(px, py, 12, 0, 2*Math.PI);
      ctx.fillStyle = '#3b82f6';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.stroke();

      // Draw Separation Vector (r)
      drawArrow(cx, cy, px, py, '#94a3b8', 'r');

      // Draw Magnetic Field Vector (B)
      // Tangent to circle. Current OUT -> counter-clockwise B field.
      // tangent vector is (-y, x) normalized
      const bMag = 80; // visual scaling
      const bVec = { x: -state.current.p.y / r * bMag, y: state.current.p.x / r * bMag };
      
      drawArrow(px, py, px + bVec.x, py + bVec.y, '#10b981', 'B');

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
      if (Math.hypot(pos.x - state.current.p.x, pos.y - state.current.p.y) < 30) {
        state.current.dragging = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      const pos = getPos(e);
      if (Math.hypot(pos.x, pos.y) > 20) {
         state.current.p = pos;
      }
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

export default BiotSavartInteractive;