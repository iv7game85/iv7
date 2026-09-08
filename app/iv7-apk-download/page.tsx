import type { Metadata } from "next";
import { getArticleBySlug } from "../../config/articles";
import { buildMetadata } from "../../config/seo";
import { breadcrumbJsonLd, JsonLd } from "../components/structured-data";
import DownloadController from "./download.controller";

const loadedArticle = getArticleBySlug("iv7-apk-download");

if (!loadedArticle) {
  throw new Error("The IV7 APK article is missing.");
}

const article = loadedArticle;

export const metadata: Metadata = buildMetadata({
  title: article.metaTitle,
  description: article.metaDescription,
  path: "/iv7-apk-download",
  type: "article",
  publishedTime: article.publishDate,
  keywords: [
    "IV7 APK download",
    "IV7 APK",
    "IV7 Android download",
    "how to install IV7 APK",
    "IV7 APK installation",
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

export default function IV7ApkDownloadPage() {
  return (
    <>
      <JsonLd data={faqStructuredData} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: article.title, path: "/iv7-apk-download" },
        ])}
      />
      <DownloadController />
    </>
  );
}
