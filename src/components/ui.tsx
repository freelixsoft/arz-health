import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-start"
      }`}
    >
      <p
        className={`text-sm font-semibold uppercase tracking-[0.18em] ${
          tone === "dark" ? "text-cyan-200" : "text-cyan-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-normal sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            tone === "dark" ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function PrimaryLink({
  href,
  children,
  className = ""
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${buttonBase} bg-[#2437d6] text-white shadow-lg shadow-blue-900/15 hover:-translate-y-0.5 hover:bg-[#1627b5] focus-visible:outline-blue-700 ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
  className = "",
  external = false
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = `${buttonBase} border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 focus-visible:outline-cyan-600 ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function CardShell({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
