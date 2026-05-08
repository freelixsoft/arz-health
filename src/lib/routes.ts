export const locales = ["en", "tr", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export type PageKey =
  | "home"
  | "about"
  | "services"
  | "dental"
  | "aesthetic"
  | "hair"
  | "contact"
  | "privacy"
  | "terms"
  | "disclaimer";

export const pageSlugs: Record<Locale, Record<PageKey, string[]>> = {
  en: {
    home: [],
    about: ["about"],
    services: ["services"],
    dental: ["services", "dental-treatments"],
    aesthetic: ["services", "aesthetic-treatments"],
    hair: ["services", "hair-transplantation"],
    contact: ["contact"],
    privacy: ["privacy-policy"],
    terms: ["terms-of-use"],
    disclaimer: ["medical-disclaimer"]
  },
  tr: {
    home: [],
    about: ["hakkimizda"],
    services: ["hizmetler"],
    dental: ["hizmetler", "dis-tedavileri"],
    aesthetic: ["hizmetler", "estetik-tedaviler"],
    hair: ["hizmetler", "sac-ekimi"],
    contact: ["iletisim"],
    privacy: ["gizlilik-politikasi"],
    terms: ["kullanim-sartlari"],
    disclaimer: ["tibbi-uyari"]
  },
  ar: {
    home: [],
    about: ["about"],
    services: ["services"],
    dental: ["services", "dental-treatments"],
    aesthetic: ["services", "aesthetic-treatments"],
    hair: ["services", "hair-transplantation"],
    contact: ["contact"],
    privacy: ["privacy-policy"],
    terms: ["terms-of-use"],
    disclaimer: ["medical-disclaimer"]
  }
};

export const servicePageKeys: PageKey[] = ["dental", "aesthetic", "hair"];

export const legalPageKeys: PageKey[] = ["privacy", "terms", "disclaimer"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function normalizeSlug(slug?: string[]) {
  return slug?.filter(Boolean) ?? [];
}

export function getPageKey(locale: Locale, slug?: string[]): PageKey | null {
  const normalized = normalizeSlug(slug).join("/");

  for (const [pageKey, pageSlug] of Object.entries(pageSlugs[locale])) {
    if (pageSlug.join("/") === normalized) {
      return pageKey as PageKey;
    }
  }

  return null;
}

export function pathForPage(locale: Locale, pageKey: PageKey, hash?: string) {
  const slug = pageSlugs[locale][pageKey];
  const path = `/${locale}${slug.length ? `/${slug.join("/")}` : ""}`;

  return hash ? `${path}#${hash}` : path;
}

export function getStaticRouteParams() {
  return locales.flatMap((locale) =>
    (Object.keys(pageSlugs[locale]) as PageKey[]).map((pageKey) => ({
      locale,
      slug: pageSlugs[locale][pageKey]
    }))
  );
}

export function getAlternates(pageKey: PageKey) {
  return Object.fromEntries(
    locales.map((locale) => [locale, pathForPage(locale, pageKey)])
  ) as Record<Locale, string>;
}
