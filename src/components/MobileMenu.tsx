"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale, PageKey } from "@/lib/routes";
import { pathForPage } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";

type NavItem = {
  label: string;
  href: string;
};

export function MobileMenu({
  locale,
  dict,
  navItems
}: {
  locale: Locale;
  dict: Dictionary;
  navItems: NavItem[];
}) {
  const [open, setOpen] = useState(false);
  const consultationHref = `${pathForPage(locale, "contact" as PageKey)}#consultation`;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={dict.common.menu}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800"
      >
        <Menu aria-hidden="true" className="h-5 w-5" />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-white text-slate-950 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 shadow-sm">
              <Link
                href={pathForPage(locale, "home")}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <BrandLogo dict={dict} compact />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={dict.common.close}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
          </div>

          <nav className="flex-1 overflow-y-auto bg-white px-4 py-5" aria-label={dict.common.menu}>
            <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-md border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-[#2437d6]"
              >
                {item.label}
              </Link>
            ))}
            </div>
          </nav>

          <div className="border-t border-slate-200 bg-white p-4 shadow-[0_-12px_30px_rgba(15,23,42,0.08)]">
            <LanguageSwitcher locale={locale} dict={dict} compact />

            <Link
              href={consultationHref}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#2437d6] px-5 py-3 text-sm font-bold text-white"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
