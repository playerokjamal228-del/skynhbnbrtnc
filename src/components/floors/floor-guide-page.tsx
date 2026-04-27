"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Baby,
  ArrowUpDown,
  SmartphoneCharging,
  Wifi,
  Accessibility,
  HeartPulse,
} from "lucide-react";
import { useLocale } from "@/components/layout/locale-provider";
import { Button } from "@/components/ui/button";
import { getLocalizedPageCopy } from "@/lib/localized-pages";
import { useActiveFloor } from "@/components/tower/tower-context";

type FacilityKey =
  | "women"
  | "men"
  | "accessible"
  | "priority-elevator"
  | "aed"
  | "nursing"
  | "wifi"
  | "battery";

interface FloorGuideRow {
  id: string;
  towerLabel: string;
  floorLabel: string;
  subtitle?: string;
  href: string;
  features: string[];
  facilities: FacilityKey[];
  activeBackground?: boolean;
}

interface FloorGuideSection {
  id: string;
  title: string;
  href: string;
  rows: FloorGuideRow[];
}

const facilityMeta: Record<
  FacilityKey,
  { label: string; icon: typeof Accessibility; dark?: boolean }
> = {
  women: { label: "Women's restroom", icon: Accessibility },
  men: { label: "Men's restroom", icon: Accessibility },
  accessible: { label: "Accessible restroom", icon: Accessibility },
  "priority-elevator": {
    label: "Wheelchair and stroller-priority elevator",
    icon: ArrowUpDown,
    dark: true,
  },
  aed: { label: "Automated External Defibrillator (AED)", icon: HeartPulse },
  nursing: { label: "Nursing room", icon: Baby },
  wifi: { label: "Free Wi-Fi", icon: Wifi, dark: true },
  battery: { label: "Mobile battery rental", icon: SmartphoneCharging, dark: true },
};

const sections: FloorGuideSection[] = [
  {
    id: "tembo-galleria",
    title: "TOKYO SKYTREE Tembo Galleria",
    href: "/floors#tembo-galleria",
    rows: [
      {
        id: "450",
        towerLabel: "450m",
        floorLabel: "Floor 450",
        href: "/floors#450",
        features: ["Sorakara point", "High-Definition Digital Telescope"],
        facilities: ["women", "men", "accessible"],
      },
      {
        id: "445",
        towerLabel: "445m",
        floorLabel: "Floor 445",
        href: "/floors#445",
        features: ["Commemorative Photography"],
        facilities: ["aed"],
      },
    ],
  },
  {
    id: "tembo-deck",
    title: "TOKYO SKYTREE Tembo Deck",
    href: "/floors#tembo-deck",
    rows: [
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
        facilities: ["women", "men", "accessible", "priority-elevator"],
      },
      {
        id: "345",
        towerLabel: "345m",
        floorLabel: "Floor 345",
        href: "/floors#345",
        features: ["Sky Restaurant 634", "SKYTREE SHOP", "SKYTREE post"],
        facilities: ["accessible", "aed", "priority-elevator"],
        activeBackground: true,
      },
      {
        id: "340",
        towerLabel: "340m",
        floorLabel: "Floor 340",
        href: "/floors#340",
        features: ["SKYTREE CAFE", "Glass Floor", "Commemorative Photography"],
        facilities: ["women", "men", "accessible", "priority-elevator"],
      },
    ],
  },
  {
    id: "ground-floors",
    title: "B1F to 5F floors",
    href: "/floors#ground-floors",
    rows: [
      {
        id: "5",
        towerLabel: "5F",
        floorLabel: "5F Exit Floor",
        href: "/floors#5",
        features: ["SKYTREE SHOP", "Mobile Battery Rental", "Foreign Currency Exchange"],
        facilities: ["women", "men", "accessible", "aed"],
      },
      {
        id: "4",
        towerLabel: "4F",
        floorLabel: "4th Floor Entrance",
        href: "/floors#4",
        features: ["Ticket Counter", "Mobile Battery Rental", "Sumida River Digital Picture Scroll", "SKYTREE ARCHIVES"],
        facilities: ["women", "men", "accessible", "nursing", "aed"],
        activeBackground: true,
      },
      {
        id: "2-3",
        towerLabel: "2F / 3F",
        floorLabel: "2F / 3F",
        href: "/floors#2-3",
        features: ["TOKYO Solamachi"],
        facilities: [],
      },
      {
        id: "1",
        towerLabel: "1F",
        floorLabel: "1F Group Floor",
        href: "/floors#1",
        features: ["Group Ticket Counter", "SKYTREE GALLERY", "Group Bus Parking", "Prayer area"],
        facilities: ["women", "men", "accessible", "nursing", "aed"],
      },
      {
        id: "b1",
        towerLabel: "B1F",
        floorLabel: "B1F",
        href: "/floors#b1",
        features: ["Underground Car Parking"],
        facilities: ["women", "men", "accessible", "aed"],
      },
    ],
  },
];

const towerGroups = [
  {
    title: "TOKYO SKYTREE Tembo Galleria",
    floors: ["450", "445"],
  },
  {
    title: "TOKYO SKYTREE Tembo Deck",
    floors: ["350", "345", "340"],
  },
  {
    title: "1st, 4th, and 5th floors",
    floors: ["5", "4", "1", "b1"],
  },
];

const towerPositions: Record<string, { top: string; left: string; ring: number }> = {
  "450": { top: "24.5%", left: "44.5%", ring: 24 },
  "445": { top: "30.5%", left: "44.5%", ring: 24 },
  "350": { top: "49.8%", left: "42.5%", ring: 102 },
  "345": { top: "58.5%", left: "43.5%", ring: 24 },
  "340": { top: "64.2%", left: "43.5%", ring: 24 },
  "5": { top: "84.5%", left: "43.8%", ring: 24 },
  "4": { top: "90.2%", left: "43.8%", ring: 24 },
  "1": { top: "96%", left: "41.8%", ring: 94 },
  b1: { top: "99.2%", left: "43.8%", ring: 24 },
};

function FloorGuideTower({ activeFloor }: { activeFloor: string | null }) {
  const { locale } = useLocale();
  const copy = getLocalizedPageCopy(locale).floorGuide;
  const currentFloor = activeFloor && towerPositions[activeFloor] ? activeFloor : "350";
  const activeMarker = towerPositions[currentFloor];

  return (
    <div
      className="relative mx-auto h-[420px] max-w-[360px] px-2 py-4 sm:h-[560px] sm:max-w-[420px] sm:py-5 lg:h-[min(600px,calc(100vh-8rem))] lg:max-w-none"
      data-active-floor={currentFloor}
    >
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.18),rgba(255,255,255,0.18)),radial-gradient(rgba(200,169,110,0.08)_1px,transparent_1px)] [background-size:100%_100%,22px_22px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_42%,rgba(255,255,255,0.95),rgba(250,250,248,0.84)_45%,rgba(245,243,239,0.74)_70%,rgba(243,239,231,0.45)_100%)]" />

      <div className="relative h-full">
        <div className="absolute left-[4%] top-[1.5%] bottom-[1%] w-[43%]">
          <Image
            src="/images/tower/floor_img_skytree.png"
            alt={copy.towerImageAlt}
            fill
            sizes="280px"
            className="object-contain object-left opacity-58"
          />

          <span className="absolute bottom-[2.5%] left-[9%] h-10 w-[34%] rounded-full bg-skytree-gold/12 blur-2xl" />

          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              top: activeMarker.top,
              left: activeMarker.left,
              width: `${activeMarker.ring}px`,
              height: `${activeMarker.ring}px`,
            }}
          >
            <span className="absolute inset-0 rounded-full border-[4px] border-skytree-gold/60 tower-ring-pulse" />
            <span className="absolute inset-[15%] rounded-full border border-skytree-gold/25" />
          </span>
        </div>

        <div className="absolute left-[39.5%] top-[9%] right-0 space-y-7 sm:space-y-11">
          {copy.towerGroups.map((group, index) => {
            const floors = towerGroups[index].floors;
            const groupActive = floors.includes(currentFloor);

            return (
              <div key={group}>
                <p className={`max-w-[160px] text-[11px] font-medium leading-5 transition-colors duration-500 sm:max-w-[180px] sm:text-[13px] sm:leading-7 ${groupActive ? "text-skytree-black" : "text-skytree-light-gray/70"}`}>
                  {group}
                </p>
                <div className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                  {floors.map((floorId) => {
                    const isActive = currentFloor === floorId;

                    return (
                      <Link
                        key={floorId}
                        href={`#${floorId}`}
                        className="flex items-center gap-3"
                      >
                        <span
                          className={`h-4 w-4 rounded-full transition-all duration-500 ${isActive ? "bg-skytree-gold shadow-[0_0_0_6px_rgba(200,169,110,0.14)]" : "bg-[#d7d7d4]"}`}
                        />
                        <span className="text-[11px] leading-none text-[#b7b7b2] sm:text-[14px]">
                          {floorId === "2-3" ? copy.floorWord : floorId.startsWith("b") ? "" : floorId.length <= 2 && /^\d+$/.test(floorId) ? "" : copy.floorWord}
                        </span>
                        <span className={`font-serif text-[20px] leading-none transition-colors duration-500 sm:text-[25px] ${isActive ? "text-skytree-black" : "text-[#b7b7b2]"}`}>
                          {towerPositions[floorId] ? sections.flatMap((section) => section.rows).find((row) => row.id === floorId)?.towerLabel ?? floorId : floorId}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TowerFooterCard() {
  const { locale } = useLocale();
  const copy = getLocalizedPageCopy(locale).floorGuide.footer;
  return (
    <div className="absolute bottom-0 left-0 right-4 rounded-[28px] border border-[#dfd2bf] bg-white/88 px-5 py-5 shadow-[0_18px_45px_rgba(44,34,16,0.08)] backdrop-blur-[2px]">
      <p className="text-[11px] uppercase tracking-[0.24em] text-skytree-gold">
        {copy.eyebrow}
      </p>
      <h3 className="mt-3 font-serif text-[28px] leading-none text-skytree-black">
        {copy.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-skytree-charcoal">
        {copy.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {copy.tags.map((label) => (
          <span
            key={label}
            className="rounded-full border border-[#ddd2c0] bg-[#faf7f0] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-skytree-gray"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function MobileFloorGuideNavigator({ activeFloor }: { activeFloor: string | null }) {
  const { locale } = useLocale();
  const copy = getLocalizedPageCopy(locale).floorGuide;
  const groupedRows = [
    {
      title: copy.sectionTitles.temboGalleria,
      rows: copy.rows.slice(0, 2),
    },
    {
      title: copy.sectionTitles.temboDeck,
      rows: copy.rows.slice(2, 5),
    },
    {
      title: copy.sectionTitles.ground,
      rows: copy.rows.slice(5),
    },
  ];

  return (
    <div className="rounded-[24px] border border-[#dfd2bf] bg-white/88 p-4 shadow-[0_18px_45px_rgba(44,34,16,0.08)]">
      <div className="space-y-4">
        {groupedRows.map((group) => (
          <div key={group.title}>
            <p className="text-[11px] uppercase tracking-[0.22em] text-skytree-light-gray">
              {group.title}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.rows.map((row) => {
                const isActive = activeFloor === row.id;

                return (
                  <Link
                    key={row.id}
                    href={`#${row.id}`}
                    className={`rounded-full border px-4 py-2 text-sm transition-all ${
                      isActive
                        ? "border-skytree-gold bg-skytree-gold/10 text-skytree-black shadow-[0_8px_18px_rgba(200,169,110,0.14)]"
                        : "border-[#ddd2c0] bg-[#faf7f0] text-skytree-gray"
                    }`}
                  >
                    {row.floorLabel}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FacilityPill({ facility }: { facility: FacilityKey }) {
  const { locale } = useLocale();
  const labels = getLocalizedPageCopy(locale).floorGuide.facilitiesTitleMap;
  const meta = facilityMeta[facility];
  const Icon = meta.icon;
  const label = labels[facility] ?? meta.label;

  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${meta.dark ? "bg-[#7d7d7a]" : "bg-[#adadab]"} text-white`}
      title={label}
      aria-label={label}
    >
      <Icon className="h-4 w-4" strokeWidth={2.2} />
    </span>
  );
}

function ElevatorColumn({ count }: { count: number }) {
  return (
    <div className="relative hidden w-[92px] shrink-0 items-stretch justify-center lg:flex">
      <span className="absolute bottom-10 top-10 left-1/2 w-px -translate-x-1/2 border-l-2 border-dashed border-[#bdbdbb]" />
      <div className="relative z-10 flex h-full flex-col items-center justify-around py-5">
        {Array.from({ length: Math.max(1, count) }).map((_, index) => (
          <span
            key={index}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a9a9a6] text-[10px] font-medium text-white shadow-[0_8px_20px_rgba(30,30,30,0.08)]"
          >
            EV
          </span>
        ))}
      </div>
    </div>
  );
}

function FloorGuideSectionBlock({
  section,
  activeFloor,
}: {
  section: FloorGuideSection;
  activeFloor: string | null;
}) {
  return (
    <section id={section.id} className="rounded-[28px] bg-white/78 p-5 shadow-[0_18px_50px_rgba(20,20,20,0.05)] backdrop-blur-[2px] md:p-7">
      <div className="border-b-2 border-skytree-black/85 bg-[#f4f4f2] px-6 py-5">
        <Link href={section.href} className="inline-flex items-center gap-3 text-skytree-black">
          <span className="font-sans text-[22px] md:text-[24px]">{section.title}</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-skytree-gold text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      <div className="flex">
        <div className="min-w-0 flex-1">
          {section.rows.map((row) => {
            const isActive = activeFloor === row.id;

            return (
              <div
                key={row.id}
                id={row.id}
                data-floor={row.id}
                className={`grid min-h-[160px] gap-6 border-b border-[#dededb] px-6 py-8 md:grid-cols-[220px_minmax(0,1fr)] ${row.activeBackground || isActive ? "bg-[#f2f6fb]" : "bg-transparent"}`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-3 h-5 w-5 shrink-0 rounded-full bg-skytree-gold/85" />
                  <div>
                    <Link href={row.href} className="inline-flex items-center gap-3 text-skytree-black">
                      <span className="font-serif text-[28px] leading-none">{row.floorLabel}</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                    {row.subtitle ? (
                      <p className="mt-2 text-sm text-skytree-gray">{row.subtitle}</p>
                    ) : null}
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="grid gap-x-8 gap-y-3 md:grid-cols-2 xl:grid-cols-3">
                    {row.features.map((feature) => (
                      <p key={feature} className="text-[15px] leading-7 text-skytree-charcoal">
                        {feature}
                      </p>
                    ))}
                  </div>

                  {row.facilities.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {row.facilities.map((facility) => (
                        <FacilityPill key={facility} facility={facility} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <ElevatorColumn count={section.rows.length} />
      </div>
    </section>
  );
}

function FloorGuideContent() {
  const { locale } = useLocale();
  const copy = getLocalizedPageCopy(locale).floorGuide;
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const activeFloor = useActiveFloor("350", 0.22, sectionRef);
  const localizedSections: FloorGuideSection[] = [
    { ...sections[0], title: copy.sectionTitles.temboGalleria, rows: copy.rows.slice(0, 2).map((row) => ({ ...row, facilities: sections[0].rows.find((item) => item.id === row.id)?.facilities ?? [] })) },
    { ...sections[1], title: copy.sectionTitles.temboDeck, rows: copy.rows.slice(2, 5).map((row) => ({ ...row, facilities: sections[1].rows.find((item) => item.id === row.id)?.facilities ?? [] })) },
    { ...sections[2], title: copy.sectionTitles.ground, rows: copy.rows.slice(5).map((row) => ({ ...row, facilities: sections[2].rows.find((item) => item.id === row.id)?.facilities ?? [] })) },
  ];

  return (
    <div
      ref={sectionRef}
      className="mx-auto mt-10 grid max-w-[1500px] gap-8 px-4 md:mt-12 md:px-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-8"
    >
      <aside className="relative hidden lg:block lg:pr-4">
        <div className="sticky top-24 z-20">
          <FloorGuideTower activeFloor={activeFloor} />
        </div>

        <TowerFooterCard />
      </aside>

      <div className="lg:hidden">
        <MobileFloorGuideNavigator activeFloor={activeFloor} />
      </div>

      <div className="space-y-8 lg:relative lg:z-10 lg:space-y-10">
        {localizedSections.map((section) => (
          <FloorGuideSectionBlock key={section.id} section={section} activeFloor={activeFloor} />
        ))}

        <section className="rounded-[28px] bg-white/78 px-6 py-8 shadow-[0_18px_50px_rgba(20,20,20,0.05)] backdrop-blur-[2px] md:px-8">
          <div className="flex flex-wrap gap-6 border-b border-[#d8d8d4] pb-8 text-skytree-charcoal">
            {(["women", "men", "accessible", "nursing", "aed", "priority-elevator"] as FacilityKey[]).map((facility) => (
              <div key={facility} className="flex items-center gap-3">
                <FacilityPill facility={facility} />
                <span className="text-[15px] leading-6">{copy.facilitiesTitleMap[facility]}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-10 py-10">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2f2f31] text-white">
                <Wifi className="h-7 w-7" />
              </span>
              <p className="text-lg leading-7 text-skytree-charcoal">{copy.wifiLabel}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2f2f31] text-white">
                <SmartphoneCharging className="h-7 w-7" />
              </span>
              <p className="max-w-[260px] text-lg leading-7 text-skytree-charcoal">{copy.batteryLabel}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <Button variant="outline" size="lg" href="/access" className="flex-1">
              {copy.mapCta}
            </Button>
            <Button variant="secondary" size="lg" href="/faq" className="flex-1">
              {copy.facilitiesCta}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

function IntroCard({
  title,
  copy,
  image,
  priority = false,
}: {
  title: string;
  copy: string;
  image: string;
  priority?: boolean;
}) {
  return (
    <article className="min-w-0 snap-center overflow-hidden rounded-[26px] bg-[#0f0f10] text-white shadow-[0_26px_60px_rgba(0,0,0,0.22)]">
      <div className="relative aspect-[16/11]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
          priority={priority}
        />
      </div>
      <div className="px-6 py-6">
        <h3 className="font-sans text-[20px] font-semibold leading-tight">{title}</h3>
        <p className="mt-4 text-[15px] leading-7 text-white/78">{copy}</p>
      </div>
    </article>
  );
}

export function FloorGuidePage() {
  const { locale } = useLocale();
  const copy = getLocalizedPageCopy(locale).floorGuide;
  return (
    <div className="relative bg-[#f7f4ee] pt-16">
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(200,169,110,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute inset-x-0 top-0 h-[440px] bg-[linear-gradient(180deg,#121212_0%,#151515_18%,rgba(21,21,21,0.92)_44%,rgba(247,244,238,0)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[360px] opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_100%]" />

      <div className="relative">
        <section className="px-4 pb-16 pt-12 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="text-center text-white">
              <p className="text-xs uppercase tracking-[0.34em] text-skytree-gold-light">{copy.eyebrow}</p>
              <h1 className="mt-4 font-serif text-5xl leading-none md:text-7xl">{copy.title}</h1>
              <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-white/88 md:text-[18px]">
                {copy.description}
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {copy.introCards.map((card, index) => (
                <IntroCard
                  key={card.title}
                  title={card.title}
                  copy={card.copy}
                  image={card.image}
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </section>

        <FloorGuideContent />
      </div>
    </div>
  );
}
