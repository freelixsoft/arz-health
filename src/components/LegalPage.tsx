import type { Locale, PageKey } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { InnerHero } from "./InnerHero";
import { Container } from "./ui";

type LegalKey = Extract<PageKey, "privacy" | "terms" | "disclaimer">;

export function LegalPage({
  locale,
  dict,
  pageKey
}: {
  locale: Locale;
  dict: Dictionary;
  pageKey: PageKey;
}) {
  const legal = dict.legal[pageKey as LegalKey];

  return (
    <>
      <InnerHero
        locale={locale}
        dict={dict}
        eyebrow={legal.eyebrow}
        title={legal.title}
        description={legal.description}
        image="/images/hero-clinic.png"
        imageAlt={dict.hero.imageAlt}
      />
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-5 rounded-lg border border-slate-200 bg-[#f7fbff] p-6 text-base leading-8 text-slate-700 shadow-sm sm:p-8">
            {legal.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
