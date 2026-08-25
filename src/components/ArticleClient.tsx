"use client";

import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Header, MonthlyInflow, ReservoirCard, HistoricalHeatmap, ReservoirTable } from "@/components";
import StorageForecast from "@/components/StorageForecast";
import Footer from "@/components/Footer";
import { DataProvider } from "@/context/DataContext";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/utils/translations";
import { defaultLocale } from "@/utils/locale";
import { getReservoirsWithDrainDates } from "@/utils/dataManager";
import { getAllSparklineData } from "@/utils/sparklineData";
import { DAM_SLUG_MAP, REGION_SLUG_MAP } from "@/utils/slugs";
import {
  EndOfSummerChart,
  SummerDrawdownChart,
  PeakMonthChart,
  SummerInflowChart,
  DamFullnessChart,
  TwoYearTraceChart,
} from "@/components/ArticleSummerCharts";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Calendar, ChevronLeft, ChevronRight, Waves } from "lucide-react";

// --- Chart embed parsing ---

const CHART_REGEX = /\{\{chart:([\w-]+)((?:\s+[\w-]+="[^"]*")*)\s*\}\}/;

interface ChartEmbed {
  type: string;
  attrs: Record<string, string>;
}

function parseAttrs(attrStr: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  for (const m of attrStr.matchAll(/([\w-]+)="([^"]*)"/g)) {
    attrs[m[1]] = m[2];
  }
  return attrs;
}

type Segment = { kind: "md"; content: string } | { kind: "chart"; embed: ChartEmbed };

function splitMarkdown(markdown: string): Segment[] {
  const segments: Segment[] = [];
  const lines = markdown.split("\n");
  let buffer: string[] = [];

  for (const line of lines) {
    const match = line.trim().match(CHART_REGEX);
    if (match) {
      if (buffer.length > 0) {
        segments.push({ kind: "md", content: buffer.join("\n") });
        buffer = [];
      }
      segments.push({
        kind: "chart",
        embed: { type: match[1], attrs: parseAttrs(match[2] || "") },
      });
    } else {
      buffer.push(line);
    }
  }
  if (buffer.length > 0) {
    segments.push({ kind: "md", content: buffer.join("\n") });
  }
  return segments;
}

// --- Chart embed renderer ---

function ArticleChartEmbed({ embed, dataSetId }: { embed: ChartEmbed; dataSetId: string }) {
  const { type, attrs } = embed;
  const { language } = useLanguage();
  const location = attrs.location;
  const region = attrs.region;

  // Resolve dam key from slug
  const damInfo = location ? DAM_SLUG_MAP[location] : undefined;
  const damKey = damInfo?.key;

  // Resolve region name from slug
  const regionName = region ? REGION_SLUG_MAP[region] : undefined;

  // Compute link to corresponding section on dam/region/home page
  const hash = type === "inflow" ? "#inflow" : type === "forecast" ? "#forecast" : type === "heatmap" ? "#heatmap" : "";
  const basePath = location && damInfo
    ? `/dam/${location}`
    : region
      ? `/region/${region}`
      : "";
  const linkHref = hash
    ? (language === defaultLocale ? basePath : `/${language}${basePath}`) + hash
    : undefined;

  return (
    <div className="not-prose my-6">
      <DataProvider initialDataSetId={dataSetId}>
        {type === "inflow" && <MonthlyInflow linkHref={linkHref} initialYear={attrs.year} />}
        {type === "forecast" && (
          <StorageForecast selectionId={damKey || regionName || location || "all"} linkHref={linkHref} />
        )}
        {type === "heatmap" && (
          <HeatmapEmbed damKey={damKey} damName={damInfo?.name} regionName={regionName} dataSetId={dataSetId} linkHref={linkHref} label={attrs.label} />
        )}
        {type === "dam-card" && damInfo && (
          <DamCardEmbed damName={damInfo.name} dataSetId={dataSetId} />
        )}
        {type === "data-table" && <ReservoirTable />}
        {type === "zen-cta" && <ZenCtaEmbed />}
        {/* End-of-summer analysis figures — all derived from dataSetId */}
        {type === "end-of-summer" && <EndOfSummerChart />}
        {type === "summer-drawdown" && <SummerDrawdownChart />}
        {type === "peak-month" && <PeakMonthChart />}
        {type === "summer-inflow" && <SummerInflowChart />}
        {type === "dam-fullness" && <DamFullnessChart />}
        {type === "two-year-trace" && <TwoYearTraceChart />}
      </DataProvider>
    </div>
  );
}

// Prominent "Go Zen" call-to-action banner ({{chart:zen-cta}}) — always dark,
// echoing the Zen page it links to.
function ZenCtaEmbed() {
  const { language } = useLanguage();
  const href = language === defaultLocale ? "/zen" : `/${language}/zen`;
  const copy = {
    en: { title: "Go Zen", sub: "The island's water, live — with sound" },
    el: { title: "Πάμε Ζεν", sub: "Το νερό του νησιού, ζωντανά — με ήχο" },
    ru: { title: "Включить дзен", sub: "Вода острова вживую — со звуком" },
  }[language];

  return (
    <Link href={href} className="group block no-underline">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-950 via-water-950 to-gray-900 border border-water-500/20 px-6 py-7 text-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-water-500/20 group-hover:border-water-400/40">
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 rounded-full bg-water-500/15 blur-3xl animate-data-pulse" />
        </div>
        <div className="relative flex flex-col items-center gap-1.5">
          <span className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-water-100 tracking-tight">
            <Waves className="h-7 w-7 md:h-8 md:w-8 text-water-400 transition-transform duration-300 group-hover:scale-110" />
            {copy.title}
          </span>
          <span className="text-sm text-water-300/80 font-mono">{copy.sub}</span>
        </div>
      </div>
    </Link>
  );
}

function DamCardEmbed({ damName, dataSetId }: { damName: string; dataSetId: string }) {
  const reservoir = useMemo(() => {
    const reservoirs = getReservoirsWithDrainDates(dataSetId);
    return reservoirs.find((r) => r.name === damName) ?? null;
  }, [damName, dataSetId]);

  if (!reservoir) return null;
  // In the article the card spans full width, so lay the detail sections out
  // horizontally instead of stacked (wideDetails), unlike the narrow grid cards.
  return <ReservoirCard reservoir={reservoir} wideDetails />;
}

function HeatmapEmbed({ damKey, damName, regionName, dataSetId, linkHref, label }: {
  damKey?: string;
  damName?: string;
  regionName?: string;
  dataSetId: string;
  linkHref?: string;
  label?: string;
}) {
  const sparklineData = useMemo(() => {
    if (!damName) return undefined;
    const reservoirs = getReservoirsWithDrainDates(dataSetId);
    const dam = reservoirs.find((r) => r.name === damName);
    if (!dam) return undefined;
    return getAllSparklineData([dam]).get(damName);
  }, [damName, dataSetId]);

  return (
    <HistoricalHeatmap
      filterDamKey={damKey as any}
      filterRegion={!damKey && regionName ? regionName : undefined}
      sparklineData={sparklineData}
      linkHref={linkHref}
      label={label}
    />
  );
}

// --- Article page ---

interface ArticleNav {
  slug: string;
  title: string;
}

interface ArticleClientProps {
  markdown: string;
  title: string;
  date: string;
  dataSetId: string;
  prevArticle?: ArticleNav;
  nextArticle?: ArticleNav;
}

export function ArticleClient({ markdown, title, date, dataSetId, prevArticle, nextArticle }: ArticleClientProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const localePath = (path: string) =>
    language === defaultLocale ? (path || "/") : `/${language}${path === "/" ? "" : path}`;

  const segments = useMemo(() => splitMarkdown(markdown), [markdown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300">
      <Header hideDateNav />

      <main className="container mx-auto px-4 pb-16 max-w-4xl">
        <Breadcrumb className="mb-6 mt-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath("/")}>{t("cyprus")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath("/articles")}>{t("articles")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-2xl font-bold tracking-tight mb-2">{title}</h1>

        <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {date}
          </span>
        </div>

        <article className="prose prose-base dark:prose-invert max-w-none prose-headings:text-foreground prose-headings:mt-4 prose-headings:mb-2 prose-p:text-foreground/90 prose-p:my-2 prose-ul:my-2 prose-li:my-0.5 prose-table:text-sm prose-th:text-left prose-strong:text-foreground prose-a:text-water-600 dark:prose-a:text-water-400 prose-hr:my-4">
          {segments.map((seg, i) =>
            seg.kind === "md" ? (
              <ReactMarkdown key={i} remarkPlugins={[remarkGfm]}>
                {seg.content}
              </ReactMarkdown>
            ) : (
              <ArticleChartEmbed key={i} embed={seg.embed} dataSetId={dataSetId} />
            )
          )}
        </article>

        {(prevArticle || nextArticle) && (
          <nav className="flex items-start justify-between gap-4 mt-10 pt-6 border-t border-border/50">
            {prevArticle ? (
              <Link
                href={localePath(`/articles/${prevArticle.slug}`)}
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-water-600 dark:hover:text-water-400 transition-colors max-w-[45%]"
              >
                <ChevronLeft className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2">{prevArticle.title}</span>
              </Link>
            ) : <span />}
            {nextArticle ? (
              <Link
                href={localePath(`/articles/${nextArticle.slug}`)}
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-water-600 dark:hover:text-water-400 transition-colors text-right max-w-[45%] ml-auto"
              >
                <span className="line-clamp-2">{nextArticle.title}</span>
                <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
              </Link>
            ) : <span />}
          </nav>
        )}
      </main>

      <Footer hideLinks />
    </div>
  );
}

// --- Article list page ---

interface ArticleListItem {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
}

interface ArticleListClientProps {
  articles: ArticleListItem[];
}

export function ArticleListClient({ articles }: ArticleListClientProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const localePath = (path: string) =>
    language === defaultLocale ? (path || "/") : `/${language}${path === "/" ? "" : path}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300">
      <Header hideDateNav />

      <main className="container mx-auto px-4 pb-16 max-w-4xl">
        <Breadcrumb className="mb-6 mt-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath("/")}>{t("cyprus")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t("articles")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold mb-8 text-foreground">{t("articles")}</h1>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={localePath(`/articles/${article.slug}`)}
              className="block group"
            >
              <article className="rounded-xl border border-border/50 bg-white/70 dark:bg-gray-900/70 p-6 shadow-sm transition-all hover:shadow-md hover:border-water-300 dark:hover:border-water-700">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.date}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-water-600 dark:group-hover:text-water-400 transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {article.description}
                </p>
                {article.excerpt && (
                  <p className="text-sm text-muted-foreground/80 line-clamp-3">
                    {article.excerpt}
                  </p>
                )}
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer hideLinks />
    </div>
  );
}
