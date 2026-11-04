import React, { useRef, useEffect } from 'react';

const GradientInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    p: { x: 80, y: -40 },
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

    // Topographical function: Gaussian hill
    const T = (x: number, y: number) => Math.exp(-(x*x + y*y) / 5000);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw contours
      for (let r = 20; r < 150; r += 20) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, 2*Math.PI);
        const val = T(r, 0);
        ctx.strokeStyle = `rgba(255, 255, 255, ${val * 0.8})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      const { p } = state.current;
      
      // Calculate Gradient analytically
      // dT/dx = -2x/5000 * T, dT/dy = -2y/5000 * T
      const val = T(p.x, p.y);
      const gradX = (-2 * p.x / 5000) * val;
      const gradY = (-2 * p.y / 5000) * val;
      
      // Scale gradient for visual representation
      const scale = -8000; 
      const vecX = gradX * scale;
      const vecY = gradY * scale;
      
      const px = cx + p.x;
      const py = cy + p.y;
      
      const tx = px + vecX;
      const ty = py + vecY;

      // Draw Gradient Arrow
      const headlen = 10;
      const angle = Math.atan2(vecY, vecX);
      
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(tx, ty);
      ctx.strokeStyle = '#ef4444'; // Red
      ctx.lineWidth = 4;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(tx - headlen * Math.cos(angle - Math.PI / 6), ty - headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(tx - headlen * Math.cos(angle + Math.PI / 6), ty - headlen * Math.sin(angle + Math.PI / 6));
      ctx.fillStyle = '#ef4444';
      ctx.fill();

      // Probe point
      ctx.beginPath();
      ctx.arc(px, py, 12, 0, 2*Math.PI);
      ctx.fillStyle = '#3b82f6';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px Nunito';
      ctx.fillText('∇T', tx + 10, ty + 10);
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
      if (Math.hypot(pos.x - state.current.p.x, pos.y - state.current.p.y) < 40) {
        state.current.dragging = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      state.current.p = getPos(e);
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

export default GradientInteractive;