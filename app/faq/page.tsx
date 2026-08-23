import { buildMetadata } from "../../config/seo";
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
  return <FAQController />;
};

export default FAQPage;
