import { buildMetadata } from "../../config/seo";
import ContactUsController from "./contactUs.controller";

export const metadata = buildMetadata({
  title: "Contact Us – IV7 Games 24/7 Official Support",
  description:
    "Reach the official IV7 Game support desk via 24/7 in-app live chat, Telegram community channel, or direct email helpdesk.",
  path: "/contact-us",
  keywords: [
    "IV7 support",
    "contact IV7 Game",
    "IV7 customer care",
    "IV7 Telegram help",
    "IV7 email support",
  ],
});

const ContactUsPage = () => {
  return <ContactUsController />;
};

export default ContactUsPage;
