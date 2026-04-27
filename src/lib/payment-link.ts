import type { Locale } from "@/lib/i18n";
import { getDisplayCurrency } from "@/lib/utils";

const ENGLISH_DISPLAY_JPY_PER_USD = 150;
const PAYMENT_BASE_URL = "https://payments.techdeal24.com/connect/form";
const PAYMENT_SITE = "payments.techdeal24.com";

export interface PaymentProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

interface BuildPaymentUrlOptions {
  locale: Locale;
  origin: string;
  orderId: string;
  amountJpy: number;
  profile: PaymentProfile;
}

function formatAmount(amountJpy: number, locale: Locale) {
  const currency = getDisplayCurrency(locale);
  const amount =
    currency === "USD" ? amountJpy / ENGLISH_DISPLAY_JPY_PER_USD : amountJpy;

  return {
    currency,
    amount:
      currency === "USD" ? amount.toFixed(2) : Math.round(amount).toString(),
  };
}

export function buildPaymentUrl({
  locale,
  origin,
  orderId,
  amountJpy,
  profile,
}: BuildPaymentUrlOptions) {
  const { amount, currency } = formatAmount(amountJpy, locale);
  const params = new URLSearchParams({
    site: PAYMENT_SITE,
    icon: `${origin}/images/logo/logo-latin.png`,
    image: `${origin}/images/hero/img_kv01.webp`,
    amount,
    symbol: currency,
    vat: "0",
    riderect_success: `${origin}/order/success?order_id=${orderId}`,
    riderect_failed: `${origin}/order/failed?order_id=${orderId}`,
    riderect_back: `${origin}/ticket`,
    order_id: orderId,
    billing_first_name: profile.firstName,
    billing_last_name: profile.lastName,
    billing_address_1: profile.address1,
    billing_city: profile.city,
    billing_state: profile.state,
    billing_postcode: profile.postcode,
    billing_country: profile.country,
    billing_email: profile.email,
    billing_phone: profile.phone,
  });

  return `${PAYMENT_BASE_URL}?${params.toString()}`;
}
