import type { Locale } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { BeforeAfterGallery } from "./BeforeAfterGallery";
import { FAQAccordion } from "./FAQAccordion";
import { HeroSection } from "./HeroSection";
import { LocationSection } from "./LocationSection";
import { PopularTreatments } from "./PopularTreatments";
import { ServicesGrid } from "./ServicesGrid";
import { Testimonials } from "./Testimonials";
import { TreatmentJourney } from "./TreatmentJourney";
import { WhyChooseUs } from "./WhyChooseUs";
import { ConsultationCTA } from "./PageBlocks";

export function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <HeroSection locale={locale} dict={dict} />
      <ServicesGrid locale={locale} dict={dict} />
      <WhyChooseUs dict={dict} />
      <TreatmentJourney dict={dict} />
      <PopularTreatments dict={dict} />
      <LocationSection dict={dict} />
      <BeforeAfterGallery dict={dict} />
      <Testimonials dict={dict} />
      <FAQAccordion dict={dict} />
      <ConsultationCTA dict={dict} locale={locale} />
    </>
  );
}
