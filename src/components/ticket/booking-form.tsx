"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/layout/locale-provider";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ticket/date-picker";
import { PlanSelector } from "@/components/ticket/plan-selector";
import { TimeSlotSelector } from "@/components/ticket/time-slot-selector";
import { PeopleCounter } from "@/components/ticket/people-counter";
import { ProfileForm } from "@/components/ticket/profile-form";
import { PriceSidebar } from "@/components/ticket/price-sidebar";
import { StepIndicator } from "@/components/ticket/step-indicator";
import { bookingStore } from "@/lib/booking-store";
import { trackAdsConversion, trackEvent } from "@/lib/analytics";
import { getLocalizedContent } from "@/lib/localized-content";
import { buildPaymentUrl } from "@/lib/payment-link";
import { getTicketPricing, type TicketPlanId } from "@/lib/ticket-pricing";
import { formatPrice } from "@/lib/utils";

const redirectingLabels = {
  en: "Redirecting...",
  ja: "決済ページへ移動中...",
  ko: "결제 페이지로 이동 중...",
  "zh-CN": "正在跳转至支付页面...",
  "zh-TW": "正在跳轉至付款頁面...",
  th: "กำลังไปยังหน้าชำระเงิน...",
} as const;

const initialProfile = {
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  country: "",
  address1: "",
  city: "",
  state: "",
  postcode: "",
};

export function BookingForm() {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).ticket;
  const redirectingLabel = redirectingLabels[locale];
  const planNames = {
    "tembo-deck": {
      name: copy.plans["tembo-deck"].name,
      subtitle: copy.plans["tembo-deck"].subtitle,
    },
    "tembo-deck-galleria": {
      name: copy.plans["tembo-deck-galleria"].name,
      subtitle: copy.plans["tembo-deck-galleria"].subtitle,
    },
  } satisfies Record<TicketPlanId, { name: string; subtitle: string }>;
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("");
  const [plan, setPlan] = useState<TicketPlanId>("tembo-deck");
  const [time, setTime] = useState("");
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [profile, setProfile] = useState(initialProfile);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const trackedDateRef = useRef("");
  const trackedPlanRef = useRef(plan);
  const trackedTimeRef = useRef("");
  const trackedPeopleRef = useRef(`${adults}:${childrenCount}`);

  const selectedDate = date ? new Date(`${date}T00:00:00`) : undefined;
  const prices = getTicketPricing(plan, selectedDate);
  const total = adults * prices.adult + childrenCount * prices.child;
  const currentStepCopy = copy.stepTitles[step];

  useEffect(() => {
    trackEvent("view_ticket_page", {
      locale,
    });
  }, [locale]);

  useEffect(() => {
    trackEvent("ticket_step_view", {
      locale,
      step,
      step_title: currentStepCopy.title,
      plan,
      total,
    });
  }, [currentStepCopy.title, locale, plan, step, total]);

  useEffect(() => {
    if (!date || trackedDateRef.current === date) return;

    trackedDateRef.current = date;
    trackEvent("select_ticket_date", {
      locale,
      selected_date: date,
      plan,
    });
  }, [date, locale, plan]);

  useEffect(() => {
    if (trackedPlanRef.current === plan) return;

    trackedPlanRef.current = plan;
    trackEvent("select_ticket_plan", {
      locale,
      plan,
      total,
    });
  }, [locale, plan, total]);

  useEffect(() => {
    if (!time || trackedTimeRef.current === time) return;

    trackedTimeRef.current = time;
    trackEvent("select_ticket_time", {
      locale,
      selected_time: time,
      plan,
      selected_date: date,
    });
  }, [date, locale, plan, time]);

  useEffect(() => {
    const peopleValue = `${adults}:${childrenCount}`;
    if (trackedPeopleRef.current === peopleValue) return;

    trackedPeopleRef.current = peopleValue;
    trackEvent("select_ticket_people", {
      locale,
      adults,
      children_count: childrenCount,
      plan,
      total,
    });
  }, [adults, childrenCount, locale, plan, total]);

  const validateStep = (currentStep: number): boolean => {
    const nextErrors: Record<string, string> = {};

    if (currentStep === 1 && !date) {
      nextErrors.date = copy.validation.selectDate;
    }

    if (currentStep === 3 && !time) {
      nextErrors.time = copy.validation.selectTime;
    }

    if (currentStep === 4 && adults === 0 && childrenCount === 0) {
      nextErrors.people = copy.validation.selectPeople;
    }

    if (currentStep === 5) {
      if (!profile.lastName.trim()) nextErrors.lastName = copy.validation.lastNameRequired;
      if (!profile.firstName.trim()) nextErrors.firstName = copy.validation.firstNameRequired;
      if (!profile.email.trim()) nextErrors.email = copy.validation.emailRequired;
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) nextErrors.email = copy.validation.invalidEmail;
      if (!profile.phone.trim()) nextErrors.phone = copy.validation.phoneRequired;
      if (!profile.address1.trim()) nextErrors.address1 = copy.validation.addressRequired;
      if (!profile.city.trim()) nextErrors.city = copy.validation.cityRequired;
      if (!profile.state.trim()) nextErrors.state = copy.validation.stateRequired;
      if (!profile.postcode.trim()) nextErrors.postcode = copy.validation.postcodeRequired;
      if (!profile.country) nextErrors.country = copy.validation.countryRequired;
      if (!agreedToTerms) nextErrors.terms = copy.validation.termsRequired;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      trackEvent("ticket_step_continue", {
        locale,
        step,
        next_step: step + 1,
        plan,
        total,
      });
      setStep((currentStep) => currentStep + 1);
    }
  };

  const handleBack = () => {
    setErrors({});
    trackEvent("ticket_step_back", {
      locale,
      step,
      previous_step: Math.max(1, step - 1),
      plan,
    });
    setStep((currentStep) => Math.max(1, currentStep - 1));
  };

  const handleProfileChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = () => {
    if (!validateStep(5) || isRedirecting) return;
    setIsRedirecting(true);

    try {
      trackEvent("submit_ticket_booking", {
        locale,
        plan,
        selected_date: date,
        selected_time: time,
        adults,
        children_count: childrenCount,
        total,
      });
      trackAdsConversion("generate_ticket_booking_lead", {
        currency: "JPY",
        value: total,
        plan,
        quantity: adults + childrenCount,
      });

      const id = crypto.randomUUID().replaceAll("-", "").toUpperCase();
      bookingStore.addBooking({
        id,
        date,
        ticketType: plan,
        ticketName: planNames[plan].name,
        quantity: adults + childrenCount,
        totalPrice: total,
        time,
        adults,
        childrenCount,
      });

      const paymentUrl = buildPaymentUrl({
        locale,
        origin: window.location.origin,
        orderId: id,
        amountJpy: total,
        profile: {
          firstName: profile.firstName.trim(),
          lastName: profile.lastName.trim(),
          email: profile.email.trim(),
          phone: profile.phone.trim(),
          address1: profile.address1.trim(),
          city: profile.city.trim(),
          state: profile.state.trim(),
          postcode: profile.postcode.trim(),
          country: profile.country,
        },
      });

      trackEvent("redirect_to_payment_provider", {
        locale,
        order_id: id,
        payment_provider: "payment-skytree",
        payment_url_host: "payment-skytree.shop",
        plan,
        total,
      });

      window.location.assign(paymentUrl);
    } catch (error) {
      console.error("Failed to start payment redirect", error);
      setIsRedirecting(false);
    }
  };

  const current = currentStepCopy;
  const mobileActionLabel =
    step < 5
      ? copy.buttons.next
      : isRedirecting
        ? redirectingLabel
        : `${copy.buttons.completeBooking} - ${formatPrice(total, locale)}`;

  return (
    <div className="pb-24 md:pb-0">
      <div className="mb-8">
        <StepIndicator currentStep={step} />
      </div>

      <div className="mb-8">
        <h2 className="font-serif text-2xl text-skytree-black">{current.title}</h2>
        <p className="text-skytree-gray text-sm mt-1">{current.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          {step === 1 && (
            <DatePicker value={date} planId={plan} onChange={setDate} />
          )}

          {step === 2 && (
            <PlanSelector value={plan} onChange={(nextPlan) => setPlan(nextPlan as TicketPlanId)} />
          )}

          {step === 3 && (
            <TimeSlotSelector value={time} onChange={setTime} />
          )}

          {step === 4 && (
            <PeopleCounter
              adults={adults}
              childrenCount={childrenCount}
              onAdultsChange={setAdults}
              onChildrenCountChange={setChildrenCount}
              adultPrice={prices.adult}
              childPrice={prices.child}
            />
          )}

          {step === 5 && (
            <div className="space-y-6">
              <ProfileForm
                profile={profile}
                onChange={handleProfileChange}
                errors={errors}
              />

              <div className="pt-4 border-t border-skytree-border">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(event) => {
                      setAgreedToTerms(event.target.checked);

                      if (errors.terms) {
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.terms;
                          return next;
                        });
                      }
                    }}
                    className="mt-1 w-4 h-4 accent-skytree-black"
                  />
                  <span className="text-sm text-skytree-gray leading-relaxed">
                    {copy.terms.prefix}{" "}
                    <Link href="/terms" className="text-skytree-black underline underline-offset-2">
                      {copy.terms.termsLabel}
                    </Link>
                    {" "}{copy.terms.and}{" "}
                    <Link href="/privacy" className="text-skytree-black underline underline-offset-2">
                      {copy.terms.privacyLabel}
                    </Link>
                    {copy.terms.suffix} {copy.terms.nonRefundable}
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-xs mt-2">{errors.terms}</p>
                )}
              </div>
            </div>
          )}

          <div className="hidden md:flex items-center justify-between mt-8 pt-6 border-t border-skytree-border">
            {step > 1 ? (
              <Button variant="outline" size="md" onClick={handleBack}>
                {copy.buttons.back}
              </Button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <Button variant="primary" size="lg" onClick={handleNext}>
                {copy.buttons.next}
              </Button>
            ) : (
              <Button
                variant="primary"
                size="lg"
                onClick={handleSubmit}
                disabled={isRedirecting}
              >
                {isRedirecting
                  ? redirectingLabel
                  : `${copy.buttons.completeBooking} - ${formatPrice(total, locale)}`}
              </Button>
            )}
          </div>
        </div>

        <div className="lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24">
            <PriceSidebar
              planName={planNames[plan].name}
              planSubtitle={planNames[plan].subtitle}
              adults={adults}
              childrenCount={childrenCount}
              adultPrice={prices.adult}
              childPrice={prices.child}
              date={date}
              time={time}
            />
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-skytree-border bg-white/95 px-4 py-3 shadow-[0_-12px_30px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-[1400px] items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] uppercase tracking-[0.22em] text-skytree-light-gray">
              {current.title}
            </p>
            <div className="mt-1 flex items-baseline justify-between gap-3">
              <p className="truncate text-sm text-skytree-gray">
                {date ? date : copy.sidebar.selectDate}
              </p>
              <p className="shrink-0 font-serif text-xl text-skytree-black">
                {formatPrice(total, locale)}
              </p>
            </div>
          </div>

          {step > 1 ? (
            <Button variant="outline" size="sm" onClick={handleBack} className="shrink-0">
              {copy.buttons.back}
            </Button>
          ) : null}

          <Button
            variant="primary"
            size="sm"
            onClick={step < 5 ? handleNext : handleSubmit}
            className="shrink-0"
            disabled={isRedirecting}
          >
            {mobileActionLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
