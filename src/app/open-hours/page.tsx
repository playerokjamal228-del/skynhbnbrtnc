import type { Metadata } from "next";
import OpenHoursPageClient from "./OpenHoursPageClient";
import { getLocalizedPageCopy } from "@/lib/localized-pages";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getLocalizedPageCopy(locale).openHours;

  return {
    title: copy.title,
    description: copy.subtitle,
  };
}

export default function OpenHoursPage() {
  return <OpenHoursPageClient />;
}
