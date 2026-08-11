import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TeleTorrent",
    short_name: "TeleTorrent",
    description: "The Fastest Telegram Download Manager for Android",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo-round.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/logo-round.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
