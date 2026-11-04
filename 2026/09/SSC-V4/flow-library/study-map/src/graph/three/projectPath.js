import * as T from "three";

// Clip in camera space before projecting: a focused star can have neighbours
// behind the camera, while the visible part of their connection is still usable.
export function projectPath(a, b, camera, project) {
  let pa = new T.Vector3(a.x, a.y, a.z),
    pb = new T.Vector3(b.x, b.y, b.z);
  const depth = (p) => -p.clone().applyMatrix4(camera.matrixWorldInverse).z;
  const da = depth(pa),
    db = depth(pb),
    near = camera.near * 2;
  if (da < near && db < near) return null;
  if (da < near) pa.lerp(pb, (near - da) / (db - da));
  else if (db < near) pb.lerp(pa, (near - db) / (da - db));
  return [project(pa), project(pb)];
}
