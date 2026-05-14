import type { Metadata } from "next";
import BookButton from "@/components/BookButton";
import BookCta from "@/components/BookCta";
import FaqAccordion from "@/components/FaqAccordion";
import FaqSchema from "@/components/FaqSchema";
import ThumbStrip from "@/components/ThumbStrip";

export const metadata: Metadata = {
  title: "General Paediatrics",
  description:
    "Weaning, fussy eating, food allergies, weight management, constipation, reflux, and more. Online paediatric dietetic consultations with Juliette Reese-Kari.",
  alternates: { canonical: "/services/general-paediatrics" },
};

const SPECIALISMS = [
  {
    title: "Weaning & introducing solids",
    desc: "When to start, what to offer, how to handle allergens, and what to do when things aren't going to plan. I help with baby-led weaning, traditional weaning, and everything in between.",
  },
  {
    title: "Fussy eating & food refusal",
    desc: "Whether it's a toddler living on three foods or a child who gags at anything new. I look at what's driving the behaviour and build a realistic plan to expand the diet without making mealtimes worse.",
  },
  {
    title: "ARFID & autism-related feeding",
    desc: "Avoidant restrictive food intake disorder and sensory-driven eating differences need a different approach. I work with families to protect safe foods while gradually and gently broadening what's tolerated.",
  },
  {
    title: "Cow's milk protein allergy & food allergies",
    desc: "From suspected CMPA in breastfed babies through to managing multiple allergies in older children. Proper assessment, elimination diets done right, and reintroduction planning - the milk ladder and beyond.",
  },
  {
    title: "Faltering growth & slow weight gain",
    desc: "When the growth chart isn't doing what it should. I assess intake, feeding patterns, and what might be going on underneath, then build a plan that addresses the cause rather than just adding calories.",
  },
  {
    title: "Weight management",
    desc: "Sensitive, evidence-based support for children who are above a healthy weight. No restrictive diets, no calorie counting. Practical changes that work for the whole family.",
  },
  {
    title: "Iron deficiency & nutritional gaps",
    desc: "Identifying where the diet might be falling short, whether that's iron, calcium, vitamin D, or overall energy. Targeted advice that fits real life.",
  },
  {
    title: "Constipation, reflux & gut concerns",
    desc: "Dietary strategies for common gut issues - constipation, reflux, diarrhoea, IBS-type symptoms. Often the first thing to address before anything else.",
  },
  {
    title: "General healthy eating",
    desc: "Sometimes families just want a sense-check. Is my child eating enough? Too much? The right things? A balanced diet assessment can give you clarity and confidence.",
  },
];

const FAQS = [
  { q: "What age children do you see for general paediatrics?", a: "Newborns through to 18. The approach differs by age - what works for a 6-month-old starting solids is very different from supporting a 14-year-old with their diet. I'm comfortable across the full range." },
  { q: "My child is a fussy eater - is that something you help with?", a: "Absolutely, it's one of the most common reasons families come to me. I look at what's driving the fussiness, whether there's anything underlying (sensory issues, anxiety, a medical cause), and build a practical plan. No pressure tactics, no forcing." },
  { q: "Do I need a GP referral?", a: "No. You can book directly. If I think your child needs investigation or onward referral during our consultation, I'll let you know and can write to your GP." },
  { q: "How do I know if my baby has a food allergy?", a: "A pattern matters more than any single symptom. I look at timing, history, response to dietary changes, and plan a proper assessment. For suspected CMPA, that usually means a structured elimination and reintroduction - not guesswork." },
  { q: "Can you help with weight concerns without putting my child on a diet?", a: "That's exactly my approach. Restrictive diets aren't appropriate for growing children. I focus on practical, sustainable changes to eating patterns and food choices that the whole family can get behind." },
  { q: "What happens in the first consultation?", a: "A full clinical and dietetic assessment - we go through your child's history, current diet, growth, and what's brought you here. You leave with a clear, written plan. It's an hour, online, and usually covers a lot of ground." },
];

export default function GeneralPaediatrics() {
  return (
    <>
      <FaqSchema faqs={FAQS} />
      <section className="py-20 md:py-[80px] bg-cream">
        <div className="max-w-wide mx-auto px-[5vw]">
          <span className="eyebrow">Services</span>
          <h1 className="h-display text-[clamp(2.4rem,5vw,3.6rem)] mt-5 mb-6 max-w-[820px]">
            General <em>paediatrics</em>.
          </h1>
          <p className="text-[17px] text-ink-mid max-w-[640px] leading-[1.65] mb-8">
            The day-to-day stuff that brings most families through the door. From first foods through to teenage nutrition, I cover a wide range of common paediatric concerns - always grounded in evidence, always practical.
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
              Specific areas within <em>general paediatrics</em>.
            </h2>
            <p className="text-base text-ink-mid leading-[1.7]">
              Each of these is something I see regularly in clinic. Some families come with one clear concern, others have several overlapping issues. A consultation covers whatever&apos;s relevant to your child.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <div className="max-w-wide mx-auto px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <span className="eyebrow">My approach</span>
              <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4 mb-6">
                How I <em>work</em>.
              </h2>
              <p className="text-base text-ink-mid leading-[1.7] mb-5">
                I don&apos;t do one-size-fits-all meal plans. Every child is different, every family has different routines, preferences, and constraints. My job is to understand your specific situation and give you advice that actually works in your kitchen, with your child.
              </p>
              <p className="text-base text-ink-mid leading-[1.7] mb-5">
                Everything I recommend is evidence-based. I stay current with the research, I draw on eight years of NHS experience across a wide range of paediatric conditions, and I give you the honest picture - including when something isn&apos;t within my scope and you need a different professional.
              </p>
              <p className="text-base text-ink-mid leading-[1.7]">
                All consultations are online. The initial appointment is an hour and includes a full assessment and a written plan. Follow-ups are 30 minutes.
              </p>
            </div>
            <div className="bg-cream p-8 rounded border border-ink/10">
              <h3 className="font-serif font-normal text-xl text-ink mb-6">What a consultation covers</h3>
              <ul className="list-none p-0 m-0 space-y-4">
                {[
                  "Full dietary and clinical history",
                  "Growth chart review and interpretation",
                  "Assessment of current intake and feeding patterns",
                  "Identification of any nutritional gaps or concerns",
                  "A clear, written plan with specific recommendations",
                  "Guidance on next steps - and when to come back",
                ].map((item) => (
                  <li key={item} className="text-sm text-ink leading-[1.6] pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-3 before:h-px before:bg-sage">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="faq">
        <div className="max-w-narrow mx-auto px-[5vw]">
          <div className="mb-12">
            <span className="eyebrow">Common questions</span>
            <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4 mb-4">
              Things parents ask about <em>general paediatrics</em>.
            </h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <BookCta />
    </>
  );
}
