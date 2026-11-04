import React, { useRef, useEffect } from 'react';

const LineNotOriginInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    aX: -40,
    bX: 30,
    dragging: null as 'A' | 'B' | null
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

    // Line equation: y = 2 (in math coords, shifted up by 40 px)
    const yOffset = -40;

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

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(label, tx + 10, ty - 10);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i=0; i<width; i+=20) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke(); }
      for (let i=0; i<height; i+=20) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke(); }

      // Axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(width, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, height); ctx.stroke();
      
      ctx.fillStyle = '#fff';
      ctx.fillText('0', cx - 15, cy + 15);

      // The line y = c (shifted line)
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(0, cy + yOffset);
      ctx.lineTo(width, cy + yOffset);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillText('L: line not through origin', 10, cy + yOffset - 10);

      const a = { x: state.current.aX, y: yOffset };
      const b = { x: state.current.bX, y: yOffset };
      
      // A+B Vector
      const sum = { x: a.x + b.x, y: a.y + b.y }; // y will be 2 * yOffset

      drawArrow(cx, cy, cx + a.x, cy + a.y, '#10b981', 'u');
      drawArrow(cx, cy, cx + b.x, cy + b.y, '#f59e0b', 'v');
      
      // Parallelogram lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cx + a.x, cy + a.y);
      ctx.lineTo(cx + sum.x, cy + sum.y);
      ctx.lineTo(cx + b.x, cy + b.y);
      ctx.stroke();
      ctx.setLineDash([]);

      drawArrow(cx, cy, cx + sum.x, cy + sum.y, '#ef4444', 'u+v');

      // Hitboxes
      ctx.beginPath(); ctx.arc(cx + a.x, cy + a.y, 15, 0, 2*Math.PI); ctx.fillStyle = 'rgba(16, 185, 129, 0.2)'; ctx.fill();
      ctx.beginPath(); ctx.arc(cx + b.x, cy + b.y, 15, 0, 2*Math.PI); ctx.fillStyle = 'rgba(245, 158, 11, 0.2)'; ctx.fill();

      // Info text
      ctx.fillStyle = '#ef4444';
      ctx.fillText('u+v escapes the line!', cx - 70, height - 20);
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
      if (Math.hypot(pos.x - state.current.aX, pos.y - yOffset) < 30) state.current.dragging = 'A';
      else if (Math.hypot(pos.x - state.current.bX, pos.y - yOffset) < 30) state.current.dragging = 'B';
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      const pos = getPos(e);
      if (state.current.dragging === 'A') state.current.aX = pos.x;
      if (state.current.dragging === 'B') state.current.bX = pos.x;
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

export default LineNotOriginInteractive;