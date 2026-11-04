import React, { useRef, useEffect } from 'react';

const AmperesLawInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    radius: 0.5, // 0.2 to 1
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

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const maxR = 100;
      const minR = 20;
      const r = minR + state.current.radius * (maxR - minR);

      // Draw Wire (Center)
      ctx.beginPath();
      ctx.arc(cx, cy, 10, 0, 2*Math.PI);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      // Cross to indicate current INTO page
      ctx.beginPath();
      ctx.moveTo(cx - 5, cy - 5); ctx.lineTo(cx + 5, cy + 5);
      ctx.moveTo(cx + 5, cy - 5); ctx.lineTo(cx - 5, cy + 5);
      ctx.strokeStyle = '#000';
      ctx.stroke();

      // Draw Amperian Loop
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 2*Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw B Field Vectors on the loop
      // B ~ 1/r. Let's scale it so maxR gives a noticeable vector.
      const bMag = (maxR / r) * 15; 
      
      ctx.strokeStyle = '#10b981'; // Green
      ctx.fillStyle = '#10b981';
      ctx.lineWidth = 3;

      for (let i=0; i<4; i++) {
         const angle = (i * Math.PI) / 2;
         const px = cx + r * Math.cos(angle);
         const py = cy + r * Math.sin(angle);
         
         // Tangent direction: Current INTO page -> clockwise B field
         const tx = px + bMag * Math.sin(angle);
         const ty = py - bMag * Math.cos(angle);

         ctx.beginPath();
         ctx.moveTo(px, py);
         ctx.lineTo(tx, ty);
         ctx.stroke();

         // Arrowhead
         const headAngle = Math.atan2(ty - py, tx - px);
         ctx.beginPath();
         ctx.moveTo(tx, ty);
         ctx.lineTo(tx - 8 * Math.cos(headAngle - Math.PI / 6), ty - 8 * Math.sin(headAngle - Math.PI / 6));
         ctx.lineTo(tx - 8 * Math.cos(headAngle + Math.PI / 6), ty - 8 * Math.sin(headAngle + Math.PI / 6));
         ctx.fill();
      }

      // Readouts
      ctx.fillStyle = '#fff';
      ctx.font = '14px Nunito';
      ctx.fillText(`Path Length (2πs): ${(r/20).toFixed(1)} units`, 10, 20);
      ctx.fillText(`B Field Strength: ${(maxR/r).toFixed(1)} units`, 10, 40);
      
      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 16px Nunito';
      // Product is constant
      ctx.fillText(`Integral ∮B·dl = Constant (μ₀I)`, 10, 65);

      // Slider UI
      ctx.fillStyle = '#334155';
      ctx.fillRect(40, height - 20, width - 80, 6);
      
      const sliderX = 40 + state.current.radius * (width - 80);
      ctx.fillStyle = '#ef4444'; // duo-red
      ctx.beginPath();
      ctx.arc(sliderX, height - 17, 10, 0, 2*Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText('Drag to change Loop Radius (s)', cx - 80, height - 30);
    };

    const getX = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return (clientX - rect.left) * (width / rect.width);
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const currX = getX(e);
      const sliderX = 40 + state.current.radius * (width - 80);
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
      
      state.current.radius = (newX - 40) / (width - 80);
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

export default AmperesLawInteractive;