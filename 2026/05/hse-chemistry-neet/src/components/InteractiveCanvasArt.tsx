import React, { Suspense } from 'react';
import { renderModule1Art } from './canvasart/Module1Chem';
import { renderModule2Art } from './canvasart/Module2Physical';
import { renderModule3Art } from './canvasart/Module3Inorganic';
import { renderModule4Art } from './canvasart/Module4Organic';
import { renderModule5Art } from './canvasart/Module5Solutions';
import { renderModule5ElectroArt } from './canvasart/Module5Electro';
import { renderModule5KineticsArt } from './canvasart/Module5Kinetics';
import { renderModule6Art } from './canvasart/Module6Organic12';
import { renderModule6AlcoholsArt } from './canvasart/Module6Alcohols';
import { renderModule6CarbonylsArt } from './canvasart/Module6Carbonyls';
import { renderModule6AminesBioArt } from './canvasart/Module6AminesBiomol';

interface Props {
  canvasId: string;
}

const InteractiveCanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderInteractive = () => {
    // Try to find the component in each module
    return (
      renderModule1Art(canvasId) ||
      renderModule2Art(canvasId) ||
      renderModule3Art(canvasId) ||
      renderModule4Art(canvasId) ||
      renderModule5Art(canvasId) ||
      renderModule5ElectroArt(canvasId) ||
      renderModule5KineticsArt(canvasId) ||
      renderModule6Art(canvasId) ||
      renderModule6AlcoholsArt(canvasId) ||
      renderModule6CarbonylsArt(canvasId) ||
      renderModule6AminesBioArt(canvasId) ||
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