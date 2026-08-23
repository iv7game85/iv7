import { buildMetadata } from "../../config/seo";
import { FAQ_DATA } from "../../config/constants";
import { JsonLd, breadcrumbJsonLd } from "../components/structured-data";
import FAQController from "./faq.controller";

export const metadata = buildMetadata({
  title: "FAQ – IV7 Games Official Support & Questions",
  description:
    "Find answers to frequently asked questions about IV7 Game APK download, account registration, UPI withdrawals, and welcome bonuses.",
  path: "/faq",
  keywords: [
    "IV7 FAQ",
    "IV7 Game help",
    "IV7 support",
    "IV7 withdrawal help",
    "IV7 APK download guide",
  ],
});

const FAQPage = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqStructuredData} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <FAQController />
    </>
  );
};

export default FAQPage;
