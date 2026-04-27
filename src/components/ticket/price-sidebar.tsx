"use client";

import { useLocale } from "@/components/layout/locale-provider";
import { getLocalizedContent } from "@/lib/localized-content";
import { cn, formatPrice } from "@/lib/utils";

interface PriceSidebarProps {
  planName: string;
  planSubtitle: string;
  adults: number;
  childrenCount: number;
  adultPrice: number;
  childPrice: number;
  date: string;
  time: string;
  className?: string;
}

export function PriceSidebar({
  planName,
  planSubtitle,
  adults,
  childrenCount,
  adultPrice,
  childPrice,
  date,
  time,
  className,
}: PriceSidebarProps) {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).ticket.sidebar;
  const adultTotal = adults * adultPrice;
  const childTotal = childrenCount * childPrice;
  const total = adultTotal + childTotal;

  const formatDate = (value: string) => {
    if (!value) return copy.selectDate;

    const dateObj = new Date(`${value}T00:00:00`);
    return dateObj.toLocaleDateString(locale, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className={cn(
        "bg-skytree-light border border-skytree-border rounded-xl p-6",
        className
      )}
    >
      <h3 className="font-serif text-lg text-skytree-black mb-4">
        {copy.title}
      </h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-skytree-gray">{copy.date}</span>
          <span className="text-skytree-black font-medium">{formatDate(date)}</span>
        </div>

        {time && (
          <div className="flex justify-between">
            <span className="text-skytree-gray">{copy.time}</span>
            <span className="text-skytree-black font-medium">{time}</span>
          </div>
        )}

        <div className="flex justify-between gap-3">
          <span className="text-skytree-gray">{copy.plan}</span>
          <span className="text-right text-skytree-black font-medium">
            <span className="block">{planName}</span>
            {planSubtitle && (
              <span className="block text-xs text-skytree-light-gray mt-0.5">
                {planSubtitle}
              </span>
            )}
          </span>
        </div>

        <div className="border-t border-skytree-border pt-3 space-y-2">
          {adults > 0 && (
            <div className="flex justify-between">
              <span className="text-skytree-gray">
                {copy.adult} x{adults}
              </span>
              <span className="text-skytree-black">
                {formatPrice(adultTotal, locale)}
              </span>
            </div>
          )}

          {childrenCount > 0 && (
            <div className="flex justify-between">
              <span className="text-skytree-gray">
                {copy.child} x{childrenCount}
              </span>
              <span className="text-skytree-black">
                {formatPrice(childTotal, locale)}
              </span>
            </div>
          )}
        </div>

        <div className="border-t border-skytree-border pt-3 flex justify-between">
          <span className="font-serif text-lg text-skytree-black">{copy.total}</span>
          <span className="font-serif text-2xl text-skytree-black">
            {formatPrice(total, locale)}
          </span>
        </div>

        {copy.currencyNote ? (
          <p className="border-t border-skytree-border pt-3 text-xs leading-relaxed text-skytree-light-gray">
            {copy.currencyNote}
          </p>
        ) : null}
      </div>
    </div>
  );
}
