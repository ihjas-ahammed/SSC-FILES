import React, { useRef, useEffect } from 'react';

const NullSpaceMappingInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    x: 20, // input vector x component
    y: 20, // input vector y component
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
    
    // Matrix A = [[1, -1], [-1, 1]]. 
    // This squashes vectors along y=x to zero. Null space is line y=x.
    // Col space is line y=-x.

    const drawArrow = (cx: number, cy: number, vx: number, vy: number, color: string, label: string) => {
      if (Math.hypot(vx, vy) < 1) {
          // Draw a dot if zero vector
          ctx.fillStyle = color;
          ctx.beginPath(); ctx.arc(cx, cy, 4, 0, 2*Math.PI); ctx.fill();
          return;
      }
      const headlen = 8;
      const angle = Math.atan2(vy, vx);
      const tx = cx + vx;
      const ty = cy - vy; // flip y for screen

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(tx, ty);
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(tx - headlen * Math.cos(angle - Math.PI / 6), ty + headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(tx - headlen * Math.cos(angle + Math.PI / 6), ty + headlen * Math.sin(angle + Math.PI / 6));
      ctx.fillStyle = color;
      ctx.fill();

      ctx.fillStyle = color;
      ctx.font = 'bold 12px Nunito';
      ctx.fillText(label, tx + 5, ty);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw two systems: Domain (R2) and Codomain (R2)
      const cx1 = width / 4;
      const cy = height / 2;
      
      const cx2 = (3 * width) / 4;

      // Draw Domain Grid
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.strokeRect(10, 10, width/2 - 20, height - 20);
      ctx.fillStyle = '#fff';
      ctx.fillText('Domain R²', cx1 - 30, 30);
      
      // Draw Null Space Line in Domain (y=x)
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)'; // red dashed
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(cx1 - 50, cy + 50);
      ctx.lineTo(cx1 + 50, cy - 50);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#ef4444';
      ctx.fillText('Nul A', cx1 - 60, cy + 60);

      // Draw Codomain Grid
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.strokeRect(width/2 + 10, 10, width/2 - 20, height - 20);
      ctx.fillStyle = '#fff';
      ctx.fillText('Codomain R²', cx2 - 30, 30);

      // Input Vector x
      const { x, y } = state.current;
      drawArrow(cx1, cy, x, y, '#3b82f6', 'x');
      
      // Draggable point
      const screenX = cx1 + x;
      const screenY = cy - y;
      ctx.beginPath();
      ctx.arc(screenX, screenY, 8, 0, 2*Math.PI);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.stroke();

      // Output Vector Ax
      // A = [[1, -1], [-1, 1]]
      // Ax = [x - y, -x + y]
      const ax_x = x - y;
      const ax_y = -x + y;
      
      drawArrow(cx2, cy, ax_x, ax_y, '#10b981', 'Ax');

      // Visual Cues
      const isNull = Math.abs(ax_x) < 2 && Math.abs(ax_y) < 2;
      
      if (isNull) {
          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 16px Nunito';
          ctx.fillText('Ax = 0! x is in Nul A', width/2 - 60, height - 20);
          
          // Highlight origin in codomain
          ctx.beginPath(); ctx.arc(cx2, cy, 6, 0, 2*Math.PI); ctx.fillStyle = '#ef4444'; ctx.fill();
      } else {
          ctx.fillStyle = '#94a3b8';
          ctx.font = '14px Nunito';
          ctx.fillText('Drag x to the red line', width/2 - 50, height - 20);
      }
    };

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      const cx1 = width / 4;
      const cy = height / 2;
      return {
        x: (clientX - rect.left) - cx1,
        y: cy - ((clientY - rect.top)) // flip y
      };
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const pos = getPos(e);
      // Check if near tip
      if (Math.hypot(pos.x - state.current.x, pos.y - state.current.y) < 40) {
          state.current.dragging = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      const pos = getPos(e);
      state.current.x = pos.x;
      state.current.y = pos.y;
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

export default NullSpaceMappingInteractive;