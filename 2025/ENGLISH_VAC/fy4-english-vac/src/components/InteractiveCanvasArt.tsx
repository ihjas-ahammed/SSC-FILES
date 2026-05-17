import React from 'react';
import HumanRightsScale from './interactive/HumanRightsScale';

interface Props {
  canvasId: string;
}

const InteractiveCanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderArt = () => {
    switch (canvasId) {
      case 'human_rights_scale':
        return <HumanRightsScale />;
      default:
        return <p className="text-slate-500 py-10 text-center w-full">Interactive component '{canvasId}' not found</p>;
    }
  };

  return (
    <div className="interactive-canvas-container relative w-full aspect-video flex flex-col items-center justify-center bg-black/40 rounded-2xl overflow-hidden shadow-inner border border-white/5">
      {renderArt()}
    </div>
  );
};

export default InteractiveCanvasArt;