import type { Metadata } from "next";
import { getArticleBySlug } from "../../config/articles";
import { buildMetadata } from "../../config/seo";
import { breadcrumbJsonLd, JsonLd } from "../components/structured-data";
import RegisterController from "./register.controller";

const loadedArticle = getArticleBySlug("iv7-game-register");

if (!loadedArticle) {
  throw new Error("The IV7 registration article is missing.");
}

const article = loadedArticle;

export const metadata: Metadata = buildMetadata({
  title: article.metaTitle,
  description: article.metaDescription,
  path: "/iv7-game-register",
  type: "article",
  publishedTime: article.publishDate,
  keywords: [
    "IV7 Game register",
    "IV7 registration",
    "how to register on IV7",
    "IV7 sign up",
    "IV7 registration OTP",
  ],
});

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
      <RegisterController />
    </>
  );
}
