"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { useLocale } from "@/components/layout/locale-provider";
import { getLocalizedPageCopy } from "@/lib/localized-pages";
import { cn } from "@/lib/utils";

const hoursByMonth: Record<number, { open: string; close: string }> = {
  0: { open: "08:00", close: "20:00" },
  1: { open: "08:00", close: "20:00" },
  2: { open: "08:00", close: "21:00" },
  3: { open: "08:00", close: "21:00" },
  4: { open: "08:00", close: "21:00" },
  5: { open: "08:00", close: "21:00" },
  6: { open: "08:00", close: "22:00" },
  7: { open: "08:00", close: "22:00" },
  8: { open: "08:00", close: "21:00" },
  9: { open: "08:00", close: "21:00" },
  10: { open: "08:00", close: "20:00" },
  11: { open: "08:00", close: "20:00" },
};

export default function OpenHoursPageClient() {
  const { locale } = useLocale();
  const copy = getLocalizedPageCopy(locale).openHours;

  const getTokyoNow = () => {
    const formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const [year, month, day] = formatter.format(new Date()).split("-");
    return new Date(Number(year), Number(month) - 1, Number(day));
  };

  const today = getTokyoNow();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const hours = hoursByMonth[currentMonth];

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const isPast = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="pt-16">
      <div className="bg-skytree-black py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 className="font-serif text-3xl md:text-4xl text-white">{copy.title}</h1>
          <p className="text-skytree-gold text-sm mt-2 tracking-wider uppercase">{copy.subtitle}</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-skytree-border rounded-xl p-6 shadow-sm">
            <Clock className="w-6 h-6 text-skytree-gold mb-3" />
            <h3 className="font-serif text-lg text-skytree-black mb-1">{hours.open} - {hours.close}</h3>
            <p className="text-sm text-skytree-gray">{copy.monthNotes[currentMonth]}</p>
          </div>
          <div className="bg-white border border-skytree-border rounded-xl p-6 shadow-sm">
            <MapPin className="w-6 h-6 text-skytree-gold mb-3" />
            <h3 className="font-serif text-lg text-skytree-black mb-1">{copy.noteLabels.address}</h3>
            <p className="text-sm text-skytree-gray">{copy.address}</p>
          </div>
          <div className="bg-white border border-skytree-border rounded-xl p-6 shadow-sm">
            <Clock className="w-6 h-6 text-skytree-gold mb-3" />
            <h3 className="font-serif text-lg text-skytree-black mb-1">{copy.noteLabels.lastEntry}</h3>
            <p className="text-sm text-skytree-gray">{copy.lastEntryValue}</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button type="button" onClick={prevMonth} aria-label={copy.noteLabels.previousMonth} className="p-2 hover:bg-skytree-light rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5 text-skytree-black" />
            </button>
            <h2 className="font-serif text-2xl text-skytree-black">{copy.monthNames[currentMonth]} {currentYear}</h2>
            <button type="button" onClick={nextMonth} aria-label={copy.noteLabels.nextMonth} className="p-2 hover:bg-skytree-light rounded-full transition-colors">
              <ChevronRight className="w-5 h-5 text-skytree-black" />
            </button>
          </div>
          <div className="grid grid-cols-7 mb-2">
            {copy.dayNames.map((day) => (
              <div key={day} className="text-center text-xs text-skytree-gray py-2 font-medium">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              if (day === null) return <div key={`empty-${index}`} />;
              const date = new Date(currentYear, currentMonth, day);
              const past = isPast(day);
              const todayClass = isToday(day);
              return (
                <div
                  key={day}
                  className={cn(
                    "flex flex-col items-center justify-center py-3 px-1 rounded-lg text-sm min-h-[72px]",
                    todayClass && "ring-2 ring-skytree-gold bg-skytree-gold/5",
                    past && "opacity-40"
                  )}
                >
                  <span className={cn("text-sm font-medium", date.getDay() === 0 && "text-red-500", date.getDay() === 6 && "text-blue-500")}>
                    {day}
                  </span>
                  {!past ? <span className="text-xs text-skytree-gray mt-1">{hours.open}-{hours.close}</span> : null}
                </div>
              );
            })}
          </div>
          <div className="mt-6 pt-4 border-t border-skytree-border flex flex-wrap gap-4 text-xs text-skytree-gray">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-skytree-gold/20 ring-1 ring-skytree-gold" />{copy.noteLabels.today}</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500/30" />{copy.noteLabels.sunday}</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500/30" />{copy.noteLabels.saturday}</span>
          </div>
        </div>
      </div>

      <div className="bg-skytree-light border-t border-skytree-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <h2 className="font-serif text-2xl text-skytree-black mb-8">{copy.noteLabels.important}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.infoBlocks.map((block) => (
              <div key={block.title}>
                <h3 className="font-serif text-lg text-skytree-black mb-3">{block.title}</h3>
                <p className="text-sm text-skytree-gray leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
