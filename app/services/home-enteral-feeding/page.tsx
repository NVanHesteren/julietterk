import type { Metadata } from "next";
import BookButton from "@/components/BookButton";
import BookCta from "@/components/BookCta";
import FaqAccordion from "@/components/FaqAccordion";
import ThumbStrip from "@/components/ThumbStrip";

export const metadata: Metadata = {
  title: "Home Enteral Feeding",
  description:
    "Specialist support for children on long-term tube feeding - gastrostomy, NG tubes, blended diets, tolerance issues, and neuro-disability nutrition. Online consultations with Juliette Reese-Kari.",
  alternates: { canonical: "/services/home-enteral-feeding" },
};

const SPECIALISMS = [
  {
    title: "Long-term gastrostomy & NG feeding",
    desc: "Ongoing dietetic management for children on gastrostomy or nasogastric tube feeds. Feed selection, volume and rate adjustments, growth monitoring, and troubleshooting when things aren't working.",
  },
  {
    title: "Blended diets",
    desc: "Supporting families who want to use blended food through a gastrostomy. Safe preparation, nutritional adequacy, practical recipes, and balancing blended feeds with commercial formulas.",
  },
  {
    title: "Tolerance issues & feed planning",
    desc: "When a child isn't tolerating their feed - retching, vomiting, dumping, bloating, pain. Systematic assessment of what's going wrong and adjustments to make feeds more comfortable.",
  },
  {
    title: "Neuro-disability nutrition",
    desc: "Children with cerebral palsy, genetic conditions, acquired brain injury, and other neuro-disabilities have complex nutritional needs. I work across the full range - oral feeding adaptations, supplementation, tube feeding, and growth monitoring.",
  },
];

const FAQS = [
  { q: "Why would a child need a feeding tube?", a: "There are many reasons - difficulty swallowing safely (dysphagia), inability to take enough nutrition orally for adequate growth, neurological conditions affecting feeding, severe reflux, or conditions requiring supplemental nutrition. A tube is a tool to support growth and health when oral feeding alone isn't enough." },
  { q: "Can you help if my child is already under a hospital team?", a: "Yes. Many families I see have an NHS team but want additional or more frequent dietetic input, or they've been discharged and still need ongoing support. I'm happy to work alongside hospital teams and can communicate with them if that's helpful." },
  { q: "What's the difference between a gastrostomy and an NG tube?", a: "An NG (nasogastric) tube goes through the nose into the stomach - it's usually shorter-term. A gastrostomy is a tube placed directly into the stomach through the abdominal wall, typically for longer-term feeding. The choice depends on how long tube feeding is expected to be needed and other clinical factors." },
  { q: "Is blended diet safe for tube feeding?", a: "When done properly, yes. It needs careful planning to make sure it's nutritionally adequate, the right consistency for the tube, and prepared safely. I help families do this well - it's one of the areas where private dietetic input can really add value beyond what NHS services typically offer." },
  { q: "My child is retching and vomiting on their feeds - can you help?", a: "This is one of the most common things I see. There are many possible causes - feed rate, volume, osmolality, positioning, underlying reflux, the formula itself. A systematic review usually identifies what needs to change." },
  { q: "Do you support children transitioning from tube to oral feeding?", a: "Yes, though this is often a multidisciplinary process involving speech and language therapy alongside dietetics. I can support the nutritional side - managing the transition safely so growth is maintained while oral intake builds." },
  { q: "What does neuro-disability nutrition involve?", a: "It depends on the child. It might be growth monitoring using condition-specific charts, calorie and micronutrient assessment, texture modification for safe swallowing, supplementation, tube feed management, or all of the above. Every child with a neuro-disability has different needs." },
];

export default function HomeEnteralFeeding() {
  return (
    <>
      <section className="py-20 md:py-[80px] bg-cream">
        <div className="max-w-wide mx-auto px-[5vw]">
          <span className="eyebrow">Services · 03</span>
          <h1 className="h-display text-[clamp(2.4rem,5vw,3.6rem)] mt-5 mb-6 max-w-[820px]">
            Home <em>enteral feeding</em> support.
          </h1>
          <p className="text-[17px] text-ink-mid max-w-[640px] leading-[1.65] mb-8">
            Long-term tube feeding, blended diets, complex needs. This is the area I&apos;ve stayed in across the NHS, and where many private dietitians don&apos;t go. If your child is tube-fed, I understand the daily reality of it.
          </p>
          <BookButton>Book a consultation</BookButton>
        </div>
      </section>

      <ThumbStrip />

      <section className="py-16 md:py-24">
        <div className="max-w-wide mx-auto px-[5vw]">
          <div className="mb-12 max-w-[640px]">
            <span className="eyebrow">What I cover</span>
            <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4 mb-4">
              Specialist support for <em>tube-fed children</em>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SPECIALISMS.map((s) => (
              <div
                key={s.title}
                className="bg-white p-6 rounded border border-ink/10 flex flex-col gap-3"
              >
                <h3 className="font-serif font-normal text-lg text-ink tracking-[-0.012em] leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-ink-mid leading-[1.65]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-deep">
        <div className="max-w-narrow mx-auto px-[5vw]">
          <span className="eyebrow">Why this matters</span>
          <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4 mb-7">
            Complex feeding needs <em>specialist input</em>.
          </h2>
          <div className="text-base text-ink-mid leading-[1.75] space-y-5">
            <p>
              Home enteral feeding is an area where many families feel under-supported once they leave hospital. NHS community dietetic services are stretched, appointments are infrequent, and when something goes wrong with a feed at 10pm on a Tuesday, there&apos;s often nobody to ask.
            </p>
            <p>
              I continue to work in the NHS community supporting complex tube-fed patients, so I&apos;m current with the latest evidence and practice. Privately, I can offer more frequent, more flexible input - and the kind of detailed troubleshooting that time-limited NHS appointments don&apos;t always allow for.
            </p>
            <p>
              Whether your child has been tube-fed since birth or has recently had a gastrostomy placed, whether you&apos;re managing tolerance issues or want to explore blended diets, I can help. This is the work I find most rewarding, and it&apos;s where I&apos;ve built the deepest experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="faq">
        <div className="max-w-narrow mx-auto px-[5vw]">
          <div className="mb-12">
            <span className="eyebrow">Common questions</span>
            <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4 mb-4">
              Things parents ask about <em>enteral feeding</em>.
            </h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <BookCta />
    </>
  );
}
