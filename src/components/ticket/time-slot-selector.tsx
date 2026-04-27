"use client";

import { cn } from "@/lib/utils";

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00",
];

interface TimeSlotSelectorProps {
  value: string;
  onChange: (time: string) => void;
}

export function TimeSlotSelector({ value, onChange }: TimeSlotSelectorProps) {
  return (
    <div>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2">
        {timeSlots.map((slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => onChange(slot)}
            className={cn(
              "py-2.5 px-3 text-sm rounded-lg border transition-all duration-200",
              value === slot
                ? "bg-skytree-black text-white border-skytree-black"
                : "bg-white text-skytree-black border-skytree-border hover:border-skytree-black"
            )}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}
