import {
  Building2,
  CalendarCheck,
  Globe2,
  HeartHandshake,
  Hotel,
  Languages,
  MessageCircle,
  ShieldCheck
} from "lucide-react";
import type { Dictionary } from "@/lib/types";
import { CardShell, Container, SectionIntro } from "./ui";

const icons = [
  HeartHandshake,
  Languages,
  Building2,
  CalendarCheck,
  ShieldCheck,
  Hotel,
  MessageCircle,
  Globe2
];

export function WhyChooseUs({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionIntro
          eyebrow={dict.why.eyebrow}
          title={dict.why.title}
          description={dict.why.description}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.why.items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <CardShell key={item.title} className="p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-sky-50 text-sky-700">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </CardShell>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
