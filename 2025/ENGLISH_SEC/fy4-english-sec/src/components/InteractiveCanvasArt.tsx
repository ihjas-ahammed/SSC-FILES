import React from 'react';
import HumanRightsScale from './interactive/HumanRightsScale';
import MicroscopeView from './interactive/MicroscopeView';
import WindmillView from './interactive/WindmillView';
import YellowWallpaperView from './interactive/YellowWallpaperView';
import MirrorShatterView from './interactive/MirrorShatterView';
import DNAEpigeneticsView from './interactive/DNAEpigeneticsView';
import IntersectionalityView from './interactive/IntersectionalityView';

interface Props {
  canvasId: string;
}

const InteractiveCanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderArt = () => {
    switch (canvasId) {
      case 'human_rights_scale':
        return <HumanRightsScale />;
      case 'microscope_focus':
        return <MicroscopeView />;
      case 'windmill_view':
        return <WindmillView />;
      case 'yellow_wallpaper':
        return <YellowWallpaperView />;
      case 'mirror_shatter':
        return <MirrorShatterView />;
      case 'dna_epigenetics':
        return <DNAEpigeneticsView />;
      case 'intersectionality_web':
        return <IntersectionalityView />;
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