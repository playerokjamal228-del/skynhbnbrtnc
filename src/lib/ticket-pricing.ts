export type TicketPlanId = "tembo-deck" | "tembo-deck-galleria";

const PLAN_BASE_PRICES: Record<TicketPlanId, { adult: number; child: number }> = {
  "tembo-deck": { adult: 2200, child: 1100 },
  "tembo-deck-galleria": { adult: 3400, child: 1700 },
};

const WEEKDAY_SURCHARGES = {
  weekday: { adult: 0, child: 0 },
  friday: { adult: 400, child: 200 },
  saturday: { adult: 600, child: 300 },
  sunday: { adult: 1000, child: 500 },
};

function getDayBucket(date: Date) {
  const day = date.getDay();

  if (day === 0) return WEEKDAY_SURCHARGES.sunday;
  if (day === 6) return WEEKDAY_SURCHARGES.saturday;
  if (day === 5) return WEEKDAY_SURCHARGES.friday;

  return WEEKDAY_SURCHARGES.weekday;
}

export function getTicketPricing(planId: TicketPlanId, date?: Date) {
  const base = PLAN_BASE_PRICES[planId] ?? PLAN_BASE_PRICES["tembo-deck"];
  const surcharge = date ? getDayBucket(date) : WEEKDAY_SURCHARGES.weekday;

  return {
    adult: base.adult + surcharge.adult,
    child: base.child + surcharge.child,
  };
}
