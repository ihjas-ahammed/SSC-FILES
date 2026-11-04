import React, { useRef, useEffect } from 'react';

const DotProductInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    u: { x: 60, y: -20 },
    v: { x: 40, y: 50 },
    dragging: null as 'u' | 'v' | null
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 300;
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

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(width, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, height); ctx.stroke();

      const { u, v } = state.current;
      const ux = u.x; const uy = -u.y; // visual y is flipped
      const vx = v.x; const vy = -v.y;

      drawArrow(cx, cy, cx + u.x, cy + u.y, '#3b82f6', 'u');
      drawArrow(cx, cy, cx + v.x, cy + v.y, '#ef4444', 'v');

      // Controls
      ctx.beginPath(); ctx.arc(cx + u.x, cy + u.y, 8, 0, 2*Math.PI); ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'; ctx.fill();
      ctx.beginPath(); ctx.arc(cx + v.x, cy + v.y, 8, 0, 2*Math.PI); ctx.fillStyle = 'rgba(239, 68, 68, 0.5)'; ctx.fill();

      // Calculation
      // Scale down coordinate values for display (e.g. /10)
      const uValX = Math.round(u.x / 10);
      const uValY = Math.round(-u.y / 10);
      const vValX = Math.round(v.x / 10);
      const vValY = Math.round(-v.y / 10);

      const dotProd = uValX * vValX + uValY * vValY;
      const lengthU = Math.sqrt(uValX*uValX + uValY*uValY).toFixed(1);
      const lengthV = Math.sqrt(vValX*vValX + vValY*vValY).toFixed(1);

      ctx.fillStyle = '#fff';
      ctx.font = '16px Nunito';
      ctx.fillText(`u = [${uValX}, ${uValY}]`, 10, 30);
      ctx.fillText(`v = [${vValX}, ${vValY}]`, 10, 50);
      ctx.font = 'bold 18px Nunito';
      ctx.fillStyle = '#f59e0b';
      ctx.fillText(`u · v = (${uValX})(${vValX}) + (${uValY})(${vValY}) = ${dotProd}`, 10, 80);
      
      // Angle
      const angle = Math.acos(dotProd / (parseFloat(lengthU) * parseFloat(lengthV) || 1)) * (180/Math.PI);
      if (!isNaN(angle)) {
         ctx.fillStyle = '#94a3b8';
         ctx.font = '14px Nunito';
         ctx.fillText(`Angle ≈ ${angle.toFixed(1)}°`, 10, 100);
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
      if (Math.hypot(pos.x - state.current.u.x, pos.y - state.current.u.y) < 30) state.current.dragging = 'u';
      else if (Math.hypot(pos.x - state.current.v.x, pos.y - state.current.v.y) < 30) state.current.dragging = 'v';
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      const pos = getPos(e);
      if (state.current.dragging === 'u') state.current.u = pos;
      if (state.current.dragging === 'v') state.current.v = pos;
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

export default DotProductInteractive;