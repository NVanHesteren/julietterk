import BookButton from "./BookButton";

export default function ConsultationInfo({ showHeading = false }: { showHeading?: boolean }) {
  return (
    <section className="py-16 md:py-24 pb-8 md:pb-12 bg-cream">
      <div className="max-w-wide mx-auto px-[5vw]">
        {showHeading && (
          <div className="mb-14 max-w-[720px]">
            <h2 className="h-display text-[clamp(2rem,4vw,3rem)]">
              A <em>clear plan</em>,<br />built around your little one.
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <span className="eyebrow">What&apos;s involved</span>
            <h2 className="h-display text-[clamp(1.6rem,3vw,2.2rem)] mt-4 mb-7">
              How a consultation <em>works</em>.
            </h2>
            <div className="space-y-8">
              <div className="pb-8 border-b border-ink/10">
                <span className="text-[11px] uppercase tracking-[0.14em] text-clay font-medium">Initial consultation</span>
                <h3 className="font-serif font-normal text-lg text-ink mt-2 mb-3">Thorough assessment & plan</h3>
                <p className="text-sm text-ink-mid leading-[1.7]">
                  Your first appointment is an hour. It includes a full clinical and dietetic assessment, and you&apos;ll receive an agreed, written plan to take away.
                </p>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.14em] text-clay font-medium">Follow-up</span>
                <h3 className="font-serif font-normal text-lg text-ink mt-2 mb-3">Review & adjust</h3>
                <p className="text-sm text-ink-mid leading-[1.7]">
                  Follow-ups are 30 minutes. We review the plan, problem-solve anything that&apos;s come up, and adjust guidance as your child progresses.
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Fees</span>
            <h2 className="h-display text-[clamp(1.6rem,3vw,2.2rem)] mt-4 mb-7">
              Simple, <em>transparent</em> pricing.
            </h2>
            <div className="space-y-6">
              <div className="pb-5 mb-5 border-b border-ink/10 flex justify-between items-center">
                <div>
                  <h3 className="font-serif font-normal text-lg text-ink mb-1">New patient</h3>
                  <p className="text-sm text-ink-mid">60 minutes · full assessment · written plan</p>
                </div>
                <span className="font-serif font-normal text-2xl text-ink">&pound;90</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-serif font-normal text-lg text-ink mb-1">Follow-up</h3>
                  <p className="text-sm text-ink-mid">30 minutes · review & guidance</p>
                </div>
                <span className="font-serif font-normal text-2xl text-ink">&pound;60</span>
              </div>
              <p className="text-sm text-ink-mid leading-[1.7]">
                Currently self-pay only. I provide receipts with my HCPC registration details which you can submit to your insurer.
              </p>
            </div>
            <div className="mt-8">
              <BookButton>Book a consultation</BookButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
