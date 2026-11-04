import React, { useEffect, useRef } from 'react';

const EffectivePotential: React.FC = () => {
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
    const cy = canvas.height / 2 + 20;
    const scaleX = 4;
    const scaleY = 400;

    ctx.beginPath();
    ctx.moveTo(20, cy); ctx.lineTo(canvas.width - 20, cy);
    ctx.moveTo(40, 20); ctx.lineTo(40, canvas.height - 20);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Arial';
    ctx.fillText('r', canvas.width - 15, cy + 15);
    ctx.fillText('V_eff', 10, 15);
    
    ctx.beginPath();
    ctx.moveTo(40, cy - 40); ctx.lineTo(canvas.width - 20, cy - 40);
    ctx.strokeStyle = '#f87171';
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.fillStyle = '#f87171';
    ctx.fillText('E > 0', 45, cy - 45);

    ctx.beginPath();
    ctx.moveTo(40, cy + 25); ctx.lineTo(canvas.width - 20, cy + 25);
    ctx.strokeStyle = '#34d399';
    ctx.stroke();
    ctx.fillStyle = '#34d399';
    ctx.fillText('E < 0', 45, cy + 20);
    ctx.setLineDash([]); 

    ctx.beginPath();
    let firstPoint = true;
    for(let r = 5; r < 80; r+=0.5) {
        const l2 = 800;
        const gm = 60;
        const v = (l2 / (r*r)) - (gm / r);
        
        const plotX = 40 + r * scaleX;
        const plotY = cy - v * scaleY * 0.05; 

        if(plotY > 20 && plotY < canvas.height - 10) {
            if(firstPoint) {
                ctx.moveTo(plotX, plotY);
                firstPoint = false;
            } else {
                ctx.lineTo(plotX, plotY);
            }
        }
    }
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export default EffectivePotential;