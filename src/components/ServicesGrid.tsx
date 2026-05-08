"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

import type { Locale, PageKey } from "@/lib/routes";
import { pathForPage } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { Container, PrimaryLink, SecondaryLink, SectionIntro } from "./ui";

const pageByServiceKey: Record<string, PageKey> = {
  dental: "dental",
  aesthetic: "aesthetic",
  hair: "hair"
};

export function ServicesGrid({
  locale,
  dict,
  introVariant = "home"
}: {
  locale: Locale;
  dict: Dictionary;
  introVariant?: "home" | "page";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intro =
    introVariant === "page"
      ? dict.servicesPage
      : {
          eyebrow: dict.services.eyebrow,
          title: dict.services.title,
          description: dict.services.description
        };

  return (
    <section id="services" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,#edfaff,transparent)]" />
      <Container className="relative">
        <SectionIntro
          eyebrow={intro.eyebrow}
          title={intro.title}
          description={intro.description}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {dict.services.cards.map((service, index) => (
              <ServiceToggle
                key={service.key}
                service={service}
                active={index === activeIndex}
                onSelect={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <ServicePreview
            service={dict.services.cards[activeIndex]}
            locale={locale}
            dict={dict}
          />
        </div>
      </Container>
    </section>
  );
}

function ServiceToggle({
  service,
  active,
  onSelect
}: {
  service: Dictionary["services"]["cards"][number];
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-expanded={active}
      className={`group w-full rounded-lg border p-5 text-start transition duration-300 ${
        active
          ? "border-cyan-200 bg-slate-950 text-white shadow-2xl shadow-slate-950/15"
          : "border-slate-200 bg-white text-slate-950 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-blue-950/10"
      }`}
    >
      <span className="flex items-center justify-between gap-4">
        <span className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-md ${
              active ? "bg-cyan-300 text-slate-950" : "bg-cyan-50 text-[#2437d6]"
            }`}
          >
            <Sparkles aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold">{service.title}</span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`h-5 w-5 shrink-0 transition ${active ? "rotate-180 text-cyan-200" : "text-slate-400"}`}
        />
      </span>
      <span
        className={`grid transition-[grid-template-rows] duration-500 ${
          active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <span className="overflow-hidden">
          <span
            className={`mt-4 block text-sm leading-7 ${
              active ? "text-slate-200" : "text-slate-600"
            }`}
          >
            {service.description}
          </span>
          <span className="mt-4 flex flex-wrap gap-2">
            {service.features.map((feature) => (
              <span
                key={feature}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  active
                    ? "bg-white/10 text-cyan-100"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {feature}
              </span>
            ))}
          </span>
        </span>
      </span>
    </button>
  );
}

function ServicePreview({
  service,
  locale,
  dict
}: {
  service: Dictionary["services"]["cards"][number];
  locale: Locale;
  dict: Dictionary;
}) {
  const pageKey = pageByServiceKey[service.key] ?? "services";

  return (
    <article className="group relative min-h-[32rem] overflow-hidden rounded-lg bg-slate-950 text-white shadow-2xl shadow-blue-950/15">
      <Image
        key={service.image}
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes="(min-width: 1024px) 52vw, 100vw"
        className="object-cover opacity-65 transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.9))]" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
          {dict.services.eyebrow}
        </p>
        <h3 className="mt-3 max-w-xl text-3xl font-semibold">{service.title}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
          {service.description}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SecondaryLink
            href={pathForPage(locale, pageKey)}
            className="border-white/20 bg-white text-slate-950 hover:bg-cyan-50"
          >
            {dict.common.learnMore}
            <ArrowRight aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
          </SecondaryLink>
          <PrimaryLink
            href={`${pathForPage(locale, "contact")}#consultation`}
            className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"
          >
            {dict.common.getStarted}
          </PrimaryLink>
        </div>
      </div>
    </article>
  );
}
