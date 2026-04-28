import type { Metadata } from "next";
import { BookingForm } from "@/components/ticket/booking-form";
import { getLocalizedContent } from "@/lib/localized-content";
import { getRequestLocale } from "@/lib/server-locale";
import { getTicketPricing } from "@/lib/ticket-pricing";
import { formatPrice } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getLocalizedContent(locale).ticket.page;

  return {
    title: copy.title,
    description: copy.subtitle,
  };
}

export default async function TicketPage() {
  const locale = await getRequestLocale();
  const ticketCopy = getLocalizedContent(locale).ticket;
  const copy = ticketCopy.page;
  const promo = copy.promo;
  const deckStartingPrice = formatPrice(
    getTicketPricing("tembo-deck").adult,
    locale
  );
  const galleriaStartingPrice = formatPrice(
    getTicketPricing("tembo-deck-galleria").adult,
    locale
  );
  const priceMap = {
    "tembo-deck": deckStartingPrice,
    "tembo-deck-galleria": galleriaStartingPrice,
  } as const;

  return (
    <div className="pt-16">
      <div className="relative overflow-hidden bg-skytree-black py-10 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,110,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_420px] lg:items-start">
            <div>
              <p className="text-skytree-gold text-[11px] uppercase tracking-[0.28em]">
                {promo.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl font-serif text-[34px] leading-[1.05] text-white sm:text-[42px] md:text-5xl">
                {promo.title}
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/78 md:text-base">
                {promo.description}
              </p>

              <div className="mt-6 rounded-[24px] border border-skytree-gold/20 bg-white/[0.04] p-5 md:p-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-skytree-gold">
                  {promo.startingFromLabel}
                </p>
                <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="font-serif text-4xl text-white md:text-5xl">
                      {deckStartingPrice}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/58">
                      {ticketCopy.plans["tembo-deck"].name} · {ticketCopy.plans["tembo-deck"].subtitle}
                    </p>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-white/72">
                    {copy.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-2">
                {promo.valueBullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-skytree-gold" />
                    <p className="text-sm leading-6 text-white/80">{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {promo.trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/82 sm:text-[11px] sm:tracking-[0.22em]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 xl:grid-cols-2">
                {promo.planCards.map((planCard) => (
                  <article
                    key={planCard.planId}
                    className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-skytree-gold">
                          {planCard.label}
                        </p>
                        <h2 className="mt-3 font-serif text-[28px] leading-tight text-white">
                          {ticketCopy.plans[planCard.planId].name}
                        </h2>
                      </div>
                      <p className="shrink-0 text-right font-serif text-2xl text-white">
                        {priceMap[planCard.planId]}
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/72">
                      {planCard.summary}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {planCard.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-white/78"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-skytree-gold" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#booking-form"
                  className="inline-flex items-center justify-center rounded-sm bg-skytree-gold px-8 py-4 text-sm uppercase tracking-wider text-skytree-black transition-colors hover:bg-skytree-gold-light sm:flex-1"
                >
                  {promo.primaryCta}
                </a>
                <a
                  href="/floors"
                  className="inline-flex items-center justify-center rounded-sm border border-skytree-gold px-8 py-4 text-sm uppercase tracking-wider text-skytree-gold transition-colors hover:bg-skytree-gold hover:text-skytree-black sm:flex-1"
                >
                  {promo.secondaryCta}
                </a>
              </div>
            </div>

            <div>
              <aside className="rounded-[28px] border border-skytree-gold/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm lg:sticky lg:top-24">
                <p className="text-[11px] uppercase tracking-[0.28em] text-skytree-gold">
                  {promo.offerPanel.eyebrow}
                </p>
                <p className="mt-4 font-serif text-5xl text-white">
                  {deckStartingPrice}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/74">
                  {promo.offerPanel.priceNote}
                </p>

                <div className="mt-6 rounded-[20px] border border-white/8 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-skytree-gold">
                    {promo.offerPanel.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/76">
                    {ticketCopy.plans["tembo-deck-galleria"].name} · {galleriaStartingPrice}
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {promo.offerPanel.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm leading-6 text-white/78"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-skytree-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 space-y-3">
                  <a
                    href="#booking-form"
                    className="inline-flex w-full items-center justify-center rounded-sm bg-skytree-gold px-6 py-4 text-sm uppercase tracking-wider text-skytree-black transition-colors hover:bg-skytree-gold-light"
                  >
                    {promo.primaryCta}
                  </a>
                  <a
                    href="/floors"
                    className="inline-flex w-full items-center justify-center rounded-sm border border-skytree-gold px-6 py-4 text-sm uppercase tracking-wider text-skytree-gold transition-colors hover:bg-skytree-gold hover:text-skytree-black"
                  >
                    {promo.secondaryCta}
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <div
        id="booking-form"
        className="mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-12"
      >
        <BookingForm />
      </div>
    </div>
  );
}
