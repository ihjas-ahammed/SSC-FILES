import * as T from "three";

// Each sphere reflects its four nearest understood neighbours. A bounded local
// light list avoids creating hundreds of scene-wide WebGL point lights.
export const REFLECTION_RANGE = 650;
export function createStarMaterial(color) {
  return new T.ShaderMaterial({
    uniforms: {
      baseColor: { value: new T.Color(color) },
      emission: { value: 0 },
      lightPositions: {
        value: Array.from({ length: 4 }, () => new T.Vector3()),
      },
      lightColors: { value: Array.from({ length: 4 }, () => new T.Color(0)) },
      lightRange: { value: REFLECTION_RANGE },
    },
    vertexShader: `
      varying vec3 worldPosition;
      varying vec3 worldNormal;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        worldPosition = world.xyz;
        worldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,
    fragmentShader: `
      uniform vec3 baseColor;
      uniform float emission;
      uniform vec3 lightPositions[4];
      uniform vec3 lightColors[4];
      uniform float lightRange;
      varying vec3 worldPosition;
      varying vec3 worldNormal;
      void main() {
        vec3 reflected = vec3(0.0);
        for (int i = 0; i < 4; i++) {
          vec3 offset = lightPositions[i] - worldPosition;
          float distanceToLight = max(length(offset), 0.001);
          float falloff = pow(max(0.0, 1.0 - distanceToLight / lightRange), 2.0);
          float diffuse = max(dot(normalize(worldNormal), offset / distanceToLight), 0.0);
          reflected += lightColors[i] * diffuse * falloff;
        }
        gl_FragColor = vec4(baseColor * (emission + reflected), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}

export function updateStarlight(meshes) {
  const glowing = [...meshes.values()].filter((m) => m.understood);
  for (const m of meshes.values()) {
    const nearby = glowing
      .filter((other) => other !== m)
      .map((other) => ({
        other,
        distance: m.group.position.distanceTo(other.group.position),
      }))
      .filter(({ distance }) => distance < REFLECTION_RANGE)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 4);
    const uniforms = m.star.material.uniforms;
    for (let i = 0; i < 4; i++) {
      const light = nearby[i]?.other;
      if (light) {
        uniforms.lightPositions.value[i].copy(light.group.position);
        uniforms.lightColors.value[i].set(light.color);
      } else uniforms.lightColors.value[i].set(0);
    }
  }
}
