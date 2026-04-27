import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";
import { getLocalizedPageCopy } from "@/lib/localized-pages";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getLocalizedPageCopy(locale).faq;

  return {
    title: copy.title,
    description: copy.subtitle,
  };
}

export default function FAQPage() {
  return <FAQPageClient />;
}
