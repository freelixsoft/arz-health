import Link from "next/link";
import { AtSign, Globe2, Mail, MapPin, MessageCircle, Share2 } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getWhatsAppUrl } from "@/lib/site";
import type { Locale } from "@/lib/routes";
import { pathForPage } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const services = [
    { label: dict.common.dental, href: pathForPage(locale, "dental") },
    { label: dict.common.aesthetic, href: pathForPage(locale, "aesthetic") },
    { label: dict.common.hair, href: pathForPage(locale, "hair") }
  ];
  const quickLinks = [
    { label: dict.common.home, href: pathForPage(locale, "home") },
    { label: dict.common.about, href: pathForPage(locale, "about") },
    { label: dict.common.services, href: pathForPage(locale, "services") },
    { label: dict.common.contact, href: pathForPage(locale, "contact") }
  ];
  const legal = [
    { label: dict.common.privacy, href: pathForPage(locale, "privacy") },
    { label: dict.common.terms, href: pathForPage(locale, "terms") },
    { label: dict.common.disclaimer, href: pathForPage(locale, "disclaimer") }
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-950 pb-24 pt-16 text-white sm:pb-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link href={pathForPage(locale, "home")} className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-sm font-bold text-slate-950">
              ARZ
            </span>
            <span>
              <span className="block text-xl font-bold">{dict.site.name}</span>
              <span className="block text-sm text-slate-400">{dict.site.tagline}</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            {dict.footer.description}
          </p>
          <p className="mt-5 rounded-lg border border-white/10 bg-white/[0.06] p-4 text-xs leading-6 text-slate-300">
            {dict.footer.disclaimer}
          </p>
        </div>

        <FooterColumn title={dict.footer.servicesTitle} links={services} />
        <FooterColumn title={dict.footer.quickLinksTitle} links={quickLinks} />

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">
            {dict.footer.contactTitle}
          </h3>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
              {dict.site.location}
            </p>
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-white">
              <MessageCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
              {dict.site.whatsapp}
            </a>
            <a href={`mailto:${dict.site.email}`} className="flex gap-3 hover:text-white">
              <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
              {dict.site.email}
            </a>
          </div>

          <div className="mt-6 flex gap-2">
            {[Share2, AtSign, Globe2].map((Icon, index) => (
              <a
                key={dict.footer.social[index]}
                href="#"
                aria-label={dict.footer.social[index]}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-slate-200 transition hover:bg-white/10"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="mt-6">
            <LanguageSwitcher locale={locale} dict={dict} />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-4 border-t border-white/10 px-4 pt-6 text-xs text-slate-400 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4">
          {legal.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <p>
          &copy; {new Date().getFullYear()} {dict.site.name}. {dict.footer.copyright}
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">
        {title}
      </h3>
      <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
