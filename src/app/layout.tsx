import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
                "operatingSystem": "Android, Web",
                "url": "https://www.teletorrent.me/"
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
          <div className="flex flex-col min-h-screen md:pl-[260px]">
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
