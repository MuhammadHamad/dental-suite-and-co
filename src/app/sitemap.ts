import type { MetadataRoute } from "next";
import { treatments } from "@/content/treatments";
import { articles } from "@/content/journal";
import { absoluteUrl } from "@/lib/seo";

const LAUNCH = "2026-10-02";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/treatments", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/dr-osama-afridi", priority: 0.8, changeFrequency: "monthly" },
    { path: "/patient-stories", priority: 0.7, changeFrequency: "weekly" },
    { path: "/journal", priority: 0.6, changeFrequency: "weekly" },
  ];

  return [
    ...pages.map((p) => ({ url: absoluteUrl(p.path), lastModified: LAUNCH, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...treatments.map((t) => ({
      url: absoluteUrl(`/treatments/${t.slug}`),
      lastModified: LAUNCH,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((a) => ({
      url: absoluteUrl(`/journal/${a.slug}`),
      lastModified: a.published,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
