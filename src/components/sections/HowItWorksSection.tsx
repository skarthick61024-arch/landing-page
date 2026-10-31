import { Send, Smartphone, DownloadCloud, CheckCircle2, Film, FolderDown } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: <Send className="w-6 h-6 text-[#B7FF32]" />,
      title: "Forward to Saved Messages",
      subtitle: "In the official Telegram app",
      description: "Find any movie, video, document, or ZIP file in your channels, groups, or chats. Simply forward it to your personal 'Saved Messages'.",
      badge: "Telegram Step",
      preview: (
        <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.08] text-xs font-mono space-y-2">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-zinc-500">Channel ➔ Saved Messages</span>
            <span className="text-[#B7FF32]">✓ Forwarded</span>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.05] flex items-center gap-2.5">
            <Film className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="truncate text-zinc-200 text-[11px]">Dune.Part.Two.2024.4K.HDR.mkv</div>
          </div>
          <div className="text-[10px] text-zinc-500">Size: 3.2 GB • Multi-Audio (Hindi+Eng)</div>
        </div>
      )
    },
    {
      step: "02",
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      title: "Open TeleTorrent App",
      subtitle: "Instant cloud synchronization",
      description: "Launch TeleTorrent on your Android phone. All files from your Saved Messages appear instantly organized with high-resolution thumbnails, bitrates, and exact file sizes.",
      badge: "TeleTorrent Sync",
      preview: (
        <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.08] text-xs font-mono space-y-2">
          <div className="flex items-center justify-between text-cyan-400">
            <span>SAVED MESSAGES QUEUE</span>
            <span className="text-emerald-400 font-bold">12 Ready</span>
          </div>
          <div className="p-2 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between text-[11px]">
            <span className="truncate text-zinc-200">Dune.Part.Two.2024.4K.mkv</span>
            <span className="text-[#B7FF32] font-bold">3.2 GB</span>
          </div>
          <div className="text-[10px] text-zinc-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Metadata & Codecs Verified</span>
          </div>
        </div>
      )
    },
    {
      step: "03",
      icon: <DownloadCloud className="w-6 h-6 text-emerald-400" />,
      title: "Tap Download & Play in Gallery",
      subtitle: "16-stream 5G acceleration & export",
      description: "Tap Download. 16 parallel TurboStream™ channels accelerate the transfer to maximum 5G bandwidth. The file is saved directly to your physical Gallery & Movies directory for instant playback in VLC & MX Player.",
      badge: "Direct Playback",
      preview: (
        <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.08] text-xs font-mono space-y-2">
          <div className="flex items-center justify-between text-emerald-400 font-bold">
            <span>DOWNLOAD COMPLETE</span>
            <span>100%</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-zinc-300">
            Saved to: /Movies/TeleTorrent/
          </div>
          <div className="text-[10px] text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Visible in MX Player, VLC, and Android Gallery</span>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#060709] border-t border-white/[0.08] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#B7FF32] uppercase tracking-wider mb-4">
            3-Step Seamless Flow
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            How TeleTorrent Works in 3 Simple Steps.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            No complicated bot commands, no URL shorteners, no subscription gates. Download directly to your Android device in seconds.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div 
              key={idx}
              className="rounded-3xl p-7 bg-[#0B0D12] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <div>
                {/* Step pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-400">
                      STEP {item.step}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#B7FF32] uppercase font-bold tracking-wider mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* UI Preview Box */}
              <div>
                {item.preview}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
