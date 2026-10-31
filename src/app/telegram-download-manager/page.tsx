import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"
import { Layers, ShieldCheck, ArrowRight, Sparkles, SlidersHorizontal, BatteryCharging, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Telegram Download Manager – 16-Stream Queue & Resume App | TeleTorrent",
  description: "The premier Telegram download manager for Android. Control your downloads with priority queuing, live bandwidth graphs, and byte-level automatic resume for 5G networks.",
  keywords: "telegram download manager, telegram download manager android, telegram download queue, resume telegram download, telegram download manager google play, fast telegram download manager",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-download-manager",
  },
  openGraph: {
    title: "Telegram Download Manager – 16-Stream Queue & Resume App | TeleTorrent",
    description: "The premier Telegram download manager for Android. Control your downloads with priority queuing, live bandwidth graphs, and byte-level automatic resume for 5G networks.",
    url: "https://www.teletorrent.me/telegram-download-manager",
    type: "website",
  }
}

export default function TelegramDownloadManagerPage() {
  const managerFaqs = [
    {
      q: "How does TeleTorrent prevent downloads from stopping when minimized?",
      a: "TeleTorrent uses an official Android Foreground Service and persistent system notification with partial CPU wake-locks. This prevents aggressive OS battery managers (MIUI, OxygenOS, OneUI) from killing the download thread while you lock your phone or switch apps."
    },
    {
      q: "Can I manage sequential and parallel download queues?",
      a: "Yes. TeleTorrent gives you full control over concurrent tasks. You can choose to download 1 file at maximum full 5G bandwidth (up to 60+ MB/s) or allocate parallel channels across multiple queued items."
    },
    {
      q: "What happens if my connection drops at 99%?",
      a: "TeleTorrent's byte-level auto-resume checks the local file byte offset against Telegram cloud storage chunks. When your network reconnects, it resumes from the exact remaining megabytes instead of starting from zero."
    },
    {
      q: "Does it support custom storage paths and SD cards?",
      a: "Yes. You can route downloaded movies, documents, and archives directly to your internal storage (/Movies, /Download) or external MicroSD card with standard Android Storage Access Framework permissions."
    }
  ]

  return (
    <>
      <HeroSection 
        title="Telegram Download Manager" 
        subtitle="Desktop-class download management on Android. Intelligent queuing, real-time bandwidth metrics, and byte-level auto-resume across India." 
      />
      <ComparisonSection />
      
      {/* Deep Educational & Guide Section */}
      <section className="bg-[#000000] py-20 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[880px] text-[#8D919B]">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101114] border border-[#141518] text-[11px] font-mono tracking-widest text-[#B7FF32] font-semibold uppercase mb-4">
            ADVANCED DOWNLOAD CONTROL
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#F5F5F5] mb-6 tracking-tight leading-[1.2]">
            Total Command Over Every Byte, Stream, and Connection
          </h2>
          
          <p className="text-[16px] leading-[1.7] mb-8">
            Mobile operating systems are notorious for killing long background downloads to preserve battery. Traditional chat apps drop connections without preserving state, forcing you to re-download 3GB movie files from scratch. TeleTorrent replaces fragile browser bots with a dedicated, enterprise-grade download manager for Android.
          </p>

          {/* 3 Core Architecture Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-[#0B0C0E] border border-[#141518] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#B7FF32]/10 border border-[#B7FF32]/30 text-[#B7FF32] flex items-center justify-center font-bold font-mono mb-4">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Priority Queuing</h3>
              <p className="text-sm leading-relaxed">
                Reorder active downloads on the fly. Prioritize critical work files before heavy media batches.
              </p>
            </div>

            <div className="bg-[#0B0C0E] border border-[#141518] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center font-bold font-mono mb-4">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Battery Shield</h3>
              <p className="text-sm leading-relaxed">
                Android Foreground Service keeps streams alive without excessive CPU battery drain.
              </p>
            </div>

            <div className="bg-[#0B0C0E] border border-[#141518] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center font-bold font-mono mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Auto-Reconnect</h3>
              <p className="text-sm leading-relaxed">
                Seamlessly switches between Jio 5G, Airtel 5G, and home Wi-Fi without corrupting in-flight files.
              </p>
            </div>
          </div>

          {/* Google Play CTA Banner */}
          <div className="rounded-3xl p-8 bg-gradient-to-r from-[#0F140E] via-[#0A0D09] to-[#070A0F] border border-[#B7FF32]/30 flex flex-col sm:flex-row items-center justify-between gap-6 my-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Install TeleTorrent on Google Play</h3>
              <p className="text-sm text-zinc-400">Unlock desktop-grade download speeds on your Android phone.</p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#B7FF32] hover:bg-[#c6ff4d] text-black font-extrabold px-7 py-3.5 rounded-2xl shadow-lg shadow-[#B7FF32]/25 shrink-0 transition-all"
            >
              <div className="w-5 h-5 relative shrink-0">
                <Image src="/play-store-icon.png" alt="Google Play" width={20} height={20} className="w-full h-full object-contain" />
              </div>
              <span>Get on Google Play</span>
            </a>
          </div>

        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />

      {/* Download Manager FAQs */}
      <section className="bg-[#000000] py-20 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[800px]">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#F5F5F5] mb-3">
              Telegram Download Manager FAQs
            </h2>
            <p className="text-[#8D919B] text-[15px]">
              Frequently asked questions about managing and queuing large Telegram downloads.
            </p>
          </div>

          <div className="space-y-4">
            {managerFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0B0C0E] border border-[#141518] rounded-[16px] p-6 hover:border-[#22252A] transition-colors"
              >
                <h3 className="text-[17px] font-bold text-[#F5F5F5] mb-2">{faq.q}</h3>
                <p className="text-[#8D919B] text-[14px] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
