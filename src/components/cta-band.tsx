import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { OpenStatus } from "@/components/open-status";
import { clinic } from "@/content/site";
import { DEFAULT_WHATSAPP_MESSAGE, telLink, whatsappLink } from "@/lib/links";

export function CtaBand({
  title = "Let's create your best smile yet.",
  text = "Message Dr. Osama's team on WhatsApp or call — we'll find a time that suits you, Monday to Saturday until 8 pm.",
  message = DEFAULT_WHATSAPP_MESSAGE,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="bg-ivory-50 px-4 py-16 sm:px-6 lg:py-24">
      <div
        data-reveal
        className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] bg-ink-900 px-7 py-16 text-center sm:px-12 lg:py-20"
      >
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 glow [--glow-a:0.3]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 glow [--glow-a:0.16] [--glow-rgb:230,207,152]"
          aria-hidden="true"
        />
        <p className="rule-star mx-auto max-w-xs text-[0.7rem]">
          <span className="eyebrow text-gold-400">Book a consultation</span>
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-[2.6rem] font-medium leading-[1.05] text-ivory-50 sm:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-400">{text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={whatsappLink(message)} target="_blank" rel="noopener" className="btn btn-gold w-full sm:w-auto">
            <WhatsAppIcon size={20} />
            Book on WhatsApp
          </a>
          <a href={telLink} className="btn btn-ghost-light w-full sm:w-auto">
            <PhoneIcon size={18} className="text-gold-400" />
            Call {clinic.phone.display}
          </a>
        </div>
        <OpenStatus className="mt-8 justify-center text-sm text-stone-400" />
      </div>
    </section>
  );
}
