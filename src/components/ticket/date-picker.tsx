"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "@/components/layout/locale-provider";
import { getLocalizedContent } from "@/lib/localized-content";
import { getTicketPricing, type TicketPlanId } from "@/lib/ticket-pricing";
import { cn, formatPrice } from "@/lib/utils";

interface DatePickerProps {
  value: string;
  planId: TicketPlanId;
  onChange: (date: string) => void;
}

export function DatePicker({ value, planId, onChange }: DatePickerProps) {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).ticket.datePicker;
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const selectedDate = value ? new Date(`${value}T00:00:00`) : null;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

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
    const calendarDate = new Date(currentYear, currentMonth, day);
    return calendarDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const isSelected = (day: number) =>
    selectedDate &&
    day === selectedDate.getDate() &&
    currentMonth === selectedDate.getMonth() &&
    currentYear === selectedDate.getFullYear();

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={prevMonth}
          className="p-2 hover:bg-skytree-light rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-skytree-black" />
        </button>
        <h3 className="font-serif text-lg text-skytree-black">
          {copy.monthNames[currentMonth]} {currentYear}
        </h3>
        <button
          type="button"
          onClick={nextMonth}
          className="p-2 hover:bg-skytree-light rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-skytree-black" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2">
        {copy.dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-xs text-skytree-gray py-2 font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;

          const calendarDate = new Date(currentYear, currentMonth, day);
          const price = getTicketPricing(planId, calendarDate).adult;
          const past = isPast(day);
          const selected = isSelected(day);
          const todayClass = isToday(day);

          return (
            <button
              key={day}
              type="button"
              disabled={past}
              onClick={() => {
                const month = String(currentMonth + 1).padStart(2, "0");
                const nextDay = String(day).padStart(2, "0");
                onChange(`${currentYear}-${month}-${nextDay}`);
              }}
              className={cn(
                "relative flex flex-col items-center justify-center py-2 px-1 rounded-lg text-sm transition-all duration-200 min-h-[64px]",
                selected && "bg-skytree-black text-white",
                !selected && !past && "hover:bg-skytree-light",
                todayClass && !selected && "ring-2 ring-skytree-gold",
                past && "opacity-30 cursor-not-allowed"
              )}
            >
              <span
                className={cn(
                  "text-sm font-medium",
                  calendarDate.getDay() === 0 && !selected && "text-red-500",
                  calendarDate.getDay() === 6 && !selected && "text-blue-500"
                )}
              >
                {day}
              </span>
              {!past && (
                <span
                  className={cn(
                    "text-xs mt-0.5",
                    selected ? "text-skytree-gold" : "text-skytree-gray"
                  )}
                >
                  {formatPrice(price, locale)}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-skytree-border flex flex-wrap gap-4 text-xs text-skytree-gray">
        <span>{copy.weekdayRate}: {formatPrice(2200, locale)}</span>
        <span>Fri: {formatPrice(2600, locale)}</span>
        <span>Sat: {formatPrice(2800, locale)}</span>
        <span>Sun: {formatPrice(3200, locale)}</span>
      </div>
    </div>
  );
}
