export const angleDeg = (p1, p2) =>
  (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
