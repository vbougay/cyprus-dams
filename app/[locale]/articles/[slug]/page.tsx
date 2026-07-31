import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { ArticleClient } from "@/components/ArticleClient";
import { locales, isValidLocale } from "@/utils/locale";
import { getAllArticles, getAllArticleSlugs, getArticleBySlug } from "@/utils/articles";
import { autoLinkDams } from "@/utils/autoLinkDams";

const siteUrl = "https://fragmata.info";

function readArticleMd(slug: string, lang: string): Promise<string | null> {
  const mdPath = path.join(process.cwd(), "content", "articles", slug, `${lang}.md`);
  return fs.readFile(mdPath, "utf-8").catch(() => null);
}

function extractDescription(markdown: string): string {
  const lines = markdown.split("\n");
  let subtitle = "";
  let firstParagraph = "";
  let pastSeparator = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!subtitle && /^\*\*.+\*\*$/.test(trimmed)) {
      subtitle = trimmed.replace(/\*\*/g, "");
      continue;
    }
    if (trimmed === "---") {
      pastSeparator = true;
      continue;
    }
    if (pastSeparator && !firstParagraph && trimmed && !trimmed.startsWith("#") && !trimmed.startsWith("{{")) {
      firstParagraph = trimmed;
      break;
    }
  }

  const combined = subtitle && firstParagraph
    ? `${subtitle} ${firstParagraph}`
    : subtitle || firstParagraph;
  return combined.length > 300 ? combined.slice(0, 297) + "..." : combined;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : "en";
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const markdown = await readArticleMd(slug, lang);
  const title = `${article.title[lang]} | Fragmata`;
  const description = markdown ? extractDescription(markdown) : article.description[lang];
  const localeUrl = (l: string, p: string) =>
    l === "en" ? `${siteUrl}${p}` : `${siteUrl}/${l}${p}`;
  const canonical = localeUrl(lang, `/articles/${slug}`);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, localeUrl(l, `/articles/${slug}`)]),
        ["x-default", localeUrl("en", `/articles/${slug}`)],
      ]),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Fragmata",
      type: "article",
      images: [{ url: `${siteUrl}/og-image.png` }],
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og-image.png`],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : "en";
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const rawMarkdown = await readArticleMd(slug, lang);
  if (!rawMarkdown) notFound();
  // Link each dam's first mention to its /dam/<slug> page (internal linking for SEO)
  const markdown = autoLinkDams(rawMarkdown, lang);

  // Compute prev/next articles (sorted newest-first)
  const allArticles = getAllArticles();
  const currentIdx = allArticles.findIndex((a) => a.slug === slug);
  const newer = currentIdx > 0 ? allArticles[currentIdx - 1] : null;
  const older = currentIdx < allArticles.length - 1 ? allArticles[currentIdx + 1] : null;

  // Article structured data — gives Google an image + article signals for the
  // SERP thumbnail (og:image alone is ignored by Search); pages had none before.
  const canonical =
    lang === "en"
      ? `${siteUrl}/articles/${slug}`
      : `${siteUrl}/${lang}/articles/${slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[lang],
    description: article.description[lang],
    image: [`${siteUrl}/og-image.png`],
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: lang,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "Fragmata",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon-640.png`,
        width: 640,
        height: 640,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
    />
    <ArticleClient
      markdown={markdown}
      title={article.title[lang]}
      date={article.date}
      dataSetId={article.dataSetId}
      prevArticle={older ? { slug: older.slug, title: older.title[lang] } : undefined}
      nextArticle={newer ? { slug: newer.slug, title: newer.title[lang] } : undefined}
    />
    </>
  );
}
