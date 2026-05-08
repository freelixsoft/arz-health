import Image from "next/image";
import { ArrowRight, Stethoscope } from "lucide-react";
import type { Locale, PageKey } from "@/lib/routes";
import { pathForPage } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { PrimaryLink, SecondaryLink } from "./ui";

type ServiceCardData = Dictionary["services"]["cards"][number];

const pageByServiceKey: Record<string, PageKey> = {
  dental: "dental",
  aesthetic: "aesthetic",
  hair: "hair"
};

export function ServiceCard({
  service,
  locale,
  dict
}: {
  service: ServiceCardData;
  locale: Locale;
  dict: Dictionary;
}) {
  const pageKey = pageByServiceKey[service.key] ?? "services";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/10] bg-slate-100">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 31vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-50 text-teal-700">
            <Stethoscope aria-hidden="true" className="h-5 w-5" />
          </span>
          <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-6">
          <SecondaryLink href={pathForPage(locale, pageKey)}>
            {dict.common.learnMore}
            <ArrowRight aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
          </SecondaryLink>
          <PrimaryLink href={`${pathForPage(locale, "contact")}#consultation`}>
            {dict.common.getStarted}
          </PrimaryLink>
        </div>
      </div>
    </article>
  );
}
