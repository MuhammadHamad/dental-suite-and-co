import { clinic } from "@/content/site";

export function MapEmbed({ className = "", dark = true }: { className?: string; dark?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] border border-gold-300/15 bg-ink-800 ${className}`}>
      <iframe
        title="Map showing The Dental Suite and Co. at Liberty Mall, University Road, Peshawar"
        src={clinic.maps.embed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
        style={dark ? { filter: "grayscale(1) invert(0.92) contrast(0.88) brightness(0.95) sepia(0.12)" } : undefined}
        allowFullScreen
      />
    </div>
  );
}
