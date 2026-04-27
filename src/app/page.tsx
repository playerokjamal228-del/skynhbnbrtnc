import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { ExperienceCards } from "@/components/home/experience-cards";
import { HighlightsSection } from "@/components/home/highlights-section";
import { InteractiveTowerSection } from "@/components/home/interactive-tower-section";
import { NewsSection } from "@/components/home/news-section";
import { QuickAccessBar } from "@/components/layout/quick-access-bar";
import { getLocalizedContent } from "@/lib/localized-content";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const hero = getLocalizedContent(locale).home.hero;

  return {
    title: hero.title,
    description: hero.description,
  };
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickAccessBar />
      <InteractiveTowerSection />
      <ExperienceCards />
      <HighlightsSection />
      <NewsSection />
    </>
  );
}
