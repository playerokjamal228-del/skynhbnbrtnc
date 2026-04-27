"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocale } from "@/components/layout/locale-provider";
import { getLocalizedPageCopy } from "@/lib/localized-pages";

export default function FAQPageClient() {
  const { locale } = useLocale();
  const copy = getLocalizedPageCopy(locale).faq;
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="pt-16">
      <div className="bg-skytree-black py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 className="font-serif text-3xl md:text-4xl text-white">{copy.title}</h1>
          <p className="text-skytree-gold text-sm mt-2 tracking-wider uppercase">{copy.subtitle}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {copy.categories.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="font-serif text-xl text-skytree-black mb-6 pb-2 border-b border-skytree-border">
              {category.category}
            </h2>
            <div className="space-y-3">
              {category.questions.map((faq, index) => {
                const key = `${category.category}-${index}`;
                const isOpen = openIndex === key;

                return (
                  <div key={key} className="border border-skytree-border rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : key)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-skytree-light transition-colors"
                    >
                      <span className="text-sm font-medium text-skytree-black pr-4">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-skytree-gray flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-skytree-gray flex-shrink-0" />
                      )}
                    </button>
                    {isOpen ? (
                      <div className="px-5 pb-5">
                        <p className="text-sm text-skytree-gray leading-relaxed">{faq.a}</p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-12 p-6 bg-skytree-light border border-skytree-border rounded-xl">
          <h3 className="font-serif text-lg text-skytree-black mb-2">{copy.supportTitle}</h3>
          <p className="text-sm text-skytree-gray mb-4">{copy.supportBody}</p>
          <p className="text-sm text-skytree-black">
            Phone: +81-3-5302-3470
            <br />
            {copy.supportPhoneNote}
          </p>
        </div>
      </div>
    </div>
  );
}
