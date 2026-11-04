import React, { useRef, useEffect } from 'react';

const WorkPathInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const state = useRef({
    p: { x: -60, y: 60 },
    dragging: false,
    path: [] as {x: number, y: number}[]
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

    // Point A and B
    const ptA = { x: -80, y: 80 };
    const ptB = { x: 80, y: -80 };

    // Simple uniform E-field pointing down-right (E = x^ - y^) -> Potential V = -x + y
    const V = (x: number, y: number) => -x + y;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Equipotentials
      for (let v = -200; v <= 200; v += 40) {
        ctx.beginPath();
        // V = -x + y => y = x + V
        ctx.moveTo(0, cy - (cx + v));
        ctx.lineTo(width, cy - (-cx + v));
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw path history
      if (state.current.path.length > 1) {
        ctx.beginPath();
        ctx.moveTo(cx + state.current.path[0].x, cy + state.current.path[0].y);
        for(let i=1; i<state.current.path.length; i++) {
           ctx.lineTo(cx + state.current.path[i].x, cy + state.current.path[i].y);
        }
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Draw A and B
      ctx.fillStyle = '#10b981'; // Green A
      ctx.beginPath(); ctx.arc(cx + ptA.x, cy + ptA.y, 6, 0, 2*Math.PI); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.fillText('A', cx + ptA.x - 15, cy + ptA.y + 5);

      ctx.fillStyle = '#ef4444'; // Red B
      ctx.beginPath(); ctx.arc(cx + ptB.x, cy + ptB.y, 6, 0, 2*Math.PI); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.fillText('B', cx + ptB.x + 10, cy + ptB.y + 5);

      // Draw Draggable Charge
      const px = cx + state.current.p.x;
      const py = cy + state.current.p.y;
      
      ctx.beginPath();
      ctx.arc(px, py, 12, 0, 2*Math.PI);
      ctx.fillStyle = '#3b82f6';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px Nunito';
      ctx.fillText('+Q', px - 10, py - 15);

      // Display Work Done
      const currentV = V(state.current.p.x, state.current.p.y);
      const startV = V(ptA.x, ptA.y);
      const workDone = currentV - startV; // W = Q(V - Va)
      
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 16px Nunito';
      ctx.fillText(`Net Work Done: ${workDone.toFixed(0)} units`, 10, 30);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText(`Path length does not matter!`, 10, 50);
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
        // reset path if near A
        if (Math.hypot(pos.x - ptA.x, pos.y - ptA.y) < 20) {
            state.current.path = [pos];
        }
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!state.current.dragging) return;
      e.preventDefault();
      const newPos = getPos(e);
      state.current.p = newPos;
      state.current.path.push(newPos);
      requestAnimationFrame(draw);
    };

    const onEnd = () => { state.current.dragging = false; };

    canvas.addEventListener('mousedown', onStart);
    canvas.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    canvas.addEventListener('touchstart', onStart, { passive: false });
    canvas.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);

    // Initial path setup to start at A
    state.current.p = {...ptA};
    state.current.path = [{...ptA}];
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

export default WorkPathInteractive;