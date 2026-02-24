import React, { useRef, useEffect, useState } from 'react';

const ClockFaceChargesInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // State for 12 charges: true = ON, false = OFF
  const chargesState = useRef<boolean[]>(Array(12).fill(true));
  // To trigger re-renders on click
  const [dummy, setDummy] = useState(0);

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
    const r = 80; // radius of clock face

    const drawArrow = (fx: number, fy: number, tx: number, ty: number, color: string) => {
      const headlen = 10;
      const dx = tx - fx;
      const dy = ty - fy;
      const angle = Math.atan2(dy, dx);
      const mag = Math.hypot(dx, dy);

      if (mag < 1) return; // don't draw zero vector

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
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint circle
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 2*Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      let netEx = 0;
      let netEy = 0;

      // Draw Charges and calculate net E field at center
      for (let i = 0; i < 12; i++) {
         // Standard clock angles: 12 o'clock is -pi/2
         const angle = (i * Math.PI / 6) - Math.PI / 2;
         const px = cx + r * Math.cos(angle);
         const py = cy + r * Math.sin(angle);

         const isOn = chargesState.current[i];

         // Draw charge dot
         ctx.beginPath();
         ctx.arc(px, py, 12, 0, 2*Math.PI);
         ctx.fillStyle = isOn ? '#ef4444' : '#334155'; // Red if on, slate if off
         ctx.fill();
         ctx.strokeStyle = isOn ? '#fff' : '#64748b';
         ctx.lineWidth = 2;
         ctx.stroke();

         ctx.fillStyle = isOn ? '#fff' : '#64748b';
         ctx.font = 'bold 12px Arial';
         // Label 1 to 12
         const label = i === 0 ? 12 : i;
         ctx.fillText(label.toString(), px - (label > 9 ? 7 : 4), py + 4);

         // Add to E field if ON
         // Positive charge at angle theta creates E field at center pointing in -theta direction
         if (isOn) {
            // Field vector unit: pointing AWAY from the charge towards center
            netEx -= Math.cos(angle);
            netEy -= Math.sin(angle);
         }
      }

      // Draw Center Test Charge
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, 2*Math.PI);
      ctx.fillStyle = '#3b82f6';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.stroke();

      // Draw Net E Field Vector
      // Scale up for visibility
      const scale = 30;
      drawArrow(cx, cy, cx + netEx * scale, cy + netEy * scale, '#10b981'); // Green Arrow

      // Status text
      ctx.fillStyle = '#94a3b8';
      ctx.font = '14px Nunito';
      const isZero = Math.hypot(netEx, netEy) < 0.01;
      if (isZero) {
          ctx.fillText('Net Field: ZERO', 10, 20);
      } else {
          ctx.fillStyle = '#10b981';
          ctx.fillText('Net Field: NON-ZERO', 10, 20);
      }
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Nunito';
      ctx.fillText('Tap charges to remove/add them', 10, 40);
    };

    const onClick = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      
      const x = (clientX - rect.left) * (width / rect.width);
      const y = (clientY - rect.top) * (height / rect.height);

      // Check which charge was clicked
      for (let i = 0; i < 12; i++) {
         const angle = (i * Math.PI / 6) - Math.PI / 2;
         const px = cx + r * Math.cos(angle);
         const py = cy + r * Math.sin(angle);

         if (Math.hypot(x - px, y - py) < 18) {
             chargesState.current[i] = !chargesState.current[i]; // toggle
             setDummy(prev => prev + 1); // trigger redraw
             break;
         }
      }
    };

    canvas.addEventListener('mousedown', onClick);
    canvas.addEventListener('touchstart', onClick, { passive: false });

    draw();

    return () => {
      canvas.removeEventListener('mousedown', onClick);
      canvas.removeEventListener('touchstart', onClick);
    };
  }, [dummy]);

  return <canvas ref={canvasRef} className="touch-none-canvas cursor-pointer"></canvas>;
};

export default ClockFaceChargesInteractive;