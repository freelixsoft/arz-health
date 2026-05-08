import { Sparkles } from "lucide-react";
import type { Dictionary } from "@/lib/types";
import { CardShell, Container, SectionIntro } from "./ui";

export function PopularTreatments({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-[#f7fbff] py-20">
      <Container>
        <SectionIntro
          eyebrow={dict.popular.eyebrow}
          title={dict.popular.title}
          description={dict.popular.description}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {dict.popular.groups.map((group) => (
            <CardShell key={group.title} className="p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-blue-950/10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 text-[#2437d6]">
                  <Sparkles aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-slate-950">
                  {group.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:text-[#2437d6]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardShell>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-900">
          {dict.popular.note}
        </p>
      </Container>
    </section>
  );
}
