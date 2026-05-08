import { notFound } from "next/navigation";
import { AboutPage } from "@/components/AboutPage";
import { ContactPage } from "@/components/ContactPage";
import { HomePage } from "@/components/HomePage";
import { LegalPage } from "@/components/LegalPage";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { ServicesPage } from "@/components/ServicesPage";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import {
  getPageKey,
  getStaticRouteParams,
  isLocale,
  legalPageKeys,
  servicePageKeys,
  type Locale
} from "@/lib/routes";

type Props = {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
};

export function generateStaticParams() {
  return getStaticRouteParams();
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const pageKey = getPageKey(locale, slug);

  if (!pageKey) {
    return {};
  }

  const dict = await getDictionary(locale);

  return buildPageMetadata(dict, locale, pageKey);
}

export default async function LocalizedPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const pageKey = getPageKey(locale, slug);

  if (!pageKey) {
    notFound();
  }

  const dict = await getDictionary(locale);
  const resolvedLocale = locale as Locale;

  if (pageKey === "home") {
    return <HomePage locale={resolvedLocale} dict={dict} />;
  }

  if (pageKey === "about") {
    return <AboutPage locale={resolvedLocale} dict={dict} />;
  }

  if (pageKey === "services") {
    return <ServicesPage locale={resolvedLocale} dict={dict} />;
  }

  if (servicePageKeys.includes(pageKey)) {
    return (
      <ServiceDetailPage
        locale={resolvedLocale}
        dict={dict}
        serviceKey={pageKey}
      />
    );
  }

  if (pageKey === "contact") {
    return <ContactPage locale={resolvedLocale} dict={dict} />;
  }

  if (legalPageKeys.includes(pageKey)) {
    return <LegalPage locale={resolvedLocale} dict={dict} pageKey={pageKey} />;
  }

  notFound();
}
