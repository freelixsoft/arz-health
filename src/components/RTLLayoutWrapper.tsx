"use client";

import { useEffect, type ReactNode } from "react";
import type { Locale } from "@/lib/routes";

export function RTLLayoutWrapper({
  locale,
  dir,
  children
}: {
  locale: Locale;
  dir: "ltr" | "rtl";
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [dir, locale]);

  return <div className="min-h-screen">{children}</div>;
}
