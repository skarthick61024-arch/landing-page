import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection({
  title = "TeleTorrent – Fast Telegram Downloader",
  subtitle = "Download movies, 4K videos, documents, and files directly from your Telegram Saved Messages with TeleTorrent. Fast, uncapped downloads with resume support and background downloading for Android."
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-[#000000] pt-[80px] md:pt-[100px] pb-[100px] overflow-hidden flex flex-col items-center relative">
      
      {/* Subtle background glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(147,51,234,0.12)_0%,_transparent_70%)] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-5 md:px-12 max-w-[1280px] flex flex-col items-center text-center relative z-10">
        
        {/* Badge */}
        <div className="bg-[#101114] border border-[#141518] text-[#8D919B] text-[12px] font-medium px-4 py-1.5 rounded-full mb-8 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#B7FF32] rounded-full shadow-[0_0_8px_rgba(183,255,50,0.6)] animate-pulse"></div>
          Official TeleTorrent Android Downloader
        </div>

        {/* Headline */}
        <h1 className="text-[38px] md:text-[56px] lg:text-[64px] font-bold text-[#F5F5F5] tracking-tight mb-6 max-w-[950px] leading-[1.1]">
          {title}
        </h1>

        {/* Supporting text */}
        <p className="text-[15px] md:text-[17px] text-[#8D919B] leading-[1.6] max-w-[620px] mx-auto mb-10">
          {subtitle}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col items-center gap-6 mb-16 md:mb-24 w-full justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="/teletorrent.apk"
              download
              className="w-full sm:w-auto rounded-full bg-[#B7FF32] text-[#000000] hover:bg-[#a3e62c] font-bold px-8 h-[52px] md:h-[56px] text-[15px] transition-all flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(183,255,50,0.25)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download TeleTorrent APK (Free)
            </a>
            <Link
              href="/telegram-movie-downloader"
              className="w-full sm:w-auto rounded-full bg-white/5 border border-white/20 text-[#F5F5F5] hover:bg-white/10 hover:border-white/30 font-semibold px-8 h-[52px] md:h-[56px] text-sm md:text-base transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF32]"
            >
              Movie Downloader →
            </Link>
          </div>

          {/* Trust and Safety Rating Badge */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#8D919B]">
            <span className="flex items-center gap-1.5 text-[#F5F5F5]">
              <span className="text-[#B7FF32]">✓</span> v1.2.0 Direct APK
            </span>
            <span>•</span>
            <span>12 MB</span>
            <span>•</span>
            <span>Android 8.0+</span>
            <span>•</span>
            <span className="text-emerald-400">100% Virus Free</span>
          </div>
          
          <div className="text-[12px] text-[#8D919B] max-w-[500px] text-center px-4">
            TeleTorrent is an independent third-party application and is not affiliated with, endorsed by, or sponsored by Telegram.
          </div>
        </div>

        {/* Abstract UI Component */}
        <div className="w-full max-w-[900px] bg-[#0B0C0E] border border-[#141518] rounded-[24px] md:rounded-[32px] p-4 md:p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)] flex flex-col gap-6 select-none relative">
          
          {/* Header row */}
          <div className="flex justify-between items-end border-b border-[#141518] pb-4 px-2">
            <h2 className="text-[#F5F5F5] font-bold text-[18px] md:text-[22px]">TeleTorrent Active Queue</h2>
            <div className="flex gap-6 md:gap-10 text-right">
              <div>
                <div className="text-[#8D919B] text-[10px] md:text-[11px] font-medium mb-1">Live Speed</div>
                <div className="text-[#B7FF32] text-[14px] md:text-[16px] font-bold font-mono">48.2 MB/s</div>
              </div>
              <div>
                <div className="text-[#8D919B] text-[10px] md:text-[11px] font-medium mb-1">Active</div>
                <div className="text-[#F5F5F5] text-[14px] md:text-[16px] font-bold">2</div>
              </div>
              <div>
                <div className="text-[#8D919B] text-[10px] md:text-[11px] font-medium mb-1">Queue</div>
                <div className="text-[#F5F5F5] text-[14px] md:text-[16px] font-bold">1</div>
              </div>
            </div>
          </div>

          {/* Cards container */}
          <div className="flex flex-col gap-4">
            
            {/* Card 1: Active Inception Movie Download */}
            <div className="bg-[#101114] border border-[#141518] rounded-[16px] p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[10px] bg-[#141518] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#8D919B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[#F5F5F5] text-[14px] md:text-[15px] font-semibold truncate max-w-[200px] sm:max-w-[300px]">
                      Inception.2010.IMAX.2160p.HDR.x265.mkv
                    </div>
                    <div className="text-[#8D919B] text-[12px] mt-0.5">
                      1.28 GB / 1.78 GB · 28.5 MB/s
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#B7FF32] text-[12px] font-mono font-medium bg-[#B7FF32]/10 px-2 py-0.5 rounded-full border border-[#B7FF32]/20">
                    72%
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#141518] h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#B7FF32] to-[#00c7e8] h-full w-[72%] rounded-full"></div>
              </div>
            </div>

            {/* Card 2: Completed Archive */}
            <div className="bg-[#101114] border border-[#141518] rounded-[16px] p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[10px] bg-[#141518] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#8D919B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[#F5F5F5] text-[14px] md:text-[15px] font-semibold truncate max-w-[200px] sm:max-w-[300px]">
                      Project_Source_Assets_2026.zip
                    </div>
                    <div className="text-[#8D919B] text-[12px] mt-0.5">
                      860 MB · Saved to Downloads/TeleTorrent
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 text-[12px] font-mono font-medium bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                    ✓ Ready
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#141518] h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-full rounded-full"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
