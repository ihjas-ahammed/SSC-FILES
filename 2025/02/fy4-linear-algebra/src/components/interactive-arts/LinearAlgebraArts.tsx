import React, { useRef, useEffect } from 'react';

export const VectorSpaceInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    u: { x: 50, y: -40 },
    v: { x: -30, y: -50 },
    dragging: null as 'u' | 'v' | null
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

    const drawArrow = (fx: number, fy: number, tx: number, ty: number, color: string, label: string) => {
      if (Math.hypot(tx-fx, ty-fy) < 2) return; // don't draw tiny arrows
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

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(label, tx + 10, ty + 10);
      
      ctx.beginPath();
      ctx.arc(tx, ty, 15, 0, 2*Math.PI);
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i=0; i<width; i+=20) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke(); }
      for (let i=0; i<height; i+=20) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke(); }

      const { u, v } = state.current;
      const sum = { x: u.x + v.x, y: u.y + v.y };

      // Parallelogram lines
      ctx.beginPath();
      ctx.moveTo(cx + u.x, cy + u.y);
      ctx.lineTo(cx + sum.x, cy + sum.y);
      ctx.lineTo(cx + v.x, cy + v.y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      drawArrow(cx, cy, cx + u.x, cy + u.y, '#3b82f6', 'u');
      drawArrow(cx, cy, cx + v.x, cy + v.y, '#ef4444', 'v');
      drawArrow(cx, cy, cx + sum.x, cy + sum.y, '#10b981', 'u+v');
      
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, 2*Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.fillText('0', cx - 15, cy + 15);
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
      const { u, v } = state.current;
      if (Math.hypot(pos.x - u.x, pos.y - u.y) < 30) state.current.dragging = 'u';
      else if (Math.hypot(pos.x - v.x, pos.y - v.y) < 30) state.current.dragging = 'v';
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      const pos = getPos(e);
      if (state.current.dragging === 'u') state.current.u = pos;
      if (state.current.dragging === 'v') state.current.v = pos;
      requestAnimationFrame(draw);
    };

    const onEnd = () => { state.current.dragging = null; };

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

export const FunctionSpaceInteractive: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    const state = useRef({
      phase: 0,
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
  
        // Axes
        ctx.beginPath();
        ctx.moveTo(0, cy); ctx.lineTo(width, cy);
        ctx.moveTo(cx, 0); ctx.lineTo(cx, height);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
  
        const f = (x: number) => 40 * Math.sin(x / 30);
        const g = (x: number) => 40 * Math.cos((x + state.current.phase) / 20);
  
        // Draw f
        ctx.beginPath();
        for (let x = -cx; x < cx; x++) {
            if (x === -cx) ctx.moveTo(cx + x, cy - f(x));
            else ctx.lineTo(cx + x, cy - f(x));
        }
        ctx.strokeStyle = '#3b82f6'; // Blue
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#3b82f6';
        ctx.fillText('f(t)', 20, 40);
  
        // Draw g
        ctx.beginPath();
        for (let x = -cx; x < cx; x++) {
            if (x === -cx) ctx.moveTo(cx + x, cy - g(x));
            else ctx.lineTo(cx + x, cy - g(x));
        }
        ctx.strokeStyle = '#ef4444'; // Red
        ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.fillText('g(t)', 20, 60);
  
        // Draw f+g
        ctx.beginPath();
        for (let x = -cx; x < cx; x++) {
            if (x === -cx) ctx.moveTo(cx + x, cy - (f(x) + g(x)));
            else ctx.lineTo(cx + x, cy - (f(x) + g(x)));
        }
        ctx.strokeStyle = '#10b981'; // Green
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.fillStyle = '#10b981';
        ctx.fillText('(f+g)(t)', 20, 80);
  
        // Slider UI
        ctx.fillStyle = '#334155';
        ctx.fillRect(40, height - 20, width - 80, 6);
        
        // Map phase (-100 to 100) to slider X
        const phaseNorm = (state.current.phase + 100) / 200;
        const sliderX = 40 + phaseNorm * (width - 80);
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(sliderX, height - 17, 10, 0, 2*Math.PI);
        ctx.fill();
  
        ctx.fillStyle = '#94a3b8';
        ctx.font = '12px Nunito';
        ctx.fillText('Drag to shift g(t)', cx - 50, height - 30);
      };
  
      const getX = (e: MouseEvent | TouchEvent) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        return (clientX - rect.left) * (width / rect.width);
      };
  
      const onStart = (e: MouseEvent | TouchEvent) => {
        e.preventDefault();
        const currX = getX(e);
        const phaseNorm = (state.current.phase + 100) / 200;
        const sliderX = 40 + phaseNorm * (width - 80);
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
        
        const phaseNorm = (newX - 40) / (width - 80);
        state.current.phase = phaseNorm * 200 - 100;
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