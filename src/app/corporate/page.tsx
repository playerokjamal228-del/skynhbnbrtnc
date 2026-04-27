import type { Metadata } from "next";
import Link from "next/link";
import { Building2, FileText, ShieldCheck, MapPinned, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { getLocalizedPageCopy } from "@/lib/localized-pages";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getLocalizedPageCopy(locale).corporate;

  return {
    title: copy.title,
    description: copy.subtitle,
  };
}

const icons = [<Building2 key="a" size={22} />, <FileText key="b" size={22} />, <ShieldCheck key="c" size={22} />];

export default async function CorporatePage() {
  const locale = await getRequestLocale();
  const copy = getLocalizedPageCopy(locale).corporate;

  return (
    <div className="pt-16">
      <div className="bg-skytree-black py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <SectionHeading title={copy.title} subtitle={copy.subtitle} light />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {copy.cards.map((card, index) => (
            <article key={card.title} className="bg-skytree-white border border-skytree-border rounded-[24px] p-6 md:p-8">
              <div className="w-11 h-11 rounded-full bg-skytree-gold/12 text-skytree-gold flex items-center justify-center mb-5">
                {icons[index]}
              </div>
              <h2 className="font-serif text-2xl text-skytree-black mb-3">{card.title}</h2>
              <p className="text-sm text-skytree-gray leading-relaxed">{card.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_340px]">
          <section className="rounded-[24px] border border-skytree-border bg-skytree-light p-6 md:p-8">
            <h2 className="font-serif text-2xl text-skytree-black">{copy.sectionTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {copy.links.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-2xl border border-skytree-border bg-white p-5 transition-colors hover:border-skytree-gold">
                  <p className="text-xs uppercase tracking-[0.2em] text-skytree-light-gray">{link.eyebrow}</p>
                  <p className="mt-2 font-serif text-xl text-skytree-black">{link.title}</p>
                </Link>
              ))}
            </div>
          </section>

          <div className="space-y-6">
            <aside className="rounded-[24px] border border-skytree-border bg-white p-6 md:p-8">
              <h2 className="font-serif text-2xl text-skytree-black">{copy.factsTitle}</h2>
              <dl className="mt-6 space-y-4">
                {copy.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-b border-skytree-border pb-4 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-xs uppercase tracking-[0.2em] text-skytree-light-gray">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 font-serif text-xl text-skytree-black">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>

            <aside className="rounded-[24px] border border-skytree-border bg-white p-6 md:p-8">
              <h2 className="font-serif text-2xl text-skytree-black">{copy.contactTitle}</h2>
              <div className="mt-6 space-y-5 text-sm text-skytree-gray">
                <div className="flex items-start gap-3">
                  <MapPinned size={18} className="mt-0.5 text-skytree-gold" />
                  <span>1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045, Japan</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-skytree-gold" />
                  <span>+81-3-5302-3470</span>
                </div>
                <p className="leading-relaxed">{copy.contactBody}</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
