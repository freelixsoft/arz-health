import { CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/lib/types";
import { Container, SectionIntro } from "./ui";

export function TreatmentJourney({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
      <Container>
        <SectionIntro
          eyebrow={dict.journey.eyebrow}
          title={dict.journey.title}
          description={dict.journey.description}
          tone="dark"
        />
        <div className="relative mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {dict.journey.steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-lg border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/15 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.12]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-cyan-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
