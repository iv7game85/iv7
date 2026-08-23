import HomeController from "./home.controller";
import { JsonLd } from "./components/structured-data";
import { SITE_CONFIG } from "../config/constants";

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: new URL(SITE_CONFIG.ogImage, SITE_CONFIG.url).toString(),
      description: SITE_CONFIG.description,
    },
    {
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}/`,
      description: SITE_CONFIG.description,
      inLanguage: SITE_CONFIG.language,
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
