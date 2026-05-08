import Image from "next/image";
import { ArrowRight, ClipboardList, ShieldCheck } from "lucide-react";
import type { Locale, PageKey } from "@/lib/routes";
import { pathForPage } from "@/lib/routes";
import type { Dictionary, ServiceKey } from "@/lib/types";
import { FAQAccordion } from "./FAQAccordion";
import { InnerHero } from "./InnerHero";
import { ConsultationCTA } from "./PageBlocks";
import { TreatmentJourney } from "./TreatmentJourney";
import { CardShell, CheckList, Container, PrimaryLink, SectionIntro } from "./ui";

const imageByService: Record<ServiceKey, string> = {
  dental: "/images/dental-treatment.png",
  aesthetic: "/images/aesthetic-consultation.png",
  hair: "/images/hair-transplant-care.png"
};

export function ServiceDetailPage({
  locale,
  dict,
  serviceKey
}: {
  locale: Locale;
  dict: Dictionary;
  serviceKey: PageKey;
}) {
  const key = serviceKey as ServiceKey;
  const service = dict.servicePages[key];

  return (
    <>
      <InnerHero
        locale={locale}
        dict={dict}
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.description}
        image={imageByService[key]}
        imageAlt={service.imageAlt}
      />

      <section className="bg-[#f7fbff] py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src={imageByService[key]}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionIntro
              eyebrow={service.eyebrow}
              title={service.overviewTitle}
              description={service.overview}
              align="start"
            />
            <div className="mt-8">
              <CheckList items={service.treatments} />
            </div>
            <PrimaryLink
              href={`${pathForPage(locale, "contact")}#consultation`}
              className="mt-8"
            >
              {dict.common.getConsultation}
              <ArrowRight aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
            </PrimaryLink>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionIntro
            eyebrow={dict.journey.eyebrow}
            title={service.processTitle}
            description={dict.journey.description}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dict.journey.steps.map((step, index) => (
              <CardShell key={step.title} className="p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-blue-950/10">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-[#2437d6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < 3 ? (
                    <ClipboardList aria-hidden="true" className="h-5 w-5 text-cyan-700" />
                  ) : (
                    <ShieldCheck aria-hidden="true" className="h-5 w-5 text-[#2437d6]" />
                  )}
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </CardShell>
            ))}
          </div>
        </Container>
      </section>

      <TreatmentJourney dict={dict} />
      <FAQAccordion dict={dict} items={service.faqs} title={dict.faq.title} />
      <ConsultationCTA dict={dict} locale={locale} />
    </>
  );
}
