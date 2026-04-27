import type { Locale } from "@/lib/i18n";

const fallbackSiteUrl = "https://www.tokyo-skytree.example.com";

function normalizeSiteUrl(value?: string) {
  if (!value) return fallbackSiteUrl;
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
    defaultTitle: "TOKYO SKYTREE | Official Tickets & Information",
    template: "%s | Tokyo Skytree",
    description:
      "Tokyo Skytree is the tallest tower in Japan at 634 meters. Book tickets for the Tembo Deck and Tembo Galleria, and explore panoramic views, dining, and seasonal events.",
    ogAlt: "Tokyo Skytree panoramic view",
    localeTag: "en_US",
    jsonLdDescription:
      "Tokyo Skytree is a broadcasting and observation tower at 634 meters, the tallest tower in Japan and one of the tallest structures in the world.",
  },
  ja: {
    defaultTitle: "TOKYO SKYTREE | 公式チケット・施設案内",
    template: "%s | TOKYO SKYTREE",
    description:
      "東京スカイツリーは高さ634メートル、日本一高いタワーです。天望デッキや天望回廊のチケット、眺望、グルメ、季節イベント情報をまとめて確認できます。",
    ogAlt: "東京スカイツリーのパノラマビュー",
    localeTag: "ja_JP",
    jsonLdDescription:
      "東京スカイツリーは高さ634メートルの電波塔・展望施設で、日本一高いタワーとして東京の景観と観光体験を支えています。",
  },
  ko: {
    defaultTitle: "TOKYO SKYTREE | 공식 티켓 및 이용 안내",
    template: "%s | TOKYO SKYTREE",
    description:
      "도쿄 스카이트리는 높이 634미터의 일본 최고 타워입니다. 템보 데크와 템보 갤러리아 티켓, 전망, 다이닝, 시즌 이벤트 정보를 한곳에서 확인하세요.",
    ogAlt: "도쿄 스카이트리 파노라마 전망",
    localeTag: "ko_KR",
    jsonLdDescription:
      "도쿄 스카이트리는 높이 634미터의 전파·전망 타워로, 일본에서 가장 높은 타워이자 도쿄를 대표하는 전망 명소입니다.",
  },
  "zh-CN": {
    defaultTitle: "TOKYO SKYTREE | 官方门票与设施信息",
    template: "%s | TOKYO SKYTREE",
    description:
      "东京晴空塔高 634 米，是日本最高的塔。可在此查看天望甲板与天望回廊门票、观景、餐饮与季节活动信息。",
    ogAlt: "东京晴空塔全景视野",
    localeTag: "zh_CN",
    jsonLdDescription:
      "东京晴空塔是一座高 634 米的广播与观景塔，是日本最高的塔，也是东京最具代表性的地标之一。",
  },
  "zh-TW": {
    defaultTitle: "TOKYO SKYTREE | 官方門票與設施資訊",
    template: "%s | TOKYO SKYTREE",
    description:
      "東京晴空塔高 634 公尺，是日本最高的塔。可在此查看天望甲板與天望回廊門票、觀景、餐飲與季節活動資訊。",
    ogAlt: "東京晴空塔全景視野",
    localeTag: "zh_TW",
    jsonLdDescription:
      "東京晴空塔是一座高 634 公尺的廣播與觀景塔，是日本最高的塔，也是東京最具代表性的地標之一。",
  },
  th: {
    defaultTitle: "TOKYO SKYTREE | ข้อมูลตั๋วและการเข้าชมอย่างเป็นทางการ",
    template: "%s | TOKYO SKYTREE",
    description:
      "Tokyo Skytree สูง 634 เมตรและเป็นหอคอยที่สูงที่สุดในญี่ปุ่น ตรวจสอบบัตรเข้าชม Tembo Deck และ Tembo Galleria รวมถึงข้อมูลวิว ร้านอาหาร และอีเวนต์ตามฤดูกาลได้ที่นี่",
    ogAlt: "วิวพาโนรามาของ Tokyo Skytree",
    localeTag: "th_TH",
    jsonLdDescription:
      "Tokyo Skytree เป็นหอส่งสัญญาณและหอชมวิวสูง 634 เมตร สูงที่สุดในญี่ปุ่น และเป็นหนึ่งในแลนด์มาร์กสำคัญของกรุงโตเกียว",
  },
};
