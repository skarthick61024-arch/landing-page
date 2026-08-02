import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teletorrent.me"),
  title: "TeleTorrent \u2013 Telegram File Downloader for Android",
  description: "Download Telegram videos, documents, ZIP files, APKs, audio, and media with TeleTorrent. Fast, secure background downloads with resume support and download management.",
  keywords: "telegram downloader, telegram file downloader, telegram download manager, telegram video downloader, telegram media downloader, telegram saved messages downloader, download telegram files, telegram document downloader, telegram apk downloader",
  openGraph: {
    title: "TeleTorrent \u2013 Telegram File Downloader for Android",
    description: "Download Telegram videos, documents, ZIP files, APKs, audio, and media with TeleTorrent. Fast, secure background downloads with resume support.",
    url: "https://www.teletorrent.me",
    siteName: "TeleTorrent",
    images: [
      {
        url: "/og-image.jpg",
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
    title: "TeleTorrent \u2013 Telegram File Downloader for Android",
    description: "Download Telegram videos, documents, ZIP files, APKs, audio, and media with TeleTorrent. Fast, secure background downloads with resume support.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo-new.jpg",
    shortcut: "/logo-new.jpg",
    apple: "/logo-new.jpg",
  },
  alternates: {
    canonical: "https://www.teletorrent.me",
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

      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
