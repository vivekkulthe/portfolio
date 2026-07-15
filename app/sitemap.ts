import type { MetadataRoute } from "next";
import { portfolioData } from "@/lib/siteData";

const siteUrl = "https://www.vivekkulthe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/contact", "/portfolio"];

  const staticEntries = staticPages.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));

  const portfolioEntries = portfolioData.projects.map((project) => ({
    url: new URL(`/portfolio/${project.slug}`, siteUrl).toString(),
  }));

  return [...staticEntries, ...portfolioEntries];
}