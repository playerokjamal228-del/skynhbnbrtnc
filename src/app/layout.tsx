import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LocaleProvider } from "@/components/layout/locale-provider";
import { normalizeLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/server-locale";
import {
  layoutMetadata,
  siteBrand,
  siteUrl,
  venueName,
} from "@/lib/site-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = normalizeLocale(await getRequestLocale());
  const copy = layoutMetadata[locale];

  return {
    title: {
      default: copy.defaultTitle,
      template: copy.template,
    },
    applicationName: siteBrand,
    description: copy.description,
    keywords: [
      "Tokyo Skytree tickets",
      "Tokyo Skytree booking",
      "Tembo Deck tickets",
      "Tembo Galleria tickets",
      "Tokyo Skytree floor guide",
      "Tokyo Skytree opening hours",
      "Tokyo Skytree access",
      "Tokyo observation deck",
      "Tokyo skyline attraction",
      "Sumida Tokyo travel",
      "Skytree visitor guide",
      "Skytree Tickets",
    ],
    authors: [{ name: siteBrand }],
    creator: siteBrand,
    publisher: siteBrand,
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: "website",
      locale: copy.localeTag,
      url: siteUrl,
      title: copy.defaultTitle,
      description: copy.description,
      siteName: siteBrand,
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
    "@type": "WebSite",
    name: siteBrand,
    url: siteUrl,
    description: copy.jsonLdDescription,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: siteBrand,
      url: siteUrl,
    },
    about: {
      "@type": "TouristAttraction",
      name: venueName,
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
      image: `${siteUrl}/images/hero/img_kv01.webp`,
    },
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
