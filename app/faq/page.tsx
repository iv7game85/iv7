import { buildMetadata } from "../../config/seo";
import { FAQ_DATA } from "../../config/constants";
import { JsonLd, breadcrumbJsonLd } from "../components/structured-data";
import FAQController from "./faq.controller";

export const metadata = buildMetadata({
  title: "FAQ – IV7 Games Official Support & Questions",
  description:
    "Find clear answers about IV7 Game, IV7 Games Download, IV7 Game Register, Android compatibility, APK safety, and responsible gaming.",
  path: "/faq",
  keywords: [
    "IV7 FAQ",
    "IV7 Game help",
    "IV7 support",
    "IV7 APK download guide",
    "IV7 Game Register",
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
