import Image from "next/image";
import Link from "next/link";
import operatory from "@/assets/clinic-operatory.jpg";
import portrait from "@/assets/dr-osama-afridi.jpg";
import { PageHero } from "@/components/page-hero";
import { Accent, SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { ReviewCard } from "@/components/reviews";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  ShieldIcon,
  SparkleIcon,
  TreatmentIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/icons";
import { clinic, doctor } from "@/content/site";
import { treatments } from "@/content/treatments";
import { reviews } from "@/content/reviews";
import { whatsappLink } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import { doctorSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Dr. Osama Afridi — Dentist in Peshawar",
  description:
    "Meet Dr. Osama Afridi, a PMDC-licensed consultant dental surgeon with a Master of Public Health, leading The Dental Suite & Co. in Peshawar.",
  path: "/dr-osama-afridi",
  type: "profile",
});

const principles = [
  {
    title: "Explain before treating",
    text: "Patients see what he sees — on models, photographs and X-rays — before any decision is made.",
  },
  {
    title: "Ideal option, honest alternatives",
    text: "He'll always tell you the ideal treatment, then respect the option you choose and make it work beautifully.",
  },
  {
    title: "Thorough over fast",
    text: "Whether it's a hidden root canal or a crown margin, the extra minutes are where results that last come from.",
  },
  {
    title: "Prevention is part of the plan",
    text: "Public-health training means hygiene, cleanings and home-care advice are never an afterthought.",
  },
];

const focus = ["smile-makeover", "crowns-and-bridges", "veneers", "root-canal-treatment", "dental-implants", "teeth-whitening"];

export default function DoctorPage() {
  const mentions = reviews.filter((r) => /osama|doctor|dentist/i.test(r.text)).slice(0, 3);
  const socials = [
    { href: clinic.social.youtube, label: "YouTube", handle: "@DandanSaaz", Icon: YouTubeIcon },
    { href: clinic.social.instagram, label: "Instagram", handle: "@_dandansaaz_", Icon: InstagramIcon },
    { href: clinic.social.facebook, label: "Facebook", handle: "DandanSaaz", Icon: FacebookIcon },
    { href: clinic.social.linkedin, label: "LinkedIn", handle: "Osama Afridi", Icon: LinkedInIcon },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ name: "Dr. Osama Afridi", path: "/dr-osama-afridi" }]}
        eyebrow="Consultant Dental Surgeon"
        title={
          <>
            Dr. Osama <Accent onDark>Afridi</Accent>
          </>
        }
        intro={
          <p>
            Founder of The Dental Suite &amp; Co. — a PMDC-licensed dental surgeon with a Master of Public Health, focused on
            cosmetic and restorative dentistry that looks natural and lasts.
          </p>
        }
        aside={
          <div className="relative mx-auto max-w-sm lg:ml-auto">
            <div className="arch border border-gold-300/30 p-3">
              <div className="arch relative aspect-[3/4] overflow-hidden">
                <Image
                  src={portrait}
                  alt="Dr. Osama Afridi with a dental model at The Dental Suite & Co., Peshawar"
                  fill
                  preload
                  placeholder="blur"
                  sizes="(min-width: 1024px) 24rem, 80vw"
                  className="object-cover object-[45%_30%]"
                />
              </div>
            </div>
          </div>
        }
      >
        <a href={whatsappLink("Hi Dr. Osama! I'd like to book a consultation.")} target="_blank" rel="noopener" className="btn btn-gold">
          <WhatsAppIcon size={20} />
          Book with Dr. Osama
        </a>
      </PageHero>

      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  Clinician by training, <Accent>public-health</Accent> by instinct.
                </>
              }
            />
            <div data-reveal className="mt-8 space-y-5 text-lg leading-relaxed text-ink-800">
              <p>
                Dr. Osama Afridi studied dentistry at Abbottabad International Dental College and went on to earn a Master of
                Public Health from Khyber Medical University. He describes himself simply: <em>&ldquo;I fix teeth for a
                living.&rdquo;</em> His patients&apos; reviews put it differently: &ldquo;highly professional&rdquo; and &ldquo;very friendly&rdquo;.
              </p>
              <p>
                In 2026 he opened The Dental Suite &amp; Co. on the ground floor of Liberty Mall, University Road —
                a clinic built around one idea: that people make better decisions about their teeth when they truly
                understand them. You&apos;ll often find him with a dental model in hand, showing a patient exactly what&apos;s
                happening and what each option involves.
              </p>
              <p>
                His work spans smile makeovers, zirconia and PFM crowns, bridges, veneers, root canal treatment, implants,
                whitening and everyday family dentistry — with case notes he shares openly on his YouTube channel and social
                pages.
              </p>
            </div>
          </div>
          <aside data-reveal className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-[1.75rem] bg-ink-900 p-8 text-ivory-50">
              <p className="eyebrow text-gold-400">Qualifications</p>
              <ul className="mt-6 space-y-5">
                {doctor.credentials.map((c) => (
                  <li key={c.label} className="flex gap-4">
                    <span className="font-display text-3xl font-semibold leading-none text-foil">{c.label}</span>
                    <span className="text-sm leading-relaxed text-stone-400">{c.detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-gold-300/15 p-4 text-sm text-stone-300">
                <ShieldIcon size={22} className="shrink-0 text-gold-400" />
                Registered with the Pakistan Medical &amp; Dental Council (PMDC).
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="grain relative bg-ink-900 py-20 text-ivory-50 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
          <SectionHeading
            tone="dark"
            eyebrow="How he works"
            title={
              <>
                Four principles, <Accent onDark>every patient.</Accent>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <article key={p.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }} className="card-dark p-7">
                <span className="font-display text-5xl italic text-gold-500/80">0{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ivory-50">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-400">{p.text}</p>
              </article>
            ))}
          </div>
          <figure data-reveal className="mt-16 overflow-hidden rounded-[2rem] border border-gold-300/15">
            <div className="relative aspect-[16/9]">
              <Image
                src={operatory}
                alt="Inside the treatment suite at The Dental Suite & Co., Liberty Mall, Peshawar"
                fill
                placeholder="blur"
                sizes="(min-width: 1280px) 80rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center gap-3 bg-ink-850 px-6 py-4 text-sm text-stone-400">
              <SparkleIcon size={12} className="text-gold-400" />
              Inside the suite: explaining a treatment plan on a dental model before starting.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
          <SectionHeading
            eyebrow="Clinical focus"
            title={
              <>
                Where Dr. Osama <Accent>spends his days.</Accent>
              </>
            }
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focus.map((slug) => {
              const t = treatments.find((x) => x.slug === slug)!;
              return (
                <li key={slug} data-reveal>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="group flex items-center gap-5 rounded-[1.5rem] border border-ink-900/[0.08] bg-white p-6 transition-[transform,border-color] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-gold-500/50"
                  >
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink-900 text-gold-300">
                      <TreatmentIcon name={t.icon} size={28} />
                    </span>
                    <span className="flex-1 font-display text-2xl font-semibold text-ink-900">{t.name}</span>
                    <ArrowRightIcon size={18} className="text-gold-700 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              );
            })}
          </ul>

          {mentions.length > 0 && (
            <div className="mt-20 grid gap-5 md:grid-cols-3">
              {mentions.map((r) => (
                <div key={r.author} data-reveal>
                  <ReviewCard review={r} />
                </div>
              ))}
            </div>
          )}

          <div data-reveal className="mt-20 rounded-[2rem] bg-ivory-100 p-8 sm:p-10">
            <p className="eyebrow text-gold-700">Follow Dr. Osama&apos;s case notes</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {socials.map(({ href, label, handle, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-4 rounded-2xl bg-white p-4 transition-shadow hover:shadow-lg"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-ink-900 text-gold-300">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink-900">{label}</span>
                      <span className="block text-sm text-muted">{handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Book your consultation with Dr. Osama."
        message="Hi Dr. Osama! I'd like to book a consultation at The Dental Suite & Co."
      />
      <JsonLd data={doctorSchema()} />
    </>
  );
}
