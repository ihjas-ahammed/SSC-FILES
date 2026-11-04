import React, { useRef, useEffect } from 'react';

const SubspaceDimensionsInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 250;
    canvas.width = width;
    canvas.height = height;

    const drawAxes = (cx: number, cy: number, scale: number, label: string) => {
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, cy - scale); ctx.stroke(); // z
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + scale, cy); ctx.stroke(); // y
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx - scale*0.7, cy + scale*0.6); ctx.stroke(); // x
        
        ctx.fillStyle = '#94a3b8';
        ctx.font = '12px Nunito';
        ctx.fillText(label, cx - 10, cy + 20);
    };

    const draw = () => {
        ctx.clearRect(0, 0, width, height);
        
        const spacing = width / 4;
        const cy = height / 2 + 20;
        const scale = 40;

        // 0-Dim
        let cx = spacing * 0.5;
        drawAxes(cx, cy, scale, "0-Dim (Point)");
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(cx, cy, 4, 0, 2*Math.PI); ctx.fill();

        // 1-Dim
        cx = spacing * 1.5;
        drawAxes(cx, cy, scale, "1-Dim (Line)");
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 3;
        ctx.beginPath(); 
        ctx.moveTo(cx - 20, cy + 17); 
        ctx.lineTo(cx + 30, cy - 25); 
        ctx.stroke();

        // 2-Dim
        cx = spacing * 2.5;
        drawAxes(cx, cy, scale, "2-Dim (Plane)");
        ctx.fillStyle = 'rgba(16, 185, 129, 0.3)';
        ctx.strokeStyle = '#10b981';
        ctx.beginPath();
        ctx.moveTo(cx - 30, cy + 10);
        ctx.lineTo(cx + 10, cy + 10);
        ctx.lineTo(cx + 30, cy - 20);
        ctx.lineTo(cx - 10, cy - 20);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 3-Dim
        cx = spacing * 3.5;
        drawAxes(cx, cy, scale, "3-Dim (Space)");
        ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
        ctx.strokeStyle = '#ef4444';
        
        // Draw a cube-like shape
        const s = 25;
        const xOff = -10; const yOff = 10;
        // Back face
        ctx.beginPath(); ctx.rect(cx - s + xOff, cy - s - yOff, s*2, s*2); 
        ctx.fillStyle = 'rgba(239, 68, 68, 0.1)'; ctx.fill(); ctx.stroke();
        // Front face
        ctx.beginPath(); ctx.rect(cx - s, cy - s, s*2, s*2); 
        ctx.fillStyle = 'rgba(239, 68, 68, 0.2)'; ctx.fill(); ctx.stroke();
        // Connectors
        ctx.beginPath();
        ctx.moveTo(cx - s, cy - s); ctx.lineTo(cx - s + xOff, cy - s - yOff);
        ctx.moveTo(cx + s, cy - s); ctx.lineTo(cx + s + xOff, cy - s - yOff);
        ctx.moveTo(cx - s, cy + s); ctx.lineTo(cx - s + xOff, cy + s - yOff);
        ctx.moveTo(cx + s, cy + s); ctx.lineTo(cx + s + xOff, cy + s - yOff);
        ctx.stroke();
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl bg-black/30"></canvas>;
};

export default SubspaceDimensionsInteractive;