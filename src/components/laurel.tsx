// Laurel branch from the clinic logo, generated along a quadratic curve so both halves match.

const LEAF = "M0 0C2.6-2.4 7.6-2.6 11 0 7.6 2.6 2.6 2.4 0 0Z";

function point(t: number, p0: number[], p1: number[], p2: number[]) {
  const u = 1 - t;
  return [
    u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
    u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1],
  ];
}

function tangentAngle(t: number, p0: number[], p1: number[], p2: number[]) {
  const dx = 2 * (1 - t) * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]);
  const dy = 2 * (1 - t) * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1]);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

const P0 = [34, 96];
const P1 = [2, 52];
const P2 = [30, 6];
const STEM = `M${P0[0]} ${P0[1]}Q${P1[0]} ${P1[1]} ${P2[0]} ${P2[1]}`;

const leaves = Array.from({ length: 9 }, (_, i) => {
  const t = 0.1 + i * 0.1;
  const [x, y] = point(t, P0, P1, P2);
  const a = tangentAngle(t, P0, P1, P2);
  const scale = 1.05 - i * 0.045;
  return { x, y, outer: a - 38, inner: a + 38, scale };
});

export function LaurelHalf({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 40 100"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d={STEM} fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
      {leaves.map((l, i) => (
        <g key={i} fill="currentColor">
          <path d={LEAF} transform={`translate(${l.x} ${l.y}) rotate(${l.outer}) scale(${l.scale})`} />
          {i < 8 && (
            <path
              d={LEAF}
              opacity={0.85}
              transform={`translate(${l.x} ${l.y}) rotate(${l.inner}) scale(${l.scale * 0.85})`}
            />
          )}
        </g>
      ))}
      <circle cx={P2[0]} cy={P2[1] - 1} r={1.6} fill="currentColor" />
    </svg>
  );
}

/** Laurel-framed rating badge, like an award seal. */
export function LaurelBadge({
  children,
  className = "",
  leafClassName = "h-16 w-auto text-gold-500",
}: {
  children: React.ReactNode;
  className?: string;
  leafClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <LaurelHalf className={leafClassName} />
      <div className="text-center">{children}</div>
      <LaurelHalf className={leafClassName} flip />
    </div>
  );
}
