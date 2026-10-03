import Link from "next/link";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons";
import { treatments } from "@/content/treatments";
import { whatsappLink } from "@/lib/links";

export const metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="grain relative overflow-hidden bg-ink-900 text-ivory-50">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] glow [--glow-a:0.2]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-6 lg:py-36">
        <p className="font-display text-[8rem] italic leading-none text-foil sm:text-[11rem]">404</p>
        <h1 className="mt-4 font-display text-4xl font-medium sm:text-5xl">This page has gone missing — like a lost tooth.</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-stone-400">
          Fortunately, we&apos;re good at replacing things. Try one of these instead:
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {treatments.slice(0, 6).map((t) => (
            <Link
              key={t.slug}
              href={`/treatments/${t.slug}`}
              className="rounded-full border border-gold-300/25 px-4 py-2 text-sm font-semibold text-stone-300 transition-colors hover:border-gold-300 hover:text-gold-200"
            >
              {t.name}
            </Link>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-gold">
            Back to home
            <ArrowRightIcon size={18} />
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-ghost-light">
            <WhatsAppIcon size={18} className="text-gold-400" />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
