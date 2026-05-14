"use client";

import Link from "next/link";
import { FadeUp, StaggerChildren, StaggerItem } from "./Animate";

const CATS = [
  {
    num: "01", href: "/services/general-paediatrics",
    title: ["General ", "paediatrics", ""],
    desc: "The day-to-day stuff. Weaning, fussy eating, growth, weight, food allergies. Most of what brings parents through the door.",
    items: [
      "Weaning & introducing solids",
      "Fussy eating, ARFID & autism-related feeding",
      "Cow's milk protein allergy",
      "Faltering growth & slow weight gain",
      "Constipation, reflux & gut concerns",
    ],
  },
  {
    num: "02", href: "/services/gastroenterology",
    title: ["", "Gastroenterology", ""],
    desc: "When there's a diagnosed gut condition, the nutrition piece runs alongside the medical care. This is where I bring my specialist experience.",
    items: [
      "Coeliac disease",
      "Inflammatory bowel disease (Crohn's, UC)",
      "Gastro-oesophageal reflux",
      "Food intolerances",
    ],
  },
  {
    num: "03", href: "/services/home-enteral-feeding",
    title: ["Home ", "enteral feeding", ""],
    desc: "Long-term tube feeding, blended diets, complex needs. This is the area I've stayed in across the NHS, and where many private dietitians don't go.",
    items: [
      "Long-term gastrostomy feeding",
      "Blended diets",
      "Tolerance issues & feed planning",
      "Neuro-disability nutrition",
    ],
  },
];

export default function ServiceCategories() {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="max-w-wide mx-auto px-[5vw]">
        <FadeUp className="mb-14 max-w-[720px]">
          <span className="eyebrow">What I do</span>
          <h2 className="h-display text-[clamp(2rem,4vw,3rem)] mt-4 mb-4">
            Three areas of practice, <em>built from NHS experience</em>.
          </h2>
          <p className="text-base text-ink-mid leading-[1.65] max-w-[620px]">
            Most families come to me for one of three reasons. Each covers a wide range of specific concerns. I&apos;ll guide you to what fits, and we&apos;ll build a plan from there.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CATS.map((c) => (
            <StaggerItem key={c.num}>
            <Link
              href={c.href}
              className="group bg-white p-8 pt-10 rounded border border-ink/10 flex flex-col gap-3.5 transition-all duration-300 hover:border-sage hover:-translate-y-0.5 no-underline h-full"
            >
              <span className="text-[11px] uppercase tracking-[0.14em] text-ink-light font-medium">{c.num}</span>
              <h3 className="h-display text-2xl">
                {c.title[0]}<em>{c.title[1]}</em>{c.title[2]}
              </h3>
              <p className="text-sm text-ink-mid leading-[1.65] mb-1">{c.desc}</p>
              <ul className="list-none p-0 m-0 flex-1">
                {c.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-ink-mid leading-snug py-2.5 border-b border-ink/5 last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <span className="text-[11px] uppercase tracking-[0.14em] text-sage font-medium inline-flex items-center gap-2 mt-2">
                Find out more
                <svg className="arrow w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
