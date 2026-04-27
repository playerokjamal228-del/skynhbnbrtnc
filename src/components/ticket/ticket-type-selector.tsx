"use client";

import { useLocale } from "@/components/layout/locale-provider";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { ticketTypes } from "@/lib/constants";

interface TicketTypeSelectorProps {
  value: string;
  onChange: (id: string) => void;
}

export function TicketTypeSelector({ value, onChange }: TicketTypeSelectorProps) {
  const { locale } = useLocale();

  return (
    <div className="space-y-3">
      <label className="text-sm tracking-wider uppercase text-skytree-gray">
        Select Ticket Type
      </label>
      <div className="grid gap-3">
        {ticketTypes.map((ticket) => (
          <button
            key={ticket.id}
            type="button"
            onClick={() => onChange(ticket.id)}
            className={cn(
              "text-left p-5 border-2 transition-all duration-200",
              value === ticket.id
                ? "border-skytree-gold bg-skytree-gold/5"
                : "border-skytree-border bg-skytree-white hover:border-skytree-light-gray"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-serif text-base text-skytree-black mb-1">
                  {ticket.name}
                </h4>
                <p className="text-skytree-gray text-sm leading-relaxed">
                  {ticket.description}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-serif text-xl text-skytree-black">
                  {formatPrice(ticket.price, locale)}
                </p>
                <p className="text-skytree-light-gray text-xs">
                  Child: {formatPrice(ticket.childPrice, locale)}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
