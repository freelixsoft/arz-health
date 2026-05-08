import Image from "next/image";
import { ArrowRight, Globe2, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";
import type { Locale } from "@/lib/routes";
import { pathForPage } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { Container, PrimaryLink, SecondaryLink } from "./ui";

export function HeroSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(120deg,#ecfeff,#f8fafc_45%,#ffffff)]" />
      <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 lg:grid-cols-[1fr_0.92fr] lg:py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md border border-teal-100 bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-800">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {dict.hero.eyebrow}
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {dict.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href={`${pathForPage(locale, "contact")}#consultation`}>
              {dict.hero.primaryCta}
              <ArrowRight aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
            </PrimaryLink>
            <SecondaryLink href={getWhatsAppUrl()} external>
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              {dict.hero.secondaryCta}
            </SecondaryLink>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {dict.hero.badges.map((badge, index) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
              >
                {index % 2 === 0 ? (
                  <ShieldCheck aria-hidden="true" className="h-5 w-5 text-teal-700" />
                ) : (
                  <Globe2 aria-hidden="true" className="h-5 w-5 text-sky-600" />
                )}
                <span className="text-sm font-semibold text-slate-800">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-950/10">
            <Image
              src="/images/hero-clinic.png"
              alt={dict.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {dict.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm"
              >
                <p className="text-2xl font-bold text-slate-950">{stat.value}</p>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
