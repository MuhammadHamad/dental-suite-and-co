import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Accent, SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { SmilePlanner } from "@/components/smile-planner";
import { ArrowUpRightIcon, PhoneIcon, TreatmentIcon, WhatsAppIcon } from "@/components/icons";
import { clinic } from "@/content/site";
import { treatmentCategories, treatments } from "@/content/treatments";
import { telLink, whatsappLink } from "@/lib/links";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Dental Treatments in Peshawar",
  description:
    "Every treatment at The Dental Suite & Co., Peshawar: smile makeovers, veneers, zirconia crowns, implants, whitening, root canals, braces and kids' dentistry.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dental treatments at The Dental Suite & Co., Peshawar",
    itemListElement: treatments.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: absoluteUrl(`/treatments/${t.slug}`),
    })),
  };

  return (
    <>
      <PageHero
        crumbs={[{ name: "Treatments", path: "/treatments" }]}
        eyebrow="Treatments"
        title={
          <>
            Dental treatments in Peshawar, <Accent onDark>thoughtfully planned.</Accent>
          </>
        }
        intro="Cosmetic, restorative, orthodontic and family dentistry at Liberty Mall, University Road. Every plan starts with an examination and a clear explanation of your options."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-gold">
            <WhatsAppIcon size={20} />
            Book on WhatsApp
          </a>
          <a href={telLink} className="btn btn-ghost-light">
            <PhoneIcon size={18} className="text-gold-400" />
            Call {clinic.phone.display}
          </a>
        </div>
      </PageHero>

      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-5 sm:px-6 xl:px-8">
          {treatmentCategories.map((cat) => {
            const list = treatments.filter((t) => t.category === cat.name);
            if (!list.length) return null;
            return (
              <div key={cat.name} className="grid gap-8 lg:grid-cols-12">
                <div data-reveal className="lg:col-span-3">
                  <h2 className="font-display text-4xl font-medium text-ink-900">{cat.name}</h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">{cat.blurb}</p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-9">
                  {list.map((t) => (
                    <li key={t.slug} data-reveal>
                      <Link
                        href={`/treatments/${t.slug}`}
                        className="group flex h-full gap-5 rounded-[1.5rem] border border-ink-900/[0.08] bg-white p-6 shadow-[0_24px_60px_-45px_rgba(16,15,12,0.5)] transition-[transform,border-color] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-gold-500/50"
                      >
                        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink-900 text-gold-300">
                          <TreatmentIcon name={t.icon} size={28} />
                        </span>
                        <span className="flex-1">
                          <span className="flex items-start justify-between gap-3">
                            <span className="font-display text-2xl font-semibold leading-tight text-ink-900">{t.name}</span>
                            <ArrowUpRightIcon size={18} className="mt-1 shrink-0 text-gold-700 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                          <span className="mt-2 block leading-relaxed text-muted">{t.tagline}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section id="smile-planner" className="bg-ivory-100 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
          <SectionHeading
            eyebrow="Smile planner"
            title={
              <>
                Not sure which treatment <Accent>you need?</Accent>
              </>
            }
            intro="Pick what you'd like to change and we'll suggest where to start."
            className="mb-14"
          />
          <SmilePlanner />
        </div>
      </section>

      <CtaBand />
      <JsonLd data={itemList} />
    </>
  );
}
