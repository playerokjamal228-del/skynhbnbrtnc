"use client";

import { Button } from "@/components/ui/button";
import { SkytreeImage } from "@/components/shared/skytree-image";
import { Badge } from "@/components/ui/badge";

interface FloorSectionProps {
  id: string;
  floorId: string;
  category: string;
  label: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  floorGuideLink: string;
  officialLink: string;
  floorGuideLabel: string;
  officialSiteLabel: string;
  observatoryLabel: string;
}

export function FloorSection({
  id,
  floorId,
  category,
  label,
  name,
  description,
  image,
  imageAlt,
  floorGuideLink,
  officialLink,
  floorGuideLabel,
  officialSiteLabel,
  observatoryLabel,
}: FloorSectionProps) {
  return (
    <section
      id={id}
      data-floor={floorId}
      className="flex items-center px-4 py-8 sm:py-10 md:min-h-[72vh] md:px-8 md:py-20"
    >
      <div className="w-full md:max-w-3xl">
        <div className="overflow-hidden rounded-[24px] border border-skytree-border/80 bg-white shadow-[0_24px_60px_rgba(15,15,15,0.06)] md:rounded-[30px] md:shadow-[0_30px_80px_rgba(15,15,15,0.06)]">
          <div className="border-b border-skytree-border/80 px-4 py-4 sm:px-6 sm:py-5 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Badge variant="light">{category}</Badge>
              <p className="text-[10px] uppercase tracking-[0.22em] text-skytree-light-gray sm:text-[11px] sm:tracking-[0.3em]">
                {observatoryLabel}
              </p>
            </div>
          </div>

          <div className="grid gap-5 p-4 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] md:gap-8 md:p-8">
            <div>
              <h3 className="mt-1 font-serif text-[1.9rem] tracking-[0.04em] text-skytree-black md:text-3xl lg:text-4xl">
                {label}
              </h3>
              <h4 className="mb-5 mt-3 text-xs uppercase tracking-[0.24em] text-skytree-gold sm:text-sm sm:tracking-[0.32em] md:text-base">
                {name}
              </h4>
              <p className="max-w-xl text-sm leading-6 text-skytree-gray md:text-base md:leading-7">
                {description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <Button variant="secondary" size="sm" href={floorGuideLink} className="w-full sm:w-auto">
                  {floorGuideLabel}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  href={officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  {officialSiteLabel}
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] bg-skytree-light">
              <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-skytree-black/18 to-transparent" />
              <div className="absolute inset-x-5 top-5 z-20 flex items-start justify-between text-skytree-white">
                <span className="text-[10px] uppercase tracking-[0.3em]">{label}</span>
                <span className="font-serif text-lg">{floorId}m</span>
              </div>
              <div className="relative aspect-[16/10] md:aspect-[3/4]">
                <SkytreeImage
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  variant="floor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
