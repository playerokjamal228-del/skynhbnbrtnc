import type { Locale } from "@/lib/i18n";

export interface LocalizedTowerLabel {
  kind: "floor" | "meter";
  value: string;
}

export interface LocalizedFloor {
  id: string;
  category: string;
  label: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  floorGuideLink: string;
  officialLink: string;
  towerLabel: LocalizedTowerLabel[];
}

interface ExperienceCardCopy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
}

interface HomeCopy {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    scroll: string;
    imageAlt: string;
  };
  experience: {
    title: string;
    subtitle: string;
    cta: string;
    cards: ExperienceCardCopy[];
  };
  highlights: {
    title: string;
    subtitle: string;
    cta: string;
    empty: string;
  };
  news: {
    title: string;
    subtitle: string;
    cta: string;
  };
  tower: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      levels: string;
      range: string;
      flow: string;
    };
    statsValue: {
      levels: string;
      range: string;
      flow: string;
    };
    observatoryLabel: string;
    floorGuideCta: string;
    officialSiteCta: string;
  };
}

interface TicketCopy {
  page: {
    title: string;
    subtitle: string;
    promo: {
      eyebrow: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      trustBadges: string[];
      highlights: Array<{ label: string; value: string; copy: string }>;
    };
  };
  steps: string[];
  stepTitles: Record<number, { title: string; subtitle: string }>;
  buttons: {
    back: string;
    next: string;
    completeBooking: string;
    makeAnotherBooking: string;
  };
  validation: {
    selectDate: string;
    selectTime: string;
    selectPeople: string;
    lastNameRequired: string;
    firstNameRequired: string;
    emailRequired: string;
    invalidEmail: string;
    genderRequired: string;
    birthdayRequired: string;
    countryRequired: string;
    addressRequired: string;
    cityRequired: string;
    stateRequired: string;
    postcodeRequired: string;
    phoneRequired: string;
    termsRequired: string;
  };
  success: {
    title: string;
    reference: string;
    keepReference: string;
  };
  terms: {
    prefix: string;
    and: string;
    suffix: string;
    nonRefundable: string;
    termsLabel: string;
    privacyLabel: string;
  };
  plans: Record<
    "tembo-deck" | "tembo-deck-galleria",
    { name: string; subtitle: string; description: string }
  >;
  people: {
    adult: string;
    adultAge: string;
    child: string;
    childAge: string;
  };
  sidebar: {
    title: string;
    date: string;
    time: string;
    plan: string;
    total: string;
    selectDate: string;
    adult: string;
    child: string;
    currencyNote?: string;
  };
  profile: {
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    gender: string;
    birthday: string;
    country: string;
    address1: string;
    city: string;
    state: string;
    postcode: string;
    countryPlaceholder: string;
    placeholders: {
      lastName: string;
      firstName: string;
      email: string;
      phone: string;
      address1: string;
      city: string;
      state: string;
      postcode: string;
    };
    genders: Array<{ value: string; label: string }>;
  };
  datePicker: {
    dayNames: string[];
    monthNames: string[];
    weekdayRate: string;
  };
  planSelector: {
    perPerson: string;
  };
}

interface EnjoyFeature {
  id: string;
  anchorId: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  accent: string;
}

interface EnjoyIdea {
  title: string;
  copy: string;
  tags: string[];
  image: string;
}

interface EnjoyFacility {
  title: string;
  copy: string;
  image: string;
}

interface EnjoyCopy {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    focusTitle: string;
    focusBody: string;
    pairedTitle: string;
    pairedTags: string[];
  };
  jumpNav: {
    features: string;
    deck: string;
    highlights: string;
  };
  featuresHeading: {
    title: string;
    subtitle: string;
  };
  deckHeading: {
    title: string;
    subtitle: string;
  };
  highlightsHeading: {
    title: string;
    subtitle: string;
  };
  closing: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
  };
  features: EnjoyFeature[];
  observatoryIdeas: EnjoyIdea[];
  facilityGuides: EnjoyFacility[];
}

interface EventUiCopy {
  categories: Record<string, string>;
  badges: Record<string, string>;
  eventsPage: {
    eyebrow: string;
    title: string;
    description: string;
    currentStories: string;
    eventTypes: string;
    planningFocus: string;
    planningFocusValue: string;
    pickupEyebrow: string;
    pickupTitle: string;
    pickupDescription: string;
    archiveEyebrow: string;
    archiveTitle: string;
    planVisit: string;
    readStory: string;
    empty: string;
    noticesEyebrow: string;
    noticesTitle: string;
    noticesDescription: string;
  };
  detailPage: {
    back: string;
    buyTickets: string;
    officialReference: string;
    adaptedNote: string;
    overview: string;
    keyMoments: string;
    visitPlanning: string;
    visitPlanningBody: string;
    reserveAdmission: string;
    exploreFloorGuide: string;
    faqEyebrow: string;
    faqTitle: string;
    faqDescription: string;
  };
}

type LocalizedContent = {
  home: HomeCopy;
  ticket: TicketCopy;
  enjoy: EnjoyCopy;
  events: EventUiCopy;
};

const floorImages = {
  "450": "/images/floors/img_floor450_01.webp",
  "350": "/images/floors/img_floor350_01.webp",
  "345": "/images/floors/img_floor345_01.webp",
  "340": "/images/floors/img_floor340_01.webp",
} as const;

const officialSiteUrl = "https://www.tokyo-skytree.jp/";

const localizedEnjoyContent: Record<Exclude<Locale, "en">, EnjoyCopy> = {
  ja: {
    hero: {
      eyebrow: "TOKYO SKYTREEの楽しみ方ガイド",
      title: "東京スカイツリーを自分らしく楽しむための案内",
      description:
        "公式ガイドが伝えているのは、展望台に上がるだけでは終わらないということ。景色、展示、街歩き、記念日、そして何気ない細部まで含めて一日の体験が組み立てられます。",
      primaryCta: "特集を見る",
      secondaryCta: "展望台の楽しみ方",
      tertiaryCta: "来場ハイライト",
      focusTitle: "公式ガイドが重視する視点",
      focusBody: "夜景、展望台ならではの所作、周辺散策、そして塔の静かな魅力に焦点を当てています。",
      pairedTitle: "あわせて見たいページ",
      pairedTags: ["フロアガイド", "チケット", "イベント", "アクセス"],
    },
    jumpNav: {
      features: "特集",
      deck: "展望台の楽しみ方",
      highlights: "来場ハイライト",
    },
    featuresHeading: {
      title: "特集",
      subtitle: "公式の楽しみ方ガイドをもとに再構成した見どころ",
    },
    deckHeading: {
      title: "展望台をもっと楽しむヒント",
      subtitle: "小さな所作や思い出づくり、ここだけの体験",
    },
    highlightsHeading: {
      title: "来場を深める施設ガイド",
      subtitle: "滞在の印象を豊かにする空間とサービス",
    },
    closing: {
      eyebrow: "一日を上手に組み立てる",
      title: "楽しみ方ガイドは実用ページと組み合わせるとより活きます",
      description:
        "フロアマップ、チケット、イベント、アクセス情報と合わせて見ることで、当日の動き方がぐっと明確になります。",
      primaryCta: "チケットを見る",
      secondaryCta: "フロアを見る",
      tertiaryCta: "アクセスを見る",
    },
    features: [
      {
        id: "special-01",
        anchorId: "local-exploration",
        number: "#01",
        title: "TOKYO SKYTREE周辺でできること",
        description:
          "タワーの周辺エリアも体験の一部です。家族で過ごす時間、デート、買い物、そして下町らしさと現代的な東京が混ざり合う街歩きを楽しめます。",
        tags: ["家族", "デート", "ショッピング", "周辺散策"],
        image: "/images/hero/img_kv02.webp",
        accent: "bg-[#f4eee3]",
      },
      {
        id: "special-02",
        anchorId: "exclusive-experiences",
        number: "#02",
        title: "塔の中で出会える象徴的な時間",
        description:
          "眺望、食、記念撮影、展望施設ならではの演出がそろい、ここは“見るだけ”ではなく時間を過ごす場所として感じられます。",
        tags: ["写真", "眺望", "グルメ", "体験"],
        image: "/images/floors/img_floor450_02.webp",
        accent: "bg-[#f7f3eb]",
      },
      {
        id: "special-03",
        anchorId: "night-views",
        number: "#03",
        title: "夜のTOKYO SKYTREEを楽しむ",
        description:
          "夜になるとライティングや街の光で雰囲気が大きく変わり、昼とはまったく異なるロマンチックな空気が生まれます。",
        tags: ["夜景", "ライティング", "デート", "撮影スポット"],
        image: "/images/hero/img_kv04.webp",
        accent: "bg-[#111114] text-white",
      },
      {
        id: "special-04",
        anchorId: "history-culture",
        number: "#04",
        title: "時を重ねるTOKYO SKYTREE",
        description:
          "この視点では、塔が記憶や期待、技術、そして特別な時間を刻む感覚と結びついた物語として見えてきます。",
        tags: ["物語", "思い出", "余韻", "節目"],
        image: "/images/hero/img_kv01.webp",
        accent: "bg-[#efe7d7]",
      },
    ],
    observatoryIdeas: [
      {
        title: "バースデーサービス",
        copy: "展望台を記念日の舞台にすることで、いつものお出かけとは違う特別な一日にできます。",
        tags: ["記念日", "家族", "特別な瞬間"],
        image: "/images/floors/img_floor350_01.webp",
      },
      {
        title: "記念撮影",
        copy: "専用の撮影サービスがあることで、東京スカイツリーらしい一枚を持ち帰れます。",
        tags: ["写真", "思い出", "展望台"],
        image: "/images/floors/img_floor340_01.webp",
      },
      {
        title: "空から手紙を送る",
        copy: "展望施設のポストは、メッセージを景色と結びついた小さな儀式に変えてくれます。",
        tags: ["東京を感じる", "記念の時間", "特別なディテール"],
        image: "/images/floors/img_floor345_02.webp",
      },
      {
        title: "空を掃くプロフェッショナルの仕事",
        copy: "メンテナンスの仕事さえも、立ち止まって見れば印象的な“偶然の見どころ”になります。",
        tags: ["思いがけない瞬間", "家族", "空の仕事"],
        image: "/images/floors/img_floor450_01.webp",
      },
    ],
    facilityGuides: [
      {
        title: "SKYTREE ROUND THEATER",
        copy: "350階にある大画面演出で、展望体験に動きと空気感を加えてくれる空間です。",
        image: "/images/floors/img_floor350_04.webp",
      },
      {
        title: "SKYTREE ARCHIVES",
        copy: "タワーがどのように構想され建てられたのかを知るための解説的な立ち寄りポイントです。",
        image: "/images/floors/img_floor340_02.webp",
      },
      {
        title: "SKYTREE GALLERY",
        copy: "景色を見るだけでなく、展示をたどりながら塔そのものを探索する感覚を与えてくれます。",
        image: "/images/floors/img_floor345_01.webp",
      },
    ],
  },
  ko: {
    hero: {
      eyebrow: "TOKYO SKYTREE 즐기기 가이드",
      title: "도쿄 스카이트리를 나만의 방식으로 즐기는 법",
      description:
        "공식 가이드가 말하는 핵심은 단순히 전망대에 올라가는 것이 전부가 아니라는 점입니다. 풍경, 전시, 주변 거리, 데이트 요소, 그리고 작은 디테일까지 하루의 경험으로 이어집니다.",
      primaryCta: "특집 보기",
      secondaryCta: "전망대 아이디어",
      tertiaryCta: "방문 하이라이트",
      focusTitle: "공식 가이드의 핵심 포인트",
      focusBody: "야경, 전망대만의 리추얼, 주변 산책, 그리고 타워의 조용한 매력을 중심으로 구성됩니다.",
      pairedTitle: "함께 보면 좋은 페이지",
      pairedTags: ["층별 안내", "티켓", "이벤트", "오시는 길"],
    },
    jumpNav: {
      features: "특집",
      deck: "전망대",
      highlights: "방문 하이라이트",
    },
    featuresHeading: {
      title: "특집",
      subtitle: "공식 즐기기 가이드를 바탕으로 다시 구성한 포인트",
    },
    deckHeading: {
      title: "전망대를 더 잘 즐기는 방법",
      subtitle: "작은 리추얼, 추억 포인트, 그리고 타워만의 순간",
    },
    highlightsHeading: {
      title: "방문을 깊게 만드는 시설 가이드",
      subtitle: "머무는 경험을 풍부하게 만드는 공간과 서비스",
    },
    closing: {
      eyebrow: "하루 동선을 잘 계획하세요",
      title: "즐기기 가이드는 실용 페이지와 함께 볼 때 더 효과적입니다",
      description:
        "층별 안내, 티켓, 이벤트 일정, 교통 정보를 함께 보면 당일 동선이 훨씬 분명해집니다.",
      primaryCta: "티켓 보기",
      secondaryCta: "층별 보기",
      tertiaryCta: "오시는 길",
    },
    features: [
      {
        id: "special-01",
        anchorId: "local-exploration",
        number: "#01",
        title: "TOKYO SKYTREE 주변에서 즐길 거리",
        description:
          "타워 주변 지역도 경험의 일부입니다. 가족 시간, 데이트 코스, 쇼핑, 그리고 에도 분위기와 현대 도쿄가 겹치는 거리 풍경을 함께 즐길 수 있습니다.",
        tags: ["가족", "데이트", "쇼핑", "주변 지역"],
        image: "/images/hero/img_kv02.webp",
        accent: "bg-[#f4eee3]",
      },
      {
        id: "special-02",
        anchorId: "exclusive-experiences",
        number: "#02",
        title: "타워 안에서 만나는 시그니처 순간",
        description:
          "전망, 음식, 기념 사진, 전망대만의 연출이 어우러져 이곳은 단순한 뷰포인트가 아니라 머무는 장소로 느껴집니다.",
        tags: ["사진", "전망", "다이닝", "체험"],
        image: "/images/floors/img_floor450_02.webp",
        accent: "bg-[#f7f3eb]",
      },
      {
        id: "special-03",
        anchorId: "night-views",
        number: "#03",
        title: "밤의 TOKYO SKYTREE 즐기기",
        description:
          "밤이 되면 조명과 도시의 빛이 분위기를 바꾸며, 낮과는 전혀 다른 로맨틱한 무드가 펼쳐집니다.",
        tags: ["야경", "라이팅", "데이트", "포토 스폿"],
        image: "/images/hero/img_kv04.webp",
        accent: "bg-[#111114] text-white",
      },
      {
        id: "special-04",
        anchorId: "history-culture",
        number: "#04",
        title: "시간과 함께하는 TOKYO SKYTREE",
        description:
          "이 시선으로 보면 타워는 기억, 기대, 엔지니어링, 그리고 특별한 순간을 새기는 감정의 이야기로 다가옵니다.",
        tags: ["스토리", "기억", "여운", "기념일"],
        image: "/images/hero/img_kv01.webp",
        accent: "bg-[#efe7d7]",
      },
    ],
    observatoryIdeas: [
      {
        title: "생일 서비스",
        copy: "전망대를 기념일의 무대로 삼으면 평범한 방문이 아니라 기억에 남는 특별한 시간이 됩니다.",
        tags: ["특별한 날", "가족", "특별한 순간"],
        image: "/images/floors/img_floor350_01.webp",
      },
      {
        title: "기념 촬영",
        copy: "전용 촬영 포인트가 있어 도쿄 스카이트리만의 느낌이 담긴 사진을 남길 수 있습니다.",
        tags: ["사진", "추억", "전망대"],
        image: "/images/floors/img_floor340_01.webp",
      },
      {
        title: "하늘에서 편지 보내기",
        copy: "전망대의 특별 우체통은 메시지를 스카이라인과 연결된 작은 의식 같은 순간으로 바꿔 줍니다.",
        tags: ["도쿄 감성", "기념 포인트", "특별한 디테일"],
        image: "/images/floors/img_floor345_02.webp",
      },
      {
        title: "하늘을 쓸어내는 프로의 작업",
        copy: "유지관리 작업조차도 천천히 바라보면 인상적인 우연의 장면처럼 느껴집니다.",
        tags: ["예상 밖의 순간", "가족", "하늘의 작업"],
        image: "/images/floors/img_floor450_01.webp",
      },
    ],
    facilityGuides: [
      {
        title: "SKYTREE ROUND THEATER",
        copy: "350층의 대형 영상 연출로 전망 체험에 움직임과 분위기를 더하는 공간입니다.",
        image: "/images/floors/img_floor350_04.webp",
      },
      {
        title: "SKYTREE ARCHIVES",
        copy: "타워가 어떻게 구상되고 지어졌는지 맥락을 더해 주는 해설형 스폿입니다.",
        image: "/images/floors/img_floor340_02.webp",
      },
      {
        title: "SKYTREE GALLERY",
        copy: "경치만 보는 곳이 아니라, 전시를 따라가며 타워 자체를 탐험하는 감각을 더해 줍니다.",
        image: "/images/floors/img_floor345_01.webp",
      },
    ],
  },
  "zh-CN": {
    hero: {
      eyebrow: "TOKYO SKYTREE 游玩指南",
      title: "找到属于自己的东京晴空塔体验方式",
      description:
        "官方指南传达的重点是，晴空塔并不只是“上去看一眼”那么简单。景观、展示、周边街区、约会氛围，以及许多细节共同组成完整的一天。",
      primaryCta: "特色专题",
      secondaryCta: "展望台玩法",
      tertiaryCta: "到访亮点",
      focusTitle: "官方指南最强调的方向",
      focusBody: "夜景、展望台专属仪式感、周边探索，以及塔内更安静细腻的一面。",
      pairedTitle: "建议搭配浏览",
      pairedTags: ["楼层指南", "门票", "活动", "交通指南"],
    },
    jumpNav: {
      features: "特色专题",
      deck: "展望台",
      highlights: "到访亮点",
    },
    featuresHeading: {
      title: "特色专题",
      subtitle: "参考官方“游玩方式”重新整理的亮点",
    },
    deckHeading: {
      title: "如何更好地享受展望台",
      subtitle: "小小仪式、纪念瞬间，以及这里才有的细节",
    },
    highlightsHeading: {
      title: "让到访更完整的设施指南",
      subtitle: "进一步丰富停留体验的空间与服务",
    },
    closing: {
      eyebrow: "把一天安排得更顺",
      title: "游玩指南与实用页面一起看会更有帮助",
      description:
        "如果同时结合楼层图、购票流程、活动信息和交通说明，现场动线会更加清晰。",
      primaryCta: "查看门票",
      secondaryCta: "查看楼层",
      tertiaryCta: "查看交通",
    },
    features: [
      {
        id: "special-01",
        anchorId: "local-exploration",
        number: "#01",
        title: "TOKYO SKYTREE 周边还能做什么",
        description:
          "塔周边区域本身也是体验的一部分。亲子时光、约会、购物，以及旧东京氛围与现代城市节奏在这里交汇。",
        tags: ["亲子", "约会", "购物", "周边区域"],
        image: "/images/hero/img_kv02.webp",
        accent: "bg-[#f4eee3]",
      },
      {
        id: "special-02",
        anchorId: "exclusive-experiences",
        number: "#02",
        title: "塔内最具代表性的时刻",
        description:
          "景观、美食、纪念摄影，以及展望台独有的体验，让这里不仅是一个打卡点，更是值得停留的场所。",
        tags: ["摄影", "景观", "餐饮", "体验"],
        image: "/images/floors/img_floor450_02.webp",
        accent: "bg-[#f7f3eb]",
      },
      {
        id: "special-03",
        anchorId: "night-views",
        number: "#03",
        title: "夜晚的 TOKYO SKYTREE",
        description:
          "到了夜里，灯光与城市辉光会让气氛完全改变，呈现出与白天截然不同的浪漫感。",
        tags: ["夜景", "灯光", "约会", "拍照点"],
        image: "/images/hero/img_kv04.webp",
        accent: "bg-[#111114] text-white",
      },
      {
        id: "special-04",
        anchorId: "history-culture",
        number: "#04",
        title: "在时间中延展的 TOKYO SKYTREE",
        description:
          "从这个角度看，塔会变成关于记忆、期待、工程技术，以及纪念重要时刻的故事。",
        tags: ["故事", "回忆", "余韵", "纪念时刻"],
        image: "/images/hero/img_kv01.webp",
        accent: "bg-[#efe7d7]",
      },
    ],
    observatoryIdeas: [
      {
        title: "生日服务",
        copy: "把展望台作为庆祝舞台，会让这次到访从普通观景变成真正有纪念意义的一天。",
        tags: ["特别时刻", "亲子", "难忘瞬间"],
        image: "/images/floors/img_floor350_01.webp",
      },
      {
        title: "纪念摄影",
        copy: "专门的拍摄服务能帮助游客带走一张真正属于晴空塔的纪念照片。",
        tags: ["拍照", "回忆", "展望台"],
        image: "/images/floors/img_floor340_01.webp",
      },
      {
        title: "从天空寄出一封信",
        copy: "展望设施里的特别邮筒，会把一封信变成和天际线直接相连的小仪式。",
        tags: ["东京感受", "纪念时刻", "独特细节"],
        image: "/images/floors/img_floor345_02.webp",
      },
      {
        title: "清扫天空的专业工作",
        copy: "即使是维护作业，只要放慢脚步去观察，也会成为很特别、很难得看到的一幕。",
        tags: ["意外瞬间", "亲子", "高空作业"],
        image: "/images/floors/img_floor450_01.webp",
      },
    ],
    facilityGuides: [
      {
        title: "SKYTREE ROUND THEATER",
        copy: "位于 350 层的大型影像演出，为展望体验加入动感与氛围。",
        image: "/images/floors/img_floor350_04.webp",
      },
      {
        title: "SKYTREE ARCHIVES",
        copy: "一个帮助游客理解晴空塔如何被构想与建造的解读型停留点。",
        image: "/images/floors/img_floor340_02.webp",
      },
      {
        title: "SKYTREE GALLERY",
        copy: "它让整座塔不只是观景平台，也像一处值得探索的展览式空间。",
        image: "/images/floors/img_floor345_01.webp",
      },
    ],
  },
  "zh-TW": {
    hero: {
      eyebrow: "TOKYO SKYTREE 遊玩指南",
      title: "找到屬於自己的東京晴空塔體驗方式",
      description:
        "官方指南傳達的重點是，晴空塔不只是「上去看風景」而已。景觀、展示、周邊街區、約會氛圍，以及許多細節共同組成完整的一天。",
      primaryCta: "特色專題",
      secondaryCta: "展望台玩法",
      tertiaryCta: "到訪亮點",
      focusTitle: "官方指南最重視的方向",
      focusBody: "夜景、展望台的儀式感、周邊探索，以及塔內更安靜細膩的一面。",
      pairedTitle: "建議搭配瀏覽",
      pairedTags: ["樓層指南", "門票", "活動", "交通指南"],
    },
    jumpNav: {
      features: "特色專題",
      deck: "展望台",
      highlights: "到訪亮點",
    },
    featuresHeading: {
      title: "特色專題",
      subtitle: "參考官方遊玩指南重新整理的重點",
    },
    deckHeading: {
      title: "如何更完整地享受展望台",
      subtitle: "小小儀式、紀念時刻，以及這裡才有的細節",
    },
    highlightsHeading: {
      title: "讓到訪更完整的設施指南",
      subtitle: "進一步豐富停留體驗的空間與服務",
    },
    closing: {
      eyebrow: "把一天安排得更順",
      title: "遊玩指南與實用頁面一起看會更有幫助",
      description:
        "如果同時搭配樓層圖、購票流程、活動資訊與交通說明，現場動線會更清楚。",
      primaryCta: "查看門票",
      secondaryCta: "查看樓層",
      tertiaryCta: "查看交通",
    },
    features: [
      {
        id: "special-01",
        anchorId: "local-exploration",
        number: "#01",
        title: "TOKYO SKYTREE 周邊還能做什麼",
        description:
          "塔周邊區域本身也是體驗的一部分。親子時光、約會、購物，以及下町氣氛與現代東京節奏在這裡交會。",
        tags: ["親子", "約會", "購物", "周邊區域"],
        image: "/images/hero/img_kv02.webp",
        accent: "bg-[#f4eee3]",
      },
      {
        id: "special-02",
        anchorId: "exclusive-experiences",
        number: "#02",
        title: "塔內最具代表性的時刻",
        description:
          "景觀、美食、紀念攝影，以及展望台獨有的體驗，讓這裡不只是打卡地點，更是值得停留的地方。",
        tags: ["攝影", "景觀", "餐飲", "體驗"],
        image: "/images/floors/img_floor450_02.webp",
        accent: "bg-[#f7f3eb]",
      },
      {
        id: "special-03",
        anchorId: "night-views",
        number: "#03",
        title: "夜晚的 TOKYO SKYTREE",
        description:
          "入夜之後，燈光與城市光芒會讓整體氛圍徹底改變，呈現出和白天完全不同的浪漫感。",
        tags: ["夜景", "燈光", "約會", "拍照點"],
        image: "/images/hero/img_kv04.webp",
        accent: "bg-[#111114] text-white",
      },
      {
        id: "special-04",
        anchorId: "history-culture",
        number: "#04",
        title: "在時間中延展的 TOKYO SKYTREE",
        description:
          "從這個角度看，塔會成為關於記憶、期待、工程技術，以及紀念重要時刻的故事。",
        tags: ["故事", "回憶", "餘韻", "紀念時刻"],
        image: "/images/hero/img_kv01.webp",
        accent: "bg-[#efe7d7]",
      },
    ],
    observatoryIdeas: [
      {
        title: "生日服務",
        copy: "把展望台作為慶祝舞台，會讓這次到訪從一般觀景變成真正值得紀念的一天。",
        tags: ["特別時刻", "親子", "難忘瞬間"],
        image: "/images/floors/img_floor350_01.webp",
      },
      {
        title: "紀念攝影",
        copy: "專屬拍攝服務能幫助旅客留下真正屬於晴空塔的紀念照片。",
        tags: ["拍照", "回憶", "展望台"],
        image: "/images/floors/img_floor340_01.webp",
      },
      {
        title: "從天空寄出一封信",
        copy: "展望設施中的特別郵筒，會把一封信變成與天際線直接連結的小儀式。",
        tags: ["東京感受", "紀念時刻", "獨特細節"],
        image: "/images/floors/img_floor345_02.webp",
      },
      {
        title: "清掃天空的專業工作",
        copy: "就連維護作業，只要放慢腳步去看，也會成為令人印象深刻且難得一見的一幕。",
        tags: ["意外瞬間", "親子", "高空作業"],
        image: "/images/floors/img_floor450_01.webp",
      },
    ],
    facilityGuides: [
      {
        title: "SKYTREE ROUND THEATER",
        copy: "位於 350 樓的大型影像演出，為展望體驗加入動感與氛圍。",
        image: "/images/floors/img_floor350_04.webp",
      },
      {
        title: "SKYTREE ARCHIVES",
        copy: "幫助旅客理解晴空塔如何被構想與建造的解讀型停留點。",
        image: "/images/floors/img_floor340_02.webp",
      },
      {
        title: "SKYTREE GALLERY",
        copy: "讓整座塔不只是觀景平台，也像一處值得探索的展示空間。",
        image: "/images/floors/img_floor345_01.webp",
      },
    ],
  },
  th: {
    hero: {
      eyebrow: "คู่มือการเที่ยว TOKYO SKYTREE",
      title: "ค้นหาวิธีเที่ยว Tokyo Skytree ในแบบของคุณเอง",
      description:
        "คู่มือทางการสื่อให้เห็นชัดว่า Skytree ไม่ได้มีแค่การขึ้นไปชมวิวเท่านั้น แต่เป็นทั้งวันของทิวทัศน์ นิทรรศการ ย่านรอบ ๆ บรรยากาศเดต และรายละเอียดเล็ก ๆ ที่รวมกันเป็นประสบการณ์เดียว",
      primaryCta: "ไฮไลต์พิเศษ",
      secondaryCta: "ไอเดียเที่ยวจุดชมวิว",
      tertiaryCta: "ไฮไลต์การมาเยือน",
      focusTitle: "สิ่งที่คู่มือทางการให้ความสำคัญ",
      focusBody: "วิวกลางคืน จังหวะเฉพาะของจุดชมวิว การสำรวจรอบพื้นที่ และเสน่ห์ที่เงียบละเอียดของตัวหอคอย",
      pairedTitle: "ควรดูคู่กัน",
      pairedTags: ["คู่มือชั้น", "บัตรเข้าชม", "อีเวนต์", "การเดินทาง"],
    },
    jumpNav: {
      features: "ไฮไลต์พิเศษ",
      deck: "จุดชมวิว",
      highlights: "ไฮไลต์การมาเยือน",
    },
    featuresHeading: {
      title: "ไฮไลต์พิเศษ",
      subtitle: "เรียบเรียงใหม่จากคู่มือการเที่ยวทางการ",
    },
    deckHeading: {
      title: "วิธีใช้เวลาในจุดชมวิวให้คุ้มที่สุด",
      subtitle: "พิธีกรรมเล็ก ๆ จุดสร้างความทรงจำ และรายละเอียดที่มีได้เฉพาะที่นี่",
    },
    highlightsHeading: {
      title: "คู่มือสิ่งอำนวยความสะดวกที่ช่วยให้ทริปสมบูรณ์ขึ้น",
      subtitle: "พื้นที่และบริการที่ทำให้การมาเยือนลึกขึ้นกว่าเดิม",
    },
    closing: {
      eyebrow: "วางแผนวันให้ลงตัว",
      title: "คู่มือการเที่ยวจะยิ่งมีประโยชน์เมื่อดูควบคู่กับหน้าข้อมูลใช้งานจริง",
      description:
        "เมื่อดูพร้อมกับแผนผังชั้น ระบบจองบัตร ปฏิทินอีเวนต์ และข้อมูลการเดินทาง การวางเส้นทางในวันจริงจะชัดเจนขึ้นมาก",
      primaryCta: "ดูบัตรเข้าชม",
      secondaryCta: "ดูชั้นต่าง ๆ",
      tertiaryCta: "ดูการเดินทาง",
    },
    features: [
      {
        id: "special-01",
        anchorId: "local-exploration",
        number: "#01",
        title: "สิ่งที่ทำได้รอบ TOKYO SKYTREE",
        description:
          "ย่านรอบหอคอยก็เป็นส่วนหนึ่งของประสบการณ์ ทั้งเวลาครอบครัว จุดเดต การช้อปปิ้ง และบรรยากาศที่ผสมระหว่างโตเกียวยุคเก่ากับเมืองสมัยใหม่",
        tags: ["ครอบครัว", "เดต", "ช้อปปิ้ง", "ย่านรอบ ๆ"],
        image: "/images/hero/img_kv02.webp",
        accent: "bg-[#f4eee3]",
      },
      {
        id: "special-02",
        anchorId: "exclusive-experiences",
        number: "#02",
        title: "ช่วงเวลาซิกเนเจอร์ภายในหอคอย",
        description:
          "วิว อาหาร ภาพถ่ายที่ระลึก และช่วงเวลาพิเศษของจุดชมวิว ทำให้ที่นี่ไม่ใช่แค่จุดเช็กอิน แต่เป็นสถานที่ที่อยากใช้เวลาอยู่ด้วย",
        tags: ["ภาพถ่าย", "วิว", "อาหาร", "ประสบการณ์"],
        image: "/images/floors/img_floor450_02.webp",
        accent: "bg-[#f7f3eb]",
      },
      {
        id: "special-03",
        anchorId: "night-views",
        number: "#03",
        title: "สนุกกับ TOKYO SKYTREE ในยามค่ำคืน",
        description:
          "เมื่อเข้าสู่ช่วงกลางคืน แสงไฟและความสว่างของเมืองจะเปลี่ยนอารมณ์ของหอคอยไปอย่างชัดเจน ให้บรรยากาศที่ต่างจากตอนกลางวันโดยสิ้นเชิง",
        tags: ["วิวกลางคืน", "แสงไฟ", "เดต", "จุดถ่ายรูป"],
        image: "/images/hero/img_kv04.webp",
        accent: "bg-[#111114] text-white",
      },
      {
        id: "special-04",
        anchorId: "history-culture",
        number: "#04",
        title: "TOKYO SKYTREE เมื่อเวลาผ่านไป",
        description:
          "มุมมองนี้ทำให้หอคอยกลายเป็นเรื่องราวของความทรงจำ ความคาดหวัง วิศวกรรม และความรู้สึกของการบันทึกช่วงเวลาสำคัญเอาไว้",
        tags: ["เรื่องราว", "ความทรงจำ", "ความรู้สึก", "ช่วงเวลาสำคัญ"],
        image: "/images/hero/img_kv01.webp",
        accent: "bg-[#efe7d7]",
      },
    ],
    observatoryIdeas: [
      {
        title: "บริการวันเกิด",
        copy: "จุดชมวิวสามารถกลายเป็นส่วนหนึ่งของการเฉลิมฉลอง ทำให้การมาเยือนเป็นโอกาสพิเศษ ไม่ใช่แค่แวะชมธรรมดา",
        tags: ["โอกาสพิเศษ", "ครอบครัว", "ช่วงเวลาน่าจดจำ"],
        image: "/images/floors/img_floor350_01.webp",
      },
      {
        title: "ภาพถ่ายที่ระลึก",
        copy: "จุดถ่ายภาพเฉพาะช่วยให้ผู้มาเยือนได้ภาพที่ระลึกซึ่งรู้สึกว่าเป็นของ Tokyo Skytree จริง ๆ",
        tags: ["ถ่ายภาพ", "ความทรงจำ", "จุดชมวิว"],
        image: "/images/floors/img_floor340_01.webp",
      },
      {
        title: "ส่งจดหมายจากบนฟ้า",
        copy: "ตู้ไปรษณีย์พิเศษบนจุดชมวิวเปลี่ยนข้อความธรรมดาให้กลายเป็นพิธีกรรมเล็ก ๆ ที่ผูกกับประสบการณ์บนเส้นขอบฟ้า",
        tags: ["ความรู้สึกของโตเกียว", "ช่วงเวลาที่ระลึก", "รายละเอียดเฉพาะตัว"],
        image: "/images/floors/img_floor345_02.webp",
      },
      {
        title: "งานดูแลท้องฟ้าโดยมืออาชีพ",
        copy: "แม้แต่งานบำรุงรักษารอบหอคอยก็ยังกลายเป็นภาพหาดูยากและน่าจดจำสำหรับคนที่ชะลอจังหวะแล้วมองอย่างตั้งใจ",
        tags: ["ช่วงเวลาคาดไม่ถึง", "ครอบครัว", "งานบนฟ้า"],
        image: "/images/floors/img_floor450_01.webp",
      },
    ],
    facilityGuides: [
      {
        title: "SKYTREE ROUND THEATER",
        copy: "โปรแกรมภาพขนาดใหญ่บนชั้น 350 ที่เติมความเคลื่อนไหวและบรรยากาศให้กับประสบการณ์ชมวิว",
        image: "/images/floors/img_floor350_04.webp",
      },
      {
        title: "SKYTREE ARCHIVES",
        copy: "จุดแวะเชิงตีความที่ช่วยเพิ่มบริบทเกี่ยวกับแนวคิดและการก่อสร้างหอคอย",
        image: "/images/floors/img_floor340_02.webp",
      },
      {
        title: "SKYTREE GALLERY",
        copy: "ชั้นประสบการณ์แบบนิทรรศการสำหรับผู้ที่อยากให้การเที่ยวหอคอยรู้สึกเหมือนการสำรวจ ไม่ใช่แค่ชมวิวอย่างเดียว",
        image: "/images/floors/img_floor345_01.webp",
      },
    ],
  },
};

const localizedFloors: Record<Locale, LocalizedFloor[]> = {
  en: [
    {
      id: "450",
      category: "Sightseeing & Experience",
      label: "Floor 450 & 445",
      name: "Tembo Galleria",
      description:
        "A spiraling glass corridor at 450 meters offering a 360-degree panorama of Tokyo. The highest public observation point where the skyline opens up beneath your feet.",
      image: floorImages["450"],
      imageAlt: "Tembo Galleria spiral corridor with city views",
      floorGuideLink: "/floors#450",
      officialLink: officialSiteUrl,
      towerLabel: [
        { kind: "floor", value: "450" },
        { kind: "meter", value: "445m" },
      ],
    },
    {
      id: "350",
      category: "Sightseeing & Experience",
      label: "Floor 350",
      name: "Tembo Deck",
      description:
        "The main observation deck at 350 meters with panoramic windows, the glass floor, and a fuller observatory atmosphere for first-time visitors.",
      image: floorImages["350"],
      imageAlt: "Tembo Deck panoramic view of Tokyo",
      floorGuideLink: "/floors#350",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "floor", value: "350" }],
    },
    {
      id: "345",
      category: "Dining & Shopping",
      label: "Floor 345",
      name: "Sky Restaurant 634 & SKYTREE SHOP",
      description:
        "A dining-and-shopping level with Japanese cuisine, souvenir shopping, and a calmer pause between the large observatory spaces above and below.",
      image: floorImages["345"],
      imageAlt: "Sky Restaurant 634 interior with city views",
      floorGuideLink: "/floors#345",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "345m" }],
    },
    {
      id: "340",
      category: "Sightseeing & Experience",
      label: "Floor 340",
      name: "Tembo Deck",
      description:
        "A broad viewing level with large windows and memorable skyline photo points, including one of the most iconic observation moments in the tower.",
      image: floorImages["340"],
      imageAlt: "Tembo Deck observation area at Floor 340",
      floorGuideLink: "/floors#340",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "340m" }],
    },
  ],
  ja: [
    {
      id: "450",
      category: "展望・体験",
      label: "450階・445階",
      name: "天望回廊",
      description:
        "地上450メートルのガラス回廊。東京の景色をぐるりと見渡せる、一般来場者が到達できる最も高い眺望体験です。",
      image: floorImages["450"],
      imageAlt: "東京の景色が広がる天望回廊",
      floorGuideLink: "/floors#450",
      officialLink: officialSiteUrl,
      towerLabel: [
        { kind: "floor", value: "450" },
        { kind: "meter", value: "445m" },
      ],
    },
    {
      id: "350",
      category: "展望・体験",
      label: "350階",
      name: "天望デッキ",
      description:
        "大きな窓、ガラス床、劇場演出を備えたメイン展望フロア。初めての来場でも東京スカイツリーらしさをしっかり味わえる中心空間です。",
      image: floorImages["350"],
      imageAlt: "東京を一望する天望デッキ",
      floorGuideLink: "/floors#350",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "floor", value: "350" }],
    },
    {
      id: "345",
      category: "食・ショッピング",
      label: "345階",
      name: "Sky Restaurant 634・SKYTREE SHOP",
      description:
        "和の食体験とお土産選びを楽しめるフロア。上下の展望空間の間で、少し落ち着いた時間を過ごせます。",
      image: floorImages["345"],
      imageAlt: "景色を望むSky Restaurant 634",
      floorGuideLink: "/floors#345",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "345m" }],
    },
    {
      id: "340",
      category: "展望・体験",
      label: "340階",
      name: "天望デッキ",
      description:
        "大きな窓から空と街並みを近くに感じられる広々とした展望エリア。写真映えする代表的な眺望ポイントがそろっています。",
      image: floorImages["340"],
      imageAlt: "340階の展望エリア",
      floorGuideLink: "/floors#340",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "340m" }],
    },
  ],
  ko: [
    {
      id: "450",
      category: "전망·체험",
      label: "450층 · 445층",
      name: "템보 갤러리아",
      description:
        "지상 450m의 유리 회랑으로, 도쿄를 360도로 바라볼 수 있는 최고 공용 전망 구간입니다.",
      image: floorImages["450"],
      imageAlt: "도쿄 전망이 펼쳐지는 템보 갤러리아",
      floorGuideLink: "/floors#450",
      officialLink: officialSiteUrl,
      towerLabel: [
        { kind: "floor", value: "450" },
        { kind: "meter", value: "445m" },
      ],
    },
    {
      id: "350",
      category: "전망·체험",
      label: "350층",
      name: "템보 데크",
      description:
        "대형 창, 유리 바닥, 다양한 연출이 어우러진 메인 전망대입니다. 첫 방문에도 스카이트리의 핵심 경험을 느끼기 좋은 공간입니다.",
      image: floorImages["350"],
      imageAlt: "도쿄 전경을 볼 수 있는 템보 데크",
      floorGuideLink: "/floors#350",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "floor", value: "350" }],
    },
    {
      id: "345",
      category: "다이닝·쇼핑",
      label: "345층",
      name: "Sky Restaurant 634 · SKYTREE SHOP",
      description:
        "일식 다이닝과 기념품 쇼핑을 즐길 수 있는 층으로, 위아래 전망 공간 사이에서 여유롭게 머물기 좋습니다.",
      image: floorImages["345"],
      imageAlt: "Sky Restaurant 634 실내와 전망",
      floorGuideLink: "/floors#345",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "345m" }],
    },
    {
      id: "340",
      category: "전망·체험",
      label: "340층",
      name: "템보 데크",
      description:
        "넓은 창으로 하늘과 도시를 가까이 느낄 수 있는 전망 공간입니다. 대표적인 촬영 포인트가 모여 있어 사진으로도 인상적입니다.",
      image: floorImages["340"],
      imageAlt: "340층 전망 공간",
      floorGuideLink: "/floors#340",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "340m" }],
    },
  ],
  "zh-CN": [
    {
      id: "450",
      category: "观景与体验",
      label: "450层与445层",
      name: "天望回廊",
      description:
        "位于450米高空的玻璃回廊，可360度眺望东京，是游客可到达的最高公共观景区域。",
      image: floorImages["450"],
      imageAlt: "可眺望东京的天望回廊",
      floorGuideLink: "/floors#450",
      officialLink: officialSiteUrl,
      towerLabel: [
        { kind: "floor", value: "450" },
        { kind: "meter", value: "445m" },
      ],
    },
    {
      id: "350",
      category: "观景与体验",
      label: "350层",
      name: "天望甲板",
      description:
        "主观景层设有大面积落地窗、玻璃地板与多媒体演出，是首次到访东京晴空塔时最核心的观景空间。",
      image: floorImages["350"],
      imageAlt: "可俯瞰东京的天望甲板",
      floorGuideLink: "/floors#350",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "floor", value: "350" }],
    },
    {
      id: "345",
      category: "餐饮与购物",
      label: "345层",
      name: "Sky Restaurant 634 与 SKYTREE SHOP",
      description:
        "这一层结合日式餐饮与纪念品购物，让您在上下观景空间之间享受一段更从容的停留时间。",
      image: floorImages["345"],
      imageAlt: "Sky Restaurant 634 室内景观",
      floorGuideLink: "/floors#345",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "345m" }],
    },
    {
      id: "340",
      category: "观景与体验",
      label: "340层",
      name: "天望甲板",
      description:
        "开阔的观景层让天空与城市更加贴近，也是拍摄经典东京天际线照片的热门位置。",
      image: floorImages["340"],
      imageAlt: "340层观景区域",
      floorGuideLink: "/floors#340",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "340m" }],
    },
  ],
  "zh-TW": [
    {
      id: "450",
      category: "觀景與體驗",
      label: "450樓與445樓",
      name: "天望回廊",
      description:
        "位於450公尺高空的玻璃回廊，可360度俯瞰東京，是遊客可抵達的最高公共觀景區域。",
      image: floorImages["450"],
      imageAlt: "可俯瞰東京的天望回廊",
      floorGuideLink: "/floors#450",
      officialLink: officialSiteUrl,
      towerLabel: [
        { kind: "floor", value: "450" },
        { kind: "meter", value: "445m" },
      ],
    },
    {
      id: "350",
      category: "觀景與體驗",
      label: "350樓",
      name: "天望甲板",
      description:
        "主觀景樓層設有大片玻璃窗、玻璃地板與演出設施，是初次造訪東京晴空塔時最核心的觀景空間。",
      image: floorImages["350"],
      imageAlt: "可眺望東京的天望甲板",
      floorGuideLink: "/floors#350",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "floor", value: "350" }],
    },
    {
      id: "345",
      category: "餐飲與購物",
      label: "345樓",
      name: "Sky Restaurant 634 與 SKYTREE SHOP",
      description:
        "結合日式餐飲與紀念品購物的樓層，讓您在上下觀景空間之間享受更從容的停留節奏。",
      image: floorImages["345"],
      imageAlt: "Sky Restaurant 634 室內與窗外景觀",
      floorGuideLink: "/floors#345",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "345m" }],
    },
    {
      id: "340",
      category: "觀景與體驗",
      label: "340樓",
      name: "天望甲板",
      description:
        "寬敞的觀景樓層讓天空與城市更加貼近，也是拍攝東京天際線代表性照片的人氣位置。",
      image: floorImages["340"],
      imageAlt: "340樓觀景區域",
      floorGuideLink: "/floors#340",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "340m" }],
    },
  ],
  th: [
    {
      id: "450",
      category: "จุดชมวิวและประสบการณ์",
      label: "ชั้น 450 และ 445",
      name: "Tembo Galleria",
      description:
        "ทางเดินกระจกรูปเกลียวที่ระดับ 450 เมตร มองเห็นโตเกียวได้รอบทิศ และเป็นจุดชมวิวสาธารณะที่สูงที่สุดสำหรับผู้เข้าชมทั่วไป",
      image: floorImages["450"],
      imageAlt: "Tembo Galleria พร้อมวิวเมืองโตเกียว",
      floorGuideLink: "/floors#450",
      officialLink: officialSiteUrl,
      towerLabel: [
        { kind: "floor", value: "450" },
        { kind: "meter", value: "445m" },
      ],
    },
    {
      id: "350",
      category: "จุดชมวิวและประสบการณ์",
      label: "ชั้น 350",
      name: "Tembo Deck",
      description:
        "จุดชมวิวหลักที่มีหน้าต่างบานใหญ่ พื้นกระจก และบรรยากาศครบถ้วน เหมาะสำหรับผู้มาเยือนครั้งแรกที่อยากสัมผัสสกายทรีแบบเต็มๆ",
      image: floorImages["350"],
      imageAlt: "Tembo Deck พร้อมวิวโตเกียว",
      floorGuideLink: "/floors#350",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "floor", value: "350" }],
    },
    {
      id: "345",
      category: "อาหารและช้อปปิ้ง",
      label: "ชั้น 345",
      name: "Sky Restaurant 634 และ SKYTREE SHOP",
      description:
        "ชั้นสำหรับรับประทานอาหารและเลือกซื้อของที่ระลึก ช่วยให้การเที่ยวระหว่างจุดชมวิวด้านบนและด้านล่างมีจังหวะที่ผ่อนคลายขึ้น",
      image: floorImages["345"],
      imageAlt: "ภายใน Sky Restaurant 634 พร้อมวิวเมือง",
      floorGuideLink: "/floors#345",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "345m" }],
    },
    {
      id: "340",
      category: "จุดชมวิวและประสบการณ์",
      label: "ชั้น 340",
      name: "Tembo Deck",
      description:
        "พื้นที่ชมวิวกว้างขวางที่มองเห็นท้องฟ้าและเมืองอย่างใกล้ชิด พร้อมจุดถ่ายภาพยอดนิยมของหอคอย",
      image: floorImages["340"],
      imageAlt: "พื้นที่ชมวิวชั้น 340",
      floorGuideLink: "/floors#340",
      officialLink: officialSiteUrl,
      towerLabel: [{ kind: "meter", value: "340m" }],
    },
  ],
};

const content: Record<Locale, LocalizedContent> = {
  en: {
    home: {
      hero: {
        eyebrow: "634m above Tokyo",
        title: "TOKYO\nSKYTREE",
        description:
          "Rise above the city and experience Tokyo from a new perspective. On clear days, the panorama stretches all the way toward Mount Fuji.",
        primaryCta: "Book Tickets",
        secondaryCta: "Explore Floors",
        scroll: "Scroll",
        imageAlt: "Tokyo Skytree night view from observation deck",
      },
      experience: {
        title: "A Guide to Enjoying TOKYO SKYTREE",
        subtitle: "Discover More Experiences",
        cta: "Discover More Experiences",
        cards: [
          {
            id: "local-exploration",
            title: "Local Exploration",
            subtitle: "Discover the town around Skytree",
            description:
              "Explore the Solamachi district and the streets around the tower as part of the full visit.",
            href: "/enjoy#local-exploration",
            image: "/images/hero/img_kv02.webp",
          },
          {
            id: "exclusive-experiences",
            title: "Exclusive Experiences",
            subtitle: "Premium Skytree moments",
            description:
              "Find observatory rituals, food, keepsakes, and one-of-a-kind tower experiences.",
            href: "/enjoy#exclusive-experiences",
            image: "/images/floors/img_floor450_02.webp",
          },
          {
            id: "night-views",
            title: "Night Views",
            subtitle: "Tokyo after dark",
            description:
              "See how the city changes after sunset with lighting, skyline glow, and date-night atmosphere.",
            href: "/enjoy#night-views",
            image: "/images/hero/img_kv04.webp",
          },
          {
            id: "history-culture",
            title: "History & Culture",
            subtitle: "Standing through time",
            description:
              "Read the tower as a place of memory, engineering, and Tokyo-wide symbolism.",
            href: "/enjoy#history-culture",
            image: "/images/floors/img_floor340_02.webp",
          },
        ],
      },
      highlights: {
        title: "Highlights of TOKYO SKYTREE",
        subtitle: "Featured Programs",
        cta: "View All Articles",
        empty: "No stories are published in this category yet.",
      },
      news: {
        title: "Press Releases and Newsletters",
        subtitle: "Latest Updates",
        cta: "View the List",
      },
      tower: {
        title: "Journey to the Skies",
        subtitle: "Your Gateway to the Heavens",
        description:
          "Trace the public observation route through Tokyo Skytree, from the expansive Tembo Deck to the soaring glass corridor of the Tembo Galleria.",
        stats: {
          levels: "Levels",
          range: "Range",
          flow: "Flow",
        },
        statsValue: {
          levels: "4",
          range: "340-450m",
          flow: "Scroll-linked",
        },
        observatoryLabel: "Tokyo Skytree Observatory",
        floorGuideCta: "View the Floor Guide",
        officialSiteCta: "View the Official Site",
      },
    },
    ticket: {
      page: {
        title: "Book Your Tickets",
        subtitle: "Tembo Deck & Tembo Galleria",
        promo: {
          eyebrow: "Tokyo Skytree admission",
          title: "Book admission to Tembo Deck and Tembo Galleria",
          description:
            "Choose your date, ticket plan, and entry time for the main Tokyo Skytree observatory route. The booking flow is designed to keep planning clear on both desktop and mobile.",
          primaryCta: "Book Tickets",
          secondaryCta: "See Floor Guide",
          trustBadges: ["From $14.67", "Select date & time", "Deck & Galleria plans"],
          highlights: [
            {
              label: "Admission options",
              value: "2 main plans",
              copy: "Choose between Tembo Deck only or the combined route with Tembo Galleria.",
            },
            {
              label: "Booking flow",
              value: "5 steps",
              copy: "Select date, plan, time, number of visitors, and booking details.",
            },
            {
              label: "Visit planning",
              value: "Mobile-friendly",
              copy: "The page is structured for quick comparison and easy booking on smaller screens.",
            },
          ],
        },
      },
      steps: ["Date", "Plan", "Time", "People", "Visitor"],
      stepTitles: {
        1: { title: "Select Date", subtitle: "Choose your preferred visit date" },
        2: { title: "Select Plan", subtitle: "Choose your ticket type" },
        3: { title: "Select Time", subtitle: "Choose your entry time slot" },
        4: { title: "Select People", subtitle: "Number of visitors" },
        5: { title: "Visitor Details", subtitle: "Enter the details for this booking" },
      },
      buttons: {
        back: "Back",
        next: "Next",
        completeBooking: "Complete Booking",
        makeAnotherBooking: "Make Another Booking",
      },
      validation: {
        selectDate: "Please select a date",
        selectTime: "Please select a time slot",
        selectPeople: "Please select at least one person",
        lastNameRequired: "Last name is required",
        firstNameRequired: "First name is required",
        emailRequired: "Email is required",
        invalidEmail: "Invalid email format",
        genderRequired: "Please select gender",
        birthdayRequired: "Date of birth is required",
        countryRequired: "Please select a country",
        addressRequired: "Street address is required",
        cityRequired: "City is required",
        stateRequired: "State or region is required",
        postcodeRequired: "ZIP or postal code is required",
        phoneRequired: "Phone number is required",
        termsRequired: "Please accept the terms before completing your booking",
      },
      success: {
        title: "Booking Confirmed",
        reference: "Reference",
        keepReference:
          "Keep this reference number for your visit and present it at the ticket counter on the day of entry.",
      },
      terms: {
        prefix: "I agree to the",
        and: "and",
        suffix: ".",
        nonRefundable: "I understand that tickets are non-refundable after purchase.",
        termsLabel: "Terms of Service",
        privacyLabel: "Privacy Policy",
      },
      plans: {
        "tembo-deck": {
          name: "Tembo Deck Ticket",
          subtitle: "Floor 350",
          description:
            "Access to the main observation deck at 350 meters with panoramic views of Tokyo.",
        },
        "tembo-deck-galleria": {
          name: "Tembo Deck & Tembo Galleria",
          subtitle: "Floor 350 + 450",
          description:
            "Full access to both the Tembo Deck and the spiraling Tembo Galleria at 450 meters.",
        },
      },
      people: {
        adult: "Adult",
        adultAge: "Age 15 & up",
        child: "Child",
        childAge: "Age 6-14",
      },
      sidebar: {
        title: "Price Summary",
        date: "Date",
        time: "Time",
        plan: "Plan",
        total: "Total",
        selectDate: "Select a date",
        adult: "Adult",
        child: "Child",
        currencyNote:
          "Displayed in USD for convenience. Checkout and final settlement are processed in JPY.",
      },
      profile: {
        lastName: "Last Name",
        firstName: "First Name",
        email: "Email Address",
        phone: "Phone Number",
        gender: "Gender",
        birthday: "Date of Birth",
        country: "Country",
        address1: "Street Address",
        city: "City",
        state: "State / Region",
        postcode: "ZIP / Postal Code",
        countryPlaceholder: "Select your country",
        placeholders: {
          lastName: "Smith",
          firstName: "John",
          email: "john@example.com",
          phone: "+1 555 123 4567",
          address1: "123 Main Street",
          city: "New York",
          state: "NY",
          postcode: "10001",
        },
        genders: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" },
          { value: "prefer-not-to-say", label: "Prefer not to say" },
        ],
      },
      datePicker: {
        dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        weekdayRate: "Weekday",
      },
      planSelector: {
        perPerson: "per person",
      },
    },
    enjoy: {
      hero: {
        eyebrow: "A Guide to Enjoying TOKYO SKYTREE",
        title: "Discover your way to experience Tokyo Skytree",
        description:
          "The official guide makes one thing clear: there is more to Skytree than simply going up to the observatory. It is a fuller day shaped by views, exhibits, surrounding streets, dates, and quieter details.",
        primaryCta: "Special Features",
        secondaryCta: "Observation Deck Ideas",
        tertiaryCta: "Visit Highlights",
        focusTitle: "What the official guide focuses on",
        focusBody:
          "Night views, observatory rituals, nearby exploration, and the tower's quieter hidden pleasures.",
        pairedTitle: "Best paired with",
        pairedTags: ["Floor Guide", "Tickets", "Events", "Getting Here"],
      },
      jumpNav: {
        features: "Special Feature",
        deck: "Observation Deck",
        highlights: "Visitor Highlights",
      },
      featuresHeading: {
        title: "Special Features",
        subtitle: "Inspired by the official enjoyment guide",
      },
      deckHeading: {
        title: "How to Make the Most of the Observation Deck",
        subtitle: "Small rituals, memory points, and tower-only moments",
      },
      highlightsHeading: {
        title: "How to Make the Most of Your Visit",
        subtitle: "Facilities and spaces that deepen the tower experience",
      },
      closing: {
        eyebrow: "Plan the day well",
        title: "Pair the enjoyment guide with the practical pages",
        description:
          "The guide is strongest when it works together with the floor map, ticket flow, event calendar, and access information.",
        primaryCta: "Book Tickets",
        secondaryCta: "Explore Floors",
        tertiaryCta: "Getting Here",
      },
      features: [
        {
          id: "special-01",
          anchorId: "local-exploration",
          number: "#01",
          title: "Things to do around TOKYO SKYTREE",
          description:
            "The district around the tower is part of the experience itself: family time, date spots, shopping, and a blend of old Edo atmosphere with contemporary Tokyo.",
          tags: ["Family", "Dates", "Shopping", "Local Area"],
          image: "/images/hero/img_kv02.webp",
          accent: "bg-[#f4eee3]",
        },
        {
          id: "special-02",
          anchorId: "exclusive-experiences",
          number: "#02",
          title: "Signature moments inside the tower",
          description:
            "Views, food, keepsake photography, and one-of-a-kind observatory moments make the tower a place to spend time, not just a viewpoint to check off.",
          tags: ["Photography", "Views", "Dining", "Experience"],
          image: "/images/floors/img_floor450_02.webp",
          accent: "bg-[#f7f3eb]",
        },
        {
          id: "special-03",
          anchorId: "night-views",
          number: "#03",
          title: "Enjoy TOKYO SKYTREE at night",
          description:
            "At night the tower takes on a distinct mood with lighting, city glow, date-night energy, and a very different atmosphere from daytime visits.",
          tags: ["Night View", "Lighting", "Dates", "Photo Spots"],
          image: "/images/hero/img_kv04.webp",
          accent: "bg-[#111114] text-white",
        },
        {
          id: "special-04",
          anchorId: "history-culture",
          number: "#04",
          title: "The TOKYO SKYTREE, as time passes",
          description:
            "This angle turns the tower into a story about memory, anticipation, engineering, and the feeling of marking special moments in time.",
          tags: ["Story", "Memories", "Reflection", "Milestones"],
          image: "/images/hero/img_kv01.webp",
          accent: "bg-[#efe7d7]",
        },
      ],
      observatoryIdeas: [
        {
          title: "Birthday Services",
          copy:
            "The observatory can become part of a celebration, turning the visit into a marked occasion rather than an ordinary stop.",
          tags: ["Special occasions", "Family", "Extraordinary moments"],
          image: "/images/floors/img_floor350_01.webp",
        },
        {
          title: "Commemorative Photography",
          copy:
            "Dedicated photo opportunities help visitors leave with a keepsake image that feels specific to the tower.",
          tags: ["Take a picture", "Memory", "Observation deck"],
          image: "/images/floors/img_floor340_01.webp",
        },
        {
          title: "Deliver a Letter from the Sky",
          copy:
            "The special mailbox at the observatory turns a message into a small ritual tied directly to the skyline experience.",
          tags: ["Feeling Tokyo", "Souvenir moment", "Unique detail"],
          image: "/images/floors/img_floor345_02.webp",
        },
        {
          title: "Professional Work of Sweeping the Sky",
          copy:
            "Even the maintenance work around the tower is framed as a lucky and unusual sight for visitors who slow down and look closely.",
          tags: ["Unexpected moment", "Family", "Sky work"],
          image: "/images/floors/img_floor450_01.webp",
        },
      ],
      facilityGuides: [
        {
          title: "SKYTREE ROUND THEATER",
          copy:
            "A large-format visual program on Floor 350 that adds movement and atmosphere to the observatory.",
          image: "/images/floors/img_floor350_04.webp",
        },
        {
          title: "SKYTREE ARCHIVES",
          copy:
            "An interpretive stop that adds context about how the tower was conceived and built.",
          image: "/images/floors/img_floor340_02.webp",
        },
        {
          title: "SKYTREE GALLERY",
          copy:
            "An exhibition-like layer for visitors who want the tower to feel like a place to explore, not only a scenic platform.",
          image: "/images/floors/img_floor345_01.webp",
        },
      ],
    },
    events: {
      categories: {
        All: "All",
        "Pick Up": "Pick Up",
        Events: "Events",
        Dining: "Dining",
        Collaboration: "Collaboration",
        Tickets: "Tickets",
      },
      badges: {
        "Pick Up": "Pick Up",
        Limited: "Limited",
        Seasonal: "Seasonal",
        Ticket: "Ticket",
        Collaboration: "Collaboration",
      },
      eventsPage: {
        eyebrow: "Events & News",
        title: "Seasonal programs, collaboration runs, and ticket-led stories from the tower",
        description:
          "A clearer archive of official programs, organized to make planning and browsing easier from one place.",
        currentStories: "Current stories",
        eventTypes: "Event types",
        planningFocus: "Planning focus",
        planningFocusValue: "Programs tied to decks, cafe, and skyline moments",
        pickupEyebrow: "Pick Up",
        pickupTitle: "Priority stories on the tower calendar",
        pickupDescription:
          "This strip is reserved for the programs shaping the tower's current mood right now.",
        archiveEyebrow: "Browse Archive",
        archiveTitle: "Explore programs by mood, format, or ticket angle",
        planVisit: "Plan a Visit",
        readStory: "Read Story",
        empty: "No stories are published in this category yet.",
        noticesEyebrow: "Latest Notices",
        noticesTitle: "Short-form updates from the event archive",
        noticesDescription:
          "A compact update list that makes the event section easier to browse.",
      },
      detailPage: {
        back: "Back to Events",
        buyTickets: "Buy Tickets",
        officialReference: "Official Reference",
        adaptedNote:
          "This overview is based on the official program page and organized here for easier trip planning.",
        overview: "Overview",
        keyMoments: "Key Moments",
        visitPlanning: "Visit Planning",
        visitPlanningBody:
          "Most programs are built around the observatory flow, so the smoothest path is to secure your ticket first and then check time-sensitive notes.",
        reserveAdmission: "Reserve Admission",
        exploreFloorGuide: "Explore Floor Guide",
        faqEyebrow: "FAQ",
        faqTitle: "Visitor Questions",
        faqDescription:
          "These answers are summarized from the official program pages and rewritten in a cleaner planning format.",
      },
    },
  },
  ja: {} as LocalizedContent,
  ko: {} as LocalizedContent,
  "zh-CN": {} as LocalizedContent,
  "zh-TW": {} as LocalizedContent,
  th: {} as LocalizedContent,
};

content.ja = {
  ...content.en,
  home: {
    ...content.en.home,
    hero: {
      eyebrow: "東京上空634m",
      title: "TOKYO\nSKYTREE",
      description:
        "街の上へ上がり、東京を新しい視点で眺める体験へ。晴れた日には富士山まで見渡せます。",
      primaryCta: "チケットを予約",
      secondaryCta: "フロアを見る",
      scroll: "スクロール",
      imageAlt: "展望台から見た東京スカイツリーの夜景",
    },
    experience: {
      title: "TOKYO SKYTREE の楽しみ方ガイド",
      subtitle: "もっと体験を見つける",
      cta: "もっと体験を見る",
      cards: [
        {
          id: "local-exploration",
          title: "周辺エリア散策",
          subtitle: "スカイツリーの街を楽しむ",
          description: "ソラマチや周辺エリアも、東京スカイツリー体験の一部として巡れます。",
          href: "/enjoy#local-exploration",
          image: "/images/hero/img_kv02.webp",
        },
        {
          id: "exclusive-experiences",
          title: "特別な体験",
          subtitle: "展望台ならではの時間",
          description: "景色、グルメ、記念撮影など、上空でしか味わえない体験をまとめました。",
          href: "/enjoy#exclusive-experiences",
          image: "/images/floors/img_floor450_02.webp",
        },
        {
          id: "night-views",
          title: "夜景",
          subtitle: "日没後の東京",
          description: "ライトアップと街のきらめきで、昼間とは違う雰囲気が広がります。",
          href: "/enjoy#night-views",
          image: "/images/hero/img_kv04.webp",
        },
        {
          id: "history-culture",
          title: "歴史と文化",
          subtitle: "時を重ねるタワー",
          description: "技術、記憶、東京の象徴としての意味から、タワーをもう一度読み解きます。",
          href: "/enjoy#history-culture",
          image: "/images/floors/img_floor340_02.webp",
        },
      ],
    },
    highlights: {
      title: "TOKYO SKYTREE の注目情報",
      subtitle: "おすすめプログラム",
      cta: "記事をすべて見る",
      empty: "このカテゴリにはまだ掲載記事がありません。",
    },
    news: {
      title: "お知らせ・ニュースレター",
      subtitle: "最新情報",
      cta: "一覧を見る",
    },
    tower: {
      title: "空へ続くルート",
      subtitle: "展望体験の案内",
      description:
        "天望デッキから天望回廊まで、東京スカイツリーの一般観覧ルートをたどれます。",
      stats: {
        levels: "フロア数",
        range: "高さ",
        flow: "表示連動",
      },
      statsValue: {
        levels: "4",
        range: "340-450m",
        flow: "スクロール連動",
      },
      observatoryLabel: "東京スカイツリー展望施設",
      floorGuideCta: "フロアガイドを見る",
      officialSiteCta: "公式サイトを見る",
    },
  },
  ticket: {
    ...content.en.ticket,
    page: {
      title: "チケット予約",
      subtitle: "天望デッキ・天望回廊",
      promo: {
        eyebrow: "東京スカイツリー入場予約",
        title: "天望デッキ・天望回廊の入場チケット予約",
        description:
          "来場日、チケット種別、入場時間を選びながら、東京スカイツリーの主要な展望ルートをわかりやすく予約できる構成です。デスクトップでもモバイルでもスムーズに進められます。",
        primaryCta: "チケットを予約",
        secondaryCta: "フロアガイドを見る",
        trustBadges: ["JPY 2,200から", "日付・時間を選択", "デッキ・回廊プラン対応"],
        highlights: [
          {
            label: "入場プラン",
            value: "2種類",
            copy: "天望デッキのみ、または天望回廊を含むルートから選べます。",
          },
          {
            label: "予約の流れ",
            value: "5ステップ",
            copy: "日付、プラン、時間、人数、来場者情報の順に進みます。",
          },
          {
            label: "来場準備",
            value: "モバイル対応",
            copy: "スマートフォンでも比較しやすく、予約を進めやすいレイアウトです。",
          },
        ],
      },
    },
    steps: ["日付", "プラン", "時間", "人数", "来場者"],
    stepTitles: {
      1: { title: "日付を選択", subtitle: "来場希望日を選んでください" },
      2: { title: "プランを選択", subtitle: "チケット種別を選んでください" },
      3: { title: "時間を選択", subtitle: "入場時間帯を選んでください" },
      4: { title: "人数を選択", subtitle: "来場人数を入力してください" },
      5: { title: "来場者情報", subtitle: "予約に必要な情報を入力してください" },
    },
    buttons: {
      back: "戻る",
      next: "次へ",
      completeBooking: "予約を確定",
      makeAnotherBooking: "別の予約をする",
    },
    validation: {
      selectDate: "日付を選択してください",
      selectTime: "時間帯を選択してください",
      selectPeople: "少なくとも1名を選択してください",
      lastNameRequired: "姓を入力してください",
      firstNameRequired: "名を入力してください",
      emailRequired: "メールアドレスを入力してください",
      invalidEmail: "メールアドレスの形式が正しくありません",
      genderRequired: "性別を選択してください",
      birthdayRequired: "生年月日を入力してください",
      countryRequired: "国・地域を選択してください",
      addressRequired: "住所を入力してください",
      cityRequired: "市区町村を入力してください",
      stateRequired: "都道府県を入力してください",
      postcodeRequired: "郵便番号を入力してください",
      phoneRequired: "電話番号を入力してください",
      termsRequired: "予約完了前に規約への同意が必要です",
    },
    success: {
      title: "予約が完了しました",
      reference: "予約番号",
      keepReference: "来場当日はこの番号を控え、チケットカウンターでご提示ください。",
    },
    terms: {
      prefix: "",
      and: "と",
      suffix: "に同意します。",
      nonRefundable: "購入後のチケットは払い戻し不可であることを理解しました。",
      termsLabel: "利用規約",
      privacyLabel: "プライバシーポリシー",
    },
    plans: {
      "tembo-deck": {
        name: "天望デッキ入場券",
        subtitle: "350階",
        description: "地上350mのメイン展望台に入場できるチケットです。",
      },
      "tembo-deck-galleria": {
        name: "天望デッキ・天望回廊",
        subtitle: "350階 + 450階",
        description: "天望デッキと天望回廊の両方を楽しめるチケットです。",
      },
    },
    people: {
      adult: "大人",
      adultAge: "15歳以上",
      child: "小人",
      childAge: "6〜14歳",
    },
    sidebar: {
      title: "料金概要",
      date: "日付",
      time: "時間",
      plan: "プラン",
      total: "合計",
      selectDate: "日付を選択",
      adult: "大人",
      child: "小人",
    },
    profile: {
      lastName: "姓",
      firstName: "名",
      email: "メールアドレス",
      phone: "電話番号",
      gender: "性別",
      birthday: "生年月日",
      country: "国・地域",
      address1: "住所",
      city: "市区町村",
      state: "都道府県",
      postcode: "郵便番号",
      countryPlaceholder: "国・地域を選択",
      placeholders: {
        lastName: "山田",
        firstName: "太郎",
        email: "example@email.com",
        phone: "09012345678",
        address1: "押上一丁目1-2",
        city: "墨田区",
        state: "東京都",
        postcode: "131-0045",
      },
      genders: [
        { value: "male", label: "男性" },
        { value: "female", label: "女性" },
        { value: "other", label: "その他" },
        { value: "prefer-not-to-say", label: "回答しない" },
      ],
    },
    datePicker: {
      dayNames: ["日", "月", "火", "水", "木", "金", "土"],
      monthNames: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      weekdayRate: "平日",
    },
    planSelector: {
      perPerson: "1名あたり",
    },
  },
  enjoy: localizedEnjoyContent.ja,
  events: {
    ...content.en.events,
    categories: {
      All: "すべて",
      "Pick Up": "注目",
      Events: "イベント",
      Dining: "グルメ",
      Collaboration: "コラボ",
      Tickets: "チケット",
    },
    badges: {
      "Pick Up": "注目",
      Limited: "限定",
      Seasonal: "季節",
      Ticket: "チケット",
      Collaboration: "コラボ",
    },
    eventsPage: {
      ...content.en.events.eventsPage,
      eyebrow: "イベント・ニュース",
      title: "季節イベント、コラボ企画、チケット関連情報をひとつに",
      description: "公式イベント情報を、より見やすく計画しやすい形でまとめ直したアーカイブです。",
      currentStories: "掲載中の企画",
      eventTypes: "カテゴリー",
      planningFocus: "計画の軸",
      planningFocusValue: "展望台・カフェ・眺望に結びつくプログラム",
      pickupEyebrow: "注目",
      pickupTitle: "今の空気を作るピックアップ企画",
      pickupDescription: "現在の東京スカイツリーらしさを最も強く感じられる企画を集めています。",
      archiveEyebrow: "アーカイブを見る",
      archiveTitle: "雰囲気・形式・チケット軸でイベントを探す",
      planVisit: "来場計画へ",
      readStory: "詳しく見る",
      empty: "このカテゴリにはまだ記事がありません。",
      noticesEyebrow: "最新のお知らせ",
      noticesTitle: "イベント一覧からの短い更新情報",
      noticesDescription: "イベント情報をたどりやすくするための簡易更新リストです。",
    },
    detailPage: {
      ...content.en.events.detailPage,
      back: "イベント一覧へ戻る",
      buyTickets: "チケットを見る",
      officialReference: "公式情報",
      adaptedNote: "本概要は公式ページの内容をもとに、来場計画を立てやすい形で整理したものです。",
      overview: "概要",
      keyMoments: "見どころ",
      visitPlanning: "来場計画",
      visitPlanningBody: "多くの企画は展望台の流れに沿っているため、まず入場券を確保し、その後に時間指定の注意事項を確認するのがおすすめです。",
      reserveAdmission: "入場券を予約",
      exploreFloorGuide: "フロアガイドを見る",
      faqEyebrow: "FAQ",
      faqTitle: "来場前の質問",
      faqDescription: "公式プログラムページの内容を、計画しやすい形で整理した回答です。",
    },
  },
};

content.ko = {
  ...content.en,
  enjoy: localizedEnjoyContent.ko,
  home: {
    ...content.en.home,
    hero: {
      eyebrow: "도쿄 상공 634m",
      title: "TOKYO\nSKYTREE",
      description: "도시 위로 올라 도쿄를 새로운 시선으로 만나보세요. 날씨가 좋으면 후지산까지 바라볼 수 있습니다.",
      primaryCta: "티켓 예약",
      secondaryCta: "층별 보기",
      scroll: "스크롤",
      imageAlt: "전망대에서 본 도쿄 스카이트리 야경",
    },
    experience: {
      ...content.en.home.experience,
      title: "TOKYO SKYTREE 즐기기 가이드",
      subtitle: "더 많은 경험 살펴보기",
      cta: "더 많은 경험 보기",
      cards: [
        { ...content.en.home.experience.cards[0], title: "주변 지역 산책", subtitle: "스카이트리 타운 즐기기" },
        { ...content.en.home.experience.cards[1], title: "특별한 체험", subtitle: "전망대만의 순간" },
        { ...content.en.home.experience.cards[2], title: "야경", subtitle: "해진 뒤의 도쿄" },
        { ...content.en.home.experience.cards[3], title: "역사와 문화", subtitle: "시간을 품은 타워" },
      ],
    },
    highlights: {
      title: "TOKYO SKYTREE 하이라이트",
      subtitle: "추천 프로그램",
      cta: "모든 기사 보기",
      empty: "이 카테고리에는 아직 게시된 글이 없습니다.",
    },
    news: {
      title: "보도자료 및 뉴스레터",
      subtitle: "최신 소식",
      cta: "목록 보기",
    },
    tower: {
      title: "하늘로 이어지는 동선",
      subtitle: "전망 체험 안내",
      description: "템보 데크에서 템보 갤러리아까지, 도쿄 스카이트리의 공개 관람 루트를 따라가 보세요.",
      stats: { levels: "층수", range: "높이", flow: "연동 방식" },
      statsValue: { levels: "4", range: "340-450m", flow: "스크롤 연동" },
      observatoryLabel: "도쿄 스카이트리 전망 시설",
      floorGuideCta: "플로어 가이드 보기",
      officialSiteCta: "공식 사이트 보기",
    },
  },
  ticket: {
    ...content.en.ticket,
    page: {
      title: "티켓 예약",
      subtitle: "템보 데크 · 템보 갤러리아",
      promo: {
        eyebrow: "도쿄 스카이트리 입장 예약",
        title: "템보 데크와 템보 갤러리아 입장권 예약",
        description:
          "방문 날짜, 티켓 플랜, 입장 시간을 차례로 선택하며 도쿄 스카이트리의 주요 전망 동선을 간편하게 예약할 수 있도록 구성했습니다. 데스크톱과 모바일 모두에서 이해하기 쉽습니다.",
        primaryCta: "티켓 예약",
        secondaryCta: "플로어 가이드 보기",
        trustBadges: ["JPY 2,200부터", "날짜·시간 선택", "데크·갤러리아 플랜"],
        highlights: [
          {
            label: "입장 플랜",
            value: "2가지",
            copy: "템보 데크 단독 또는 템보 갤러리아 포함 플랜 중에서 선택할 수 있습니다.",
          },
          {
            label: "예약 흐름",
            value: "5단계",
            copy: "날짜, 플랜, 시간, 인원, 방문객 정보 순서로 진행됩니다.",
          },
          {
            label: "방문 준비",
            value: "모바일 대응",
            copy: "스마트폰에서도 비교와 예약 진행이 편한 구조입니다.",
          },
        ],
      },
    },
    steps: ["날짜", "플랜", "시간", "인원", "방문객"],
    stepTitles: {
      1: { title: "날짜 선택", subtitle: "방문 날짜를 선택하세요" },
      2: { title: "플랜 선택", subtitle: "티켓 종류를 선택하세요" },
      3: { title: "시간 선택", subtitle: "입장 시간을 선택하세요" },
      4: { title: "인원 선택", subtitle: "방문 인원을 입력하세요" },
      5: { title: "방문객 정보", subtitle: "예약에 필요한 정보를 입력하세요" },
    },
    buttons: { back: "뒤로", next: "다음", completeBooking: "예약 완료", makeAnotherBooking: "다른 예약 만들기" },
    validation: {
      selectDate: "날짜를 선택하세요",
      selectTime: "시간대를 선택하세요",
      selectPeople: "최소 1명을 선택하세요",
      lastNameRequired: "성은 필수입니다",
      firstNameRequired: "이름은 필수입니다",
      emailRequired: "이메일은 필수입니다",
      invalidEmail: "이메일 형식이 올바르지 않습니다",
      genderRequired: "성별을 선택하세요",
      birthdayRequired: "생년월일을 입력하세요",
      countryRequired: "국가를 선택하세요",
      addressRequired: "주소를 입력하세요",
      cityRequired: "도시를 입력하세요",
      stateRequired: "주 또는 지역을 입력하세요",
      postcodeRequired: "우편번호를 입력하세요",
      phoneRequired: "전화번호를 입력하세요",
      termsRequired: "예약 완료 전에 약관에 동의해 주세요",
    },
    success: {
      title: "예약이 완료되었습니다",
      reference: "예약 번호",
      keepReference: "방문 당일 이 번호를 보관하시고 매표소에서 제시해 주세요.",
    },
    terms: {
      prefix: "",
      and: "및",
      suffix: "에 동의합니다.",
      nonRefundable: "구매 후 티켓은 환불되지 않음을 이해했습니다.",
      termsLabel: "이용 약관",
      privacyLabel: "개인정보 처리방침",
    },
    plans: {
      "tembo-deck": {
        name: "템보 데크 티켓",
        subtitle: "350층",
        description: "지상 350m의 메인 전망대에 입장할 수 있는 티켓입니다.",
      },
      "tembo-deck-galleria": {
        name: "템보 데크 & 템보 갤러리아",
        subtitle: "350층 + 450층",
        description: "템보 데크와 템보 갤러리아를 모두 이용할 수 있는 티켓입니다.",
      },
    },
    people: { adult: "성인", adultAge: "15세 이상", child: "어린이", childAge: "6-14세" },
    sidebar: {
      title: "요금 요약",
      date: "날짜",
      time: "시간",
      plan: "플랜",
      total: "합계",
      selectDate: "날짜 선택",
      adult: "성인",
      child: "어린이",
    },
    profile: {
      lastName: "성",
      firstName: "이름",
      email: "이메일 주소",
      phone: "전화번호",
      gender: "성별",
      birthday: "생년월일",
      country: "국가",
      address1: "주소",
      city: "도시",
      state: "주 / 지역",
      postcode: "우편번호",
      countryPlaceholder: "국가를 선택하세요",
      placeholders: {
        lastName: "Kim",
        firstName: "Minjun",
        email: "example@email.com",
        phone: "01012345678",
        address1: "1-1-2 Oshiage",
        city: "Sumida-ku",
        state: "Tokyo",
        postcode: "131-0045",
      },
      genders: [
        { value: "male", label: "남성" },
        { value: "female", label: "여성" },
        { value: "other", label: "기타" },
        { value: "prefer-not-to-say", label: "응답 안 함" },
      ],
    },
    datePicker: {
      dayNames: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      weekdayRate: "평일",
    },
    planSelector: { perPerson: "1인 기준" },
  },
  events: {
    ...content.en.events,
    categories: {
      All: "전체",
      "Pick Up": "추천",
      Events: "이벤트",
      Dining: "다이닝",
      Collaboration: "콜라보",
      Tickets: "티켓",
    },
    badges: {
      "Pick Up": "추천",
      Limited: "한정",
      Seasonal: "시즌",
      Ticket: "티켓",
      Collaboration: "콜라보",
    },
    eventsPage: {
      ...content.en.events.eventsPage,
      eyebrow: "이벤트 · 뉴스",
      title: "시즌 프로그램, 콜라보, 티켓 관련 소식을 한곳에서",
      description: "공식 프로그램을 더 보기 쉽고 계획하기 쉬운 형식으로 정리한 아카이브입니다.",
      currentStories: "현재 스토리",
      eventTypes: "유형",
      planningFocus: "계획 포인트",
      planningFocusValue: "전망대, 카페, 스카이라인과 연결된 프로그램",
      pickupEyebrow: "추천",
      pickupTitle: "지금 타워 분위기를 만드는 주요 이야기",
      pickupDescription: "현재 도쿄 스카이트리의 분위기를 가장 잘 보여 주는 프로그램을 모았습니다.",
      archiveEyebrow: "아카이브 둘러보기",
      archiveTitle: "무드, 형식, 티켓 관점으로 프로그램 찾기",
      planVisit: "방문 계획",
      readStory: "스토리 보기",
      empty: "이 카테고리에는 아직 게시된 스토리가 없습니다.",
      noticesEyebrow: "최신 공지",
      noticesTitle: "이벤트 아카이브의 짧은 업데이트",
      noticesDescription: "이벤트 섹션을 더 쉽게 훑어볼 수 있도록 정리한 공지 레이어입니다.",
    },
    detailPage: {
      ...content.en.events.detailPage,
      back: "이벤트로 돌아가기",
      buyTickets: "티켓 보기",
      officialReference: "공식 정보",
      adaptedNote: "이 개요는 공식 프로그램 페이지를 바탕으로 방문 계획을 세우기 쉽게 정리한 내용입니다.",
      overview: "개요",
      keyMoments: "핵심 포인트",
      visitPlanning: "방문 계획",
      visitPlanningBody: "대부분의 프로그램은 전망 동선과 연결되어 있으므로 먼저 입장권을 확보한 뒤 시간 관련 안내를 확인하는 것이 가장 좋습니다.",
      reserveAdmission: "입장 예약",
      exploreFloorGuide: "플로어 가이드 보기",
      faqEyebrow: "FAQ",
      faqTitle: "방문 전 질문",
      faqDescription: "공식 페이지 내용을 더 계획하기 쉬운 형식으로 정리한 답변입니다.",
    },
  },
};

content["zh-CN"] = {
  ...content.en,
  enjoy: localizedEnjoyContent["zh-CN"],
  home: {
    ...content.en.home,
    hero: {
      eyebrow: "东京上空 634m",
      title: "TOKYO\nSKYTREE",
      description: "登上高空，以全新视角俯瞰东京。天气晴朗时，视野甚至可延伸至富士山。",
      primaryCta: "预订门票",
      secondaryCta: "查看楼层",
      scroll: "下滑",
      imageAlt: "从展望台眺望东京晴空塔夜景",
    },
    experience: {
      ...content.en.home.experience,
      title: "TOKYO SKYTREE 游玩指南",
      subtitle: "发现更多体验",
      cta: "查看更多体验",
      cards: [
        { ...content.en.home.experience.cards[0], title: "周边探索", subtitle: "走进晴空塔小镇" },
        { ...content.en.home.experience.cards[1], title: "特别体验", subtitle: "塔内专属时刻" },
        { ...content.en.home.experience.cards[2], title: "夜景", subtitle: "日落后的东京" },
        { ...content.en.home.experience.cards[3], title: "历史与文化", subtitle: "随时间伫立的高塔" },
      ],
    },
    highlights: {
      title: "TOKYO SKYTREE 精选内容",
      subtitle: "推荐项目",
      cta: "查看全部文章",
      empty: "该分类暂时还没有内容。",
    },
    news: { title: "新闻稿与资讯", subtitle: "最新动态", cta: "查看列表" },
    tower: {
      title: "通往天空的动线",
      subtitle: "展望体验导览",
      description: "从天望甲板到天望回廊，沿着东京晴空塔的公开参观路线向上探索。",
      stats: { levels: "楼层", range: "高度", flow: "联动方式" },
      statsValue: { levels: "4", range: "340-450m", flow: "滚动联动" },
      observatoryLabel: "东京晴空塔展望设施",
      floorGuideCta: "查看楼层指南",
      officialSiteCta: "查看官网",
    },
  },
  ticket: {
    ...content.en.ticket,
    page: {
      title: "预订门票",
      subtitle: "天望甲板与天望回廊",
      promo: {
        eyebrow: "东京晴空塔入场预订",
        title: "预订天望甲板与天望回廊门票",
        description:
          "按顺序选择到访日期、门票类型与入场时间，更清晰地完成东京晴空塔主要观景路线的预订流程，并兼顾桌面与移动端体验。",
        primaryCta: "预订门票",
        secondaryCta: "查看楼层指南",
        trustBadges: ["JPY 2,200 起", "可选日期与时间", "甲板与回廊票种"],
        highlights: [
          {
            label: "入场方案",
            value: "2 种主要票种",
            copy: "可选择天望甲板单独入场，或包含天望回廊的完整路线。",
          },
          {
            label: "预订流程",
            value: "5 个步骤",
            copy: "日期、票种、时间、人数与访客信息依次完成。",
          },
          {
            label: "行前准备",
            value: "移动端友好",
            copy: "在手机上也能更清晰地比较并继续预订。",
          },
        ],
      },
    },
    steps: ["日期", "票种", "时间", "人数", "游客"],
    stepTitles: {
      1: { title: "选择日期", subtitle: "请选择您的到访日期" },
      2: { title: "选择票种", subtitle: "请选择门票类型" },
      3: { title: "选择时间", subtitle: "请选择入场时间段" },
      4: { title: "选择人数", subtitle: "请输入访客人数" },
      5: { title: "游客信息", subtitle: "请输入本次预订所需信息" },
    },
    buttons: { back: "返回", next: "下一步", completeBooking: "完成预订", makeAnotherBooking: "再次预订" },
    validation: {
      selectDate: "请选择日期",
      selectTime: "请选择时间段",
      selectPeople: "请至少选择 1 人",
      lastNameRequired: "姓氏为必填项",
      firstNameRequired: "名字为必填项",
      emailRequired: "邮箱为必填项",
      invalidEmail: "邮箱格式不正确",
      genderRequired: "请选择性别",
      birthdayRequired: "请输入出生日期",
      countryRequired: "请选择国家或地区",
      addressRequired: "请输入街道地址",
      cityRequired: "请输入城市",
      stateRequired: "请输入省份或地区",
      postcodeRequired: "请输入邮编",
      phoneRequired: "请输入电话号码",
      termsRequired: "完成预订前请先同意条款",
    },
    success: { title: "预订成功", reference: "预约编号", keepReference: "请保存此编号，并在到访当天于售票柜台出示。" },
    terms: {
      prefix: "我同意",
      and: "及",
      suffix: "。",
      nonRefundable: "我理解购票后门票不可退款。",
      termsLabel: "服务条款",
      privacyLabel: "隐私政策",
    },
    plans: {
      "tembo-deck": { name: "天望甲板门票", subtitle: "350层", description: "可进入 350 米主观景层的门票。" },
      "tembo-deck-galleria": { name: "天望甲板 + 天望回廊", subtitle: "350层 + 450层", description: "可同时进入天望甲板与天望回廊的门票。" },
    },
    people: { adult: "成人", adultAge: "15岁及以上", child: "儿童", childAge: "6-14岁" },
    sidebar: {
      title: "价格概览",
      date: "日期",
      time: "时间",
      plan: "票种",
      total: "合计",
      selectDate: "选择日期",
      adult: "成人",
      child: "儿童",
    },
    profile: {
      lastName: "姓",
      firstName: "名",
      email: "电子邮箱",
      phone: "电话号码",
      gender: "性别",
      birthday: "出生日期",
      country: "国家/地区",
      address1: "街道地址",
      city: "城市",
      state: "省份 / 地区",
      postcode: "邮编",
      countryPlaceholder: "请选择国家/地区",
      placeholders: {
        lastName: "Wang",
        firstName: "Lei",
        email: "example@email.com",
        phone: "13800138000",
        address1: "押上1-1-2",
        city: "墨田区",
        state: "东京都",
        postcode: "131-0045",
      },
      genders: [
        { value: "male", label: "男" },
        { value: "female", label: "女" },
        { value: "other", label: "其他" },
        { value: "prefer-not-to-say", label: "不愿透露" },
      ],
    },
    datePicker: {
      dayNames: ["日", "一", "二", "三", "四", "五", "六"],
      monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      weekdayRate: "平日",
    },
    planSelector: { perPerson: "每人" },
  },
  events: {
    ...content.en.events,
    categories: { All: "全部", "Pick Up": "推荐", Events: "活动", Dining: "餐饮", Collaboration: "联动", Tickets: "门票" },
    badges: { "Pick Up": "推荐", Limited: "限定", Seasonal: "季节", Ticket: "门票", Collaboration: "联动" },
    eventsPage: {
      ...content.en.events.eventsPage,
      eyebrow: "活动与新闻",
      title: "将季节活动、联动企划与门票主题内容集中呈现",
      description: "把官方活动内容整理为更便于浏览和制定行程的编辑式档案。",
      currentStories: "当前项目",
      eventTypes: "活动类型",
      planningFocus: "行程重点",
      planningFocusValue: "与展望台、咖啡馆和天际线体验相关的内容",
      pickupEyebrow: "推荐",
      pickupTitle: "当前最具代表性的塔内活动",
      pickupDescription: "这里汇集了最能体现东京晴空塔当下氛围的重点企划。",
      archiveEyebrow: "浏览档案",
      archiveTitle: "按氛围、形式或门票主题探索项目",
      planVisit: "规划行程",
      readStory: "查看详情",
      empty: "该分类下暂时没有内容。",
      noticesEyebrow: "最新通知",
      noticesTitle: "来自活动档案的简短更新",
      noticesDescription: "作为轻量级更新层，帮助访客更清晰地浏览活动内容。",
    },
    detailPage: {
      ...content.en.events.detailPage,
      back: "返回活动列表",
      buyTickets: "购买门票",
      officialReference: "官方参考",
      adaptedNote: "本概览基于官方活动页面整理，便于更清晰地规划行程。",
      overview: "概览",
      keyMoments: "亮点",
      visitPlanning: "行程建议",
      visitPlanningBody: "大多数项目都围绕展望台动线展开，因此建议先锁定门票，再确认时间相关说明。",
      reserveAdmission: "预订入场",
      exploreFloorGuide: "查看楼层指南",
      faqEyebrow: "FAQ",
      faqTitle: "游客常见问题",
      faqDescription: "根据官方活动页面整理，并以更清晰的行程规划方式呈现。",
    },
  },
};

content["zh-TW"] = {
  ...content["zh-CN"],
  enjoy: localizedEnjoyContent["zh-TW"],
  home: {
    ...content["zh-CN"].home,
    hero: { ...content["zh-CN"].home.hero, description: "登上高空，以全新視角俯瞰東京。天氣晴朗時，視野甚至可延伸至富士山。", primaryCta: "預訂門票", secondaryCta: "查看樓層", scroll: "滑動" },
    experience: {
      ...content["zh-CN"].home.experience,
      title: "TOKYO SKYTREE 遊玩指南",
      subtitle: "探索更多體驗",
      cta: "查看更多體驗",
      cards: [
        { ...content["zh-CN"].home.experience.cards[0], title: "周邊探索", subtitle: "走進晴空塔城鎮" },
        { ...content["zh-CN"].home.experience.cards[1], title: "特別體驗", subtitle: "塔內專屬時刻" },
        { ...content["zh-CN"].home.experience.cards[2], title: "夜景", subtitle: "日落後的東京" },
        { ...content["zh-CN"].home.experience.cards[3], title: "歷史與文化", subtitle: "隨時間佇立的高塔" },
      ],
    },
    tower: { ...content["zh-CN"].home.tower, title: "通往天空的動線", subtitle: "展望體驗導覽", observatoryLabel: "東京晴空塔展望設施", floorGuideCta: "查看樓層指南", officialSiteCta: "查看官網" },
    highlights: { title: "TOKYO SKYTREE 精選內容", subtitle: "推薦項目", cta: "查看所有文章", empty: "此分類目前尚無內容。" },
    news: { title: "新聞稿與資訊", subtitle: "最新動態", cta: "查看列表" },
  },
  ticket: {
    ...content["zh-CN"].ticket,
    page: {
      title: "預訂門票",
      subtitle: "天望甲板與天望回廊",
      promo: {
        eyebrow: "東京晴空塔入場預訂",
        title: "預訂天望甲板與天望回廊門票",
        description:
          "依序選擇到訪日期、票種與入場時間，以更清楚的方式完成東京晴空塔主要觀景路線的預訂，並兼顧桌面與行動裝置體驗。",
        primaryCta: "預訂門票",
        secondaryCta: "查看樓層指南",
        trustBadges: ["JPY 2,200 起", "可選日期與時間", "甲板與回廊票種"],
        highlights: [
          {
            label: "入場方案",
            value: "2 種主要票種",
            copy: "可選擇天望甲板單獨入場，或包含天望回廊的完整路線。",
          },
          {
            label: "預訂流程",
            value: "5 個步驟",
            copy: "日期、票種、時間、人數與訪客資訊依序完成。",
          },
          {
            label: "行前準備",
            value: "行動裝置友好",
            copy: "在手機上也能更清楚地比較並繼續預訂。",
          },
        ],
      },
    },
    steps: ["日期", "票種", "時間", "人數", "訪客"],
    buttons: { back: "返回", next: "下一步", completeBooking: "完成預訂", makeAnotherBooking: "再次預訂" },
    validation: {
      ...content["zh-CN"].ticket.validation,
      selectPeople: "請至少選擇 1 人",
      countryRequired: "請選擇國家或地區",
    },
    success: { title: "預訂成功", reference: "預約編號", keepReference: "請保留此編號，並於到訪當天在售票櫃台出示。" },
    terms: { prefix: "我同意", and: "與", suffix: "。", nonRefundable: "我了解購票後門票不可退款。", termsLabel: "服務條款", privacyLabel: "隱私權政策" },
    plans: {
      "tembo-deck": { name: "天望甲板門票", subtitle: "350樓", description: "可進入 350 公尺主觀景樓層的門票。" },
      "tembo-deck-galleria": { name: "天望甲板 + 天望回廊", subtitle: "350樓 + 450樓", description: "可同時進入天望甲板與天望回廊的門票。" },
    },
    people: { adult: "成人", adultAge: "15歲以上", child: "兒童", childAge: "6-14歲" },
    sidebar: { title: "價格總覽", date: "日期", time: "時間", plan: "票種", total: "合計", selectDate: "選擇日期", adult: "成人", child: "兒童" },
    profile: {
      lastName: "姓",
      firstName: "名",
      email: "電子郵件",
      phone: "電話號碼",
      gender: "性別",
      birthday: "出生日期",
      country: "國家/地區",
      address1: "街道地址",
      city: "城市",
      state: "省份 / 地區",
      postcode: "郵遞區號",
      countryPlaceholder: "請選擇國家/地區",
      placeholders: {
        lastName: "Wang",
        firstName: "Lei",
        email: "example@email.com",
        phone: "0912345678",
        address1: "押上1-1-2",
        city: "墨田區",
        state: "東京都",
        postcode: "131-0045",
      },
      genders: [
        { value: "male", label: "男" },
        { value: "female", label: "女" },
        { value: "other", label: "其他" },
        { value: "prefer-not-to-say", label: "不願透露" },
      ],
    },
    datePicker: { dayNames: ["日", "一", "二", "三", "四", "五", "六"], monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], weekdayRate: "平日" },
    planSelector: { perPerson: "每人" },
  },
  events: {
    ...content["zh-CN"].events,
    categories: { All: "全部", "Pick Up": "精選", Events: "活動", Dining: "餐飲", Collaboration: "聯動", Tickets: "門票" },
    badges: { "Pick Up": "精選", Limited: "限定", Seasonal: "季節", Ticket: "門票", Collaboration: "聯動" },
    eventsPage: {
      ...content["zh-CN"].events.eventsPage,
      eyebrow: "活動與新聞",
      description: "將官方活動內容整理成更便於瀏覽與規劃行程的編輯式檔案。",
      pickupEyebrow: "精選",
    },
    detailPage: {
      ...content["zh-CN"].events.detailPage,
      adaptedNote: "本概覽依據官方活動頁面整理，方便更清楚地規劃行程。",
      faqDescription: "依據官方活動頁面整理，並以更清晰的行程規劃方式呈現。",
    },
  },
};

content.th = {
  ...content.en,
  enjoy: localizedEnjoyContent.th,
  home: {
    ...content.en.home,
    hero: {
      eyebrow: "สูงเหนือโตเกียว 634 ม.",
      title: "TOKYO\nSKYTREE",
      description: "ขึ้นไปเหนือเมืองและมองโตเกียวจากมุมมองใหม่ ในวันที่อากาศดีอาจมองเห็นถึงภูเขาไฟฟูจิได้",
      primaryCta: "จองบัตร",
      secondaryCta: "ดูชั้นต่างๆ",
      scroll: "เลื่อนลง",
      imageAlt: "วิวกลางคืนจากจุดชมวิวโตเกียวสกายทรี",
    },
    experience: {
      ...content.en.home.experience,
      title: "คู่มือเที่ยว TOKYO SKYTREE",
      subtitle: "ค้นหาประสบการณ์เพิ่มเติม",
      cta: "ดูประสบการณ์เพิ่มเติม",
      cards: [
        { ...content.en.home.experience.cards[0], title: "สำรวจย่านรอบๆ", subtitle: "สัมผัสเมืองรอบสกายทรี" },
        { ...content.en.home.experience.cards[1], title: "ประสบการณ์พิเศษ", subtitle: "ช่วงเวลาพิเศษบนหอคอย" },
        { ...content.en.home.experience.cards[2], title: "วิวกลางคืน", subtitle: "โตเกียวยามค่ำ" },
        { ...content.en.home.experience.cards[3], title: "ประวัติศาสตร์และวัฒนธรรม", subtitle: "หอคอยที่ยืนยงผ่านกาลเวลา" },
      ],
    },
    highlights: { title: "ไฮไลต์ของ TOKYO SKYTREE", subtitle: "โปรแกรมแนะนำ", cta: "ดูบทความทั้งหมด", empty: "ยังไม่มีเรื่องราวในหมวดนี้" },
    news: { title: "ข่าวประชาสัมพันธ์และจดหมายข่าว", subtitle: "อัปเดตล่าสุด", cta: "ดูรายการ" },
    tower: {
      title: "เส้นทางสู่ท้องฟ้า",
      subtitle: "คู่มือประสบการณ์จุดชมวิว",
      description: "ตามเส้นทางการเข้าชมสาธารณะของ Tokyo Skytree จาก Tembo Deck ไปจนถึง Tembo Galleria",
      stats: { levels: "ชั้น", range: "ช่วงความสูง", flow: "การเชื่อมโยง" },
      statsValue: { levels: "4", range: "340-450m", flow: "เปลี่ยนตามการเลื่อน" },
      observatoryLabel: "จุดชมวิว TOKYO SKYTREE",
      floorGuideCta: "ดูคู่มือชั้น",
      officialSiteCta: "ดูเว็บไซต์ทางการ",
    },
  },
  ticket: {
    ...content.en.ticket,
    page: {
      title: "จองบัตรเข้าชม",
      subtitle: "Tembo Deck และ Tembo Galleria",
      promo: {
        eyebrow: "การจองเข้าชม Tokyo Skytree",
        title: "จองบัตรสำหรับ Tembo Deck และ Tembo Galleria",
        description:
          "เลือกวันที่เข้าชม ประเภทบัตร และช่วงเวลาเข้าชมตามลำดับ เพื่อจองเส้นทางชมวิวหลักของ Tokyo Skytree ได้อย่างชัดเจนทั้งบนเดสก์ท็อปและมือถือ",
        primaryCta: "จองบัตร",
        secondaryCta: "ดูคู่มือชั้น",
        trustBadges: ["เริ่มต้น JPY 2,200", "เลือกวันที่และเวลาได้", "มีทั้ง Deck และ Galleria"],
        highlights: [
          {
            label: "ตัวเลือกบัตร",
            value: "2 แพ็กเกจหลัก",
            copy: "เลือกระหว่าง Tembo Deck แบบเดี่ยว หรือเส้นทางรวม Tembo Galleria",
          },
          {
            label: "ขั้นตอนการจอง",
            value: "5 ขั้นตอน",
            copy: "วันที่ แพ็กเกจ เวลา จำนวน และข้อมูลผู้เข้าชม",
          },
          {
            label: "การใช้งาน",
            value: "เหมาะกับมือถือ",
            copy: "เปรียบเทียบตัวเลือกและจองต่อได้สะดวกบนหน้าจอขนาดเล็ก",
          },
        ],
      },
    },
    steps: ["วันที่", "แพ็กเกจ", "เวลา", "จำนวน", "ผู้เข้าชม"],
    stepTitles: {
      1: { title: "เลือกวันที่", subtitle: "เลือกวันที่ต้องการเข้าชม" },
      2: { title: "เลือกแพ็กเกจ", subtitle: "เลือกประเภทบัตร" },
      3: { title: "เลือกเวลา", subtitle: "เลือกช่วงเวลาเข้าชม" },
      4: { title: "เลือกจำนวน", subtitle: "จำนวนผู้เข้าชม" },
      5: { title: "ข้อมูลผู้เข้าชม", subtitle: "กรอกข้อมูลสำหรับการจองนี้" },
    },
    buttons: { back: "ย้อนกลับ", next: "ถัดไป", completeBooking: "ยืนยันการจอง", makeAnotherBooking: "จองอีกครั้ง" },
    validation: {
      selectDate: "กรุณาเลือกวันที่",
      selectTime: "กรุณาเลือกช่วงเวลา",
      selectPeople: "กรุณาเลือกอย่างน้อย 1 คน",
      lastNameRequired: "กรุณากรอกนามสกุล",
      firstNameRequired: "กรุณากรอกชื่อ",
      emailRequired: "กรุณากรอกอีเมล",
      invalidEmail: "รูปแบบอีเมลไม่ถูกต้อง",
      genderRequired: "กรุณาเลือกเพศ",
      birthdayRequired: "กรุณากรอกวันเกิด",
      countryRequired: "กรุณาเลือกประเทศ",
      addressRequired: "กรุณากรอกที่อยู่",
      cityRequired: "กรุณากรอกเมือง",
      stateRequired: "กรุณากรอกรัฐหรือภูมิภาค",
      postcodeRequired: "กรุณากรอกรหัสไปรษณีย์",
      phoneRequired: "กรุณากรอกหมายเลขโทรศัพท์",
      termsRequired: "กรุณายอมรับเงื่อนไขก่อนยืนยันการจอง",
    },
    success: { title: "ยืนยันการจองแล้ว", reference: "หมายเลขอ้างอิง", keepReference: "โปรดเก็บหมายเลขนี้ไว้และแสดงที่เคาน์เตอร์บัตรในวันเข้าชม" },
    terms: {
      prefix: "ฉันยอมรับ",
      and: "และ",
      suffix: "",
      nonRefundable: "ฉันเข้าใจว่าบัตรไม่สามารถขอคืนเงินได้หลังการซื้อ",
      termsLabel: "ข้อกำหนดการใช้บริการ",
      privacyLabel: "นโยบายความเป็นส่วนตัว",
    },
    plans: {
      "tembo-deck": { name: "บัตร Tembo Deck", subtitle: "ชั้น 350", description: "บัตรเข้าชมจุดชมวิวหลักที่ความสูง 350 เมตร" },
      "tembo-deck-galleria": { name: "Tembo Deck และ Tembo Galleria", subtitle: "ชั้น 350 + 450", description: "เข้าชมได้ทั้ง Tembo Deck และ Tembo Galleria" },
    },
    people: { adult: "ผู้ใหญ่", adultAge: "อายุ 15 ปีขึ้นไป", child: "เด็ก", childAge: "อายุ 6-14 ปี" },
    sidebar: { title: "สรุปราคา", date: "วันที่", time: "เวลา", plan: "แพ็กเกจ", total: "รวม", selectDate: "เลือกวันที่", adult: "ผู้ใหญ่", child: "เด็ก" },
    profile: {
      lastName: "นามสกุล",
      firstName: "ชื่อ",
      email: "อีเมล",
      phone: "หมายเลขโทรศัพท์",
      gender: "เพศ",
      birthday: "วันเกิด",
      country: "ประเทศ",
      address1: "ที่อยู่",
      city: "เมือง",
      state: "รัฐ / ภูมิภาค",
      postcode: "รหัสไปรษณีย์",
      countryPlaceholder: "เลือกประเทศ",
      placeholders: {
        lastName: "Somsak",
        firstName: "Anan",
        email: "example@email.com",
        phone: "0812345678",
        address1: "1-1-2 Oshiage",
        city: "Sumida",
        state: "Tokyo",
        postcode: "131-0045",
      },
      genders: [
        { value: "male", label: "ชาย" },
        { value: "female", label: "หญิง" },
        { value: "other", label: "อื่นๆ" },
        { value: "prefer-not-to-say", label: "ไม่ระบุ" },
      ],
    },
    datePicker: { dayNames: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"], monthNames: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], weekdayRate: "วันธรรมดา" },
    planSelector: { perPerson: "ต่อคน" },
  },
  events: {
    ...content.en.events,
    categories: { All: "ทั้งหมด", "Pick Up": "แนะนำ", Events: "อีเวนต์", Dining: "อาหาร", Collaboration: "คอลลาบอเรชัน", Tickets: "บัตร" },
    badges: { "Pick Up": "แนะนำ", Limited: "จำกัด", Seasonal: "ตามฤดูกาล", Ticket: "บัตร", Collaboration: "คอลลาบอเรชัน" },
    eventsPage: {
      ...content.en.events.eventsPage,
      eyebrow: "อีเวนต์และข่าว",
      title: "รวมโปรแกรมตามฤดูกาล คอลลาบอเรชัน และเรื่องราวที่เชื่อมกับการเข้าชม",
      description: "คลังข้อมูลกิจกรรมทางการที่เรียบเรียงใหม่ให้อ่านง่ายและวางแผนได้สะดวกกว่าเดิม",
      currentStories: "เรื่องราวปัจจุบัน",
      eventTypes: "ประเภทกิจกรรม",
      planningFocus: "จุดโฟกัส",
      planningFocusValue: "โปรแกรมที่เชื่อมกับจุดชมวิว คาเฟ่ และช่วงเวลาบนเส้นขอบฟ้า",
      pickupEyebrow: "แนะนำ",
      pickupTitle: "เรื่องเด่นบนปฏิทินของหอคอยตอนนี้",
      pickupDescription: "รวมโปรแกรมที่สะท้อนบรรยากาศของ Tokyo Skytree ในช่วงเวลานี้ได้ชัดที่สุด",
      archiveEyebrow: "สำรวจคลังข้อมูล",
      archiveTitle: "ค้นหาโปรแกรมตามอารมณ์ รูปแบบ หรือแนวคิดของบัตร",
      planVisit: "วางแผนการเที่ยว",
      readStory: "อ่านต่อ",
      empty: "ยังไม่มีเนื้อหาในหมวดนี้",
      noticesEyebrow: "ประกาศล่าสุด",
      noticesTitle: "อัปเดตสั้นๆ จากคลังอีเวนต์",
      noticesDescription: "ชั้นข้อมูลอัปเดตแบบเบาๆ เพื่อช่วยให้ส่วนอีเวนต์ไล่อ่านได้ง่ายขึ้น",
    },
    detailPage: {
      ...content.en.events.detailPage,
      back: "กลับไปหน้าอีเวนต์",
      buyTickets: "ซื้อบัตร",
      officialReference: "อ้างอิงทางการ",
      adaptedNote: "สรุปนี้อ้างอิงจากหน้าโปรแกรมทางการและจัดเรียงใหม่เพื่อให้วางแผนการเดินทางได้ง่ายขึ้น",
      overview: "ภาพรวม",
      keyMoments: "ช่วงสำคัญ",
      visitPlanning: "การวางแผนเที่ยว",
      visitPlanningBody: "โปรแกรมส่วนใหญ่เชื่อมกับเส้นทางการชมวิว ดังนั้นควรจองบัตรก่อน แล้วค่อยตรวจรายละเอียดเวลาที่สำคัญ",
      reserveAdmission: "จองการเข้าชม",
      exploreFloorGuide: "ดูคู่มือชั้น",
      faqEyebrow: "FAQ",
      faqTitle: "คำถามก่อนเข้าชม",
      faqDescription: "คำตอบที่สรุปจากหน้าโปรแกรมทางการให้อยู่ในรูปแบบที่วางแผนได้ง่ายขึ้น",
    },
  },
};

const floorWords: Record<Locale, string> = {
  en: "Floor",
  ja: "フロア",
  ko: "층",
  "zh-CN": "层",
  "zh-TW": "樓",
  th: "ชั้น",
};

export function getLocalizedContent(locale: Locale) {
  return content[locale] ?? content.en;
}

export function getLocalizedFloors(locale: Locale) {
  return localizedFloors[locale] ?? localizedFloors.en;
}

export function getFloorWord(locale: Locale) {
  return floorWords[locale] ?? floorWords.en;
}

export function getEventCategoryLabel(locale: Locale, value: string) {
  return getLocalizedContent(locale).events.categories[value] ?? value;
}

export function getEventBadgeLabel(locale: Locale, value: string) {
  return getLocalizedContent(locale).events.badges[value] ?? value;
}
