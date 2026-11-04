import React, { useRef, useEffect } from 'react';

const MagBoundaryInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    kMagnitude: 0.5, // 0 to 1
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
    const cy = height / 2 - 20; 

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
      ctx.fillText(label, tx + 5, ty - 5);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw the infinite plane (3D perspective)
      ctx.fillStyle = 'rgba(148, 163, 184, 0.2)'; // slate-400 with opacity
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.8)';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy + 20);
      ctx.lineTo(cx + 60, cy + 20);
      ctx.lineTo(cx + 100, cy - 20);
      ctx.lineTo(cx - 60, cy - 20);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw surface current K (arrows on the plane pointing 'into' screen / right)
      const k = state.current.kMagnitude;
      const numArrows = Math.max(1, Math.floor(k * 5));
      ctx.strokeStyle = '#f59e0b'; // amber
      ctx.lineWidth = 2;
      for (let i=0; i<numArrows; i++) {
         const x = cx - 40 + i * 20;
         const y = cy;
         ctx.beginPath();
         ctx.moveTo(x - 10, y + 5);
         ctx.lineTo(x + 10, y - 5);
         ctx.stroke();
         // arrowhead
         ctx.beginPath();
         ctx.moveTo(x + 10, y - 5);
         ctx.lineTo(x + 2, y - 5);
         ctx.lineTo(x + 8, y + 1);
         ctx.fillStyle = '#f59e0b';
         ctx.fill();
      }
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('Surface Current K', cx + 30, cy - 25);

      // Draw Magnetic Field Vectors B
      // K is roughly in +x / -y direction (into page)
      // By right hand rule, B points left (-x) above, right (+x) below.
      const bMag = 30 + k * 60;
      
      // B above
      drawArrow(cx, cy - 40, cx - bMag, cy - 40, '#10b981', 'B above');
      
      // B below
      drawArrow(cx, cy + 40, cx + bMag, cy + 40, '#10b981', 'B below');

      // Normal Vector (continuous)
      // Since K is pure horizontal, B has no normal component in this simple setup.
      // But we can add a tiny visual text.
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText('Tangential B jumps by μ₀K', cx - 120, cy - 60);

      // Slider UI
      ctx.fillStyle = '#334155';
      ctx.fillRect(40, height - 20, width - 80, 6);
      
      const sliderX = 40 + state.current.kMagnitude * (width - 80);
      ctx.fillStyle = '#ef4444'; // duo-red
      ctx.beginPath();
      ctx.arc(sliderX, height - 17, 10, 0, 2*Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText('Drag to change Current K', cx - 70, height - 30);
    };

    const getX = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return (clientX - rect.left) * (width / rect.width);
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const currX = getX(e);
      const sliderX = 40 + state.current.kMagnitude * (width - 80);
      if (Math.abs(currX - sliderX) < 30) {
        state.current.dragging = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      let newX = getX(e);
      if (newX < 40) newX = 40;
      if (newX > width - 40) newX = width - 40;
      
      state.current.kMagnitude = (newX - 40) / (width - 80);
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

export default MagBoundaryInteractive;