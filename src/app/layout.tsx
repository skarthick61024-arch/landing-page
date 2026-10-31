import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#060709",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teletorrent.me"),
  title: {
    default: "TeleTorrent – Fast Telegram Movie Downloader & 4K Video Downloader App",
    template: "%s | TeleTorrent",
  },
  description: "Download Telegram movies, 4K videos, documents, and files directly to your phone gallery on Android. TurboStream parallel acceleration, auto-resume on network drops, and background downloading for Jio 5G, Airtel 5G, and all networks across India.",
  keywords: [
    "TeleTorrent",
    "Tele Torrent",
    "teletorrent app",
    "teletorrent google play",
    "telegram movie download",
    "telegram movie downloader",
    "telegram video downloader",
    "telegram video download app",
    "download movies from telegram",
    "telegram 4k movie download app",
    "telegram downloader india",
    "jio telegram movie download",
    "airtel telegram movie download",
    "telegram se movie kaise download kare",
    "telegram movie download app for android",
    "download telegram videos to gallery",
    "telegram link to direct download",
    "telegram south movie download app",
    "telegram web series download app",
    "telegram download manager google play",
    "save telegram movies to gallery vlc player",
    "fast telegram downloader app india"
  ],
  authors: [{ name: "TeleTorrent Team", url: "https://www.teletorrent.me" }],
  creator: "TeleTorrent",
  publisher: "TeleTorrent",
  applicationName: "TeleTorrent",
  category: "Utilities & Video Downloader",
  openGraph: {
    title: "TeleTorrent – Telegram Movie & 4K Video Downloader on Google Play",
    description: "Download 4K Telegram movies, videos, and large files directly to your Android phone gallery with high-speed parallel acceleration and auto-resume.",
    url: "https://www.teletorrent.me/",
    siteName: "TeleTorrent",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TeleTorrent - Telegram Movie & Video Downloader on Google Play Store",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleTorrent – Telegram Movie & 4K Video Downloader on Google Play",
    description: "Download large Telegram movies, 4K videos, and files directly to phone gallery with pause/resume support and background downloading.",
    images: ["/og-image.jpg"],
    creator: "@teletorrent",
    site: "@teletorrent",
  },
  icons: {
    icon: "/logo-round.jpg",
    shortcut: "/logo-round.jpg",
    apple: "/logo-round.jpg",
  },
  alternates: {
    canonical: "https://www.teletorrent.me",
    languages: {
      "en-IN": "https://www.teletorrent.me",
      "hi-IN": "https://www.teletorrent.me",
      "ta-IN": "https://www.teletorrent.me",
      "te-IN": "https://www.teletorrent.me",
      "kn-IN": "https://www.teletorrent.me",
      "ml-IN": "https://www.teletorrent.me",
      "mr-IN": "https://www.teletorrent.me",
      "bn-IN": "https://www.teletorrent.me",
      "gu-IN": "https://www.teletorrent.me",
      "pa-IN": "https://www.teletorrent.me",
      "en-US": "https://www.teletorrent.me",
      "x-default": "https://www.teletorrent.me",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ca-pub-3586845532361162",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.593684;78.96288",
    "ICBM": "20.593684, 78.96288",
    "coverage": "India, Worldwide",
    "distribution": "Global",
    "rating": "General",
    "target": "all",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <meta name="google-adsense-account" content="ca-pub-3586845532361162" />
        
        {/* AdSense Optimization */}
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

        {/* Comprehensive Google Rich Results JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.teletorrent.me/#website",
                "name": "TeleTorrent",
                "alternateName": [
                  "Tele Torrent",
                  "TeleTorrent App",
                  "TeleTorrent Movie Downloader",
                  "TeleTorrent Telegram Downloader",
                  "teletorrent.me"
                ],
                "url": "https://www.teletorrent.me/",
                "inLanguage": ["en-IN", "hi-IN", "ta-IN", "te-IN", "kn-IN", "ml-IN", "mr-IN", "bn-IN", "gu-IN", "pa-IN", "en-US"],
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
                "@id": "https://www.teletorrent.me/#organization",
                "name": "TeleTorrent",
                "url": "https://www.teletorrent.me/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.teletorrent.me/logo-round.jpg",
                  "width": 512,
                  "height": 512
                },
                "sameAs": [
                  "https://play.google.com/store/apps/details?id=com.teletorrent.app",
                  "https://twitter.com/teletorrent",
                  "https://t.me/teletorrent"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "email": "support@teletorrent.me",
                  "areaServed": ["IN", "US", "GB", "AE", "Worldwide"]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "@id": "https://www.teletorrent.me/#app",
                "name": "TeleTorrent",
                "operatingSystem": "Android 8.0+",
                "applicationCategory": "UtilitiesApplication",
                "applicationSubCategory": "Video Downloader & Download Manager",
                "url": "https://www.teletorrent.me/",
                "downloadUrl": "https://play.google.com/store/apps/details?id=com.teletorrent.app",
                "installUrl": "https://play.google.com/store/apps/details?id=com.teletorrent.app",
                "sameAs": [
                  "https://play.google.com/store/apps/details?id=com.teletorrent.app"
                ],
                "fileSize": "12MB",
                "softwareVersion": "1.2.4",
                "releaseNotes": "TurboStream high-speed parallel acceleration, instant gallery auto-export, background foreground service, and zero-loss resume engine.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "12480",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "featureList": [
                  "Telegram Movie Downloader to Gallery",
                  "Telegram 4K UHD Video Downloader",
                  "TurboStream Multi-Threaded 5G Acceleration",
                  "Persistent Background Android Foreground Service",
                  "Zero Data Loss Byte-Level Auto Resume",
                  "Direct MX Player & VLC Media Player Sync",
                  "Telegram Saved Messages Instant Sync",
                  "Google Play Protect Verified App"
                ],
                "areaServed": [
                  { "@type": "Country", "name": "India" },
                  { "@type": "AdministrativeArea", "name": "Maharashtra" },
                  { "@type": "AdministrativeArea", "name": "Delhi NCR" },
                  { "@type": "AdministrativeArea", "name": "Karnataka" },
                  { "@type": "AdministrativeArea", "name": "Telangana" },
                  { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
                  { "@type": "AdministrativeArea", "name": "Uttar Pradesh" },
                  { "@type": "AdministrativeArea", "name": "West Bengal" },
                  { "@type": "AdministrativeArea", "name": "Gujarat" },
                  { "@type": "AdministrativeArea", "name": "Rajasthan" },
                  { "@type": "AdministrativeArea", "name": "Kerala" },
                  { "@type": "AdministrativeArea", "name": "Punjab" },
                  { "@type": "AdministrativeArea", "name": "Bihar" },
                  { "@type": "AdministrativeArea", "name": "Andhra Pradesh" },
                  { "@type": "AdministrativeArea", "name": "Madhya Pradesh" },
                  { "@type": "AdministrativeArea", "name": "Haryana" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": "How to Download Movies from Telegram to Phone Gallery using TeleTorrent",
                "description": "Step-by-step guide on downloading large 4K and 1080p movies from Telegram directly to your Android device storage without speed limits.",
                "totalTime": "PT2M",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Install TeleTorrent from Google Play",
                    "text": "Open Google Play Store on your Android phone and install the official TeleTorrent app."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Forward Movie to Saved Messages",
                    "text": "In the official Telegram app, locate your desired movie file (MKV or MP4) in any channel or group, and forward it to your personal Saved Messages chat."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Open TeleTorrent and Download",
                    "text": "Launch TeleTorrent. Your forwarded movie file appears automatically. Tap Download to accelerate at full 5G speeds directly to your phone gallery for VLC and MX Player."
                  }
                ]
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
                      "text": "TeleTorrent is an ultra-fast Android download manager available on Google Play that enables users to download movies, 4K videos, documents, and files from Telegram directly to their phone gallery with high-speed parallel acceleration and auto-resume."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to download movies from Telegram to phone gallery in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Install TeleTorrent from the Google Play Store, forward the movie to your Telegram Saved Messages, open TeleTorrent, and tap Download. The file is saved directly to your phone storage and appears immediately in your Gallery, MX Player, and VLC."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does TeleTorrent support fast downloads on Jio 5G and Airtel 5G across India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! TeleTorrent uses proprietary TurboStream parallel acceleration technology that eliminates client bottlenecks and achieves full speeds up to 60+ MB/s on Jio True 5G, Airtel 5G Plus, Vi, and high-speed Wi-Fi across all Indian cities."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I resume paused or interrupted Telegram movie downloads?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. TeleTorrent provides byte-level auto-resume. If your network disconnects or switches between Wi-Fi and mobile data, the download automatically resumes from the exact point of interruption without losing data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does TeleTorrent download in the background when the phone screen is locked?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. TeleTorrent runs as an official Android Foreground Service, allowing heavy multi-gigabyte files to download reliably in the background while your phone is locked or while using other apps."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is TeleTorrent safe and available on the Google Play Store?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, TeleTorrent is available directly on the Google Play Store and is verified safe by Google Play Protect with zero malware or security risks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is TeleTorrent free to use in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, TeleTorrent is 100% free to download on Google Play with uncapped download speeds and full resume support."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#060709] text-zinc-100 antialiased selection:bg-[#B7FF32] selection:text-black`} suppressHydrationWarning={true}>
        <div className="flex flex-col min-h-screen relative overflow-x-hidden">
          <Navbar />
          <main className="flex-1 pb-20 md:pb-0 pt-20">
            {children}
          </main>
          <Footer />
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
