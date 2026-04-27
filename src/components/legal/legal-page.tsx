import { SectionHeading } from "@/components/ui/section-heading";

export type LegalSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type LegalPageCopy = {
  title: string;
  subtitle: string;
  sections: LegalSection[];
  lastUpdated: string;
};

export type LocalizedLegalPageCopy = LegalPageCopy & {
  metadataTitle: string;
  metadataDescription: string;
};

type LegalPageProps = {
  copy: LegalPageCopy;
};

export function LegalPage({ copy }: LegalPageProps) {
  return (
    <div className="pt-16">
      <div className="bg-skytree-black py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <SectionHeading title={copy.title} subtitle={copy.subtitle} light />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <div className="space-y-10">
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 font-serif text-xl text-skytree-black">
                {section.title}
              </h2>

              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-skytree-gray"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets && (
                <ul className="mt-4 space-y-2 text-sm text-skytree-gray">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-skytree-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="border-t border-skytree-border pt-6">
            <p className="text-xs text-skytree-light-gray">{copy.lastUpdated}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
