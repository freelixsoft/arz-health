import { Mail, MapPin, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { getWhatsAppUrl } from "@/lib/site";
import { ConsultationForm } from "./ConsultationForm";
import { InnerHero } from "./InnerHero";
import { CardShell, Container } from "./ui";

export function ContactPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <InnerHero
        locale={locale}
        dict={dict}
        eyebrow={dict.contactPage.eyebrow}
        title={dict.contactPage.title}
        description={dict.contactPage.description}
        image="/images/istanbul-sisli.png"
        imageAlt={dict.location.imageAlt}
      />
      <section className="bg-slate-50 py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <CardShell className="p-6">
            <h2 className="text-2xl font-semibold tracking-normal text-slate-950">
              {dict.contactPage.detailsTitle}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <p className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                {dict.contactPage.details[0]}
              </p>
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="flex gap-3 font-semibold text-teal-800">
                <MessageCircle aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
                {dict.contactPage.details[1]}
              </a>
              <a href={`mailto:${dict.site.email}`} className="flex gap-3 font-semibold text-slate-800">
                <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                {dict.contactPage.details[2]}
              </a>
              <p>{dict.contactPage.details[3]}</p>
            </div>
          </CardShell>
          <ConsultationForm dict={dict} />
        </Container>
      </section>
    </>
  );
}
