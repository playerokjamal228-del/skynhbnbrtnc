"use client";

import { useLocale } from "@/components/layout/locale-provider";
import { SkytreeImage } from "@/components/shared/skytree-image";
import { Button } from "@/components/ui/button";
import { getLocalizedContent } from "@/lib/localized-content";

export function HeroSection() {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).home.hero;

  return (
    <section className="relative flex min-h-[68vh] w-full items-end overflow-hidden bg-skytree-black pt-24 pb-10 sm:min-h-[74vh] sm:pb-12 md:min-h-[90vh] md:items-center md:justify-center md:py-0">
      <div className="absolute inset-0">
        <SkytreeImage
          src="/images/hero/img_kv01.webp"
          alt={copy.imageAlt}
          fill
          className="object-cover object-[62%_center] opacity-55 md:object-center md:opacity-60"
          priority
          sizes="100vw"
          variant="hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-skytree-black/82 via-skytree-black/42 to-skytree-black/88 md:from-skytree-black/70 md:via-skytree-black/30 md:to-skytree-black/80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="max-w-[20rem] text-left sm:max-w-[28rem] md:mx-auto md:max-w-4xl md:text-center">
        <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-skytree-gold sm:text-xs md:mb-6 md:text-sm md:tracking-[0.3em]">
          {copy.eyebrow}
        </p>
        <h1 className="mb-5 font-serif text-[2.15rem] leading-[0.98] tracking-[0.06em] text-skytree-white sm:text-[3rem] md:mb-6 md:text-6xl md:leading-tight md:tracking-wider lg:text-7xl">
          {copy.title.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mb-7 max-w-[19rem] text-sm leading-relaxed text-skytree-light-gray sm:max-w-[24rem] sm:text-[15px] md:mx-auto md:mb-10 md:max-w-xl md:text-base">
          {copy.description}
        </p>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 md:justify-center">
          <Button variant="primary" size="lg" href="/ticket" className="w-full sm:w-auto">
            {copy.primaryCta}
          </Button>
          <Button variant="outline" size="lg" href="/floors" className="w-full sm:w-auto">
            {copy.secondaryCta}
          </Button>
        </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-skytree-light-gray text-[10px] tracking-widest uppercase">
          {copy.scroll}
        </span>
        <div className="w-px h-8 bg-skytree-light-gray/50 animate-pulse" />
      </div>
    </section>
  );
}
