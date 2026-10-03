import Image from "next/image";
import Link from "next/link";
import crownsPhoto from "@/assets/zirconia-crowns.jpg";
import { PageHero } from "@/components/page-hero";
import { Accent, SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { FeaturedReview, RatingSeal, ReviewCard } from "@/components/reviews";
import { ArrowUpRightIcon, GoogleIcon } from "@/components/icons";
import { clinic } from "@/content/site";
import { cases } from "@/content/cases";
import { reviews } from "@/content/reviews";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Patient Stories & Reviews",
  description:
    "Real case notes and 5-star Google reviews from patients of The Dental Suite & Co., Peshawar — bridges, root canals, scaling and smile makeovers.",
  path: "/patient-stories",
});

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function PatientStoriesPage() {
  const [featured, ...rest] = reviews;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Patient stories", path: "/patient-stories" }]}
        eyebrow="Patient stories"
        title={
          <>
            Real cases, real <Accent onDark>reviews.</Accent>
          </>
        }
        intro={
          <p>
            Case notes Dr. Osama has shared from the clinic, rewritten in plain language — and what patients say about
            their visits. No stock photos and no names; every case is a real one.
          </p>
        }
        aside={
          <div className="flex justify-center lg:justify-end">
            <RatingSeal tone="dark" />
          </div>
        }
      />

      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl space-y-6 px-5 sm:px-6 xl:px-8">
          {cases.map((c) => (
            <article
              key={c.slug}
              id={c.slug}
              data-reveal
              className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-ink-900/[0.08] bg-white shadow-[0_30px_70px_-50px_rgba(16,15,12,0.5)]"
            >
              <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                <div className="relative min-h-56 bg-ink-900">
                  {c.image === "crowns" ? (
                    <Image
                      src={crownsPhoto}
                      alt="Zirconia crowns being fitted at The Dental Suite & Co."
                      fill
                      placeholder="blur"
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="grain flex h-full min-h-56 flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#2a2318,#100f0c_70%)] p-8 text-center">
                      <span className="font-display text-8xl font-medium italic text-foil">{c.notation}</span>
                      <span className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-stone-400">{c.notationMeaning}</span>
                    </div>
                  )}
                </div>
                <div className="p-8 sm:p-10">
                  <p className="eyebrow text-gold-700">
                    {c.treatment} · {formatDate(c.date)}
                  </p>
                  <h2 className="mt-4 font-display text-[2.2rem] font-semibold leading-tight text-ink-900">{c.title}</h2>
                  <div className="mt-5 space-y-4 leading-relaxed text-muted">
                    {c.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  <p className="mt-6 border-l-2 border-gold-500 pl-4 font-display text-xl italic text-ink-900">{c.takeaway}</p>
                  <Link
                    href={`/treatments/${c.treatmentSlug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold-700"
                  >
                    About this treatment
                    <ArrowUpRightIcon size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
          <p className="pt-4 text-center text-sm text-muted">
            Case notes are shared for education. Every mouth is different and results vary from person to person.
          </p>
        </div>
      </section>

      <section id="reviews" className="bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Google reviews"
              title={
                <>
                  Five stars, <Accent>every one.</Accent>
                </>
              }
              intro={`Rated ${clinic.rating.google.value.toFixed(1)} from ${clinic.rating.google.count} Google reviews and 100% recommended on Facebook. Reviews are shown exactly as patients wrote them.`}
            />
            <a data-reveal href={clinic.maps.place} target="_blank" rel="noopener" className="btn btn-dark self-start lg:self-auto">
              <GoogleIcon size={18} />
              Read or leave a review
            </a>
          </div>
          <div data-reveal className="mt-14 rounded-[2rem] bg-white p-8 sm:p-12">
            <FeaturedReview review={featured} />
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((r) => (
              <div key={r.author} data-reveal>
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Your story could be next." />
    </>
  );
}
