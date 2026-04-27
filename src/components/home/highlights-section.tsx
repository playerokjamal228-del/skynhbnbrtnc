"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SkytreeImage } from "@/components/shared/skytree-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/components/layout/locale-provider";
import { eventCategories } from "@/lib/event-data";
import {
  getEventBadgeLabel,
  getEventCategoryLabel,
  getLocalizedContent,
} from "@/lib/localized-content";
import { getLocalizedHomeEventHighlights } from "@/lib/localized-events";

export function HighlightsSection() {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).home.highlights;
  const localizedHighlights = getLocalizedHomeEventHighlights(locale);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? localizedHighlights
      : activeCategory === "Pick Up"
        ? localizedHighlights.filter((item) => item.badge === "Pick Up")
        : localizedHighlights.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-skytree-light py-14 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <SectionHeading
          title={copy.title}
          subtitle={copy.subtitle}
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {eventCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-all duration-200 md:text-xs md:tracking-wider ${
                  activeCategory === category
                    ? "bg-skytree-black text-skytree-white"
                    : "border border-skytree-border bg-skytree-white text-skytree-gray hover:text-skytree-black"
                }`}
              >
                {getEventCategoryLabel(locale, category)}
              </button>
            ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-10">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group overflow-hidden rounded-[26px] border border-skytree-border bg-skytree-white transition-shadow duration-300 hover:shadow-card-hover sm:rounded-none"
            >
              <div className="relative aspect-video overflow-hidden">
                <SkytreeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  variant="highlight"
                />
              </div>
              <div className="p-4 md:p-5">
                <div className="mb-3 flex flex-wrap items-center gap-2 md:gap-3">
                  <Badge
                    variant={
                      item.badge === "Ticket"
                        ? "dark"
                        : item.badge === "Seasonal"
                          ? "light"
                          : "gold"
                    }
                  >
                    {getEventBadgeLabel(locale, item.badge)}
                  </Badge>
                  <span className="text-xs text-skytree-light-gray">
                    {item.date}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-lg text-skytree-black transition-colors group-hover:text-skytree-gold md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-skytree-gray">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="md" href="/events">
            {copy.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
