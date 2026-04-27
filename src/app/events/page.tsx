import type { Metadata } from "next";
import EventsPageClient from "@/app/events/EventsPageClient";
import { eventCategories, sortedEventData } from "@/lib/event-data";
import { getLocalizedContent } from "@/lib/localized-content";
import { getLocalizedSortedEvents } from "@/lib/localized-events";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getLocalizedContent(locale).events.eventsPage;

  return {
    title: copy.title,
    description: copy.description,
    keywords: [
      "Tokyo Skytree events",
      "Tokyo Skytree collaboration",
      "Tokyo Skytree tickets",
      "Tokyo Skytree dining",
      "Tokyo observatory events",
    ],
  };
}

export default async function EventsPage() {
  const locale = await getRequestLocale();
  const copy = getLocalizedContent(locale).events.eventsPage;
  const localizedEvents = getLocalizedSortedEvents(locale);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.title,
    itemListElement: localizedEvents.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: event.title,
      description: event.excerpt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <EventsPageClient
        items={sortedEventData}
        categories={eventCategories}
      />
    </>
  );
}
