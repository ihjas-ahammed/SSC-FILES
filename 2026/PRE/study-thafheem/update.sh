#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# CLEANUP: Remove old Mechanics modules and replace with Modern Physics
# Run from the project root directory.
# ─────────────────────────────────────────────────────────────────────────────

# 1. Delete old module-level data files
rm -f src/data/module_1_mechanics.ts
rm -f src/data/module_2_harmonic_motion.ts

# 2. Delete old section data files
rm -f src/data/section_1_1_keplers_laws.ts
rm -f src/data/section_1_2_central_forces.ts
rm -f src/data/section_1_3_equation_of_motion.ts
rm -f src/data/section_1_4_energy_potential.ts
rm -f src/data/section_1_5_radial_equation.ts
rm -f src/data/section_1_6_orbit_equation.ts
rm -f src/data/section_1_7_equation_ellipse.ts
rm -f src/data/section_1_8_kepler_revisited.ts
rm -f src/data/section_2_1_springs_pendulums.ts
rm -f src/data/section_2_2_solving_ode.ts
rm -f src/data/section_2_3_oscillators.ts
rm -f src/data/section_2_4_forced_oscillator.ts
rm -f src/data/section_2_5_q_factor.ts
rm -f src/data/section_2_6_electrical_resonance.ts

# 3. Delete entire mech_units directory
rm -rf src/data/mech_units/

# 4. (Optional) Keep old canvas art files — they are not imported by the new modules
# but can be retained if you may need them later. To delete them too:
rm -f src/components/canvasart/MechModule1Kepler.tsx
rm -f src/components/canvasart/MechModule1CentralForces.tsx
rm -f src/components/canvasart/MechModule1Energy.tsx
rm -f src/components/canvasart/MechModule1Orbit.tsx
rm -f src/components/canvasart/MechModule1Geometry.tsx
rm -f src/components/canvasart/MechModule2Harmonic.tsx

echo "✅  Old mechanics files deleted."
echo "📋  Now copy the new files from the outputs folder into your project:"
echo "    - index.html                              → (project root)"
echo "    - src/data/modules.ts                     → src/data/"
echo "    - src/data/module_1_modern_physics.ts     → src/data/"
echo "    - src/data/section_1_1_classical_foundations.ts → src/data/"
echo "    - src/data/modern_units/ (entire folder)  → src/data/"
echo "    - src/components/InteractiveCanvasArt.tsx → src/components/"
echo "    - src/components/canvasart/ModernPhysicsRelativity1.tsx → src/components/canvasart/"