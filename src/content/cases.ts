// Case notes the clinic published on its own Facebook/Instagram/YouTube in August 2026,
// rewritten for patients. No patient names or identifying details.

export type CaseNote = {
  slug: string;
  title: string;
  /** FDI-style shorthand the clinic itself used, shown as the card's visual. */
  notation: string;
  notationMeaning: string;
  treatment: string;
  treatmentSlug: string;
  date: string;
  summary: string;
  body: string[];
  takeaway: string;
  image?: "crowns";
};

export const cases: CaseNote[] = [
  {
    slug: "missing-front-tooth-zirconia-bridge",
    title: "A front tooth missing for eight years",
    notation: "UR1",
    notationMeaning: "Upper right central incisor",
    treatment: "Zirconia bridge",
    treatmentSlug: "crowns-and-bridges",
    date: "2026-08-26",
    summary:
      "Severe bone loss, a crossbite and a shifted midline — and a patient who wanted it restored to perfection.",
    body: [
      "She came to us with her upper right front tooth missing for at least eight years. Over that time the bone had shrunk considerably, she had developed a crossbite, and her midline had drifted towards the right.",
      "On paper, a dental implant was the ideal replacement — and we told her so. She preferred a fixed zirconia bridge instead, so we planned the bridge around her bite, gum line and shade to give her a natural, beautiful fit.",
    ],
    takeaway:
      "You'll always hear the ideal option from us. Then we respect your choice — and make it work beautifully.",
  },
  {
    slug: "hidden-palatal-canal",
    title: "The canal that was playing hide-and-seek",
    notation: "UL5",
    notationMeaning: "Upper left second premolar",
    treatment: "Root canal treatment",
    treatmentSlug: "root-canal-treatment",
    date: "2026-08-08",
    summary: "A root canal that looked straightforward — until the second canal refused to show itself.",
    body: [
      "This premolar had two canals, but the palatal one was hiding. A missed canal is one of the most common reasons a root canal fails, leaving infection behind to flare up later.",
      "So we kept looking until we found it. Then both canals were cleaned, shaped and sealed. Found the culprit. Cleaned it. Sealed it. Case closed.",
    ],
    takeaway: "Thorough beats fast. Finding every canal is what makes a root canal last.",
  },
  {
    slug: "calculus-bad-breath",
    title: "Bad breath, discolouration — and a lot of tartar",
    notation: "Scale",
    notationMeaning: "Scaling & polishing",
    treatment: "Scaling & polishing",
    treatmentSlug: "scaling-and-polishing",
    date: "2026-08-20",
    summary:
      "He came in worried about his breath and the colour of his teeth. The real culprit was hiding in plain sight.",
    body: [
      "On examination we found a heavy build-up of calculus (tartar) — a common cause of both bad breath and discoloured-looking teeth.",
      "Step one was a thorough scaling and polishing, and the before-and-after difference was dramatic. Once the gums have settled in a week or two, we'll decide together whether whitening or micro-abrasion will best treat any remaining discolouration.",
    ],
    takeaway: "Clean first, cosmetic second. Whitening over tartar never gives the result you want.",
  },
  {
    slug: "restoring-whats-lost",
    title: "Restoring what's lost",
    notation: "ZrO₂",
    notationMeaning: "Zirconia crowns",
    treatment: "Zirconia crowns · Smile makeover",
    treatmentSlug: "smile-makeover",
    date: "2026-08-28",
    summary: "Zirconia crowns to rebuild lost tooth structure — natural shade, proper shape, a bite that works.",
    body: [
      "Teeth that have lost structure to wear, decay or old failing work can be rebuilt with zirconia crowns: metal-free, strong and tooth-coloured all the way through.",
      "Each crown is checked for fit, shade and bite before it's cemented, so the result looks natural and functions properly for years.",
    ],
    takeaway: "A little effort from our side gets you a beautiful smile and lifetime confidence.",
    image: "crowns",
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
