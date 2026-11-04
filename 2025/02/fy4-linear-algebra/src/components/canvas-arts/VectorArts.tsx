import React, { useEffect, useRef } from 'react';

export const VectorAddition: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = 200;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const drawArrow = (fromX: number, fromY: number, toX: number, toY: number, color: string, label: string) => {
      const headlen = 10;
      const dx = toX - fromX;
      const dy = toY - fromY;
      const angle = Math.atan2(dy, dx);
      
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
      ctx.lineTo(toX, toY);
      ctx.fillStyle = color;
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.font = 'italic bold 16px Nunito';
      ctx.fillText(label, fromX + dx/2 - 10, fromY + dy/2 - 10);
    };

    const cx = 50;
    const cy = 150;
    
    // A vector
    drawArrow(cx, cy, cx + 80, cy - 100, '#3b82f6', 'A');
    // B vector
    drawArrow(cx + 80, cy - 100, cx + 180, cy - 20, '#f59e0b', 'B');
    // A+B vector
    drawArrow(cx, cy, cx + 180, cy - 20, '#10b981', 'A+B');

  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export const GradientField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = 200;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Draw contour rings
    for (let r = 80; r > 10; r -= 20) {
      ctx.beginPath();
      ctx.ellipse(cx, cy, r*1.2, r*0.8, Math.PI/8, 0, 2*Math.PI);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + (100-r)/200})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Draw gradient arrows perpendicular to contours
    const drawGradientArrow = (x: number, y: number, angle: number) => {
      const len = 20;
      const toX = x + len * Math.cos(angle);
      const toY = y + len * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(toX, toY);
      ctx.strokeStyle = '#ef4444'; // Red for gradient
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(toX, toY, 3, 0, 2*Math.PI);
      ctx.fillStyle = '#ef4444';
      ctx.fill();
    };

    drawGradientArrow(cx + 40, cy + 30, Math.PI - 0.5); // approximate inward normals to represent uphill
    drawGradientArrow(cx - 50, cy - 40, 0.5);
    drawGradientArrow(cx + 10, cy - 50, Math.PI/2 + 0.2);
    drawGradientArrow(cx - 20, cy + 60, -Math.PI/2 - 0.2);

    ctx.fillStyle = '#fff';
    ctx.font = '14px Nunito';
    ctx.fillText('∇T points uphill', cx - 40, cy + 90);
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export const DivergenceField: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
  
      canvas.width = canvas.parentElement?.clientWidth || 300;
      canvas.height = 200;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
  
      const drawArrow = (x: number, y: number, angle: number, length: number) => {
        const toX = x + length * Math.cos(angle);
        const toY = y + length * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(toX, toY);
        ctx.strokeStyle = '#10b981'; 
        ctx.lineWidth = 2;
        ctx.stroke();
  
        // arrowhead
        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - 6 * Math.cos(angle - Math.PI / 6), toY - 6 * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(toX - 6 * Math.cos(angle + Math.PI / 6), toY - 6 * Math.sin(angle + Math.PI / 6));
        ctx.fillStyle = '#10b981';
        ctx.fill();
      };
  
      // Draw radiating vectors (Faucet)
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, 2*Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      
      for(let i=0; i<8; i++) {
        drawArrow(cx, cy, (i * Math.PI) / 4, 30);
        drawArrow(cx + 40*Math.cos((i * Math.PI) / 4), cy + 40*Math.sin((i * Math.PI) / 4), (i * Math.PI) / 4, 20);
      }
  
      ctx.fillStyle = '#fff';
      ctx.font = '14px Nunito';
      ctx.fillText('∇·v > 0 (Source)', cx - 50, cy + 90);
    }, []);
  
    return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
  };

  export const CurlField: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
  
      canvas.width = canvas.parentElement?.clientWidth || 300;
      canvas.height = 200;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
  
      const drawArrow = (x: number, y: number, vx: number, vy: number) => {
        const toX = x + vx;
        const toY = y + vy;
        const angle = Math.atan2(vy, vx);
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(toX, toY);
        ctx.strokeStyle = '#8b5cf6'; 
        ctx.lineWidth = 2;
        ctx.stroke();
  
        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - 5 * Math.cos(angle - Math.PI / 6), toY - 5 * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(toX - 5 * Math.cos(angle + Math.PI / 6), toY - 5 * Math.sin(angle + Math.PI / 6));
        ctx.fillStyle = '#8b5cf6';
        ctx.fill();
      };
  
      // v = -y x^ + x y^ (Swirl)
      for (let r = 20; r <= 60; r += 20) {
        for(let i=0; i<8; i++) {
            const angle = (i * Math.PI) / 4;
            const x = r * Math.cos(angle);
            const y = r * Math.sin(angle);
            
            // Velocity components
            const vx = -y * 0.4;
            const vy = x * 0.4;
            
            drawArrow(cx + x, cy + y, vx, vy);
        }
      }
      
      // Paddlewheel in center
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, 2*Math.PI);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.moveTo(cx-10, cy); ctx.lineTo(cx+10, cy);
      ctx.moveTo(cx, cy-10); ctx.lineTo(cx, cy+10);
      ctx.stroke();
  
      ctx.fillStyle = '#fff';
      ctx.font = '14px Nunito';
      ctx.fillText('∇×v ≠ 0 (Swirl)', cx - 50, cy + 90);
    }, []);
  
    return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
  };