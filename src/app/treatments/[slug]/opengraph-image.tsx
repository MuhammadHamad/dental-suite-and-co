import { OG_SIZE, renderShareImage } from "@/lib/og";
import { getTreatment, treatments } from "@/content/treatments";

export const alt = "Treatment at The Dental Suite & Co., Peshawar";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTreatment(slug)!;
  return renderShareImage({ eyebrow: `${t.category} dentistry`, title: t.title, subtitle: t.tagline });
}
