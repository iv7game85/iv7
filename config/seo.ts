import type { Metadata } from "next";
import { SITE_CONFIG, SITE_URL } from "./constants";

type Input = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image,
  type = "website",
  publishedTime,
  authors,
}: Input): Metadata {
  const url = `${SITE_URL}${path}`.replace(/([^:]?)\/\/+/g, "$1/");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: keywords.length > 0 ? keywords : [...SITE_CONFIG.keywords],
    authors: authors?.map((name) => ({ name })),
    creator: SITE_CONFIG.publisher,
    publisher: SITE_CONFIG.publisher,
    applicationName: SITE_CONFIG.name,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      type,
      locale: SITE_CONFIG.language.replace("-", "_"),
      images: [{ url: image || SITE_CONFIG.ogImage }],
      ...(type === "article" && publishedTime
        ? { publishedTime, authors }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || SITE_CONFIG.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  } as Metadata;
}
