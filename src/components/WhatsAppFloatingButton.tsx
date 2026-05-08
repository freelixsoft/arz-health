import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";

export function WhatsAppFloatingButton({ label }: { label: string }) {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="fixed bottom-4 left-4 right-4 z-50 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#128C7E] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-teal-950/20 transition hover:bg-[#0f766e] sm:left-auto sm:right-6 sm:w-auto sm:rounded-full"
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
}
