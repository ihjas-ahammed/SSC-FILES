import { Module } from '../types';
import { SECTION_2_1_MATPLOTLIB } from './section_2_1_matplotlib';

export const MODULE_2_DATA_VISUALIZATION: Module = {
  id: 'module-2-data-visualization',
  title: 'Module II: Data Visualization',
  description: 'Transforming numerical arrays into geometric insights using Matplotlib.',
  sections: [
    SECTION_2_1_MATPLOTLIB
  ],
  moduleSummary:[
    {
      id: 'mod-sum-dv-1',
      type: 'theory',
      title: 'Mental Model: The Canvas',
      content: 'In this module, you bridged the gap between abstract numbers and human intuition. Matplotlib is fundamentally an engine that maps NumPy arrays to pixel coordinates. The basic interface (`plt.plot`) maps 1D arrays against each other in Cartesian space.'
    },
    {
      id: 'mod-sum-dv-2',
      type: 'theory',
      title: 'Mental Model: Parameterization',
      content: 'You learned that $X$ does not always have to be the independent variable. In parametric (Astroids, Lissajous) and Polar systems, both $X$ and $Y$ are derived from a unified underlying variable (time $t$ or angle $\\theta$), allowing loops and curves impossible in standard $y=f(x)$ logic.'
    },
    {
      id: 'mod-sum-dv-3',
      type: 'theory',
      title: 'Mental Model: Dimensional Scaling',
      content: 'To visualize 3D surfaces or Color Maps (Fractals), 1D arrays are insufficient. You mastered `np.meshgrid()` to generate a fully realized 2D coordinate network, allowing vectorized NumPy equations to instantly calculate a Z-height (or color density) for every discrete point on the plane.'
    }
  ]
};