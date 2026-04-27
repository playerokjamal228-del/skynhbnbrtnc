"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Check,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SkytreeImage } from "@/components/shared/skytree-image";
import { useLocale } from "@/components/layout/locale-provider";
import type { EventData } from "@/lib/event-data";
import { getLocalizedEvent } from "@/lib/localized-events";
import { getEventBadgeLabel, getEventCategoryLabel, getLocalizedContent } from "@/lib/localized-content";

function getBadgeVariant(
  badge: EventData["badge"]
): "gold" | "dark" | "light" {
  if (badge === "Pick Up" || badge === "Collaboration") {
    return "gold";
  }

  if (badge === "Ticket") {
    return "dark";
  }

  return "light";
}

export function EventDetailPage({ event }: { event: EventData }) {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).events.detailPage;
  const displayEvent = getLocalizedEvent(event, locale);

  return (
    <div className="bg-[#f6f1e8] pt-16">
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${displayEvent.accent} text-white`}
      >
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/25 to-transparent" />

        <div className="relative mx-auto grid max-w-[1450px] gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_440px] lg:items-end">
          <div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/72 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {copy.back}
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Badge variant={getBadgeVariant(displayEvent.badge)}>{getEventBadgeLabel(locale, displayEvent.badge)}</Badge>
              <span className="text-xs uppercase tracking-[0.24em] text-white/70">
                {getEventCategoryLabel(locale, displayEvent.category)}
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              {displayEvent.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/86 md:text-[18px]">
              {displayEvent.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{displayEvent.dateLabel}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{displayEvent.location}</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" size="md" href="/ticket">
                {copy.buyTickets}
              </Button>
              <Button
                variant="outline"
                size="md"
                href={displayEvent.originalUrl}
                target="_blank"
                rel="noreferrer"
                className="border-white/40 text-white hover:border-skytree-gold hover:bg-skytree-gold hover:text-skytree-black"
              >
                {copy.officialReference}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/12 bg-white/8 p-3 shadow-[0_28px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <SkytreeImage
                  src={displayEvent.heroImage}
                  alt={displayEvent.title}
                fill
                priority
                variant="highlight"
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
            </div>
            <div className="mt-4 rounded-[22px] bg-black/18 px-5 py-4 text-sm leading-7 text-white/84">
              <p>
                {copy.adaptedNote}
              </p>
              {displayEvent.originalStatusNote ? (
                <p className="mt-3 text-white/72">{displayEvent.originalStatusNote}</p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#f0e7d7] to-transparent" />
        <div className="relative mx-auto max-w-[1450px] px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-6 lg:grid-cols-4">
            {displayEvent.details.map((detail) => (
              <article
                key={detail.label}
                className="rounded-[24px] border border-[#ddd1bd] bg-white/88 px-6 py-6 shadow-[0_18px_45px_rgba(44,34,16,0.07)]"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-skytree-light-gray">
                  {detail.label}
                </p>
                <p className="mt-3 text-lg leading-8 text-skytree-black">
                  {detail.value}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_380px]">
            <div className="space-y-8">
              <section className="rounded-[30px] border border-[#e2d9ca] bg-white px-7 py-8 shadow-[0_18px_50px_rgba(44,34,16,0.06)] md:px-9 md:py-10">
                <p className="text-xs uppercase tracking-[0.28em] text-skytree-gold">
                  {copy.overview}
                </p>
                <div className="mt-5 space-y-5 text-[16px] leading-8 text-skytree-charcoal">
                  {displayEvent.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {displayEvent.sections.map((section, index) => (
                <section
                  key={section.title}
                  className={`rounded-[32px] border px-7 py-8 shadow-[0_18px_50px_rgba(44,34,16,0.06)] md:px-9 md:py-10 ${
                    index % 2 === 0
                      ? "border-[#d8ccbc] bg-[#fffdf8]"
                      : "border-[#d7deeb] bg-[#f6f8fb]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-skytree-gold" />
                    <h2 className="font-serif text-3xl text-skytree-black">
                      {section.title}
                    </h2>
                  </div>

                  <div className="mt-6 space-y-4 text-[16px] leading-8 text-skytree-charcoal">
                    {section.copy.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets?.length ? (
                    <div className="mt-7 grid gap-3">
                      {section.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-skytree-gold/12 text-skytree-gold">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <p className="text-[15px] leading-7 text-skytree-charcoal">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {section.note ? (
                    <div className="mt-7 rounded-[22px] border border-skytree-gold/20 bg-skytree-gold/6 px-5 py-4 text-sm leading-7 text-skytree-charcoal">
                      {section.note}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <section className="rounded-[30px] border border-[#ded2bf] bg-white/92 px-6 py-7 shadow-[0_18px_50px_rgba(44,34,16,0.06)]">
                <p className="text-xs uppercase tracking-[0.28em] text-skytree-gold">
                  {copy.keyMoments}
                </p>
                <div className="mt-6 space-y-4">
                  {displayEvent.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-skytree-gold" />
                      <p className="text-[15px] leading-7 text-skytree-charcoal">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-[#ded2bf] bg-[#141414] px-6 py-7 text-white shadow-[0_18px_50px_rgba(20,20,20,0.16)]">
                <p className="text-xs uppercase tracking-[0.28em] text-skytree-gold-light">
                  {copy.visitPlanning}
                </p>
                <p className="mt-5 text-[15px] leading-7 text-white/82">
                  {copy.visitPlanningBody}
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="primary" size="md" href="/ticket">
                    {copy.reserveAdmission}
                  </Button>
                  <Button variant="ghost" size="md" href="/floors">
                    {copy.exploreFloorGuide}
                  </Button>
                </div>
              </section>
            </aside>
          </div>

          <section className="mt-10 rounded-[32px] border border-[#ddd1bd] bg-white px-7 py-8 shadow-[0_18px_50px_rgba(44,34,16,0.06)] md:px-9 md:py-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-skytree-gold">
                  {copy.faqEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-skytree-black">
                  {copy.faqTitle}
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-skytree-gray">
                {copy.faqDescription}
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {displayEvent.faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[24px] border border-[#ece3d6] bg-[#fcfaf6] px-5 py-5"
                >
                  <h3 className="text-lg leading-7 text-skytree-black">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-skytree-charcoal">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
