import Image from "next/image";
import Link from "next/link";
import operatory from "@/assets/clinic-operatory.jpg";
import portrait from "@/assets/dr-osama-afridi.jpg";
import logoGold from "@/assets/logo-gold.jpg";
import crownsPhoto from "@/assets/zirconia-crowns.jpg";
import { Accent, SectionHeading } from "@/components/section-heading";
import { CaseCard, TreatmentCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { HoursTable } from "@/components/hours-table";
import { JsonLd } from "@/components/json-ld";
import { MapEmbed } from "@/components/map-embed";
import { OpenStatus } from "@/components/open-status";
import { FeaturedReview, RatingSeal, ReviewCard, Stars } from "@/components/reviews";
import { SmilePlanner } from "@/components/smile-planner";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  GoogleIcon,
  MapPinIcon,
  NavigationIcon,
  PhoneIcon,
  SparkleIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/icons";
import { clinic, doctor } from "@/content/site";
import { treatments } from "@/content/treatments";
import { cases } from "@/content/cases";
import { reviews } from "@/content/reviews";
import { generalFaqs } from "@/content/faqs";
import { telLink, whatsappLink } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "The Dental Suite & Co. | Cosmetic & Family Dentist in Peshawar",
  absoluteTitle: true,
  description:
    "Boutique dental clinic at Liberty Mall, University Road, Peshawar: smile makeovers, veneers, zirconia crowns, implants and whitening by Dr. Osama Afridi.",
  path: "/",
  ownShareImage: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Philosophy />
      <TreatmentsSection />
      <PlannerSection />
      <DoctorSection />
      <CasesSection />
      <ExperienceSection />
      <ReviewsSection />
      <VisitSection />
      <FaqSection />
      <CtaBand />
      <JsonLd data={faqSchema(generalFaqs)} />
    </>
  );
}

function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-ink-900 text-ivory-50">
      <div className="pointer-events-none absolute -left-48 -top-32 h-[38rem] w-[38rem] glow [--glow-a:0.22]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[30rem] w-[30rem] glow [--glow-a:0.1] [--glow-rgb:230,207,152]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-16 xl:px-8">
        <div className="lg:col-span-7">
          <h1>
            <span className="eyebrow hero-rise flex items-center gap-3 text-gold-400">
              <span className="h-px w-10 bg-gold-500/70" aria-hidden="true" />
              Cosmetic &amp; restorative dentist in Peshawar
            </span>
            <span className="mt-7 block font-display text-[3.15rem] font-medium leading-[0.98] tracking-[-0.015em] sm:text-7xl lg:text-[5.4rem]">
              Smiles that walk into the room <em className="text-foil text-foil-play font-medium italic">before you do.</em>
            </span>
          </h1>
          <p className="hero-rise mt-8 max-w-xl text-lg leading-relaxed text-stone-400 sm:text-xl" style={{ ["--d" as string]: "120ms" }}>
            Veneers, zirconia crowns, implants, whitening and gentle everyday dentistry by{" "}
            <strong className="font-semibold text-ivory-50">Dr. Osama Afridi</strong> — on the ground floor of Liberty
            Mall, University Road.
          </p>

          <div className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ ["--d" as string]: "220ms" }}>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-gold">
              <WhatsAppIcon size={20} />
              Book on WhatsApp
            </a>
            <a href={telLink} className="btn btn-ghost-light">
              <PhoneIcon size={18} className="text-gold-400" />
              Call {clinic.phone.display}
            </a>
          </div>

          <div
            className="hero-rise mt-12 grid grid-cols-2 gap-y-6 border-t border-gold-300/10 pt-8 text-sm sm:grid-cols-3"
            style={{ ["--d" as string]: "320ms" }}
          >
            <a href={clinic.maps.place} target="_blank" rel="noopener" className="group col-span-2 flex items-center gap-3 sm:col-span-1">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white">
                <GoogleIcon size={20} />
              </span>
              <span>
                <span className="flex items-center gap-2">
                  <strong className="text-lg tabular-nums text-ivory-50">5.0</strong>
                  <Stars className="text-gold-400" size={14} />
                </span>
                <span className="text-stone-400 transition-colors group-hover:text-gold-300">
                  {clinic.rating.google.count} Google reviews
                </span>
              </span>
            </a>
            <div className="sm:border-l sm:border-gold-300/15 sm:pl-6">
              <OpenStatus className="font-semibold text-ivory-50" />
              <p className="mt-1 text-stone-400">Mon – Sat, 10 am – 8 pm</p>
            </div>
            <div className="border-l border-gold-300/15 pl-6">
              <p className="font-semibold text-ivory-50">Ground floor</p>
              <p className="mt-1 text-stone-400">Office No 19, Liberty Mall</p>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-[27rem] lg:max-w-none">
            <div className="arch hero-rise border border-gold-300/30 p-3" style={{ ["--d" as string]: "80ms" }}>
              <div className="arch relative aspect-[4/5] overflow-hidden bg-ink-800">
                <Image
                  src={operatory}
                  alt="Dr. Osama Afridi explaining a treatment on a dental model to a patient at The Dental Suite & Co., Peshawar"
                  fill
                  preload
                  placeholder="blur"
                  sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 90vw"
                  className="hero-settle object-cover object-[58%_50%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" aria-hidden="true" />
              </div>
            </div>

            <div
              className="hero-rise absolute -left-3 bottom-8 max-w-[15.5rem] rounded-2xl border border-gold-300/20 bg-ink-900/90 p-5 shadow-2xl sm:-left-10"
              style={{ ["--d" as string]: "450ms" }}
            >
              <p className="eyebrow text-[0.6rem] text-gold-400">Your dentist</p>
              <p className="mt-2 font-display text-2xl font-semibold leading-none text-ivory-50">{doctor.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-stone-400">Consultant Dental Surgeon · BDS, MPH · PMDC-licensed</p>
            </div>

            <div
              className="hero-rise absolute -right-2 top-10 flex items-center gap-2 rounded-full border border-gold-300/25 bg-ink-900/90 px-4 py-2.5 text-xs font-semibold text-gold-200 shadow-xl sm:-right-6"
              style={{ ["--d" as string]: "560ms" }}
            >
              <SparkleIcon size={14} className="text-gold-400" />
              Patient-first, explained step by step
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Smile Makeovers",
    "Veneers",
    "Zirconia Crowns",
    "Dental Implants",
    "Teeth Whitening",
    "Root Canal Treatment",
    "Braces & Aligners",
    "Kids' Dentistry",
    "Scaling & Polishing",
  ];
  return (
    <div className="marquee overflow-hidden border-y border-gold-300/15 bg-ink-950 py-5" aria-hidden="true">
      <div className="marquee-track flex w-max">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li key={item} className="flex items-center">
                <span className="px-8 font-display text-2xl italic text-stone-300 sm:text-3xl">{item}</span>
                <SparkleIcon size={14} className="text-gold-500" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function Philosophy() {
  const pillars = [
    {
      title: "Honest options",
      text: "You'll always hear the ideal treatment and the sensible alternatives, with costs explained up front. Then the choice is yours.",
    },
    {
      title: "Precision you can see",
      text: "Magnification loupes, unhurried technique and crowns made with digital, 3D-printed lab workflows — for restorations that fit properly.",
    },
    {
      title: "Hygiene, taken personally",
      text: "With a Master's in Public Health, Dr. Osama treats infection control as non-negotiable — something patients notice and mention in their reviews.",
    },
  ];

  return (
    <section className="relative bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-12 lg:gap-12 xl:px-8">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="The Suite philosophy"
            title={
              <>
                A dental <Accent>suite,</Accent> not a dental shop.
              </>
            }
            intro="Every visit starts with a conversation, not a sales pitch. Dr. Osama explains what he sees — often with a model in hand — lays out every reasonable option, and lets you decide. Dentistry you understand, at a pace that suits you."
          />
          <div data-reveal className="mt-10 overflow-hidden rounded-[1.75rem] bg-ink-900 shadow-[0_40px_80px_-50px_rgba(16,15,12,0.8)]">
            <Image
              src={logoGold}
              alt="The Dental Suite & Co. gold logo — cosmetic, restorative, smile makeover, implant"
              placeholder="blur"
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
          <ol className="divide-y divide-ink-900/10 border-y border-ink-900/10">
            {pillars.map((p, i) => (
              <li key={p.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 90}ms` }} className="flex gap-7 py-9">
                <span className="font-display text-5xl font-medium italic leading-none text-gold-600">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[1.9rem] font-semibold leading-tight text-ink-900">{p.title}</h3>
                  <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href="/dr-osama-afridi" data-reveal className="group mt-10 inline-flex items-center gap-3 font-bold text-ink-900">
            <span className="link-underline">Meet Dr. Osama Afridi</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-900 text-gold-300 transition-transform duration-500 group-hover:translate-x-1">
              <ArrowRightIcon size={18} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TreatmentsSection() {
  const [featured, ...rest] = treatments;
  return (
    <section id="treatments" className="grain relative bg-ink-900 py-24 text-ivory-50 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow="Treatments"
            title={
              <>
                Everything your smile needs, <Accent onDark>under one roof.</Accent>
              </>
            }
            intro="From a first check-up to a complete smile makeover — planned, explained and delivered by Dr. Osama."
          />
          <Link href="/treatments" data-reveal className="btn btn-ghost-light self-start lg:self-auto">
            All treatments
            <ArrowRightIcon size={18} className="text-gold-400" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          <Link
            href={`/treatments/${featured.slug}`}
            data-reveal
            className="card-dark group relative col-span-2 grid overflow-hidden md:grid-cols-2"
          >
            <div className="relative z-10 flex flex-col p-8 sm:p-10">
              <span className="eyebrow text-gold-400">Signature treatment</span>
              <h3 className="mt-6 font-display text-[2.6rem] font-medium leading-none text-ivory-50">{featured.name}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-stone-400">
                Whitening, veneers, zirconia crowns or aligners — combined into one plan around your face, bite and budget.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gold-300">
                Plan your makeover
                <ArrowUpRightIcon size={16} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
            <div className="relative min-h-60 overflow-hidden">
              <Image
                src={crownsPhoto}
                alt="Zirconia crowns being fitted during a smile makeover"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-luxe)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/10 to-transparent md:from-ink-850" aria-hidden="true" />
            </div>
          </Link>

          {rest.map((t, i) => (
            <TreatmentCard key={t.slug} t={t} index={i} />
          ))}

          <Link
            href="#smile-planner"
            data-reveal
            className="group flex flex-col justify-between rounded-3xl bg-foil p-5 text-ink-900 transition-transform duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 sm:p-7"
          >
            <SparkleIcon size={26} />
            <div>
              <h3 className="mt-6 font-display text-[1.35rem] font-semibold leading-tight sm:mt-10 sm:text-[1.85rem]">
                Not sure what you need?
              </h3>
              <p className="mt-3 hidden text-[0.95rem] font-medium leading-relaxed text-ink-800 sm:block">
                Try the Smile Planner — pick your concerns and see where to start.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold sm:mt-6">
                Open the planner
                <ArrowRightIcon size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PlannerSection() {
  return (
    <section id="smile-planner" className="bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
        <SectionHeading
          eyebrow="Smile planner"
          title={
            <>
              Not sure where to <Accent>begin?</Accent>
            </>
          }
          intro="Tell us what you'd like to change. We'll suggest a sensible starting point — and you can send it straight to Dr. Osama on WhatsApp."
          className="mb-14"
        />
        <SmilePlanner />
      </div>
    </section>
  );
}

function DoctorSection() {
  return (
    <section className="grain relative overflow-hidden bg-ink-900 py-24 text-ivory-50 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[30rem] w-[30rem] glow [--glow-a:0.15]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
        <div data-reveal className="relative lg:col-span-5">
          <div className="arch mx-auto max-w-sm border border-gold-300/30 p-3 lg:max-w-none">
            <div className="arch relative aspect-[3/4] overflow-hidden">
              <Image
                src={portrait}
                alt="Dr. Osama Afridi, Consultant Dental Surgeon at The Dental Suite & Co., Peshawar"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 34vw, 80vw"
                className="object-cover object-[45%_30%]"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-foil px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink-900 shadow-xl">
            <CheckIcon size={15} strokeWidth={2.4} />
            PMDC-licensed dental surgeon
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading
            tone="dark"
            eyebrow="Meet your dentist"
            title={
              <>
                Dr. Osama <Accent onDark>Afridi</Accent>
              </>
            }
          />
          <p data-reveal className="mt-3 text-sm font-bold uppercase tracking-[0.22em] text-stone-400">
            {doctor.title} · Cosmetic &amp; restorative dentistry
          </p>
          <p data-reveal className="mt-7 text-lg leading-relaxed text-stone-300">
            Dr. Osama trained at Abbottabad International Dental College and went on to earn a Master of Public Health from
            Khyber Medical University. That combination shapes how he practises: meticulous, magnified work in the chair, and
            a public-health instinct for prevention, hygiene and explaining things clearly.
          </p>

          <ul data-reveal className="mt-9 grid gap-3 sm:grid-cols-3">
            {doctor.credentials.map((c) => (
              <li key={c.label} className="card-dark p-5">
                <span className="font-display text-3xl font-semibold text-foil">{c.label}</span>
                <span className="mt-2 block text-xs leading-relaxed text-stone-400">{c.detail}</span>
              </li>
            ))}
          </ul>

          <blockquote data-reveal className="mt-10 border-l-2 border-gold-500 pl-6">
            <p className="font-display text-[1.8rem] italic leading-snug text-ivory-50">&ldquo;{doctor.quotes.signature}&rdquo;</p>
            <footer className="mt-3 text-sm text-stone-400">— Dr. Osama Afridi</footer>
          </blockquote>

          <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/dr-osama-afridi" className="btn btn-gold">
              Read Dr. Osama&apos;s profile
              <ArrowRightIcon size={18} />
            </Link>
            <a href={clinic.social.youtube} target="_blank" rel="noopener" className="btn btn-ghost-light">
              <YouTubeIcon size={18} className="text-gold-400" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  return (
    <section className="bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="From the case journal"
            title={
              <>
                Real cases. Honest <Accent>notes.</Accent>
              </>
            }
            intro="A few of the cases Dr. Osama has shared from the clinic, explained in plain language. No stock photos, no exaggeration."
          />
          <Link href="/patient-stories" data-reveal className="btn btn-ghost-dark self-start lg:self-auto">
            All patient stories
            <ArrowRightIcon size={18} />
          </Link>
        </div>
        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {cases.map((c) => (
            <div key={c.slug} className="w-[82%] shrink-0 snap-start sm:w-auto">
              <CaseCard c={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const steps = [
    { title: "A conversation first", text: "Your concerns, your goals and your budget — before any treatment talk." },
    { title: "A clear plan", text: "Options from conservative to complete, with visits and costs explained." },
    { title: "Comfort-first treatment", text: "Careful, magnified technique with every step explained as we go." },
    { title: "Evening appointments", text: "Open until 8 pm, Monday to Saturday — easy to fit around work, university or school." },
    { title: "Aftercare that continues", text: "Follow-ups and maintenance visits that keep your results looking new." },
  ];
  return (
    <section className="grain relative bg-ink-900 py-24 text-ivory-50 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              tone="dark"
              eyebrow="The Suite experience"
              title={
                <>
                  Five things you&apos;ll <Accent onDark>notice.</Accent>
                </>
              }
              intro="Good dentistry is more than the procedure. It's how clearly things are explained, how comfortable you feel, and how easy it is to fit care into your week."
            />
            <dl data-reveal className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-gold-300/15 bg-gold-300/15">
              {[
                ["5.0", "Google rating"],
                ["6 days", "a week, till 8 pm"],
                ["10", "treatments, one suite"],
                ["G/F", "Ground floor, Liberty Mall"],
              ].map(([v, l]) => (
                <div key={l} className="bg-ink-900 p-6">
                  <dt className="sr-only">{l}</dt>
                  <dd>
                    <span className="block font-display text-4xl font-semibold text-foil [font-variant-numeric:lining-nums]">{v}</span>
                    <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">{l}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <ol className="lg:col-span-6 lg:col-start-7">
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              className="group grid grid-cols-[4.5rem_1fr] gap-x-6 border-b border-gold-300/10 py-10 first:pt-0 sm:grid-cols-[5.5rem_1fr]"
            >
              <span className="font-display text-6xl font-medium italic leading-none text-gold-500/80 transition-colors duration-500 group-hover:text-gold-300">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-[2rem] font-medium leading-tight text-ivory-50">{s.title}</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-stone-400">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const [featured, ...rest] = reviews;
  return (
    <section className="bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div data-reveal className="lg:col-span-4">
            <p className="eyebrow flex items-center gap-3 text-gold-700">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
              Patient reviews
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[1.02] text-ink-900 lg:text-[3.6rem]">
              In their <Accent>words.</Accent>
            </h2>
            <div className="mt-10">
              <RatingSeal />
            </div>
            <p className="mt-6 leading-relaxed text-muted">
              Rated <strong className="text-ink-900">5.0 from {clinic.rating.google.count} Google reviews</strong> and{" "}
              <strong className="text-ink-900">100% recommended</strong> on Facebook.
            </p>
            <a href={clinic.maps.place} target="_blank" rel="noopener" className="btn btn-dark mt-8">
              <GoogleIcon size={18} />
              See reviews on Google
            </a>
          </div>
          <div data-reveal className="rounded-[2rem] bg-white p-8 shadow-[0_40px_90px_-60px_rgba(16,15,12,0.6)] sm:p-12 lg:col-span-8">
            <FeaturedReview review={featured} />
          </div>
        </div>
        <div className="-mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {rest.map((r, i) => (
            <div
              key={r.author}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 4) * 70}ms` }}
              className="w-[82%] shrink-0 snap-start sm:w-auto"
            >
              <ReviewCard review={r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section id="visit" className="grain relative bg-ink-900 py-24 text-ivory-50 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
        <div className="lg:col-span-5">
          <SectionHeading
            tone="dark"
            eyebrow="Visit the suite"
            title={
              <>
                Find us at <Accent onDark>Liberty Mall.</Accent>
              </>
            }
          />
          <address data-reveal className="mt-8 not-italic">
            <p className="flex gap-3 text-lg leading-relaxed text-stone-300">
              <MapPinIcon size={22} className="mt-1 shrink-0 text-gold-400" />
              <span>
                <strong className="text-ivory-50">Office No 19, Ground Floor</strong>
                <br />
                Liberty Mall, University Road, Stop Tehkal
                <br />
                Peshawar {clinic.address.postalCode}, Khyber Pakhtunkhwa
              </span>
            </p>
          </address>
          <ol data-reveal className="mt-8 space-y-3 text-[0.95rem] text-stone-400">
            {[
              "Head to Liberty Mall on University Road, at the Tehkal stop.",
              "We're on the ground floor of the mall — Office No 19.",
              "Look for the gold Dental Suite & Co. signage — there's more than one dental clinic in the mall.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-300/30 text-xs font-bold text-gold-300">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div data-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={clinic.maps.place} target="_blank" rel="noopener" className="btn btn-gold">
              <NavigationIcon size={18} />
              Get directions
            </a>
            <a href={telLink} className="btn btn-ghost-light">
              <PhoneIcon size={18} className="text-gold-400" />
              {clinic.phone.display}
            </a>
          </div>
          <div data-reveal className="card-dark mt-10 p-6">
            <div className="mb-3 flex items-center justify-between gap-4">
              <h3 className="eyebrow text-gold-400">Opening hours</h3>
              <OpenStatus className="text-xs font-semibold text-stone-300" />
            </div>
            <HoursTable />
          </div>
        </div>
        <div data-reveal className="lg:col-span-7">
          <MapEmbed className="h-[26rem] lg:h-full lg:min-h-[40rem]" />
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-ivory-50 pt-24 lg:pt-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Questions"
            title={
              <>
                Good to <Accent>know.</Accent>
              </>
            }
            intro="Can't find your answer? Message the clinic on WhatsApp and we'll get back to you."
          />
          <a data-reveal href={whatsappLink("Hi! I have a question for The Dental Suite & Co.")} target="_blank" rel="noopener" className="btn btn-dark mt-8">
            <WhatsAppIcon size={18} />
            Ask a question
          </a>
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={generalFaqs} />
        </div>
      </div>
    </section>
  );
}
