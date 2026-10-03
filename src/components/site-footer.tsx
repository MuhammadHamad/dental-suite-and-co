import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/icons";
import { clinic, hours } from "@/content/site";
import { treatments } from "@/content/treatments";
import { articles } from "@/content/journal";
import { formatTime } from "@/lib/hours";
import { telLink, whatsappLink } from "@/lib/links";

const socials = [
  { href: clinic.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: clinic.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: clinic.social.youtube, label: "YouTube", Icon: YouTubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="grain relative bg-ink-950 pb-28 text-stone-400 md:pb-0">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-6 xl:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo id="ds-foil-footer" />
            <p className="mt-6 max-w-sm leading-relaxed">
              A boutique dental clinic in Peshawar for cosmetic, restorative and family dentistry — led by
              Dr. Osama Afridi, Consultant Dental Surgeon.
            </p>
            <a
              href={clinic.maps.place}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold-300/15 px-4 py-2 text-sm text-stone-300 transition-colors hover:border-gold-300/40"
            >
              <span className="flex text-gold-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} size={14} />
                ))}
              </span>
              <span>
                <strong className="text-ivory-50">5.0</strong> on Google
              </span>
            </a>
            <ul className="mt-8 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${clinic.brand} on ${label}`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-gold-300/15 text-stone-300 transition-colors hover:border-gold-400 hover:text-gold-300"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h2 className="eyebrow text-gold-400">Treatments</h2>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm sm:block sm:space-y-2.5">
                {treatments.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/treatments/${t.slug}`} className="link-underline transition-colors hover:text-ivory-50">
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow text-gold-400">The Suite</h2>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li>
                  <Link href="/dr-osama-afridi" className="link-underline transition-colors hover:text-ivory-50">
                    Dr. Osama Afridi
                  </Link>
                </li>
                <li>
                  <Link href="/patient-stories" className="link-underline transition-colors hover:text-ivory-50">
                    Patient stories
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="link-underline transition-colors hover:text-ivory-50">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="link-underline transition-colors hover:text-ivory-50">
                    Book & visit
                  </Link>
                </li>
              </ul>
              <h2 className="eyebrow mt-10 text-gold-400">From the Journal</h2>
              <ul className="mt-5 space-y-2.5 text-sm">
                {articles.slice(0, 3).map((a) => (
                  <li key={a.slug}>
                    <Link href={`/journal/${a.slug}`} className="transition-colors hover:text-ivory-50">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow text-gold-400">Visit</h2>
              <address className="mt-5 not-italic">
                <a
                  href={clinic.maps.place}
                  target="_blank"
                  rel="noopener"
                  className="flex gap-3 text-sm leading-relaxed transition-colors hover:text-ivory-50"
                >
                  <MapPinIcon size={18} className="mt-0.5 shrink-0 text-gold-500" />
                  <span>
                    {clinic.address.unit},<br />
                    {clinic.address.building}, University Road,
                    <br />
                    Stop Tehkal, Peshawar {clinic.address.postalCode}
                  </span>
                </a>
                <a href={telLink} className="mt-4 flex items-center gap-3 text-sm font-semibold text-ivory-50 hover:text-gold-300">
                  <PhoneIcon size={18} className="text-gold-500" />
                  {clinic.phone.display}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 flex items-center gap-3 text-sm font-semibold text-ivory-50 hover:text-gold-300"
                >
                  <WhatsAppIcon size={18} className="text-gold-500" />
                  WhatsApp us
                </a>
              </address>
              <h2 className="eyebrow mt-10 text-gold-400">Hours</h2>
              <dl className="mt-5 space-y-1.5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt>Mon – Sat</dt>
                  <dd className="text-ivory-50">
                    {formatTime(hours[0].open!)} – {formatTime(hours[0].close!)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gold-300/10 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name} All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            Information on this website is general and doesn&apos;t replace an examination. Treatment results vary
            from person to person.
          </p>
        </div>
      </div>
    </footer>
  );
}
