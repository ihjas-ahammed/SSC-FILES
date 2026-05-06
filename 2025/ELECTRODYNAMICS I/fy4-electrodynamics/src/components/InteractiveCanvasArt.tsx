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
import LineIntegralInteractive from './interactive-arts/LineIntegralInteractive';
import SphericalCoordsInteractive from './interactive-arts/SphericalCoordsInteractive';
import CoulombForceInteractive from './interactive-arts/CoulombForceInteractive';
import ContinuousIntegrationInteractive from './interactive-arts/ContinuousIntegrationInteractive';
import ElectricBoundaryInteractive from './interactive-arts/ElectricBoundaryInteractive';
import SolidSphereFieldPlot from './interactive-arts/SolidSphereFieldPlot';
import CoordSystemInteractive from './interactive-arts/CoordSystemInteractive';
import GaussianCylinderInteractive from './interactive-arts/GaussianCylinderInteractive';
import GaussianPillboxInteractive from './interactive-arts/GaussianPillboxInteractive';

import CareyFosterInteractive from './interactive-arts/CareyFosterInteractive';
import PotentiometerInteractive from './interactive-arts/PotentiometerInteractive';
import SuperpositionInteractive from './interactive-arts/SuperpositionInteractive';
import TheveninInteractive from './interactive-arts/TheveninInteractive';
import MaxPowerInteractive from './interactive-arts/MaxPowerInteractive';

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
      case 'line-integral-interactive': return <LineIntegralInteractive />;
      case 'spherical-coords-interactive': return <SphericalCoordsInteractive />;
      case 'coulomb-force-interactive': return <CoulombForceInteractive />;
      case 'continuous-integration-interactive': return <ContinuousIntegrationInteractive />;
      case 'electric-boundary-interactive': return <ElectricBoundaryInteractive />;
      case 'solid-sphere-plot': return <SolidSphereFieldPlot />;
      case 'coord-system-interactive': return <CoordSystemInteractive />;
      case 'gaussian-cylinder-interactive': return <GaussianCylinderInteractive />;
      case 'gaussian-pillbox-interactive': return <GaussianPillboxInteractive />;
      case 'kcl-interactive': return <KclInteractive />;
      case 'kvl-interactive': return <KvlInteractive />;
      case 'wheatstone-interactive': return <WheatstoneInteractive />;
      case 'carey-foster-interactive': return <CareyFosterInteractive />;
      case 'potentiometer-interactive': return <PotentiometerInteractive />;
      case 'superposition-interactive': return <SuperpositionInteractive />;
      case 'thevenin-interactive': return <TheveninInteractive />;
      case 'max-power-interactive': return <MaxPowerInteractive />;
      default: return <p className="text-slate-500 py-10 text-center w-full">Interactive component not found: {canvasId}</p>;
    }
  };

  return (
    <div className="interactive-canvas-container">
      {renderInteractive()}
    </div>
  );
};

export default InteractiveCanvasArt;