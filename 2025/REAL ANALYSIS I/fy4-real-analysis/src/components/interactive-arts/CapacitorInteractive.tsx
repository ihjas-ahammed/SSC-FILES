import React, { useRef, useEffect } from 'react';

const CapacitorInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    distance: 0.5, // 0 to 1 (0 is min distance, 1 is max)
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

      const dVal = 20 + state.current.distance * 80; // distance in pixels between 20 and 100
      
      const topY = cy - dVal/2;
      const botY = cy + dVal/2;

      // Draw Plates
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(cx - 80, topY - 10, 160, 10); // top plate
      ctx.fillRect(cx - 80, botY, 160, 10); // bottom plate
      
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText('+Q', cx + 90, topY);
      ctx.fillText('-Q', cx + 90, botY + 10);

      // Draw Field Lines
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)'; // Amber field lines
      ctx.lineWidth = 2;
      for(let x = cx - 70; x <= cx + 70; x+=20) {
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, botY);
          ctx.stroke();
          // Arrow
          ctx.beginPath();
          ctx.moveTo(x, cy + 5);
          ctx.lineTo(x - 4, cy - 3);
          ctx.lineTo(x + 4, cy - 3);
          ctx.fillStyle = 'rgba(245, 158, 11, 0.8)';
          ctx.fill();
      }

      // Capacitance Bar
      // C ~ 1/d. Let's say d goes from 20 to 100. 
      // Max C at d=20 -> 100%. Min C at d=100 -> 20%.
      const capacitancePct = 20 / dVal; 
      
      ctx.fillStyle = '#334155';
      ctx.fillRect(cx - 80, height - 70, 160, 15);
      ctx.fillStyle = '#10b981';
      ctx.fillRect(cx - 80, height - 70, 160 * capacitancePct, 15);
      
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 12px Nunito';
      ctx.fillText('Capacitance (C = ε₀A / d)', cx - 70, height - 85);

      // Slider UI for distance
      ctx.fillStyle = '#334155';
      ctx.fillRect(40, height - 20, width - 80, 6);
      
      const sliderX = 40 + state.current.distance * (width - 80);
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(sliderX, height - 17, 10, 0, 2*Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText('Drag to change distance (d)', cx - 75, height - 30);
    };

    const getX = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return (clientX - rect.left) * (width / rect.width);
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const currX = getX(e);
      const sliderX = 40 + state.current.distance * (width - 80);
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
      
      state.current.distance = (newX - 40) / (width - 80);
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

export default CapacitorInteractive;