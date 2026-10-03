import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const onDark = tone === "dark";
  return (
    <div
      data-reveal
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${
            onDark ? "text-gold-400" : "text-gold-700"
          }`}
        >
          <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-display text-[2.6rem] font-medium leading-[1.02] sm:text-5xl lg:text-[3.6rem] ${
          onDark ? "text-ivory-50" : "text-ink-900"
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-6 text-lg leading-relaxed ${onDark ? "text-stone-400" : "text-muted"}`}>{intro}</p>
      )}
    </div>
  );
}

/** Italic gold accent inside display headings. */
export function Accent({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return <em className={`font-display italic ${onDark ? "text-foil" : "text-gold-700"}`}>{children}</em>;
}
