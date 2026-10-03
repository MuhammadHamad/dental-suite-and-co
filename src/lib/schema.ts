import { SITE_URL, clinic, doctor, hours } from "@/content/site";
import { treatments, type Treatment } from "@/content/treatments";
import type { Article } from "@/content/journal";
import type { Faq } from "@/content/faqs";
import { OG_FALLBACK_IMAGE, absoluteUrl } from "@/lib/seo";

export const CLINIC_ID = `${SITE_URL}/#clinic`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const DOCTOR_ID = `${SITE_URL}/dr-osama-afridi#person`;

const DAY_NAMES: Record<string, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

function openingHoursSpecification() {
  const groups = new Map<string, string[]>();
  for (const h of hours) {
    if (!h.open || !h.close) continue;
    const key = `${h.open}-${h.close}`;
    groups.set(key, [...(groups.get(key) ?? []), DAY_NAMES[h.day]]);
  }
  return [...groups.entries()].map(([key, days]) => {
    const [opens, closes] = key.split("-");
    return { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens, closes };
  });
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: clinic.address.streetAddress,
  addressLocality: clinic.address.locality,
  addressRegion: clinic.address.region,
  postalCode: clinic.address.postalCode,
  addressCountry: clinic.address.country,
};

const doctorRef = {
  "@type": "Person",
  "@id": DOCTOR_ID,
  name: doctor.name,
  jobTitle: doctor.title,
};

export function clinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": CLINIC_ID,
    name: clinic.name,
    alternateName: clinic.alternateNames,
    slogan: "Smile with confidence.",
    description: clinic.description,
    url: SITE_URL,
    logo: absoluteUrl("/logo.png"),
    image: [absoluteUrl(OG_FALLBACK_IMAGE)],
    telephone: clinic.phone.international,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    hasMap: clinic.maps.place,
    openingHoursSpecification: openingHoursSpecification(),
    currenciesAccepted: "PKR",
    foundingDate: clinic.founded,
    founder: doctorRef,
    employee: [doctorRef],
    areaServed: ["Peshawar", "University Town", "Tehkal", "Hayatabad", "Board Bazaar", "Saddar", "Gulbahar"].map(
      (name) => ({ "@type": "Place", name: `${name}${name === "Peshawar" ? "" : ", Peshawar"}` }),
    ),
    availableService: treatments.map((t) => ({
      "@type": "MedicalProcedure",
      name: t.name,
      url: absoluteUrl(`/treatments/${t.slug}`),
    })),
    sameAs: [clinic.social.facebook, clinic.social.instagram, clinic.social.youtube, clinic.maps.place],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: clinic.brand,
    alternateName: clinic.name,
    inLanguage: "en-PK",
    publisher: { "@id": CLINIC_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function treatmentSchema(t: Treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/treatments/${t.slug}`)}#service`,
    name: t.title,
    serviceType: t.name,
    description: t.metaDescription,
    url: absoluteUrl(`/treatments/${t.slug}`),
    category: t.category,
    provider: { "@id": CLINIC_ID },
    areaServed: { "@type": "City", name: "Peshawar" },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: { "@type": "ContactPoint", telephone: clinic.phone.international },
      serviceLocation: { "@id": CLINIC_ID },
    },
  };
}

export function doctorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": DOCTOR_ID,
    name: doctor.name,
    givenName: "Osama",
    familyName: "Afridi",
    honorificPrefix: "Dr.",
    jobTitle: doctor.title,
    description:
      "PMDC-licensed consultant dental surgeon in Peshawar with a Master of Public Health, focused on cosmetic and restorative dentistry.",
    image: absoluteUrl(OG_FALLBACK_IMAGE),
    url: absoluteUrl("/dr-osama-afridi"),
    worksFor: { "@id": CLINIC_ID },
    workLocation: { "@id": CLINIC_ID },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Abbottabad International Dental College" },
      { "@type": "CollegeOrUniversity", name: "Khyber Medical University" },
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Bachelor of Dental Surgery (BDS)" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Master of Public Health (MPH)" },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Pakistan Medical & Dental Council registration",
        recognizedBy: { "@type": "Organization", name: "Pakistan Medical & Dental Council" },
      },
    ],
    knowsAbout: [
      "Cosmetic dentistry",
      "Smile makeover",
      "Zirconia crowns",
      "Dental implants",
      "Root canal treatment",
      "Public health",
    ],
    sameAs: [...doctor.sameAs],
  };
}

export function articleSchema(a: Article) {
  const url = absoluteUrl(`/journal/${a.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: a.title,
    description: a.description,
    datePublished: a.published,
    dateModified: a.published,
    inLanguage: "en-PK",
    mainEntityOfPage: url,
    url,
    image: absoluteUrl(`/journal/${a.slug}/opengraph-image`),
    author: { "@type": "Organization", "@id": CLINIC_ID, name: clinic.brand },
    publisher: { "@id": CLINIC_ID },
    about: a.related.map((slug) => ({ "@id": `${absoluteUrl(`/treatments/${slug}`)}#service` })),
  };
}
