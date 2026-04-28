import type { Locale } from "@/lib/i18n";

export const siteBrand = "Skytree Tickets";
export const venueName = "Tokyo Skytree";
export const primarySiteUrl = "https://skytree-tickets.com";
export const secondarySiteUrl = "https://tokyo.skytree-tickets.com";

function normalizeSiteUrl(value?: string) {
  if (!value) return primarySiteUrl;
  return value.replace(/\/+$/, "");
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL
);

export const layoutMetadata: Record<
  Locale,
  {
    defaultTitle: string;
    template: string;
    description: string;
    ogAlt: string;
    localeTag: string;
    jsonLdDescription: string;
  }
> = {
  en: {
    defaultTitle: "Skytree Tickets | Tokyo Skytree tickets and visitor guide",
    template: "%s | Skytree Tickets",
    description:
      "Book Tokyo Skytree tickets, compare Tembo Deck and Tembo Galleria options, and plan your visit with floor guides, access details, events, and FAQs on Skytree Tickets.",
    ogAlt: "Tokyo Skytree skyline view from the observatory",
    localeTag: "en_US",
    jsonLdDescription:
      "Skytree Tickets is an independent booking and visitor-planning website for Tokyo Skytree, helping guests compare ticket options, opening hours, access information, and seasonal highlights.",
  },
  ja: {
    defaultTitle: "Skytree Tickets | 東京スカイツリーのチケット予約と来場ガイド",
    template: "%s | Skytree Tickets",
    description:
      "Skytree Ticketsでは、東京スカイツリーのチケット比較、天望デッキと天望回廊の入場情報、フロア案内、アクセス、イベント、FAQをまとめて確認できます。",
    ogAlt: "東京スカイツリー展望台からの景色",
    localeTag: "ja_JP",
    jsonLdDescription:
      "Skytree Ticketsは、東京スカイツリー来場者向けの独立系チケット予約・訪問計画サイトです。券種比較、営業時間、アクセス、イベント情報をわかりやすく案内します。",
  },
  ko: {
    defaultTitle: "Skytree Tickets | 도쿄 스카이트리 티켓 예약 및 방문 가이드",
    template: "%s | Skytree Tickets",
    description:
      "Skytree Tickets에서 도쿄 스카이트리 입장권, 템보 데크 및 템보 갤러리아 옵션, 층별 안내, 교통, 이벤트, FAQ를 한눈에 확인하세요.",
    ogAlt: "도쿄 스카이트리 전망대 파노라마 뷰",
    localeTag: "ko_KR",
    jsonLdDescription:
      "Skytree Tickets는 도쿄 스카이트리 방문객을 위한 독립형 예약 및 방문 안내 사이트로, 티켓 옵션과 방문 계획 정보를 쉽게 제공합니다.",
  },
  "zh-CN": {
    defaultTitle: "Skytree Tickets | 东京晴空塔门票预订与参观指南",
    template: "%s | Skytree Tickets",
    description:
      "通过 Skytree Tickets 预览东京晴空塔门票方案，对比天望甲板与天望回廊，查看楼层指南、交通方式、活动资讯与常见问题。",
    ogAlt: "东京晴空塔观景台城市全景",
    localeTag: "zh_CN",
    jsonLdDescription:
      "Skytree Tickets 是面向东京晴空塔访客的独立门票预订与行程规划网站，提供票种比较、开放时间、交通信息与活动内容。",
  },
  "zh-TW": {
    defaultTitle: "Skytree Tickets | 東京晴空塔門票預訂與參觀指南",
    template: "%s | Skytree Tickets",
    description:
      "透過 Skytree Tickets 比較東京晴空塔票種、查看天望甲板與天望回廊資訊，並快速掌握樓層導覽、交通方式、活動與常見問題。",
    ogAlt: "東京晴空塔觀景台城市全景",
    localeTag: "zh_TW",
    jsonLdDescription:
      "Skytree Tickets 是為東京晴空塔訪客打造的獨立預訂與行程規劃網站，提供票券比較、營業資訊、交通與活動內容。",
  },
  th: {
    defaultTitle: "Skytree Tickets | จองบัตร Tokyo Skytree และคู่มือการเข้าชม",
    template: "%s | Skytree Tickets",
    description:
      "Skytree Tickets ช่วยให้คุณเปรียบเทียบบัตร Tokyo Skytree ดูข้อมูล Tembo Deck และ Tembo Galleria พร้อมคู่มือชั้น การเดินทาง อีเวนต์ และ FAQ ในที่เดียว",
    ogAlt: "วิวพาโนรามาจากจุดชมวิว Tokyo Skytree",
    localeTag: "th_TH",
    jsonLdDescription:
      "Skytree Tickets เป็นเว็บไซต์อิสระสำหรับการจองบัตรและวางแผนการเที่ยว Tokyo Skytree โดยรวมข้อมูลบัตร เวลาเปิดทำการ การเดินทาง และไฮไลต์ตามฤดูกาลไว้ในที่เดียว",
  },
};
