import { OG_SIZE, renderShareImage } from "@/lib/og";
import { articles, getArticle } from "@/content/journal";

export const alt = "The Dental Suite & Co. Journal";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug)!;
  return renderShareImage({ eyebrow: `Journal · ${a.category}`, title: a.title, subtitle: a.excerpt });
}
