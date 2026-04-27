"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SkytreeImage } from "@/components/shared/skytree-image";
import { useLocale } from "@/components/layout/locale-provider";
import type { EventData } from "@/lib/event-data";
import {
  getEventBadgeLabel,
  getEventCategoryLabel,
  getLocalizedContent,
} from "@/lib/localized-content";
import { getLocalizedEvent } from "@/lib/localized-events";
import { cn } from "@/lib/utils";

interface EventsPageClientProps {
  items: EventData[];
  categories: readonly string[];
}

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

export default function EventsPageClient({
  items,
  categories,
}: EventsPageClientProps) {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).events.eventsPage;
  const [activeCategory, setActiveCategory] = useState("All");
  const localizedItems = items.map((item) => getLocalizedEvent(item, locale));
  const localizedNewsItems = localizedItems.map((item) => ({
    label: item.newsLabel,
    title: item.title,
    href: `/events/${item.slug}`,
  }));

  const filtered =
    activeCategory === "All"
      ? localizedItems
      : activeCategory === "Pick Up"
        ? localizedItems.filter((item) => item.badge === "Pick Up")
        : localizedItems.filter((item) => item.category === activeCategory);

  const pickUpItems = localizedItems.filter((item) => item.badge === "Pick Up");
  const leadStory = localizedItems[0];

  return (
    <div className="bg-[#f7f2ea] pt-16">
      <section className="relative overflow-hidden bg-[#111112] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(200,169,110,0.22),transparent_58%)]" />

        <div className="relative mx-auto max-w-[1450px] px-4 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_460px] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-skytree-gold-light">
                {copy.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 md:text-[18px]">
                {copy.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <article className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/58">
                    {copy.currentStories}
                    </p>
                  <p className="mt-3 font-serif text-3xl">{localizedItems.length}</p>
                </article>
                <article className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/58">
                    {copy.eventTypes}
                    </p>
                  <p className="mt-3 font-serif text-3xl">{categories.length - 1}</p>
                </article>
                <article className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/58">
                    {copy.planningFocus}
                    </p>
                    <p className="mt-3 text-lg leading-7 text-white/82">
                    {copy.planningFocusValue}
                    </p>
                </article>
              </div>
            </div>

            {leadStory ? (
              <Link
                href={`/events/${leadStory.slug}`}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/8 p-3 shadow-[0_30px_70px_rgba(0,0,0,0.25)] backdrop-blur-sm"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                  <SkytreeImage
                    src={leadStory.heroImage}
                    alt={leadStory.title}
                    fill
                    priority
                    variant="highlight"
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <Badge variant={getBadgeVariant(leadStory.badge)}>
                      {getEventBadgeLabel(locale, leadStory.badge)}
                    </Badge>
                    <h2 className="mt-4 font-serif text-3xl leading-tight text-white">
                      {leadStory.title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-7 text-white/78">
                      {leadStory.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {pickUpItems.length ? (
        <section className="border-b border-[#e7ddce] bg-[#f2ece2]">
          <div className="mx-auto max-w-[1450px] px-4 py-12 md:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-skytree-gold">
                  {copy.pickupEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-skytree-black">
                  {copy.pickupTitle}
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-skytree-gray">
                {copy.pickupDescription}
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {pickUpItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/events/${item.slug}`}
                  className="group grid overflow-hidden rounded-[28px] border border-[#dfd2bf] bg-white shadow-[0_18px_50px_rgba(44,34,16,0.06)] transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[260px_minmax(0,1fr)]"
                >
                  <div className="relative min-h-[240px]">
                    <SkytreeImage
                      src={item.image}
                      alt={item.title}
                      fill
                      variant="highlight"
                      sizes="(max-width: 768px) 100vw, 260px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <Badge variant={getBadgeVariant(item.badge)}>{getEventBadgeLabel(locale, item.badge)}</Badge>
                      <h3 className="mt-4 font-serif text-2xl leading-tight text-skytree-black">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-skytree-charcoal">
                        {item.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-5 text-xs uppercase tracking-[0.18em] text-skytree-light-gray">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.dateLabel}
                      </span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-[1450px] px-4 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
              <p className="text-xs uppercase tracking-[0.28em] text-skytree-gold">
              {copy.archiveEyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-skytree-black">
              {copy.archiveTitle}
              </h2>
            </div>
            <Button variant="secondary" size="md" href="/ticket">
            {copy.planVisit}
            </Button>
          </div>

        <div className="mt-8 flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-all duration-200 md:px-5 md:text-xs md:tracking-[0.22em]",
                  activeCategory === category
                    ? "border-skytree-black bg-skytree-black text-white"
                    : "border-[#ddcfbb] bg-white text-skytree-gray hover:border-skytree-gold hover:text-skytree-black"
                )}
              >
                {getEventCategoryLabel(locale, category)}
              </button>
            ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              href={`/events/${item.slug}`}
              className="group overflow-hidden rounded-[28px] border border-[#dfd2bf] bg-white shadow-[0_18px_50px_rgba(44,34,16,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <SkytreeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  variant="highlight"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute left-4 top-4">
                  <Badge variant={getBadgeVariant(item.badge)}>{getEventBadgeLabel(locale, item.badge)}</Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-skytree-light-gray">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.dateLabel}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" />
                    {getEventCategoryLabel(locale, item.category)}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-skytree-black transition-colors group-hover:text-skytree-gold">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-skytree-charcoal">
                  {item.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-skytree-gold">
                  {copy.readStory}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!filtered.length ? (
          <div className="rounded-[28px] border border-dashed border-[#d8cbb9] bg-white/80 px-6 py-16 text-center text-skytree-gray">
            {copy.empty}
          </div>
        ) : null}
      </section>

      <section
        id="news"
        className="border-t border-[#e7ddce] bg-white/72 scroll-mt-28"
      >
        <div className="mx-auto max-w-[1100px] px-4 py-12 md:px-8 md:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-skytree-gold">
                {copy.noticesEyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-skytree-black">
                {copy.noticesTitle}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-skytree-gray">
              {copy.noticesDescription}
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-[#dfd2bf] bg-white shadow-[0_18px_50px_rgba(44,34,16,0.05)]">
            {localizedNewsItems.map((item) => (
              <Link
                key={`${item.label}-${item.title}`}
                href={item.href}
                className="flex flex-col gap-2 border-b border-[#eee4d7] px-5 py-5 transition-colors hover:bg-[#fcf7ef] last:border-b-0 md:flex-row md:items-center md:gap-6"
              >
                <span className="w-28 text-xs uppercase tracking-[0.2em] text-skytree-light-gray md:w-36">
                  {item.label}
                </span>
                <span className="text-sm leading-7 text-skytree-black">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
