import { clinic } from "@/content/site";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi! I'd like to book an appointment at The Dental Suite & Co.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function treatmentWhatsappMessage(treatmentName: string) {
  return `Hi! I'd like to ask about ${treatmentName} at The Dental Suite & Co.`;
}

export const telLink = `tel:${clinic.phone.e164}`;
