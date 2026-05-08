import type { Locale } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { Container, SectionIntro } from "./ui";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid({
  locale,
  dict,
  introVariant = "home"
}: {
  locale: Locale;
  dict: Dictionary;
  introVariant?: "home" | "page";
}) {
  const intro =
    introVariant === "page"
      ? dict.servicesPage
      : {
          eyebrow: dict.services.eyebrow,
          title: dict.services.title,
          description: dict.services.description
        };

  return (
    <section id="services" className="bg-slate-50 py-20">
      <Container>
        <SectionIntro
          eyebrow={intro.eyebrow}
          title={intro.title}
          description={intro.description}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {dict.services.cards.map((service) => (
            <ServiceCard
              key={service.key}
              service={service}
              locale={locale}
              dict={dict}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
