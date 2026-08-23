import { buildMetadata } from "../../config/seo";
import AboutUsController from "./aboutUs.controller";

export const metadata = buildMetadata({
  title: "About Us – IV7 Games Official",
  description:
    "Learn about IV7 Game, our platform mission, secure gaming architecture, and dedication to 100% fair play.",
  path: "/about-us",
  keywords: [
    "About IV7",
    "IV7 Game mission",
    "IV7 official team",
    "IV7 fair play",
    "IV7 gaming company",
  ],
});

const AboutUsPage = () => {
  return <AboutUsController />;
};

export default AboutUsPage;
