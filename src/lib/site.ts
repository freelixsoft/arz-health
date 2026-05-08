export const SITE_URL = "https://arzhealth.com";

export const WHATSAPP_NUMBER = "PHONE_NUMBER";

export const WHATSAPP_MESSAGE =
  "Hello ARZ Health, I would like to get information about treatments.";

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
