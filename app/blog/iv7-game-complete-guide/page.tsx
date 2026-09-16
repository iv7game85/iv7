import type { Metadata } from "next";
import { getArticleBySlug } from "../../../config/articles";
import { breadcrumbJsonLd, JsonLd } from "../../components/structured-data";
import GuidePage from "../../components/guide-page";

const loadedArticle = getArticleBySlug("iv7-game-complete-guide");

if (!loadedArticle) {
  throw new Error("The IV7 complete guide article is missing.");
}

const article = loadedArticle;

export const metadata: Metadata = {
  title: { absolute: article.metaTitle },
  description: article.metaDescription,
  alternates: {
    canonical: article.canonicalUrl,
  },
  openGraph: {
    title: article.metaTitle,
    description: article.metaDescription,
    url: article.canonicalUrl,
    type: "article",
    publishedTime: article.publishDate,
  },
  twitter: {
    card: "summary_large_image",
    title: article.metaTitle,
    description: article.metaDescription,
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: article.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function IV7GameCompleteGuidePage() {
  return (
    <>
      <JsonLd data={faqStructuredData} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: article.title, path: "/blog/iv7-game-complete-guide" },
        ])}
      />
      <GuidePage article={article} />
    </>
  );
}
