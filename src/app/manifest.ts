import type { MetadataRoute } from "next";
import { clinic } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${clinic.brand} — Dentist in Peshawar`,
    short_name: clinic.shortBrand,
    description: clinic.description,
    start_url: "/",
    display: "standalone",
    background_color: "#100f0c",
    theme_color: "#100f0c",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
