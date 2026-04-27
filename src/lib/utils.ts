import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Locale } from "@/lib/i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ENGLISH_DISPLAY_JPY_PER_USD = 150;

const localeFormatMap: Record<Locale, string> = {
  en: "en-US",
  ja: "ja-JP",
  ko: "ko-KR",
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  th: "th-TH",
};

export function getDisplayCurrency(locale: Locale): "JPY" | "USD" {
  return locale === "en" ? "USD" : "JPY";
}

export function formatPrice(price: number, locale: Locale): string {
  const currency = getDisplayCurrency(locale);
  const displayValue = currency === "USD" ? price / ENGLISH_DISPLAY_JPY_PER_USD : price;

  return new Intl.NumberFormat(localeFormatMap[locale], {
    style: "currency",
    currency,
    minimumFractionDigits: currency === "USD" ? 2 : 0,
    maximumFractionDigits: currency === "USD" ? 2 : 0,
  }).format(displayValue);
}
