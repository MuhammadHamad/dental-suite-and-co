import Link from "next/link";

export function Monogram({ className = "h-11 w-11", id = "ds-foil" }: { className?: string; id?: string }) {
  const fill = `url(#${id})`;
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1dfae" />
          <stop offset=".45" stopColor="#c39a57" />
          <stop offset=".7" stopColor="#ecd6a0" />
          <stop offset="1" stopColor="#a47c3d" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22.5" fill="none" stroke={fill} strokeWidth="1.2" />
      <circle cx="24" cy="24" r="19.2" fill="none" stroke={fill} strokeWidth=".5" opacity=".6" />
      <text
        x="24"
        y="29.6"
        textAnchor="middle"
        fill={fill}
        style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "17px", letterSpacing: ".04em" }}
      >
        DS
      </text>
      <path d="M15.5 33.4c5.6 1.9 11.4 1.9 17 0" stroke={fill} strokeWidth=".9" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  tone = "light",
  className = "",
  id,
}: {
  tone?: "light" | "dark";
  className?: string;
  id?: string;
}) {
  const main = tone === "light" ? "text-ivory-50" : "text-ink-900";
  const sub = tone === "light" ? "text-gold-300" : "text-gold-700";
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Monogram id={id} className="h-11 w-11 shrink-0 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:rotate-[8deg]" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.08rem] font-semibold uppercase tracking-[0.16em] ${main}`}>
          The Dental Suite
        </span>
        <span className={`mt-1.5 text-[0.6rem] font-bold uppercase tracking-[0.34em] ${sub}`}>
          &amp; Co. · Dr Osama Afridi
        </span>
      </span>
      <span className="sr-only"> — home</span>
    </Link>
  );
}
