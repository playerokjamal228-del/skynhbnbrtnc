"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import { useLocale } from "@/components/layout/locale-provider";
import {
  analyticsConfig,
  initializeDataLayer,
  persistAttribution,
  trackPageView,
  trackWebVital,
} from "@/lib/analytics";

function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    trackWebVital(metric);
  });

  return null;
}

export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { locale } = useLocale();
  const searchQuery = searchParams.toString();
  const pagePath = searchQuery ? `${pathname}?${searchQuery}` : pathname;
  const scriptId =
    analyticsConfig.gaMeasurementId || analyticsConfig.googleAdsId;

  useEffect(() => {
    initializeDataLayer(locale);
  }, [locale]);

  useEffect(() => {
    persistAttribution(searchParams);
  }, [searchParams]);

  useEffect(() => {
    trackPageView(pagePath, locale);
  }, [locale, pagePath]);

  return (
    <>
      {scriptId ? (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${scriptId}`}
          strategy="afterInteractive"
        />
      ) : null}

      {scriptId ? (
        <Script id="skytree-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            ${
              analyticsConfig.gaMeasurementId
                ? `gtag('config', '${analyticsConfig.gaMeasurementId}', { send_page_view: false });`
                : ""
            }
            ${
              analyticsConfig.googleAdsId
                ? `gtag('config', '${analyticsConfig.googleAdsId}');`
                : ""
            }
          `}
        </Script>
      ) : null}

      <WebVitalsReporter />
    </>
  );
}
