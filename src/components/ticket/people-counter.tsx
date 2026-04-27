"use client";

import { Minus, Plus } from "lucide-react";
import { useLocale } from "@/components/layout/locale-provider";
import { getLocalizedContent } from "@/lib/localized-content";
import { formatPrice } from "@/lib/utils";

interface PeopleCounterProps {
  adults: number;
  childrenCount: number;
  onAdultsChange: (count: number) => void;
  onChildrenCountChange: (count: number) => void;
  adultPrice: number;
  childPrice: number;
}

export function PeopleCounter({
  adults,
  childrenCount,
  onAdultsChange,
  onChildrenCountChange,
  adultPrice,
  childPrice,
}: PeopleCounterProps) {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).ticket.people;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-white border border-skytree-border rounded-lg">
        <div>
          <h4 className="font-serif text-base text-skytree-black">
            {copy.adult}
          </h4>
          <p className="text-xs text-skytree-gray">{copy.adultAge}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-serif text-lg text-skytree-black min-w-[80px] text-right">
            {formatPrice(adultPrice, locale)}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onAdultsChange(Math.max(0, adults - 1))}
              disabled={adults === 0}
              className="w-9 h-9 border border-skytree-border rounded-full flex items-center justify-center text-skytree-gray hover:text-skytree-black hover:border-skytree-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-serif text-xl text-skytree-black">
              {adults}
            </span>
            <button
              type="button"
              onClick={() => onAdultsChange(Math.min(20, adults + 1))}
              className="w-9 h-9 border border-skytree-border rounded-full flex items-center justify-center text-skytree-gray hover:text-skytree-black hover:border-skytree-black transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-white border border-skytree-border rounded-lg">
        <div>
          <h4 className="font-serif text-base text-skytree-black">
            {copy.child}
          </h4>
          <p className="text-xs text-skytree-gray">{copy.childAge}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-serif text-lg text-skytree-black min-w-[80px] text-right">
            {formatPrice(childPrice, locale)}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onChildrenCountChange(Math.max(0, childrenCount - 1))}
              disabled={childrenCount === 0}
              className="w-9 h-9 border border-skytree-border rounded-full flex items-center justify-center text-skytree-gray hover:text-skytree-black hover:border-skytree-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-serif text-xl text-skytree-black">
              {childrenCount}
            </span>
            <button
              type="button"
              onClick={() => onChildrenCountChange(Math.min(20, childrenCount + 1))}
              className="w-9 h-9 border border-skytree-border rounded-full flex items-center justify-center text-skytree-gray hover:text-skytree-black hover:border-skytree-black transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
