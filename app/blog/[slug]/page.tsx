import type { Metadata } from "next";
import { BLOG_POSTS, SITE_CONFIG } from "../../../config/constants";
import { buildMetadata } from "../../../config/seo";
import { breadcrumbJsonLd, JsonLd } from "../../components/structured-data";
import BlogDetailController from "./blogDetail.controller";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return buildMetadata({
    title: `${post.title} - IV7 Game Official Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: new Date(post.date).toISOString(),
    authors: [post.author],
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
  const post = BLOG_POSTS.find((item) => item.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": new URL(`/blog/${post.slug}`, SITE_CONFIG.url).toString(),
    },
    image: new URL(SITE_CONFIG.ogImage, SITE_CONFIG.url).toString(),
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: new URL(SITE_CONFIG.ogImage, SITE_CONFIG.url).toString(),
      },
    },
  };

  return (
    <>
      <JsonLd data={articleStructuredData} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <BlogDetailController params={resolvedParams} />
    </>
  );
}
