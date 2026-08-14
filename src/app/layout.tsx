import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teletorrent.me"),
  title: "Telegram Downloader – Download Telegram Videos & Files | TeleTorrent",
  description: "TeleTorrent is a fast Telegram downloader for saving Telegram videos, files, documents, ZIPs, APKs, audio and supported media. Download Telegram files with resume support and background downloads.",
  keywords: "telegram downloader, telegram video downloader, telegram file downloader, telegram media downloader, android download manager, teletorrent, download telegram videos",
  openGraph: {
    title: "Telegram Downloader – Download Telegram Videos & Files | TeleTorrent",
    description: "Download supported Telegram videos, files, documents and media with TeleTorrent.",
    url: "https://www.teletorrent.me/",
    siteName: "TeleTorrent",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TeleTorrent - Telegram Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegram Downloader – Download Telegram Videos & Files | TeleTorrent",
    description: "Download supported Telegram videos, files, documents and media with TeleTorrent.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo-round.jpg",
    shortcut: "/logo-round.jpg",
    apple: "/logo-round.jpg",
  },
  alternates: {
    canonical: "https://www.teletorrent.me/",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3586845532361162"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-3586845532361162" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "TeleTorrent",
                "url": "https://www.teletorrent.me/"
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "TeleTorrent",
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "Android",
                "url": "https://www.teletorrent.me/"
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is a Telegram downloader?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A Telegram downloader is an application that allows you to easily find, manage, and download media and files directly from your Telegram account, specifically from your Saved Messages."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I download Telegram videos?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "With TeleTorrent, simply forward the video to your Telegram Saved Messages, open the TeleTorrent app, and tap download. The video will be saved directly to your device."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I download Telegram files?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, TeleTorrent supports downloading any file type available on Telegram. Whether it's documents, media, or archives, you can manage and download them seamlessly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What files does TeleTorrent support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "TeleTorrent supports videos, documents, ZIP archives, APK files, audio tracks, and all other standard media types that Telegram allows you to send and receive."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I download Telegram documents?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. TeleTorrent is perfect for downloading large PDFs, Word documents, Excel sheets, and other professional files directly from your Telegram account."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I download ZIP files from Telegram?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can easily download ZIP and RAR archives. TeleTorrent manages the download process so you can access your compressed files securely."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I resume interrupted downloads?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, TeleTorrent features full resume support for interrupted or paused downloads, ensuring you never have to restart large file transfers from scratch."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does TeleTorrent work on Android?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, TeleTorrent is natively built for Android, offering a smooth, optimized experience for managing and downloading your Telegram files on the go."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is TeleTorrent free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "TeleTorrent is completely free to use with zero ads and no premium tiers required for core downloading functionality."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does TeleTorrent require Telegram login?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, to securely access your Saved Messages and download your files, you need to log in to your Telegram account through the TeleTorrent app."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen md:pl-[112px]">
            <Navbar />
            <main className="flex-1 pb-[64px] md:pb-0">
              {children}
            </main>
            <Footer />
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
