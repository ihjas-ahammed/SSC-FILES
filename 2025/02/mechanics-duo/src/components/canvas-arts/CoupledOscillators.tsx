import React, { useEffect, useRef } from 'react';

const CoupledOscillators: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = 150;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = canvas.width;
    const cy = canvas.height / 2;

    // Walls
    ctx.beginPath();
    ctx.moveTo(20, cy - 30); ctx.lineTo(20, cy + 30); // Left wall
    ctx.moveTo(w - 20, cy - 30); ctx.lineTo(w - 20, cy + 30); // Right wall
    
    // Floor
    ctx.moveTo(10, cy + 30); ctx.lineTo(w - 10, cy + 30);
    
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    ctx.stroke();

    const m1_x = 80;
    const m2_x = w - 120;
    const m_width = 40;
    
    // Spring 1 (Left wall to M1)
    ctx.beginPath();
    ctx.moveTo(22, cy);
    const s1_length = m1_x - 22;
    for(let i=1; i<=8; i++) {
      ctx.lineTo(22 + i*(s1_length/8), cy + (i%2 === 0 ? 8 : -8));
    }
    ctx.strokeStyle = '#f87171'; // Red
    ctx.lineWidth = 2;
    ctx.stroke();

    // Spring 3 (M1 to M2)
    ctx.beginPath();
    ctx.moveTo(m1_x + m_width, cy);
    const s3_length = m2_x - (m1_x + m_width);
    for(let i=1; i<=8; i++) {
      ctx.lineTo(m1_x + m_width + i*(s3_length/8), cy + (i%2 === 0 ? 8 : -8));
    }
    ctx.strokeStyle = '#34d399'; // Green
    ctx.stroke();

    // Spring 2 (M2 to Right wall)
    ctx.beginPath();
    ctx.moveTo(m2_x + m_width, cy);
    const s2_length = (w - 22) - (m2_x + m_width);
    for(let i=1; i<=8; i++) {
      ctx.lineTo(m2_x + m_width + i*(s2_length/8), cy + (i%2 === 0 ? 8 : -8));
    }
    ctx.strokeStyle = '#f87171'; // Red
    ctx.stroke();

    // Mass 1
    ctx.beginPath();
    ctx.rect(m1_x, cy - 20, m_width, 40);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    // Mass 2
    ctx.beginPath();
    ctx.rect(m2_x, cy - 20, m_width, 40);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('m1', m1_x + 8, cy + 5);
    ctx.fillText('m2', m2_x + 8, cy + 5);
    
    // Spring Labels
    ctx.fillStyle = '#f87171';
    ctx.fillText('k1', 40, cy - 15);
    ctx.fillText('k2', w - 60, cy - 15);
    
    ctx.fillStyle = '#34d399';
    ctx.fillText('k3', w/2 - 10, cy - 15);

  }, []);

  return <canvas ref={canvasRef} className="max-w-full rounded-2xl"></canvas>;
};

export default CoupledOscillators;