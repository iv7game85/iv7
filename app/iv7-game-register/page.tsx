import type { Metadata } from "next";
import { getArticleBySlug } from "../../config/articles";
import { breadcrumbJsonLd, JsonLd } from "../components/structured-data";
import GuidePage from "../components/guide-page";

const loadedArticle = getArticleBySlug("iv7-game-register");

if (!loadedArticle) {
  throw new Error("The IV7 registration article is missing.");
}

const article = loadedArticle;

export const metadata: Metadata = {
  title: article.metaTitle,
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

export default function IV7GameRegisterPage() {
  return (
    <>
      <JsonLd data={faqStructuredData} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: article.title, path: "/iv7-game-register" },
        ])}
      />
      <GuidePage article={article} />
    </>
  );
}
