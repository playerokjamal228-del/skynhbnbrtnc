"use client";

import Link from "next/link";
import {
  Ticket,
  Clock,
  Layers,
  Calendar,
  Sparkles,
  MapPin,
  MessageCircle,
  Building2,
} from "lucide-react";
import { quickAccessItems } from "@/lib/constants";
import { useLocale } from "@/components/layout/locale-provider";
import { getShellCopy } from "@/lib/i18n";

const iconMap: Record<string, React.ReactNode> = {
  ticket: <Ticket size={20} />,
  clock: <Clock size={20} />,
  layers: <Layers size={20} />,
  calendar: <Calendar size={20} />,
  sparkles: <Sparkles size={20} />,
  "map-pin": <MapPin size={20} />,
  "message-circle": <MessageCircle size={20} />,
  building: <Building2 size={20} />,
};

export function QuickAccessBar() {
  const { locale } = useLocale();
  const copy = getShellCopy(locale);

  return (
    <div className="bg-skytree-white border-b border-skytree-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-4 gap-x-2 gap-y-3 py-3 sm:gap-x-3 sm:gap-y-4 sm:py-4 md:flex md:items-center md:justify-center md:gap-4 lg:gap-6">
          {quickAccessItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-[78px] flex-col items-center justify-start gap-2 rounded-2xl px-1.5 py-2 transition-colors hover:bg-skytree-off-white md:min-h-0 md:min-w-[90px] md:rounded-none md:px-0 md:py-0"
            >
              <div className="text-skytree-gray transition-colors group-hover:text-skytree-gold">
                {iconMap[item.icon]}
              </div>
              <span className="text-center text-[10px] leading-[1.25] tracking-[0.12em] text-skytree-gray transition-colors group-hover:text-skytree-black sm:text-[11px] md:text-xs md:tracking-wider">
                {copy.quickAccess[item.href] ?? item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
