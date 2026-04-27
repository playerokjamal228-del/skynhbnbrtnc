import type { Metadata } from "next";
import { EnjoyPageClient } from "@/components/enjoy/enjoy-page-client";
import { getLocalizedContent } from "@/lib/localized-content";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getLocalizedContent(locale).enjoy;

  return {
    title: copy.hero.title,
    description: copy.hero.description,
  };
}

export default async function EnjoyPage() {
  const locale = await getRequestLocale();
  const copy = getLocalizedContent(locale).enjoy;
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "How to Enjoy Tokyo Skytree",
    description: copy.hero.description,
    hasPart: [
      ...copy.features.map((item) => item.title),
      ...copy.observatoryIdeas.map((item) => item.title),
      ...copy.facilityGuides.map((item) => item.title),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <EnjoyPageClient />
    </>
  );
}
