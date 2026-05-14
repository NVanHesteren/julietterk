"use client";

import { IMG } from "@/lib/images";
import BookButton from "./BookButton";
import Link from "next/link";
import { FadeUp, FadeIn } from "./Animate";

export default function HomeHero() {
  return (
    <section className="py-20 md:py-[80px] bg-cream">
      <div className="max-w-wide mx-auto px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <FadeUp>
              <span className="eyebrow">Paediatric Dietitian · HCPC Registered</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="h-display text-[clamp(2.4rem,5.4vw,4.4rem)] mt-5 mb-6">
                Help your little one <em>eat well</em>, and grow well.
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[17px] text-ink-mid max-w-[480px] leading-[1.65] mb-9">
                Online consultations with Juliette Reese-Kari, a registered paediatric dietitian with 8+ years specialist NHS experience. Evidence-based advice for infants, children and teens.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex gap-5 items-center flex-wrap">
                <BookButton>Book a consultation</BookButton>
                <Link href="/services" className="btn btn-text">
                  See what I help with
                </Link>
              </div>
            </FadeUp>
          </div>
          <FadeIn delay={0.2}>
            <div className="aspect-[4/5] rounded overflow-hidden relative bg-sage-pale">
              <div className="absolute top-6 left-6 bg-cream px-4 py-2.5 rounded-full text-[11px] uppercase tracking-[0.14em] text-sage-deep font-medium z-10 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-clay" />
                </span>
                Online · UK-wide
              </div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="/hero-poster.jpg"
              >
                <source src="https://videos.pexels.com/video-files/5135466/5135466-hd_1280_720_25fps.mp4" type="video/mp4" />
              </video>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
