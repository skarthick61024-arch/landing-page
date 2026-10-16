import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";

const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap", 
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teletorrent.me"),
  title: {
    default: "TeleTorrent – Telegram Downloader & Telegram Movie Download App",
    template: "%s | TeleTorrent",
  },
  description: "TeleTorrent is the leading Telegram downloader for movies, 4K videos, files, and documents. Download Telegram movies directly to Android gallery with high-speed MTProto resume and background support across India.",
  keywords: "TeleTorrent, Tele Torrent, teletorrent app, teletorrent apk, telegram movie download, telegram movie downloader, telegram video downloader, download movies from telegram, telegram file downloader, telegram link to direct download, telegram 4k movie download app, telegram downloader india, jio telegram movie download, download telegram videos, android telegram downloader",
  authors: [{ name: "TeleTorrent Team", url: "https://www.teletorrent.me" }],
  creator: "TeleTorrent",
  publisher: "TeleTorrent",
  applicationName: "TeleTorrent",
  category: "Utilities & Multimedia",
  openGraph: {
    title: "TeleTorrent – Telegram Downloader & Telegram Movie Download App",
    description: "Download supported Telegram movies, 4K videos, files, documents and media directly to Android storage with TeleTorrent.",
    url: "https://www.teletorrent.me/",
    siteName: "TeleTorrent",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TeleTorrent - Telegram Movie & Video Downloader",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleTorrent – Telegram Downloader & Telegram Movie Download App",
    description: "Download large Telegram movies, 4K videos, files, and documents directly to your Android device with pause/resume support.",
    images: ["/og-image.jpg"],
    creator: "@teletorrent",
  },
  icons: {
    icon: "/logo-round.jpg",
    shortcut: "/logo-round.jpg",
    apple: "/logo-round.jpg",
  },
  alternates: {
    canonical: "https://www.teletorrent.me/",
    languages: {
      "en-IN": "https://www.teletorrent.me/",
      "en-US": "https://www.teletorrent.me/",
      "x-default": "https://www.teletorrent.me/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.593684;78.96288",
    "ICBM": "20.593684, 78.96288",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <meta name="google-adsense-account" content="ca-pub-3586845532361162" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var loaded = false;
                function loadAds() {
                  if (loaded) return;
                  loaded = true;
                  ['scroll', 'touchstart', 'mousemove', 'click'].forEach(function(e) {
                    window.removeEventListener(e, loadAds);
                  });
                  var s = document.createElement('script');
                  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3586845532361162';
                  s.crossOrigin = 'anonymous';
                  s.async = true;
                  document.head.appendChild(s);
                }
                ['scroll', 'touchstart', 'mousemove', 'click'].forEach(function(e) {
                  window.addEventListener(e, loadAds, { passive: true, once: true });
                });
                setTimeout(loadAds, 3500);
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "TeleTorrent",
                "alternateName": [
                  "Tele Torrent",
                  "TeleTorrent App",
                  "TeleTorrent APK",
                  "TeleTorrent Movie Downloader",
                  "TeleTorrent Telegram Downloader",
                  "teletorrent.me"
                ],
                "url": "https://www.teletorrent.me/",
                "inLanguage": ["en-IN", "en-US", "hi-IN"],
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.teletorrent.me/blog?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "TeleTorrent",
                "url": "https://www.teletorrent.me/",
                "logo": "https://www.teletorrent.me/logo-round.jpg",
                "sameAs": [
                  "https://twitter.com/teletorrent",
                  "https://t.me/teletorrent"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "TeleTorrent",
                "operatingSystem": "Android 8.0+",
                "applicationCategory": "UtilitiesApplication",
                "applicationSubCategory": "Multimedia Downloader",
                "url": "https://www.teletorrent.me/",
                "downloadUrl": "https://www.teletorrent.me/teletorrent.apk",
                "fileSize": "12MB",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "5420",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "featureList": [
                  "Telegram Movie Downloader",
                  "Telegram 4K Video Downloader",
                  "Multi-Threaded 16-Chunk MTProto Acceleration",
                  "Background Android Foreground Service",
                  "Auto-Resume Interrupted Downloads",
                  "Zero Data Corruption SHA-256",
                  "Saved Messages Direct Sync"
                ],
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is TeleTorrent?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "TeleTorrent is a specialized Android download manager and Telegram downloader that enables users to download movies, 4K videos, documents, and files directly from Telegram Saved Messages and channels at maximum speed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to download movies from Telegram to phone gallery in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Forward the movie file to your Telegram Saved Messages, open TeleTorrent, and tap Download. The movie is downloaded directly to your phone storage and appears immediately in MX Player, VLC, and your Android Gallery."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does TeleTorrent support fast downloads on Jio 5G and Airtel 5G?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, TeleTorrent connects directly to Telegram MTProto data centers and splits files into 16 parallel sockets, allowing you to maximize high-speed Jio 5G and Airtel 5G network speeds without client throttling."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I resume paused or interrupted Telegram movie downloads?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, TeleTorrent features persistent byte-level resume support. If your mobile connection drops while downloading a 3GB movie, the download resumes automatically from the exact point of interruption without losing data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is TeleTorrent free to use in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, TeleTorrent is 100% free to use for all Telegram video, movie, and file downloads with no paid subscriptions required."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <div className="flex flex-col min-h-screen md:pl-[112px]">
          <Navbar />
          <main className="flex-1 pb-[64px] md:pb-0">
            {children}
          </main>
          <Footer />
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
