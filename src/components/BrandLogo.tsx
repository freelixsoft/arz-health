import Image from "next/image";

import type { Dictionary } from "@/lib/types";

export function BrandLogo({
  dict,
  inverted = false,
  compact = false
}: {
  dict: Dictionary;
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span
        className={`relative shrink-0 overflow-hidden rounded-md ${
          compact ? "h-10 w-28" : "h-12 w-36"
        } ${inverted ? "bg-white" : "bg-white"}`}
      >
        <Image
          src="/images/arz-health-logo.svg"
          alt={dict.site.name}
          fill
          sizes={compact ? "112px" : "144px"}
          className="object-contain p-1"
          priority={!compact}
          unoptimized
        />
      </span>
      {!compact ? (
        <span className="min-w-0">
          <span
            className={`block text-sm font-semibold ${
              inverted ? "text-slate-200" : "text-slate-500"
            }`}
          >
            {dict.site.tagline}
          </span>
        </span>
      ) : null}
    </span>
  );
}
