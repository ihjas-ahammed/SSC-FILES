import React, { useRef, useEffect } from 'react';

const LorentzForceInteractive: React.FC = () => {
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
    const height = 280;
    canvas.width = width;
    canvas.height = height;
    
    const cx = width / 2;
    const cy = height / 2; 

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

      ctx.fillStyle = color;
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(label, tx + 10, ty + 10);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Uniform B Field (Into the page -> Crosses)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 2;
      for (let x = 20; x < width; x += 40) {
        for (let y = 20; y < height; y += 40) {
          ctx.beginPath();
          ctx.moveTo(x - 4, y - 4); ctx.lineTo(x + 4, y + 4);
          ctx.moveTo(x + 4, y - 4); ctx.lineTo(x - 4, y + 4);
          ctx.stroke();
        }
      }
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '14px Nunito';
      ctx.fillText('B Field (Into screen)', 10, 20);

      // Positive Charge
      ctx.beginPath();
      ctx.arc(cx, cy, 10, 0, 2*Math.PI);
      ctx.fillStyle = '#ef4444';
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('+', cx - 4, cy + 5);

      // Velocity Vector (Draggable)
      const { v } = state.current;
      drawArrow(cx, cy, cx + v.x, cy + v.y, '#3b82f6', 'v');
      
      // Draggable Hitbox
      ctx.beginPath();
      ctx.arc(cx + v.x, cy + v.y, 20, 0, 2*Math.PI);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.fill();

      // Lorentz Force (F = qv x B)
      // If B is into page (-z), and v is (vx, vy, 0)
      // v x B = (vx i + vy j) x (-B k) = vx B j - vy B i
      // Force vector = (-vy, vx) scaled
      const forceScale = 0.8;
      const f = { x: -v.y * forceScale, y: v.x * forceScale };
      
      drawArrow(cx, cy, cx + f.x, cy + f.y, '#10b981', 'F');
      
      // Draw perpendicular angle symbol
      const angleV = Math.atan2(v.y, v.x);
      const angleF = Math.atan2(f.y, f.x);
      ctx.beginPath();
      ctx.arc(cx, cy, 20, Math.min(angleV, angleF), Math.max(angleV, angleF));
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
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
      if (Math.hypot(pos.x - state.current.v.x, pos.y - state.current.v.y) < 30) {
        state.current.dragging = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      const pos = getPos(e);
      // prevent v from being too close to 0
      if (Math.hypot(pos.x, pos.y) > 20) {
         state.current.v = pos;
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

export default LorentzForceInteractive;