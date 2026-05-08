import { CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/lib/types";
import { Container, SectionIntro } from "./ui";

export function TreatmentJourney({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>
        <SectionIntro
          eyebrow={dict.journey.eyebrow}
          title={dict.journey.title}
          description={dict.journey.description}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {dict.journey.steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-lg border border-white/10 bg-white/[0.06] p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-sky-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-teal-300" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
