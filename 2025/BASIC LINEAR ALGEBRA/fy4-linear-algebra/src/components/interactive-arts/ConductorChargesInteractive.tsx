import React, { useRef, useEffect } from 'react';

const ConductorChargesInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    fieldStrength: 0, // 0 to 1
    dragging: false,
    dragX: 0
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
    const r = 60; // radius of conductor

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const E = state.current.fieldStrength;

      // Draw External Field Lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
      ctx.lineWidth = 2;
      const numLines = 7;
      for(let i=0; i<numLines; i++) {
          const y = cy - r + (i * 2*r)/(numLines-1);
          ctx.beginPath();
          
          if (E > 0.1) {
              // Field lines break at conductor
              ctx.moveTo(10, y);
              ctx.lineTo(cx - r - 10, y);
              // Draw arrowhead
              ctx.moveTo(cx - r - 10, y);
              ctx.lineTo(cx - r - 15, y - 4);
              ctx.lineTo(cx - r - 15, y + 4);
              ctx.fill();
              
              ctx.moveTo(cx + r + 10, y);
              ctx.lineTo(width - 10, y);
              ctx.moveTo(width - 10, y);
              ctx.lineTo(width - 15, y - 4);
              ctx.lineTo(width - 15, y + 4);
              ctx.fill();
          } else {
              // Field goes straight through when E is ~0
              ctx.moveTo(10, y);
              ctx.lineTo(width - 10, y);
          }
          ctx.stroke();
      }

      // Draw Conductor
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 2*Math.PI);
      ctx.fillStyle = 'rgba(255,255,255,0.05)';
      ctx.fill();
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw Charges on surface based on E
      // Positive on right, Negative on left
      const numCharges = Math.floor(E * 10);
      for(let i=0; i<numCharges; i++) {
          const angle = (i - numCharges/2 + 0.5) * 0.2;
          
          // Right side (+)
          const px = cx + r * Math.cos(angle);
          const py = cy + r * Math.sin(angle);
          ctx.fillStyle = '#ef4444';
          ctx.beginPath(); ctx.arc(px, py, 4, 0, 2*Math.PI); ctx.fill();
          ctx.fillText('+', px + 8, py + 4);

          // Left side (-)
          const nx = cx - r * Math.cos(angle);
          const ny = cy + r * Math.sin(angle);
          ctx.fillStyle = '#3b82f6';
          ctx.beginPath(); ctx.arc(nx, ny, 4, 0, 2*Math.PI); ctx.fill();
          ctx.fillText('-', nx - 12, ny + 4);
      }

      // Internal Field Cancellation
      if (E > 0.1) {
          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 14px Nunito';
          ctx.fillText('E = 0 inside', cx - 35, cy + 5);
          
          // Arrow pointing left indicating induced field
          ctx.strokeStyle = '#f59e0b';
          ctx.beginPath();
          ctx.moveTo(cx + 20, cy + 20);
          ctx.lineTo(cx - 20, cy + 20);
          ctx.stroke();
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.moveTo(cx - 20, cy + 20); ctx.lineTo(cx - 15, cy + 16); ctx.lineTo(cx - 15, cy + 24); ctx.fill();
      }

      // Slider UI
      ctx.fillStyle = '#334155';
      ctx.fillRect(40, height - 30, width - 80, 6);
      
      const sliderX = 40 + E * (width - 80);
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(sliderX, height - 27, 8, 0, 2*Math.PI);
      ctx.fill();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText('External Field Strength', cx - 60, height - 10);
    };

    const getX = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return (clientX - rect.left) * (width / rect.width);
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const currX = getX(e);
      const sliderX = 40 + state.current.fieldStrength * (width - 80);
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
      
      state.current.fieldStrength = (newX - 40) / (width - 80);
      requestAnimationFrame(draw);
    };

    const onEnd = () => { state.current.dragging = false; };

    canvas.addEventListener('mousedown', onStart);
    canvas.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    canvas.addEventListener('touchstart', onStart, { passive: false });
    canvas.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);

    state.current.fieldStrength = 0.5; // initial
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

export default ConductorChargesInteractive;