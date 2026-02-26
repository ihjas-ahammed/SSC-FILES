import React, { Suspense, lazy } from 'react';

// Lazy load canvas components for better performance
const SetEqualityCanvas = lazy(() => import('./canvas/SetEqualityCanvas'));
const SetOperationsCanvas = lazy(() => import('./canvas/SetOperationsCanvas'));
const VennDiagramsCanvas = lazy(() => import('./canvas/VennDiagramsCanvas'));
const DeMorganLawsCanvas = lazy(() => import('./canvas/DeMorganLawsCanvas'));
const CartesianProductCanvas = lazy(() => import('./canvas/CartesianProductCanvas'));
const CartesianGridCanvas = lazy(() => import('./canvas/CartesianGridCanvas'));
const CartesianRectangleCanvas = lazy(() => import('./canvas/CartesianRectangleCanvas'));
const FunctionDefinitionCanvas = lazy(() => import('./canvas/FunctionDefinitionCanvas'));
const FunctionGraphCanvas = lazy(() => import('./canvas/FunctionGraphCanvas'));
const InverseFunctionCanvas = lazy(() => import('./canvas/InverseFunctionCanvas'));
const CompositionFunctionCanvas = lazy(() => import('./canvas/CompositionFunctionCanvas'));
const FiniteMappingCanvas = lazy(() => import('./canvas/FiniteMappingCanvas'));
const ZMappingCanvas = lazy(() => import('./canvas/ZMappingCanvas'));
const DiagonalCountingCanvas = lazy(() => import('./canvas/DiagonalCountingCanvas'));
const AbsoluteValueCanvas = lazy(() => import('./canvas/AbsoluteValueCanvas'));
const EpsilonNeighborhoodCanvas = lazy(() => import('./canvas/EpsilonNeighborhoodCanvas'));
const BoundsCanvas = lazy(() => import('./canvas/BoundsCanvas'));
const NestedIntervalsCanvas = lazy(() => import('./canvas/NestedIntervalsCanvas'));
const SequenceConvergenceCanvas = lazy(() => import('./canvas/SequenceConvergenceCanvas'));
const SqueezeTheoremCanvas = lazy(() => import('./canvas/SqueezeTheoremCanvas'));
const MonotoneConvergenceCanvas = lazy(() => import('./canvas/MonotoneConvergenceCanvas'));
const SubsequenceCanvas = lazy(() => import('./canvas/SubsequenceCanvas'));
const CauchySequenceCanvas = lazy(() => import('./canvas/CauchySequenceCanvas'));
const ClusterPointCanvas = lazy(() => import('./canvas/ClusterPointCanvas'));
const EpsilonDeltaCanvas = lazy(() => import('./canvas/EpsilonDeltaCanvas'));

interface Props {
  canvasId: string;
}

const InteractiveCanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderInteractive = () => {
    switch (canvasId) {
      case 'set-equality-canvas': return <SetEqualityCanvas />;
      case 'set-operations-canvas': return <SetOperationsCanvas />;
      case 'venn-diagrams-canvas': return <VennDiagramsCanvas />;
      case 'demorgan-laws-canvas': return <DeMorganLawsCanvas />;
      case 'cartesian-product-canvas': return <CartesianProductCanvas />;
      case 'cartesian-grid-canvas': return <CartesianGridCanvas />;
      case 'cartesian-rectangle-canvas': return <CartesianRectangleCanvas />;
      case 'function-definition-canvas': return <FunctionDefinitionCanvas />;
      case 'function-graph-canvas': return <FunctionGraphCanvas />;
      case 'inverse-function-canvas': return <InverseFunctionCanvas />;
      case 'composition-function-canvas': return <CompositionFunctionCanvas />;
      case 'finite-mapping-canvas': return <FiniteMappingCanvas />;
      case 'z-mapping-canvas': return <ZMappingCanvas />;
      case 'diagonal-counting-canvas': return <DiagonalCountingCanvas />;
      case 'absolute-value-canvas': return <AbsoluteValueCanvas />;
      case 'epsilon-neighborhood-canvas': return <EpsilonNeighborhoodCanvas />;
      case 'bounds-canvas': return <BoundsCanvas />;
      case 'nested-intervals-canvas': return <NestedIntervalsCanvas />;
      case 'sequence-convergence-canvas': return <SequenceConvergenceCanvas />;
      case 'squeeze-theorem-canvas': return <SqueezeTheoremCanvas />;
      case 'monotone-convergence-canvas': return <MonotoneConvergenceCanvas />;
      case 'subsequence-canvas': return <SubsequenceCanvas />;
      case 'cauchy-sequence-canvas': return <CauchySequenceCanvas />;
      case 'cluster-point-canvas': return <ClusterPointCanvas />;
      case 'epsilon-delta-canvas': return <EpsilonDeltaCanvas />;
      default: return <p className="text-slate-500 py-10 text-center w-full">Interactive component '{canvasId}' not found</p>;
    }
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