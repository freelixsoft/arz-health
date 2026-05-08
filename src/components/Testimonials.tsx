import { Quote } from "lucide-react";
import type { Dictionary } from "@/lib/types";
import { CardShell, Container, SectionIntro } from "./ui";

export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionIntro
          eyebrow={dict.testimonials.eyebrow}
          title={dict.testimonials.title}
          description={dict.testimonials.description}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {dict.testimonials.items.map((item) => (
            <CardShell key={`${item.name}-${item.country}`} className="p-6">
              <Quote aria-hidden="true" className="h-7 w-7 text-teal-700" />
              <p className="mt-5 text-sm leading-7 text-slate-700">{item.quote}</p>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="font-bold text-slate-950">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {item.country} · {item.service}
                </p>
              </div>
            </CardShell>
          ))}
        </div>
      </Container>
    </section>
  );
}
