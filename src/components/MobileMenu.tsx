"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
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
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm">
          <div className="ms-auto flex h-full w-full max-w-sm flex-col bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link
                href={pathForPage(locale, "home")}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-700 text-sm font-bold text-white">
                  ARZ
                </span>
                <span>
                  <span className="block text-base font-bold text-slate-950">
                    {dict.site.name}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {dict.site.tagline}
                  </span>
                </span>
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

            <div className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <LanguageSwitcher locale={locale} dict={dict} compact />
            </div>

            <Link
              href={consultationHref}
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal-700 px-5 py-3 text-sm font-bold text-white"
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
