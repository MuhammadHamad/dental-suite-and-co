import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar, WhatsAppFab } from "@/components/action-bar";
import { RevealObserver, revealBootScript } from "@/components/reveal-observer";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, clinic } from "@/content/site";
import { clinicSchema, websiteSchema } from "@/lib/schema";

// Variable font: two files (roman + italic) cover every weight used on the site.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "The Dental Suite & Co. | Cosmetic & Family Dentist in Peshawar";
const description =
  "Boutique dental clinic at Liberty Mall, University Road, Peshawar: smile makeovers, veneers, zirconia crowns, implants and whitening by Dr. Osama Afridi.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${clinic.brand}` },
  description,
  applicationName: clinic.brand,
  authors: [{ name: clinic.brand, url: SITE_URL }],
  creator: clinic.brand,
  publisher: clinic.brand,
  category: "health",
  keywords: [
    "dentist in Peshawar",
    "dental clinic Peshawar",
    "cosmetic dentist Peshawar",
    "dentist University Road Peshawar",
    "dentist Tehkal",
    "smile makeover Peshawar",
    "zirconia crowns Peshawar",
    "dental implants Peshawar",
    "teeth whitening Peshawar",
    "Dr Osama Afridi",
  ],
  openGraph: {
    type: "website",
    siteName: clinic.brand,
    locale: "en_PK",
    title,
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, address: false, email: false },
  other: {
    "geo.region": "PK-KP",
    "geo.placename": "Peshawar",
    "geo.position": `${clinic.geo.latitude};${clinic.geo.longitude}`,
    ICBM: `${clinic.geo.latitude}, ${clinic.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#100f0c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PK" className={`${cormorant.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-gold-300 px-5 py-3 font-bold text-ink-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileActionBar />
        <WhatsAppFab />
        <RevealObserver />
        <JsonLd data={[clinicSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
