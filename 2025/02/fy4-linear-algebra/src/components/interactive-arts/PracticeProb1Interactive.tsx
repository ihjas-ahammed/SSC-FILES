import React, { useRef, useEffect } from 'react';

const PracticeProb1Interactive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    c: 0.5, // Scalar to multiply u by
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
    const cy = height - 40; 

    // The set H: x = 3s, y = 2 + 5s.
    // At s=0, (0, 2). At s=1, (3, 7).
    // In canvas coords (y is flipped): 
    // x_screen = cx + 3s * scale
    // y_screen = cy - (2 + 5s) * scale
    const scale = 20;

    const getHPoint = (s: number) => ({
      x: cx + (3 * s) * scale,
      y: cy - (2 + 5 * s) * scale
    });

    const drawArrow = (fx: number, fy: number, tx: number, ty: number, color: string, label: string) => {
      const dx = tx - fx;
      const dy = ty - fy;
      // if (Math.hypot(dx, dy) < 2) return;
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

      ctx.fillStyle = color;
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(label, tx + 10, ty);
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

      // Draw the line H
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const pStart = getHPoint(-10);
      const pEnd = getHPoint(10);
      ctx.moveTo(pStart.x, pStart.y);
      ctx.lineTo(pEnd.x, pEnd.y);
      ctx.stroke();
      ctx.fillStyle = '#3b82f6';
      ctx.fillText('H', pEnd.x - 20, pEnd.y + 20);

      // Vector u in H (let's pick s=1 for visibility)
      // u = (3, 7)
      const u = { x: 3 * scale, y: 7 * scale };
      const uScreen = { x: cx + u.x, y: cy - u.y };

      drawArrow(cx, cy, uScreen.x, uScreen.y, '#10b981', 'u');

      // Scaled Vector c*u
      const c = state.current.c;
      const cu = { x: u.x * c, y: u.y * c };
      const cuScreen = { x: cx + cu.x, y: cy - cu.y };

      // Check if cu is in H?
      // H passes through (0, 2*scale). Line eq: y - 2 = (5/3)x
      // Our vector starts at (0,0). So cu is in H only if line passes through origin, which it doesn't.
      
      drawArrow(cx, cy, cuScreen.x, cuScreen.y, '#ef4444', 'cu');

      // Slider UI
      ctx.fillStyle = '#334155';
      ctx.fillRect(40, height - 30, width - 80, 6);
      
      const cNorm = (c + 2) / 4; // Map -2..2 to 0..1
      const sliderX = 40 + cNorm * (width - 80);
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(sliderX, height - 27, 10, 0, 2*Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText(`c = ${c.toFixed(2)}`, cx - 30, height - 10);
      
      if (Math.abs(c) < 0.1) {
          ctx.fillStyle = '#f59e0b';
          ctx.fillText('Origin (0,0) is NOT in H', 20, 40);
      } else {
          ctx.fillStyle = '#f59e0b';
          ctx.fillText('cu is OFF the line H', 20, 40);
      }
    };

    const getX = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return (clientX - rect.left) * (width / rect.width);
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const currX = getX(e);
      const cNorm = (state.current.c + 2) / 4;
      const sliderX = 40 + cNorm * (width - 80);
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
      
      const cNorm = (newX - 40) / (width - 80);
      state.current.c = cNorm * 4 - 2; 
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

export default PracticeProb1Interactive;