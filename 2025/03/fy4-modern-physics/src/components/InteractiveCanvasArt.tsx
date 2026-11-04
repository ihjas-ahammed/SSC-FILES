import React, { Suspense } from 'react';
import { renderModernPhysicsRelativity1 } from './canvasart/ModernPhysicsRelativity1';
import { renderModernPhysicsRelativity2 } from './canvasart/ModernPhysicsRelativity2';
import { renderModernPhysicsRelativity3 } from './canvasart/ModernPhysicsRelativity3';
import { renderModernPhysicsRelativity4 } from './canvasart/ModernPhysicsRelativity4';
import { renderModernPhysicsEM1 } from './canvasart/ModernPhysicsEM1';
import { renderModernPhysicsEM2 } from './canvasart/ModernPhysicsEM2';
import { renderModernPhysicsEM3 } from './canvasart/ModernPhysicsEM3';
import { renderModernPhysicsEM4 } from './canvasart/ModernPhysicsEM4';
import { renderModernPhysicsWaveParticle1 } from './canvasart/ModernPhysicsWaveParticle1';
import { renderModernPhysicsWaveParticle2 } from './canvasart/ModernPhysicsWaveParticle2';
import { renderModernPhysicsWaveParticle3 } from './canvasart/ModernPhysicsWaveParticle3';
import { renderModernPhysicsAtomic1 } from './canvasart/ModernPhysicsAtomic1';
import { renderModernPhysicsAtomic2 } from './canvasart/ModernPhysicsAtomic2';
import { renderModernPhysicsAtomic3 } from './canvasart/ModernPhysicsAtomic3';

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
      renderModernPhysicsEM1(canvasId) ||
      renderModernPhysicsEM2(canvasId) ||
      renderModernPhysicsEM3(canvasId) ||
      renderModernPhysicsEM4(canvasId) ||
      renderModernPhysicsWaveParticle1(canvasId) ||
      renderModernPhysicsWaveParticle2(canvasId) ||
      renderModernPhysicsWaveParticle3(canvasId) ||
      renderModernPhysicsAtomic1(canvasId) ||
      renderModernPhysicsAtomic2(canvasId) ||
      renderModernPhysicsAtomic3(canvasId) ||
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