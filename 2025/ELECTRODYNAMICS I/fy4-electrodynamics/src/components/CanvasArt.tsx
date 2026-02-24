import React from 'react';
import KeplerOrbits from './canvas-arts/KeplerOrbits';
import CentralForce from './canvas-arts/CentralForce';
import PolarCoords from './canvas-arts/PolarCoords';
import EffectivePotential from './canvas-arts/EffectivePotential';
import EllipseGeometry from './canvas-arts/EllipseGeometry';
import SpringMass from './canvas-arts/SpringMass';
import Pendulum from './canvas-arts/Pendulum';
import DampedOscillation from './canvas-arts/DampedOscillation';
import ResonanceCurve from './canvas-arts/ResonanceCurve';
import CoupledOscillators from './canvas-arts/CoupledOscillators';
import LinearAccelFrame from './canvas-arts/LinearAccelFrame';
import RotatingFrame from './canvas-arts/RotatingFrame';
import CoriolisAxes from './canvas-arts/CoriolisAxes';
import FoucaultPrecess from './canvas-arts/FoucaultPrecess';
import { VectorAddition, GradientField, DivergenceField, CurlField } from './canvas-arts/VectorArts';

interface Props {
  canvasId: string;
}

const CanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderArt = () => {
    switch (canvasId) {
      // Mechanics visuals retained for compatibility if needed
      case 'kepler-orbits': return <KeplerOrbits />;
      case 'central-force': return <CentralForce />;
      case 'polar-coords': return <PolarCoords />;
      case 'effective-potential': return <EffectivePotential />;
      case 'ellipse-geometry': return <EllipseGeometry />;
      case 'spring-mass': return <SpringMass />;
      case 'pendulum': return <Pendulum />;
      case 'damped-oscillation': return <DampedOscillation />;
      case 'resonance-curve': return <ResonanceCurve />;
      case 'coupled-oscillators': return <CoupledOscillators />;
      case 'linear-accel-frame': return <LinearAccelFrame />;
      case 'rotating-frame': return <RotatingFrame />;
      case 'coriolis-axes': return <CoriolisAxes />;
      case 'foucault-precess': return <FoucaultPrecess />;
      
      // New Vector Arts
      case 'vector-addition': return <VectorAddition />;
      case 'gradient-field': return <GradientField />;
      case 'divergence-field': return <DivergenceField />;
      case 'curl-field': return <CurlField />;

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