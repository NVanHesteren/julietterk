"use client";

import Link from "next/link";
import BookButton from "./BookButton";
import { FadeUp, FadeIn } from "./Animate";

const CREDS = [
  "HCPC registered (DT29509)",
  "BDA full member",
  "8+ years NHS",
  "Paediatric specialist",
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-cream-deep" id="about">
      <div className="max-w-wide mx-auto px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-center">
          <FadeIn>
            <div className="aspect-[4/5] bg-sage-pale rounded overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/juliette.jpg" alt="Juliette Reese-Kari, paediatric dietitian" className="w-full h-full object-cover" />
            </div>
          </FadeIn>

          <div>
            <FadeUp>
              <span className="eyebrow">About</span>
              <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4 mb-7">
                Hi, I&apos;m <em>Juliette</em>.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-base text-ink-mid leading-[1.7] mb-5">
                I&apos;m a registered paediatric dietitian based in London, passionate about helping children eat and grow to their best potential. I&apos;ve spent my whole dietetic career in paediatrics - eight years across NHS acute and community settings.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="flex flex-wrap gap-2 my-7 mb-8">
                {CREDS.map((c) => (
                  <span key={c} className="cred-chip">{c}</span>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex gap-5 items-center flex-wrap">
                <Link href="/about" className="btn btn-primary" style={{ background: "#6F8666", color: "#fff" }}>
                  Read more about me
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <BookButton variant="ghost">Book a consultation</BookButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
