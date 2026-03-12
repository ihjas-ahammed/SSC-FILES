import { Unit } from '../../types';

export const UNIT_2_3_SUMMARY: Unit = {
  id: "unit-2-3-summary",
  title: "Section 2.3 Summary",
  description: "Thermal Radiation Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-2-3",
      title: "Summary: Planck's Paradigm Shift",
      description: "Key ideas from Section 2.3",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-233",
          type: "theory",
          title: "Section 2.3 Summary",
          content: "**Thermal Radiation Basic Laws:**\n- **Stefan-Boltzmann Law:** The total radiation power scales exactly by the fourth power of absolute temperature: $I = \\sigma T^4$.\n- **Wien's Displacement:** The peak wavelength shifts inversely with temperature: $\\lambda_{\\text{max}} T = 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}$.\n\n**Theoretical Collision (UV Catastrophe):**\nClassical physics assumed continuous energy $E_{av} = kT$ for all standing waves. This falsely predicted infinite radiation intensity at short (ultraviolet) wavelengths.\n\n**Planck's Revolution (1900):**\nPlanck restricted oscillator energies to discrete, integer bundles: $E = n(hf)$. This mathematically forced the average energy of high-frequency oscillators to zero ($E_{av} \\to 0$ as $\\lambda \\to 0$), perfectly resolving the catastrophe and birthing the Quantum Era."
        },
        {
           id : "chkxszz", 
           type :"quiz",
           title :"Recap Review",
           content : "How did Planck's assumption of quantized energy $E=nhf$ fix the Ultraviolet Catastrophe?",
           options : [
             { id : "A", text : "It made high-frequency (short wavelength) oscillators too 'expensive' to excite with thermal energy $kT$, dropping their radiation output to zero.", isCorrect :true , explanation  : "Exactly. The energy bundles $hf$ are so large in the UV range that $kT$ can't provide enough energy to reach even $n=1$. "},
             { id : "B", text: "It showed that the speed of light slows down in the ultraviolet region.", isCorrect: false, explanation: "The speed of light $c$ is constant."} 
           ]
        }
      ]
    }
  ]
};