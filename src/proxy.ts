import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/routes";

function localeFromAcceptLanguage(header: string | null): Locale {
  const languages =
    header
      ?.split(",")
      .map((item) => item.trim().split(";")[0].toLowerCase()) ?? [];

  if (languages.some((language) => language.startsWith("tr"))) {
    return "tr";
  }

  if (languages.some((language) => language.startsWith("ar"))) {
    return "ar";
  }

  return defaultLocale;
}

function getPreferredLocale(request: NextRequest): Locale {
  const savedLocale = request.cookies.get("arz-locale")?.value;

  if (savedLocale && isLocale(savedLocale)) {
    return savedLocale;
  }

  return localeFromAcceptLanguage(request.headers.get("accept-language"));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"]
};
