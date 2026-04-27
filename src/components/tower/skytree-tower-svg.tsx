"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/components/layout/locale-provider";
import { cn } from "@/lib/utils";
import { getFloorWord, getLocalizedFloors } from "@/lib/localized-content";

interface SkytreeTowerSvgProps {
  activeFloor: string | null;
}

const FLOOR_POSITIONS: Record<
  string,
  { dotTop: string; dotLeft: string; ringSize: number; navTop: string }
> = {
  "450": { dotTop: "23%", dotLeft: "40.5%", ringSize: 24, navTop: "23.5%" },
  "350": { dotTop: "58.6%", dotLeft: "38.6%", ringSize: 102, navTop: "55%" },
  "345": { dotTop: "65.1%", dotLeft: "41.6%", ringSize: 24, navTop: "65%" },
  "340": { dotTop: "69.7%", dotLeft: "41.8%", ringSize: 24, navTop: "70%" },
};

export function SkytreeTowerSvg({ activeFloor }: SkytreeTowerSvgProps) {
  const { locale } = useLocale();
  const floors = getLocalizedFloors(locale);
  const floorWord = getFloorWord(locale);
  const currentFloor =
    activeFloor && FLOOR_POSITIONS[activeFloor] ? activeFloor : "350";
  const activeMarker = FLOOR_POSITIONS[currentFloor];

  return (
    <div
      className="relative mx-auto h-[360px] w-full max-w-[340px] sm:h-[460px] sm:max-w-[420px] lg:h-[min(620px,calc(100vh-8rem))] lg:max-w-none xl:h-[min(680px,calc(100vh-8rem))]"
      data-active-floor={currentFloor}
    >
      <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_32%_52%,rgba(255,255,255,0.98),rgba(252,252,251,0.94)_32%,rgba(245,243,238,0.72)_58%,rgba(255,255,255,0)_82%)]" />
      <div className="absolute inset-y-[7%] left-[2%] w-[46%]">
        <div className="absolute inset-y-0 left-[34%] w-[48%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.88),rgba(255,255,255,0)_74%)] blur-2xl" />
        <Image
          src="/images/tower/img_skytree.webp"
          alt="Tokyo Skytree tower illustration"
          fill
          sizes="(max-width: 1024px) 34vw, 240px"
          className="object-contain object-left opacity-58"
          priority={false}
        />

        {floors.map((floor) => {
          const marker = FLOOR_POSITIONS[floor.id];
          const isActive = currentFloor === floor.id;

          return (
            <span
              key={floor.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: marker.dotTop, left: marker.dotLeft }}
            >
              <span
                className={cn(
                  "block h-4 w-4 rounded-full border border-white/80 transition-all duration-700",
                  isActive
                    ? "bg-skytree-gold shadow-[0_0_0_6px_rgba(200,169,110,0.14)]"
                    : "bg-[#d8d8d6]"
                )}
              />
            </span>
          );
        })}

        <span
          className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            top: activeMarker.dotTop,
            left: activeMarker.dotLeft,
            width: `${activeMarker.ringSize}px`,
            height: `${activeMarker.ringSize}px`,
          }}
        >
          <span className="absolute inset-0 rounded-full border-[4px] border-skytree-gold/60 tower-ring-pulse" />
          <span className="absolute inset-[16%] rounded-full border border-skytree-gold/22" />
        </span>
      </div>

      <ul className="absolute inset-y-0 right-[1%] w-[49%] sm:right-[2%] sm:w-[47%]">
        {floors.map((floor) => {
          const marker = FLOOR_POSITIONS[floor.id];
          const isActive = currentFloor === floor.id;

          return (
            <li
              key={floor.id}
              className="absolute right-0 -translate-y-1/2"
              style={{ top: marker.navTop }}
            >
              <Link
                href={`/#floor-${floor.id}`}
                className={cn(
                  "group flex items-start gap-3 transition-all duration-500",
                  isActive ? "translate-x-0" : "translate-x-2"
                )}
              >
                <span
                  className={cn(
                    "mt-1 h-4 w-4 rounded-full transition-all duration-500",
                    isActive
                      ? "bg-skytree-gold shadow-[0_0_0_7px_rgba(200,169,110,0.14)]"
                      : "bg-[#d4d4d4]"
                  )}
                />
                <span className="flex flex-col gap-1 leading-none">
                  {floor.towerLabel.map((label) => (
                    <span key={`${floor.id}-${label.kind}-${label.value}`}>
                      {label.kind === "floor" ? (
                        <span className="flex items-end gap-1.5 leading-none">
                          <span className="text-[11px] text-[#b9b9b5] sm:text-[14px]">{floorWord}</span>
                          <span
                            className={cn(
                              "font-serif text-[24px] transition-colors duration-500 sm:text-[34px] lg:text-[36px]",
                              isActive ? "text-skytree-black" : "text-[#c4c4bf]"
                            )}
                          >
                            {label.value}
                          </span>
                        </span>
                      ) : (
                        <span
                          className={cn(
                            "font-serif text-[24px] leading-none transition-colors duration-500 sm:text-[34px] lg:text-[36px]",
                            isActive ? "text-skytree-black" : "text-[#c4c4bf]"
                          )}
                        >
                          {label.value}
                        </span>
                      )}
                    </span>
                  ))}
                </span>
              </Link>

              <span
                className={cn(
                  "absolute left-0 top-1/2 hidden h-px -translate-x-[calc(100%+12px)] -translate-y-1/2 bg-gradient-to-r from-skytree-gold/70 to-transparent transition-all duration-500 lg:block",
                  isActive ? "w-14 opacity-100" : "w-8 opacity-40"
                )}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
