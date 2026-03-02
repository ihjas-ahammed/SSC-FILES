import React, { useRef, useState, useEffect } from 'react';
import '../../styles/electrostatics.css';

const CoulombForceInteractive: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [q1, setQ1] = useState({ x: 100, y: 150, val: 2 }); // Fixed
  const [q2, setQ2] = useState({ x: 250, y: 150, val: 1 }); // Draggable
  const [isDragging, setIsDragging] = useState(false);

  // Constants for visual scaling
  const K = 50000; 

  const getForce = () => {
    const dx = q2.x - q1.x;
    const dy = q2.y - q1.y;
    const distSq = dx*dx + dy*dy;
    const dist = Math.sqrt(distSq);
    
    // F = k q1 q2 / r^2
    const forceMag = (K * q1.val * q2.val) / Math.max(distSq, 100);
    
    // Direction
    const angle = Math.atan2(dy, dx);
    
    return { mag: forceMag, angle, dist };
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(20, Math.min(rect.width - 20, clientX - rect.left));
    const y = Math.max(20, Math.min(rect.height - 20, clientY - rect.top));
    setQ2(prev => ({ ...prev, x, y }));
  };

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX, e.clientY);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const force = getForce();
  // Visual arrow length (clamped)
  const arrowLen = Math.min(Math.abs(force.mag), 80);
  // Arrow direction (repulsive if mag > 0)
  const arrowAngle = force.mag > 0 ? force.angle : force.angle + Math.PI;

  return (
    <div 
      className="coulomb-container" 
      ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchEnd={onMouseUp}
    >
      {/* Source Charge q1 */}
      <div 
        className="charge-marker charge-plus" 
        style={{ left: q1.x, top: q1.y, cursor: 'default' }}
      >
        +Q
      </div>

      {/* Test Charge q2 */}
      <div 
        className="charge-marker charge-plus" 
        style={{ left: q2.x, top: q2.y }}
        onMouseDown={onMouseDown}
        onTouchStart={onMouseDown}
      >
        +q
      </div>

      {/* Force Arrow on q2 */}
      <div 
        className="force-arrow"
        style={{ 
          left: q2.x, 
          top: q2.y, 
          width: arrowLen, 
          transform: `translate(0, -50%) rotate(${arrowAngle}rad)`,
          color: '#f59e0b',
          opacity: arrowLen > 5 ? 1 : 0
        }}
      />

      {/* Connection Line */}
      <svg className="absolute inset-0 pointer-events-none" style={{zIndex: 0}}>
         <line 
           x1={q1.x} y1={q1.y} 
           x2={q2.x} y2={q2.y} 
           stroke="rgba(255,255,255,0.1)" 
           strokeDasharray="4"
         />
         {/* Distance Label */}
         <text 
            x={(q1.x + q2.x)/2} 
            y={(q1.y + q2.y)/2 - 10} 
            fill="rgba(255,255,255,0.5)" 
            fontSize="12"
            textAnchor="middle"
         >
            r = {Math.round(force.dist)}
         </text>
      </svg>

      <div className="overlay-ui">
         <p>Force F ∝ 1/r²</p>
         <p style={{color: '#f59e0b', fontWeight: 'bold'}}>
            Magnitude: {Math.abs(force.mag).toFixed(1)} units
         </p>
      </div>
    </div>
  );
};

export default CoulombForceInteractive;