"use client";

import { useState } from "react";
import BookButton from "./BookButton";

interface BookCtaProps {
  heading?: React.ReactNode;
  body?: string;
  expanded?: boolean;
}

export default function BookCta({
  heading = <>A <em className="!text-clay">clear plan</em>,<br />built around your little one.</>,
  body = "All consultations are online, no GP referral needed. You'll receive a written plan after every appointment.",
  expanded = false,
}: BookCtaProps) {
  const [open, setOpen] = useState(expanded);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-wide mx-auto px-[5vw]">
        <div className="bg-ink text-cream rounded py-12 md:py-[88px] px-[5vw] text-center">
          <div className="max-w-narrow mx-auto">
            <span className="eyebrow !text-sage-pale before:!bg-sage-pale">Book a consultation</span>
            <h2 className="h-display !text-cream text-[clamp(2rem,4vw,3rem)] mt-4 mb-4">
              {heading}
            </h2>
            <p className="text-cream/70 max-w-[480px] mx-auto mb-8 text-base leading-[1.65]">{body}</p>
            <BookButton variant="clay">Book a consultation</BookButton>

            {!expanded && (
              <div className="mt-5">
                <button
                  onClick={() => setOpen(!open)}
                  className="text-cream/60 text-sm font-medium hover:text-cream/90 transition-colors inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
                >
                  What&apos;s involved?
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
            )}

            <div
              className={`overflow-hidden transition-all duration-300 ${
                open || expanded ? "max-h-[800px] opacity-100 mt-16" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className="max-w-wide mx-auto text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <span className="eyebrow !text-sage-pale before:!bg-sage-pale">How it works</span>
                    <div className="mt-6 space-y-6">
                      <div className="pb-6 border-b border-cream/15">
                        <span className="text-[11px] uppercase tracking-[0.14em] text-clay font-medium">Initial consultation · £90</span>
                        <h3 className="font-serif font-normal text-lg text-cream mt-2 mb-2">Thorough assessment & plan</h3>
                        <p className="text-cream/60 text-sm leading-[1.7]">
                          Your first appointment is 60 minutes. It includes a full clinical and dietetic assessment, and you&apos;ll receive an agreed, written plan to take away.
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.14em] text-clay font-medium">Follow-up · £60</span>
                        <h3 className="font-serif font-normal text-lg text-cream mt-2 mb-2">Review & adjust</h3>
                        <p className="text-cream/60 text-sm leading-[1.7]">
                          Follow-ups are 30 minutes. We review the plan, problem-solve anything that&apos;s come up, and adjust guidance as your child progresses.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="eyebrow !text-sage-pale before:!bg-sage-pale">What&apos;s included</span>
                    <div className="mt-6 space-y-4">
                      {[
                        "Full dietary and clinical history",
                        "Growth chart review and interpretation",
                        "Assessment of current intake and feeding patterns",
                        "Identification of any nutritional gaps or concerns",
                        "A clear, written plan with specific recommendations",
                        "Guidance on next steps and when to come back",
                      ].map((item) => (
                        <div key={item} className="text-sm text-cream/70 leading-[1.6] pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-3 before:h-px before:bg-clay">
                          {item}
                        </div>
                      ))}
                      <p className="text-cream/50 text-xs leading-[1.6] mt-6 pt-6 border-t border-cream/15">
                        Currently self-pay only. I provide receipts with my HCPC registration details which you can submit to your insurer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
