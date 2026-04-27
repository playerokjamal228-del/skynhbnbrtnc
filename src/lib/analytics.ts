"use client";

export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
  googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
} as const;

const attributionStorageKey = "skytree_attribution";
const attributionCookieKey = "skytree_attribution";
const attributionMaxAge = 60 * 60 * 24 * 90;
const attributionParams = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "wbraid",
  "gbraid",
  "msclkid",
] as const;

type AnalyticsValue = string | number | boolean | null | undefined;
export type AnalyticsPayload = Record<string, AnalyticsValue>;
export type AttributionData = Partial<Record<(typeof attributionParams)[number], string>>;
export interface WebVitalMetric {
  name: string;
  value: number;
  rating?: string;
  delta: number;
  id: string;
}

declare global {
  interface Window {
    dataLayer: Array<Record<string, AnalyticsValue>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function canUseBrowserStorage() {
  return typeof window !== "undefined";
}

function toCookieValue(value: string) {
  return encodeURIComponent(value);
}

function fromCookieValue(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function normalizePayload(payload: AnalyticsPayload) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined)
  );
}

export function readAttribution(): AttributionData {
  if (!canUseBrowserStorage()) return {};

  const fromStorage = window.localStorage.getItem(attributionStorageKey);
  if (fromStorage) {
    try {
      return JSON.parse(fromStorage) as AttributionData;
    } catch {
      window.localStorage.removeItem(attributionStorageKey);
    }
  }

  const fromCookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${attributionCookieKey}=`))
    ?.split("=")[1];

  if (!fromCookie) return {};

  try {
    return JSON.parse(fromCookieValue(fromCookie)) as AttributionData;
  } catch {
    return {};
  }
}

export function persistAttribution(searchParams: URLSearchParams) {
  if (!canUseBrowserStorage()) return {};

  const existing = readAttribution();
  const next = { ...existing };

  for (const key of attributionParams) {
    const value = searchParams.get(key);
    if (value) {
      next[key] = value;
    }
  }

  if (!Object.keys(next).length) return existing;

  const serialized = JSON.stringify(next);
  window.localStorage.setItem(attributionStorageKey, serialized);
  document.cookie = `${attributionCookieKey}=${toCookieValue(serialized)}; path=/; max-age=${attributionMaxAge}; samesite=lax`;
  return next;
}

export function initializeDataLayer(locale?: string) {
  if (!canUseBrowserStorage()) return;

  window.dataLayer = window.dataLayer || [];

  if (locale) {
    window.dataLayer.push({
      event: "analytics_ready",
      language: locale,
    });
  }
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (!canUseBrowserStorage()) return;

  const eventPayload = {
    ...normalizePayload(payload),
    ...readAttribution(),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventPayload,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventPayload);
  }
}

export function trackPageView(path: string, locale: string) {
  if (!canUseBrowserStorage()) return;

  const payload = {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
    language: locale,
  };

  trackEvent("page_view", payload);
}

export function trackWebVital(metric: WebVitalMetric) {
  trackEvent("web_vital", {
    metric_name: metric.name,
    metric_value: Math.round(metric.value),
    metric_rating: metric.rating,
    metric_delta: Math.round(metric.delta),
    metric_id: metric.id,
  });
}

export function trackAdsConversion(
  eventName: string,
  payload: AnalyticsPayload = {}
) {
  trackEvent(eventName, payload);

  if (
    !canUseBrowserStorage() ||
    typeof window.gtag !== "function" ||
    !analyticsConfig.googleAdsId ||
    !analyticsConfig.googleAdsConversionLabel
  ) {
    return;
  }

  window.gtag("event", "conversion", {
    ...normalizePayload(payload),
    send_to: `${analyticsConfig.googleAdsId}/${analyticsConfig.googleAdsConversionLabel}`,
  });
}
