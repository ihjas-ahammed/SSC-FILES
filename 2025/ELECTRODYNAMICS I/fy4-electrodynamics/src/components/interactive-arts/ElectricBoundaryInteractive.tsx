import React, { useRef, useEffect, useState } from 'react';

const ElectricBoundaryInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sigma, setSigma] = useState(1.0); // Surface charge density
  const [eTangential, setETangential] = useState(1.0); // Parallel field

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
    
    // Scale factors
    const scale = 40;
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Boundary Surface (Plane)
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Draw Surface Charges
      const numCharges = Math.floor(Math.abs(sigma) * 10);
      const chargeColor = sigma > 0 ? '#ef4444' : '#3b82f6';
      const chargeSign = sigma > 0 ? '+' : '-';
      
      ctx.fillStyle = chargeColor;
      ctx.font = '14px Nunito';
      if (Math.abs(sigma) > 0.1) {
        for(let i = 0; i < 8; i++) {
            const x = 40 + i * (width - 80) / 7;
            ctx.fillText(chargeSign, x, cy + 5);
        }
      }

      // Calculate Normal Components
      // E_n_above - E_n_below = sigma / epsilon0
      // Let's assume a background field E0_n = 0 for simplicity, so fields are purely from sigma
      // plus the background.
      // Wait, let's allow a background normal field to show continuity isn't about symmetry but jump.
      const E_n_background = 0.5; 
      
      const E_n_above = E_n_background + sigma; // Proportional
      const E_n_below = E_n_background - sigma;

      // Draw Field Vectors
      const drawVector = (x: number, y: number, vx: number, vy: number, label: string) => {
        const endX = x + vx * scale;
        const endY = y - vy * scale; // Canvas y is inverted
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Arrowhead
        const angle = Math.atan2(-vy, vx);
        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(endX - 10 * Math.cos(angle - Math.PI/6), endY - 10 * Math.sin(angle - Math.PI/6));
        ctx.lineTo(endX - 10 * Math.cos(angle + Math.PI/6), endY - 10 * Math.sin(angle + Math.PI/6));
        ctx.fillStyle = '#f59e0b';
        ctx.fill();

        ctx.fillStyle = '#fff';
        ctx.fillText(label, endX + 5, endY);
      };

      // Vector Above
      drawVector(cx, cy - 10, eTangential, E_n_above, 'E_above');
      
      // Vector Below
      drawVector(cx, cy + 10, eTangential, E_n_below, 'E_below');

      // Decomposition Ghosts
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 1;
      
      // Tangential components (Continuous)
      ctx.beginPath();
      ctx.moveTo(cx, cy - 10); ctx.lineTo(cx + eTangential*scale, cy - 10);
      ctx.moveTo(cx, cy + 10); ctx.lineTo(cx + eTangential*scale, cy + 10);
      ctx.stroke();
      
      // Normal components (Discontinuous)
      ctx.beginPath();
      ctx.moveTo(cx, cy - 10); ctx.lineTo(cx, cy - 10 - E_n_above*scale);
      ctx.moveTo(cx, cy + 10); ctx.lineTo(cx, cy + 10 + Math.abs(E_n_below)*scale * (E_n_below>0?-1:1)); // visually tricky
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Text Info
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`Tangential E: Continuous`, 10, 20);
      ctx.fillText(`Normal E: Jumps by σ/ε₀`, 10, 40);
    };

    draw();
  }, [sigma, eTangential]);

  return (
    <div className="flex flex-col items-center w-full">
        <canvas ref={canvasRef} className="touch-none-canvas mb-2 bg-black/40 rounded-xl border border-white/10" />
        <div className="w-full flex gap-4 px-4">
             <div className="flex-1">
                 <label className="text-xs text-slate-400 block mb-1">Surface Charge σ</label>
                 <input 
                   type="range" min="-2" max="2" step="0.1"
                   value={sigma}
                   onChange={(e) => setSigma(parseFloat(e.target.value))}
                   className="w-full"
                 />
             </div>
             <div className="flex-1">
                 <label className="text-xs text-slate-400 block mb-1">Tangential Field</label>
                 <input 
                   type="range" min="0" max="2" step="0.1"
                   value={eTangential}
                   onChange={(e) => setETangential(parseFloat(e.target.value))}
                   className="w-full"
                 />
             </div>
        </div>
    </div>
  );
};

export default ElectricBoundaryInteractive;