import { buildMetadata } from "../../config/seo";
import DisclaimerController from "./disclaimer.controller";

export const metadata = buildMetadata({
  title: "Disclaimer & Responsible Gaming – IV7 Games",
  description:
    "Important legal information, state eligibility terms, financial risk disclosures, and responsible gaming guidelines for IV7 Game players.",
  path: "/disclaimer",
  keywords: [
    "IV7 disclaimer",
    "IV7 legal terms",
    "IV7 responsible gaming",
    "IV7 state restrictions",
    "IV7 risk notice",
  ],
});

const DisclaimerPage = () => {
  return <DisclaimerController />;
};

export default DisclaimerPage;
