"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Play, 
  Pause, 
  CheckCircle, 
  HardDrive, 
  Film, 
  FileText, 
  Download, 
  Sparkles,
  Smartphone,
  Layers,
  ArrowRight
} from "lucide-react"

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"downloads" | "saved" | "storage">("downloads")

  return (
    <section id="workspace" className="py-24 md:py-32 bg-[#060709] border-t border-white/[0.08] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#B7FF32]/8 via-cyan-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#B7FF32] uppercase tracking-wider mb-4">
            Official Android Interface
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Designed for Power Users. Clean, Fast, and Native.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Experience complete control over every byte. Monitor active 16-channel TurboStream™ speeds, pause & resume individual chunks, and export directly to your favorite media player.
          </p>

          {/* Interactive Showcase Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab("downloads")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                activeTab === "downloads"
                  ? "bg-[#B7FF32] text-black shadow-lg shadow-[#B7FF32]/20"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/10"
              }`}
            >
              Active Downloads
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                activeTab === "saved"
                  ? "bg-[#B7FF32] text-black shadow-lg shadow-[#B7FF32]/20"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/10"
              }`}
            >
              Saved Messages Sync
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("storage")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                activeTab === "storage"
                  ? "bg-[#B7FF32] text-black shadow-lg shadow-[#B7FF32]/20"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/10"
              }`}
            >
              Storage & Gallery Direct
            </button>
          </div>
        </div>

        {/* The Workspace Container */}
        <div className="max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/[0.05] to-transparent shadow-[0_30px_100px_rgba(0,0,0,0.9)]">
          <div className="bg-[#0B0D12] rounded-[22px] border border-white/[0.08] overflow-hidden">
            
            {/* Top Workspace Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-black/40">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-black p-0.5 border border-[#B7FF32]/40">
                  <Image src="/logo-round.jpg" alt="TeleTorrent" width={28} height={28} className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-none">TeleTorrent Workspace</div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-1">Status: TurboStream Active • 16 Parallel Streams</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="hidden sm:inline text-zinc-400">Total Speed: <span className="text-[#B7FF32] font-bold">54.8 MB/s</span></span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-emerald-400 border border-white/10">Google Play Verified</span>
              </div>
            </div>

            {/* Tab 1: Active Downloads */}
            {activeTab === "downloads" && (
              <div className="p-6 sm:p-8 space-y-4 animate-in fade-in duration-200">
                
                {/* Download Item 1 */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#B7FF32]/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Film className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Oppenheimer.2023.IMAX.4K.HDR.Multi.Audio.mkv</div>
                        <div className="text-xs font-mono text-zinc-400 mt-0.5">2.45 GB / 3.80 GB • MKV 60FPS • 5G TurboStream</div>
                      </div>
                    </div>
                    <div className="text-right flex items-center sm:flex-col sm:items-end justify-between">
                      <span className="text-sm font-bold font-mono text-[#B7FF32]">48.6 MB/s</span>
                      <span className="text-xs font-mono text-zinc-400">ETA 28s</span>
                    </div>
                  </div>

                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-[#B7FF32] rounded-full w-[64%]"></div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>Export Target: /Movies/TeleTorrent</span>
                    <span className="text-emerald-400 font-semibold">Ready to Stream (Header Sequenced)</span>
                  </div>
                </div>

                {/* Download Item 2 */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#B7FF32]/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Interstellar.2014.1080p.Remux.mkv</div>
                        <div className="text-xs font-mono text-zinc-400 mt-0.5">2.10 GB • Multi-Audio (Hindi+Eng) • Download Complete</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                        Exported to Gallery
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-emerald-500 h-2 rounded-full mb-2"></div>

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>SHA-256 Verified (Bit-Perfect)</span>
                    <span className="text-[#B7FF32]">Open in VLC Media Player ➔</span>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 2: Saved Messages */}
            {activeTab === "saved" && (
              <div className="p-6 sm:p-8 space-y-4 animate-in fade-in duration-200">
                <div className="text-xs font-mono text-zinc-400 mb-2">
                  DIRECT TELEGRAM SAVED MESSAGES REPOSITORY (PARALLEL ACCELERATION)
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Film className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-xs font-bold text-white">Avatar_Way_Of_Water_4K.mkv</div>
                        <div className="text-[11px] font-mono text-zinc-400">3.4 GB • Saved 2h ago</div>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-[#B7FF32] text-black font-bold text-xs font-mono">
                      Download
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-amber-400" />
                      <div>
                        <div className="text-xs font-bold text-white">Python_Data_Science_2026.zip</div>
                        <div className="text-[11px] font-mono text-zinc-400">1.8 GB • Saved yesterday</div>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-[#B7FF32] text-black font-bold text-xs font-mono">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Storage */}
            {activeTab === "storage" && (
              <div className="p-6 sm:p-8 space-y-4 animate-in fade-in duration-200">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <HardDrive className="w-4 h-4 text-[#B7FF32]" />
                      <span>Internal Storage Status</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">64.2 GB Free of 128 GB</span>
                  </div>

                  <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-[#B7FF32] rounded-full w-[50%]"></div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    TeleTorrent writes files directly to physical device storage. No intermediate encrypted cache files that hog your internal storage or cause parse errors.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
