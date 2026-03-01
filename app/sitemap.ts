import type { MetadataRoute } from "next";
import { getAllRegionSlugs, getAllDamSlugs } from "@/utils/slugs";

const siteUrl = "https://fragmata.info";

const pages = ["", "/media"];
const locales = ["en", "el", "ru"] as const;

function localeUrl(locale: string, path: string) {
  return locale === "en"
    ? `${siteUrl}${path}/`
    : `${siteUrl}/${locale}${path}/`;
}

function makeEntry(path: string, priority: number): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: localeUrl(locale, path),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
    alternates: {
      languages: Object.fromEntries([
        ...locales.map((l) => [l, localeUrl(l, path)]),
        ["x-default", localeUrl("en", path)],
      ]),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = pages.flatMap((path) =>
    makeEntry(path, path === "" ? 1 : 0.8)
  );

  const regionPages = getAllRegionSlugs().flatMap((slug) =>
    makeEntry(`/region/${slug}`, 0.7)
  );

  const damPages = getAllDamSlugs().flatMap((slug) =>
    makeEntry(`/dam/${slug}`, 0.7)
  );

  return [...mainPages, ...regionPages, ...damPages];
}
