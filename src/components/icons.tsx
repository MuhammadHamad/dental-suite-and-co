import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const TOOTH =
  "M12 4.6C10.5 4.6 9.4 3.4 7.6 3.4 5.2 3.4 3.5 5.4 3.5 8c0 1.7.6 3 1.1 4.3.7 1.7.9 3.7 1.3 5.9.3 1.8.8 3.1 1.8 3.1 1.2 0 1.5-1.9 1.9-3.8.3-1.5 1-2.3 2.4-2.3s2.1.8 2.4 2.3c.4 1.9.7 3.8 1.9 3.8 1 0 1.5-1.3 1.8-3.1.4-2.2.6-4.2 1.3-5.9.5-1.3 1.1-2.6 1.1-4.3 0-2.6-1.7-4.6-4.1-4.6-1.8 0-2.9 1.2-4.4 1.2Z";

function Svg({ size = 24, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---------- Treatment icons (tooth-based line art) ---------- */

const treatmentIcons = {
  tooth: <path d={TOOTH} />,
  "sparkle-tooth": (
    <>
      <path d={TOOTH} />
      <path d="M19.6 1.2v2.6M18.3 2.5h2.6" />
      <path d="M8.2 7.4c.6-.8 1.6-1.1 2.5-.8" opacity=".7" />
    </>
  ),
  veneer: (
    <>
      <path d={TOOTH} />
      <path d="M5.7 8.6c1.9-1.7 4-1.9 6.3-.6 2.3-1.3 4.4-1.1 6.3.6" />
    </>
  ),
  crown: (
    <>
      <path d="M3.5 8.5 7.2 12l4.8-6.5 4.8 6.5 3.7-3.5-1.8 9.5H5.3Z" />
      <path d="M5.3 20.5h13.4" />
      <circle cx="12" cy="4.2" r=".9" />
    </>
  ),
  implant: (
    <>
      <path d="M6.8 4.6c0-1.1.9-1.8 2-1.8 1.4 0 2 .7 3.2.7s1.8-.7 3.2-.7c1.1 0 2 .7 2 1.8 0 2.3-.9 4.4-2.4 5H9.2c-1.5-.6-2.4-2.7-2.4-5Z" />
      <path d="M10.1 9.6h3.8v1.9h-3.8Z" />
      <path d="M10 11.5h4l-.4 7.6-1.6 2.1-1.6-2.1Z" />
      <path d="M9.6 13.6h4.8M9.8 15.7h4.4M10 17.8h4" />
    </>
  ),
  whitening: (
    <>
      <path d={TOOTH} />
      <path d="M20.2 2.4l1.3-1.3M21.6 5.6h1.6M17.6 1.3V0" />
    </>
  ),
  cleaning: (
    <>
      <path d={TOOTH} />
      <circle cx="20.6" cy="3.3" r="1.1" />
      <circle cx="22.4" cy="6.4" r=".6" />
      <circle cx="18.6" cy="1" r=".5" />
    </>
  ),
  "root-canal": (
    <>
      <path d={TOOTH} />
      <path d="M9.4 9.4c1.6-1.1 3.6-1.1 5.2 0" />
      <path d="M9.6 9.6c-.2 2.6-.7 5.2-1.6 8.6M14.4 9.6c.2 2.6.7 5.2 1.6 8.6" />
    </>
  ),
  braces: (
    <>
      <rect x="3" y="5.5" width="7.5" height="13" rx="3" />
      <rect x="13.5" y="5.5" width="7.5" height="13" rx="3" />
      <path d="M1.5 12h21" />
      <rect x="5.4" y="10.4" width="2.7" height="3.2" rx=".5" />
      <rect x="15.9" y="10.4" width="2.7" height="3.2" rx=".5" />
    </>
  ),
  kids: (
    <>
      <path d={TOOTH} />
      <path d="M9.3 8.3v.01M14.7 8.3v.01" strokeWidth={2} />
      <path d="M9.6 10.6c1.3 1.1 3.5 1.1 4.8 0" />
    </>
  ),
  filling: (
    <>
      <path d={TOOTH} />
      <path d="M10 7.3c.8-.5 1.8-.3 2.6.2.7.4 1.6.4 2-.1.3 1.2-.1 2.6-1.3 3.1-1.3.5-2.8.1-3.5-.9-.5-.8-.5-1.8.2-2.3Z" />
    </>
  ),
} as const;

export type IconName = keyof typeof treatmentIcons;

export function TreatmentIcon({ name, ...props }: IconProps & { name: IconName }) {
  return <Svg {...props}>{treatmentIcons[name]}</Svg>;
}

/* ---------- UI icons ---------- */

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 16.6v2.9a1.9 1.9 0 0 1-2.1 1.9 18.9 18.9 0 0 1-8.2-2.9 18.6 18.6 0 0 1-5.7-5.7A18.9 18.9 0 0 1 2.1 4.6 1.9 1.9 0 0 1 4 2.5h2.9a1.9 1.9 0 0 1 1.9 1.6c.1.9.3 1.8.7 2.7a1.9 1.9 0 0 1-.4 2l-1.2 1.2a15.2 15.2 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.6 2.7.7a1.9 1.9 0 0 1 1.6 1.9Z" />
  </Svg>
);

export const MapPinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21.5s-7-6.1-7-11.6a7 7 0 0 1 14 0c0 5.5-7 11.6-7 11.6Z" />
    <circle cx="12" cy="9.9" r="2.6" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </Svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Svg>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m4.5 12.5 4.5 4.5 10.5-11" />
  </Svg>
);

export const PlusIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 8h17M3.5 16h17" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />
  </Svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Svg>
);

export const NavigationIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m3.5 11 17-7.5L13 20.5l-2-7.5Z" />
  </Svg>
);

export const CalendarIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Svg>
);

export const ShieldIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21.5s7.5-3.4 7.5-9.4V5.6L12 2.5 4.5 5.6v6.5c0 6 7.5 9.4 7.5 9.4Z" />
    <path d="m8.8 12 2.2 2.2 4.3-4.6" />
  </Svg>
);

export const SparkleIcon = (p: IconProps) => (
  <svg width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      fill="currentColor"
      d="M12 1.5c.5 4.7 2.9 9.6 10.5 10.5-7.6.9-10 5.8-10.5 10.5C11.5 17.8 9.1 12.9 1.5 12 9.1 11.1 11.5 6.2 12 1.5Z"
    />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      fill="currentColor"
      d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.2l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8Z"
    />
  </svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg width={p.size ?? 40} height={p.size ?? 40} viewBox="0 0 48 48" aria-hidden="true" {...p}>
    <path
      fill="currentColor"
      d="M20 10C11 13.6 6 20.4 6 29.4 6 35 9.4 39 14.2 39c4.2 0 7.3-3.1 7.3-7.1 0-3.9-2.9-6.8-6.6-6.8-.7 0-1.3.1-1.8.2.9-4.5 4.5-8.6 9.4-11.2Zm20.5 0c-9 3.6-14 10.4-14 19.4C26.5 35 29.9 39 34.7 39c4.2 0 7.3-3.1 7.3-7.1 0-3.9-2.9-6.8-6.6-6.8-.7 0-1.3.1-1.8.2.9-4.5 4.5-8.6 9.4-11.2Z"
    />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      fill="currentColor"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.16h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"
    />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      fill="currentColor"
      d="M13.5 21.5v-7.7h2.6l.4-3h-3V8.9c0-.9.3-1.5 1.5-1.5h1.6V4.7a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6v7.7Z"
    />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.9" />
    <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" />
  </Svg>
);

export const YouTubeIcon = (p: IconProps) => (
  <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      fill="currentColor"
      d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3Z"
    />
  </svg>
);

export const LinkedInIcon = (p: IconProps) => (
  <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      fill="currentColor"
      d="M6.9 8.6H3.6V20h3.3ZM5.2 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.4 13.4c0-3.1-1.6-5.1-4.4-5.1a3.8 3.8 0 0 0-3.4 1.9V8.6H9.4V20h3.3v-5.8c0-1.6.6-2.9 2.2-2.9s2.1 1.3 2.1 2.9V20h3.4Z"
    />
  </svg>
);

export const GoogleIcon = (p: IconProps) => (
  <svg width={p.size ?? 18} height={p.size ?? 18} viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2-1.9 3.2-4.7 3.2-8Z" />
    <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23Z" />
    <path fill="#FBBC05" d="M5.8 14.2a6.6 6.6 0 0 1 0-4.3V7.1H2.1a11 11 0 0 0 0 9.9Z" />
    <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4Z" />
  </svg>
);
