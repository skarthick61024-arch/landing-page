import { 
  Zap, 
  BatteryCharging, 
  RotateCcw, 
  FolderCheck, 
  PlaySquare, 
  ShieldCheck
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#B7FF32]" />,
      title: "TurboStream™ Multi-Threaded 5G Acceleration",
      description: "Proprietary parallel data streaming technology that eliminates download bottlenecks and saturates high-speed Jio True 5G, Airtel 5G Plus, and fiber connections across India.",
      tag: "5G Speed Tech",
      visual: (
        <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/[0.06] font-mono text-[11px] text-zinc-400">
          <div className="flex justify-between text-[#B7FF32] font-bold mb-1">
            <span>TURBOSTREAM ACTIVE</span>
            <span>54.8 MB/s</span>
          </div>
          <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-1.5 rounded-full bg-[#B7FF32]/80"></div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: <BatteryCharging className="w-6 h-6 text-cyan-400" />,
      title: "Android Foreground Service & Battery Shield",
      description: "Runs as an authorized Android Foreground Service with low CPU wake-locks. Never gets killed by aggressive OEM battery managers (MIUI, Samsung OneUI, ColorOS) when your phone screen is off.",
      tag: "Background Tech",
      visual: (
        <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/[0.06] font-mono text-[11px] text-zinc-400">
          <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>WAKE_LOCK ACTIVE • SCREEN OFF</span>
          </div>
          <div className="text-zinc-500 text-[10px]">Zero battery throttling applied</div>
        </div>
      )
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-amber-400" />,
      title: "Zero Data Loss Byte-Level Auto-Resume",
      description: "Lost signal in an elevator or switched between 5G and home Wi-Fi? TeleTorrent saves downloaded chunks to persistent storage and resumes from the exact byte without restarting.",
      tag: "Resume Engine",
      visual: (
        <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/[0.06] font-mono text-[11px] text-zinc-400">
          <div className="flex justify-between text-amber-400 font-bold mb-1">
            <span>PAUSED: 2.34 GB / 3.40 GB</span>
            <span>RECONNECTED</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="w-[68%] bg-amber-400 h-full"></div>
          </div>
        </div>
      )
    },
    {
      icon: <FolderCheck className="w-6 h-6 text-emerald-400" />,
      title: "Direct Gallery & SD Card Auto-Export",
      description: "Bypasses inaccessible Android hidden caches. TeleTorrent writes directly to your public Movies and Downloads folders, automatically registering files into VLC, MX Player, and the Gallery.",
      tag: "Storage Direct",
      visual: (
        <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/[0.06] font-mono text-[11px] text-zinc-400">
          <div className="text-emerald-400 font-bold truncate">/storage/emulated/0/Movies/TeleTorrent</div>
          <div className="text-zinc-500 text-[10px] mt-1">Instant Media Scanner broadcast fired</div>
        </div>
      )
    },
    {
      icon: <PlaySquare className="w-6 h-6 text-violet-400" />,
      title: "Stream While Downloading (Preview Engine)",
      description: "Downloads sequential video headers first, allowing you to preview 4K HDR and 1080p movies in real-time before the entire multi-gigabyte file finishes downloading.",
      tag: "Media Preview",
      visual: (
        <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/[0.06] font-mono text-[11px] text-zinc-400">
          <div className="flex items-center justify-between text-violet-300 font-bold">
            <span>READY TO STREAM</span>
            <span>4K 60FPS MKV</span>
          </div>
          <div className="text-zinc-500 text-[10px] mt-1">Preserves Hindi, English, Tamil dubs</div>
        </div>
      )
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: "Direct End-to-End Cloud Security",
      description: "No intermediate proxy servers, no third-party bots, and no logging. All traffic flows encrypted directly between your Android device and official cloud infrastructure.",
      tag: "100% Privacy",
      visual: (
        <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/[0.06] font-mono text-[11px] text-zinc-400">
          <div className="flex items-center gap-1.5 text-blue-400 font-bold">
            <span>DIRECT SECURE PIPELINE [ENCRYPTED]</span>
          </div>
          <div className="text-zinc-500 text-[10px] mt-1">Zero intermediary data retention</div>
        </div>
      )
    }
  ]

  return (
    <section id="features" className="py-24 md:py-32 bg-[#060709] border-t border-white/[0.08] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#B7FF32] uppercase tracking-wider mb-4">
            Engineered For Heavy Media
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Built from the Ground Up for Massive Telegram Downloads.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Every layer of TeleTorrent is optimized to extract files, 4K movies, and heavy archives from Telegram at maximum speed and reliability across India.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="rounded-3xl p-7 bg-[#0B0D12] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-400 group-hover:text-white transition-colors">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#B7FF32] transition-colors leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              {/* Technical Visual Widget */}
              <div>
                {feature.visual}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
