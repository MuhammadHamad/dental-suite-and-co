import { OG_SIZE, renderShareImage } from "@/lib/og";

export const alt = "The Dental Suite & Co. — cosmetic & family dentist at Liberty Mall, University Road, Peshawar";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderShareImage({
    eyebrow: "Cosmetic & restorative dentistry",
    title: "Smile with confidence in Peshawar.",
    subtitle: "Smile makeovers, veneers, zirconia crowns, implants & whitening by Dr. Osama Afridi.",
  });
}
