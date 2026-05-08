import Image from "next/image";
import { Hotel, MapPin, Plane, Route } from "lucide-react";
import type { Dictionary } from "@/lib/types";
import { CheckList, Container, SectionIntro } from "./ui";

export function LocationSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-white py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionIntro
            eyebrow={dict.location.eyebrow}
            title={dict.location.title}
            description={dict.location.description}
            align="start"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: MapPin, text: dict.location.items[0] },
              { icon: Plane, text: dict.location.items[1] },
              { icon: Hotel, text: dict.location.items[2] },
              { icon: Route, text: dict.location.items[3] }
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200"
              >
                <item.icon aria-hidden="true" className="h-5 w-5 text-[#2437d6]" />
                <span className="text-sm font-semibold text-slate-800">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/11] bg-slate-100">
            <Image
              src="/images/istanbul-maslak.png"
              alt={dict.location.imageAlt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="border-t border-slate-200 p-5">
            <p className="text-sm font-bold text-slate-950">{dict.location.mapLabel}</p>
            <div className="mt-4">
              <CheckList items={dict.location.items} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
