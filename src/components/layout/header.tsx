"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useLocale } from "@/components/layout/locale-provider";
import { getShellCopy } from "@/lib/i18n";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale } = useLocale();
  const copy = getShellCopy(locale);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-skytree-black/95 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-base text-white tracking-[0.18em] sm:text-lg md:text-xl md:tracking-widest">
              TOKYO SKYTREE
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-skytree-light-gray text-xs tracking-wider uppercase hover:text-skytree-white transition-colors"
              >
                {copy.nav[link.href] ?? link.label}
              </Link>
            ))}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </nav>

          <button
            type="button"
            className="xl:hidden text-white p-2"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={copy.controls.toggleMenu}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-skytree-dark border-t border-skytree-charcoal">
          <nav className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-skytree-charcoal/50 py-2 text-sm tracking-wider text-skytree-light-gray transition-colors hover:text-skytree-white"
                onClick={() => setMobileOpen(false)}
              >
                {copy.nav[link.href] ?? link.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
