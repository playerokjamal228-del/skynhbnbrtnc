import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetailPage } from "@/components/events/event-detail-page";
import { eventData, getEventBySlug } from "@/lib/event-data";
import { getLocalizedEvent } from "@/lib/localized-events";
import { getRequestLocale } from "@/lib/server-locale";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return eventData.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  const locale = await getRequestLocale();

  if (!event) {
    return {
      title: "Event Not Found",
      description: "The requested Tokyo Skytree event page could not be found.",
    };
  }

  const localizedEvent = getLocalizedEvent(event, locale);

  return {
    title: localizedEvent.title,
    description: localizedEvent.excerpt,
    keywords: [
      "Tokyo Skytree events",
      localizedEvent.title,
      localizedEvent.category,
      localizedEvent.badge,
      localizedEvent.location,
    ],
  };
}

export default async function EventSlugPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  const locale = await getRequestLocale();

  if (!event) {
    notFound();
  }

  const localizedEvent = getLocalizedEvent(event, locale);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: localizedEvent.title,
    description: localizedEvent.excerpt,
    articleSection: localizedEvent.category,
    about: localizedEvent.highlights,
    image: [localizedEvent.heroImage, localizedEvent.image],
    author: {
      "@type": "Organization",
      name: "Tokyo Skytree",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localizedEvent.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema]),
        }}
      />
      <EventDetailPage event={event} />
    </>
  );
}
