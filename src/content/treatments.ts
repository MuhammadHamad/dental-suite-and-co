import type { IconName } from "@/components/icons";

export type TreatmentCategory = "Cosmetic" | "Restorative" | "Orthodontic" | "Preventive" | "Family";

export type Treatment = {
  slug: string;
  name: string;
  /** H1 and <title> — carries the local search phrase. */
  title: string;
  metaDescription: string;
  category: TreatmentCategory;
  icon: IconName;
  tagline: string;
  intro: string;
  idealFor: string[];
  goodToKnow?: string[];
  options?: { name: string; description: string; bestFor: string }[];
  steps: { title: string; description: string }[];
  facts: { label: string; value: string }[];
  aftercare: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  caseSlug?: string;
  journalSlug?: string;
};

export const treatments: Treatment[] = [
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    title: "Smile Makeover in Peshawar",
    metaDescription:
      "Smile makeover in Peshawar by Dr. Osama Afridi — whitening, veneers, zirconia crowns and aligners combined into one staged plan. Book at Liberty Mall.",
    category: "Cosmetic",
    icon: "sparkle-tooth",
    tagline: "One considered plan for shade, shape and symmetry.",
    intro:
      "A smile makeover brings together the treatments your smile actually needs — whitening, bonding, veneers, crowns or aligners — into a single plan designed around your face, your bite and your budget. Every step is mapped out and explained before a single tooth is touched, so you always know where you're heading.",
    idealFor: [
      "Teeth that are stained, chipped, worn or uneven in length",
      "Gaps, or old crowns and fillings that no longer match",
      "A smile you hide in photographs",
      "Getting ready for a wedding or a big occasion (start two to three months ahead)",
    ],
    goodToKnow: [
      "Decay and gum problems are treated first — cosmetic work only lasts on a healthy foundation.",
      "The most conservative option that achieves your goal is always on the table.",
      "Plans can be staged over several months to spread the cost.",
    ],
    options: [
      {
        name: "Whitening + bonding",
        description: "Brighten the whole smile, then refine chips and small gaps with tooth-coloured composite.",
        bestFor: "Healthy teeth that mainly need colour and small shape fixes",
      },
      {
        name: "Veneers",
        description: "Thin facings that correct colour, shape and proportion of the front teeth.",
        bestFor: "Front teeth with stubborn discolouration, wear or uneven edges",
      },
      {
        name: "Zirconia crowns",
        description: "Full-coverage restorations that rebuild heavily filled, broken or root-treated teeth.",
        bestFor: "Teeth that have lost a lot of structure",
      },
      {
        name: "Aligners first",
        description: "Straighten and space the teeth before any cosmetic work, so less tooth needs to be shaped.",
        bestFor: "Crowding or gaps behind the cosmetic concern",
      },
    ],
    steps: [
      {
        title: "Consultation & smile analysis",
        description:
          "We talk about what bothers you, examine your teeth, gums and bite, and take the records needed to plan properly.",
      },
      {
        title: "Your plan, with options",
        description:
          "You'll see the ideal plan alongside more conservative alternatives — with the costs and number of visits for each — explained clearly.",
      },
      {
        title: "Preview the result",
        description:
          "Using models and photographs, we walk you through the planned shape and shade so there are no surprises.",
      },
      {
        title: "Treatment in stages",
        description:
          "Foundations first (cleaning, fillings, gum care), then the cosmetic work — usually whitening before any veneers or crowns so everything matches.",
      },
      {
        title: "Review & maintenance",
        description:
          "We check the bite, polish, photograph the result and set up the simple routine that keeps it looking new.",
      },
    ],
    facts: [
      { label: "Visits", value: "2 – 6, depending on the plan" },
      { label: "Timeline", value: "A few days to a few months" },
      { label: "Anaesthesia", value: "Only where needed" },
    ],
    aftercare: [
      "Brush twice daily with a soft brush and clean between teeth daily",
      "Limit tea, coffee and naswar — they stain composite and natural teeth alike",
      "Wear a night guard if you grind your teeth",
      "Keep six-monthly check-ups and polishing visits",
    ],
    faqs: [
      {
        q: "How long does a smile makeover take?",
        a: "It depends on the plan. Whitening with bonding can be completed in two visits; plans involving veneers or crowns usually take two to three weeks; adding aligners first can extend it to several months. You'll get a realistic timeline at your consultation.",
      },
      {
        q: "Will my new teeth look fake?",
        a: "They shouldn't. The shade, length and shape are chosen to suit your face, skin tone and lip line — and natural teeth aren't paper-white, so we avoid an unnaturally flat white unless that's specifically what you want.",
      },
      {
        q: "Can I do my smile makeover in stages?",
        a: "Yes. Many patients start with the foundations and whitening, then complete veneers or crowns later. A staged plan spreads the cost without compromising the final result.",
      },
      {
        q: "Do veneers or crowns damage natural teeth?",
        a: "Most cosmetic restorations need some reshaping of the tooth. That's why we always present the most conservative option that will achieve your goal — sometimes whitening and bonding are all you need.",
      },
    ],
    related: ["veneers", "teeth-whitening", "crowns-and-bridges", "braces-and-aligners"],
    caseSlug: "restoring-whats-lost",
  },
  {
    slug: "veneers",
    name: "Veneers",
    title: "Porcelain & Composite Veneers in Peshawar",
    metaDescription:
      "Natural-looking porcelain and composite veneers in Peshawar for stained, chipped or uneven front teeth. Honest advice from Dr. Osama Afridi, Liberty Mall.",
    category: "Cosmetic",
    icon: "veneer",
    tagline: "Thin, natural facings that reshape and brighten front teeth.",
    intro:
      "Veneers are thin shells bonded to the front surface of your teeth to correct colour, shape, small gaps and chips. Composite veneers are sculpted directly onto the tooth in the chair; porcelain veneers are crafted in a dental laboratory for maximum lustre and stain resistance. We'll help you choose the one that suits your teeth, habits and budget.",
    idealFor: [
      "Discolouration that whitening can't shift",
      "Chipped, worn or uneven front teeth",
      "Small gaps between the front teeth",
      "Teeth that look too short or out of proportion",
    ],
    goodToKnow: [
      "Heavy grinding (bruxism) needs a night guard, or veneers can chip.",
      "Active decay or gum disease must be treated first.",
      "Significantly crooked teeth are often better straightened with aligners first.",
    ],
    options: [
      {
        name: "Composite veneers",
        description:
          "Layered by hand in tooth-coloured resin, usually in a single visit. Minimal or no drilling, easy to repair, more affordable — but they stain and wear faster and need occasional polishing.",
        bestFor: "Conservative, budget-conscious improvements",
      },
      {
        name: "Porcelain veneers",
        description:
          "Made in a laboratory from dental ceramic. Highly stain resistant with a natural sheen and the longest lifespan — they need a thin layer of enamel prepared and two to three visits.",
        bestFor: "Long-lasting, high-end results",
      },
    ],
    steps: [
      { title: "Consultation", description: "We assess your teeth, bite and smile line and agree the look you want." },
      {
        title: "Shade & design",
        description: "If you'd like whiter teeth, we whiten first — veneers are matched to your final shade.",
      },
      {
        title: "Preparation",
        description:
          "Composite: the surface is cleaned and bonded. Porcelain: a fraction of a millimetre of enamel is shaped and impressions are taken.",
      },
      {
        title: "Placement",
        description: "Veneers are bonded, shaped, and polished; porcelain veneers are tried in before final cementation.",
      },
      { title: "Bite check & polish", description: "We refine how your teeth meet so the veneers last." },
    ],
    facts: [
      { label: "Visits", value: "1 (composite) · 2–3 (porcelain)" },
      { label: "Lifespan", value: "~5–7 yrs composite · 10–15+ yrs porcelain" },
      { label: "Downtime", value: "None" },
    ],
    aftercare: [
      "Avoid biting hard objects — nuts in their shells, ice, pens",
      "Use a night guard if you clench or grind",
      "Polish composite veneers at your routine check-ups",
      "Brush and floss as you would natural teeth",
    ],
    faqs: [
      {
        q: "Composite or porcelain veneers — which is better?",
        a: "Neither is better for everyone. Composite is quicker, more conservative and more affordable, but needs more upkeep. Porcelain costs more and needs a little enamel preparation, but it resists staining and lasts far longer. We'll recommend what suits your teeth and habits.",
      },
      {
        q: "How long do veneers last?",
        a: "With good care, composite veneers typically last around five to seven years before they need refurbishing, and porcelain veneers commonly last ten to fifteen years or more.",
      },
      {
        q: "Do veneers hurt?",
        a: "Composite veneers usually need little or no anaesthetic. For porcelain veneers, a local anaesthetic keeps preparation comfortable; some temporary sensitivity afterwards is normal.",
      },
      {
        q: "Can veneers be whitened later?",
        a: "No — veneers keep the colour they're made in. That's why we whiten your natural teeth first, then match the veneers to your new shade.",
      },
    ],
    related: ["smile-makeover", "teeth-whitening", "fillings-and-bonding"],
  },
  {
    slug: "crowns-and-bridges",
    name: "Crowns & Bridges",
    title: "Zirconia Crowns & Bridges in Peshawar",
    metaDescription:
      "Zirconia and PFM crowns and bridges in Peshawar to rebuild broken teeth or replace a missing one, including 3D-printed PFM. Dr. Osama Afridi, Liberty Mall.",
    category: "Restorative",
    icon: "crown",
    tagline: "Zirconia and PFM restorations for broken or missing teeth.",
    intro:
      "A crown — often called a “cap” — covers and protects a tooth that is broken, heavily filled or root-canal treated. A bridge replaces a missing tooth by anchoring a false tooth to the teeth on either side. We offer metal-free zirconia and porcelain-fused-to-metal (PFM) options, including PFM crowns produced with a 3D-printed workflow, and we explain the trade-offs honestly.",
    idealFor: [
      "Cracked, broken or badly decayed teeth",
      "Back teeth after root canal treatment",
      "Large old fillings that keep failing",
      "A missing tooth between two teeth that already need crowns (bridge)",
    ],
    goodToKnow: [
      "A bridge relies on the neighbouring teeth, which are shaped to support it — an implant doesn't.",
      "Crowns need healthy gums and a well-sealed tooth underneath to last.",
    ],
    options: [
      {
        name: "Zirconia",
        description:
          "Metal-free, very strong and tooth-coloured all the way through — no grey line at the gum. Suitable for front and back teeth.",
        bestFor: "Natural appearance with high strength",
      },
      {
        name: "PFM (porcelain-fused-to-metal)",
        description:
          "A metal core under porcelain. A long-proven, budget-friendly option; the metal can show as a thin dark line if the gum recedes over time.",
        bestFor: "Back teeth and cost-conscious plans",
      },
      {
        name: "Zirconia bridge",
        description:
          "A fixed, non-removable replacement for one or more missing teeth, supported by crowns on the teeth beside the gap.",
        bestFor: "Replacing a missing tooth when an implant isn't preferred",
      },
    ],
    steps: [
      { title: "Assessment & X-ray", description: "We check the tooth, its root and the gums, and confirm a crown or bridge is the right call." },
      {
        title: "Preparation & impressions",
        description: "Under local anaesthetic, the tooth is shaped and an accurate impression is recorded for the laboratory.",
      },
      { title: "Temporary crown", description: "You leave with a temporary that protects the tooth while your final crown is made." },
      {
        title: "Fit & cement",
        description: "We check fit, shade and bite in the mouth before cementing — adjustments are made chairside.",
      },
      { title: "Aftercare", description: "A follow-up check ensures the bite is comfortable and the gums are healthy." },
    ],
    facts: [
      { label: "Visits", value: "Usually 2, about a week apart" },
      { label: "Lifespan", value: "Often 10–15+ years with good care" },
      { label: "Anaesthesia", value: "Local" },
    ],
    aftercare: [
      "Avoid very sticky or hard foods on the temporary crown",
      "Clean carefully around the crown margin at the gum line",
      "Use floss threaders or interdental brushes under a bridge",
      "Report any change in bite or sensitivity early",
    ],
    faqs: [
      {
        q: "Zirconia or PFM — which crown should I choose?",
        a: "Zirconia is metal-free, strong and more natural-looking, so it's ideal for visible teeth. PFM is a proven, more affordable choice that works well on back teeth. We'll show you both and let you decide with the full picture.",
      },
      {
        q: "How long do crowns last?",
        a: "Well-made crowns commonly last ten to fifteen years or more. Their lifespan depends on gum health, cleaning, grinding habits and regular check-ups.",
      },
      {
        q: "Bridge or implant — what's better for a missing tooth?",
        a: "An implant replaces the root and doesn't involve the neighbouring teeth, so it's often the ideal. A bridge is faster, needs no surgery and suits cases where the neighbouring teeth need crowns anyway, or where bone loss makes an implant complex. Read our full comparison in the Journal.",
      },
      {
        q: "Will my crown look like a natural tooth?",
        a: "Yes — the shade is matched to your neighbouring teeth and the shape to your smile. Zirconia in particular avoids the grey margin that older crowns sometimes show.",
      },
    ],
    related: ["dental-implants", "root-canal-treatment", "smile-makeover"],
    caseSlug: "missing-front-tooth-zirconia-bridge",
    journalSlug: "zirconia-vs-pfm-crowns",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    title: "Dental Implants in Peshawar",
    metaDescription:
      "Replace missing teeth with dental implants in Peshawar — clear planning, honest options and natural-looking crowns from Dr. Osama Afridi at Liberty Mall.",
    category: "Restorative",
    icon: "implant",
    tagline: "A fixed, natural-feeling replacement for a missing tooth.",
    intro:
      "A dental implant is a small titanium post placed in the jawbone to replace the root of a missing tooth. Once it has fused with the bone, a custom crown is fitted on top. Implants stand on their own — no cutting of healthy neighbouring teeth — and they help preserve the jawbone that naturally shrinks after a tooth is lost.",
    idealFor: [
      "One or more missing teeth",
      "Avoiding a bridge that would require shaping healthy teeth",
      "Loose or uncomfortable dentures",
      "Replacing a tooth that can't be saved",
    ],
    goodToKnow: [
      "You need enough healthy bone — or a graft — to hold the implant.",
      "Smoking and uncontrolled diabetes reduce implant success; we'll discuss both openly.",
      "If an implant isn't right for you, a bridge or denture may be the better plan.",
    ],
    steps: [
      { title: "Consultation & imaging", description: "We examine the area, assess bone with X-rays or a 3D scan and discuss whether an implant suits you." },
      { title: "Planning", description: "Implant position, size and the final crown are planned before surgery." },
      { title: "Placement", description: "The implant is placed under local anaesthetic, usually in a single appointment." },
      { title: "Healing", description: "The bone bonds to the implant over roughly two to four months." },
      { title: "Your new tooth", description: "An impression is taken and a crown is fitted, shaded to match your smile." },
    ],
    facts: [
      { label: "Visits", value: "3–5 over the treatment" },
      { label: "Timeline", value: "Typically 3–6 months" },
      { label: "Anaesthesia", value: "Local" },
    ],
    aftercare: [
      "Soft diet and gentle rinsing for the first few days after placement",
      "Take any prescribed medicines exactly as directed",
      "Clean around the implant crown as carefully as a natural tooth",
      "Don't smoke — it significantly raises the risk of failure",
    ],
    faqs: [
      {
        q: "Does implant surgery hurt?",
        a: "The procedure is done under local anaesthetic, so you shouldn't feel pain during it. Most people describe a few days of mild soreness afterwards, manageable with standard painkillers.",
      },
      {
        q: "Am I too old for dental implants?",
        a: "Age alone isn't a barrier. What matters is your general health, bone and gums. Many older patients do very well with implants.",
      },
      {
        q: "What if I don't have enough bone?",
        a: "Bone grafting can sometimes rebuild the area. In other cases a bridge is the simpler, more predictable option — one of our patients with severe bone loss chose a zirconia bridge and we restored her front tooth beautifully.",
      },
      {
        q: "How much do implants cost in Peshawar?",
        a: "Cost depends on the number of implants, the implant system, whether grafting is needed and the type of crown. After assessment you'll receive a clear breakdown — our Journal explains what drives the price.",
      },
    ],
    related: ["crowns-and-bridges", "smile-makeover", "root-canal-treatment"],
    caseSlug: "missing-front-tooth-zirconia-bridge",
    journalSlug: "implant-vs-bridge",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    title: "Teeth Whitening in Peshawar",
    metaDescription:
      "Professional teeth whitening in Peshawar, supervised by a dentist. Brighten tea, coffee and smoking stains safely at The Dental Suite & Co., Liberty Mall.",
    category: "Cosmetic",
    icon: "whitening",
    tagline: "A brighter, natural shade — safely supervised.",
    intro:
      "Professional whitening lightens the natural colour of your teeth under a dentist's supervision, with your gums protected throughout. Before we start, we check whether your stains will actually respond — some marks, such as certain white or brown spots, are better treated with micro-abrasion or bonding.",
    idealFor: [
      "Yellowing from tea, coffee, smoking or naswar",
      "Teeth that have darkened with age",
      "Preparing for a wedding, Eid or an important event",
      "Setting a brighter shade before veneers or bonding",
    ],
    goodToKnow: [
      "Crowns, veneers and fillings don't whiten — they may need replacing afterwards to match.",
      "Tartar should be removed first; whitening over calculus doesn't work.",
      "Whitening is usually postponed during pregnancy and breastfeeding.",
    ],
    steps: [
      { title: "Check-up & shade record", description: "We confirm your teeth and gums are healthy and record your starting shade." },
      { title: "Scale & polish (if needed)", description: "Removing tartar and surface stain first gives an even, predictable result." },
      { title: "Protect & apply", description: "Gums are protected and a professional whitening gel is applied." },
      { title: "Review", description: "We compare shades and give you advice to manage any temporary sensitivity." },
    ],
    facts: [
      { label: "Visits", value: "Usually 1 in-clinic session" },
      { label: "Results last", value: "Months to a few years" },
      { label: "Downtime", value: "None" },
    ],
    aftercare: [
      "Avoid strongly coloured food and drink for 48 hours",
      "Use a sensitivity toothpaste if your teeth feel tender",
      "Cut back on smoking and naswar to keep the result",
      "A professional polish every six months helps maintain the shade",
    ],
    faqs: [
      {
        q: "Is teeth whitening safe for enamel?",
        a: "Professional whitening, carried out correctly, doesn't damage enamel. Temporary sensitivity is common and settles within a day or two.",
      },
      {
        q: "How long does whitening last?",
        a: "Typically anywhere from several months to a few years. Tea, coffee, smoking and naswar shorten it; good cleaning and regular polishing extend it.",
      },
      {
        q: "Whitening or micro-abrasion — which do I need?",
        a: "Whitening lightens the overall colour of the tooth. Micro-abrasion gently removes a very thin layer of surface enamel to reduce certain spots and patches. We examine your teeth to recommend the right one — sometimes both.",
      },
      {
        q: "Will whitening make my teeth sensitive?",
        a: "Some people feel short-lived sensitivity. We adjust the treatment to your teeth and recommend a desensitising toothpaste before and after if needed.",
      },
    ],
    related: ["scaling-and-polishing", "veneers", "smile-makeover"],
    caseSlug: "calculus-bad-breath",
    journalSlug: "whitening-vs-microabrasion",
  },
  {
    slug: "scaling-and-polishing",
    name: "Scaling & Polishing",
    title: "Scaling & Polishing (Teeth Cleaning) in Peshawar",
    metaDescription:
      "Scaling and polishing in Peshawar to remove tartar, stop bleeding gums and freshen bad breath. Gentle teeth cleaning at Liberty Mall, University Road.",
    category: "Preventive",
    icon: "cleaning",
    tagline: "Remove tartar, freshen breath, protect your gums.",
    intro:
      "Tartar (calculus) is hardened plaque that a toothbrush can't remove. Left in place it inflames the gums, causes bleeding and bad breath, and over time can loosen teeth. Scaling removes it from above and just below the gum line; polishing then smooths the surfaces so plaque and stains find it harder to stick.",
    idealFor: [
      "Bleeding gums when brushing",
      "Persistent bad breath",
      "Yellow or brown deposits near the gums",
      "Stains from tea, smoking or naswar",
      "Before whitening, aligners or any cosmetic work",
    ],
    steps: [
      { title: "Gum check", description: "We look at your gums and any pockets, and note areas that need extra attention." },
      { title: "Ultrasonic scaling", description: "A gentle vibrating tip and water spray loosen and wash away tartar." },
      { title: "Fine cleaning", description: "Hand instruments remove what remains in tight spots." },
      { title: "Polish", description: "Surfaces are polished smooth and surface stain is lifted." },
      { title: "Home-care coaching", description: "Practical brushing and flossing tips for your specific mouth." },
    ],
    facts: [
      { label: "Visits", value: "1" },
      { label: "Time", value: "About 30–60 minutes" },
      { label: "How often", value: "Every 6 months for most people" },
    ],
    aftercare: [
      "Mild sensitivity for a day or two is normal",
      "Keep brushing — bleeding settles as the gums heal",
      "Clean between your teeth every day",
      "Book your next cleaning in six months",
    ],
    faqs: [
      {
        q: "Does scaling damage teeth or make them loose?",
        a: "No. This is one of the most common myths. Scaling removes tartar, not enamel. Teeth can feel different afterwards because tartar was filling the spaces between them — the gums then heal and tighten. It's untreated tartar that loosens teeth.",
      },
      {
        q: "Is scaling painful?",
        a: "Most people find it comfortable. If your gums are very inflamed or your teeth sensitive, we can numb the area and work in stages.",
      },
      {
        q: "How often should I get my teeth cleaned?",
        a: "Every six months suits most people. Smokers, people with gum disease or braces may need it every three to four months.",
      },
      {
        q: "My gums bleed when I brush. Should I stop?",
        a: "No — bleeding is a sign of gum inflammation, usually from plaque and tartar. A professional cleaning plus gentle, regular brushing is what stops it.",
      },
    ],
    related: ["teeth-whitening", "kids-dentistry", "fillings-and-bonding"],
    caseSlug: "calculus-bad-breath",
    journalSlug: "does-scaling-damage-teeth",
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    title: "Root Canal Treatment (RCT) in Peshawar",
    metaDescription:
      "Painful or infected tooth? Careful root canal treatment in Peshawar that saves your natural tooth — every canal found, cleaned and sealed. Dr. Osama Afridi.",
    category: "Restorative",
    icon: "root-canal",
    tagline: "Relieve the pain and save your natural tooth.",
    intro:
      "When decay or a crack reaches the nerve inside a tooth, it can cause severe pain, swelling or an abscess. Root canal treatment removes the infected pulp, cleans and shapes every canal, and seals the tooth from the inside — relieving the pain and letting you keep your own tooth instead of losing it.",
    idealFor: [
      "Lingering pain with hot or cold",
      "Throbbing toothache, especially at night",
      "Swelling or a pimple-like bump on the gum",
      "A tooth that has darkened",
      "Deep decay or a cracked tooth",
    ],
    goodToKnow: [
      "Missed canals are a common reason root canals fail — we take the time to find every one.",
      "Back teeth usually need a crown afterwards to prevent fracture.",
    ],
    steps: [
      { title: "Diagnosis & X-ray", description: "We confirm the cause and map the root anatomy." },
      { title: "Numbing", description: "Local anaesthetic makes the procedure comfortable — similar to a filling." },
      {
        title: "Clean & shape",
        description: "The infected pulp is removed and each canal is cleaned, shaped and disinfected.",
      },
      { title: "Seal", description: "The canals are filled and sealed to stop bacteria getting back in." },
      {
        title: "Rebuild",
        description: "The tooth is restored — often with a post and core or composite build-up, then a crown.",
      },
    ],
    facts: [
      { label: "Visits", value: "1–3, depending on infection" },
      { label: "Anaesthesia", value: "Local" },
      { label: "Afterwards", value: "Crown often recommended" },
    ],
    aftercare: [
      "Avoid chewing hard food on the tooth until it's fully restored",
      "Mild tenderness for a few days is normal",
      "Complete any prescribed medicines",
      "Come back promptly for the final crown or filling",
    ],
    faqs: [
      {
        q: "Does a root canal hurt?",
        a: "Under local anaesthetic, a root canal feels much like having a filling. It's the infection that causes the pain — treatment is what relieves it.",
      },
      {
        q: "Do I need a crown after root canal treatment?",
        a: "Usually, for back teeth. A root-treated molar or premolar becomes more brittle, and a crown protects it from splitting. Front teeth can sometimes be restored with a filling alone.",
      },
      {
        q: "Wouldn't it be cheaper to just pull the tooth?",
        a: "Extraction is cheaper on the day, but replacing the missing tooth later with an implant or bridge usually costs more — and leaving a gap lets neighbouring teeth drift. Saving the tooth is generally the better long-term choice.",
      },
      {
        q: "How many visits does it take?",
        a: "Many root canals are completed in one or two visits. A heavily infected tooth may need a dressing and an extra appointment.",
      },
    ],
    related: ["crowns-and-bridges", "fillings-and-bonding", "dental-implants"],
    caseSlug: "hidden-palatal-canal",
    journalSlug: "root-canal-what-to-expect",
  },
  {
    slug: "braces-and-aligners",
    name: "Braces & Aligners",
    title: "Braces & Clear Aligners in Peshawar",
    metaDescription:
      "Braces and clear aligners in Peshawar for crowded teeth, gaps and bite problems. Orthodontic assessment at The Dental Suite & Co., University Road.",
    category: "Orthodontic",
    icon: "braces",
    tagline: "Straighter teeth, closed gaps and a healthier bite.",
    intro:
      "Orthodontic treatment gradually moves teeth into better positions for a straighter smile and a healthier bite. Fixed braces can treat almost every case; clear aligners are removable, nearly invisible trays that suit many mild-to-moderate cases — including spacing and crowding in adults who'd rather not wear wires.",
    idealFor: [
      "Crowded or overlapping teeth",
      "Gaps and spacing",
      "Protruding front teeth",
      "Overbite, underbite or crossbite",
      "Straightening before cosmetic work",
    ],
    options: [
      {
        name: "Fixed braces",
        description: "Brackets and wires that give precise control over tooth movement. Effective for simple and complex cases.",
        bestFor: "Most cases, including complex bites",
      },
      {
        name: "Clear aligners",
        description:
          "A series of custom clear trays, changed every one to two weeks. Removable for eating and brushing — and discreet.",
        bestFor: "Mild to moderate crowding and spacing",
      },
    ],
    steps: [
      { title: "Assessment", description: "Photographs, impressions or scans, and X-rays to understand your teeth and jaws." },
      { title: "Plan & timeline", description: "We explain which option suits you, how long it will take and what it costs." },
      { title: "Fitting", description: "Braces are bonded or your first aligners are fitted, with full instructions." },
      { title: "Progress visits", description: "Regular adjustments or new sets of aligners keep the movement on track." },
      { title: "Retainers", description: "Retainers hold your new smile in place — the step that makes results last." },
    ],
    facts: [
      { label: "Duration", value: "Typically 6–24 months" },
      { label: "Check-ups", value: "Every 4–8 weeks" },
      { label: "Retainers", value: "Essential afterwards" },
    ],
    aftercare: [
      "Brush around brackets carefully after every meal",
      "Wear aligners 20–22 hours a day",
      "Avoid hard and sticky food with fixed braces",
      "Wear your retainer exactly as advised",
    ],
    faqs: [
      {
        q: "Am I too old for braces?",
        a: "No. Teeth can be moved at any age as long as the gums and bone are healthy. Many of our orthodontic enquiries come from adults.",
      },
      {
        q: "Braces or aligners — which is better?",
        a: "Braces offer the most control and suit nearly every case. Aligners are more discreet and comfortable but rely on you wearing them consistently, and they suit mild-to-moderate cases best. We'll tell you honestly which will work for your teeth.",
      },
      {
        q: "Do braces hurt?",
        a: "Expect a few days of soreness after fitting and after adjustments. It's an ache rather than sharp pain, and it passes quickly.",
      },
      {
        q: "Why do I need a retainer?",
        a: "Teeth naturally try to drift back. A retainer holds them in their new position while the bone and gums settle — without one, results can relapse.",
      },
    ],
    related: ["smile-makeover", "kids-dentistry", "veneers"],
  },
  {
    slug: "kids-dentistry",
    name: "Kids' Dentistry",
    title: "Pediatric Dentistry — Children's Dentist in Peshawar",
    metaDescription:
      "Gentle children's dentistry in Peshawar: first check-ups, cleaning, fillings for milk teeth and friendly advice for parents. The Dental Suite & Co.",
    category: "Family",
    icon: "kids",
    tagline: "Gentle, patient care that builds lifelong habits.",
    intro:
      "Children's teeth need their own approach: calm explanations, short visits and prevention first. From a first check-up to treating painful milk teeth, we focus on keeping every visit positive — so your child grows up comfortable, not frightened, in the dental chair.",
    idealFor: [
      "A first dental visit (by the first birthday or when the first teeth appear)",
      "Cavities or dark spots in milk teeth",
      "Toothache or swelling",
      "Thumb-sucking and other habits",
      "Checking how adult teeth are coming through",
    ],
    steps: [
      { title: "Meet & explain", description: "We introduce the chair and tools in simple, friendly language before anything begins." },
      { title: "Check-up", description: "A gentle look at teeth, gums and development, with parents beside the chair." },
      { title: "Clean & protect", description: "Polishing and preventive advice tailored to your child's age." },
      { title: "Treat if needed", description: "Fillings or other care, kept short and comfortable." },
      { title: "Habits at home", description: "Brushing, diet and bedtime tips for parents that make a real difference." },
    ],
    facts: [
      { label: "First visit", value: "By age 1" },
      { label: "Check-ups", value: "Every 6 months" },
      { label: "Parents", value: "Welcome in the room" },
    ],
    aftercare: [
      "Brush twice daily — a rice-grain smear of fluoride toothpaste under 3, pea-sized from 3 to 6",
      "Supervise brushing until about age 7 or 8",
      "No sweet drinks in a bottle at bedtime",
      "Keep sugary snacks to mealtimes",
    ],
    faqs: [
      {
        q: "When should my child first see a dentist?",
        a: "Ideally when the first tooth appears or by the first birthday. Early visits are short and relaxed, and they help catch problems before they hurt.",
      },
      {
        q: "Do milk teeth really need fillings if they'll fall out?",
        a: "Yes. Milk teeth hold space for adult teeth and some stay until around age 12. Untreated cavities can cause pain, infection and early tooth loss that affects the adult teeth.",
      },
      {
        q: "How can I prepare my child for the visit?",
        a: "Keep it positive and simple — avoid words like “hurt” or “injection”. Reading a picture book about the dentist helps, and you're welcome to sit with them.",
      },
      {
        q: "Is fluoride toothpaste safe for children?",
        a: "Yes, in the right amount: a rice-grain-sized smear for under-threes and a pea-sized amount for ages three to six. Teach them to spit, not swallow.",
      },
    ],
    related: ["scaling-and-polishing", "fillings-and-bonding", "braces-and-aligners"],
  },
  {
    slug: "fillings-and-bonding",
    name: "Fillings & Bonding",
    title: "Tooth-Coloured Fillings & Composite Bonding in Peshawar",
    metaDescription:
      "Tooth-coloured fillings and composite bonding in Peshawar to repair cavities, chips and small gaps, usually in one visit. Dr. Osama Afridi, Liberty Mall.",
    category: "Restorative",
    icon: "filling",
    tagline: "Repair cavities and chips with natural, tooth-coloured composite.",
    intro:
      "Tooth-coloured (composite) fillings repair decay while blending in with your natural teeth. The same material can rebuild broken corners, close small gaps and reshape front teeth — a conservative, same-day cosmetic fix known as bonding. We treat patients of every age, from children's first fillings to our elderly patients.",
    idealFor: [
      "Cavities and decay",
      "Sensitivity from worn or chipped areas",
      "Old dark fillings you'd like replaced",
      "Small chips and gaps in front teeth",
      "Building up a broken tooth before a crown",
    ],
    steps: [
      { title: "Numb if needed", description: "Many small fillings need no anaesthetic; deeper ones do." },
      { title: "Remove decay", description: "Only the damaged tooth structure is removed." },
      { title: "Bond & layer", description: "Composite is bonded and built up in layers, shade-matched to your tooth." },
      { title: "Shape & cure", description: "Each layer is shaped and hardened with a curing light." },
      { title: "Polish & bite check", description: "The filling is polished and your bite adjusted so it feels natural." },
    ],
    facts: [
      { label: "Visits", value: "Usually 1" },
      { label: "Time", value: "20–60 minutes per tooth" },
      { label: "Eat after", value: "Once numbness wears off" },
    ],
    aftercare: [
      "Wait for numbness to wear off before eating",
      "Mild sensitivity for a few days can be normal",
      "Avoid biting very hard objects with bonded front teeth",
      "Keep up with regular check-ups so small problems stay small",
    ],
    faqs: [
      {
        q: "Are white fillings as strong as silver (amalgam) fillings?",
        a: "Modern composites are strong enough for most fillings, including on back teeth, and they bond to the tooth for extra support. Very large cavities may be better served by a crown.",
      },
      {
        q: "How long do composite fillings last?",
        a: "Typically five to ten years or more, depending on the size of the filling, your bite and your oral hygiene.",
      },
      {
        q: "Does getting a filling hurt?",
        a: "Small fillings are often painless. For deeper cavities a local anaesthetic keeps you comfortable throughout.",
      },
      {
        q: "Can bonding fix a gap between my front teeth?",
        a: "Often, yes — small gaps can be closed in a single visit by adding composite to the sides of the teeth. Larger gaps may be better treated with aligners.",
      },
    ],
    related: ["veneers", "root-canal-treatment", "kids-dentistry"],
  },
];

export const treatmentCategories: { name: TreatmentCategory; blurb: string }[] = [
  { name: "Cosmetic", blurb: "Shade, shape and symmetry" },
  { name: "Restorative", blurb: "Rebuild, repair and replace" },
  { name: "Orthodontic", blurb: "Align teeth and bite" },
  { name: "Preventive", blurb: "Keep teeth and gums healthy" },
  { name: "Family", blurb: "Care for every age" },
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
