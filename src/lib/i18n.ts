export const supportedLocales = [
  "ja",
  "en",
  "ko",
  "zh-CN",
  "zh-TW",
  "th",
] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";
export const localeStorageKey = "skytree_locale";

export const localeOptions: Array<{ value: Locale; label: string }> = [
  { value: "ja", label: "日本語" },
  { value: "en", label: "English" },
  { value: "ko", label: "한국어" },
  { value: "zh-CN", label: "简体中文" },
  { value: "zh-TW", label: "繁體中文" },
  { value: "th", label: "ไทย" },
];

interface ShellCopy {
  nav: Record<string, string>;
  controls: {
    language: string;
    toggleMenu: string;
  };
  footer: {
    visit: string;
    enjoy: string;
    info: string;
    about: string;
    nightViews: string;
    accessibility: string;
    groupReservations: string;
    partners: string;
    copyright: string;
  };
  quickAccess: Record<string, string>;
}

const shellCopy: Record<Locale, ShellCopy> = {
  ja: {
    nav: {
      "/ticket": "チケット",
      "/open-hours": "営業時間",
      "/floors": "フロアガイド",
      "/events": "イベント",
      "/enjoy": "楽しみ方",
      "/access": "アクセス",
      "/faq": "FAQ",
      "/corporate": "法人情報",
      "/privacy": "プライバシー",
      "/terms": "利用規約",
    },
    controls: {
      language: "言語",
      toggleMenu: "メニューを切り替える",
    },
    footer: {
      visit: "訪問案内",
      enjoy: "楽しむ",
      info: "情報",
      about: "概要",
      nightViews: "夜景",
      accessibility: "バリアフリー",
      groupReservations: "団体予約",
      partners: "公式パートナー",
      copyright: "© TOKYO SKYTREE. All Rights Reserved.",
    },
    quickAccess: {
      "/ticket": "チケット",
      "/open-hours": "営業時間",
      "/floors": "フロアガイド",
      "/events": "イベント",
      "/enjoy": "楽しみ方",
      "/access": "アクセス",
      "/faq": "FAQ / お問い合わせ",
      "/corporate": "法人情報",
    },
  },
  en: {
    nav: {
      "/ticket": "Tickets",
      "/open-hours": "Opening Hours",
      "/floors": "Floor Guide",
      "/events": "Events",
      "/enjoy": "How to Enjoy",
      "/access": "Getting Here",
      "/faq": "FAQ",
      "/corporate": "Corporate",
      "/privacy": "Privacy Policy",
      "/terms": "Terms of Use",
    },
    controls: {
      language: "Language",
      toggleMenu: "Toggle menu",
    },
    footer: {
      visit: "Visit",
      enjoy: "Enjoy",
      info: "Info",
      about: "About",
      nightViews: "Night Views",
      accessibility: "Accessibility",
      groupReservations: "Group Reservations",
      partners: "Official Partners",
      copyright: "© TOKYO SKYTREE. All Rights Reserved.",
    },
    quickAccess: {
      "/ticket": "Tickets",
      "/open-hours": "Opening Hours",
      "/floors": "Floor Guide",
      "/events": "Events",
      "/enjoy": "How to Enjoy",
      "/access": "Getting Here",
      "/faq": "Contact / FAQ",
      "/corporate": "Corporate",
    },
  },
  ko: {
    nav: {
      "/ticket": "티켓",
      "/open-hours": "운영 시간",
      "/floors": "층별 안내",
      "/events": "이벤트",
      "/enjoy": "즐기는 방법",
      "/access": "오시는 길",
      "/faq": "FAQ",
      "/corporate": "기업 정보",
      "/privacy": "개인정보 처리방침",
      "/terms": "이용 약관",
    },
    controls: {
      language: "언어",
      toggleMenu: "메뉴 전환",
    },
    footer: {
      visit: "방문 안내",
      enjoy: "즐기기",
      info: "정보",
      about: "소개",
      nightViews: "야경",
      accessibility: "배리어프리",
      groupReservations: "단체 예약",
      partners: "공식 파트너",
      copyright: "© TOKYO SKYTREE. All Rights Reserved.",
    },
    quickAccess: {
      "/ticket": "티켓",
      "/open-hours": "운영 시간",
      "/floors": "층별 안내",
      "/events": "이벤트",
      "/enjoy": "즐기는 방법",
      "/access": "오시는 길",
      "/faq": "문의 / FAQ",
      "/corporate": "기업 정보",
    },
  },
  "zh-CN": {
    nav: {
      "/ticket": "门票",
      "/open-hours": "营业时间",
      "/floors": "楼层指南",
      "/events": "活动",
      "/enjoy": "游玩方式",
      "/access": "交通指南",
      "/faq": "常见问题",
      "/corporate": "企业信息",
      "/privacy": "隐私政策",
      "/terms": "使用条款",
    },
    controls: {
      language: "语言",
      toggleMenu: "切换菜单",
    },
    footer: {
      visit: "参观",
      enjoy: "游玩",
      info: "信息",
      about: "关于",
      nightViews: "夜景",
      accessibility: "无障碍设施",
      groupReservations: "团体预约",
      partners: "官方合作伙伴",
      copyright: "© TOKYO SKYTREE. All Rights Reserved.",
    },
    quickAccess: {
      "/ticket": "门票",
      "/open-hours": "营业时间",
      "/floors": "楼层指南",
      "/events": "活动",
      "/enjoy": "游玩方式",
      "/access": "交通指南",
      "/faq": "联系 / 常见问题",
      "/corporate": "企业信息",
    },
  },
  "zh-TW": {
    nav: {
      "/ticket": "門票",
      "/open-hours": "營業時間",
      "/floors": "樓層指南",
      "/events": "活動",
      "/enjoy": "遊玩方式",
      "/access": "交通指南",
      "/faq": "常見問題",
      "/corporate": "企業資訊",
      "/privacy": "隱私權政策",
      "/terms": "使用條款",
    },
    controls: {
      language: "語言",
      toggleMenu: "切換選單",
    },
    footer: {
      visit: "參觀",
      enjoy: "遊玩",
      info: "資訊",
      about: "關於",
      nightViews: "夜景",
      accessibility: "無障礙設施",
      groupReservations: "團體預約",
      partners: "官方合作夥伴",
      copyright: "© TOKYO SKYTREE. All Rights Reserved.",
    },
    quickAccess: {
      "/ticket": "門票",
      "/open-hours": "營業時間",
      "/floors": "樓層指南",
      "/events": "活動",
      "/enjoy": "遊玩方式",
      "/access": "交通指南",
      "/faq": "聯絡 / 常見問題",
      "/corporate": "企業資訊",
    },
  },
  th: {
    nav: {
      "/ticket": "บัตรเข้าชม",
      "/open-hours": "เวลาเปิดทำการ",
      "/floors": "แผนผังชั้น",
      "/events": "อีเวนต์",
      "/enjoy": "วิธีเที่ยวชม",
      "/access": "การเดินทาง",
      "/faq": "คำถามที่พบบ่อย",
      "/corporate": "ข้อมูลองค์กร",
      "/privacy": "นโยบายความเป็นส่วนตัว",
      "/terms": "ข้อกำหนดการใช้งาน",
    },
    controls: {
      language: "ภาษา",
      toggleMenu: "สลับเมนู",
    },
    footer: {
      visit: "การเข้าชม",
      enjoy: "การเที่ยวชม",
      info: "ข้อมูล",
      about: "เกี่ยวกับ",
      nightViews: "วิวกลางคืน",
      accessibility: "การเข้าถึง",
      groupReservations: "การจองแบบหมู่คณะ",
      partners: "พันธมิตรอย่างเป็นทางการ",
      copyright: "© TOKYO SKYTREE. All Rights Reserved.",
    },
    quickAccess: {
      "/ticket": "บัตรเข้าชม",
      "/open-hours": "เวลาเปิดทำการ",
      "/floors": "แผนผังชั้น",
      "/events": "อีเวนต์",
      "/enjoy": "วิธีเที่ยวชม",
      "/access": "การเดินทาง",
      "/faq": "ติดต่อ / FAQ",
      "/corporate": "ข้อมูลองค์กร",
    },
  },
};

export function normalizeLocale(value: string | null | undefined): Locale {
  if (!value) return defaultLocale;

  const match = supportedLocales.find(
    (locale) => locale.toLowerCase() === value.toLowerCase()
  );

  return match ?? defaultLocale;
}

export function getShellCopy(locale: Locale) {
  return shellCopy[locale] ?? shellCopy[defaultLocale];
}
