import React, { Suspense } from 'react';
import { renderMechModule1Kepler } from './canvasart/MechModule1Kepler';
import { renderMechModule1CentralForces } from './canvasart/MechModule1CentralForces';
import { renderMechModule1Energy } from './canvasart/MechModule1Energy';
import { renderMechModule1Orbit } from './canvasart/MechModule1Orbit';
import { renderMechModule1Geometry } from './canvasart/MechModule1Geometry';
import { renderMechModule2Harmonic } from './canvasart/MechModule2Harmonic';

interface Props {
  canvasId: string;
}

const InteractiveCanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderInteractive = () => {
    return (
      renderMechModule1Kepler(canvasId) ||
      renderMechModule1CentralForces(canvasId) ||
      renderMechModule1Energy(canvasId) ||
      renderMechModule1Orbit(canvasId) ||
      renderMechModule1Geometry(canvasId) ||
      renderMechModule2Harmonic(canvasId) ||
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