import type { MetadataRoute } from "next";

const baseUrl = "https://cavalletta-leader.rodead.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
