import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/explorer",
    },
    sitemap: "https://julietterk.com/sitemap.xml",
  };
}
