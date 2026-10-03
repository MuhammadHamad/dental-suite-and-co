import { NavigationIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { clinic } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/links";

/** Thumb-reach booking bar on phones. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-300/15 bg-ink-900/[0.97] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 md:hidden">
      <div className="grid grid-cols-[1fr_1.4fr_1fr] gap-2">
        <a
          href={telLink}
          className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-gold-300/20 py-2 text-[0.7rem] font-bold uppercase tracking-wider text-ivory-50"
        >
          <PhoneIcon size={18} className="text-gold-400" />
          Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener"
          className="btn btn-gold !min-h-0 flex-col !gap-1 !rounded-2xl !py-2 text-[0.7rem] uppercase tracking-wider"
        >
          <WhatsAppIcon size={20} />
          Book on WhatsApp
        </a>
        <a
          href={clinic.maps.place}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-gold-300/20 py-2 text-[0.7rem] font-bold uppercase tracking-wider text-ivory-50"
        >
          <NavigationIcon size={18} className="text-gold-400" />
          Directions
        </a>
      </div>
    </div>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chat with The Dental Suite & Co. on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 md:flex"
    >
      <span className="pointer-events-none translate-x-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-ivory-50 opacity-0 shadow-xl transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
        Chat with us
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.75)] transition-transform duration-500 group-hover:scale-105">
        <WhatsAppIcon size={28} />
      </span>
    </a>
  );
}
