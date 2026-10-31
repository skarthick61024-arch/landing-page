"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Wifi, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  Film, 
  FolderArchive, 
  Smartphone,
  Sparkles,
  Layers,
  HardDrive
} from "lucide-react"

interface DownloadItem {
  id: string
  name: string
  category: "movie" | "archive" | "series"
  totalSize: string
  totalBytes: number
  format: string
  resolution?: string
  initialProgress: number
  speed: string
  eta: string
}

const DEMO_FILES: DownloadItem[] = [
  {
    id: "movie",
    name: "Kalki.2898.AD.2024.4K.UHD.Multi.Audio.Hindi.Tamil.Telugu.mkv",
    category: "movie",
    totalSize: "3.6 GB",
    totalBytes: 3600,
    format: "MKV / 5.1 Dub",
    resolution: "4K UHD",
    initialProgress: 68,
    speed: "54.2 MB/s",
    eta: "22s remaining"
  },
  {
    id: "series",
    name: "Panchayat.Season.3.Complete.1080p.HDR.mkv",
    category: "series",
    totalSize: "2.4 GB",
    totalBytes: 2400,
    format: "MKV 1080p Web-DL",
    resolution: "1080p FHD",
    initialProgress: 54,
    speed: "58.4 MB/s",
    eta: "14s remaining"
  },
  {
    id: "archive",
    name: "Complete_Data_Science_AI_Masterclass_India.zip",
    category: "archive",
    totalSize: "1.8 GB",
    totalBytes: 1800,
    format: "ZIP Archive",
    initialProgress: 42,
    speed: "48.6 MB/s",
    eta: "18s remaining"
  }
]

export function HeroSection({
  title = "TeleTorrent – Fast Telegram Movie & Video Downloader",
  subtitle = "Download movies, 4K videos, series, documents, and files directly from your Telegram Saved Messages to your phone gallery. Fast uncapped 5G downloads with auto-resume across India."
}: {
  title?: string;
  subtitle?: string;
}) {
  const [selectedFile, setSelectedFile] = useState<DownloadItem>(DEMO_FILES[0])
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(DEMO_FILES[0].initialProgress)
  const [activeStreams, setActiveStreams] = useState(16)
  const [simulatedDrop, setSimulatedDrop] = useState(false)

  // Simulation timer for progress
  useEffect(() => {
    if (isPaused || simulatedDrop) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) return 20 // Loop for demo
        return Number((prev + 0.4).toFixed(1))
      })
    }, 250)

    return () => clearInterval(interval)
  }, [isPaused, simulatedDrop])

  const handleSelectFile = (file: DownloadItem) => {
    setSelectedFile(file)
    setProgress(file.initialProgress)
    setIsPaused(false)
    setSimulatedDrop(false)
  }

  const handleToggleDrop = () => {
    if (!simulatedDrop) {
      setSimulatedDrop(true)
      setIsPaused(true)
    } else {
      setSimulatedDrop(false)
      setIsPaused(false)
    }
  }

  return (
    <section className="relative pt-12 md:pt-16 pb-20 md:pb-32 overflow-hidden bg-[#060709]">
      
      {/* Background glow meshes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#B7FF32]/12 via-[#06B6D4]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-40 right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-[-15%] w-[450px] h-[450px] bg-[#B7FF32]/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle Grid Matrix Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Top Eyebrow Chip */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300 backdrop-blur-md shadow-[0_0_20px_rgba(183,255,50,0.15)] hover:border-[#B7FF32]/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#B7FF32] animate-pulse"></span>
            <span className="font-semibold text-white">#1 Telegram Downloader for India</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400 font-mono">Jio 5G &amp; Airtel 5G Turbo Acceleration</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Download Telegram Movies &amp; 4K Files at{" "}
            <span className="bg-gradient-to-r from-[#B7FF32] via-[#5eead4] to-[#38bdf8] bg-clip-text text-transparent">
              Full 5G Speed.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300/90 leading-relaxed max-w-2xl mx-auto font-normal">
            No more stalled downloads at 99%. TeleTorrent connects with multi-threaded parallel cloud streams, zero data loss auto-resume, background downloading, and direct export to your Android gallery across India.
          </p>
        </div>

        {/* Primary CTAs: Only Google Play & Hub */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 max-w-md sm:max-w-none mx-auto">
          {/* Google Play Store Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#B7FF32] hover:bg-[#c6ff4d] text-black font-extrabold text-base px-8 py-4 rounded-2xl shadow-[0_10px_35px_rgba(183,255,50,0.35)] hover:shadow-[0_15px_45px_rgba(183,255,50,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#B7FF32]/40"
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
              <span className="text-[10px] uppercase font-bold tracking-wider text-black/70">Install on</span>
              <span className="text-sm font-black text-black">Google Play Store</span>
            </div>
          </a>

          {/* Movie Downloader Link */}
          <Link
            href="/telegram-movie-downloader"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-base px-7 py-4 rounded-2xl backdrop-blur-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF32]"
          >
            <Film className="w-5 h-5 text-[#B7FF32]" />
            <span>Movie Downloader Hub</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </Link>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-zinc-400 hover:text-white font-semibold text-sm px-4 py-4 transition-colors"
          >
            <span>How it Works ↓</span>
          </a>
        </div>

        {/* Trust Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400 font-mono mb-16 max-w-3xl mx-auto">
          <a
            href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-200 hover:text-[#B7FF32] transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-[#B7FF32]" />
            <span>Google Play Protect Verified</span>
          </a>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-zinc-200">
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span>Android 8.0 to 15+</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-zinc-200">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>No Root Required</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-zinc-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct MX / VLC Player Sync</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SIGNATURE INTERACTIVE ELEMENT: The TeleTorrent Live Engine Console */}
        {/* ======================================================== */}
        <div id="engine-demo" className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/[0.05] to-transparent shadow-[0_25px_80px_rgba(0,0,0,0.8)]">
            <div className="bg-[#0B0D12] rounded-[22px] border border-white/[0.08] p-5 sm:p-7 md:p-8 overflow-hidden relative">
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-zinc-400 font-semibold tracking-wider uppercase">
                    TeleTorrent TurboStream™ Live Console
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                    <Wifi className="w-3.5 h-3.5" />
                    <span>Jio 5G / Airtel 5G</span>
                  </div>
                  <div className="text-zinc-400">
                    Streams: <span className="text-[#B7FF32] font-bold">{simulatedDrop ? 0 : activeStreams} Parallel</span>
                  </div>
                </div>
              </div>

              {/* File Selector Tabs */}
              <div className="mt-6 mb-6">
                <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-2.5">
                  Select Download Demo File:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {DEMO_FILES.map((file) => {
                    const isSelected = selectedFile.id === file.id
                    return (
                      <button
                        key={file.id}
                        type="button"
                        onClick={() => handleSelectFile(file)}
                        className={`text-left p-3 rounded-xl border transition-all flex items-start gap-3 ${
                          isSelected 
                            ? "bg-[#B7FF32]/10 border-[#B7FF32]/40 text-white shadow-md shadow-[#B7FF32]/5" 
                            : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                        }`}
                      >
                        <div className={`p-2 rounded-lg mt-0.5 ${isSelected ? "bg-[#B7FF32]/20 text-[#B7FF32]" : "bg-white/[0.05] text-zinc-400"}`}>
                          {file.category === "movie" && <Film className="w-4 h-4" />}
                          {file.category === "series" && <Film className="w-4 h-4 text-cyan-400" />}
                          {file.category === "archive" && <FolderArchive className="w-4 h-4" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold truncate text-zinc-200">{file.name}</div>
                          <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-2 mt-0.5">
                            <span>{file.totalSize}</span>
                            <span>•</span>
                            <span className="text-emerald-400">{file.format}</span>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Active Download State Box */}
              <div className="bg-black/50 border border-white/[0.08] rounded-2xl p-5 mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white truncate max-w-md">{selectedFile.name}</span>
                      {selectedFile.resolution && (
                        <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          {selectedFile.resolution}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-zinc-400 mt-1 flex items-center gap-3">
                      <span>{(selectedFile.totalBytes * (progress / 100)).toFixed(0)} MB / {selectedFile.totalSize}</span>
                      <span>•</span>
                      <span>{simulatedDrop ? "Paused (Connection Dropped)" : isPaused ? "Paused" : selectedFile.eta}</span>
                    </div>
                  </div>

                  {/* Speedometer Gauge */}
                  <div className="text-right flex items-center md:flex-col md:items-end justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Live 5G Speed</span>
                    <span className={`text-xl md:text-2xl font-black font-mono tracking-tight ${
                      simulatedDrop || isPaused ? "text-rose-400" : "text-[#B7FF32]"
                    }`}>
                      {simulatedDrop || isPaused ? "0.0 KB/s" : selectedFile.speed}
                    </span>
                  </div>
                </div>

                {/* Multi-Chunk Parallel Socket Progress Bar */}
                <div className="mb-3">
                  <div className="h-3 w-full bg-white/[0.06] rounded-full overflow-hidden p-0.5 relative">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 relative ${
                        simulatedDrop || isPaused
                          ? "bg-amber-400" 
                          : "bg-gradient-to-r from-emerald-400 via-[#B7FF32] to-cyan-400"
                      }`}
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* 16 Parallel Streaming Visual Indicator */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-zinc-400" />
                      16 Parallel TurboStream Channels:
                    </span>
                    <span className="text-zinc-300 font-bold">{progress.toFixed(1)}% Completed</span>
                  </div>
                  <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5">
                    {Array.from({ length: 16 }).map((_, idx) => {
                      const isChunkActive = !simulatedDrop && !isPaused && (idx / 16) <= (progress / 100)
                      return (
                        <div
                          key={idx}
                          className={`h-3 rounded-sm transition-all duration-200 ${
                            simulatedDrop || isPaused
                              ? "bg-amber-500/30 border border-amber-500/50"
                              : isChunkActive
                              ? "bg-[#B7FF32] shadow-[0_0_8px_rgba(183,255,50,0.4)]"
                              : "bg-white/[0.08]"
                          }`}
                          title={`Channel #${idx + 1}`}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Interactive Simulation Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setIsPaused(!isPaused)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-zinc-200 transition-colors"
                  >
                    {isPaused ? <Play className="w-3.5 h-3.5 text-[#B7FF32]" /> : <Pause className="w-3.5 h-3.5" />}
                    <span>{isPaused ? "Resume Download" : "Pause Download"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleToggleDrop}
                    className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold transition-colors ${
                      simulatedDrop 
                        ? "bg-amber-500/20 border-amber-500/40 text-amber-300" 
                        : "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-zinc-300"
                    }`}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{simulatedDrop ? "Auto-Resume: Reconnected!" : "Test Signal Drop"}</span>
                  </button>
                </div>

                {/* Direct Gallery Notice */}
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span>Direct Export to: <span className="text-white font-bold">Phone Gallery &amp; VLC</span></span>
                </div>
              </div>

              {/* Alert message if drop simulated */}
              {simulatedDrop && (
                <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                    Simulated 5G connection drop: TeleTorrent preserved 100% of downloaded bytes! Click &quot;Auto-Resume&quot; to continue.
                  </span>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
