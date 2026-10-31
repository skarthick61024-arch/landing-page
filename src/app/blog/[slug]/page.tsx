import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blogData"
import { 
  Calendar, 
  Clock, 
  Film, 
  Video, 
  FileDown, 
  Layers, 
  ArrowRight, 
  ShieldCheck,
  Sparkles,
  ChevronRight
} from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    return {
      title: "Article Not Found | TeleTorrent",
    }
  }

  return {
    title: `${post.title} | TeleTorrent`,
    description: post.description,
    keywords: [
      post.title,
      post.category,
      "telegram downloader",
      "telegram movie download",
      "telegram video downloader",
      "teletorrent app",
      "teletorrent google play",
      "telegram movie download app 5g"
    ],
    alternates: {
      canonical: `https://www.teletorrent.me/blog/${post.slug}`,
      languages: {
        "en-IN": `https://www.teletorrent.me/blog/${post.slug}`,
        "en-US": `https://www.teletorrent.me/blog/${post.slug}`,
        "x-default": `https://www.teletorrent.me/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: `${post.title} | TeleTorrent`,
      description: post.description,
      url: `https://www.teletorrent.me/blog/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | TeleTorrent`,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": `https://www.teletorrent.me${post.image}`,
      "description": post.description,
      "author": {
        "@type": "Organization",
        "name": "TeleTorrent Editorial Team",
        "url": "https://www.teletorrent.me"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TeleTorrent",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.teletorrent.me/logo-round.jpg"
        }
      },
      "datePublished": new Date(post.date).toISOString(),
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.teletorrent.me/blog/${post.slug}`
      }
    },
    {
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://www.teletorrent.me/blog/${post.slug}`
        }
      ]
    }
  ]

  const relatedTools = [
    { title: "Telegram Movie Downloader", href: "/telegram-movie-downloader", icon: <Film className="w-4 h-4 text-[#B7FF32]" /> },
    { title: "Telegram Video Downloader", href: "/telegram-video-downloader", icon: <Video className="w-4 h-4 text-cyan-400" /> },
    { title: "Telegram File Downloader", href: "/telegram-file-downloader", icon: <FileDown className="w-4 h-4 text-amber-400" /> },
    { title: "Telegram Download Manager", href: "/telegram-download-manager", icon: <Layers className="w-4 h-4 text-emerald-400" /> }
  ]

  return (
    <div className="min-h-screen bg-[#060709] text-zinc-100 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-1 pt-12 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Breadcrumb */}
          <div className="text-xs font-mono text-zinc-500 mb-8 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#B7FF32] truncate max-w-[280px] sm:max-w-none">{post.title}</span>
          </div>

          {/* Article Header */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B7FF32]/10 border border-[#B7FF32]/30 text-xs font-mono font-bold text-[#B7FF32] uppercase tracking-wider mb-6">
              {post.category}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-6">
              {post.description}
            </p>

            <div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">TeleTorrent Guide</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-64 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden mb-14 border border-white/10 relative shadow-2xl">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill
              priority
              sizes="(max-width: 1000px) 100vw, 1000px"
              className="object-cover"
            />
          </div>

          {/* Article Body Content */}
          <article className="prose prose-invert prose-p:text-zinc-300 prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-headings:text-white prose-headings:font-extrabold prose-a:text-[#B7FF32] prose-a:underline hover:prose-a:text-white prose-strong:text-white prose-li:text-zinc-300 max-w-none">
            {post.content}
          </article>

          {/* Contextual SEO Backlink Hub & Related Tools */}
          <div className="mt-16 rounded-3xl p-7 bg-[#0B0D12] border border-white/[0.08]">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B7FF32]" />
              <span>Related TeleTorrent Downloader Tools</span>
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Explore dedicated download engines engineered for high-speed Telegram media extraction:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedTools.map((tool, idx) => (
                <Link
                  key={idx}
                  href={tool.href}
                  className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-[#B7FF32]/10 border border-white/[0.06] hover:border-[#B7FF32]/30 flex items-center justify-between text-xs font-bold text-zinc-200 hover:text-[#B7FF32] transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    {tool.icon}
                    <span>{tool.title}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-1 group-hover:text-[#B7FF32] transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contextual High-Converting Google Play Download Banner */}
          <div className="mt-8 rounded-3xl p-8 bg-gradient-to-r from-[#0F140E] via-[#0A0D09] to-[#070A0F] border border-[#B7FF32]/30 text-center">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
              Download Telegram Movies at Full 5G Speed with TeleTorrent
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-6 leading-relaxed">
              Experience 16-channel TurboStream™ parallel acceleration, persistent background downloading, and direct gallery export for Android across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#B7FF32] text-black font-extrabold text-sm shadow-md shadow-[#B7FF32]/20 hover:bg-[#c6ff4d] transition-all"
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
                <span>Get it on Google Play</span>
              </a>

              <Link
                href="/telegram-movie-downloader"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <Film className="w-4 h-4 text-[#B7FF32]" />
                <span>Movie Downloader Hub</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Related Guides Section */}
      <section className="py-20 bg-[#060709] border-t border-white/[0.08]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Related Telegram Guides</h2>
              <p className="text-xs text-zinc-400 mt-1">More tips on downloading, storage management, and speed</p>
            </div>
            <Link href="/blog" className="text-xs font-mono text-[#B7FF32] hover:underline flex items-center gap-1">
              <span>All Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                href={`/blog/${related.slug}`}
                key={related.slug}
                className="group flex flex-col bg-[#0B0D12] border border-white/[0.08] hover:border-[#B7FF32]/40 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-full h-44 bg-zinc-900 overflow-hidden relative">
                  <Image 
                    src={related.image} 
                    alt={related.title} 
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[#B7FF32]">
                      {related.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#B7FF32] transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2 flex-1">
                    {related.description}
                  </p>
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span>{related.readingTime}</span>
                    <span className="text-[#B7FF32] group-hover:translate-x-1 transition-transform">Read ➔</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
