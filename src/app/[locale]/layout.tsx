import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RTLLayoutWrapper } from "@/components/RTLLayoutWrapper";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, locales } from "@/lib/routes";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="scroll-smooth">
      <body className="min-h-screen bg-[#f7fbff] text-slate-950 antialiased">
        <RTLLayoutWrapper locale={locale} dir={dir}>
          <Header locale={locale} dict={dict} />
          <main>{children}</main>
          <Footer locale={locale} dict={dict} />
          <WhatsAppFloatingButton label={dict.common.whatsapp} />
        </RTLLayoutWrapper>
      </body>
    </html>
  );
}
