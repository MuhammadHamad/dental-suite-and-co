"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { OpenStatus } from "@/components/open-status";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  MapPinIcon,
  MenuIcon,
  PhoneIcon,
  TreatmentIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { clinic, nav } from "@/content/site";
import { treatments } from "@/content/treatments";
import { telLink, whatsappLink } from "@/lib/links";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const close = () => setMenuOpen(false);

  return (
    <>
      <div className="hidden bg-ink-950 text-[0.78rem] text-stone-400 lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 xl:px-8">
          <a
            href={clinic.maps.place}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 transition-colors hover:text-gold-300"
          >
            <MapPinIcon size={15} className="text-gold-500" />
            Office No 19, Ground Floor, Liberty Mall · University Road, Tehkal, Peshawar
          </a>
          <div className="flex items-center gap-6">
            <OpenStatus className="text-stone-300" />
            <a href={telLink} className="inline-flex items-center gap-2 font-semibold text-ivory-50 transition-colors hover:text-gold-300">
              <PhoneIcon size={14} className="text-gold-500" />
              {clinic.phone.display}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? "border-gold-300/10 bg-ink-900/95 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] md:bg-ink-900/85 md:backdrop-blur-xl"
            : "border-transparent bg-ink-900"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:h-20 xl:px-8">
          <Logo id="ds-foil-header" />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) =>
                item.href === "/treatments" ? (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                        isActive(item.href) ? "text-gold-300" : "text-stone-300 hover:text-ivory-50"
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon size={15} className="transition-transform duration-300 group-hover:rotate-180" />
                    </Link>
                    <div className="invisible absolute left-1/2 top-full w-[40rem] -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <div className="grain overflow-hidden rounded-3xl border border-gold-300/15 bg-ink-850 p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
                        <ul className="grid grid-cols-2 gap-1">
                          {treatments.map((t) => (
                            <li key={t.slug}>
                              <Link
                                href={`/treatments/${t.slug}`}
                                className="flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-white/[0.04]"
                              >
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold-300/20 text-gold-400">
                                  <TreatmentIcon name={t.icon} size={22} />
                                </span>
                                <span>
                                  <span className="block text-sm font-bold text-ivory-50">{t.name}</span>
                                  <span className="mt-0.5 block text-xs leading-snug text-stone-400">{t.tagline}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/treatments"
                          className="mt-2 flex items-center justify-between rounded-2xl bg-gold-300/[0.07] px-4 py-3 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-300/[0.12]"
                        >
                          View all treatments
                          <ArrowRightIcon size={16} />
                        </Link>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                        isActive(item.href) ? "text-gold-300" : "text-stone-300 hover:text-ivory-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href={telLink} className="btn btn-ghost-light hidden !min-h-11 !px-4 text-sm xl:inline-flex">
              <PhoneIcon size={16} className="text-gold-400" />
              {clinic.phone.display}
            </a>
            <Link href="/contact#book" className="btn btn-gold hidden !min-h-11 text-sm sm:inline-flex">
              Book appointment
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold-300/25 text-ivory-50 lg:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <MenuIcon size={22} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`grain fixed inset-0 z-[60] flex flex-col bg-ink-900 transition-[opacity,visibility] duration-500 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-[4.5rem] items-center justify-between px-5 sm:px-6">
          <Logo id="ds-foil-menu" />
          <button
            type="button"
            onClick={close}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold-300/25 text-ivory-50"
            aria-label="Close menu"
          >
            <CloseIcon size={22} />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 pb-10 pt-6">
          <ul className="space-y-1">
            {[{ href: "/", label: "Home" }, ...nav].map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: menuOpen ? `${120 + i * 50}ms` : "0ms" }}
                className={`transition-all duration-700 ease-[var(--ease-luxe)] ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  href={item.href}
                  onClick={close}
                  className={`flex items-center justify-between border-b border-gold-300/10 py-4 font-display text-[2rem] font-medium ${
                    pathname === item.href ? "text-gold-300" : "text-ivory-50"
                  }`}
                >
                  {item.label}
                  <ArrowRightIcon size={20} className="text-gold-500" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-gold w-full" onClick={close}>
              <WhatsAppIcon size={20} />
              Book on WhatsApp
            </a>
            <a href={telLink} className="btn btn-ghost-light w-full" onClick={close}>
              <PhoneIcon size={18} className="text-gold-400" />
              Call {clinic.phone.display}
            </a>
          </div>
          <div className="mt-8 space-y-2 text-sm text-stone-400">
            <OpenStatus className="text-stone-300" />
            <p>Office No 19, Ground Floor, Liberty Mall, University Road, Tehkal, Peshawar</p>
          </div>
        </nav>
      </div>
    </>
  );
}
