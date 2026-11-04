import React, { useRef, useEffect } from 'react';

const DivergenceInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    p: { x: 50, y: -30 },
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

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Background static source field v = r
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)'; // Faint green
      ctx.lineWidth = 1;
      for (let x = -width/2; x < width/2; x+=40) {
        for (let y = -height/2; y < height/2; y+=40) {
            const mag = Math.hypot(x,y);
            if (mag === 0) continue;
            const dirX = x / mag * 15;
            const dirY = y / mag * 15;
            
            ctx.beginPath();
            ctx.moveTo(cx + x, cy + y);
            ctx.lineTo(cx + x + dirX, cy + y + dirY);
            ctx.stroke();
        }
      }

      // Draw active probe area
      const px = cx + state.current.p.x;
      const py = cy + state.current.p.y;

      ctx.beginPath();
      ctx.arc(px, py, 40, 0, 2*Math.PI);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw local divergence vectors coming out of the probe
      for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4;
          const r = 40;
          const vx = px + r * Math.cos(angle);
          const vy = py + r * Math.sin(angle);
          
          const flowLen = 20;
          const ex = vx + flowLen * Math.cos(angle);
          const ey = vy + flowLen * Math.sin(angle);

          ctx.beginPath();
          ctx.moveTo(vx, vy);
          ctx.lineTo(ex, ey);
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 3;
          ctx.stroke();

          // head
          ctx.beginPath();
          ctx.moveTo(ex, ey);
          ctx.lineTo(ex - 8 * Math.cos(angle - Math.PI / 6), ey - 8 * Math.sin(angle - Math.PI / 6));
          ctx.lineTo(ex - 8 * Math.cos(angle + Math.PI / 6), ey - 8 * Math.sin(angle + Math.PI / 6));
          ctx.fillStyle = '#10b981';
          ctx.fill();
      }

      // Probe center
      ctx.beginPath();
      ctx.arc(px, py, 12, 0, 2*Math.PI);
      ctx.fillStyle = '#3b82f6';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#fff';
      ctx.stroke();
      
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText('∇·v > 0', px - 25, py + 65);
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

export default DivergenceInteractive;