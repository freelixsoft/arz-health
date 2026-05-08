import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { Dictionary } from "@/lib/types";
import { Container, SectionIntro } from "./ui";

export function BeforeAfterGallery({ dict }: { dict: Dictionary }) {
  return (
    <section id="before-after" className="bg-white py-20">
      <Container>
        <SectionIntro
          eyebrow={dict.gallery.eyebrow}
          title={dict.gallery.title}
          description={dict.gallery.description}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-2xl shadow-blue-950/10">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/before-after-placeholder.png"
                alt={dict.gallery.imageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4">
            {dict.gallery.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-lg border border-slate-200 bg-[#f7fbff] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-[#2437d6]">
                  <ImageIcon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="font-semibold text-slate-800">{item}</span>
              </div>
            ))}
            <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-900">
              {dict.gallery.disclaimer}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
