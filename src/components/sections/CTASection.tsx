import Link from "next/link"
import Image from "next/image"
import { Film, ArrowRight, Check, Sparkles, ShieldCheck } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[#060709] border-t border-white/[0.08] relative overflow-hidden">
      
      {/* Background glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#B7FF32]/10 via-[#06B6D4]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#0F140E] via-[#0A0D09] to-[#060806] border border-[#B7FF32]/30 shadow-[0_20px_80px_rgba(183,255,50,0.15)] text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B7FF32]/10 border border-[#B7FF32]/30 text-xs font-mono text-[#B7FF32] uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Android Release</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            Ready to Download Telegram Movies at Full 5G Speed?
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Install TeleTorrent now directly from the official Google Play Store. Enjoy uncapped 16-channel TurboStream™ parallel downloads, byte-level auto-resume, and direct phone gallery export across Jio 5G, Airtel 5G, and high-speed Wi-Fi.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Google Play Store Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#B7FF32] hover:bg-[#c6ff4d] text-black font-extrabold text-base px-9 py-4 rounded-2xl shadow-[0_12px_40px_rgba(183,255,50,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="w-6 h-6 relative shrink-0">
                <Image 
                  src="/play-store-icon.png" 
                  alt="Google Play" 
                  width={24} 
                  height={24} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="text-left flex flex-col leading-tight">
                <span className="text-[10px] uppercase font-bold tracking-wider text-black/70">Available Now On</span>
                <span className="text-base font-black text-black">Google Play Store</span>
              </div>
            </a>

            {/* Movie Downloader Hub */}
            <Link
              href="/telegram-movie-downloader"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-bold text-sm px-7 py-4 rounded-2xl backdrop-blur-md transition-all"
            >
              <Film className="w-4 h-4 text-[#B7FF32]" />
              <span>Explore Movie Downloader</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </div>

          {/* Verification specs */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400 font-mono">
            <span className="flex items-center gap-1.5 text-zinc-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B7FF32]" /> Google Play Protect Verified
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-zinc-200">
              <Check className="w-3.5 h-3.5 text-cyan-400" /> Android 8.0 to 15+
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-zinc-200">
              <Check className="w-3.5 h-3.5 text-emerald-400" /> Direct MX Player &amp; VLC Playback
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
