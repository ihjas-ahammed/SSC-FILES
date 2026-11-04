import * as T from "three";
const ease = (t) => t * t * (3 - 2 * t);
export function createFlights(camera, controls, reduced, wake) {
  let flight = null;
  function finish() {
    if (flight.path) camera.position.copy(flight.target).add(flight.toOffset);
    else camera.position.copy(flight.to);
    controls.target.copy(flight.target);
    flight = null;
    controls.update();
  }
  function start(next) {
    flight = { ...next, start: performance.now() };
    if (reduced()) finish();
    wake();
  }
  return {
    get flying() {
      return !!flight;
    },
    travel(target, distance) {
      const goal = new T.Vector3(target.x, target.y, target.z);
      const direction = camera.position
        .clone()
        .sub(controls.target)
        .normalize();
      start({
        duration: 750,
        from: camera.position.clone(),
        to: goal
          .clone()
          .addScaledVector(
            direction,
            Math.min(
              controls.maxDistance,
              Math.max(controls.minDistance, distance),
            ),
          ),
        fromTarget: controls.target.clone(),
        target: goal,
      });
    },
    follow(origin, target, distance) {
      const fromOffset = camera.position.clone().sub(controls.target);
      const a = new T.Vector3(origin.x, origin.y, origin.z),
        b = new T.Vector3(target.x, target.y, target.z);
      start({
        duration: 1400,
        path: true,
        origin: a,
        target: b,
        fromTarget: controls.target.clone(),
        fromOffset,
        toOffset: fromOffset.clone().normalize().multiplyScalar(distance),
        approach: controls.target.distanceTo(a) < 10 ? 0.001 : 0.3,
      });
    },
    tick(now) {
      if (!flight) return false;
      const t = reduced()
          ? 1
          : Math.min(1, (now - flight.start) / flight.duration),
        s = ease(t);
      if (flight.path) {
        const approaching = t < flight.approach,
          leg = approaching
            ? t / flight.approach
            : (t - flight.approach) / (1 - flight.approach);
        controls.target.lerpVectors(
          approaching ? flight.fromTarget : flight.origin,
          approaching ? flight.origin : flight.target,
          ease(leg),
        );
        camera.position
          .copy(controls.target)
          .add(
            new T.Vector3().lerpVectors(flight.fromOffset, flight.toOffset, s),
          );
      } else {
        camera.position.lerpVectors(flight.from, flight.to, s);
        controls.target.lerpVectors(flight.fromTarget, flight.target, s);
      }
      if (t === 1) {
        flight = null;
      }
      return true;
    },
    cancel() {
      flight = null;
      wake();
    },
  };
}
