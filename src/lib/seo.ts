import type { Metadata } from "next";
import type { Dictionary } from "./types";
import type { Locale, PageKey } from "./routes";
import { getAlternates, pathForPage } from "./routes";
import { SITE_URL } from "./site";

export function buildPageMetadata(
  dict: Dictionary,
  locale: Locale,
  pageKey: PageKey
): Metadata {
  const meta = dict.metadata[pageKey];
  const path = pathForPage(locale, pageKey);
  const alternates = getAlternates(pageKey);
  const absoluteUrl = new URL(path, SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: path,
      languages: {
        en: alternates.en,
        tr: alternates.tr,
        ar: alternates.ar,
        "x-default": alternates.en
      }
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absoluteUrl,
      siteName: dict.site.name,
      locale,
      type: "website",
      images: [
        {
          url: "/images/hero-clinic.png",
          width: 1600,
          height: 1000,
          alt: dict.hero.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/hero-clinic.png"]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}
