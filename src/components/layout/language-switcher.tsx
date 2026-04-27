"use client";

import { Globe2 } from "lucide-react";
import { getShellCopy, localeOptions } from "@/lib/i18n";
import { useLocale } from "@/components/layout/locale-provider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const copy = getShellCopy(locale);

  return (
    <label className="flex items-center gap-2 text-skytree-gold">
      <Globe2 size={14} />
      <span className="sr-only">{copy.controls.language}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as typeof locale)}
        className="bg-transparent text-xs tracking-wider uppercase outline-none"
        aria-label={copy.controls.language}
      >
        {localeOptions.map((option) => (
          <option key={option.value} value={option.value} className="text-black">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
