// Single source of truth for clinic facts. NAP (name, address, phone) must stay identical to the
// Google Business Profile — see docs/clinic-research.md before changing anything here.

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_URL = rawSiteUrl.replace(/\/$/, "");

export const clinic = {
  name: "The Dental Suite and Co.",
  brand: "The Dental Suite & Co.",
  shortBrand: "Dental Suite & Co.",
  monogram: "DS",
  alternateNames: ["The Dental Suite & Co.", "Dental Suite and Co. Peshawar", "DandanSaaz"],
  tagline: "Cosmetic · Restorative · Smile Makeover · Implant",
  description:
    "Boutique dental clinic on the ground floor of Liberty Mall, University Road (Tehkal), Peshawar. Smile makeovers, veneers, zirconia crowns, implants, whitening, root canals, braces and children's dentistry by Dr. Osama Afridi.",
  founded: "2026",

  phone: {
    display: "0330 1720064",
    international: "+92 330 1720064",
    e164: "+923301720064",
  },
  whatsapp: "923301720064",

  address: {
    unit: "Office No 19, Ground Floor",
    building: "Liberty Mall",
    street: "University Rd, Stop Tehkal",
    streetAddress: "Office No 19, Ground Floor, Liberty Mall, University Rd, Stop Tehkal",
    locality: "Peshawar",
    region: "Khyber Pakhtunkhwa",
    postalCode: "25150",
    country: "PK",
    countryName: "Pakistan",
    oneLine:
      "Office No 19, Ground Floor, Liberty Mall, University Rd, Stop Tehkal, Peshawar 25150",
    plusCode: "2G56+78 Peshawar",
  },
  geo: { latitude: 34.0081789, longitude: 71.5108561 },

  maps: {
    place: "https://maps.google.com/?cid=15671611189500831877",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=The+Dental+Suite+and+Co.%2C+Liberty+Mall%2C+University+Rd%2C+Peshawar&destination_place_id=&travelmode=driving",
    embed:
      "https://maps.google.com/maps?q=The%20Dental%20Suite%20and%20Co.%2C%20Liberty%20Mall%2C%20University%20Rd%2C%20Peshawar&t=m&z=17&ie=UTF8&iwloc=B&output=embed",
  },

  rating: {
    google: { value: 5.0, count: 10 },
    facebookRecommend: { percent: 100, count: 10 },
  },

  social: {
    facebook: "https://www.facebook.com/p/DandanSaaz-61592207156644/",
    instagram: "https://www.instagram.com/_dandansaaz_/",
    youtube: "https://www.youtube.com/@DandanSaaz",
    linkedin: "https://pk.linkedin.com/in/osama-afridi-1a1855345",
  },
} as const;

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

/** Opening hours in Pakistan Standard Time (UTC+5, no daylight saving). */
export const hours: { day: DayKey; label: string; open: string | null; close: string | null }[] = [
  { day: "mon", label: "Monday", open: "10:00", close: "20:00" },
  { day: "tue", label: "Tuesday", open: "10:00", close: "20:00" },
  { day: "wed", label: "Wednesday", open: "10:00", close: "20:00" },
  { day: "thu", label: "Thursday", open: "10:00", close: "20:00" },
  { day: "fri", label: "Friday", open: "10:00", close: "20:00" },
  { day: "sat", label: "Saturday", open: "10:00", close: "20:00" },
  { day: "sun", label: "Sunday", open: null, close: null },
];

export const hoursSummary = "Mon–Sat · 10 am – 8 pm";

export const doctor = {
  name: "Dr. Osama Afridi",
  shortName: "Dr. Osama",
  title: "Consultant Dental Surgeon",
  altTitle: "Cosmetic & Dental Surgeon",
  credentials: [
    { label: "BDS", detail: "Abbottabad International Dental College" },
    { label: "MPH", detail: "Master of Public Health · Khyber Medical University" },
    { label: "PMDC", detail: "Licensed dental surgeon, Pakistan Medical & Dental Council" },
  ],
  quotes: {
    signature: "I craft smiles that walk into rooms before you do.",
    effort: "A little effort from our side gets you a beautiful smile and lifetime confidence.",
  },
  sameAs: [
    "https://www.youtube.com/@DandanSaaz",
    "https://www.instagram.com/_dandansaaz_/",
    "https://pk.linkedin.com/in/osama-afridi-1a1855345",
  ],
} as const;

export const nav = [
  { href: "/treatments", label: "Treatments" },
  { href: "/dr-osama-afridi", label: "Dr. Osama" },
  { href: "/patient-stories", label: "Patient Stories" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Visit" },
] as const;
