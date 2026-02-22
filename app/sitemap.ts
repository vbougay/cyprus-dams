import type { MetadataRoute } from "next";

const siteUrl = "https://fragmata.info";

const pages = ["", "/media"];
const locales = ["en", "el", "ru"] as const;

function localeUrl(locale: string, path: string) {
  return locale === "en"
    ? `${siteUrl}${path}/`
    : `${siteUrl}/${locale}${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) =>
    locales.map((locale) => ({
      url: localeUrl(locale, path),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((l) => [l, localeUrl(l, path)]),
          ["x-default", localeUrl("en", path)],
        ]),
      },
    }))
  );
}
