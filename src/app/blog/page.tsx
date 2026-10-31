import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { blogPosts } from "@/lib/blogData"
import { BlogSearchContainer } from "@/components/blog/BlogSearchContainer"
import { BookOpen, Sparkles, ArrowRight, ShieldCheck, Film } from "lucide-react"

export const metadata: Metadata = {
  title: "Telegram Download Guides & Tutorials | TeleTorrent Knowledge Base",
  description: "Comprehensive step-by-step guides, speed optimization techniques, and troubleshooting tutorials for downloading movies, 4K videos, documents, and large files from Telegram.",
  keywords: [
    "telegram download guides",
    "how to download movies from telegram",
    "telegram video downloader tutorial",
    "telegram 5g download speed",
    "fix telegram download stuck at 99",
    "save telegram movies to gallery",
    "telegram download manager android",
    "teletorrent tutorials"
  ],
  alternates: {
    canonical: "https://www.teletorrent.me/blog",
    languages: {
      "en-IN": "https://www.teletorrent.me/blog",
      "en-US": "https://www.teletorrent.me/blog",
      "x-default": "https://www.teletorrent.me/blog",
    },
  },
  openGraph: {
    title: "Telegram Download Guides & Tutorials | TeleTorrent Knowledge Base",
    description: "Learn how to download and manage large Telegram files, 4K movies, and documents with TurboStream parallel acceleration and resume support.",
    url: "https://www.teletorrent.me/blog",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TeleTorrent Blog & Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegram Download Guides & Tutorials | TeleTorrent",
    description: "Step-by-step guides for downloading Telegram movies and videos to Android gallery.",
    images: ["/og-image.jpg"],
  },
}

export default function BlogIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "TeleTorrent Blog & Telegram Download Guides",
    "description": "Comprehensive guides and resources for downloading Telegram movies, videos, and large archives.",
    "url": "https://www.teletorrent.me/blog",
    "publisher": {
      "@type": "Organization",
      "name": "TeleTorrent",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.teletorrent.me/logo-round.jpg"
      }
    },
    "breadcrumb": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.teletorrent.me/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.teletorrent.me/blog"
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-[#060709] text-zinc-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-10 pb-24 flex-1">
        
        {/* Breadcrumb */}
        <div className="text-xs font-mono text-zinc-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B7FF32]">Blog &amp; Knowledge Base</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#B7FF32] uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TeleTorrent Knowledge Base</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Telegram Download Guides &amp; Tutorials.
          </h1>
          
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Master downloading massive 4K movies, documents, and ZIP archives directly to your phone gallery with high-speed TurboStream™ parallel acceleration and byte-level resume support.
          </p>
        </div>

        {/* Interactive Search & Filterable Posts Grid */}
        <BlogSearchContainer posts={blogPosts} />

        {/* Backlink Hub Banner to Movie Downloader and Google Play */}
        <div className="mt-24 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0F140E] via-[#0A0D09] to-[#070A0F] border border-[#B7FF32]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B7FF32] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Tool</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to Download Telegram Movies at Full 5G Speed?
            </h2>
            <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
              Skip the manual workarounds. Get TeleTorrent from Google Play to enjoy 16-channel TurboStream™ parallel acceleration, background downloading, and direct gallery export across India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#B7FF32] text-black font-extrabold text-sm shadow-lg shadow-[#B7FF32]/20 hover:bg-[#c6ff4d] transition-all"
            >
              <div className="w-5 h-5 relative shrink-0">
                <Image 
                  src="/play-store-icon.png" 
                  alt="Google Play" 
                  width={20} 
                  height={20} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span>Get on Google Play</span>
            </a>

            <Link
              href="/telegram-movie-downloader"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-sm transition-all"
            >
              <Film className="w-4 h-4 text-[#B7FF32]" />
              <span>Movie Downloader Hub</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
