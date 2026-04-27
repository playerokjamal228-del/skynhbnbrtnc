"use client";

import { useRef } from "react";
import { useLocale } from "@/components/layout/locale-provider";
import { FloorSection } from "@/components/home/floor-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkytreeTowerSvg } from "@/components/tower/skytree-tower-svg";
import { useActiveFloor } from "@/components/tower/tower-context";
import { getLocalizedContent, getLocalizedFloors } from "@/lib/localized-content";

function TowerContent() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { locale } = useLocale();
  const activeFloor = useActiveFloor("350", 0.4, sectionRef);
  const floors = getLocalizedFloors(locale);
  const towerCopy = getLocalizedContent(locale).home.tower;

  return (
    <div
      ref={sectionRef}
      className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[390px_minmax(0,1fr)] xl:gap-10"
    >
      <aside className="hidden px-4 sm:px-8 lg:block lg:px-2">
        <div className="lg:sticky lg:top-24">
          <SkytreeTowerSvg activeFloor={activeFloor} />
        </div>
      </aside>

      <div className="flex-1 space-y-3 sm:space-y-4">
        <div className="lg:hidden">
          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {floors.map((floor) => {
                const isActive = activeFloor === floor.id;

                return (
                  <a
                    key={floor.id}
                    href={`#floor-${floor.id}`}
                    className={`min-w-0 rounded-[20px] border px-3 py-3 transition-all sm:px-4 ${
                      isActive
                        ? "border-skytree-gold bg-skytree-gold/10 shadow-[0_10px_24px_rgba(200,169,110,0.16)]"
                        : "border-skytree-border bg-white"
                    }`}
                  >
                    <p className="text-[9px] uppercase tracking-[0.18em] text-skytree-light-gray sm:text-[10px] sm:tracking-[0.24em]">
                      {floor.category}
                    </p>
                    <p className="mt-2 font-serif text-2xl leading-none text-skytree-black sm:text-[28px]">
                      {floor.label}
                    </p>
                    <p className="mt-2 text-[11px] leading-4 text-skytree-gray sm:text-xs sm:leading-5">
                      {floor.name}
                    </p>
                  </a>
                );
              })}
          </div>
        </div>

        {floors.map((floor) => (
          <FloorSection
            key={floor.id}
            id={`floor-${floor.id}`}
            floorId={floor.id}
            category={floor.category}
            label={floor.label}
            name={floor.name}
            description={floor.description}
            image={floor.image}
            imageAlt={floor.imageAlt}
            floorGuideLink={floor.floorGuideLink}
            officialLink={floor.officialLink}
            floorGuideLabel={towerCopy.floorGuideCta}
            officialSiteLabel={towerCopy.officialSiteCta}
            observatoryLabel={towerCopy.observatoryLabel}
          />
        ))}
      </div>
    </div>
  );
}

export function InteractiveTowerSection() {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).home.tower;

  return (
    <section className="relative bg-skytree-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(200,169,110,0.12),rgba(255,255,255,0))]" />
        <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,169,110,0.12),rgba(255,255,255,0)_70%)] blur-2xl" />
        <div className="absolute right-[-8%] bottom-12 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(15,15,15,0.06),rgba(255,255,255,0)_72%)] blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 mb-12 md:mb-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,420px)] lg:items-end">
          <div>
            <SectionHeading
              title={copy.title}
              subtitle={copy.subtitle}
              centered={false}
              className="mb-5"
            />
            <p className="max-w-2xl text-skytree-gray text-sm md:text-base leading-7">
              {copy.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 border-t border-skytree-border pt-5 text-left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-skytree-light-gray">{copy.stats.levels}</p>
              <p className="mt-2 font-serif text-2xl text-skytree-black">{copy.statsValue.levels}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-skytree-light-gray">{copy.stats.range}</p>
              <p className="mt-2 font-serif text-2xl text-skytree-black">{copy.statsValue.range}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-skytree-light-gray">{copy.stats.flow}</p>
              <p className="mt-2 font-serif text-2xl text-skytree-black">{copy.statsValue.flow}</p>
            </div>
          </div>
        </div>
      </div>

      <TowerContent />
    </section>
  );
}
