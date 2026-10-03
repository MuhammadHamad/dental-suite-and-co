import { PageHero } from "@/components/page-hero";
import { ArticleCard } from "@/components/cards";
import { Accent } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { articles } from "@/content/journal";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { CLINIC_ID } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Journal: Dental Advice from Peshawar",
  description:
    "Plain-language dental advice from The Dental Suite & Co., Peshawar: scaling myths, zirconia vs PFM crowns, implants vs bridges, root canals and whitening.",
  path: "/journal",
});

export default function JournalPage() {
  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Dental Suite & Co. Journal",
    url: absoluteUrl("/journal"),
    publisher: { "@id": CLINIC_ID },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: absoluteUrl(`/journal/${a.slug}`),
      datePublished: a.published,
    })),
  };

  return (
    <>
      <PageHero
        crumbs={[{ name: "Journal", path: "/journal" }]}
        eyebrow="The Journal"
        title={
          <>
            Straight answers to <Accent onDark>real questions.</Accent>
          </>
        }
        intro={
          <p>
            The questions we hear every week in the chair — answered properly, without jargon. Read before your visit, or
            send us your own question on WhatsApp.
          </p>
        }
      />
      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:px-8">
          {articles.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </div>
      </section>
      <CtaBand title="Have a question we haven't covered?" text="Message us on WhatsApp — we're happy to point you in the right direction." message="Hi! I have a dental question for The Dental Suite & Co." />
      <JsonLd data={blog} />
    </>
  );
}
