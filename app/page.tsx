import type { Metadata } from "next";
import { SITE_URL } from "../config/constants";
import HomeController from "./home.controller";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IV7 Games – Official IV7 Game App & Download Guide",
  description:
    "Complete guide for IV7 Game app. Download the latest IV7 APK, register, login, claim daily bonus rewards, and play securely.",
  keywords: [
    "IV7",
    "IV7 Game",
    "IV7 APK",
    "IV7 App Download",
    "IV7 Login",
    "IV7 Register",
    "IV7 Official Guide",
  ],
  openGraph: {
    title: "IV7 Games – Official IV7 Game App & Download Guide",
    description:
      "Complete guide for IV7 Game app. Download the latest IV7 APK, register, login, claim daily bonus rewards, and play securely.",
    url: SITE_URL + "/",
    siteName: "IV7 Games",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "IV7 Games – Official IV7 Game App & Download Guide",
    description:
      "Complete guide for IV7 Game app. Download the latest IV7 APK, register, login, claim daily bonus rewards, and play securely.",
  },
  alternates: {
    canonical: SITE_URL + "/",
    languages: {
      "x-default": SITE_URL,
    },
  },
};

export default function Home() {
  return <HomeController />;
}
