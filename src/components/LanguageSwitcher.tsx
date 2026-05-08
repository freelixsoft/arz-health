"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/types";
import {
  getPageKey,
  isLocale,
  locales,
  pathForPage,
  type Locale,
  type PageKey
} from "@/lib/routes";

const languageMeta: Record<Locale, { code: string; nativeName: string }> = {
  en: { code: "EN", nativeName: "English" },
  tr: { code: "TR", nativeName: "Türkçe" },
  ar: { code: "AR", nativeName: "العربية" }
};

function rememberLocale(locale: Locale) {
  localStorage.setItem("arz-locale", locale);
  document.cookie = `arz-locale=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

function resolveCurrentPage(pathname: string, fallbackLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];
  const locale = maybeLocale && isLocale(maybeLocale) ? maybeLocale : fallbackLocale;
  const slug = maybeLocale && isLocale(maybeLocale) ? segments.slice(1) : [];
  const pageKey = getPageKey(locale, slug) ?? "home";

  return { pageKey };
}

export function LanguageSwitcher({
  locale,
  dict,
  compact = false
}: {
  locale: Locale;
  dict: Dictionary;
  compact?: boolean;
}) {
  const pathname = usePathname();
  const { pageKey } = resolveCurrentPage(pathname, locale);

  return (
    <nav
      aria-label={dict.common.selectLanguage}
      className={`flex ${compact ? "flex-col gap-2" : "items-center gap-1"}`}
    >
      {locales.map((targetLocale) => {
        const meta = languageMeta[targetLocale];
        const isActive = targetLocale === locale;
        const href = pathForPage(targetLocale, pageKey as PageKey);

        return (
          <Link
            key={targetLocale}
            href={href}
            hrefLang={targetLocale}
            aria-current={isActive ? "true" : undefined}
            onClick={() => rememberLocale(targetLocale)}
            className={`inline-flex min-h-9 items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold transition ${
              isActive
                ? "border-[#2437d6] bg-[#2437d6] text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-cyan-200 hover:bg-cyan-50"
            } ${compact ? "justify-start" : ""}`}
          >
            <span className="text-[11px] font-bold">{meta.code}</span>
            <span className={compact ? "" : "hidden xl:inline"}>
              {meta.nativeName}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
