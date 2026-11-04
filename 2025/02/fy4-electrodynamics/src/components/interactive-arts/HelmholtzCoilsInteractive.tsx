import React, { useRef, useEffect } from 'react';

const HelmholtzCoilsInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    distance: 1.0, // Ratio d/R from 0 to 2
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
    const cy = height / 2 + 20; 
    const R = 40; // visual radius of coil

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const d = state.current.distance * R;

      // Draw Coils
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 4;
      
      // Left coil
      ctx.beginPath();
      ctx.ellipse(cx - d/2, cy, 10, R, 0, 0, 2*Math.PI);
      ctx.stroke();

      // Right coil
      ctx.beginPath();
      ctx.ellipse(cx + d/2, cy, 10, R, 0, 0, 2*Math.PI);
      ctx.stroke();

      // Plot B Field on Z-axis
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.beginPath();
      
      const plotHeight = 80;
      const plotYBase = cy - R - 20;
      
      for(let z = -cx; z < cx; z++) {
          // B formula: B(z) ~ (R^2) / (R^2 + (z - d/2)^2)^1.5 + (R^2) / (R^2 + (z + d/2)^2)^1.5
          const b1 = Math.pow(R, 2) / Math.pow(R*R + Math.pow(z - d/2, 2), 1.5);
          const b2 = Math.pow(R, 2) / Math.pow(R*R + Math.pow(z + d/2, 2), 1.5);
          
          const Btotal = b1 + b2;
          
          // scale for visual
          const plotY = plotYBase - Btotal * (plotHeight * R);

          if (z === -cx) ctx.moveTo(cx + z, plotY);
          else ctx.lineTo(cx + z, plotY);
      }
      ctx.stroke();

      // Draw axis
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, plotYBase); ctx.lineTo(width, plotYBase);
      ctx.stroke();

      // Highlight flatness when d/R approx 1
      if (Math.abs(state.current.distance - 1.0) < 0.05) {
          ctx.fillStyle = '#3b82f6';
          ctx.font = 'bold 14px Nunito';
          ctx.fillText('d = R (Helmholtz Configuration)', cx - 100, 30);
          ctx.fillText('Perfectly uniform B field in center!', cx - 110, 50);
      } else {
          ctx.fillStyle = '#94a3b8';
          ctx.font = '14px Nunito';
          ctx.fillText(`d/R = ${state.current.distance.toFixed(2)}`, cx - 30, 30);
      }

      // Slider UI
      ctx.fillStyle = '#334155';
      ctx.fillRect(40, height - 20, width - 80, 6);
      
      const sliderX = 40 + (state.current.distance / 2) * (width - 80);
      ctx.fillStyle = '#ef4444'; 
      ctx.beginPath();
      ctx.arc(sliderX, height - 17, 10, 0, 2*Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText('Drag to change coil separation d', cx - 80, height - 30);
    };

    const getX = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return (clientX - rect.left) * (width / rect.width);
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const currX = getX(e);
      const sliderX = 40 + (state.current.distance / 2) * (width - 80);
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
      
      state.current.distance = ((newX - 40) / (width - 80)) * 2;
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

export default HelmholtzCoilsInteractive;