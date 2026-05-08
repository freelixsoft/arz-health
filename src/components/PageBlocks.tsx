import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/routes";
import { pathForPage } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { ConsultationForm } from "./ConsultationForm";
import { Container, PrimaryLink, SectionIntro } from "./ui";

export function ConsultationCTA({
  dict,
  locale
}: {
  dict: Dictionary;
  locale?: Locale;
}) {
  return (
    <section className="bg-[#f7fbff] py-20">
      <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-lg bg-slate-950 p-8 text-white shadow-2xl shadow-blue-950/15">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
            {dict.form.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal">
            {dict.form.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {dict.form.description}
          </p>
          {locale ? (
            <PrimaryLink
              href={`${pathForPage(locale, "contact")}#consultation`}
            className="mt-6 bg-white text-slate-950 hover:bg-cyan-50"
            >
              {dict.common.getConsultation}
              <ArrowRight aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
            </PrimaryLink>
          ) : null}
        </div>
        <ConsultationForm dict={dict} />
      </Container>
    </section>
  );
}

export function ContentBand({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="start"
        />
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
