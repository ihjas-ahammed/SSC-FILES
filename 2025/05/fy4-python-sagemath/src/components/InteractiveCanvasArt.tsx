import React, { Suspense } from 'react';
import { renderModernPhysicsRelativity1 } from './canvasart/ModernPhysicsRelativity1';
import { renderModernPhysicsRelativity2 } from './canvasart/ModernPhysicsRelativity2';
import { renderModernPhysicsRelativity3 } from './canvasart/ModernPhysicsRelativity3';
import { renderModernPhysicsRelativity4 } from './canvasart/ModernPhysicsRelativity4';

interface Props {
  canvasId: string;
}

const InteractiveCanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderInteractive = () => {
    return (
      renderModernPhysicsRelativity1(canvasId) ||
      renderModernPhysicsRelativity2(canvasId) ||
      renderModernPhysicsRelativity3(canvasId) ||
      renderModernPhysicsRelativity4(canvasId) ||
      <p className="text-slate-500 py-10 text-center w-full">Interactive component '{canvasId}' not found</p>
    );
  };

  return (
    <div className="interactive-canvas-container relative w-full aspect-video flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden shadow-inner border border-white/5">
      <Suspense fallback={<div className="animate-pulse text-slate-500">Loading interactive...</div>}>
        {renderInteractive()}
      </Suspense>
    </div>
  );
};

export default InteractiveCanvasArt;