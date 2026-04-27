import type { Metadata } from "next";
import { BookingForm } from "@/components/ticket/booking-form";
import { getLocalizedContent } from "@/lib/localized-content";
import { getRequestLocale } from "@/lib/server-locale";

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
  const copy = getLocalizedContent(locale).ticket.page;
  const promo = copy.promo;

  return (
    <div className="pt-16">
      <div className="relative overflow-hidden bg-skytree-black py-10 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,110,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_420px] lg:items-end">
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
              <p className="mt-5 text-sm uppercase tracking-wider text-skytree-gold">
                {copy.subtitle}
              </p>

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
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {promo.highlights.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[22px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
                  >
                    <p className="text-[11px] uppercase tracking-[0.24em] text-skytree-gold">
                      {item.label}
                    </p>
                    <p className="mt-3 font-serif text-2xl text-white">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/72">
                      {item.copy}
                    </p>
                  </article>
                ))}
              </div>
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
