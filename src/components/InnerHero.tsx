import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/routes";
import { pathForPage } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { Container, PrimaryLink, SecondaryLink } from "./ui";

export function InnerHero({
  locale,
  dict,
  eyebrow,
  title,
  description,
  image,
  imageAlt
}: {
  locale: Locale;
  dict: Dictionary;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#e9fbff,transparent)]" />
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative animate-rise">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href={`${pathForPage(locale, "contact")}#consultation`}>
              {dict.common.getConsultation}
              <ArrowRight aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
            </PrimaryLink>
            <SecondaryLink href={pathForPage(locale, "services")}>
              {dict.common.viewServices}
            </SecondaryLink>
          </div>
        </div>
        <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-2xl shadow-blue-950/10">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={false}
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
