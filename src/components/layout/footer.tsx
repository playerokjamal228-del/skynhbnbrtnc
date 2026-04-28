"use client";

import Link from "next/link";
import { partners, socialLinks } from "@/lib/constants";
import { useLocale } from "@/components/layout/locale-provider";
import { getShellCopy } from "@/lib/i18n";

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z" />
      </svg>
    ),
  };

  return <>{icons[name] || null}</>;
}

export function Footer() {
  const { locale } = useLocale();
  const copy = getShellCopy(locale);

  return (
    <footer className="bg-skytree-black text-skytree-light-gray">
      <div className="border-b border-skytree-charcoal">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-skytree-light-gray hover:text-skytree-gold transition-colors"
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-skytree-charcoal">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h4 className="text-skytree-white text-sm tracking-wider uppercase mb-4 font-serif">
                {copy.footer.visit}
              </h4>
              <ul className="space-y-2">
                <li><Link href="/ticket" className="text-xs hover:text-skytree-gold transition-colors">{copy.nav["/ticket"]}</Link></li>
                <li><Link href="/floors" className="text-xs hover:text-skytree-gold transition-colors">{copy.nav["/floors"]}</Link></li>
                <li><Link href="/open-hours" className="text-xs hover:text-skytree-gold transition-colors">{copy.nav["/open-hours"]}</Link></li>
                <li><Link href="/access" className="text-xs hover:text-skytree-gold transition-colors">{copy.nav["/access"]}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-skytree-white text-sm tracking-wider uppercase mb-4 font-serif">
                {copy.footer.enjoy}
              </h4>
              <ul className="space-y-2">
                <li><Link href="/events" className="text-xs hover:text-skytree-gold transition-colors">{copy.nav["/events"]}</Link></li>
                <li><Link href="/enjoy" className="text-xs hover:text-skytree-gold transition-colors">{copy.nav["/enjoy"]}</Link></li>
                <li><Link href="/enjoy#night-views" className="text-xs hover:text-skytree-gold transition-colors">{copy.footer.nightViews}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-skytree-white text-sm tracking-wider uppercase mb-4 font-serif">
                {copy.footer.info}
              </h4>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-xs hover:text-skytree-gold transition-colors">{copy.nav["/faq"]}</Link></li>
                <li><Link href="/access#accessibility" className="text-xs hover:text-skytree-gold transition-colors">{copy.footer.accessibility}</Link></li>
                <li><Link href="/access#group-reservations" className="text-xs hover:text-skytree-gold transition-colors">{copy.footer.groupReservations}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-skytree-white text-sm tracking-wider uppercase mb-4 font-serif">
                {copy.footer.about}
              </h4>
              <ul className="space-y-2">
                <li><Link href="/corporate" className="text-xs hover:text-skytree-gold transition-colors">{copy.nav["/corporate"]}</Link></li>
                <li><Link href="/privacy" className="text-xs hover:text-skytree-gold transition-colors">{copy.nav["/privacy"]}</Link></li>
                <li><Link href="/terms" className="text-xs hover:text-skytree-gold transition-colors">{copy.nav["/terms"]}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-skytree-charcoal">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
          <p className="text-center text-xs tracking-wider uppercase text-skytree-gray mb-6">
            {copy.footer.partners}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-skytree-gray text-xs tracking-wider"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">
        <p className="text-center text-xs text-skytree-gray">
          {copy.footer.copyright}
        </p>
        <p className="mx-auto mt-2 max-w-3xl text-center text-[11px] leading-5 text-skytree-gray">
          {copy.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
