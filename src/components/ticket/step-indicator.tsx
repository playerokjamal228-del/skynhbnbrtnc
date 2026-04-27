"use client";

import { useLocale } from "@/components/layout/locale-provider";
import { getLocalizedContent } from "@/lib/localized-content";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const { locale } = useLocale();
  const steps = getLocalizedContent(locale).ticket.steps.map((label, index) => ({
    num: index + 1,
    label,
  }));

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max items-start gap-0">
      {steps.map((step, i) => (
        <div key={step.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                step.num < currentStep && "bg-skytree-black text-white",
                step.num === currentStep && "bg-skytree-gold text-white",
                step.num > currentStep && "bg-skytree-light text-skytree-gray border border-skytree-border"
              )}
            >
              {step.num < currentStep ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step.num
              )}
            </div>
            <span
              className={cn(
                "mt-1.5 max-w-[56px] text-center text-[10px] leading-tight transition-colors sm:max-w-none sm:text-xs",
                step.num <= currentStep ? "text-skytree-black" : "text-skytree-gray"
              )}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "mb-5 mx-2 h-0.5 w-6 sm:w-8 md:w-12 transition-colors",
                step.num < currentStep ? "bg-skytree-black" : "bg-skytree-border"
              )}
            />
          )}
        </div>
      ))}
      </div>
    </div>
  );
}
