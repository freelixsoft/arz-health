import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/lib/types";
import { Container, SectionIntro } from "./ui";

type FAQItem = Dictionary["faq"]["items"][number];

export function FAQAccordion({
  dict,
  items = dict.faq.items,
  title = dict.faq.title,
  eyebrow = dict.faq.eyebrow
}: {
  dict: Dictionary;
  items?: FAQItem[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section id="faq" className="bg-white py-20">
      <Container>
        <SectionIntro eyebrow={eyebrow} title={title} />
        <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {items.map((item) => (
            <details key={item.question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-start text-base font-semibold text-slate-950">
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
