"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "@/components/layout/locale-provider";
import { trackEvent } from "@/lib/analytics";
import { getLocalizedContent } from "@/lib/localized-content";

const failureCopy = {
  en: {
    title: "Payment was not completed",
    description:
      "The payment provider returned you to the site before the transaction finished. You can review the booking details and try again.",
    primaryCta: "Return to tickets",
    secondaryCta: "Go to homepage",
  },
  ja: {
    title: "決済は完了しませんでした",
    description:
      "取引完了前に決済プロバイダーからサイトへ戻りました。予約内容を確認して、もう一度お試しください。",
    primaryCta: "チケットへ戻る",
    secondaryCta: "トップへ戻る",
  },
  ko: {
    title: "결제가 완료되지 않았습니다",
    description:
      "거래가 완료되기 전에 결제 페이지에서 사이트로 돌아왔습니다. 예약 내용을 확인한 뒤 다시 시도해 주세요.",
    primaryCta: "티켓으로 돌아가기",
    secondaryCta: "홈으로 가기",
  },
  "zh-CN": {
    title: "支付尚未完成",
    description:
      "您在交易完成前从支付页面返回了网站。请检查预订信息后再次尝试。",
    primaryCta: "返回门票页面",
    secondaryCta: "返回首页",
  },
  "zh-TW": {
    title: "付款尚未完成",
    description:
      "您在交易完成前從付款頁面返回了網站。請確認預訂資訊後再試一次。",
    primaryCta: "返回門票頁面",
    secondaryCta: "返回首頁",
  },
  th: {
    title: "การชำระเงินยังไม่เสร็จสิ้น",
    description:
      "คุณถูกพากลับมายังเว็บไซต์ก่อนที่ธุรกรรมจะเสร็จสมบูรณ์ กรุณาตรวจสอบรายละเอียดการจองแล้วลองอีกครั้ง",
    primaryCta: "กลับไปหน้าบัตร",
    secondaryCta: "กลับหน้าแรก",
  },
} as const;

const commonCtas = {
  en: { tickets: "Back to tickets", home: "Return home" },
  ja: { tickets: "チケットへ戻る", home: "トップへ戻る" },
  ko: { tickets: "티켓으로 돌아가기", home: "홈으로 가기" },
  "zh-CN": { tickets: "返回门票页面", home: "返回首页" },
  "zh-TW": { tickets: "返回門票頁面", home: "返回首頁" },
  th: { tickets: "กลับไปหน้าบัตร", home: "กลับหน้าแรก" },
} as const;

interface OrderStatusPageProps {
  status: "success" | "failed";
}

export function OrderStatusPage({ status }: OrderStatusPageProps) {
  const { locale } = useLocale();
  const searchParams = useSearchParams();
  const successCopy = getLocalizedContent(locale).ticket.success;
  const orderId = searchParams.get("order_id") ?? "";
  const failed = failureCopy[locale];
  const ctas = commonCtas[locale];

  useEffect(() => {
    trackEvent(status === "success" ? "payment_return_success" : "payment_return_failed", {
      locale,
      order_id: orderId,
    });
  }, [locale, orderId, status]);

  const title = status === "success" ? successCopy.title : failed.title;
  const description =
    status === "success" ? successCopy.keepReference : failed.description;
  const primaryCta = status === "success" ? ctas.tickets : failed.primaryCta;
  const secondaryCta = status === "success" ? ctas.home : failed.secondaryCta;

  return (
    <section className="mx-auto max-w-[900px] px-4 py-16 md:px-8 md:py-24">
      <div className="rounded-[28px] border border-skytree-border bg-white px-6 py-10 text-center shadow-[0_20px_55px_rgba(20,20,20,0.06)] md:px-10">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-skytree-gold/10">
          {status === "success" ? (
            <svg className="h-10 w-10 text-skytree-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-10 w-10 text-skytree-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        <h1 className="font-serif text-3xl text-skytree-black md:text-4xl">
          {title}
        </h1>

        {orderId ? (
          <p className="mt-3 text-sm text-skytree-gray">
            {successCopy.reference}:{" "}
            <span className="font-mono text-skytree-black">{orderId}</span>
          </p>
        ) : null}

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-skytree-gray md:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/ticket"
            className="inline-flex min-w-[200px] items-center justify-center rounded-sm bg-skytree-gold px-6 py-3 text-sm uppercase tracking-wider text-skytree-black transition-all duration-200 hover:bg-skytree-gold-light"
          >
            {primaryCta}
          </Link>
          <Link
            href="/"
            className="inline-flex min-w-[200px] items-center justify-center rounded-sm border border-skytree-gold px-6 py-3 text-sm uppercase tracking-wider text-skytree-gold transition-all duration-200 hover:bg-skytree-gold hover:text-skytree-black"
          >
            {secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
