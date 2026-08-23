import type { MetadataRoute } from "next";

import { BLOG_POSTS, NAV_LINKS, SITE_CONFIG } from "../config/constants";

const siteLastModified = "2026-08-23";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Array.from(new Set(NAV_LINKS.map((link) => link.href)));

  return [
    ...pages.map((path) => ({
      url: new URL(path, SITE_CONFIG.url).toString(),
      lastModified: siteLastModified,
      changeFrequency:
        path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.7,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: new URL(`/blog/${post.slug}`, SITE_CONFIG.url).toString(),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
