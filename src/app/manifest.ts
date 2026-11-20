import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Wanso",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#142B45",
    theme_color: "#142B45",
    lang: "id",
    icons: [{ src: "/images/logo.png", sizes: "256x256", type: "image/png" }],
  };
}
