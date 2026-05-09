import { Unit } from '../../types';

export const UNIT_2_1_5_SECTION_SUMMARY: Unit = {
  id: 'unit-2-1-5-section-summary',
  title: 'Section Summary',
  description: 'Consolidation of the Matplotlib ecosystem.',
  color: 'duo-blue',
  lessons:[
    {
      id: 'l215-1-summary',
      title: 'Review: 2D & Parameters',
      description: 'A look back at Units 7, 8 & 9.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l215-1-s1',
          type: 'theory',
          title: 'Matplotlib Interfaces & Projections',
          content: 'Matplotlib connects NumPy arrays to visual pixels.\n\nYou learned to use the implicit `plt.plot()` for rapid 2D prototyping, formatting lines with strings like `"ro-"`. You then expanded to **Parametric** and **Polar** projections, recognizing that $X$ and $Y$ don\'t have to be directly related; they can both depend independently on a parameter $t$ or $\\theta$.'
        }
      ]
    },
    {
      id: 'l215-2-summary',
      title: 'Review: Colormaps & 3D',
      description: 'A look back at Units 9 & 10.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l215-2-s1',
          type: 'theory',
          title: 'Adding Dimensions',
          content: 'To display more complex relationships, you utilized `plt.imshow()` to map a full 2D $M \\times N$ matrix to a color gradient, enabling the visualization of Fractals.\n\nFinally, you crossed into 3D explicitly using `projection="3d"`. The critical mental leap here was the `np.meshgrid()` function, which broadcasts 1D axes into the 2D coordinate floor required to compute heights for a continuous `plot_surface`.'
        }
      ]
    }
  ]
};