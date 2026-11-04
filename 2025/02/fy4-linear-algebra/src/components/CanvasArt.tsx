import React from 'react';
import VectorSpaceInteractive from './interactive-arts/VectorSpaceInteractive';
import VectorScaleInteractive from './interactive-arts/VectorScaleInteractive';
import FunctionSpaceInteractive from './interactive-arts/FunctionSpaceInteractive';
import PolynomialSpaceInteractive from './interactive-arts/PolynomialSpaceInteractive';
import LineNotOriginInteractive from './interactive-arts/LineNotOriginInteractive';
import SubspaceR3Interactive from './interactive-arts/SubspaceR3Interactive';
import PracticeProb1Interactive from './interactive-arts/PracticeProb1Interactive';
import NullSpaceMappingInteractive from './interactive-arts/NullSpaceMappingInteractive';
import ColumnSpaceSpanInteractive from './interactive-arts/ColumnSpaceSpanInteractive';
import KernelRangeInteractive from './interactive-arts/KernelRangeInteractive';
import SubspaceIntersectionInteractive from './interactive-arts/SubspaceIntersectionInteractive';
import SubspaceDimensionsInteractive from './interactive-arts/SubspaceDimensionsInteractive';
import RankTheoremInteractive from './interactive-arts/RankTheoremInteractive';
import OrthogonalProjectionInteractive from './interactive-arts/OrthogonalProjectionInteractive';
import BestApproxInteractive from './interactive-arts/BestApproxInteractive';

interface Props {
  canvasId: string;
}

const CanvasArt: React.FC<Props> = ({ canvasId }) => {
  const renderArt = () => {
    switch (canvasId) {
      case 'vector-space-interactive': return <VectorSpaceInteractive />;
      case 'vector-scale-interactive': return <VectorScaleInteractive />;
      case 'function-space-interactive': return <FunctionSpaceInteractive />;
      case 'polynomial-space-interactive': return <PolynomialSpaceInteractive />;
      case 'line-not-origin-interactive': return <LineNotOriginInteractive />;
      case 'subspace-r3-interactive': return <SubspaceR3Interactive />;
      case 'practice-prob-1-interactive': return <PracticeProb1Interactive />;
      case 'null-space-mapping-interactive': return <NullSpaceMappingInteractive />;
      case 'column-space-span-interactive': return <ColumnSpaceSpanInteractive />;
      case 'kernel-range-interactive': return <KernelRangeInteractive />;
      case 'subspace-intersection-interactive': return <SubspaceIntersectionInteractive />;
      case 'subspace-dimensions-interactive': return <SubspaceDimensionsInteractive />;
      case 'rank-theorem-interactive': return <RankTheoremInteractive />;
      case 'orthogonal-projection-interactive': return <OrthogonalProjectionInteractive />;
      case 'best-approx-interactive': return <BestApproxInteractive />;
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