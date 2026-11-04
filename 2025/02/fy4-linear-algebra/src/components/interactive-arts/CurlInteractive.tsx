import React, { useRef, useEffect } from 'react';

const CurlInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    p: { x: 40, y: 0 },
    dragging: false,
    angle: 0
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

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Swirling Field v = -y x^ + x y^
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)'; // Faint purple
      ctx.lineWidth = 1;
      for (let r = 20; r < 200; r += 30) {
          for (let i = 0; i < 12; i++) {
              const th = (i * Math.PI) / 6;
              const x = r * Math.cos(th);
              const y = r * Math.sin(th);
              // flow vector
              const vx = -y * 0.2;
              const vy = x * 0.2;
              
              ctx.beginPath();
              ctx.moveTo(cx + x, cy + y);
              ctx.lineTo(cx + x + vx, cy + y + vy);
              ctx.stroke();
          }
      }

      const px = cx + state.current.p.x;
      const py = cy + state.current.p.y;

      // Draw Paddlewheel
      state.current.angle += 0.05; // Constant curl -> constant rotation speed everywhere in this specific field
      const r = 25;
      
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(state.current.angle);
      
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 4;
      
      ctx.beginPath();
      ctx.moveTo(-r, 0); ctx.lineTo(r, 0);
      ctx.moveTo(0, -r); ctx.lineTo(0, r);
      ctx.stroke();

      // Cups on ends
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath(); ctx.arc(r, 0, 5, 0, 2*Math.PI); ctx.fill();
      ctx.beginPath(); ctx.arc(-r, 0, 5, 0, 2*Math.PI); ctx.fill();
      ctx.beginPath(); ctx.arc(0, r, 5, 0, 2*Math.PI); ctx.fill();
      ctx.beginPath(); ctx.arc(0, -r, 5, 0, 2*Math.PI); ctx.fill();
      
      ctx.restore();

      // Center pin
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, 2*Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      
      ctx.fillStyle = '#8b5cf6';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText('∇×v ≠ 0', px - 30, py + 45);

      animationId = requestAnimationFrame(draw);
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
      if (Math.hypot(pos.x - state.current.p.x, pos.y - state.current.p.y) < 50) {
        state.current.dragging = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      state.current.p = getPos(e);
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
      cancelAnimationFrame(animationId);
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

export default CurlInteractive;