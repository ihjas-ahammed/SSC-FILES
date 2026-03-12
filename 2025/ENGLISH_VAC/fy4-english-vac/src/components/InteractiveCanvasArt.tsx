import React from 'react';

interface Props {
  canvasId: string;
}

const InteractiveCanvasArt: React.FC<Props> = ({ canvasId }) => {
  return (
    <div className="interactive-canvas-container relative w-full aspect-video flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden shadow-inner border border-white/5">
      <p className="text-slate-500 py-10 text-center w-full">Interactive component '{canvasId}' not found</p>
    </div>
  );
};

export default InteractiveCanvasArt;