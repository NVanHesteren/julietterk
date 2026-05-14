import Link from "next/link";
import { pages, pageSlugs } from "@/content/pages";
import { AGE } from "@/lib/ages";

export default function Explorer() {
  const infant = pageSlugs.filter((s) => s.startsWith("infant-"));
  const child = pageSlugs.filter((s) => s.startsWith("child-"));
  const teen = pageSlugs.filter((s) => s.startsWith("teen-"));

  const groups = [
    { label: "Infant", slugs: infant },
    { label: "Child", slugs: child },
    { label: "Teen", slugs: teen },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-wide mx-auto px-[5vw]">
        <h1 className="h-display text-[clamp(2rem,4vw,3rem)] mb-2">
          SERP Page Explorer
        </h1>
        <p className="text-sm text-ink-mid mb-10">{pageSlugs.length} pages total. This page is not linked from the main site.</p>

        {groups.map((g) => (
          <div key={g.label} className="mb-12">
            <h2 className="text-[11px] uppercase tracking-[0.16em] text-ink-light font-medium mb-4">
              {g.label} ({g.slugs.length})
            </h2>
            <div className="flex flex-col gap-2">
              {g.slugs.map((slug) => {
                const p = pages[slug];
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="flex items-baseline gap-4 py-3 px-4 bg-white rounded border border-ink/10 no-underline hover:border-sage transition-colors group"
                  >
                    <span className="font-serif font-normal text-base text-ink group-hover:text-sage transition-colors">
                      {p.title[0]}{p.title[1]}{p.title[2]}
                    </span>
                    <span className="text-xs text-ink-light">{AGE[p.age].label}</span>
                    <span className="text-xs text-ink-light ml-auto font-mono">/services/{slug}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
