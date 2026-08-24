import type { Metadata } from "next";
import { JsonLd } from "./components/structured-data";
import { FAQ_DATA, SITE_CONFIG } from "../config/constants";
import HomeController from "./home.controller";

export const metadata: Metadata = {
  title: "IV7 Game – IV7 Games Download & Register",
  description:
    "Explore IV7 Games, learn about the IV7 Games Download process, and find information about IV7 Game Register, Android access, safety, and responsible gaming.",
  keywords: [
    "IV7 Game",
    "IV7 Games",
    "IV7 Games Download",
    "IV7 Game Register",
    "IV7 APK",
    "IV7 Android",
  ],
  alternates: {
    canonical: "/",
  },
};

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: new URL(SITE_CONFIG.ogImage, SITE_CONFIG.url).toString(),
      description: SITE_CONFIG.description,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      inLanguage: SITE_CONFIG.language || "en-IN",
      publisher: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_DATA.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeStructuredData} />
      <HomeController />
    </>
  );
}
