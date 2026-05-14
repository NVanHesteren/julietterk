import HomeHero from "@/components/HomeHero";
import Ticker from "@/components/Ticker";
import ServiceCategories from "@/components/ServiceCategories";
import AboutSection from "@/components/AboutSection";
import BookCta from "@/components/BookCta";
import FaqAccordion from "@/components/FaqAccordion";

const HOME_FAQS = [
  { q: "How do I book an appointment?", a: "All online. Pick a time, fill in a short pre-consult form so I know what we're working with, and you'll get a video link emailed to you. No GP referral needed.", showBook: true },
  { q: "How much will my consultation cost?", a: "New patient is £90, an hour. Follow-up is £60, 30 minutes. Both come with a written plan and notes you can keep." },
  { q: "What age children do you see?", a: "Newborns through to 18. Infants, children, adolescents. I'm comfortable supporting teens who are transitioning toward adult dietetic services too." },
  { q: "Do you take insurance patients?", a: "Currently self-pay only. I provide receipts with my HCPC registration details which you can submit to your insurer. Whether they reimburse depends on your policy." },
  { q: "Does my child need to be there?", a: "For under-fives, usually no. Honestly, parents speak more openly without a wriggly toddler on the call, and we cover more ground. For older kids and teens it often helps for them to join part of the session." },
  { q: "What do I need to bring?", a: "The red book or any growth charts you've got. A rough idea of what your child has been eating over the last few days. Any letters or test results from GP or hospital. Don't worry about gathering anything perfect, we'll work with what you have." },
  { q: "What if I need to cancel or reschedule?", a: "You can reschedule yourself via the booking email up to 24 hours before. Cancellations inside 24 hours are charged at 50%." },
];

export default function Home() {
  return (
    <>
      <HomeHero />
      <Ticker />
      <ServiceCategories />
      <AboutSection />
      <BookCta expanded />
      <section className="py-16 md:py-24 bg-cream-deep" id="faq">
        <div className="max-w-narrow mx-auto px-[5vw]">
          <div className="mb-14 max-w-[720px]">
            <span className="eyebrow">Common questions</span>
            <h2 className="h-display text-[clamp(2rem,4vw,3rem)] mt-4 mb-4">
              Things parents ask <em>before booking</em>.
            </h2>
          </div>
          <FaqAccordion items={HOME_FAQS} />
        </div>
      </section>
    </>
  );
}
