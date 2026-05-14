import Link from "next/link";
import { AGE } from "@/lib/ages";
import { ServicePage as ServicePageData, pages } from "@/content/pages";
import BookButton from "./BookButton";
import FaqAccordion from "./FaqAccordion";
import FaqSchema from "./FaqSchema";
import BookCta from "./BookCta";
import ThumbStrip from "./ThumbStrip";

function slugFromHeading(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-").substring(0, 40);
}

function renderTitle([pre, em, post]: [string, string, string]) {
  return (
    <>
      {pre}
      <em>{em}</em>
      {post}
    </>
  );
}

function renderSectionHeading([full, em, post]: [string, string, string]) {
  const i = full.indexOf(em);
  if (i === -1) return <>{full}</>;
  const before = full.slice(0, i);
  const after = full.slice(i + em.length);
  // If full already contains the trailing text, don't append post
  const suffix = after.trim().length > 0 ? "" : post;
  return (
    <>
      {before}
      <em>{em}</em>
      {after}
      {suffix}
    </>
  );
}

interface ServicePageTemplateProps {
  data: ServicePageData;
  slug: string;
}

export default function ServicePageTemplate({ data, slug }: ServicePageTemplateProps) {
  const ageInfo = AGE[data.age];
  const sectionIds = data.sections.map((s) => slugFromHeading(s.h[0]));

  return (
    <>
      <FaqSchema faqs={data.faqs} />
      {/* Breadcrumb */}
      <div className="max-w-wide mx-auto px-[5vw]">
        <div className="pt-8 text-xs uppercase tracking-[0.14em] text-ink-light font-medium">
          <Link href="/" className="text-ink-mid hover:text-sage transition-colors">Home</Link>
          <span className="mx-2.5">/</span>
          <Link href="/services" className="text-ink-mid hover:text-sage transition-colors">Services</Link>
          <span className="mx-2.5">/</span>
          {data.title[1]} · {ageInfo.short}
        </div>
      </div>

      {/* Hero */}
      <section className="pt-10 pb-14">
        <div className="max-w-wide mx-auto px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-14 items-center">
            <div>
              <span className="eyebrow">{ageInfo.label}</span>
              <h1 className="h-display text-[clamp(2.2rem,5vw,3.6rem)] mt-4 mb-5">
                {renderTitle(data.title)}
              </h1>
              <p className="font-serif font-light italic text-[19px] text-ink-mid leading-[1.5] max-w-[540px] mb-8">
                {data.lead}
              </p>
              <div className="flex gap-5 items-center flex-wrap">
                <BookButton>Book a consultation</BookButton>
                <Link href="/about" className="btn btn-text">
                  Read more about me
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3.5 p-6 bg-cream rounded border border-ink/10">
              {[
                ["Best for", ageInfo.best],
                ["Format", "Online · 60 minutes"],
                ["Includes", "Written plan"],
                ["Fee", "£90 new patient"],
              ].map(([label, value], i, arr) => (
                <div
                  key={label}
                  className={`flex justify-between items-center text-[13px] ${
                    i < arr.length - 1 ? "pb-3 border-b border-ink/10" : ""
                  }`}
                >
                  <span className="text-ink-light uppercase tracking-[0.12em] text-[10px] font-medium">{label}</span>
                  <span className="font-serif font-normal text-sm text-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ThumbStrip />

      {/* Body */}
      <section className="pt-14 pb-24">
        <div className="max-w-mid mx-auto px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-14">
            <aside className="md:sticky md:top-[100px] md:self-start">
              <div className="text-[10px] uppercase tracking-[0.16em] text-ink-light font-medium mb-4">
                On this page
              </div>
              <ul className="list-none flex flex-col gap-2.5">
                {data.sections.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#${sectionIds[i]}`}
                      className="text-[13px] text-ink-mid no-underline transition-colors block pl-3.5 border-l border-ink/15 leading-snug hover:text-sage hover:border-sage"
                    >
                      {s.h[0]}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#svc-faq"
                    className="text-[13px] text-ink-mid no-underline transition-colors block pl-3.5 border-l border-ink/15 leading-snug hover:text-sage hover:border-sage"
                  >
                    Common questions
                  </a>
                </li>
              </ul>
            </aside>

            <div className="svc-content">
              {data.sections.map((s, i) => (
                <div key={i} className={i > 0 ? "mt-16" : ""}>
                  <h2 id={sectionIds[i]} className={i > 0 ? "!mt-0" : ""}>{renderSectionHeading(s.h)}</h2>
                  <div dangerouslySetInnerHTML={{ __html: s.b }} />
                </div>
              ))}
              <h2 id="svc-faq"><em>Common questions</em></h2>
              <div className="mt-4">
                <FaqAccordion items={data.faqs} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-sage-pale">
        <div className="max-w-wide mx-auto px-[5vw]">
          <div className="text-center mb-10 max-w-[720px] mx-auto">
            <span className="eyebrow justify-center">Related</span>
            <h2 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-4">
              Other things I help with.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.related.map((relSlug) => {
              const rel = pages[relSlug];
              if (!rel) return null;
              return (
                <Link
                  key={relSlug}
                  href={`/services/${relSlug}`}
                  className="group bg-cream p-6 rounded border border-ink/10 flex flex-col gap-2.5 transition-all duration-300 hover:border-sage hover:-translate-y-0.5 no-underline"
                >
                  <span className="text-[10px] uppercase tracking-[0.14em] text-clay font-medium">
                    {AGE[rel.age].label}
                  </span>
                  <span className="font-serif font-normal text-lg text-ink tracking-[-0.012em] leading-tight">
                    {renderTitle(rel.title)}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-sage font-medium inline-flex items-center gap-2 mt-1">
                    Read more
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn btn-primary" style={{ background: "#6F8666", color: "#fff" }}>
              See all services
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <BookCta />
    </>
  );
}
