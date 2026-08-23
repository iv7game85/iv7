import type { Metadata } from "next";
import { SITE_URL } from "./constants";

type Input = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image,
}: Input): Metadata {
  const url = `${SITE_URL}${path}`.replace(/([^:]?)\/\/+/g, "$1/");

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "iv7 Games",
      type: "website",
      locale: "en_IN",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
    alternates: {
      canonical: url,
    },
  } as Metadata;
}
