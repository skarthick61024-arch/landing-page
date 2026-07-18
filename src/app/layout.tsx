import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeleTorrent - The Fastest Telegram Download Manager for Android",
  description: "Download Telegram files faster. Resume anytime. Manage downloads like a pro with TeleTorrent. The ultimate Telegram download manager.",
  keywords: "telegram downloader, telegram download manager, telegram file downloader, telegram video downloader, android download manager, telegram apk, resume downloads, background download, telegram media downloader, download telegram videos",
  openGraph: {
    title: "TeleTorrent - The Fastest Telegram Download Manager",
    description: "Download Telegram files faster. Resume anytime. Manage downloads like a pro.",
    url: "https://teletorrent.app",
    siteName: "TeleTorrent",
    images: [
      {
        url: "/mockups/photo_2026-07-13_22-39-33.jpg", // Placeholder for og-image
        width: 1200,
        height: 630,
        alt: "TeleTorrent - Telegram Download Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleTorrent - The Fastest Telegram Download Manager",
    description: "Download Telegram files faster. Resume anytime. Manage downloads like a pro.",
    images: ["/mockups/photo_2026-07-13_22-39-33.jpg"],
  },
  alternates: {
    canonical: "https://teletorrent.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TeleTorrent",
    "operatingSystem": "Android",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Download Telegram files faster. Resume anytime. Manage downloads like a pro.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
