import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TeleTorrent",
    short_name: "TeleTorrent",
    description: "The Fastest Telegram Download Manager for Android",
    start_url: "/",
    display: "standalone",
    background_color: "#007BFF",
    theme_color: "#007BFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
