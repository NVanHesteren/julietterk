import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pages, pageSlugs } from "@/content/pages";
import { AGE } from "@/lib/ages";
import ServicePageTemplate from "@/components/ServicePage";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return pageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};

  const ageInfo = AGE[page.age];
  const fullTitle = page.title.join("").trim();
  const title = `${fullTitle} (${ageInfo.short})`;

  return {
    title,
    description: page.lead,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description: page.lead,
      images: [{ url: page.img, width: 1200, height: 630, alt: fullTitle }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return <ServicePageTemplate data={page} slug={slug} />;
}
