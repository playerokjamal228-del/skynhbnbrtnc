import type { Metadata } from "next";
import { FloorGuidePage } from "@/components/floors/floor-guide-page";
import { getLocalizedPageCopy } from "@/lib/localized-pages";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getLocalizedPageCopy(locale).floorGuide;

  return {
    title: copy.title,
    description: copy.description,
  };
}

export default function FloorsPage() {
  return <FloorGuidePage />;
}
