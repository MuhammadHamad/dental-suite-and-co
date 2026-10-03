import { PageHero } from "@/components/page-hero";
import { Accent, SectionHeading } from "@/components/section-heading";
import { BookingForm } from "@/components/booking-form";
import { FaqList } from "@/components/faq-list";
import { HoursTable } from "@/components/hours-table";
import { JsonLd } from "@/components/json-ld";
import { MapEmbed } from "@/components/map-embed";
import { OpenStatus } from "@/components/open-status";
import { MapPinIcon, NavigationIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { clinic } from "@/content/site";
import { generalFaqs } from "@/content/faqs";
import { telLink, whatsappLink } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Book a Dentist Appointment in Peshawar",
  description:
    "Book at The Dental Suite & Co., Office No 19, Ground Floor, Liberty Mall, University Road, Peshawar. Mon–Sat 10 am–8 pm. Call/WhatsApp 0330 1720064.",
  path: "/contact",
});

const visitFaqs = generalFaqs.filter((f) => /where|hours|appointment|cost/i.test(f.q));

export default function ContactPage() {
  const channels = [
    {
      title: "WhatsApp",
      text: "Fastest way to book — send a message any time.",
      action: "Message us",
      href: whatsappLink(),
      Icon: WhatsAppIcon,
      external: true,
    },
    {
      title: "Call the clinic",
      text: `${clinic.phone.display} · Mon–Sat, 10 am – 8 pm`,
      action: "Call now",
      href: telLink,
      Icon: PhoneIcon,
      external: false,
    },
    {
      title: "Directions",
      text: "Liberty Mall, University Road, Tehkal stop",
      action: "Open in Google Maps",
      href: clinic.maps.place,
      Icon: NavigationIcon,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ name: "Book & visit", path: "/contact" }]}
        eyebrow="Book & visit"
        title={
          <>
            Book your visit to <Accent onDark>the suite.</Accent>
          </>
        }
        intro={
          <p>
            Office No 19, Ground Floor, Liberty Mall — University Road, Tehkal, Peshawar. Open Monday to Saturday until
            8 pm.
          </p>
        }
      >
        <OpenStatus className="text-sm font-semibold text-ivory-50" />
      </PageHero>

      <section className="bg-ivory-50 py-16 lg:py-20">
        <ul className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 md:grid-cols-3 xl:px-8">
          {channels.map(({ title, text, action, href, Icon, external }) => (
            <li key={title} data-reveal>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener" } : {})}
                className="group flex h-full flex-col rounded-[1.75rem] border border-ink-900/[0.08] bg-white p-7 transition-[transform,border-color] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-gold-500/50"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-gold-300">
                  <Icon size={22} />
                </span>
                <span className="mt-6 font-display text-2xl font-semibold text-ink-900">{title}</span>
                <span className="mt-2 flex-1 text-muted">{text}</span>
                <span className="mt-5 text-sm font-bold text-gold-700">{action} →</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="book" className="scroll-mt-24 bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Appointment request"
              title={
                <>
                  Request a time that <Accent>suits you.</Accent>
                </>
              }
              intro="Fill in a few details and press send — your request opens as a WhatsApp message to the clinic, and we'll confirm your appointment."
            />
            <div data-reveal className="mt-10 rounded-[1.75rem] bg-ink-900 p-7 text-ivory-50">
              <div className="mb-3 flex items-center justify-between gap-4">
                <h2 className="eyebrow text-gold-400">Opening hours</h2>
                <OpenStatus className="text-xs font-semibold text-stone-300" />
              </div>
              <HoursTable />
            </div>
          </div>
          <div data-reveal className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="grain relative bg-ink-900 py-20 text-ivory-50 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="Finding us"
              title={
                <>
                  Ground floor, <Accent onDark>Office No 19.</Accent>
                </>
              }
            />
            <address data-reveal className="mt-8 flex gap-3 not-italic text-lg leading-relaxed text-stone-300">
              <MapPinIcon size={22} className="mt-1 shrink-0 text-gold-400" />
              <span>
                {clinic.name}
                <br />
                {clinic.address.unit}, {clinic.address.building}
                <br />
                University Road, Stop Tehkal
                <br />
                Peshawar {clinic.address.postalCode}, Pakistan
              </span>
            </address>
            <p data-reveal className="mt-6 leading-relaxed text-stone-400">
              Liberty Mall sits on University Road at the Tehkal stop. There&apos;s more than one dental clinic inside, so look
              for Office No 19 and the gold Dental Suite &amp; Co. signage on the ground floor.
            </p>
            <p data-reveal className="mt-4 text-sm text-stone-500">Plus code: {clinic.address.plusCode}</p>
            <a data-reveal href={clinic.maps.place} target="_blank" rel="noopener" className="btn btn-gold mt-8">
              <NavigationIcon size={18} />
              Get directions
            </a>
          </div>
          <div data-reveal className="lg:col-span-7">
            <MapEmbed className="h-[24rem] lg:h-[32rem]" />
          </div>
        </div>
      </section>

      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 xl:px-8">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Before you visit"
              title={
                <>
                  Quick <Accent>answers.</Accent>
                </>
              }
            />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={visitFaqs} />
          </div>
        </div>
      </section>
      <JsonLd data={faqSchema(visitFaqs)} />
    </>
  );
}
