import type { Locale } from "@/lib/i18n";

type TransportLine = {
  name: string;
  station: string;
  exit: string;
  walk: string;
};

type TransportOption = {
  key: "train" | "bus" | "car" | "bike";
  title: string;
  lines: TransportLine[];
};

type FAQCategory = {
  category: string;
  questions: Array<{ q: string; a: string }>;
};

type FloorGuideSection = {
  title: string;
  rows: Array<{
    id: string;
    towerLabel: string;
    floorLabel: string;
    subtitle?: string;
    href: string;
    features: string[];
    activeBackground?: boolean;
  }>;
};

export type AccessCopy = {
  title: string;
  subtitle: string;
  addressLabel: string;
  address: string;
  openingHoursTitle: string;
  deckLabel: string;
  galleriaLabel: string;
  hoursNote: string;
  accessibilityTitle: string;
  accessibilityBody: string;
  groupTitle: string;
  groupBody: string;
  transport: TransportOption[];
};

export type CorporateCopy = {
  title: string;
  subtitle: string;
  cards: Array<{ title: string; body: string }>;
  factsTitle: string;
  facts: Array<{ label: string; value: string }>;
  sectionTitle: string;
  links: Array<{ eyebrow: string; title: string; href: string }>;
  contactTitle: string;
  contactBody: string;
};

export type FAQCopy = {
  title: string;
  subtitle: string;
  categories: FAQCategory[];
  supportTitle: string;
  supportBody: string;
  supportPhoneNote: string;
};

export type OpenHoursCopy = {
  title: string;
  subtitle: string;
  noteLabels: {
    address: string;
    lastEntry: string;
    previousMonth: string;
    nextMonth: string;
    today: string;
    sunday: string;
    saturday: string;
    important: string;
  };
  monthNames: string[];
  dayNames: string[];
  address: string;
  lastEntryValue: string;
  monthNotes: Record<number, string>;
  infoBlocks: Array<{ title: string; body: string }>;
};

export type FloorGuideCopy = {
  eyebrow: string;
  title: string;
  description: string;
  floorWord: string;
  towerImageAlt: string;
  introCards: Array<{ title: string; copy: string; image: string }>;
  footer: {
    eyebrow: string;
    title: string;
    description: string;
    tags: string[];
  };
  sectionTitles: {
    temboGalleria: string;
    temboDeck: string;
    ground: string;
  };
  rows: FloorGuideSection["rows"];
  towerGroups: string[];
  facilitiesTitleMap: Record<string, string>;
  mapCta: string;
  facilitiesCta: string;
  wifiLabel: string;
  batteryLabel: string;
};

const sharedAccessTransport: TransportOption[] = [
  {
    key: "train",
    title: "By Train",
    lines: [
      { name: "Tokyo Metro Hanzomon Line", station: "Oshiage Station", exit: "Exit A3", walk: "Direct connection" },
      { name: "Toei Asakusa Line", station: "Oshiage Station", exit: "Exit A2", walk: "Direct connection" },
      { name: "Tobu Skytree Line", station: "Tokyo Skytree Station", exit: "-", walk: "Direct connection" },
      { name: "Keisei Oshiage Line", station: "Oshiage Station", exit: "-", walk: "Direct connection" },
    ],
  },
  {
    key: "bus",
    title: "By Bus",
    lines: [
      { name: "Toei Bus", station: "Tokyo Skytree Town", exit: "-", walk: "1 min" },
      { name: "Keisei Bus", station: "Tokyo Skytree Town", exit: "-", walk: "1 min" },
    ],
  },
  {
    key: "car",
    title: "By Car",
    lines: [{ name: "Parking available", station: "B1F-B3F", exit: "-", walk: "Elevator to entrance" }],
  },
  {
    key: "bike",
    title: "By Bicycle",
    lines: [{ name: "Bicycle parking", station: "Ground level", exit: "-", walk: "2 min to entrance" }],
  },
];

const sharedFloorRows: FloorGuideCopy["rows"] = [
  {
    id: "450",
    towerLabel: "450m",
    floorLabel: "Floor 450",
    href: "/floors#450",
    features: ["Sorakara point", "High-Definition Digital Telescope"],
  },
  {
    id: "445",
    towerLabel: "445m",
    floorLabel: "Floor 445",
    href: "/floors#445",
    features: ["Commemorative Photography"],
  },
  {
    id: "350",
    towerLabel: "350m",
    floorLabel: "Floor 350",
    href: "/floors#350",
    features: [
      "Tembo Galleria ticket counter",
      "SKYTREE CAFE",
      "Commemorative Photography",
      "High-Definition Digital Telescope",
      "W1SH RIBBON",
      "SKYTREE ROUND THEATER",
    ],
  },
  {
    id: "345",
    towerLabel: "345m",
    floorLabel: "Floor 345",
    href: "/floors#345",
    features: ["Sky Restaurant 634", "SKYTREE SHOP", "SKYTREE post"],
    activeBackground: true,
  },
  {
    id: "340",
    towerLabel: "340m",
    floorLabel: "Floor 340",
    href: "/floors#340",
    features: ["SKYTREE CAFE", "Glass Floor", "Commemorative Photography"],
  },
  {
    id: "5",
    towerLabel: "5F",
    floorLabel: "5F Exit Floor",
    href: "/floors#5",
    features: ["SKYTREE SHOP", "Mobile Battery Rental", "Foreign Currency Exchange"],
  },
  {
    id: "4",
    towerLabel: "4F",
    floorLabel: "4th Floor Entrance",
    href: "/floors#4",
    features: ["Ticket Counter", "Mobile Battery Rental", "Sumida River Digital Picture Scroll", "SKYTREE ARCHIVES"],
    activeBackground: true,
  },
  {
    id: "2-3",
    towerLabel: "2F / 3F",
    floorLabel: "2F / 3F",
    href: "/floors#2-3",
    features: ["TOKYO Solamachi"],
  },
  {
    id: "1",
    towerLabel: "1F",
    floorLabel: "1F Group Floor",
    href: "/floors#1",
    features: ["Group Ticket Counter", "SKYTREE GALLERY", "Group Bus Parking", "Prayer area"],
  },
  {
    id: "b1",
    towerLabel: "B1F",
    floorLabel: "B1F",
    href: "/floors#b1",
    features: ["Underground Car Parking"],
  },
];

const localizedFloorRows: Partial<Record<Locale, FloorGuideCopy["rows"]>> = {
  ja: [
    {
      id: "450",
      towerLabel: "450m",
      floorLabel: "450階",
      href: "/floors#450",
      features: ["ソラカラポイント", "高解像度デジタル望遠鏡"],
    },
    {
      id: "445",
      towerLabel: "445m",
      floorLabel: "445階",
      href: "/floors#445",
      features: ["記念フォトサービス"],
    },
    {
      id: "350",
      towerLabel: "350m",
      floorLabel: "350階",
      href: "/floors#350",
      features: [
        "天望回廊チケットカウンター",
        "SKYTREE CAFE",
        "記念フォトサービス",
        "高解像度デジタル望遠鏡",
        "W1SH RIBBON",
        "SKYTREE ROUND THEATER",
      ],
    },
    {
      id: "345",
      towerLabel: "345m",
      floorLabel: "345階",
      href: "/floors#345",
      features: ["Sky Restaurant 634", "SKYTREE SHOP", "SKYTREE post"],
      activeBackground: true,
    },
    {
      id: "340",
      towerLabel: "340m",
      floorLabel: "340階",
      href: "/floors#340",
      features: ["SKYTREE CAFE", "ガラス床", "記念フォトサービス"],
    },
    {
      id: "5",
      towerLabel: "5F",
      floorLabel: "5F 出口フロア",
      href: "/floors#5",
      features: ["SKYTREE SHOP", "モバイルバッテリーレンタル", "外貨両替"],
    },
    {
      id: "4",
      towerLabel: "4F",
      floorLabel: "4F 入場フロア",
      href: "/floors#4",
      features: ["チケットカウンター", "モバイルバッテリーレンタル", "隅田川デジタル絵巻", "SKYTREE ARCHIVES"],
      activeBackground: true,
    },
    {
      id: "2-3",
      towerLabel: "2F / 3F",
      floorLabel: "2F / 3F",
      href: "/floors#2-3",
      features: ["東京ソラマチ"],
    },
    {
      id: "1",
      towerLabel: "1F",
      floorLabel: "1F 団体フロア",
      href: "/floors#1",
      features: ["団体チケットカウンター", "SKYTREE GALLERY", "団体バス駐車場", "祈祷室"],
    },
    {
      id: "b1",
      towerLabel: "B1F",
      floorLabel: "B1F",
      href: "/floors#b1",
      features: ["地下駐車場"],
    },
  ],
  ko: [
    {
      id: "450",
      towerLabel: "450m",
      floorLabel: "450층",
      href: "/floors#450",
      features: ["소라카라 포인트", "고해상도 디지털 망원경"],
    },
    {
      id: "445",
      towerLabel: "445m",
      floorLabel: "445층",
      href: "/floors#445",
      features: ["기념 촬영 서비스"],
    },
    {
      id: "350",
      towerLabel: "350m",
      floorLabel: "350층",
      href: "/floors#350",
      features: [
        "템보 갤러리아 티켓 카운터",
        "SKYTREE CAFE",
        "기념 촬영 서비스",
        "고해상도 디지털 망원경",
        "W1SH RIBBON",
        "SKYTREE ROUND THEATER",
      ],
    },
    {
      id: "345",
      towerLabel: "345m",
      floorLabel: "345층",
      href: "/floors#345",
      features: ["Sky Restaurant 634", "SKYTREE SHOP", "SKYTREE post"],
      activeBackground: true,
    },
    {
      id: "340",
      towerLabel: "340m",
      floorLabel: "340층",
      href: "/floors#340",
      features: ["SKYTREE CAFE", "유리 바닥", "기념 촬영 서비스"],
    },
    {
      id: "5",
      towerLabel: "5F",
      floorLabel: "5F 출구 플로어",
      href: "/floors#5",
      features: ["SKYTREE SHOP", "보조배터리 대여", "외화 환전"],
    },
    {
      id: "4",
      towerLabel: "4F",
      floorLabel: "4F 입장 플로어",
      href: "/floors#4",
      features: ["티켓 카운터", "보조배터리 대여", "스미다강 디지털 그림 두루마리", "SKYTREE ARCHIVES"],
      activeBackground: true,
    },
    {
      id: "2-3",
      towerLabel: "2F / 3F",
      floorLabel: "2F / 3F",
      href: "/floors#2-3",
      features: ["TOKYO Solamachi"],
    },
    {
      id: "1",
      towerLabel: "1F",
      floorLabel: "1F 단체 플로어",
      href: "/floors#1",
      features: ["단체 티켓 카운터", "SKYTREE GALLERY", "단체 버스 주차", "기도 공간"],
    },
    {
      id: "b1",
      towerLabel: "B1F",
      floorLabel: "B1F",
      href: "/floors#b1",
      features: ["지하 주차장"],
    },
  ],
  "zh-CN": [
    {
      id: "450",
      towerLabel: "450m",
      floorLabel: "450层",
      href: "/floors#450",
      features: ["Sorakara Point", "高解析度数码望远镜"],
    },
    {
      id: "445",
      towerLabel: "445m",
      floorLabel: "445层",
      href: "/floors#445",
      features: ["纪念摄影服务"],
    },
    {
      id: "350",
      towerLabel: "350m",
      floorLabel: "350层",
      href: "/floors#350",
      features: [
        "天望回廊售票柜台",
        "SKYTREE CAFE",
        "纪念摄影服务",
        "高解析度数码望远镜",
        "W1SH RIBBON",
        "SKYTREE ROUND THEATER",
      ],
    },
    {
      id: "345",
      towerLabel: "345m",
      floorLabel: "345层",
      href: "/floors#345",
      features: ["Sky Restaurant 634", "SKYTREE SHOP", "SKYTREE post"],
      activeBackground: true,
    },
    {
      id: "340",
      towerLabel: "340m",
      floorLabel: "340层",
      href: "/floors#340",
      features: ["SKYTREE CAFE", "玻璃地板", "纪念摄影服务"],
    },
    {
      id: "5",
      towerLabel: "5F",
      floorLabel: "5F 出口楼层",
      href: "/floors#5",
      features: ["SKYTREE SHOP", "移动电源租借", "外币兑换"],
    },
    {
      id: "4",
      towerLabel: "4F",
      floorLabel: "4F 入场楼层",
      href: "/floors#4",
      features: ["售票柜台", "移动电源租借", "隅田川数码画卷", "SKYTREE ARCHIVES"],
      activeBackground: true,
    },
    {
      id: "2-3",
      towerLabel: "2F / 3F",
      floorLabel: "2F / 3F",
      href: "/floors#2-3",
      features: ["TOKYO Solamachi"],
    },
    {
      id: "1",
      towerLabel: "1F",
      floorLabel: "1F 团体楼层",
      href: "/floors#1",
      features: ["团体售票柜台", "SKYTREE GALLERY", "团体巴士停车区", "祈祷室"],
    },
    {
      id: "b1",
      towerLabel: "B1F",
      floorLabel: "B1F",
      href: "/floors#b1",
      features: ["地下停车场"],
    },
  ],
  "zh-TW": [
    {
      id: "450",
      towerLabel: "450m",
      floorLabel: "450樓",
      href: "/floors#450",
      features: ["Sorakara Point", "高解析度數位望遠鏡"],
    },
    {
      id: "445",
      towerLabel: "445m",
      floorLabel: "445樓",
      href: "/floors#445",
      features: ["紀念攝影服務"],
    },
    {
      id: "350",
      towerLabel: "350m",
      floorLabel: "350樓",
      href: "/floors#350",
      features: [
        "天望回廊售票櫃台",
        "SKYTREE CAFE",
        "紀念攝影服務",
        "高解析度數位望遠鏡",
        "W1SH RIBBON",
        "SKYTREE ROUND THEATER",
      ],
    },
    {
      id: "345",
      towerLabel: "345m",
      floorLabel: "345樓",
      href: "/floors#345",
      features: ["Sky Restaurant 634", "SKYTREE SHOP", "SKYTREE post"],
      activeBackground: true,
    },
    {
      id: "340",
      towerLabel: "340m",
      floorLabel: "340樓",
      href: "/floors#340",
      features: ["SKYTREE CAFE", "玻璃地板", "紀念攝影服務"],
    },
    {
      id: "5",
      towerLabel: "5F",
      floorLabel: "5F 出口樓層",
      href: "/floors#5",
      features: ["SKYTREE SHOP", "行動電源租借", "外幣兌換"],
    },
    {
      id: "4",
      towerLabel: "4F",
      floorLabel: "4F 入場樓層",
      href: "/floors#4",
      features: ["售票櫃台", "行動電源租借", "隅田川數位畫卷", "SKYTREE ARCHIVES"],
      activeBackground: true,
    },
    {
      id: "2-3",
      towerLabel: "2F / 3F",
      floorLabel: "2F / 3F",
      href: "/floors#2-3",
      features: ["TOKYO Solamachi"],
    },
    {
      id: "1",
      towerLabel: "1F",
      floorLabel: "1F 團體樓層",
      href: "/floors#1",
      features: ["團體售票櫃台", "SKYTREE GALLERY", "團體巴士停車區", "祈禱室"],
    },
    {
      id: "b1",
      towerLabel: "B1F",
      floorLabel: "B1F",
      href: "/floors#b1",
      features: ["地下停車場"],
    },
  ],
  th: [
    {
      id: "450",
      towerLabel: "450m",
      floorLabel: "ชั้น 450",
      href: "/floors#450",
      features: ["Sorakara Point", "กล้องส่องทางไกลดิจิทัลความละเอียดสูง"],
    },
    {
      id: "445",
      towerLabel: "445m",
      floorLabel: "ชั้น 445",
      href: "/floors#445",
      features: ["บริการถ่ายภาพที่ระลึก"],
    },
    {
      id: "350",
      towerLabel: "350m",
      floorLabel: "ชั้น 350",
      href: "/floors#350",
      features: [
        "เคาน์เตอร์บัตร Tembo Galleria",
        "SKYTREE CAFE",
        "บริการถ่ายภาพที่ระลึก",
        "กล้องส่องทางไกลดิจิทัลความละเอียดสูง",
        "W1SH RIBBON",
        "SKYTREE ROUND THEATER",
      ],
    },
    {
      id: "345",
      towerLabel: "345m",
      floorLabel: "ชั้น 345",
      href: "/floors#345",
      features: ["Sky Restaurant 634", "SKYTREE SHOP", "SKYTREE post"],
      activeBackground: true,
    },
    {
      id: "340",
      towerLabel: "340m",
      floorLabel: "ชั้น 340",
      href: "/floors#340",
      features: ["SKYTREE CAFE", "พื้นกระจก", "บริการถ่ายภาพที่ระลึก"],
    },
    {
      id: "5",
      towerLabel: "5F",
      floorLabel: "5F ชั้นทางออก",
      href: "/floors#5",
      features: ["SKYTREE SHOP", "เช่าแบตเตอรี่สำรอง", "แลกเปลี่ยนเงินตราต่างประเทศ"],
    },
    {
      id: "4",
      towerLabel: "4F",
      floorLabel: "4F ชั้นทางเข้า",
      href: "/floors#4",
      features: ["เคาน์เตอร์บัตร", "เช่าแบตเตอรี่สำรอง", "ภาพม้วนดิจิทัลแม่น้ำสุมิดะ", "SKYTREE ARCHIVES"],
      activeBackground: true,
    },
    {
      id: "2-3",
      towerLabel: "2F / 3F",
      floorLabel: "2F / 3F",
      href: "/floors#2-3",
      features: ["TOKYO Solamachi"],
    },
    {
      id: "1",
      towerLabel: "1F",
      floorLabel: "1F ชั้นกรุ๊ปทัวร์",
      href: "/floors#1",
      features: ["เคาน์เตอร์บัตรหมู่คณะ", "SKYTREE GALLERY", "ที่จอดรถบัสหมู่คณะ", "พื้นที่ละหมาด"],
    },
    {
      id: "b1",
      towerLabel: "B1F",
      floorLabel: "B1F",
      href: "/floors#b1",
      features: ["ที่จอดรถใต้ดิน"],
    },
  ],
};

const en = {
  access: {
    title: "Getting Here",
    subtitle: "Access & Directions",
    addressLabel: "Address",
    address: "1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045, Japan",
    openingHoursTitle: "Opening Hours",
    deckLabel: "Tembo Deck (350m)",
    galleriaLabel: "Tembo Galleria (450m)",
    hoursNote: "* Last admission 30 minutes before closing. Hours may vary by season.",
    accessibilityTitle: "Accessibility",
    accessibilityBody:
      "Wheelchair-accessible elevators, restrooms, and viewing areas are available throughout the facility. Staff can also help guide visitors to barrier-free routes at the entrance.",
    groupTitle: "Group Reservations",
    groupBody:
      "Larger groups should plan ahead so admission timing, elevator flow, and optional dining can be coordinated smoothly. Please call the main visitor phone line with your preferred date, group size, and accessibility needs.",
    transport: sharedAccessTransport,
  } satisfies AccessCopy,
  corporate: {
    title: "Corporate Information",
    subtitle: "Project Overview & Public Information",
    cards: [
      {
        title: "Facility Profile",
        body: "Tokyo Skytree combines broadcasting infrastructure, observation facilities, dining, retail, and visitor circulation in one integrated landmark destination in Sumida, Tokyo.",
      },
      {
        title: "Operator & Public Guidance",
        body: "Public visitor guidance is published across Tickets, Opening Hours, Floor Guide, Access, FAQ, Privacy, and Terms so guests can confirm admission, movement, and site policies before arriving.",
      },
      {
        title: "Media, Policy, and Reference",
        body: "This section consolidates the public-facing summary for the tower, including facility context, legal references, visitor policy links, and the primary information desk used across the site.",
      },
    ],
    factsTitle: "Facility Snapshot",
    facts: [
      { label: "Tower Height", value: "634 m" },
      { label: "Location", value: "1-1-2 Oshiage, Sumida-ku, Tokyo" },
      { label: "Public Opening", value: "May 22, 2012" },
      { label: "Main Uses", value: "Broadcasting, observatory, dining, retail" },
    ],
    sectionTitle: "Public Information at a Glance",
    links: [
      { eyebrow: "Visitor Operations", title: "Tickets & Admission", href: "/ticket" },
      { eyebrow: "Planning", title: "Opening Hours", href: "/open-hours" },
      { eyebrow: "Arrival", title: "Access & Directions", href: "/access" },
      { eyebrow: "Policy Reference", title: "Privacy Policy", href: "/privacy" },
      { eyebrow: "Legal", title: "Terms of Use", href: "/terms" },
      { eyebrow: "Visitor Help", title: "FAQ & Guidance", href: "/faq" },
    ],
    contactTitle: "Contact",
    contactBody:
      "For visitor policies, admission planning, access questions, or public information related to the tower, please use the linked guidance pages first and contact the information desk by phone during service hours for live assistance.",
  } satisfies CorporateCopy,
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything You Need to Know",
    categories: [
      {
        category: "Tickets & Booking",
        questions: [
          {
            q: "How far in advance can I book tickets?",
            a: "Tickets can be booked up to three months in advance. We recommend booking early for weekends, holidays, and peak travel seasons.",
          },
          {
            q: "Can I change my visit date after booking?",
            a: "Visit-date changes should be requested as early as possible through the public phone desk and remain subject to operating conditions.",
          },
          {
            q: "What is the difference between Tembo Deck and Tembo Galleria?",
            a: "Tembo Deck is the main observatory at 350m. Tembo Galleria is the higher glass-route experience and includes access to both levels when purchased together.",
          },
        ],
      },
      {
        category: "Visiting",
        questions: [
          {
            q: "How long does a typical visit take?",
            a: "Most visitors spend around 60 to 90 minutes on the main observatory route, and longer if they include dining, shopping, or seasonal programs.",
          },
          {
            q: "Is Tokyo Skytree accessible for wheelchair users?",
            a: "Yes. Accessible elevators, restrooms, and viewing areas are available throughout the facility.",
          },
          {
            q: "What happens if the observation deck closes due to weather?",
            a: "Operations may change during strong winds, lightning, or maintenance. Guidance on refunds or rescheduling depends on the operating situation on that day.",
          },
        ],
      },
      {
        category: "Dining & Shopping",
        questions: [
          {
            q: "Are there restaurants at Tokyo Skytree?",
            a: "Yes. Floor 345 includes Sky Restaurant 634 and SKYTREE SHOP, and additional food options are available through Tokyo Solamachi.",
          },
          {
            q: "Do I need a reservation for Sky Restaurant 634?",
            a: "Advance planning is recommended, especially for dinner and popular seating times.",
          },
        ],
      },
      {
        category: "Booking Details & Privacy",
        questions: [
          {
            q: "Why do you ask for visitor details during booking?",
            a: "Visitor details help staff match the booking reference to the visit and support operational inquiries before arrival.",
          },
          {
            q: "How is my personal data used?",
            a: "Visitor details are used for booking operations, reference verification, and customer support. Please see the Privacy Policy for the current handling terms.",
          },
        ],
      },
    ],
    supportTitle: "Still Have Questions?",
    supportBody: "The visitor support phone desk is available during regular service hours.",
    supportPhoneNote: "Please have your booking reference available when you call.",
  } satisfies FAQCopy,
  openHours: {
    title: "Opening Hours",
    subtitle: "Plan Your Visit",
    noteLabels: {
      address: "Address",
      lastEntry: "Last Entry",
      previousMonth: "Previous month",
      nextMonth: "Next month",
      today: "Today",
      sunday: "Sunday",
      saturday: "Saturday",
      important: "Important Information",
    },
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    address: "1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045",
    lastEntryValue: "30 minutes before closing",
    monthNotes: {
      0: "Winter hours (Jan)",
      1: "Winter hours (Feb)",
      2: "Spring hours begin (Mar)",
      3: "Spring hours (Apr)",
      4: "Spring hours (May)",
      5: "Summer hours begin (Jun)",
      6: "Summer hours (Jul)",
      7: "Summer hours (Aug)",
      8: "Autumn hours begin (Sep)",
      9: "Autumn hours (Oct)",
      10: "Autumn hours (Nov)",
      11: "Winter hours begin (Dec)",
    },
    infoBlocks: [
      {
        title: "Operating Hours May Change",
        body: "Hours can change due to weather, maintenance, or special events. Please check the official website before your visit.",
      },
      {
        title: "Holiday Schedule",
        body: "Tokyo Skytree is open year-round, including national holidays. Extended hours may apply during major holiday periods.",
      },
      {
        title: "Tembo Galleria Hours",
        body: "Tembo Galleria operations may differ from Tembo Deck depending on the day. Last entry remains 30 minutes before closing.",
      },
      {
        title: "Restaurant Reservations",
        body: "Sky Restaurant 634 is best planned in advance, especially for peak dining periods and popular seating times.",
      },
    ],
  } satisfies OpenHoursCopy,
  floorGuide: {
    eyebrow: "Floor Guide",
    title: "Facility Floor Guide",
    description: "From the ground level up to the observation decks, explore the layout and key attractions inside the building.",
    floorWord: "Floor",
    towerImageAlt: "Tokyo Skytree tower guide illustration",
    introCards: [
      {
        title: "Tembo Galleria",
        copy: "From 445 meters above ground to Floor 450, Tembo Galleria offers a continuous tube-shaped glass walkway.",
        image: "/images/floors/img_floor450_01.webp",
      },
      {
        title: "Breathtaking views that stretch nearly 70 km",
        copy: "Enjoy sweeping views that reveal Tokyo's vast scale and stretch far into the skyline.",
        image: "/images/floors/img_floor350_01.webp",
      },
      {
        title: "Tembo Deck (Floor 350)",
        copy: "The Tembo Deck offers a spacious, airy atmosphere with tall glass panels and uninterrupted city views.",
        image: "/images/floors/img_floor340_01.webp",
      },
    ],
    footer: {
      eyebrow: "Ground Floors",
      title: "Final stop: 5F to B1F",
      description: "Retail, entrance flow, gallery access, services, and the practical side of the visit all gather here.",
      tags: ["5F Exit", "4F Entry", "1F Group", "B1F Parking"],
    },
    sectionTitles: {
      temboGalleria: "TOKYO SKYTREE Tembo Galleria",
      temboDeck: "TOKYO SKYTREE Tembo Deck",
      ground: "B1F to 5F floors",
    },
    rows: sharedFloorRows,
    towerGroups: [
      "TOKYO SKYTREE Tembo Galleria",
      "TOKYO SKYTREE Tembo Deck",
      "1st, 4th, and 5th floors",
    ],
    facilitiesTitleMap: {
      women: "Women's restroom",
      men: "Men's restroom",
      accessible: "Accessible restroom",
      "priority-elevator": "Wheelchair and stroller-priority elevator",
      aed: "Automated External Defibrillator (AED)",
      nursing: "Nursing room",
      wifi: "Free Wi-Fi",
      battery: "Mobile battery rental",
    },
    mapCta: "View on digital map",
    facilitiesCta: "View facilities and services",
    wifiLabel: "FREE Wi-Fi",
    batteryLabel: "Mobile battery rental 1F, 4F, 5F",
  } satisfies FloorGuideCopy,
};

const localizations: Record<Locale, {
  access: AccessCopy;
  corporate: CorporateCopy;
  faq: FAQCopy;
  openHours: OpenHoursCopy;
  floorGuide: FloorGuideCopy;
}> = {
  en,
  ja: {
    ...en,
    access: { ...en.access, title: "アクセス", subtitle: "行き方・交通案内", openingHoursTitle: "営業時間", accessibilityTitle: "バリアフリー", groupTitle: "団体利用", addressLabel: "住所" },
    corporate: { ...en.corporate, title: "法人情報", subtitle: "プロジェクト概要・公開情報", factsTitle: "施設概要", sectionTitle: "公開情報の一覧", contactTitle: "お問い合わせ" },
    faq: { ...en.faq, title: "よくある質問", subtitle: "ご来場前に知っておきたいこと", supportTitle: "まだ質問がありますか？", supportBody: "来場案内に関するお問い合わせは、営業時間内に電話窓口をご利用ください。", supportPhoneNote: "お電話の際は予約番号をご用意ください。" },
    openHours: {
      ...en.openHours,
      title: "営業時間",
      subtitle: "来場計画",
      noteLabels: { ...en.openHours.noteLabels, address: "住所", lastEntry: "最終入場", previousMonth: "前月", nextMonth: "翌月", today: "本日", sunday: "日曜", saturday: "土曜", important: "ご案内" },
      monthNames: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
      dayNames: ["日","月","火","水","木","金","土"],
      lastEntryValue: "閉館30分前まで",
    },
    floorGuide: {
      ...en.floorGuide,
      eyebrow: "フロアガイド",
      title: "施設フロアガイド",
      description: "地上階から展望フロアまで、館内レイアウトと主要スポットをまとめて確認できます。",
      floorWord: "フロア",
      towerImageAlt: "東京スカイツリーのフロアガイドイラスト",
      introCards: [
        {
          title: "天望回廊",
          copy: "地上445メートルから450階へ続く、ガラスに包まれた空中回廊を体験できます。",
          image: "/images/floors/img_floor450_01.webp",
        },
        {
          title: "約70km先まで広がる大パノラマ",
          copy: "東京のスケールを一望できる、開放感あふれる眺望が広がります。",
          image: "/images/floors/img_floor350_01.webp",
        },
        {
          title: "天望デッキ（350階）",
          copy: "大きなガラス面とゆったりした回遊空間で、街並みをのびやかに楽しめます。",
          image: "/images/floors/img_floor340_01.webp",
        },
      ],
      footer: {
        eyebrow: "低層フロア",
        title: "5FからB1Fまで",
        description: "ショップ、入場動線、ギャラリー、各種サービスなど、来場の実用面が集まるフロアです。",
        tags: ["5F 出口", "4F 入場", "1F 団体", "B1F 駐車場"],
      },
      sectionTitles: {
        temboGalleria: "TOKYO SKYTREE 天望回廊",
        temboDeck: "TOKYO SKYTREE 天望デッキ",
        ground: "B1F〜5F フロア",
      },
      rows: localizedFloorRows.ja ?? sharedFloorRows,
      towerGroups: ["TOKYO SKYTREE 天望回廊", "TOKYO SKYTREE 天望デッキ", "1F・4F・5F フロア"],
      facilitiesTitleMap: {
        women: "女性用トイレ",
        men: "男性用トイレ",
        accessible: "多目的トイレ",
        "priority-elevator": "車いす・ベビーカー優先エレベーター",
        aed: "AED",
        nursing: "授乳室",
        wifi: "FREE Wi-Fi",
        battery: "モバイルバッテリーレンタル",
      },
      mapCta: "デジタルマップを見る",
      facilitiesCta: "施設・サービスを見る",
      wifiLabel: "FREE Wi-Fi",
      batteryLabel: "モバイルバッテリーレンタル 1F・4F・5F",
    },
  },
  ko: {
    ...en,
    access: { ...en.access, title: "오시는 길", subtitle: "교통 및 접근 안내", openingHoursTitle: "운영 시간", accessibilityTitle: "접근성", groupTitle: "단체 방문", addressLabel: "주소" },
    corporate: { ...en.corporate, title: "기업 정보", subtitle: "프로젝트 개요 및 공개 정보", factsTitle: "시설 개요", sectionTitle: "공개 정보 한눈에 보기", contactTitle: "연락처" },
    faq: { ...en.faq, title: "자주 묻는 질문", subtitle: "방문 전 알아두면 좋은 정보", supportTitle: "아직 궁금한 점이 있나요?", supportBody: "방문 관련 문의는 운영 시간 내 전화 안내 창구를 이용해 주세요.", supportPhoneNote: "전화 시 예약 번호를 준비해 주세요." },
    openHours: {
      ...en.openHours,
      title: "운영 시간",
      subtitle: "방문 계획",
      noteLabels: { ...en.openHours.noteLabels, address: "주소", lastEntry: "최종 입장", previousMonth: "이전 달", nextMonth: "다음 달", today: "오늘", sunday: "일요일", saturday: "토요일", important: "중요 안내" },
      monthNames: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
      dayNames: ["일","월","화","수","목","금","토"],
      lastEntryValue: "마감 30분 전",
    },
    floorGuide: {
      ...en.floorGuide,
      eyebrow: "플로어 가이드",
      title: "시설 플로어 가이드",
      description: "지상층부터 전망층까지, 건물 내부 구성과 주요 포인트를 한눈에 살펴볼 수 있습니다.",
      floorWord: "층",
      towerImageAlt: "도쿄 스카이트리 플로어 가이드 일러스트",
      introCards: [
        {
          title: "템보 갤러리아",
          copy: "지상 445미터에서 450층으로 이어지는 유리 회랑형 전망 동선을 경험할 수 있습니다.",
          image: "/images/floors/img_floor450_01.webp",
        },
        {
          title: "약 70km까지 펼쳐지는 파노라마",
          copy: "도쿄의 규모를 한눈에 보여 주는 넓고 시원한 전망이 펼쳐집니다.",
          image: "/images/floors/img_floor350_01.webp",
        },
        {
          title: "템보 데크 (350층)",
          copy: "넓은 유리면과 개방적인 동선 덕분에 도시 풍경을 여유롭게 감상할 수 있습니다.",
          image: "/images/floors/img_floor340_01.webp",
        },
      ],
      footer: {
        eyebrow: "저층 플로어",
        title: "5F부터 B1F까지",
        description: "상점, 입장 동선, 갤러리, 각종 서비스 등 방문의 실용적인 요소가 모여 있는 구역입니다.",
        tags: ["5F 출구", "4F 입장", "1F 단체", "B1F 주차"],
      },
      sectionTitles: {
        temboGalleria: "TOKYO SKYTREE 템보 갤러리아",
        temboDeck: "TOKYO SKYTREE 템보 데크",
        ground: "B1F ~ 5F 플로어",
      },
      rows: localizedFloorRows.ko ?? sharedFloorRows,
      towerGroups: ["TOKYO SKYTREE 템보 갤러리아", "TOKYO SKYTREE 템보 데크", "1F, 4F, 5F 플로어"],
      facilitiesTitleMap: {
        women: "여성 화장실",
        men: "남성 화장실",
        accessible: "다목적 화장실",
        "priority-elevator": "휠체어·유모차 우선 엘리베이터",
        aed: "자동심장충격기(AED)",
        nursing: "수유실",
        wifi: "FREE Wi-Fi",
        battery: "보조배터리 대여",
      },
      mapCta: "디지털 지도 보기",
      facilitiesCta: "시설 및 서비스 보기",
      wifiLabel: "FREE Wi-Fi",
      batteryLabel: "보조배터리 대여 1F, 4F, 5F",
    },
  },
  "zh-CN": {
    ...en,
    access: { ...en.access, title: "交通指南", subtitle: "到达方式与路线", openingHoursTitle: "营业时间", accessibilityTitle: "无障碍服务", groupTitle: "团体参观", addressLabel: "地址" },
    corporate: { ...en.corporate, title: "企业信息", subtitle: "项目概览与公开信息", factsTitle: "设施概览", sectionTitle: "公开信息总览", contactTitle: "联系方式" },
    faq: { ...en.faq, title: "常见问题", subtitle: "到访前需要了解的内容", supportTitle: "还有疑问？", supportBody: "如需访客协助，请在服务时间内拨打电话咨询。", supportPhoneNote: "致电时请准备好预约编号。" },
    openHours: {
      ...en.openHours,
      title: "营业时间",
      subtitle: "安排您的行程",
      noteLabels: { ...en.openHours.noteLabels, address: "地址", lastEntry: "最后入场", previousMonth: "上个月", nextMonth: "下个月", today: "今天", sunday: "周日", saturday: "周六", important: "重要信息" },
      monthNames: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
      dayNames: ["日","一","二","三","四","五","六"],
      lastEntryValue: "闭馆前 30 分钟",
    },
    floorGuide: {
      ...en.floorGuide,
      eyebrow: "楼层指南",
      title: "设施楼层指南",
      description: "从地面楼层到展望台，快速了解建筑布局与主要看点。",
      floorWord: "层",
      towerImageAlt: "东京晴空塔楼层导览示意图",
      introCards: [
        {
          title: "天望回廊",
          copy: "从地上 445 米一路延伸到 450 层的玻璃回廊，是最具高空感的动线之一。",
          image: "/images/floors/img_floor450_01.webp",
        },
        {
          title: "可远眺近 70 公里的大视野",
          copy: "宽阔的全景视野让人直观感受到东京的尺度与延展。",
          image: "/images/floors/img_floor350_01.webp",
        },
        {
          title: "天望甲板（350层）",
          copy: "大面积玻璃与开阔动线让整体观景氛围更轻松通透。",
          image: "/images/floors/img_floor340_01.webp",
        },
      ],
      footer: {
        eyebrow: "低层楼层",
        title: "5F 到 B1F",
        description: "商店、入场动线、画廊与实用服务大多集中在这些楼层。",
        tags: ["5F 出口", "4F 入场", "1F 团体", "B1F 停车场"],
      },
      sectionTitles: {
        temboGalleria: "TOKYO SKYTREE 天望回廊",
        temboDeck: "TOKYO SKYTREE 天望甲板",
        ground: "B1F 到 5F 楼层",
      },
      rows: localizedFloorRows["zh-CN"] ?? sharedFloorRows,
      towerGroups: ["TOKYO SKYTREE 天望回廊", "TOKYO SKYTREE 天望甲板", "1F、4F 与 5F 楼层"],
      facilitiesTitleMap: {
        women: "女洗手间",
        men: "男洗手间",
        accessible: "无障碍洗手间",
        "priority-elevator": "轮椅与婴儿车优先电梯",
        aed: "自动体外除颤器（AED）",
        nursing: "母婴室",
        wifi: "FREE Wi-Fi",
        battery: "移动电源租借",
      },
      mapCta: "查看电子地图",
      facilitiesCta: "查看设施与服务",
      wifiLabel: "FREE Wi-Fi",
      batteryLabel: "移动电源租借 1F、4F、5F",
    },
  },
  "zh-TW": {
    ...en,
    access: { ...en.access, title: "交通指南", subtitle: "前往方式與路線", openingHoursTitle: "營業時間", accessibilityTitle: "無障礙服務", groupTitle: "團體參觀", addressLabel: "地址" },
    corporate: { ...en.corporate, title: "企業資訊", subtitle: "專案概要與公開資訊", factsTitle: "設施概覽", sectionTitle: "公開資訊總覽", contactTitle: "聯絡方式" },
    faq: { ...en.faq, title: "常見問題", subtitle: "到訪前需要了解的內容", supportTitle: "還有疑問？", supportBody: "如需訪客協助，請於服務時間內撥打電話洽詢。", supportPhoneNote: "來電時請準備好預約編號。" },
    openHours: {
      ...en.openHours,
      title: "營業時間",
      subtitle: "安排您的行程",
      noteLabels: { ...en.openHours.noteLabels, address: "地址", lastEntry: "最後入場", previousMonth: "上個月", nextMonth: "下個月", today: "今天", sunday: "週日", saturday: "週六", important: "重要資訊" },
      monthNames: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
      dayNames: ["日","一","二","三","四","五","六"],
      lastEntryValue: "閉館前 30 分鐘",
    },
    floorGuide: {
      ...en.floorGuide,
      eyebrow: "樓層指南",
      title: "設施樓層指南",
      description: "從地面樓層到展望台，快速掌握建築配置與主要看點。",
      floorWord: "樓",
      towerImageAlt: "東京晴空塔樓層導覽示意圖",
      introCards: [
        {
          title: "天望回廊",
          copy: "從地上 445 公尺一路延伸到 450 樓的玻璃回廊，是最具高空感的動線之一。",
          image: "/images/floors/img_floor450_01.webp",
        },
        {
          title: "可遠眺近 70 公里的大視野",
          copy: "寬闊的全景視野讓人直觀感受到東京的尺度與延展。",
          image: "/images/floors/img_floor350_01.webp",
        },
        {
          title: "天望甲板（350樓）",
          copy: "大片玻璃與開闊動線讓整體觀景氛圍更輕鬆通透。",
          image: "/images/floors/img_floor340_01.webp",
        },
      ],
      footer: {
        eyebrow: "低樓層",
        title: "5F 到 B1F",
        description: "商店、入場動線、畫廊與實用服務多集中在這些樓層。",
        tags: ["5F 出口", "4F 入場", "1F 團體", "B1F 停車場"],
      },
      sectionTitles: {
        temboGalleria: "TOKYO SKYTREE 天望回廊",
        temboDeck: "TOKYO SKYTREE 天望甲板",
        ground: "B1F 到 5F 樓層",
      },
      rows: localizedFloorRows["zh-TW"] ?? sharedFloorRows,
      towerGroups: ["TOKYO SKYTREE 天望回廊", "TOKYO SKYTREE 天望甲板", "1F、4F 與 5F 樓層"],
      facilitiesTitleMap: {
        women: "女洗手間",
        men: "男洗手間",
        accessible: "無障礙洗手間",
        "priority-elevator": "輪椅與嬰兒車優先電梯",
        aed: "自動體外除顫器（AED）",
        nursing: "哺乳室",
        wifi: "FREE Wi-Fi",
        battery: "行動電源租借",
      },
      mapCta: "查看數位地圖",
      facilitiesCta: "查看設施與服務",
      wifiLabel: "FREE Wi-Fi",
      batteryLabel: "行動電源租借 1F、4F、5F",
    },
  },
  th: {
    ...en,
    access: { ...en.access, title: "การเดินทาง", subtitle: "การเข้าถึงและเส้นทาง", openingHoursTitle: "เวลาเปิดทำการ", accessibilityTitle: "การเข้าถึงสำหรับทุกคน", groupTitle: "การเข้าชมแบบกลุ่ม", addressLabel: "ที่อยู่" },
    corporate: { ...en.corporate, title: "ข้อมูลองค์กร", subtitle: "ภาพรวมโครงการและข้อมูลสาธารณะ", factsTitle: "ภาพรวมสถานที่", sectionTitle: "ข้อมูลสาธารณะโดยสรุป", contactTitle: "ติดต่อ" },
    faq: { ...en.faq, title: "คำถามที่พบบ่อย", subtitle: "สิ่งที่ควรรู้ก่อนเข้าชม", supportTitle: "ยังมีคำถามอยู่หรือไม่?", supportBody: "หากต้องการความช่วยเหลือ โปรดโทรติดต่อในเวลาทำการของศูนย์ข้อมูล", supportPhoneNote: "กรุณาเตรียมหมายเลขการจองเมื่อโทร" },
    openHours: {
      ...en.openHours,
      title: "เวลาเปิดทำการ",
      subtitle: "วางแผนการเข้าชม",
      noteLabels: { ...en.openHours.noteLabels, address: "ที่อยู่", lastEntry: "เข้ารอบสุดท้าย", previousMonth: "เดือนก่อน", nextMonth: "เดือนถัดไป", today: "วันนี้", sunday: "วันอาทิตย์", saturday: "วันเสาร์", important: "ข้อมูลสำคัญ" },
      monthNames: ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],
      dayNames: ["อา","จ","อ","พ","พฤ","ศ","ส"],
      lastEntryValue: "ก่อนปิด 30 นาที",
    },
    floorGuide: {
      ...en.floorGuide,
      eyebrow: "แผนผังชั้น",
      title: "คู่มือชั้นภายในอาคาร",
      description: "ตั้งแต่ชั้นพื้นดินไปจนถึงจุดชมวิว สำรวจผังอาคารและจุดสำคัญภายในแบบรวดเร็ว",
      floorWord: "ชั้น",
      towerImageAlt: "ภาพแผนผังชั้นของ Tokyo Skytree",
      introCards: [
        {
          title: "Tembo Galleria",
          copy: "ทางเดินกระจกที่ต่อเนื่องจากความสูง 445 เมตรขึ้นไปถึงชั้น 450 คือหนึ่งในส่วนที่ให้ความรู้สึกสูงและโปร่งที่สุด",
          image: "/images/floors/img_floor450_01.webp",
        },
        {
          title: "วิวพาโนรามาที่ทอดยาวเกือบ 70 กม.",
          copy: "มุมมองกว้างไกลช่วยให้เห็นสเกลของกรุงโตเกียวได้อย่างชัดเจน",
          image: "/images/floors/img_floor350_01.webp",
        },
        {
          title: "Tembo Deck (ชั้น 350)",
          copy: "กระจกบานใหญ่และทางเดินที่เปิดโล่งทำให้การชมวิวในโซนนี้ดูสบายและต่อเนื่อง",
          image: "/images/floors/img_floor340_01.webp",
        },
      ],
      footer: {
        eyebrow: "ชั้นล่าง",
        title: "ตั้งแต่ 5F ถึง B1F",
        description: "ร้านค้า ทางเข้า แกลเลอรี และบริการสำคัญต่าง ๆ จะรวมอยู่ในโซนชั้นล่างเหล่านี้",
        tags: ["5F ทางออก", "4F ทางเข้า", "1F กรุ๊ป", "B1F ที่จอดรถ"],
      },
      sectionTitles: {
        temboGalleria: "TOKYO SKYTREE Tembo Galleria",
        temboDeck: "TOKYO SKYTREE Tembo Deck",
        ground: "ชั้น B1F ถึง 5F",
      },
      rows: localizedFloorRows.th ?? sharedFloorRows,
      towerGroups: ["TOKYO SKYTREE Tembo Galleria", "TOKYO SKYTREE Tembo Deck", "ชั้น 1F, 4F และ 5F"],
      facilitiesTitleMap: {
        women: "ห้องน้ำหญิง",
        men: "ห้องน้ำชาย",
        accessible: "ห้องน้ำอเนกประสงค์",
        "priority-elevator": "ลิฟต์สำหรับผู้ใช้วีลแชร์และรถเข็นเด็ก",
        aed: "เครื่อง AED",
        nursing: "ห้องให้นม",
        wifi: "FREE Wi-Fi",
        battery: "เช่าแบตเตอรี่สำรอง",
      },
      mapCta: "ดูแผนที่ดิจิทัล",
      facilitiesCta: "ดูสิ่งอำนวยความสะดวกและบริการ",
      wifiLabel: "FREE Wi-Fi",
      batteryLabel: "เช่าแบตเตอรี่สำรอง 1F, 4F, 5F",
    },
  },
};

export function getLocalizedPageCopy(locale: Locale) {
  return localizations[locale] ?? localizations.en;
}
