import * as T from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { buildScene } from "./scene";
import { createFlights } from "./flight";
import { projectPath } from "./projectPath";
import { createPathFlow } from "./flow";
import { isPathComplete } from "../pathNavigation";
import { createHover } from "./hover";
import { trackMapGestures } from "./gestures";

export function createStellarEngine(
  host,
  layout,
  nodes,
  itinerary,
  onFrame,
  readingFocus = false,
) {
  const renderer = new T.WebGLRenderer({
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.domElement.setAttribute("aria-label", "3D constellation map");
  renderer.domElement.tabIndex = 0;
  host.prepend(renderer.domElement);
  const camera = new T.PerspectiveCamera(43, 1, 1, 18000);
  const controls = new OrbitControls(camera, host);
  controls.enableDamping = true;
  controls.dampingFactor = 0.12;
  controls.minDistance = 230;
  controls.maxDistance = 13000;
  controls.rotateSpeed = 0.55;
  controls.touches = { ONE: T.TOUCH.ROTATE, TWO: T.TOUCH.DOLLY_PAN };
  controls.screenSpacePanning = true;
  controls.listenToKeyEvents(renderer.domElement);
  const gestures = trackMapGestures(host);
  const { scene, meshes, edges, texture } = buildScene(
    layout,
    nodes,
    itinerary,
  );
  let width = 1,
    height = 1,
    raf,
    dirty = 6,
    disposed = false,
    selected = null,
    lastDraw = 0,
    followedPath = null,
    focused = null;
  const pathFlow = createPathFlow(scene, edges, layout.positions);
  const vector = new T.Vector3();
  const reduced = () =>
    document.documentElement.dataset.motion === "off" ||
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  const flights = createFlights(camera, controls, reduced, () => {
    dirty = 6;
  });
  function fit() {
    focused = null;
    const b = layout.bounds,
      center = {
        x: (b.minX + b.maxX) / 2,
        y: (b.minY + b.maxY) / 2,
        z: (b.minZ + b.maxZ) / 2,
      };
    const vertical =
      (b.maxY - b.minY) / 2 / Math.tan(T.MathUtils.degToRad(21.5));
    const horizontal =
      (b.maxX - b.minX) /
      2 /
      Math.tan(T.MathUtils.degToRad(21.5)) /
      camera.aspect;
    flights.travel(
      center,
      Math.max(650, vertical, horizontal) * 1.2 + (b.maxZ - b.minZ) / 2,
    );
  }
  const resize = new ResizeObserver(() => {
    width = Math.max(1, host.clientWidth);
    height = Math.max(1, host.clientHeight);
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    dirty = 6;
  });
  resize.observe(host);
  // Initialise before the first animation frame.
  width = Math.max(1, host.clientWidth);
  height = Math.max(1, host.clientHeight);
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  camera.position.set(250, 280, 2000);
  fit();
  const wake = () => {
    dirty = 6;
  };
  const hover = createHover(scene, meshes, edges, wake);
  const cancel = () => {
    hover.clear();
    flights.cancel();
  };
  controls.addEventListener("start", cancel);
  controls.addEventListener("change", wake);
  function frame(now) {
    if (disposed) return;
    raf = requestAnimationFrame(frame);
    if (document.hidden) return;
    if (flights.tick(now)) dirty = 6;
    if (pathFlow.tick(now, reduced())) dirty = 6;
    controls.enableDamping = !reduced();
    controls.update();
    if (focused && !flights.flying) {
      const p = layout.positions[focused];
      if (controls.target.distanceTo(new T.Vector3(p.x, p.y, p.z)) > 20)
        focused = null;
    }
    if (dirty <= 0 || now - lastDraw < 33) return;
    dirty--;
    lastDraw = now;
    meshes.forEach((m) => m.ring.quaternion.copy(camera.quaternion));
    renderer.render(scene, camera);
    const project = (p, radius = 14) => {
      const depth = -new T.Vector3(p.x, p.y, p.z).applyMatrix4(
        camera.matrixWorldInverse,
      ).z;
      vector.set(p.x, p.y, p.z).project(camera);
      return {
        x: ((vector.x + 1) * width) / 2,
        y: ((1 - vector.y) * height) / 2,
        depth,
        radius: Math.max(
          3,
          Math.min(
            120,
            (radius * height) /
              (2 * Math.max(1, depth) * Math.tan(T.MathUtils.degToRad(21.5))),
          ),
        ),
        inFront: vector.z < 1 && vector.z > -1,
        visible:
          vector.z < 1 &&
          vector.z > -1 &&
          Math.abs(vector.x) < 1.1 &&
          Math.abs(vector.y) < 1.1,
      };
    };
    const distance = camera.position.distanceTo(controls.target);
    onFrame({
      focused,
      flowActive: !reduced(),
      zoom: readingFocus || itinerary ? 100 : null,
      nodes: Object.fromEntries(
        nodes.map((n) => [
          n.name,
          project(layout.positions[n.name], meshes.get(n.name).encoding.radius),
        ]),
      ),
      blocks: layout.blocks.map((b) => ({
        ...project({
          x: b.center.x,
          y: b.center.y + b.radius + 35,
          z: b.center.z,
        }),
        id: b.id,
      })),
      width,
      height,
      paths: edges.map(({ a, b, route, complete }) => {
        const clipped = projectPath(
          layout.positions[a],
          layout.positions[b],
          camera,
          project,
        );
        const [pa, pb] = clipped || [
          { x: 0, y: 0 },
          { x: 0, y: 0 },
        ];
        return {
          a,
          b,
          route,
          complete,
          ax: pa.x,
          ay: pa.y,
          bx: pb.x,
          by: pb.y,
          visible: !!clipped && Math.hypot(pa.x - pb.x, pa.y - pb.y) > 25,
        };
      }),
      distance,
      flying: flights.flying,
      camera: camera.position.toArray(),
      target: controls.target.toArray(),
    });
  }
  raf = requestAnimationFrame(frame);
  function focusDistance(name) {
    if (itinerary || readingFocus) {
      // Standard reading scale: frame the focused star at a 64-pixel diameter.
      return Math.max(
        controls.minDistance,
        (meshes.get(name).encoding.radius * height) /
          (64 * Math.tan(T.MathUtils.degToRad(21.5))),
      );
    }
    const cluster = layout.blocks.find((b) =>
      b.members.some((n) => n.name === name),
    );
    const contextDistance = Math.max(
      width < 500 ? 440 : 520,
      (cluster?.radius || 200) * 2.15,
    );
    return Math.min(
      contextDistance,
      Math.max(
        controls.minDistance,
        camera.position.distanceTo(controls.target),
      ),
    );
  }
  function follow(a, b) {
    const edge = edges.find(
      (e) => (e.a === a && e.b === b) || (e.a === b && e.b === a),
    );
    if (!edge) return false;
    const pa = layout.positions[a],
      pb = layout.positions[b];
    followedPath = { a: edge.a, b: edge.b };
    focused = b;
    edges.forEach((e) => {
      if (e === edge) {
        e.edge.material.opacity = 0.8;
        e.edge.material.color.set(e.complete ? 0x59f9bd : 0x6fffea);
        e.arrow.material.opacity = 1;
      }
    });
    flights.follow(pa, pb, focusDistance(b));
    wake();
    return true;
  }
  return {
    follow,
    setReadingFocus(value) {
      readingFocus = value;
    },
    hoverStar: hover.star,
    hoverPath: hover.path,
    clearHover: hover.clear,
    allowsClick: gestures.allowsClick,
    focus(name) {
      const p = layout.positions[name];
      if (p) {
        focused = name;
        flights.travel(p, focusDistance(name));
      }
    },
    block(id) {
      focused = null;
      const b = layout.blocks.find((b) => b.id === id);
      if (b)
        flights.travel(
          b.center,
          Math.max(b.height, b.width / camera.aspect) * 1.65,
        );
    },
    fit,
    update(state) {
      hover.clear();
      selected = state.selected;
      meshes.forEach((m, name) => {
        const active = name === selected,
          known = state.statuses[name] === "known",
          read = state.read.includes(name);
        m.star.material.color.set(m.color);
        m.star.material.emissive.set(m.color);
        m.star.material.emissiveIntensity = m.encoding.emissive;
        m.glow.material.color.set(m.color);
        m.glow.material.opacity = m.encoding.glowOpacity;
        m.completionGlow.visible = known;
        m.ring.visible = active || known || read;
        m.ring.material.color.set(
          active ? 0xffffff : known ? 0x59f9bd : 0x8395ae,
        );
        m.ring.material.opacity = active ? 1 : known ? 0.85 : 0.35;
      });
      edges.forEach((entry) => {
        const { a, b, edge, arrow, route, same } = entry;
        const complete = (entry.complete = isPathComplete(
          entry,
          state.statuses,
        ));
        const active =
          a === selected ||
          b === selected ||
          (followedPath?.a === a && followedPath?.b === b);
        entry.active = active;
        entry.completionGlow.visible = complete;
        edge.material.color.set(
          complete ? 0x59f9bd : active ? 0x00eaff : route ? 0x009eaf : 0x237484,
        );
        arrow.material.color.set(
          complete ? 0x59f9bd : active ? 0x00eaff : 0x237484,
        );
        arrow.visible = active || route;
        arrow.material.opacity = active
          ? 0.9
          : route
            ? 0.7
            : same
              ? 0.35
              : 0.12;
        edge.material.opacity = complete
          ? 0.62
          : active
            ? 0.68
            : route
              ? 0.38
              : same
                ? 0.2
                : 0.045;
      });
      wake();
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(raf);
      resize.disconnect();
      controls.dispose();
      gestures.dispose();
      texture.dispose();
      scene.traverse((o) => {
        o.geometry?.dispose();
        if (o.material)
          (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) =>
            m.dispose(),
          );
      });
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    },
  };
}
