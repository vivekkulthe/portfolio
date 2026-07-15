import type { Metadata } from "next";

const siteUrl = new URL("https://www.vivekkulthe.com");
const defaultOgImage = "/images/og-vivek-kulthe.jpg";

type PageSEOInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
};

function createMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  image = defaultOgImage,
}: PageSEOInput): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    authors: [
      {
        name: "Vivek Kulthe",
        url: siteUrl.toString(),
      },
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type,
      siteName: "Vivek Kulthe",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} | Vivek Kulthe`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const seoData = {
  home: createMetadata({
    title: "Vivek Kulthe | Head of Data Engineering & AI Executive",
    description:
      "Data engineering and AI executive leading cloud data platforms, analytics organizations, decision intelligence, and enterprise transformation.",
    path: "/",
    keywords: [
      "Vivek Kulthe",
      "Head of Data Engineering",
      "Data Engineering",
      "Analytics",
      "Artificial Intelligence",
      "Executive Leadership",
      "Cloud Data Platforms",
      "Decision Intelligence",
      "Enterprise Data Platforms",
    ],
  }),

  contact: createMetadata({
    title: "Contact Vivek Kulthe | Data Engineering Executive",
    description:
      "Contact Vivek Kulthe for data engineering leadership, AI strategy, advisory, speaking, and enterprise data platform collaboration.",
    path: "/contact",
    keywords: [
      "Contact Vivek Kulthe",
      "Data Engineering Leadership",
      "AI Strategy",
      "Executive Advisory",
    ],
  }),

  portfolio: createMetadata({
    title: "Data Engineering & AI Case Studies | Vivek Kulthe",
    description:
      "Explore data engineering, analytics and AI case studies—from cloud data platforms to decision intelligence and organizational transformation.",
    path: "/portfolio",
    keywords: [
      "Data Engineering Case Studies",
      "AI Case Studies",
      "Cloud Data Platforms",
      "Analytics Leadership",
    ],
  }),
};

export function getPortfolioProjectMetadata(
  slug: string,
  title: string,
  description: string,
  image = defaultOgImage,
): Metadata {
  return createMetadata({
    title: `${title} | Vivek Kulthe Case Study`,
    description,
    path: `/portfolio/${slug}`,
    image,
    type: "article",
    keywords: [
      title,
      "Data Engineering",
      "Analytics",
      "Artificial Intelligence",
      "Enterprise Data Platforms",
      "Executive Leadership",
    ],
  });
}