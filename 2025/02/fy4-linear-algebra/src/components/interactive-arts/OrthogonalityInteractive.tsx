import React, { useRef, useEffect } from 'react';

const OrthogonalityInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    v: { x: 50, y: -20 },
    dragging: false
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

    // Fixed vector u
    const u = { x: 60, y: 30 }; 

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

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(label, tx + 10, ty + 10);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw Orthogonal line to u
      // u slope m = u.y / u.x. Orthogonal slope = -u.x / u.y.
      const orthSlopeX = -u.y;
      const orthSlopeY = u.x;
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(cx - orthSlopeX*2, cy - orthSlopeY*2);
      ctx.lineTo(cx + orthSlopeX*2, cy + orthSlopeY*2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fillText('u^perp', cx + orthSlopeX*2 + 5, cy + orthSlopeY*2);

      const { v } = state.current;
      
      drawArrow(cx, cy, cx + u.x, cy + u.y, '#3b82f6', 'u');
      drawArrow(cx, cy, cx + v.x, cy + v.y, '#ef4444', 'v');

      // Control
      ctx.beginPath(); ctx.arc(cx + v.x, cy + v.y, 10, 0, 2*Math.PI); ctx.fillStyle = 'rgba(239, 68, 68, 0.3)'; ctx.fill();

      // Dot product calculation
      // Visual Y is opposite to math Y
      const mathUx = u.x; const mathUy = -u.y;
      const mathVx = v.x; const mathVy = -v.y;
      
      const dot = mathUx * mathVx + mathUy * mathVy;
      
      const isOrthogonal = Math.abs(dot) < 500; // tolerance

      ctx.fillStyle = isOrthogonal ? '#10b981' : '#f59e0b';
      ctx.font = 'bold 18px Nunito';
      ctx.fillText(`u · v = ${Math.round(dot)}`, 10, 30);
      
      if (isOrthogonal) {
         ctx.fillText("ORTHOGONAL!", 10, 60);
      } else {
         ctx.font = '14px Nunito';
         ctx.fillStyle = '#94a3b8';
         ctx.fillText("Drag v to the dotted line", 10, 60);
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
      if (Math.hypot(pos.x - state.current.v.x, pos.y - state.current.v.y) < 30) state.current.dragging = true;
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

export default OrthogonalityInteractive;