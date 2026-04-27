"use client";

import Link from "next/link";
import { useLocale } from "@/components/layout/locale-provider";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { getLocalizedContent } from "@/lib/localized-content";
import { getLocalizedEventNewsItems } from "@/lib/localized-events";

export function NewsSection() {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).home.news;
  const newsItems = getLocalizedEventNewsItems(locale);

  return (
    <section className="bg-skytree-white py-14 md:py-24">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <SectionHeading
          title={copy.title}
          subtitle={copy.subtitle}
          centered
        />

        <div className="space-y-0">
          {newsItems.map((item) => (
            <Link
              key={`${item.label}-${item.title}`}
              href={item.href}
              className="group flex flex-col gap-2 border-b border-skytree-border py-4 sm:flex-row sm:items-start sm:gap-4 md:gap-6"
            >
              <span className="w-full flex-shrink-0 text-[11px] tracking-[0.18em] text-skytree-light-gray sm:w-28 sm:text-xs sm:tracking-wider md:w-36">
                {item.label}
              </span>
              <span className="text-sm text-skytree-black transition-colors group-hover:text-skytree-gold">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="md" href="/events#news">
            {copy.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
