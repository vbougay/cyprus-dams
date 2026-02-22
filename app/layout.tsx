import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fragmata - Cyprus Reservoir Levels & Water Dashboard",
  description:
    "Track water levels across 21 Cyprus reservoirs. Real-time storage capacity, inflow data, and drought forecasts for Kouris, Asprokremmos, Evretou and more. Παρακολούθηση φραγμάτων Κύπρου. Мониторинг водохранилищ Кипра.",
  keywords: [
    "Cyprus reservoir levels",
    "Cyprus water shortage",
    "Cyprus dam water levels",
    "Cyprus drought",
    "Cyprus water crisis",
    "reservoir monitoring",
    "Φράγματα Κύπρου",
    "λειψυδρία Κύπρου",
    "ταμιευτήρες Κύπρου",
    "κρίση νερού Κύπρου",
    "ξηρασία Κύπρου",
    "Водохранилища Кипра",
    "засуха на Кипре",
    "уровень воды Кипр",
    "нехватка воды Кипр",
    "мониторинг водохранилищ",
  ],
  metadataBase: new URL("https://fragmata.info"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      el: "/",
      ru: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://fragmata.info/",
    title: "Fragmata - Cyprus Reservoir Levels & Water Dashboard",
    description:
      "Track water levels across 21 Cyprus reservoirs. Real-time storage capacity, inflow data, and drought forecasts.",
    images: [{ url: "/og-image.png" }],
    locale: "en_US",
    alternateLocale: ["el_GR", "ru_RU"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fragmata - Cyprus Reservoir Levels & Water Dashboard",
    description:
      "Track water levels across 21 Cyprus reservoirs. Real-time storage capacity, inflow data, and drought forecasts.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  other: {
    "theme-color": "#0ea5e9",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Fragmata",
              alternateName: ["Φράγματα", "Cyprus Reservoir Dashboard"],
              description:
                "Track water levels across 21 Cyprus reservoirs. Real-time storage capacity, inflow data, and drought forecasts.",
              url: "https://fragmata.info",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Any",
              inLanguage: ["en", "el", "ru"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              about: {
                "@type": "Dataset",
                name: "Cyprus Reservoir Data",
                description:
                  "Water storage levels, inflow, and capacity data for 21 reservoirs across Cyprus",
                spatialCoverage: {
                  "@type": "Place",
                  name: "Cyprus",
                },
                temporalCoverage: "2025/..",
                provider: {
                  "@type": "GovernmentOrganization",
                  name: "Cyprus Water Development Department",
                  url: "https://www.moa.gov.cy/moa/wdd/",
                },
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        <noscript>
          <h1>Fragmata — Cyprus Reservoir Monitoring Dashboard</h1>
          <p>
            Track water levels across 21 Cyprus reservoirs including Kouris,
            Asprokremmos, Evretou, Kalavasos, Lefkara, and more.
          </p>
          <p>
            Παρακολούθηση φραγμάτων Κύπρου — Επίπεδα νερού, χωρητικότητα και
            εισροή για 21 ταμιευτήρες.
          </p>
          <p>
            Мониторинг водохранилищ Кипра — Уровни воды, ёмкость и приток для
            21 водохранилища.
          </p>
        </noscript>
      </body>
    </html>
  );
}
