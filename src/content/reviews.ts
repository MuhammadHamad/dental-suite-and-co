// Verbatim Google reviews (Aug 2026). The tenth review on the listing is from Dr. Osama's own
// account and is intentionally left out. Reviewer names are title-cased for display only.

export type Review = {
  author: string;
  text: string;
  topic?: string;
  featured?: boolean;
};

export const reviews: Review[] = [
  {
    author: "Safna Bibi",
    topic: "Smile makeover",
    featured: true,
    text: "I went for my smile makeover to this clinic. The dentist is highly professional and the results were amazing. Will recommend everyone. They take care of hygiene and the environment is quite friendly. While the doctor himself is the best ever. Wish we had such dentist everywhere.",
  },
  {
    author: "Shah Ibrar",
    topic: "Service",
    text: "Brilliant, fast and efficient service. Doctor is also great and very friendly. “Very nice place staff and doctors are amazing 10/10” highly recommend.",
  },
  { author: "Irfan Khan", topic: "Braces", text: "Best clinic for Ortho and braces in peshawar" },
  { author: "Waheed Khan", text: "Dctr osama Afridi one of the best dentist in Peshawar highly recommend" },
  { author: "Muhammad Haseeb Khattak", text: "One of the best dentist in Peshawar highly recommend" },
  { author: "Zaoyar Khan", text: "Best dental clinic in Peshawar highly recommend" },
  { author: "Ammar Farooq", text: "Best of the best highly recommend In Peshawar" },
  { author: "Jamal Abdul Nasar Ali Khan", text: "Do visit and 100 percent recommended" },
  { author: "Attaullah Shah", text: "Fully recommended" },
];

export const reviewPeriod = "Google review · Aug 2026";
