import * as T from "three";
import { starEncoding } from "./encoding";

function clusterEnvelope(block) {
  const group = new T.Group();
  group.position.set(block.center.x, block.center.y, block.center.z);
  // Fine orbital boundaries give each constellation a distinct volume, not a panel.
  for (let i = 0; i < 3; i++) {
    const points = Array.from({ length: 97 }, (_, j) => {
      const a = (j / 96) * Math.PI * 2,
        r = block.radius * 1.09;
      return new T.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0);
    });
    const orbit = new T.Line(
      new T.BufferGeometry().setFromPoints(points),
      new T.LineBasicMaterial({
        color: block.color,
        transparent: true,
        opacity: 0.13,
        depthWrite: false,
      }),
    );
    if (i === 1) orbit.rotation.x = Math.PI / 2;
    if (i === 2) orbit.rotation.y = Math.PI / 2;
    group.add(orbit);
  }
  return group;
}
function glowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext("2d"),
    gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "#fff");
  gradient.addColorStop(0.18, "#ffffffbb");
  gradient.addColorStop(0.5, "#ffffff22");
  gradient.addColorStop(1, "#ffffff00");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  return new T.CanvasTexture(canvas);
}
export function buildScene(layout, nodes, itinerary) {
  const scene = new T.Scene();
  scene.background = new T.Color(0x030710);
  scene.add(new T.AmbientLight(0xc6d5ff, 1.5));
  const key = new T.DirectionalLight(0xffffff, 3);
  key.position.set(500, 900, 1600);
  scene.add(key);
  layout.blocks.forEach((b) => scene.add(clusterEnvelope(b)));
  const stars = [];
  for (let i = 0; i < 650; i++)
    stars.push(
      Math.sin(i * 127.1) * 4600,
      Math.cos(i * 79.9) * 4000,
      -900 - Math.abs(Math.sin(i * 43.7)) * 3400,
    );
  const starGeometry = new T.BufferGeometry();
  starGeometry.setAttribute("position", new T.Float32BufferAttribute(stars, 3));
  scene.add(
    new T.Points(
      starGeometry,
      new T.PointsMaterial({
        color: 0x7f92c5,
        size: 2.5,
        transparent: true,
        opacity: 0.6,
      }),
    ),
  );
  const meshes = new Map(),
    edges = [],
    texture = glowTexture();
  const geometry = new T.SphereGeometry(1, 20, 14);
  const colors = Object.fromEntries(layout.blocks.map((b) => [b.id, b.color]));
  nodes.forEach((n) => {
    const p = layout.positions[n.name],
      group = new T.Group();
    group.position.set(p.x, p.y, p.z);
    const encoding = starEncoding(n),
      color = encoding.color;
    const star = new T.Mesh(
      geometry,
      new T.MeshPhongMaterial({
        color,
        emissive: color,
        emissiveIntensity: encoding.emissive,
        shininess: 90,
      }),
    );
    const glow = new T.Sprite(
      new T.SpriteMaterial({
        map: texture,
        color,
        transparent: true,
        opacity: encoding.glowOpacity,
        depthWrite: false,
        blending: T.AdditiveBlending,
      }),
    );
    star.scale.setScalar(encoding.radius);
    glow.scale.set(encoding.glowSize, encoding.glowSize, 1);
    const ring = new T.Mesh(
      new T.TorusGeometry(encoding.radius + 7, 0.8, 6, 48),
      new T.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
      }),
    );
    ring.visible = false;
    const completionGlow = new T.Sprite(
      new T.SpriteMaterial({
        map: texture,
        color: 0x59f9bd,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
        blending: T.AdditiveBlending,
      }),
    );
    completionGlow.scale.set(
      encoding.glowSize * 1.3,
      encoding.glowSize * 1.3,
      1,
    );
    completionGlow.visible = false;
    group.add(star, glow, ring, completionGlow);
    scene.add(group);
    meshes.set(n.name, {
      group,
      star,
      glow,
      ring,
      completionGlow,
      color,
      encoding,
    });
  });
  const byName = Object.fromEntries(nodes.map((n) => [n.name, n]));
  const colorFor = (name) => colors[byName[name]?.group] || 0x6fffea;
  function connect(a, b, route = false) {
    const pa = layout.positions[a],
      pb = layout.positions[b];
    if (!pa || !pb) return;
    const existing = edges.find((e) => e.a === a && e.b === b);
    if (existing) {
      existing.route ||= route;
      return;
    }
    const same = byName[a]?.group === byName[b]?.group;
    const edge = new T.Line(
      new T.BufferGeometry().setFromPoints([
        new T.Vector3(pa.x, pa.y, pa.z),
        new T.Vector3(pb.x, pb.y, pb.z),
      ]),
      new T.LineBasicMaterial({
        color: route ? 0x6fffea : colors[byName[b]?.group],
        transparent: true,
        opacity: route ? 0.6 : same ? 0.2 : 0.045,
        depthWrite: false,
      }),
    );
    scene.add(edge);
    const direction = new T.Vector3(
      pb.x - pa.x,
      pb.y - pa.y,
      pb.z - pa.z,
    ).normalize();
    const arrow = new T.Mesh(
      new T.ConeGeometry(4, 14, 6),
      new T.MeshBasicMaterial({
        color: route ? 0x6fffea : colorFor(b),
        transparent: true,
        opacity: route ? 0.8 : 0.35,
      }),
    );
    arrow.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), direction);
    arrow.position.copy(
      new T.Vector3(pa.x, pa.y, pa.z).lerp(
        new T.Vector3(pb.x, pb.y, pb.z),
        0.68,
      ),
    );
    scene.add(arrow);
    const length = new T.Vector3(
      pb.x - pa.x,
      pb.y - pa.y,
      pb.z - pa.z,
    ).length();
    const completionGlow = new T.Mesh(
      new T.CylinderGeometry(2.5, 2.5, length, 6),
      new T.MeshBasicMaterial({
        color: 0x59f9bd,
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
        blending: T.AdditiveBlending,
      }),
    );
    completionGlow.position.set(
      (pa.x + pb.x) / 2,
      (pa.y + pb.y) / 2,
      (pa.z + pb.z) / 2,
    );
    completionGlow.quaternion.copy(arrow.quaternion);
    completionGlow.visible = false;
    scene.add(completionGlow);
    edges.push({ a, b, edge, arrow, completionGlow, route, same });
  }
  nodes.forEach((n) => n.prerequisites.forEach((p) => connect(p, n.name)));
  if (itinerary)
    nodes.slice(1).forEach((n, i) => connect(nodes[i].name, n.name, true));
  return { scene, meshes, edges, texture };
}
