import { PlusIcon } from "@/components/icons";
import type { Faq } from "@/content/faqs";

export function FaqList({ faqs, tone = "light" }: { faqs: Faq[]; tone?: "light" | "dark" }) {
  const onDark = tone === "dark";
  return (
    <div className={`divide-y border-y ${onDark ? "divide-gold-300/15 border-gold-300/15" : "divide-ink-900/10 border-ink-900/10"}`}>
      {faqs.map((faq, i) => (
        <details key={faq.q} className="faq-item group" data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
          <summary className="flex items-start justify-between gap-6 py-6">
            <h3
              className={`font-display text-xl font-semibold leading-snug sm:text-2xl ${
                onDark ? "text-ivory-50" : "text-ink-900"
              }`}
            >
              {faq.q}
            </h3>
            <span
              className={`faq-icon mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border ${
                onDark ? "border-gold-300/30 text-gold-300" : "border-ink-900/15 text-gold-700"
              }`}
              aria-hidden="true"
            >
              <PlusIcon size={18} />
            </span>
          </summary>
          <p className={`max-w-3xl pb-7 pr-12 leading-relaxed ${onDark ? "text-stone-400" : "text-muted"}`}>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
