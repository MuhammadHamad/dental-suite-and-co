import { GoogleIcon, QuoteIcon, StarIcon } from "@/components/icons";
import { LaurelBadge } from "@/components/laurel";
import { clinic } from "@/content/site";
import { reviewPeriod, type Review } from "@/content/reviews";

export function Stars({ className = "text-gold-500", size = 16 }: { className?: string; size?: number }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={size} />
      ))}
    </span>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export function ReviewCard({ review, tone = "light" }: { review: Review; tone?: "light" | "dark" }) {
  const onDark = tone === "dark";
  return (
    <figure
      className={`flex h-full flex-col rounded-3xl p-7 ${
        onDark ? "card-dark" : "border border-ink-900/[0.07] bg-white shadow-[0_20px_50px_-35px_rgba(16,15,12,0.35)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <Stars size={15} />
        <GoogleIcon size={16} />
      </div>
      <blockquote className={`mt-5 flex-1 text-[1.02rem] leading-relaxed ${onDark ? "text-stone-300" : "text-ink-800"}`}>
        <p>&ldquo;{review.text}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          className={`grid h-10 w-10 place-items-center rounded-full text-xs font-bold ${
            onDark ? "bg-gold-300/10 text-gold-300" : "bg-ivory-200 text-gold-800"
          }`}
          aria-hidden="true"
        >
          {initials(review.author)}
        </span>
        <span>
          <span className={`block text-sm font-bold ${onDark ? "text-ivory-50" : "text-ink-900"}`}>{review.author}</span>
          <span className={`block text-xs ${onDark ? "text-stone-500" : "text-muted"}`}>
            {review.topic ? `${review.topic} · ` : ""}
            {reviewPeriod}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function FeaturedReview({ review }: { review: Review }) {
  return (
    <figure className="relative">
      <QuoteIcon size={48} className="text-gold-400/70" />
      <blockquote className="mt-4 font-display text-[1.5rem] font-medium leading-[1.3] text-ink-900 sm:text-[2.3rem] sm:leading-[1.25]">
        <p>{review.text}</p>
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-ink-900 font-display text-lg text-gold-300">
          {initials(review.author)}
        </span>
        <span>
          <span className="block font-bold text-ink-900">{review.author}</span>
          <span className="block text-sm text-muted">
            {review.topic} · {reviewPeriod}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function RatingSeal({ tone = "light" }: { tone?: "light" | "dark" }) {
  const onDark = tone === "dark";
  return (
    <LaurelBadge leafClassName={`h-24 w-auto ${onDark ? "text-gold-400" : "text-gold-600"}`}>
      <span className={`block font-display text-6xl font-semibold leading-none [font-variant-numeric:lining-nums] ${onDark ? "text-ivory-50" : "text-ink-900"}`}>
        {clinic.rating.google.value.toFixed(1)}
      </span>
      <Stars className={`mt-2 ${onDark ? "text-gold-400" : "text-gold-600"}`} size={14} />
      <span className={`mt-2 block text-[0.65rem] font-bold uppercase tracking-[0.22em] ${onDark ? "text-stone-400" : "text-muted"}`}>
        Google rating
      </span>
    </LaurelBadge>
  );
}
