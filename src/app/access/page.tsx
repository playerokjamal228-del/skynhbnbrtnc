import type { Metadata } from "next";
import { Accessibility, Bike, Bus, Car, Clock, MapPin, Train, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { getLocalizedPageCopy } from "@/lib/localized-pages";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getLocalizedPageCopy(locale).access;

  return {
    title: `${copy.title} - ${copy.subtitle}`,
    description: `${copy.title}: ${copy.address}`,
  };
}

const iconMap = {
  train: <Train size={24} />,
  bus: <Bus size={24} />,
  car: <Car size={24} />,
  bike: <Bike size={24} />,
};

export default async function AccessPage() {
  const locale = await getRequestLocale();
  const copy = getLocalizedPageCopy(locale).access;

  return (
    <div className="pt-16">
      <div className="bg-skytree-black py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <SectionHeading title={copy.title} subtitle={copy.subtitle} light />
        </div>
      </div>

      <div className="bg-skytree-light py-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 text-skytree-gray">
            <MapPin size={18} className="text-skytree-gold flex-shrink-0" />
            <span className="text-sm">{copy.address}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {copy.transport.map((option) => (
            <div
              key={option.key}
              className="bg-skytree-white border border-skytree-border p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-skytree-gold">{iconMap[option.key]}</div>
                <h3 className="font-serif text-xl text-skytree-black">{option.title}</h3>
              </div>
              <div className="space-y-4">
                {option.lines.map((line) => (
                  <div key={`${option.key}-${line.name}`} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-skytree-gold mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-skytree-black">{line.name}</p>
                      <p className="text-skytree-gray">
                        {line.station}
                        {line.exit && line.exit !== "-" ? ` - ${line.exit}` : ""}
                        {line.walk ? (
                          <span className="flex items-center gap-1 mt-0.5">
                            <Clock size={12} />
                            {line.walk}
                          </span>
                        ) : null}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-skytree-light py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <h3 className="font-serif text-2xl text-skytree-black text-center mb-8">
            {copy.openingHoursTitle}
          </h3>
          <div className="bg-skytree-white border border-skytree-border p-6 md:p-8">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-skytree-gray">{copy.deckLabel}</span>
                <span className="text-skytree-black">8:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-skytree-gray">{copy.galleriaLabel}</span>
                <span className="text-skytree-black">8:00 - 21:00</span>
              </div>
              <div className="border-t border-skytree-border pt-3">
                <p className="text-skytree-light-gray text-xs">{copy.hoursNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16 grid gap-8 md:grid-cols-2">
        <section id="accessibility" className="bg-skytree-white border border-skytree-border rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4 text-skytree-gold">
            <Accessibility size={22} />
            <h3 className="font-serif text-xl text-skytree-black">{copy.accessibilityTitle}</h3>
          </div>
          <p className="text-sm text-skytree-gray leading-relaxed">{copy.accessibilityBody}</p>
        </section>

        <section id="group-reservations" className="bg-skytree-white border border-skytree-border rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4 text-skytree-gold">
            <Users size={22} />
            <h3 className="font-serif text-xl text-skytree-black">{copy.groupTitle}</h3>
          </div>
          <p className="text-sm text-skytree-gray leading-relaxed">{copy.groupBody}</p>
        </section>
      </div>
    </div>
  );
}
