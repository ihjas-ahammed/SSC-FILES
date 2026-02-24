import React from 'react';
import VectorAdditionInteractive from './interactive-arts/VectorAdditionInteractive';
import ComponentFormInteractive from './interactive-arts/ComponentFormInteractive';
import GradientInteractive from './interactive-arts/GradientInteractive';
import DivergenceInteractive from './interactive-arts/DivergenceInteractive';
import CurlInteractive from './interactive-arts/CurlInteractive';
import LaplacianInteractive from './interactive-arts/LaplacianInteractive';
import WorkPathInteractive from './interactive-arts/WorkPathInteractive';
import ConductorChargesInteractive from './interactive-arts/ConductorChargesInteractive';
import CapacitorInteractive from './interactive-arts/CapacitorInteractive';
import LorentzForceInteractive from './interactive-arts/LorentzForceInteractive';
import BiotSavartInteractive from './interactive-arts/BiotSavartInteractive';
import AmperesLawInteractive from './interactive-arts/AmperesLawInteractive';
import MagBoundaryInteractive from './interactive-arts/MagBoundaryInteractive';
import ClockFaceChargesInteractive from './interactive-arts/ClockFaceChargesInteractive';
import CycloidMotionInteractive from './interactive-arts/CycloidMotionInteractive';
import HelmholtzCoilsInteractive from './interactive-arts/HelmholtzCoilsInteractive';

interface Props {
  canvasId: string;
}

const InteractiveCanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderInteractive = () => {
    switch (canvasId) {
      case 'vector-addition-interactive': return <VectorAdditionInteractive />;
      case 'component-form-interactive': return <ComponentFormInteractive />;
      case 'gradient-interactive': return <GradientInteractive />;
      case 'divergence-interactive': return <DivergenceInteractive />;
      case 'curl-interactive': return <CurlInteractive />;
      case 'laplacian-interactive': return <LaplacianInteractive />;
      case 'work-path-interactive': return <WorkPathInteractive />;
      case 'conductor-charges-interactive': return <ConductorChargesInteractive />;
      case 'capacitor-interactive': return <CapacitorInteractive />;
      case 'lorentz-force-interactive': return <LorentzForceInteractive />;
      case 'biot-savart-interactive': return <BiotSavartInteractive />;
      case 'amperes-law-interactive': return <AmperesLawInteractive />;
      case 'mag-boundary-interactive': return <MagBoundaryInteractive />;
      case 'clock-face-interactive': return <ClockFaceChargesInteractive />;
      case 'cycloid-motion-interactive': return <CycloidMotionInteractive />;
      case 'helmholtz-coils-interactive': return <HelmholtzCoilsInteractive />;
      default: return <p className="text-slate-500 py-10 text-center w-full">Interactive component not found</p>;
    }
  };

  return (
    <div className="interactive-canvas-container">
      {renderInteractive()}
    </div>
  );
};

export default InteractiveCanvasArt;