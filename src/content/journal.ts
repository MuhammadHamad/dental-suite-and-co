// Patient-education articles. Health content: have Dr. Osama review before launch, then add a
// "Reviewed by" line (see docs/clinic-research.md).

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  published: string;
  readingMinutes: number;
  related: string[];
  html: string;
};

export const articles: Article[] = [
  {
    slug: "does-scaling-damage-teeth",
    title: "Does scaling damage your teeth? Six myths about teeth cleaning",
    description:
      "Worried scaling will weaken or loosen your teeth? A Peshawar dentist explains what scaling really does, why teeth feel different after, and how often to go.",
    excerpt:
      "Loose teeth, gaps, weak enamel — scaling gets blamed for all of it. Here's what's really happening when tartar comes off.",
    category: "Prevention",
    published: "2026-10-02",
    readingMinutes: 5,
    related: ["scaling-and-polishing", "teeth-whitening"],
    html: `
<p>Ask around in Peshawar and you'll hear it often: <em>“Don't get scaling done — it makes your teeth weak and loose.”</em> It's one of the most persistent dental myths we come across, and it keeps people away from a quick, comfortable treatment that protects their teeth for life.</p>
<p>Let's look at the six most common myths, and what's actually going on.</p>

<h2>Myth 1: Scaling scrapes away your enamel</h2>
<p>Scaling removes <strong>calculus</strong> (tartar) — hardened plaque stuck to the tooth — not the tooth itself. Ultrasonic scalers vibrate to crack calculus off the surface, and fine hand instruments clean what's left. Done correctly, scaling doesn't remove enamel or weaken teeth.</p>

<h2>Myth 2: Scaling makes your teeth loose</h2>
<p>This is the big one, and there's a reason it feels true. When tartar builds up for years, it inflames the gums and slowly destroys the bone that holds teeth in place. The tartar itself can act like a rigid splint, holding loosening teeth together.</p>
<p>When it's removed, you may notice movement that was <em>already there</em> — the damage was done by the tartar, not by the cleaning. After scaling, the gums heal and tighten over the following weeks. Leaving the tartar in place is what eventually loosens teeth for good.</p>

<h2>Myth 3: Scaling creates gaps between teeth</h2>
<p>Those spaces were filled with calculus and swollen gum. Once the deposits are gone and the gums shrink back to a healthy size, small gaps can become visible — especially where gum disease has already caused bone loss. Scaling reveals them; it doesn't cause them.</p>

<h2>Myth 4: Teeth stay sensitive forever afterwards</h2>
<p>Some sensitivity for a few days is normal, because root surfaces that were covered by tartar are suddenly exposed to air and cold drinks. It settles as the gums heal. A desensitising toothpaste helps in the meantime.</p>

<h2>Myth 5: If my gums bleed, I should brush less</h2>
<p>Bleeding gums are a sign of inflammation, almost always caused by plaque and tartar. Brushing gently — not avoiding the area — together with a professional cleaning is what stops the bleeding.</p>

<h2>Myth 6: You only need scaling when something hurts</h2>
<p>Gum disease is usually painless until it's advanced. That's why a cleaning every six months suits most people. If you smoke, use naswar, have diabetes or wear braces, every three to four months may be better.</p>

<h2>Signs it's time for a cleaning</h2>
<ul>
  <li>Your gums bleed when you brush or floss</li>
  <li>You have bad breath that doesn't go away</li>
  <li>You can see yellow or brown deposits near the gum line</li>
  <li>Your teeth look dull or stained from tea, smoking or naswar</li>
  <li>You're planning whitening, aligners or other cosmetic work</li>
</ul>

<blockquote><p>One of our patients came in worried about bad breath and discoloured teeth. The cause was heavy tartar. After a thorough scaling and polishing, the difference was dramatic — and only then did we discuss whitening.</p></blockquote>

<h2>What to expect at The Dental Suite &amp; Co.</h2>
<p>A <a href="/treatments/scaling-and-polishing">scaling and polishing</a> visit takes about 30 to 60 minutes. We check your gums, remove tartar with an ultrasonic scaler and hand instruments, polish your teeth smooth and give you practical home-care advice. If your gums are very inflamed, we can numb the area and work in stages.</p>
<p>Clean teeth are also the starting point for any cosmetic work — <a href="/treatments/teeth-whitening">whitening</a> over tartar simply doesn't work.</p>
`,
  },
  {
    slug: "zirconia-vs-pfm-crowns",
    title: "Zirconia vs PFM crowns: which one is right for you?",
    description:
      "Zirconia or porcelain-fused-to-metal? Compare the look, strength, cost and lifespan of dental crowns to choose the right one — from a dentist in Peshawar.",
    excerpt:
      "Both are proven. One is metal-free and more natural-looking; the other is the trusted, budget-friendly workhorse. Here's how to choose.",
    category: "Restorative",
    published: "2026-10-02",
    readingMinutes: 6,
    related: ["crowns-and-bridges", "root-canal-treatment"],
    html: `
<p>If you've been told you need a crown — a “cap” — you'll usually be offered two main options in Peshawar: <strong>zirconia</strong> or <strong>PFM</strong> (porcelain-fused-to-metal). Both work well. The right choice depends on which tooth it is, how it will look, your bite and your budget.</p>

<h2>When do you need a crown?</h2>
<ul>
  <li>The tooth is cracked or broken</li>
  <li>A large filling has left too little natural tooth</li>
  <li>The tooth has had root canal treatment (especially back teeth)</li>
  <li>You're replacing a missing tooth with a bridge</li>
  <li>You want to improve the shape or colour of a heavily restored tooth</li>
</ul>

<h2>PFM crowns: the proven workhorse</h2>
<p>A PFM crown has a thin metal framework covered in tooth-coloured porcelain. It has been used for decades and has an excellent track record.</p>
<ul>
  <li><strong>Pros:</strong> strong, reliable, more affordable, well suited to back teeth.</li>
  <li><strong>Cons:</strong> the metal can show as a thin dark line at the gum if your gum recedes; the porcelain layer can chip; it's less translucent than natural enamel.</li>
</ul>
<p>Modern laboratories increasingly design PFM frameworks digitally and produce them with 3D printing, which helps achieve a consistent, accurate fit. Our PFM crowns use this kind of 3D-printed workflow.</p>

<h2>Zirconia crowns: metal-free and natural-looking</h2>
<p>Zirconia is a very strong, white ceramic. Because there's no metal inside, there's no grey line at the gum and light passes through more naturally.</p>
<ul>
  <li><strong>Pros:</strong> metal-free, natural appearance, highly biocompatible, very strong, excellent for visible teeth.</li>
  <li><strong>Cons:</strong> costs more than PFM; must be finished and polished carefully so it's kind to the opposing teeth.</li>
</ul>
<p>Zirconia comes in different forms: very strong single-block zirconia for back teeth that take heavy biting forces, and more translucent, layered zirconia for front teeth where appearance matters most.</p>

<h2>Side by side</h2>
<table>
  <thead><tr><th></th><th>Zirconia</th><th>PFM</th></tr></thead>
  <tbody>
    <tr><td>Appearance</td><td>Natural, no metal</td><td>Good; possible dark gum line</td></tr>
    <tr><td>Strength</td><td>Very high</td><td>High</td></tr>
    <tr><td>Chipping</td><td>Low (especially solid zirconia)</td><td>Porcelain can chip</td></tr>
    <tr><td>Cost</td><td>Higher</td><td>Lower</td></tr>
    <tr><td>Best for</td><td>Front teeth, metal-free preference, bridges</td><td>Back teeth, budget-conscious plans</td></tr>
  </tbody>
</table>

<h2>How to decide</h2>
<ul>
  <li><strong>Front teeth or a visible smile line:</strong> zirconia, for the most natural look.</li>
  <li><strong>Back teeth on a budget:</strong> PFM is a sound, proven choice.</li>
  <li><strong>You grind your teeth:</strong> solid zirconia plus a night guard.</li>
  <li><strong>Metal sensitivity or you simply prefer metal-free:</strong> zirconia.</li>
</ul>

<blockquote><p>For a patient whose upper front tooth had been missing for eight years, we chose a zirconia bridge — metal-free, strong enough to span the gap, and shade-matched to her smile.</p></blockquote>

<h2>How long do crowns last?</h2>
<p>Well-made crowns of either type commonly last ten to fifteen years or more. What shortens their life is usually not the material, but decay at the edge of the crown, gum disease or heavy grinding. Brush along the gum line, clean between your teeth daily and keep your check-ups.</p>
<p>Not sure which is right for you? We'll show you both options for your specific tooth at your <a href="/treatments/crowns-and-bridges">crowns and bridges</a> consultation.</p>
`,
  },
  {
    slug: "implant-vs-bridge",
    title: "Missing a tooth? Implant vs bridge vs denture, explained",
    description:
      "Implant, bridge or partial denture? Compare cost, comfort, lifespan and who each option suits for replacing a missing tooth — from a dentist in Peshawar.",
    excerpt:
      "There's an ideal option on paper and the right option for you. Here's how implants, bridges and dentures really compare.",
    category: "Restorative",
    published: "2026-10-02",
    readingMinutes: 6,
    related: ["dental-implants", "crowns-and-bridges"],
    html: `
<p>Losing a tooth — especially a front tooth — affects more than your smile. Over time, the teeth on either side drift into the gap, the opposing tooth can over-erupt, your bite changes, and the jawbone where the tooth used to be slowly shrinks. Replacing it sooner rather than later keeps your options open.</p>
<p>There are three main ways to replace a missing tooth.</p>

<h2>1. Dental implant</h2>
<p>A titanium post is placed in the jawbone to act as a new root. After two to four months of healing, a crown is fitted on top.</p>
<ul>
  <li><strong>Pros:</strong> fixed and stable, feels the most like a natural tooth, doesn't involve the neighbouring teeth, helps preserve bone.</li>
  <li><strong>Cons:</strong> needs minor surgery and healing time, highest upfront cost, needs enough healthy bone (or a graft).</li>
  <li><strong>Suits:</strong> healthy adults with good bone who want the longest-term solution.</li>
</ul>
<p>Learn more about <a href="/treatments/dental-implants">dental implants</a>.</p>

<h2>2. Fixed bridge</h2>
<p>A false tooth is held in place by crowns on the teeth either side of the gap. It's cemented permanently and isn't removable.</p>
<ul>
  <li><strong>Pros:</strong> fixed, no surgery, completed in about two visits, works even where bone is limited.</li>
  <li><strong>Cons:</strong> the neighbouring teeth must be shaped for crowns; cleaning under the bridge takes a little extra effort; doesn't stop bone shrinking under the gap.</li>
  <li><strong>Suits:</strong> people whose neighbouring teeth already need crowns, who prefer to avoid surgery, or where bone loss makes an implant complex.</li>
</ul>
<p>Learn more about <a href="/treatments/crowns-and-bridges">crowns and bridges</a>.</p>

<h2>3. Removable partial denture</h2>
<p>A plate carrying one or more false teeth that clips onto your remaining teeth and comes out for cleaning.</p>
<ul>
  <li><strong>Pros:</strong> the most affordable, quick to make, can replace several teeth at once.</li>
  <li><strong>Cons:</strong> less stable, can feel bulky, needs to be removed nightly, may need replacing more often.</li>
  <li><strong>Suits:</strong> multiple missing teeth, a temporary solution, or a tight budget.</li>
</ul>

<h2>At a glance</h2>
<table>
  <thead><tr><th></th><th>Implant</th><th>Bridge</th><th>Partial denture</th></tr></thead>
  <tbody>
    <tr><td>Fixed in place</td><td>Yes</td><td>Yes</td><td>No</td></tr>
    <tr><td>Affects neighbouring teeth</td><td>No</td><td>Yes</td><td>Slightly (clasps)</td></tr>
    <tr><td>Helps preserve bone</td><td>Yes</td><td>No</td><td>No</td></tr>
    <tr><td>Surgery</td><td>Yes (minor)</td><td>No</td><td>No</td></tr>
    <tr><td>Time to finish</td><td>3–6 months</td><td>1–2 weeks</td><td>1–3 weeks</td></tr>
    <tr><td>Upfront cost</td><td>Highest</td><td>Middle</td><td>Lowest</td></tr>
  </tbody>
</table>

<h2>A real decision from our clinic</h2>
<blockquote><p>A patient came to us with her upper right front tooth missing for at least eight years. She had severe bone loss, a crossbite and a midline that had shifted to the right. We recommended an implant as the ideal — and explained why. She preferred a fixed zirconia bridge, so we planned one around her bite and shade and restored her smile to a beautiful fit.</p></blockquote>
<p>That's how we approach every missing tooth: you hear the ideal option and every reasonable alternative, with honest pros, cons and costs. Then the choice is yours.</p>

<h2>Questions to ask at your consultation</h2>
<ul>
  <li>Do I have enough bone for an implant? Would I need a graft?</li>
  <li>Are my neighbouring teeth healthy, or do they need crowns anyway?</li>
  <li>How long will each option take, and how many visits?</li>
  <li>What will each option cost now, and over the next ten years?</li>
</ul>
`,
  },
  {
    slug: "root-canal-what-to-expect",
    title: "Root canal treatment: does it hurt, and what really happens?",
    description:
      "Root canal treatment explained step by step: signs you need one, whether it hurts, how many visits it takes and why a crown often follows. Peshawar dentist.",
    excerpt:
      "Root canals have a scary reputation they no longer deserve. Here's what happens, step by step — and why it's the pain that ends, not begins.",
    category: "Restorative",
    published: "2026-10-02",
    readingMinutes: 5,
    related: ["root-canal-treatment", "crowns-and-bridges"],
    html: `
<p>Few words worry patients more than “root canal”. But the reputation comes from the toothache that leads to treatment, not the treatment itself. With modern local anaesthesia, a root canal feels much like having a filling — and it's what finally stops the pain.</p>

<h2>Signs you might need a root canal</h2>
<ul>
  <li>Pain with hot or cold that lingers after the drink is gone</li>
  <li>A throbbing ache, especially at night or when lying down</li>
  <li>Pain when biting</li>
  <li>Swelling of the gum or face, or a pimple-like bump on the gum</li>
  <li>A tooth that has turned grey or dark</li>
</ul>
<p>Sometimes there are no symptoms at all and the infection is found on an X-ray.</p>

<h2>What actually happens</h2>
<ol>
  <li><strong>Diagnosis.</strong> We examine the tooth and take an X-ray to see the roots and any infection.</li>
  <li><strong>Numbing.</strong> A local anaesthetic makes the tooth comfortably numb.</li>
  <li><strong>Access.</strong> A small opening is made in the top of the tooth to reach the pulp.</li>
  <li><strong>Cleaning and shaping.</strong> The infected pulp is removed and each canal is cleaned, shaped and disinfected.</li>
  <li><strong>Sealing.</strong> The canals are filled with a rubber-like material and sealed.</li>
  <li><strong>Rebuilding.</strong> The tooth is restored — often with a post and core or composite build-up, followed by a crown.</li>
</ol>

<h2>Why finding every canal matters</h2>
<p>Teeth don't always have the number of canals you'd expect. Upper premolars, for example, often have two — and one can be hard to find. A canal that's missed is left full of bacteria, and it's one of the most common reasons root canals fail months or years later.</p>
<blockquote><p>On one upper premolar we treated, the second (palatal) canal was “playing hide and seek”. We kept looking until we found it, then cleaned and sealed both. Thorough beats fast.</p></blockquote>

<h2>How many visits?</h2>
<p>Many root canals are completed in one or two visits. If the tooth is badly infected, we may place a medicated dressing and finish at a second or third appointment once things have settled.</p>

<h2>After treatment</h2>
<ul>
  <li>The tooth may feel tender for a few days — standard painkillers usually help.</li>
  <li>Avoid chewing hard food on it until it's fully restored.</li>
  <li>Back teeth usually need a <a href="/treatments/crowns-and-bridges">crown</a>, because a root-treated tooth is more brittle and can split.</li>
</ul>

<h2>Root canal or extraction?</h2>
<p>Pulling the tooth is cheaper on the day. But a gap lets neighbouring teeth drift, and replacing the tooth later with an implant or bridge usually costs more than saving it. Wherever a tooth can be saved predictably, it's generally the better long-term choice.</p>
<p>Toothache that won't settle? Read more about <a href="/treatments/root-canal-treatment">root canal treatment</a> or call us — the sooner an infected tooth is treated, the more likely it can be saved.</p>
`,
  },
  {
    slug: "whitening-vs-microabrasion",
    title: "Whitening or micro-abrasion? The right fix for tooth stains",
    description:
      "Not every stain responds to whitening. Learn when scaling, whitening, micro-abrasion or bonding is the right fix for yellow teeth, white spots and stains.",
    excerpt:
      "Yellow teeth, white spots and brown patches need different treatments. Here's how to match the fix to the stain.",
    category: "Cosmetic",
    published: "2026-10-02",
    readingMinutes: 5,
    related: ["teeth-whitening", "scaling-and-polishing", "veneers"],
    html: `
<p>“I want whiter teeth” is one of the most common requests we hear. But tooth discolouration comes in different forms, and each responds to a different treatment. Choosing the wrong one wastes time and money — so the first step is always working out what kind of stain you have.</p>

<h2>Surface stains vs deep stains</h2>
<p><strong>Surface (extrinsic) stains</strong> sit on the outside of the tooth. Tea, coffee, smoking and naswar are the usual culprits, often trapped in tartar.</p>
<p><strong>Deep (intrinsic) stains</strong> are within the tooth: natural yellowing with age, white or brown spots from excess fluoride during childhood (fluorosis), marks left after braces, a tooth darkened by an old injury, or staining from certain medicines taken in childhood.</p>

<h2>Step one: a professional clean</h2>
<p>Many “yellow teeth” turn out to be surface stain and tartar. A <a href="/treatments/scaling-and-polishing">scaling and polishing</a> visit removes these and often makes a striking difference on its own. It's also essential before any whitening — bleaching gel can't work through tartar.</p>

<h2>Teeth whitening</h2>
<p>Professional <a href="/treatments/teeth-whitening">whitening</a> uses a peroxide gel that breaks down pigment within the tooth, lightening its overall colour.</p>
<ul>
  <li><strong>Best for:</strong> general yellowing, age-related darkening, stubborn tea and tobacco discolouration.</li>
  <li><strong>Less effective for:</strong> sharply defined white or brown spots, and grey staining from some medicines.</li>
  <li><strong>Note:</strong> crowns, veneers and fillings don't whiten.</li>
</ul>

<h2>Micro-abrasion</h2>
<p>Micro-abrasion gently removes a very thin layer of the outer enamel using a mild acidic, abrasive paste. It's conservative and done in the chair.</p>
<ul>
  <li><strong>Best for:</strong> superficial white or brown spots and patches — such as mild fluorosis or marks left after braces.</li>
  <li><strong>Often combined with:</strong> whitening, to even out the overall shade afterwards.</li>
</ul>

<h2>When bonding or veneers are the answer</h2>
<p>If staining is deep, or combined with chips, wear or uneven shapes, <a href="/treatments/fillings-and-bonding">composite bonding</a> or <a href="/treatments/veneers">veneers</a> can cover it completely while also improving shape.</p>

<h2>Quick guide</h2>
<table>
  <thead><tr><th>What you see</th><th>Likely cause</th><th>First treatment to consider</th></tr></thead>
  <tbody>
    <tr><td>Brown/yellow film near gums</td><td>Tartar, tea, smoking, naswar</td><td>Scaling &amp; polishing</td></tr>
    <tr><td>Overall yellow shade</td><td>Age, diet</td><td>Whitening</td></tr>
    <tr><td>Chalky white or brown spots</td><td>Fluorosis, post-braces marks</td><td>Micro-abrasion (± whitening)</td></tr>
    <tr><td>One dark tooth</td><td>Old injury or nerve damage</td><td>Examination & X-ray first</td></tr>
    <tr><td>Stains plus chips or uneven teeth</td><td>Mixed</td><td>Bonding or veneers</td></tr>
  </tbody>
</table>

<blockquote><p>One patient came to us for bad breath and discolouration. Heavy tartar was the main cause, so we cleaned first. Once his gums settle, we'll decide together whether whitening or micro-abrasion will finish the job.</p></blockquote>
<p>Not sure what kind of stain you have? A short consultation is the quickest way to find the right — and most affordable — fix.</p>
`,
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
