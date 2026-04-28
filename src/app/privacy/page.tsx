import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { normalizeLocale } from "@/lib/i18n";
import { privacyCopy } from "@/lib/legal-content";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = normalizeLocale(await getRequestLocale());
  const copy = privacyCopy[locale];

  return {
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    alternates: {
      canonical: "/privacy",
    },
  };
}

export default async function PrivacyPage() {
  const locale = normalizeLocale(await getRequestLocale());
  const copy = privacyCopy[locale];

  return <LegalPage copy={copy} />;
}
