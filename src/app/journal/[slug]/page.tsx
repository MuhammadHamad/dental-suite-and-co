import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArticleCard, TreatmentCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Monogram } from "@/components/logo";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { clinic } from "@/content/site";
import { articles, getArticle } from "@/content/journal";
import { getTreatment } from "@/content/treatments";
import { telLink, whatsappLink } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return pageMetadata({
    title: a.title,
    description: a.description,
    path: `/journal/${a.slug}`,
    type: "article",
    publishedTime: a.published,
    ownShareImage: true,
  });
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const related = a.related.map((s) => getTreatment(s)).filter((x) => x !== undefined);
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <section className="grain relative overflow-hidden bg-ink-900 text-ivory-50">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] glow [--glow-a:0.2]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-10 sm:px-6 lg:pb-24 lg:pt-14">
          <Breadcrumbs
            items={[
              { name: "Journal", path: "/journal" },
              { name: a.title, path: `/journal/${a.slug}` },
            ]}
          />
          <p className="eyebrow hero-rise mt-12 text-gold-400">
            {a.category} · {a.readingMinutes} min read
          </p>
          <h1 className="mt-6 font-display text-[2.6rem] font-medium leading-[1.04] sm:text-6xl">{a.title}</h1>
          <p className="hero-rise mt-7 text-lg leading-relaxed text-stone-400 sm:text-xl" style={{ ["--d" as string]: "120ms" }}>
            {a.excerpt}
          </p>
          <div className="hero-rise mt-9 flex items-center gap-4 border-t border-gold-300/10 pt-7 text-sm" style={{ ["--d" as string]: "200ms" }}>
            <Monogram id="ds-foil-article" className="h-11 w-11" />
            <div>
              <p className="font-semibold text-ivory-50">{clinic.brand}</p>
              <p className="text-stone-400">
                Published <time dateTime={a.published}>{formatDate(a.published)}</time>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-6 lg:grid-cols-[1fr_17rem] xl:px-8">
          <article className="prose-suite min-w-0" dangerouslySetInnerHTML={{ __html: a.html }} />
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-[1.75rem] bg-ink-900 p-7 text-ivory-50">
              <p className="eyebrow text-gold-400">Talk to Dr. Osama</p>
              <p className="mt-4 font-display text-2xl leading-snug">
                Every mouth is different. Get advice for yours.
              </p>
              <div className="mt-6 grid gap-2.5">
                <a href={whatsappLink(`Hi! I just read "${a.title}" and have a question.`)} target="_blank" rel="noopener" className="btn btn-gold !min-h-12 w-full text-sm">
                  <WhatsAppIcon size={18} />
                  WhatsApp us
                </a>
                <a href={telLink} className="btn btn-ghost-light !min-h-12 w-full text-sm">
                  <PhoneIcon size={16} className="text-gold-400" />
                  {clinic.phone.display}
                </a>
              </div>
            </div>
            {related.length > 0 && (
              <div className="mt-6 rounded-[1.75rem] border border-ink-900/[0.08] bg-white p-6">
                <p className="eyebrow text-gold-700">Related treatments</p>
                <ul className="mt-4 space-y-1">
                  {related.map((t) => (
                    <li key={t.slug}>
                      <Link href={`/treatments/${t.slug}`} className="group flex items-center justify-between py-2 font-semibold text-ink-900">
                        {t.name}
                        <ArrowRightIcon size={16} className="text-gold-700 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        <p className="mx-auto mt-14 max-w-6xl px-5 text-sm text-muted sm:px-6 xl:px-8">
          This article is general information, not a diagnosis. Please book an examination for advice about your own teeth.
        </p>
      </section>

      {related.length > 0 && (
        <section className="grain relative bg-ink-900 py-20 text-ivory-50">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
            <h2 className="font-display text-4xl font-medium sm:text-5xl">
              Treatments mentioned in <em className="text-foil">this article</em>
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((t, i) => (
                <TreatmentCard key={t.slug} t={t} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ivory-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
          <h2 className="font-display text-4xl font-medium text-ink-900 sm:text-5xl">Keep reading</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {more.map((m) => (
              <ArticleCard key={m.slug} a={m} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={articleSchema(a)} />
    </>
  );
}
