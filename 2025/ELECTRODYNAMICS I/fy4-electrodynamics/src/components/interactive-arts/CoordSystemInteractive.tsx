import React, { useRef, useEffect, useState } from 'react';

type System = 'cartesian' | 'cylindrical' | 'spherical';

const CoordSystemInteractive: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [system, setSystem] = useState<System>('cartesian');

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
    const scale = 80;

    // Simple isometric projection
    const project = (x: number, y: number, z: number) => ({
      x: cx + (x - y) * scale * 0.866,
      y: cy - z * scale + (x + y) * scale * 0.5
    });

    const drawLine = (p1: {x:number, y:number}, p2: {x:number, y:number}, color: string, width=1, dash: number[] = []) => {
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.setLineDash(dash);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawText = (text: string, p: {x:number, y:number}, color: string = '#fff') => {
      ctx.fillStyle = color;
      ctx.font = '14px Nunito';
      ctx.fillText(text, p.x, p.y);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Origin
      const o = project(0, 0, 0);
      
      // Axes
      const xEnd = project(1.5, 0, 0);
      const yEnd = project(0, 1.5, 0);
      const zEnd = project(0, 0, 1.5);

      drawLine(o, xEnd, '#64748b', 1); drawText('x', xEnd);
      drawLine(o, yEnd, '#64748b', 1); drawText('y', yEnd);
      drawLine(o, zEnd, '#64748b', 1); drawText('z', zEnd);

      // Element Position
      const px = 0.8, py = 0.8, pz = 0.8;
      const p = project(px, py, pz);

      ctx.fillStyle = '#3b82f6';
      
      if (system === 'cartesian') {
        const dx = 0.3, dy = 0.3, dz = 0.3;
        // Draw Cube
        const corners = [
          project(px, py, pz), project(px+dx, py, pz), project(px+dx, py+dy, pz), project(px, py+dy, pz),
          project(px, py, pz+dz), project(px+dx, py, pz+dz), project(px+dx, py+dy, pz+dz), project(px, py+dy, pz+dz)
        ];
        
        // Edges
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        // Bottom face
        ctx.moveTo(corners[0].x, corners[0].y); ctx.lineTo(corners[1].x, corners[1].y);
        ctx.lineTo(corners[2].x, corners[2].y); ctx.lineTo(corners[3].x, corners[3].y); ctx.closePath();
        ctx.stroke();
        // Top face
        ctx.beginPath();
        ctx.moveTo(corners[4].x, corners[4].y); ctx.lineTo(corners[5].x, corners[5].y);
        ctx.lineTo(corners[6].x, corners[6].y); ctx.lineTo(corners[7].x, corners[7].y); ctx.closePath();
        ctx.stroke();
        // Vertical lines
        drawLine(corners[0], corners[4], '#f59e0b', 2);
        drawLine(corners[1], corners[5], '#f59e0b', 2);
        drawLine(corners[2], corners[6], '#f59e0b', 2);
        drawLine(corners[3], corners[7], '#f59e0b', 2);

        drawText('dx', project(px+dx/2, py, pz-0.1), '#f59e0b');
        drawText('dy', project(px+dx, py+dy/2, pz-0.1), '#f59e0b');
        drawText('dz', project(px-0.1, py, pz+dz/2), '#f59e0b');
        drawText('dτ = dx dy dz', {x: 20, y: 30});

      } else if (system === 'cylindrical') {
        // Draw cylindrical wedge
        const r = 0.8, dr = 0.3;
        const phi = Math.PI/4, dphi = 0.3;
        const z = 0.5, dz = 0.4;

        // Helper to get cartesian from cyl
        const cyl = (r: number, ph: number, z: number) => project(r*Math.cos(ph), r*Math.sin(ph), z);

        // Vertices
        const p1 = cyl(r, phi, z);
        const p2 = cyl(r+dr, phi, z);
        const p3 = cyl(r+dr, phi+dphi, z);
        const p4 = cyl(r, phi+dphi, z);
        
        const p5 = cyl(r, phi, z+dz);
        const p6 = cyl(r+dr, phi, z+dz);
        const p7 = cyl(r+dr, phi+dphi, z+dz);
        const p8 = cyl(r, phi+dphi, z+dz);

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        
        // Draw arcs
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); // dr
        // approximate arc p2 to p3
        ctx.lineTo(p3.x, p3.y); // s dphi
        ctx.lineTo(p4.x, p4.y); // dr
        ctx.lineTo(p1.x, p1.y); 
        ctx.stroke();

        // Top cap
        ctx.beginPath();
        ctx.moveTo(p5.x, p5.y); ctx.lineTo(p6.x, p6.y); ctx.lineTo(p7.x, p7.y); ctx.lineTo(p8.x, p8.y); ctx.closePath();
        ctx.stroke();

        // Verticals
        drawLine(p1, p5, '#10b981', 2);
        drawLine(p2, p6, '#10b981', 2);
        drawLine(p3, p7, '#10b981', 2);
        drawLine(p4, p8, '#10b981', 2);

        drawText('ds', p2, '#10b981');
        drawText('s dφ', p3, '#10b981');
        drawText('dz', p5, '#10b981');
        drawText('dτ = s ds dφ dz', {x: 20, y: 30});

      } else if (system === 'spherical') {
        const r = 0.8, dr = 0.3;
        const th = 0.6, dth = 0.3;
        const ph = 0.6, dph = 0.4;

        const sph = (r: number, th: number, ph: number) => project(r*Math.sin(th)*Math.cos(ph), r*Math.sin(th)*Math.sin(ph), r*Math.cos(th));

        // Create vertices of spherical block
        const v = [];
        for(let i=0; i<2; i++) {
          for(let j=0; j<2; j++) {
            for(let k=0; k<2; k++) {
              v.push(sph(r + i*dr, th + j*dth, ph + k*dph));
            }
          }
        }
        
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        
        // Draw approximate box (connecting logic is a bit complex for simple loop, hardcoding edges)
        // r-lines
        drawLine(sph(r, th, ph), sph(r+dr, th, ph), '#ef4444', 2);
        drawLine(sph(r, th+dth, ph), sph(r+dr, th+dth, ph), '#ef4444', 2);
        drawLine(sph(r, th, ph+dph), sph(r+dr, th, ph+dph), '#ef4444', 2);
        
        // theta-arcs
        drawLine(sph(r+dr, th, ph), sph(r+dr, th+dth, ph), '#ef4444', 2);
        
        // phi-arcs
        drawLine(sph(r+dr, th+dth, ph), sph(r+dr, th+dth, ph+dph), '#ef4444', 2);

        drawText('dr', sph(r+dr/2, th, ph), '#ef4444');
        drawText('r dθ', sph(r+dr, th+dth/2, ph), '#ef4444');
        drawText('r sinθ dφ', sph(r+dr, th+dth, ph+dph/2), '#ef4444');
        drawText('dτ = r² sinθ dr dθ dφ', {x: 20, y: 30});
      }
    };

    draw();
  }, [system]);

  return (
    <div className="flex flex-col items-center w-full">
      <canvas ref={canvasRef} className="touch-none-canvas mb-2" />
      <div className="flex gap-2 mb-2">
        {(['cartesian', 'cylindrical', 'spherical'] as System[]).map(sys => (
          <button
            key={sys}
            onClick={() => setSystem(sys)}
            className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border ${
              system === sys 
                ? 'bg-blue-500 border-blue-400 text-white' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
            }`}
          >
            {sys}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoordSystemInteractive;