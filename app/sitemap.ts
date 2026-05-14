import { MetadataRoute } from "next";
import { pageSlugs } from "@/content/pages";

const BASE = "https://julietterk.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,         lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/general-paediatrics`,    lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/gastroenterology`,        lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/home-enteral-feeding`,    lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];
  const serviceRoutes: MetadataRoute.Sitemap = pageSlugs.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticRoutes, ...serviceRoutes];
}
