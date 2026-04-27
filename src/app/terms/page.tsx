import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { normalizeLocale } from "@/lib/i18n";
import { termsCopy } from "@/lib/legal-content";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = normalizeLocale(await getRequestLocale());
  const copy = termsCopy[locale];

  return {
    title: copy.metadataTitle,
    description: copy.metadataDescription,
  };
}

export default async function TermsPage() {
  const locale = normalizeLocale(await getRequestLocale());
  const copy = termsCopy[locale];

  return <LegalPage copy={copy} />;
}
