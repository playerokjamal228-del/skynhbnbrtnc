import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LocaleProvider } from "@/components/layout/locale-provider";
import { normalizeLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/server-locale";
import { layoutMetadata, siteUrl } from "@/lib/site-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = normalizeLocale(await getRequestLocale());
  const copy = layoutMetadata[locale];

  return {
    title: {
      default: copy.defaultTitle,
      template: copy.template,
    },
    description: copy.description,
    keywords: [
      "Tokyo Skytree",
      "Tokyo observation deck",
      "Tembo Deck",
      "Tembo Galleria",
      "Tokyo tourist attraction",
      "Tokyo skyline",
      "Japan travel",
      "Tokyo tickets",
      "Tokyo sightseeing",
      "Sumida Tokyo",
      "Tokyo tower",
      "Japan landmark",
    ],
    authors: [{ name: "Tokyo Skytree" }],
    creator: "Tokyo Skytree",
    publisher: "Tokyo Skytree",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: copy.localeTag,
      url: siteUrl,
      title: copy.defaultTitle,
      description: copy.description,
      siteName: "Tokyo Skytree",
      images: [
        {
          url: "/images/hero/img_kv01.webp",
          width: 1200,
          height: 630,
          alt: copy.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.defaultTitle,
      description: copy.description,
      images: ["/images/hero/img_kv01.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = normalizeLocale(await getRequestLocale());
  const copy = layoutMetadata[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Tokyo Skytree",
    description: copy.jsonLdDescription,
    url: siteUrl,
    telephone: "+81-3-5302-3470",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1-1-2 Oshiage",
      addressLocality: "Sumida-ku",
      addressRegion: "Tokyo",
      postalCode: "131-0045",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.7101,
      longitude: 139.8107,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      opens: "08:00",
      closes: "21:00",
    },
    isAccessibleForFree: false,
    priceRange: "JPY",
    image: `${siteUrl}/images/hero/img_kv01.webp`,
    sameAs: [
      "https://twitter.com/skytreeofficial",
      "https://instagram.com/tokyoskytree_global",
      "https://facebook.com/tokyo.skytree",
      "https://youtube.com/@tokyoskytree",
    ],
  };

  return (
    <html lang={locale}>
      <body className="min-h-full flex flex-col antialiased">
        <LocaleProvider>
          <AnalyticsProvider />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
