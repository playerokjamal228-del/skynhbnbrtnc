"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkytreeImage } from "@/components/shared/skytree-image";
import { useLocale } from "@/components/layout/locale-provider";
import { getLocalizedContent } from "@/lib/localized-content";

export function EnjoyPageClient() {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).enjoy;

  return (
    <div className="bg-[#f7f1e6] pt-16">
      <section className="relative overflow-hidden bg-[#101112] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(200,169,110,0.24),transparent_56%)]" />

        <div className="relative mx-auto grid max-w-[1450px] gap-8 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_430px] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-skytree-gold-light">
              {copy.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-[36px] leading-[1.06] md:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/84 md:text-[18px] md:leading-8">
              {copy.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="primary" size="md" href="#special-features">
                {copy.hero.primaryCta}
              </Button>
              <Button variant="outline" size="md" href="#observation-deck">
                {copy.hero.secondaryCta}
              </Button>
              <Button variant="outline" size="md" href="#visit-highlights">
                {copy.hero.tertiaryCta}
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <article className="rounded-[24px] border border-white/10 bg-white/7 p-5 backdrop-blur-sm md:rounded-[28px] md:p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-white/56">
                {copy.hero.focusTitle}
              </p>
              <p className="mt-4 text-base leading-7 text-white/86 md:text-lg md:leading-8">
                {copy.hero.focusBody}
              </p>
            </article>
            <article className="rounded-[24px] border border-white/10 bg-white/7 p-5 backdrop-blur-sm md:rounded-[28px] md:p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-white/56">
                {copy.hero.pairedTitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {copy.hero.pairedTags.map((item) => (
                  <Badge key={item} variant="gold">
                    {item}
                  </Badge>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e8ddcd] bg-[#f4ecdf]">
        <div className="mx-auto max-w-[1450px] px-4 py-6 md:px-8">
          <div className="grid gap-3 text-[11px] uppercase tracking-[0.16em] sm:grid-cols-3 md:text-xs md:tracking-[0.22em]">
              <a href="#special-features" className="rounded-full border border-[#d7c8b2] bg-white px-4 py-2 whitespace-nowrap text-skytree-gray">
                {copy.jumpNav.features}
              </a>
              <a href="#observation-deck" className="rounded-full border border-[#d7c8b2] bg-white px-4 py-2 whitespace-nowrap text-skytree-gray">
                {copy.jumpNav.deck}
              </a>
              <a href="#visit-highlights" className="rounded-full border border-[#d7c8b2] bg-white px-4 py-2 whitespace-nowrap text-skytree-gray">
                {copy.jumpNav.highlights}
              </a>
          </div>
        </div>
      </section>

      <section id="special-features" className="mx-auto max-w-[1450px] px-4 py-14 md:px-8 md:py-20">
        <SectionHeading
          title={copy.featuresHeading.title}
          subtitle={copy.featuresHeading.subtitle}
          centered={false}
          className="mb-10"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {copy.features.map((feature) => (
            <article
              key={feature.id}
              id={feature.anchorId}
              className={`overflow-hidden rounded-[28px] border border-[#dfd1bd] shadow-[0_20px_55px_rgba(44,34,16,0.07)] md:rounded-[34px] ${feature.accent}`}
            >
              <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_280px]">
                <div className="p-6 md:p-9">
                  <p className="text-xs uppercase tracking-[0.28em] text-skytree-gold">
                    {feature.number}
                  </p>
                  <h2 className="mt-4 max-w-xl font-serif text-[30px] leading-tight text-current md:text-4xl">
                    {feature.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-[15px] leading-8 text-current/80">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-current/12 bg-white/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-current/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[220px] md:min-h-full">
                  <SkytreeImage
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                    variant="experience"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="observation-deck" className="border-y border-[#eadfce] bg-white/60">
        <div className="mx-auto max-w-[1450px] px-4 py-14 md:px-8 md:py-20">
          <SectionHeading
            title={copy.deckHeading.title}
            subtitle={copy.deckHeading.subtitle}
            centered={false}
            className="mb-10"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {copy.observatoryIdeas.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[26px] border border-[#e2d6c3] bg-white shadow-[0_18px_45px_rgba(44,34,16,0.06)] md:rounded-[30px]"
              >
                <div className="relative aspect-[5/4]">
                  <SkytreeImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 50vw, 25vw"
                    variant="experience"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-serif text-[24px] leading-tight text-skytree-black md:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-skytree-charcoal">
                    {item.copy}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-skytree-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-skytree-gold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit-highlights" className="mx-auto max-w-[1450px] px-4 py-14 md:px-8 md:py-20">
        <SectionHeading
          title={copy.highlightsHeading.title}
          subtitle={copy.highlightsHeading.subtitle}
          centered={false}
          className="mb-10"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {copy.facilityGuides.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[28px] border border-[#e0d3c1] bg-[#fcfaf5] shadow-[0_18px_45px_rgba(44,34,16,0.06)] md:rounded-[32px]"
            >
              <div className="relative aspect-[16/11]">
                <SkytreeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  variant="floor"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-serif text-[26px] leading-tight text-skytree-black md:text-[30px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-skytree-charcoal">
                  {item.copy}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-[28px] border border-[#decfba] bg-[#161616] p-6 text-white shadow-[0_22px_60px_rgba(20,20,20,0.14)] md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:rounded-[34px] md:p-9">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-skytree-gold-light">
              {copy.closing.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-[30px] md:text-4xl">
              {copy.closing.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/78">
              {copy.closing.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-end">
            <Button variant="primary" size="md" href="/ticket">
              {copy.closing.primaryCta}
            </Button>
            <Button variant="outline" size="md" href="/floors">
              {copy.closing.secondaryCta}
            </Button>
            <Button variant="ghost" size="md" href="/access">
              {copy.closing.tertiaryCta}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
