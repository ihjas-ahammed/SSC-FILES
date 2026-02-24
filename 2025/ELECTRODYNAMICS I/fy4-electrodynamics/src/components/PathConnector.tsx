import React from 'react';

interface Point {
  x: number;
  y: number;
  id: string;
}

interface Props {
  points: Point[];
  completedLessons: string[];
  recentlyCompleted: string | null;
  colorHex: string;
}

const PathConnector: React.FC<Props> = ({ points, completedLessons, recentlyCompleted, colorHex }) => {
  if (points.length < 2) return null;

  const getPathData = (p1: Point, p2: Point) => {
    // Creates a smooth S-curve connecting p1 and p2 vertically
    const cy = (p1.y + p2.y) / 2;
    return `M ${p1.x} ${p1.y} C ${p1.x} ${cy}, ${p2.x} ${cy}, ${p2.x} ${p2.y}`;
  };

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      {/* Draw background paths for all segments */}
      {points.slice(0, -1).map((p1, i) => {
        const p2 = points[i + 1];
        return (
          <path
            key={`bg-${p1.id}-${p2.id}`}
            d={getPathData(p1, p2)}
            stroke="#334155" // slate-700
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}

      {/* Draw active paths and animated paths */}
      {points.slice(0, -1).map((p1, i) => {
        const p2 = points[i + 1];
        
        // Lit if p1 is completed.
        const isCompleted = completedLessons.includes(p1.id);
        const isNewlyCompleted = recentlyCompleted === p1.id;

        if (!isCompleted && !isNewlyCompleted) return null;

        return (
          <path
            key={`fg-${p1.id}-${p2.id}`}
            d={getPathData(p1, p2)}
            stroke={colorHex}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            pathLength="1"
            vectorEffect="non-scaling-stroke"
            className={`path-connector ${isNewlyCompleted ? 'animate-draw-path' : ''}`}
          />
        );
      })}
    </svg>
  );
};

export default PathConnector;