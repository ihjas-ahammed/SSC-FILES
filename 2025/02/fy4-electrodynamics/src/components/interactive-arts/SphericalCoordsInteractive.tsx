import React, { useRef, useEffect, useState } from 'react';

const SphericalCoordsInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [theta, setTheta] = useState(Math.PI / 4);
  const [phi, setPhi] = useState(Math.PI / 4);

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
    const cy = height / 2 + 50;
    const scale = 100;

    // Simple 3D projection
    const project = (x: number, y: number, z: number) => {
      // Rotate view slightly
      const rotX = x * Math.cos(-0.5) - z * Math.sin(-0.5);
      const rotZ = x * Math.sin(-0.5) + z * Math.cos(-0.5);
      
      // Isometric-ish
      return {
        x: cx + rotX * scale,
        y: cy - (y * scale) + (rotZ * scale * 0.4) 
      };
    };

    const drawLine = (p1: {x:number, y:number}, p2: {x:number, y:number}, color: string, width=1) => {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    };

    const draw = () => {
        ctx.clearRect(0, 0, width, height);

        const origin = project(0, 0, 0);
        const xAxis = project(1.5, 0, 0);
        const yAxis = project(0, 1.5, 0);
        const zAxis = project(0, 0, 1.5);

        // Axes
        drawLine(origin, xAxis, '#64748b'); ctx.fillText('x', xAxis.x, xAxis.y);
        drawLine(origin, yAxis, '#64748b'); ctx.fillText('y', yAxis.x, yAxis.y);
        drawLine(origin, zAxis, '#64748b'); ctx.fillText('z', zAxis.x, zAxis.y);

        // Point P
        const r = 1;
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta); // Note: standard physics notation z = r cos theta
        // Wait, my projection treats y as up. 
        // Let's map Physics (x, y, z) to Graphics (x, -z, y)? 
        // Standard Physics: z is up. x, y in plane.
        // Let's remap for projection: Physic Z -> Graphics Y (Up), Physics Y -> Graphics Z (Depth), Physics X -> Graphics X
        
        const physX = r * Math.sin(theta) * Math.cos(phi);
        const physY = r * Math.sin(theta) * Math.sin(phi);
        const physZ = r * Math.cos(theta);

        // Map to my simple project function which takes (x, y, z) where y is up
        const p = project(physX, physZ, physY); // Swap Y and Z for visual

        // Draw line to point
        drawLine(origin, p, '#fff', 2);
        
        // Draw projection on xy plane
        const pProj = project(physX, 0, physY);
        drawLine(origin, pProj, '#ffffff44', 1);
        drawLine(p, pProj, '#ffffff44', 1);

        // Draw Unit Vectors at P
        // r-hat: radially out
        const rHatEnd = project(physX + 0.3*Math.sin(theta)*Math.cos(phi), physZ + 0.3*Math.cos(theta), physY + 0.3*Math.sin(theta)*Math.sin(phi));
        drawLine(p, rHatEnd, '#f59e0b', 3); // Amber

        // theta-hat: down from north
        const tHatX = Math.cos(theta)*Math.cos(phi);
        const tHatY = Math.cos(theta)*Math.sin(phi);
        const tHatZ = -Math.sin(theta);
        const tHatEnd = project(physX + 0.3*tHatX, physZ + 0.3*tHatZ, physY + 0.3*tHatY);
        drawLine(p, tHatEnd, '#10b981', 3); // Green

        // phi-hat: azimuthal
        const pHatX = -Math.sin(phi);
        const pHatY = Math.cos(phi);
        const pHatZ = 0;
        const pHatEnd = project(physX + 0.3*pHatX, physZ + 0.3*pHatZ, physY + 0.3*pHatY);
        drawLine(p, pHatEnd, '#3b82f6', 3); // Blue

        // Draw Point
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();

        // Labels
        ctx.fillStyle = '#f59e0b'; ctx.fillText('r̂', rHatEnd.x, rHatEnd.y);
        ctx.fillStyle = '#10b981'; ctx.fillText('θ̂', tHatEnd.x, tHatEnd.y);
        ctx.fillStyle = '#3b82f6'; ctx.fillText('φ̂', pHatEnd.x, pHatEnd.y);
    };

    draw();

  }, [theta, phi]);

  return (
    <div className="flex flex-col items-center">
        <canvas ref={canvasRef} className="touch-none-canvas mb-2" />
        <div className="flex gap-4 w-full px-4">
            <div className="flex-1">
                <label className="text-xs text-slate-400 block">Theta (θ)</label>
                <input type="range" min="0" max="3.14" step="0.01" 
                    value={theta} onChange={(e) => setTheta(parseFloat(e.target.value))}
                    className="w-full" />
            </div>
            <div className="flex-1">
                <label className="text-xs text-slate-400 block">Phi (φ)</label>
                <input type="range" min="0" max="6.28" step="0.01" 
                    value={phi} onChange={(e) => setPhi(parseFloat(e.target.value))}
                    className="w-full" />
            </div>
        </div>
    </div>
  );
};

export default SphericalCoordsInteractive;