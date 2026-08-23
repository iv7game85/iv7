import type { Metadata } from "next";
import { BLOG_POSTS } from "../../../config/constants";
import { buildMetadata } from "../../../config/seo";
import BlogDetailController from "./blogDetail.controller";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  return buildMetadata({
    title: `${post.title} – IV7 Game Official Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [
      post.category,
      "IV7 Game blog",
      "IV7 guide",
      "IV7 tips",
      "IV7 real cash APK",
    ],
  });
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <BlogDetailController params={resolvedParams} />;
}
