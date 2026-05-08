import type { Locale } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { FAQAccordion } from "./FAQAccordion";
import { InnerHero } from "./InnerHero";
import { PopularTreatments } from "./PopularTreatments";
import { ConsultationCTA } from "./PageBlocks";
import { ServicesGrid } from "./ServicesGrid";
import { TreatmentJourney } from "./TreatmentJourney";

export function ServicesPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <InnerHero
        locale={locale}
        dict={dict}
        eyebrow={dict.servicesPage.eyebrow}
        title={dict.servicesPage.title}
        description={dict.servicesPage.description}
        image="/images/hero-clinic.png"
        imageAlt={dict.hero.imageAlt}
      />
      <ServicesGrid locale={locale} dict={dict} introVariant="page" />
      <PopularTreatments dict={dict} />
      <TreatmentJourney dict={dict} />
      <FAQAccordion dict={dict} />
      <ConsultationCTA dict={dict} locale={locale} />
    </>
  );
}
