"use client";

import Link from "next/link";
import { useLocale } from "@/components/layout/locale-provider";
import { Button } from "@/components/ui/button";
import { SkytreeImage } from "@/components/shared/skytree-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { getLocalizedContent } from "@/lib/localized-content";

export function ExperienceCards() {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).home.experience;

  return (
    <section className="bg-skytree-black py-14 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <SectionHeading
          title={copy.title}
          subtitle={copy.subtitle}
          light
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 mb-10">
          {copy.cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-[28px] sm:aspect-[3/4] sm:rounded-none"
            >
              <SkytreeImage
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                variant="experience"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-skytree-black/90 via-skytree-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-skytree-gold md:tracking-widest">
                  {card.subtitle}
                </p>
                <h3 className="font-serif text-xl tracking-[0.04em] text-skytree-white md:text-xl md:tracking-wide">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="md" href="/enjoy">
            {copy.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
