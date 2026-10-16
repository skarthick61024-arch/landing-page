import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TeleTorrent - Telegram Movie & Video Downloader",
    short_name: "TeleTorrent",
    description: "The fastest Telegram movie and video downloader for Android with 4K streaming and auto-resume support.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "en-IN",
    categories: ["utilities", "multimedia", "entertainment"],
    icons: [
      {
        src: "/logo-round.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/logo-round.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
  };
}
