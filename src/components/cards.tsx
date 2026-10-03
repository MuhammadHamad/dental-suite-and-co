import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, TreatmentIcon } from "@/components/icons";
import type { Treatment } from "@/content/treatments";
import type { CaseNote } from "@/content/cases";
import type { Article } from "@/content/journal";
import crownsPhoto from "@/assets/zirconia-crowns.jpg";

export function TreatmentCard({ t, index }: { t: Treatment; index?: number }) {
  return (
    <Link
      href={`/treatments/${t.slug}`}
      data-reveal
      style={{ ["--reveal-delay" as string]: `${(index ?? 0) * 70}ms` }}
      className="card-dark group relative flex h-full flex-col overflow-hidden p-5 transition-[border-color,transform,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-gold-300/40 hover:shadow-[0_30px_60px_-30px_rgba(195,154,87,0.35)] sm:p-7"
    >
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 glow opacity-0 transition-opacity duration-700 [--glow-a:0.22] group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-2xl border border-gold-300/20 bg-gold-300/[0.04] text-gold-400 transition-colors duration-500 group-hover:border-gold-300/50 group-hover:text-gold-300 sm:h-14 sm:w-14">
          <TreatmentIcon name={t.icon} size={26} className="sm:h-[30px] sm:w-[30px]" />
        </span>
        <span className="hidden text-[0.65rem] font-bold uppercase tracking-[0.24em] text-stone-500 sm:block">{t.category}</span>
      </div>
      <h3 className="mt-5 font-display text-[1.35rem] font-medium leading-tight text-ivory-50 sm:mt-8 sm:text-[1.85rem]">{t.name}</h3>
      <p className="mt-3 hidden flex-1 text-[0.95rem] leading-relaxed text-stone-400 sm:block">{t.tagline}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-gold-300 sm:pt-6">
        Explore
        <ArrowUpRightIcon size={16} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function CaseCard({ c, tone = "light" }: { c: CaseNote; tone?: "light" | "dark" }) {
  const onDark = tone === "dark";
  return (
    <article
      data-reveal
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] ${
        onDark ? "card-dark" : "border border-ink-900/[0.07] bg-white shadow-[0_30px_60px_-45px_rgba(16,15,12,0.45)]"
      }`}
    >
      <div className="relative h-52 overflow-hidden bg-ink-900">
        {c.image === "crowns" ? (
          <Image
            src={crownsPhoto}
            alt="Zirconia crowns being fitted at The Dental Suite & Co."
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-luxe)] group-hover:scale-105"
          />
        ) : (
          <div className="grain flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#2a2318,#100f0c_70%)]">
            <span className="font-display text-7xl font-medium italic text-foil">{c.notation}</span>
            <span className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.26em] text-stone-400">
              {c.notationMeaning}
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-ink-900/85 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold-300">
          {c.treatment}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className={`font-display text-[1.65rem] font-semibold leading-tight ${onDark ? "text-ivory-50" : "text-ink-900"}`}>
          {c.title}
        </h3>
        <p className={`mt-3 flex-1 leading-relaxed ${onDark ? "text-stone-400" : "text-muted"}`}>{c.summary}</p>
        <Link
          href={`/patient-stories#${c.slug}`}
          className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${onDark ? "text-gold-300" : "text-gold-700"}`}
        >
          Read the case note
          <ArrowUpRightIcon size={16} />
          <span className="absolute inset-0" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function ArticleCard({ a }: { a: Article }) {
  return (
    <article
      data-reveal
      className="group relative flex h-full flex-col rounded-[1.75rem] border border-ink-900/[0.07] bg-white p-8 shadow-[0_30px_60px_-45px_rgba(16,15,12,0.45)] transition-transform duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1"
    >
      <p className="eyebrow text-gold-700">
        {a.category} · {a.readingMinutes} min read
      </p>
      <h3 className="mt-5 font-display text-[1.75rem] font-semibold leading-tight text-ink-900">
        <Link href={`/journal/${a.slug}`}>
          {a.title}
          <span className="absolute inset-0" aria-hidden="true" />
        </Link>
      </h3>
      <p className="mt-4 flex-1 leading-relaxed text-muted">{a.excerpt}</p>
      <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold-700">
        Read article
        <ArrowUpRightIcon size={16} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </article>
  );
}
