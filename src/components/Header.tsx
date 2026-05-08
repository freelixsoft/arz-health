import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileMenu } from "@/components/MobileMenu";
import type { Locale } from "@/lib/routes";
import { pathForPage } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navItems = [
    { label: dict.nav.home, href: pathForPage(locale, "home") },
    { label: dict.nav.about, href: pathForPage(locale, "about") },
    { label: dict.nav.services, href: pathForPage(locale, "services") },
    { label: dict.nav.dental, href: pathForPage(locale, "dental") },
    { label: dict.nav.aesthetic, href: pathForPage(locale, "aesthetic") },
    { label: dict.nav.hair, href: pathForPage(locale, "hair") },
    { label: dict.nav.beforeAfter, href: pathForPage(locale, "home", "before-after") },
    { label: dict.nav.faq, href: pathForPage(locale, "home", "faq") },
    { label: dict.nav.contact, href: pathForPage(locale, "contact") }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={pathForPage(locale, "home")} className="flex items-center gap-3">
          <BrandLogo dict={dict} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={dict.common.menu}>
          {navItems.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-[#2437d6]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} dict={dict} />
          <Link
            href={`${pathForPage(locale, "contact")}#consultation`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#2437d6] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#1627b5]"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            {dict.nav.cta}
          </Link>
        </div>

        <MobileMenu locale={locale} dict={dict} navItems={navItems} />
      </div>
    </header>
  );
}
