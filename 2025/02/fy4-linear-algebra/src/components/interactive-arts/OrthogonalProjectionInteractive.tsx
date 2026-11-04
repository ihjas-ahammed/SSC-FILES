import React, { useRef, useEffect, useState } from 'react';

const OrthogonalProjectionInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // y is the vector we drag
  const state = useRef({
    y: { x: 50, y: -80 },
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
    
    const cx = 50; // origin x
    const cy = height - 50; // origin y

    // Define subspace W as a line at angle theta
    const theta = -Math.PI / 6; // -30 degrees
    const dirW = { x: Math.cos(theta), y: Math.sin(theta) };

    const drawArrow = (fx: number, fy: number, tx: number, ty: number, color: string, label: string, dash: boolean = false) => {
      const headlen = 10;
      const angle = Math.atan2(ty - fy, tx - fx);
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(tx, ty);
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      if (dash) ctx.setLineDash([5, 5]);
      else ctx.setLineDash([]);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Arrowhead
      if (!dash) {
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx - headlen * Math.cos(angle - Math.PI / 6), ty - headlen * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(tx - headlen * Math.cos(angle + Math.PI / 6), ty - headlen * Math.sin(angle + Math.PI / 6));
        ctx.fillStyle = color;
        ctx.fill();
      }

      ctx.fillStyle = color;
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(label, tx + 10, ty);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw W (the line)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - dirW.x * 1000, cy - dirW.y * 1000);
      ctx.lineTo(cx + dirW.x * 1000, cy + dirW.y * 1000);
      ctx.stroke();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fillText('W', width - 20, cy + dirW.y * (width - 20 - cx) / dirW.x - 10);

      // Current y vector
      const yVec = state.current.y;
      
      // Calculate Projection proj_W y
      // proj = (y . u) * u where u is unit vector of W
      const dot = yVec.x * dirW.x + yVec.y * dirW.y; // Standard dot product (y is inverted on screen relative to math)
      // Screen coordinates: y down is positive. Math coordinates: y up is positive.
      // Let's treat screen coords as the vector space for simplicity of drawing.
      
      const projX = dot * dirW.x;
      const projY = dot * dirW.y;
      
      // Calculate z (orthogonal component)
      const zX = yVec.x - projX;
      const zY = yVec.y - projY;

      // Draw y
      drawArrow(cx, cy, cx + yVec.x, cy + yVec.y, '#3b82f6', 'y');
      
      // Draw y_hat (projection)
      drawArrow(cx, cy, cx + projX, cy + projY, '#10b981', 'ŷ');

      // Draw z (orthogonal component)
      // Draw it starting from origin to show decomposition
      // drawArrow(cx, cy, cx + zX, cy + zY, '#ef4444', 'z');
      
      // Draw dashed line from y to y_hat (this is effectively z shifted)
      drawArrow(cx + projX, cy + projY, cx + yVec.x, cy + yVec.y, '#ef4444', 'z', true);

      // Draw Right Angle symbol
      // Need a small square at y_hat aligned with W and z
      // ... simplified: just text
      
      // Draw drag handle
      ctx.beginPath();
      ctx.arc(cx + yVec.x, cy + yVec.y, 15, 0, 2*Math.PI);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
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
      if (Math.hypot(pos.x - state.current.y.x, pos.y - state.current.y.y) < 30) {
        state.current.dragging = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      state.current.y = getPos(e);
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

export default OrthogonalProjectionInteractive;