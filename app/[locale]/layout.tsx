import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Providers } from "@/components/providers";
import { locales, isValidLocale, type Locale } from "@/utils/locale";

const siteUrl = "https://fragmata.info";

interface LocaleMeta {
  title: string;
  description: string;
  ogLocale: string;
  keywords: string[];
  alternateName: string[];
  datasetName: string;
  datasetDescription: string;
  faq: { question: string; answer: string }[];
}

const meta: Record<Locale, LocaleMeta> = {
  en: {
    title: "Cyprus Dam & Reservoir Water Levels Today | Fragmata",
    description:
      "Live dam and reservoir water levels across all 21 Cyprus dams. Current storage capacity, daily inflow data, drought forecasts, and interactive map for Kouris, Asprokremmos, Evretou, and more.",
    ogLocale: "en_US",
    keywords: [
      "cyprus reservoir levels",
      "cyprus dam levels",
      "water reservoir cyprus",
      "reservoir storage cyprus",
      "cyprus dams water level",
      "dam levels cyprus",
      "cyprus reservoir levels today",
      "water level cyprus",
      "cyprus water reservoir",
      "kouris dam water level",
      "cyprus dam water levels",
      "cyprus water storage",
      "cyprus dams water levels",
      "how full are the dams in cyprus",
    ],
    alternateName: ["Φράγματα", "Cyprus Reservoir Dashboard"],
    datasetName: "Cyprus Reservoir Data",
    datasetDescription:
      "Water storage levels, inflow, and capacity data for 21 reservoirs across Cyprus",
    faq: [
      {
        question: "How full are the dams in Cyprus?",
        answer:
          "Fragmata tracks storage levels for all 21 major dams in Cyprus, updated weekly with data from the Cyprus Water Development Department. Visit the dashboard to see current fill percentages, regional breakdowns, and historical trends.",
      },
      {
        question: "What is the current water level in Cyprus reservoirs?",
        answer:
          "Current water levels for all 21 Cyprus reservoirs are displayed on the Fragmata dashboard with storage in MCM and percentage of capacity. Data is sourced from official government reports and updated regularly.",
      },
      {
        question: "Which is the largest dam in Cyprus?",
        answer:
          "Kouris Dam is the largest in Cyprus with a capacity of 115 MCM, located in the Southern Conveyor system. The second largest is Asprokremmos Dam in Paphos at 52.4 MCM.",
      },
    ],
  },
  el: {
    title:
      "Επίπεδα Νερού Φραγμάτων & Ταμιευτήρων Κύπρου Σήμερα | Φράγματα",
    description:
      "Ζωντανά επίπεδα νερού σε 21 φράγματα και ταμιευτήρες Κύπρου. Χωρητικότητα αποθήκευσης, ημερήσια εισροή, προβλέψεις ξηρασίας, διαδραστικός χάρτης για Κούρη, Ασπρόκρεμμο, Ευρέτου και άλλα.",
    ogLocale: "el_GR",
    keywords: [
      "Φράγματα Κύπρου",
      "λειψυδρία Κύπρου",
      "ταμιευτήρες Κύπρου",
      "κρίση νερού Κύπρου",
      "ξηρασία Κύπρου",
      "επίπεδα νερού φραγμάτων",
      "φράγμα Κούρη",
      "φράγμα Ασπρόκρεμμου",
      "αποθήκευση νερού Κύπρος",
      "επίπεδα φραγμάτων σήμερα",
    ],
    alternateName: ["Fragmata", "Πίνακας Ταμιευτήρων Κύπρου"],
    datasetName: "Δεδομένα Ταμιευτήρων Κύπρου",
    datasetDescription:
      "Επίπεδα αποθήκευσης νερού, εισροή και χωρητικότητα για 21 ταμιευτήρες στην Κύπρο",
    faq: [
      {
        question: "Πόσο γεμάτα είναι τα φράγματα στην Κύπρο;",
        answer:
          "Το Fragmata παρακολουθεί τα επίπεδα αποθήκευσης και για τα 21 μεγάλα φράγματα της Κύπρου, με εβδομαδιαία ενημέρωση από το Τμήμα Αναπτύξεως Υδάτων. Επισκεφθείτε τον πίνακα για τρέχοντα ποσοστά πλήρωσης και ιστορικές τάσεις.",
      },
      {
        question: "Ποιο είναι το μεγαλύτερο φράγμα στην Κύπρο;",
        answer:
          "Το φράγμα του Κούρη είναι το μεγαλύτερο στην Κύπρο με χωρητικότητα 115 εκατ. κ.μ., στο σύστημα του Νότιου Αγωγού. Δεύτερο μεγαλύτερο είναι το φράγμα Ασπρόκρεμμου στην Πάφο με 52,4 εκατ. κ.μ.",
      },
    ],
  },
  ru: {
    title:
      "Уровень воды в дамбах и водохранилищах Кипра сегодня | Фрагмата",
    description:
      "Актуальные уровни воды во всех 21 водохранилищах Кипра. Ёмкость хранения, ежедневный приток, прогнозы засухи и интерактивная карта для Курис, Аспрокреммос, Эвретоу и других.",
    ogLocale: "ru_RU",
    keywords: [
      "водохранилища Кипра",
      "засуха на Кипре",
      "уровень воды Кипр",
      "нехватка воды Кипр",
      "мониторинг водохранилищ",
      "плотины Кипра",
      "Курис плотина уровень воды",
      "Аспрокреммос плотина",
      "запас воды Кипр",
      "уровень дамб Кипра сегодня",
    ],
    alternateName: ["Fragmata", "Мониторинг водохранилищ Кипра"],
    datasetName: "Данные водохранилищ Кипра",
    datasetDescription:
      "Уровни хранения воды, приток и ёмкость для 21 водохранилища на Кипре",
    faq: [
      {
        question: "Насколько заполнены дамбы на Кипре?",
        answer:
          "Fragmata отслеживает уровни хранения всех 21 крупных водохранилищ Кипра с еженедельным обновлением данных от Департамента водного развития Кипра. Посетите панель мониторинга для текущих процентов заполнения и исторических тенденций.",
      },
      {
        question: "Какая самая большая плотина на Кипре?",
        answer:
          "Плотина Курис — крупнейшая на Кипре с ёмкостью 115 млн м³, расположена в системе Южного конвейера. Вторая по величине — плотина Аспрокреммос в Пафосе с ёмкостью 52,4 млн м³.",
      },
    ],
  },
};

function localeUrl(locale: Locale, path = "") {
  return locale === "en" ? `${siteUrl}${path}/` : `${siteUrl}/${locale}${path}/`;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const m = meta[locale];

  return {
    title: m.title,
    description: m.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: localeUrl(locale),
      languages: {
        en: localeUrl("en"),
        el: localeUrl("el"),
        ru: localeUrl("ru"),
        "x-default": localeUrl("en"),
      },
    },
    openGraph: {
      type: "website",
      url: localeUrl(locale),
      title: m.title,
      description: m.description,
      images: [{ url: "/og-image.png" }],
      locale: m.ogLocale,
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => meta[l].ogLocale),
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/og-image.png"],
    },
    keywords: m.keywords,
    other: {
      "theme-color": "#0ea5e9",
    },
  };
}

const noscriptContent: Record<Locale, { heading: string; body: string }> = {
  en: {
    heading: "Fragmata — Cyprus Reservoir Monitoring Dashboard",
    body: "Track water levels across 21 Cyprus reservoirs including Kouris, Asprokremmos, Evretou, Kalavasos, Lefkara, and more.",
  },
  el: {
    heading: "Φράγματα — Πίνακας Παρακολούθησης Ταμιευτήρων Κύπρου",
    body: "Παρακολούθηση επιπέδων νερού σε 21 ταμιευτήρες της Κύπρου, συμπεριλαμβανομένων Κούρη, Ασπρόκρεμμου, Ευρέτου, Καλαβασού, Λεύκαρων και άλλων.",
  },
  ru: {
    heading: "Фрагмата — Мониторинг водохранилищ Кипра",
    body: "Мониторинг уровня воды в 21 водохранилище Кипра, включая Курис, Аспрокреммос, Эвретоу, Калавасос, Лефкара и другие.",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ns = noscriptContent[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Fragmata",
            alternateName: meta[locale].alternateName,
            description: meta[locale].description,
            url: localeUrl(locale),
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            inLanguage: locale,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            about: {
              "@type": "Dataset",
              name: meta[locale].datasetName,
              description: meta[locale].datasetDescription,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: meta[locale].faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <Providers locale={locale}>
        {children}
      </Providers>
      <noscript>
        <h1>{ns.heading}</h1>
        <p>{ns.body}</p>
      </noscript>
    </>
  );
}
