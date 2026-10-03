"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRightIcon, CheckIcon, TreatmentIcon, WhatsAppIcon } from "@/components/icons";
import { treatments } from "@/content/treatments";
import { whatsappLink } from "@/lib/links";

const concerns = [
  { id: "stains", label: "Yellow or stained teeth", treatments: ["scaling-and-polishing", "teeth-whitening"] },
  { id: "chips", label: "Chipped, worn or uneven teeth", treatments: ["fillings-and-bonding", "veneers"] },
  { id: "gaps", label: "Gaps or crooked teeth", treatments: ["braces-and-aligners", "fillings-and-bonding"] },
  { id: "missing", label: "A missing tooth", treatments: ["dental-implants", "crowns-and-bridges"] },
  { id: "pain", label: "Toothache or sensitivity", treatments: ["root-canal-treatment", "fillings-and-bonding"] },
  { id: "gums", label: "Bleeding gums or bad breath", treatments: ["scaling-and-polishing"] },
  { id: "broken", label: "A broken or heavily filled tooth", treatments: ["crowns-and-bridges", "root-canal-treatment"] },
  { id: "makeover", label: "A completely new smile", treatments: ["smile-makeover", "veneers"] },
  { id: "kids", label: "My child's teeth", treatments: ["kids-dentistry"] },
] as const;

// Display order follows the usual clinical sequence: clean, treat, align, whiten, then restore.
const CLINICAL_ORDER = [
  "scaling-and-polishing",
  "kids-dentistry",
  "root-canal-treatment",
  "fillings-and-bonding",
  "braces-and-aligners",
  "teeth-whitening",
  "dental-implants",
  "crowns-and-bridges",
  "veneers",
  "smile-makeover",
];

export function SmilePlanner() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const suggestions = useMemo(() => {
    const score = new Map<string, number>();
    concerns
      .filter((c) => selected.includes(c.id))
      .forEach((c) => c.treatments.forEach((slug, i) => score.set(slug, (score.get(slug) ?? 0) + (i === 0 ? 2 : 1))));
    return [...score.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .sort((a, b) => CLINICAL_ORDER.indexOf(a[0]) - CLINICAL_ORDER.indexOf(b[0]))
      .map(([slug]) => treatments.find((t) => t.slug === slug)!)
      .filter(Boolean);
  }, [selected]);

  const message = useMemo(() => {
    const labels = concerns.filter((c) => selected.includes(c.id)).map((c) => c.label.toLowerCase());
    const names = suggestions.map((t) => t.name);
    return [
      "Hi Dr. Osama! I'd like a consultation at The Dental Suite & Co.",
      labels.length ? `My concerns: ${labels.join(", ")}.` : "",
      names.length ? `I'm interested in: ${names.join(", ")}.` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }, [selected, suggestions]);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
      <fieldset data-reveal>
        <legend className="sr-only">What would you like to change about your smile?</legend>
        <p className="mb-5 text-sm font-semibold text-muted">Choose everything that applies:</p>
        <div className="flex flex-wrap gap-2.5">
          {concerns.map((c) => {
            const on = selected.includes(c.id);
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(c.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  on
                    ? "border-ink-900 bg-ink-900 text-ivory-50 shadow-[0_10px_24px_-14px_rgba(16,15,12,0.8)]"
                    : "border-ink-900/15 bg-white text-ink-800 hover:border-gold-600"
                }`}
              >
                <span
                  className={`grid h-4 w-4 place-items-center rounded-full border transition-colors ${
                    on ? "border-gold-300 bg-gold-300 text-ink-900" : "border-ink-900/25"
                  }`}
                  aria-hidden="true"
                >
                  {on && <CheckIcon size={11} strokeWidth={3} />}
                </span>
                {c.label}
              </button>
            );
          })}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          A starting point, not a diagnosis — Dr. Osama will confirm what&apos;s right for you after examining your teeth.
        </p>
      </fieldset>

      <div
        data-reveal
        className="grain relative overflow-hidden rounded-[2rem] bg-ink-900 p-7 text-ivory-50 sm:p-9"
        aria-live="polite"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 glow [--glow-a:0.3]" aria-hidden="true" />
        <p className="eyebrow text-gold-400">Your suggested starting point</p>
        {suggestions.length === 0 ? (
          <div className="mt-6">
            <p className="font-display text-3xl leading-tight text-ivory-50">
              Tap what&apos;s on your mind, and we&apos;ll show you where to begin.
            </p>
            <p className="mt-4 leading-relaxed text-stone-400">
              Most smiles need a combination — a clean before whitening, aligners before veneers. The planner suggests the
              order we usually recommend.
            </p>
          </div>
        ) : (
          <ol className="mt-6 space-y-3">
            {suggestions.map((t, i) => (
              <li key={t.slug}>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-gold-300/15 bg-white/[0.03] p-4 transition-colors hover:border-gold-300/40"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold-300/25 text-gold-400">
                    <TreatmentIcon name={t.icon} size={26} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-stone-500">
                      Step {i + 1}
                    </span>
                    <span className="block font-display text-xl font-semibold text-ivory-50">{t.name}</span>
                    <span className="block text-sm text-stone-400">{t.tagline}</span>
                  </span>
                  <ArrowUpRightIcon size={18} className="text-gold-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ol>
        )}
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener"
          className={`btn btn-gold mt-7 w-full ${suggestions.length ? "" : "opacity-90"}`}
        >
          <WhatsAppIcon size={20} />
          {suggestions.length ? "Send my plan to Dr. Osama" : "Ask Dr. Osama on WhatsApp"}
        </a>
      </div>
    </div>
  );
}
