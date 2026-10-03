import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import portrait from "@/assets/dr-osama-afridi.jpg";
import { PageHero } from "@/components/page-hero";
import { Accent, SectionHeading } from "@/components/section-heading";
import { TreatmentCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  PhoneIcon,
  SparkleIcon,
  TreatmentIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { clinic, doctor } from "@/content/site";
import { getTreatment, treatments } from "@/content/treatments";
import { getCase } from "@/content/cases";
import { getArticle } from "@/content/journal";
import { telLink, treatmentWhatsappMessage, whatsappLink } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, treatmentSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return pageMetadata({
    title: t.title,
    description: t.metaDescription,
    path: `/treatments/${t.slug}`,
    ownShareImage: true,
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  const caseNote = t.caseSlug ? getCase(t.caseSlug) : undefined;
  const article = t.journalSlug ? getArticle(t.journalSlug) : undefined;
  const related = t.related.map((s) => getTreatment(s)).filter((x) => x !== undefined);
  const message = treatmentWhatsappMessage(t.name);
  const lead = t.title.replace(/ in Peshawar$/, "");

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Treatments", path: "/treatments" },
          { name: t.name, path: `/treatments/${t.slug}` },
        ]}
        eyebrow={`${t.category} dentistry`}
        title={
          <>
            {lead} <Accent onDark>in Peshawar</Accent>
          </>
        }
        intro={<p>{t.intro}</p>}
        aside={
          <div className="card-dark p-7 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center rounded-2xl border border-gold-300/25 bg-gold-300/[0.05] text-gold-300">
                <TreatmentIcon name={t.icon} size={34} />
              </span>
              <p className="font-display text-2xl leading-tight text-ivory-50">{t.tagline}</p>
            </div>
            <dl className="mt-7 divide-y divide-gold-300/10 border-y border-gold-300/10">
              {t.facts.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-6 py-3.5 text-sm">
                  <dt className="font-semibold uppercase tracking-[0.16em] text-stone-500">{f.label}</dt>
                  <dd className="text-right font-semibold text-ivory-50">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex items-center gap-4">
              <span className="relative h-12 w-12 overflow-hidden rounded-full border border-gold-300/30">
                <Image src={portrait} alt="" fill sizes="48px" className="object-cover object-[45%_25%]" />
              </span>
              <p className="text-sm leading-snug text-stone-400">
                Your care is led by <strong className="text-ivory-50">{doctor.name}</strong>
                <br />
                {doctor.title}
              </p>
            </div>
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={whatsappLink(message)} target="_blank" rel="noopener" className="btn btn-gold">
            <WhatsAppIcon size={20} />
            Ask about {t.name}
          </a>
          <a href={telLink} className="btn btn-ghost-light">
            <PhoneIcon size={18} className="text-gold-400" />
            Call {clinic.phone.display}
          </a>
        </div>
      </PageHero>

      {/* Suitability */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Is it right for you?"
              title={
                <>
                  {t.name} may suit you <Accent>if you have…</Accent>
                </>
              }
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {t.idealFor.map((item, i) => (
                <li
                  key={item}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                  className="flex gap-4 rounded-2xl border border-ink-900/[0.08] bg-white p-5"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-900 text-gold-300">
                    <CheckIcon size={15} strokeWidth={2.2} />
                  </span>
                  <span className="leading-relaxed text-ink-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {t.goodToKnow && (
            <aside data-reveal className="self-end rounded-[1.75rem] bg-ivory-200 p-8 lg:col-span-5">
              <p className="eyebrow flex items-center gap-2 text-gold-700">
                <SparkleIcon size={12} />
                Good to know
              </p>
              <ul className="mt-6 space-y-4">
                {t.goodToKnow.map((g) => (
                  <li key={g} className="border-l-2 border-gold-500 pl-4 leading-relaxed text-ink-800">
                    {g}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>

      {/* Options */}
      {t.options && (
        <section className="bg-ivory-100 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
            <SectionHeading
              eyebrow="Your options"
              title={
                <>
                  Choose with the <Accent>full picture.</Accent>
                </>
              }
              intro="We explain each option's strengths and trade-offs, so the decision is genuinely yours."
            />
            <div className={`mt-12 grid gap-5 ${t.options.length > 2 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2"}`}>
              {t.options.map((o, i) => (
                <article
                  key={o.name}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                  className="flex flex-col rounded-[1.75rem] border border-ink-900/[0.08] bg-white p-7"
                >
                  <span className="font-display text-4xl italic text-gold-600">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-[1.7rem] font-semibold leading-tight text-ink-900">{o.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{o.description}</p>
                  <p className="mt-6 border-t border-ink-900/10 pt-4 text-sm">
                    <span className="font-bold uppercase tracking-[0.14em] text-gold-700">Best for · </span>
                    <span className="text-ink-800">{o.bestFor}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="grain relative bg-ink-900 py-20 text-ivory-50 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                tone="dark"
                eyebrow="How it works"
                title={
                  <>
                    Step by step, <Accent onDark>no surprises.</Accent>
                  </>
                }
                intro="Here's what a typical course of treatment looks like. Your own plan is tailored after your examination."
              />
            </div>
          </div>
          <ol className="relative lg:col-span-7 lg:col-start-6">
            <span className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-gradient-to-b from-gold-500/60 via-gold-500/25 to-transparent" aria-hidden="true" />
            {t.steps.map((s, i) => (
              <li key={s.title} data-reveal className="relative flex gap-7 pb-10 last:pb-0">
                <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-400/50 bg-ink-900 font-display text-lg font-semibold lining-nums text-gold-300">
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-[1.75rem] font-medium leading-tight text-ivory-50">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone-400">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case + aftercare */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-2 xl:px-8">
          {caseNote ? (
            <article data-reveal className="grain relative overflow-hidden rounded-[2rem] bg-ink-900 p-8 text-ivory-50 sm:p-10">
              <p className="eyebrow text-gold-400">From our case journal</p>
              <p className="mt-6 font-display text-6xl italic text-foil">{caseNote.notation}</p>
              <h2 className="mt-4 font-display text-[2.1rem] font-medium leading-tight">{caseNote.title}</h2>
              <p className="mt-4 leading-relaxed text-stone-400">{caseNote.body[0]}</p>
              <p className="mt-6 border-l-2 border-gold-500 pl-4 font-display text-xl italic text-gold-200">
                {caseNote.takeaway}
              </p>
              <Link href={`/patient-stories#${caseNote.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gold-300">
                Read the full case note
                <ArrowUpRightIcon size={16} />
              </Link>
            </article>
          ) : (
            <article data-reveal className="grain relative overflow-hidden rounded-[2rem] bg-ink-900 p-8 text-ivory-50 sm:p-10">
              <p className="eyebrow text-gold-400">Our promise</p>
              <h2 className="mt-6 font-display text-[2.1rem] font-medium leading-tight">
                You&apos;ll understand your treatment before it starts.
              </h2>
              <p className="mt-4 leading-relaxed text-stone-400">
                Dr. Osama explains what he sees, shows you on models and photographs, and walks you through each option with
                its costs — so you can decide with confidence.
              </p>
              <p className="mt-6 border-l-2 border-gold-500 pl-4 font-display text-xl italic text-gold-200">
                {doctor.quotes.effort}
              </p>
            </article>
          )}

          <div data-reveal className="rounded-[2rem] border border-ink-900/[0.08] bg-white p-8 sm:p-10">
            <p className="eyebrow text-gold-700">Aftercare</p>
            <h2 className="mt-5 font-display text-[2.1rem] font-medium leading-tight text-ink-900">
              Keeping your results <Accent>looking new.</Accent>
            </h2>
            <ul className="mt-7 space-y-4">
              {t.aftercare.map((a) => (
                <li key={a} className="flex gap-4 leading-relaxed text-ink-800">
                  <SparkleIcon size={14} className="mt-1.5 shrink-0 text-gold-500" />
                  {a}
                </li>
              ))}
            </ul>
            {article && (
              <Link
                href={`/journal/${article.slug}`}
                className="group mt-8 flex items-center justify-between gap-4 rounded-2xl bg-ivory-100 p-5 transition-colors hover:bg-ivory-200"
              >
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gold-700">From the Journal</span>
                  <span className="mt-1 block font-display text-xl font-semibold leading-snug text-ink-900">{article.title}</span>
                </span>
                <ArrowRightIcon size={18} className="shrink-0 text-gold-700 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQs"
              title={
                <>
                  {t.name}, <Accent>answered.</Accent>
                </>
              }
            />
            <a data-reveal href={whatsappLink(message)} target="_blank" rel="noopener" className="btn btn-dark mt-8">
              <WhatsAppIcon size={18} />
              Ask your own question
            </a>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={t.faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="grain relative bg-ink-900 py-20 text-ivory-50 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
          <SectionHeading
            tone="dark"
            eyebrow="Often combined with"
            title={
              <>
                Related <Accent onDark>treatments</Accent>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((r, i) => (
              <TreatmentCard key={r.slug} t={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to talk about ${t.name.toLowerCase()}?`}
        text="Send us a message with your question or a photo of your smile — we'll suggest the next step and book you in."
        message={message}
      />
      <JsonLd data={[treatmentSchema(t), faqSchema(t.faqs)]} />
    </>
  );
}
