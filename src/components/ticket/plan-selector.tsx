"use client";

import { useLocale } from "@/components/layout/locale-provider";
import { getLocalizedContent } from "@/lib/localized-content";
import { cn, formatPrice } from "@/lib/utils";

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
}

interface PlanSelectorProps {
  value: string;
  onChange: (planId: string) => void;
}

export function PlanSelector({ value, onChange }: PlanSelectorProps) {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).ticket;
  const plans: Plan[] = [
    {
      id: "tembo-deck",
      name: copy.plans["tembo-deck"].name,
      subtitle: copy.plans["tembo-deck"].subtitle,
      price: 2200,
      description: copy.plans["tembo-deck"].description,
    },
    {
      id: "tembo-deck-galleria",
      name: copy.plans["tembo-deck-galleria"].name,
      subtitle: copy.plans["tembo-deck-galleria"].subtitle,
      price: 3400,
      description: copy.plans["tembo-deck-galleria"].description,
    },
  ];

  return (
    <div className="space-y-3">
      {plans.map((plan) => (
        <button
          key={plan.id}
          type="button"
          onClick={() => onChange(plan.id)}
          className={cn(
            "w-full text-left p-5 border-2 rounded-xl transition-all duration-200",
            value === plan.id
              ? "border-skytree-black bg-skytree-black/5"
              : "border-skytree-border hover:border-skytree-gray bg-white"
          )}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                    value === plan.id
                      ? "border-skytree-black bg-skytree-black"
                      : "border-skytree-gray"
                  )}
                >
                  {value === plan.id && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <h4 className="font-serif text-base text-skytree-black">
                  {plan.name}
                </h4>
              </div>
              <p className="text-xs text-skytree-gold tracking-wider uppercase ml-8 mb-2">
                {plan.subtitle}
              </p>
              <p className="text-sm text-skytree-gray ml-8 leading-relaxed">
                {plan.description}
              </p>
            </div>
            <div className="text-right ml-4">
              <span className="font-serif text-lg text-skytree-black">
                {formatPrice(plan.price, locale)}
              </span>
              <p className="text-xs text-skytree-gray">{copy.planSelector.perPerson}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
