import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  children,
  aside,
}: {
  crumbs: { name: string; path: string }[];
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink-900 text-ivory-50">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] glow [--glow-a:0.2]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-6 lg:pb-24 lg:pt-14 xl:px-8">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-12 grid gap-12 ${aside ? "lg:grid-cols-12 lg:items-end" : ""}`}>
          <div className={aside ? "lg:col-span-7" : "max-w-4xl"}>
            <p className="eyebrow hero-rise flex items-center gap-3 text-gold-400">
              <span className="h-px w-10 bg-gold-500/70" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-6 font-display text-[2.9rem] font-medium leading-[1] tracking-[-0.01em] sm:text-6xl lg:text-[4.6rem]">
              {title}
            </h1>
            {intro && (
              <div className="hero-rise mt-7 max-w-2xl text-lg leading-relaxed text-stone-400 sm:text-xl" style={{ ["--d" as string]: "120ms" }}>
                {intro}
              </div>
            )}
            {children && (
              <div className="hero-rise mt-10" style={{ ["--d" as string]: "220ms" }}>
                {children}
              </div>
            )}
          </div>
          {aside && (
            <div className="hero-rise lg:col-span-5" style={{ ["--d" as string]: "160ms" }}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
