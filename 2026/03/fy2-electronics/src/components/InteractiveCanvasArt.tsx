import React, { Suspense } from 'react';
import { renderModule1ElecArt } from './canvasart/Module1Electronics';
import { renderModule1PNJunctionArt } from './canvasart/Module1PNJunction';
import { renderModule1VIGraph } from './canvasart/Module1VIGraph';
import { renderModule1SpecialDiodes } from './canvasart/Module1SpecialDiodes';
import { renderModule2Diodes } from './canvasart/Module2Diodes';
import { renderModule2Zener } from './canvasart/Module2Zener';
import { renderModule2Advanced } from './canvasart/Module2Advanced';
import { renderModule3Transistors } from './canvasart/Module3Transistors';
import { renderModule3Biasing } from './canvasart/Module3Biasing';
import { renderModule4Digital } from './canvasart/Module4Digital';
import { renderModule4NumberSystems } from './canvasart/Module4NumberSystems';

interface Props {
  canvasId: string;
}

const InteractiveCanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderInteractive = () => {
    return (
      renderModule1ElecArt(canvasId) ||
      renderModule1PNJunctionArt(canvasId) ||
      renderModule1VIGraph(canvasId) ||
      renderModule1SpecialDiodes(canvasId) ||
      renderModule2Diodes(canvasId) ||
      renderModule2Zener(canvasId) ||
      renderModule2Advanced(canvasId) ||
      renderModule3Transistors(canvasId) ||
      renderModule3Biasing(canvasId) ||
      renderModule4Digital(canvasId) ||
      renderModule4NumberSystems(canvasId) ||
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