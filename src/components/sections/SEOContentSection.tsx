import Link from "next/link"
import { 
  Film, 
  Video, 
  FileArchive, 
  Layers, 
  FileText, 
  Music, 
  Download, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react"

export function SEOContentSection() {
  const downloaderHubs = [
    {
      title: "Telegram Movie Downloader",
      slug: "/telegram-movie-downloader",
      icon: <Film className="w-5 h-5 text-[#B7FF32]" />,
      badge: "Most Popular",
      keywords: "4K UHD, 1080p, Multi-Audio Dubs (Hindi/English/Tamil/Telugu), Embedded Subtitles",
      description: "Download full-length 4K and 1080p movies from Telegram directly to your phone gallery and SD card with 16-channel TurboStream™ parallel acceleration and byte-level resume."
    },
    {
      title: "Telegram Video Downloader",
      slug: "/telegram-video-downloader",
      icon: <Video className="w-5 h-5 text-cyan-400" />,
      badge: "HD / 60FPS",
      keywords: "MP4, MKV, WebM, 60 FPS Clips, Telegram Saved Videos",
      description: "Extract high-bitrate videos and series clips without native Telegram video compression or background download cancellation."
    },
    {
      title: "Telegram File & Archive Downloader",
      slug: "/telegram-file-downloader",
      icon: <FileArchive className="w-5 h-5 text-amber-400" />,
      badge: "Large Files",
      keywords: "ZIP, RAR, 7Z, ISO, Heavy 2GB-4GB Archives, Data Packages",
      description: "Safely download massive multi-gigabyte ZIP archives and installation packages without parse errors or corrupted files."
    },
    {
      title: "Telegram Download Manager",
      slug: "/telegram-download-manager",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      badge: "TurboStream 5G",
      keywords: "Queue Priority, Background Service, Parallel Streams, Auto-Resume",
      description: "Manage multiple heavy downloads with intelligent sequential queuing, active speed monitoring, and battery-friendly background execution."
    },
    {
      title: "Telegram Document Downloader",
      slug: "/telegram-document-downloader",
      icon: <FileText className="w-5 h-5 text-violet-400" />,
      badge: "Productivity",
      keywords: "PDF, DOCX, XLSX, EPUB, Presentation Slides, Coding Notes",
      description: "Instant batch downloading for academic textbooks, corporate PDFs, and documents forwarded to your Telegram Saved Messages."
    },
    {
      title: "Telegram Media Downloader",
      slug: "/telegram-media-downloader",
      icon: <Music className="w-5 h-5 text-rose-400" />,
      badge: "Lossless Audio",
      keywords: "FLAC Audio, MP3 Albums, Podcast Tracks, High-Res Photos",
      description: "Download lossless studio audio, podcasts, and uncompressed RAW photos with bit-for-bit accuracy directly to your music player."
    }
  ]

  const searchKeywords = [
    { name: "telegram movie downloader google play", href: "https://play.google.com/store/apps/details?id=com.teletorrent.app" },
    { name: "telegram movie downloader to gallery", href: "/telegram-movie-downloader" },
    { name: "download 4k movies from telegram", href: "/telegram-movie-downloader" },
    { name: "telegram video download app android", href: "/telegram-video-downloader" },
    { name: "telegram movie download hindi dubbed", href: "/telegram-movie-downloader" },
    { name: "telegram movie download tamil telugu", href: "/telegram-movie-downloader" },
    { name: "resume telegram download at 99%", href: "/blog/telegram-file-download-troubleshooting" },
    { name: "telegram link to direct download link", href: "/telegram-downloader" },
    { name: "telegram 5g download speed jio airtel", href: "/blog/how-to-download-telegram-videos" },
    { name: "telegram download manager app android", href: "/telegram-download-manager" },
    { name: "download files from telegram saved messages", href: "/blog/how-to-download-telegram-files" },
    { name: "teletorrent google play app india", href: "https://play.google.com/store/apps/details?id=com.teletorrent.app" }
  ]

  return (
    <section id="tools-hub" className="py-24 md:py-32 bg-[#060709] border-t border-white/[0.08] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#B7FF32] uppercase tracking-wider mb-4">
            Specialized Tool Hubs & Directory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Specialized Telegram Downloaders for Every Media Type.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Whether you are downloading 4K HDR movies, multi-gigabyte ZIP archives, lossless audio, or professional documents, TeleTorrent provides dedicated high-speed engines.
          </p>
        </div>

        {/* Downloader Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {downloaderHubs.map((hub, idx) => (
            <Link
              key={idx}
              href={hub.slug}
              className="rounded-3xl p-7 bg-[#0B0D12] border border-white/[0.08] hover:border-[#B7FF32]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {hub.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-400 group-hover:text-[#B7FF32] group-hover:border-[#B7FF32]/30 transition-colors">
                    {hub.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#B7FF32] transition-colors flex items-center justify-between">
                  <span>{hub.title}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#B7FF32] group-hover:translate-x-1 transition-all" />
                </h3>
                
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {hub.description}
                </p>
              </div>

              {/* Keywords Tag Strip */}
              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                <span className="text-zinc-600 block mb-1">Supported Formats:</span>
                {hub.keywords}
              </div>
            </Link>
          ))}
        </div>

        {/* SEO Keyword Cloud & Internal Search Intent Hub */}
        <div className="rounded-3xl p-8 bg-black/40 border border-white/[0.08] backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B7FF32]" />
                <span>Popular Search Topics &amp; Related Queries</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Direct guides and tools matching real user searches on Google Search Console
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B7FF32] hover:underline"
            >
              <span>Explore All Guides &amp; Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {searchKeywords.map((kw, i) => (
              <Link
                key={i}
                href={kw.href}
                className="px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-[#B7FF32]/10 border border-white/[0.06] hover:border-[#B7FF32]/30 text-xs text-zinc-300 hover:text-[#B7FF32] font-mono transition-all"
              >
                #{kw.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
