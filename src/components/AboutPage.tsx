import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { FAQAccordion } from "./FAQAccordion";
import { InnerHero } from "./InnerHero";
import { ConsultationCTA } from "./PageBlocks";
import { TreatmentJourney } from "./TreatmentJourney";
import { WhyChooseUs } from "./WhyChooseUs";
import { CheckList, Container } from "./ui";

export function AboutPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <InnerHero
        locale={locale}
        dict={dict}
        eyebrow={dict.aboutPage.eyebrow}
        title={dict.aboutPage.title}
        description={dict.aboutPage.description}
        image="/images/hero-clinic.png"
        imageAlt={dict.aboutPage.imageAlt}
      />
      <section className="bg-[#f7fbff] py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/istanbul-maslak.png"
              alt={dict.location.imageAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#2437d6] text-white">
              <CheckCircle2 aria-hidden="true" className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-slate-950">
              {dict.aboutPage.introTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {dict.aboutPage.intro}
            </p>
            <div className="mt-7">
              <CheckList items={dict.aboutPage.items} />
            </div>
          </div>
        </Container>
      </section>
      <WhyChooseUs dict={dict} />
      <TreatmentJourney dict={dict} />
      <FAQAccordion dict={dict} />
      <ConsultationCTA dict={dict} locale={locale} />
    </>
  );
}
