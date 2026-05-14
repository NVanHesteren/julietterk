import Link from "next/link";
import type { Metadata } from "next";
import BookCta from "@/components/BookCta";
import ThumbStrip from "@/components/ThumbStrip";
import { FadeUp } from "@/components/Animate";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three areas of specialist paediatric dietetic practice - general paediatrics, gastroenterology, and home enteral feeding. Online consultations with Juliette Reese-Kari.",
  alternates: { canonical: "/services" },
};

const BUCKETS = [
  {
    num: "01",
    href: "/services/general-paediatrics",
    title: ["General ", "paediatrics", ""],
    desc: "The day-to-day stuff that brings most families through the door. Weaning, fussy eating, food allergies, growth concerns, weight management, constipation, and more.",
    items: [
      "Weaning & introducing solids",
      "Fussy eating & ARFID",
      "Cow's milk protein allergy & food allergies",
      "Faltering growth & slow weight gain",
      "Weight management",
      "Constipation, reflux & gut concerns",
      "General healthy eating",
    ],
  },
  {
    num: "02",
    href: "/services/gastroenterology",
    title: ["", "Gastroenterology", ""],
    desc: "When there's a diagnosed gut condition, the nutrition piece runs alongside the medical care. This is where my specialist NHS experience comes in.",
    items: [
      "Inflammatory bowel disease (Crohn's, UC)",
      "Coeliac disease",
      "Gastro-oesophageal reflux",
      "Food intolerances",
    ],
  },
  {
    num: "03",
    href: "/services/home-enteral-feeding",
    title: ["Home ", "enteral feeding", " support"],
    desc: "Long-term tube feeding, blended diets, complex needs. This is the area I've stayed in across the NHS, and where many private dietitians don't go.",
    items: [
      "Long-term gastrostomy & NG feeding",
      "Blended diets",
      "Tolerance issues & feed planning",
      "Neuro-disability nutrition",
    ],
  },
];

function renderTitle([pre, em, post]: string[]) {
  return <>{pre}<em>{em}</em>{post}</>;
}

export default function ServicesIndex() {
  return (
    <>
      <section className="py-20 md:py-[80px] bg-cream">
        <div className="max-w-wide mx-auto px-[5vw]">
          <FadeUp>
            <span className="eyebrow">Services</span>
            <h1 className="h-display text-[clamp(2.4rem,5vw,3.6rem)] mt-5 mb-6 max-w-[820px]">
              Three areas of practice, <em>built from NHS experience</em>.
            </h1>
            <p className="text-[17px] text-ink-mid max-w-[640px] leading-[1.65]">
              Most families come to me for one of three reasons. Each covers a range of specific concerns. If you&apos;re unsure which fits, book a consultation and we&apos;ll work it out together.
            </p>
          </FadeUp>
        </div>
      </section>

      <ThumbStrip />

      <section className="py-16 md:py-24">
        <div className="max-w-wide mx-auto px-[5vw] flex flex-col gap-6">
          {BUCKETS.map((b, idx) => (
            <FadeUp key={b.num} delay={idx * 0.1}>
              <Link
                href={b.href}
                className="group block bg-white p-8 md:p-10 rounded border border-ink/10 transition-all duration-300 hover:border-sage hover:-translate-y-0.5 no-underline"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-start">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.14em] text-clay font-medium">{b.num}</span>
                    <h2 className="font-serif font-normal text-[clamp(1.6rem,3vw,2.2rem)] text-ink tracking-[-0.014em] leading-[1.15] mt-2 mb-4">
                      {renderTitle(b.title)}
                    </h2>
                    <p className="text-base text-ink-mid leading-[1.7] mb-5">{b.desc}</p>
                    <span className="text-[11px] uppercase tracking-[0.14em] text-sage font-medium inline-flex items-center gap-2">
                      Find out more
                      <svg className="arrow w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                  <ul className="list-none p-0 m-0 md:pt-8">
                    {b.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-[14px] text-ink leading-snug py-3 pl-[22px] relative border-b border-ink/5 last:border-b-0 before:content-[''] before:absolute before:left-0 before:top-[18px] before:w-3 before:h-px before:bg-sage"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      <BookCta />
    </>
  );
}
