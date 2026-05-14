import type { Metadata } from "next";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import BookCta from "@/components/BookCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Juliette Reese-Kari - a registered paediatric dietitian with 6+ years NHS experience across acute and community settings.",
  alternates: { canonical: "/about" },
};

const QUALIFICATIONS = [
  "BSc (Hons) Dietetics & Nutrition - London Metropolitan University",
  "BA (Hons) English Literature & History of Art - University of Kent, Canterbury",
];

const REGISTRATIONS = [
  "Health Care Professions Council (HCPC) registered - DT29509",
  "Full member of the British Dietetic Association (BDA)",
  "Member of the BDA Paediatric Group (including autism sub-group)",
  "Member of the BDA Freelance Dietitians Group",
  "Member of the BDA Maternal & Fertility Nutrition Specialist Group",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-[80px] bg-cream">
        <div className="max-w-wide mx-auto px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-center">
            <div className="aspect-[4/5] bg-sage-pale rounded overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/juliette.png"
                alt="Juliette Reese-Kari, paediatric dietitian"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="eyebrow">About me</span>
              <h1 className="h-display text-[clamp(2.2rem,5vw,3.6rem)] mt-4 mb-6">
                Hi, I&apos;m <em>Juliette</em>.
              </h1>
              <p className="text-[17px] text-ink-mid max-w-[540px] leading-[1.7] mb-5">
                I&apos;m a highly skilled registered paediatric dietitian based in London. I&apos;m incredibly passionate about infant, child and adolescent nutrition. I&apos;ve been fortunate to work my whole dietetic career in paediatrics, gaining vast experience across a wide range of conditions.
              </p>
              <p className="text-[17px] text-ink-mid max-w-[540px] leading-[1.7] mb-8">
                There are so many factors that influence the way we eat and I&apos;m here to provide clear, evidence-based advice to help your little one eat well and grow to their best potential.
              </p>
              <BookButton>Book a consultation</BookButton>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-[5vw]">
          <span className="eyebrow">My journey so far</span>
          <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4 mb-7">
            Six years in <em>paediatric dietetics</em>.
          </h2>
          <div className="text-base text-ink-mid leading-[1.75] space-y-5">
            <p>
              I&apos;ve worked in paediatric dietetics within the NHS for the last six years, in both acute and community settings. I have vast experience managing a range of complex conditions.
            </p>
            <p>
              I continue to work in the community supporting complex tube-fed patients and also work privately throughout the week, offering virtual consultations to families across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications & Registrations */}
      <section className="py-16 md:py-24 bg-cream-deep">
        <div className="max-w-narrow mx-auto px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <span className="eyebrow">Qualifications</span>
              <h2 className="h-display text-[clamp(1.6rem,3vw,2.2rem)] mt-4 mb-7">
                <em>Education</em>
              </h2>
              <ul className="list-none p-0 m-0 space-y-4">
                {QUALIFICATIONS.map((q) => (
                  <li key={q} className="text-base text-ink leading-[1.6] pl-7 relative before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-3.5 before:h-px before:bg-sage">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Professional registrations</span>
              <h2 className="h-display text-[clamp(1.6rem,3vw,2.2rem)] mt-4 mb-7">
                <em>Memberships</em>
              </h2>
              <ul className="list-none p-0 m-0 space-y-4">
                {REGISTRATIONS.map((r) => (
                  <li key={r} className="text-base text-ink leading-[1.6] pl-7 relative before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-3.5 before:h-px before:bg-sage">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is a dietitian */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-[5vw]">
          <span className="eyebrow">Good to know</span>
          <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4 mb-7">
            What is a <em>dietitian</em>?
          </h2>
          <div className="text-base text-ink-mid leading-[1.75] space-y-5 mb-12">
            <p>
              A dietitian is a regulated healthcare professional who assesses, diagnoses and treats dietary and nutritional problems. In the UK, the title &ldquo;dietitian&rdquo; is protected by law - you must be registered with the Health and Care Professions Council (HCPC) to use it.
            </p>
            <p>
              Dietitians complete a degree accredited by the HCPC, and are trained to translate scientific evidence into practical dietary advice. We work across the NHS, in private practice, and in research.
            </p>
          </div>

          <h3 className="font-serif font-normal text-xl text-ink tracking-[-0.012em] mb-5">
            Dietitian vs <em className="italic text-sage">nutritionist</em> - what&apos;s the difference?
          </h3>
          <div className="text-base text-ink-mid leading-[1.75] space-y-5">
            <p>
              The key difference is regulation. &ldquo;Dietitian&rdquo; is a legally protected title - only someone registered with the HCPC can use it. &ldquo;Nutritionist&rdquo; is not protected, which means anyone can call themselves a nutritionist regardless of training.
            </p>
            <p>
              Dietitians are qualified to provide medical nutrition therapy and can work with complex clinical conditions. Some nutritionists hold excellent qualifications too, but the title alone doesn&apos;t guarantee a specific standard of training. When it comes to children with medical or clinical needs, a registered dietitian is the right choice.
            </p>
          </div>
        </div>
      </section>

      <BookCta />
    </>
  );
}
