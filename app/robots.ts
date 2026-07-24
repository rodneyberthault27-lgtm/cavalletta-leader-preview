import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://cavalletta-leader.rodead.chatgpt.site/sitemap.xml",
    host: "https://cavalletta-leader.rodead.chatgpt.site",
  };
}
