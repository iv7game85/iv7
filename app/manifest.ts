import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "../config/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "IV7 Games",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#070707",
    theme_color: "#f20d4d",
    lang: SITE_CONFIG.language,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
