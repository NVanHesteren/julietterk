import type { Metadata } from "next";
import BookButton from "@/components/BookButton";
import BookCta from "@/components/BookCta";
import FaqAccordion from "@/components/FaqAccordion";
import ThumbStrip from "@/components/ThumbStrip";

export const metadata: Metadata = {
  title: "Gastroenterology",
  description:
    "Specialist paediatric dietetic support for inflammatory bowel disease, coeliac disease, reflux, and food intolerances. Online consultations with Juliette Reese-Kari.",
  alternates: { canonical: "/services/gastroenterology" },
};

const SPECIALISMS = [
  {
    title: "Inflammatory bowel disease",
    desc: "Crohn's disease and ulcerative colitis in children and teens. Nutritional support alongside medical treatment - managing flares, optimising growth, exclusive enteral nutrition, and long-term dietary planning.",
  },
  {
    title: "Coeliac disease",
    desc: "Diagnosis support, establishing a strict gluten-free diet that actually works for a child, managing cross-contamination, school meals, and making sure nutritional adequacy isn't lost along the way.",
  },
  {
    title: "Gastro-oesophageal reflux",
    desc: "Dietary and positioning strategies for reflux in infants and children. Distinguishing reflux from cow's milk protein allergy, which overlap more often than people realise.",
  },
  {
    title: "Food intolerances",
    desc: "Structured elimination and reintroduction to identify genuine intolerances - lactose, FODMAPs, and others. Done properly, not based on unvalidated tests or guesswork.",
  },
];

const FAQS = [
  { q: "What's the difference between a dietitian and a gastroenterologist?", a: "A gastroenterologist is a medical doctor who diagnoses and treats gut conditions. A dietitian manages the nutrition side - what to eat, how to maintain growth, how to use diet as part of treatment. We work alongside each other. I don't diagnose conditions, but I manage the dietary piece once a diagnosis is in place." },
  { q: "Can diet help manage IBD in children?", a: "Diet plays a significant role. Exclusive enteral nutrition is a first-line treatment for Crohn's in children. Beyond that, maintaining adequate nutrition during flares, supporting growth, and managing symptoms through food choices are all part of ongoing care." },
  { q: "My child has just been diagnosed with coeliac disease - where do I start?", a: "It's overwhelming at first. A consultation covers what gluten-free actually means in practice, how to read labels, what's safe and what isn't, school meals, social situations, and making sure your child's diet stays nutritionally complete. It gets easier quickly." },
  { q: "How do I know if my child has a food intolerance?", a: "Proper investigation means a structured elimination followed by a planned reintroduction. That gives a clear answer. I'd always recommend ruling out coeliac disease and allergy first, as those need different management." },
  { q: "Is reflux in babies always a milk allergy?", a: "No, but there's significant overlap. Many babies with reflux symptoms improve on a cow's milk protein-free trial, which tells us the allergy was driving or contributing to the reflux. A proper assessment helps distinguish the two." },
  { q: "Do you work with my child's hospital team?", a: "If you'd like me to, absolutely. I can write to your child's consultant or GP with my assessment and recommendations, and I'm happy to coordinate with an existing care plan." },
];

export default function Gastroenterology() {
  return (
    <>
      <section className="py-20 md:py-[80px] bg-cream">
        <div className="max-w-wide mx-auto px-[5vw]">
          <span className="eyebrow">Services · 02</span>
          <h1 className="h-display text-[clamp(2.4rem,5vw,3.6rem)] mt-5 mb-6 max-w-[820px]">
            Paediatric <em>gastroenterology</em> nutrition.
          </h1>
          <p className="text-[17px] text-ink-mid max-w-[640px] leading-[1.65] mb-8">
            When there&apos;s a diagnosed gut condition, the nutrition piece runs alongside the medical care. Inflammatory bowel disease, coeliac disease, reflux, food intolerances - this is where my specialist NHS experience across acute and community settings comes in.
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
              Conditions I support with <em>specialist nutrition</em>.
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
          <span className="eyebrow">Why it matters</span>
          <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4 mb-7">
            Gut conditions in children need <em>specialist dietary input</em>.
          </h2>
          <div className="text-base text-ink-mid leading-[1.75] space-y-5">
            <p>
              Children with gastroenterological conditions have specific nutritional needs that change with their condition, their treatment, and their growth. Generic dietary advice doesn&apos;t cut it. A child in a Crohn&apos;s flare needs different support from one in remission. A newly diagnosed coeliac needs different help from one who&apos;s been gluten-free for two years.
            </p>
            <p>
              I&apos;ve managed these conditions across NHS acute and community settings for six years. I know what the evidence says, I know what works practically, and I know how to make dietary management fit into a child&apos;s actual life - school, parties, sleepovers, and all.
            </p>
            <p>
              All consultations are online. The initial appointment is an hour and includes a full assessment and a written plan. I can coordinate with your child&apos;s existing hospital or GP team if that&apos;s helpful.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="faq">
        <div className="max-w-narrow mx-auto px-[5vw]">
          <div className="mb-12">
            <span className="eyebrow">Common questions</span>
            <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4 mb-4">
              Things parents ask about <em>gastroenterology</em> nutrition.
            </h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <BookCta />
    </>
  );
}
