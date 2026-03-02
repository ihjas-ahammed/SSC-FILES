import React, { useRef, useState, useEffect } from 'react';
import '../../styles/electrostatics.css';

const ContinuousIntegrationInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dqPos, setDqPos] = useState(0.5); // 0 to 1 along the rod
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 300;
    const height = 300;
    canvas.width = width;
    canvas.height = height;

    const cx = width / 2;
    const cy = height - 50;
    const rodLength = 200;
    const rodY = cy;
    const rodXStart = cx - rodLength / 2;
    
    // Field Point P
    const pX = cx;
    const pY = cy - 150; // z distance above center

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Rod
      ctx.beginPath();
      ctx.moveTo(rodXStart, rodY);
      ctx.lineTo(rodXStart + rodLength, rodY);
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#334155';
      ctx.stroke();

      // Draw P
      ctx.beginPath();
      ctx.arc(pX, pY, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText('P (field point)', pX + 10, pY);

      // Current dq element
      const dqX = rodXStart + dqPos * rodLength;
      const dqY = rodY;

      // Highlight dq
      ctx.beginPath();
      ctx.moveTo(dqX - 5, dqY);
      ctx.lineTo(dqX + 5, dqY);
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#ef4444';
      ctx.stroke();

      // Separation vector r
      ctx.beginPath();
      ctx.moveTo(dqX, dqY);
      ctx.lineTo(pX, pY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // dE Vector at P
      // Vector points from dq to P
      const dx = pX - dqX;
      const dy = pY - dqY;
      const dist = Math.sqrt(dx*dx + dy*dy);
      
      // dE magnitude proportional to 1/r^2
      const scale = 2000;
      const dEmag = scale / (dist * dist); 
      
      const dEx = dEmag * (dx / dist);
      const dEy = dEmag * (dy / dist);

      // Draw dE
      const arrowX = pX + dEx * 40; // Scale for visual
      const arrowY = pY + dEy * 40;

      ctx.beginPath();
      ctx.moveTo(pX, pY);
      ctx.lineTo(arrowX, arrowY);
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#f59e0b';
      ctx.stroke();

      // Arrowhead
      const angle = Math.atan2(dEy, dEx);
      ctx.beginPath();
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(arrowX - 8 * Math.cos(angle - Math.PI/6), arrowY - 8 * Math.sin(angle - Math.PI/6));
      ctx.lineTo(arrowX - 8 * Math.cos(angle + Math.PI/6), arrowY - 8 * Math.sin(angle + Math.PI/6));
      ctx.fillStyle = '#f59e0b';
      ctx.fill();

      // Label dE
      ctx.fillText('dE', arrowX + 5, arrowY);
      
      // Components phantom
      ctx.beginPath();
      ctx.moveTo(pX, pY);
      ctx.lineTo(pX, arrowY); // Vertical component
      ctx.lineTo(arrowX, arrowY); // Horizontal component
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
      ctx.stroke();
      
      // Text
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillText('x', dqX, rodY + 20);
      ctx.fillText('z', pX + 5, (pY + rodY)/2);
      ctx.fillText('r', (pX+dqX)/2 + 5, (pY+rodY)/2);

    };

    draw();

  }, [dqPos]);

  const handleMove = (clientX: number) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const cx = rect.width / 2;
    const rodLength = 200;
    const rodStart = cx - rodLength/2;
    const relX = clientX - rect.left - rodStart;
    const pos = Math.max(0, Math.min(1, relX / rodLength));
    setDqPos(pos);
  };

  return (
    <div className="relative w-full">
      <canvas 
        ref={canvasRef} 
        className="touch-none-canvas cursor-pointer"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
        onClick={(e) => handleMove(e.clientX)}
      />
      <div className="overlay-ui text-center">
         Drag along the rod to move the charge element <i>dq</i>
      </div>
    </div>
  );
};

export default ContinuousIntegrationInteractive;