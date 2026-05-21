import React from 'react';

interface Props {
  canvasId: string;
}

const CanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderArt = () => {
    switch (canvasId) {
      default: return <p className="text-slate-500 py-10 text-center w-full">Visualization component not found</p>;
    }
  };

  return (
    <div className="glass-panel p-2 rounded-3xl shadow-lg w-full flex justify-center bg-black/30">
      {renderArt()}
    </div>
  );
};

export default CanvasArt;