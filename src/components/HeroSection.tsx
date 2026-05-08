import Image from "next/image";
import { ArrowRight, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";
import type { Locale } from "@/lib/routes";
import { pathForPage } from "@/lib/routes";
import type { Dictionary } from "@/lib/types";
import { Container, PrimaryLink, SecondaryLink } from "./ui";

export function HeroSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-slate-950 text-white">
      <Image
        src="/images/hero-clinic.png"
        alt={dict.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,10,35,0.94)_0%,rgba(11,27,65,0.82)_46%,rgba(15,23,42,0.34)_100%)]" />
      <div className="absolute inset-0 soft-grid opacity-40" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-full bg-[linear-gradient(180deg,transparent,#f7fbff)]" />

      <Container className="relative flex min-h-[calc(100vh-5rem)] items-center py-16 lg:py-20">
        <div className="max-w-3xl">
          <div className="animate-rise inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-cyan-100 shadow-2xl shadow-slate-950/20 backdrop-blur">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {dict.hero.eyebrow}
          </div>
          <h1 className="animate-rise mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            {dict.hero.title}
          </h1>
          <p className="animate-rise-delay mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
            {dict.hero.description}
          </p>

          <div className="animate-rise-delay mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink
              href={`${pathForPage(locale, "contact")}#consultation`}
              className="animate-sheen bg-cyan-400 text-slate-950 hover:bg-cyan-300"
            >
              {dict.hero.primaryCta}
              <ArrowRight aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
            </PrimaryLink>
            <SecondaryLink
              href={getWhatsAppUrl()}
              external
              className="border-white/20 bg-white/10 text-white backdrop-blur hover:border-white/40 hover:bg-white/20"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              {dict.hero.secondaryCta}
            </SecondaryLink>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {dict.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl shadow-slate-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <p className="text-2xl font-bold text-cyan-200">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex max-w-3xl flex-wrap gap-3">
            {dict.hero.badges.map((badge, index) => (
              <div
                key={badge}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/35 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
              >
                {index % 2 === 0 ? (
                  <ShieldCheck aria-hidden="true" className="h-4 w-4 text-cyan-200" />
                ) : (
                  <Sparkles aria-hidden="true" className="h-4 w-4 text-amber-200" />
                )}
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
