import Link from "next/link"
import Image from "next/image"
import { Check, X, Zap, ArrowRight, AlertTriangle } from "lucide-react"

export function ComparisonSection() {
  const comparisonRows = [
    {
      feature: "Download Bandwidth & Speed",
      telegram: "Throttled to 1–2 MB/s single stream (often <200 KB/s on download bots)",
      teletorrent: "Up to 60+ MB/s uncapped using 16 parallel high-speed data streams",
      highlight: true
    },
    {
      feature: "Background Execution",
      telegram: "Killed immediately by Android battery optimization when screen locks",
      teletorrent: "Protected Foreground Service runs 24/7 with screen off and in pocket",
      highlight: false
    },
    {
      feature: "Network Drop & Auto-Resume",
      telegram: "Restarts from 0% if Wi-Fi or 5G disconnects, losing gigabytes of data",
      teletorrent: "100% byte-perfect auto-resume from the exact paused byte",
      highlight: true
    },
    {
      feature: "File Storage & Media Location",
      telegram: "Hidden in inaccessible protected cache (/Android/data/org.telegram)",
      teletorrent: "Direct export to /Movies and /Downloads (scanned into Gallery & VLC)",
      highlight: false
    },
    {
      feature: "Large 4K Movie & File Limits",
      telegram: "Frequent timeouts and crashes on heavy 2GB–4GB video archives",
      teletorrent: "Engineered specifically for heavy 4K HDR movies, MKV containers, and ZIPs",
      highlight: true
    },
    {
      feature: "Privacy & Connection Security",
      telegram: "Third-party web bots often inspect, store, or log downloaded links",
      teletorrent: "Zero intermediate proxies. Direct encrypted cloud connection",
      highlight: false
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-[#060709] border-t border-white/[0.08] relative overflow-hidden">
      
      {/* Glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-rose-500/5 via-transparent to-[#B7FF32]/8 blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#B7FF32] uppercase tracking-wider mb-4">
            Side-By-Side Reality Check
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Why Standard Telegram Apps Fail at Large Files.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Downloading a 3GB movie shouldn&apos;t feel like a high-stakes gamble. Compare standard native Telegram and third-party web bots with the TeleTorrent TurboStream™ engine.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: The Frustrating Standard Experience */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-rose-950/20 via-[#0D0B0E] to-[#0A0709] border border-rose-900/30 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-rose-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-900/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-zinc-200">Native Telegram &amp; Web Bots</h3>
                    <p className="text-xs text-rose-400/80 font-mono">Throttled &amp; Error-Prone</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold font-mono">
                  The Frustration
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.04] flex items-start gap-3">
                    <div className="p-1 rounded-full bg-rose-500/20 text-rose-400 mt-0.5 shrink-0">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-400 uppercase tracking-wide font-mono">
                        {row.feature}
                      </div>
                      <div className="text-sm text-zinc-300 mt-0.5 leading-snug">
                        {row.telegram}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-900/20 text-xs text-rose-300/70 font-mono text-center">
              Result: Constant failed downloads, wasted 5G data, and battery drain.
            </div>
          </div>

          {/* Card 2: The TeleTorrent Accelerated Solution */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#0F180A]/80 via-[#0B1009] to-[#070B06] border border-[#B7FF32]/30 flex flex-col justify-between relative overflow-hidden shadow-[0_15px_60px_rgba(183,255,50,0.12)]">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#B7FF32]/15 blur-3xl rounded-full pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#B7FF32]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#B7FF32]/10 border border-[#B7FF32]/30 flex items-center justify-center text-[#B7FF32]">
                    <Zap className="w-5 h-5 fill-[#B7FF32]/20" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white">TeleTorrent TurboStream™ Engine</h3>
                    <p className="text-xs text-[#B7FF32] font-mono">Parallel 5G Cloud Acceleration</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#B7FF32]/20 border border-[#B7FF32]/40 text-[#B7FF32] text-xs font-bold font-mono">
                  The Direct Fix
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {comparisonRows.map((row, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3.5 rounded-2xl flex items-start gap-3 transition-colors ${
                      row.highlight 
                        ? "bg-[#B7FF32]/10 border border-[#B7FF32]/30" 
                        : "bg-white/[0.03] border border-white/[0.08]"
                    }`}
                  >
                    <div className="p-1 rounded-full bg-[#B7FF32]/20 text-[#B7FF32] mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#B7FF32] uppercase tracking-wide font-mono">
                        {row.feature}
                      </div>
                      <div className="text-sm text-zinc-100 font-medium mt-0.5 leading-snug">
                        {row.teletorrent}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#B7FF32]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-emerald-400">
                ✓ Available on Google Play Store (100% Free)
              </span>
              <a
                href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#B7FF32] text-black font-extrabold text-xs shadow-md shadow-[#B7FF32]/20 hover:bg-[#c6ff4d] transition-all"
              >
                <div className="w-4 h-4 relative shrink-0">
                  <Image 
                    src="/play-store-icon.png" 
                    alt="Google Play" 
                    width={16} 
                    height={16} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span>Get it on Google Play</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
