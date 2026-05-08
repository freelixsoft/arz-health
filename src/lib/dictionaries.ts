import "server-only";
import en from "../../locales/en.json";
import tr from "../../locales/tr.json";
import ar from "../../locales/ar.json";
import type { Locale } from "./routes";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  tr,
  ar
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
