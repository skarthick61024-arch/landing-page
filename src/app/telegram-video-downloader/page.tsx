import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"
import { Film, Video, ShieldCheck, Check, ArrowRight, Sparkles, PlayCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Telegram Video Downloader – Save HD & 4K Telegram Videos | TeleTorrent",
  description: "The premier Telegram video downloader for Android. Save high-definition MP4s, 60fps MKV clips, and web series directly to your phone gallery with TurboStream parallel acceleration.",
  keywords: "telegram video downloader, download telegram videos, telegram video download app, telegram 4k video download, save telegram video to gallery, telegram video downloader android, fast telegram video saver",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-video-downloader",
  },
  openGraph: {
    title: "Telegram Video Downloader – Save HD & 4K Telegram Videos | TeleTorrent",
    description: "The premier Telegram video downloader for Android. Save high-definition MP4s, 60fps MKV clips, and web series directly to your phone gallery with TurboStream parallel acceleration.",
    url: "https://www.teletorrent.me/telegram-video-downloader",
    type: "website",
  }
}

export default function TelegramVideoDownloaderPage() {
  const videoFaqs = [
    {
      q: "Does TeleTorrent preserve original 4K and 1080p video quality?",
      a: "Yes. Unlike web-based conversion tools that compress video bitrate, TeleTorrent downloads the exact bit-for-bit file stream directly from Telegram cloud nodes, preserving HDR color metadata, 60fps frame rates, and multi-channel surround sound."
    },
    {
      q: "Why do Telegram videos fail to save to my phone gallery in standard Telegram?",
      a: "Standard Telegram stores streamed media in a hidden internal sandbox cache. If your device runs low on storage, Telegram purges this cache without warning. TeleTorrent writes directly to your device's physical /Movies and /Download folders, ensuring videos appear in Google Photos, VLC, and MX Player permanently."
    },
    {
      q: "Can I download large 2GB to 4GB videos in the background?",
      a: "Yes. TeleTorrent utilizes an official Android Foreground Service with low-power wake-locks. Your video continues downloading at maximum 5G speeds even when your screen is locked or while you use other apps."
    },
    {
      q: "Does it support embedded subtitles and dual-audio tracks?",
      a: "Yes! All MKV and MP4 container elements—including soft subtitles (SRT, ASS) and multi-audio language tracks (Hindi, Tamil, Telugu, English)—are 100% preserved."
    }
  ]

  return (
    <>
      <HeroSection 
        title="Telegram Video Downloader" 
        subtitle="Download Telegram videos in original uncompressed quality. Background saving, pause & resume, and direct phone gallery export across India." 
      />
      <ComparisonSection />
      
      {/* Deep Educational & Guide Section for High SEO Indexing */}
      <section className="bg-[#000000] py-20 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[880px] text-[#8D919B]">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101114] border border-[#141518] text-[11px] font-mono tracking-widest text-[#B7FF32] font-semibold uppercase mb-4">
            ULTRA-HD VIDEO EXTRACTION
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#F5F5F5] mb-6 tracking-tight leading-[1.2]">
            The Ultimate Android Engine for Telegram Videos &amp; Series
          </h2>
          
          <p className="text-[16px] leading-[1.7] mb-8">
            Telegram is home to millions of independent video creators, educators, and cinematic channels. However, downloading heavy 1080p and 4K videos on mobile is often frustrating due to connection drops, app sleep freezes, and hidden cache directories. TeleTorrent turns Telegram into a high-performance offline video hub.
          </p>

          {/* 3 Step Tutorial */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-[#0B0C0E] border border-[#141518] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#B7FF32]/10 border border-[#B7FF32]/30 text-[#B7FF32] flex items-center justify-center font-bold font-mono mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Forward Video</h3>
              <p className="text-sm leading-relaxed">
                Forward any video clip, episode, or tutorial to your personal <strong>Saved Messages</strong> chat.
              </p>
            </div>

            <div className="bg-[#0B0C0E] border border-[#141518] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center font-bold font-mono mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sync in TeleTorrent</h3>
              <p className="text-sm leading-relaxed">
                Open TeleTorrent on Android. Your video appears automatically with resolution and audio details.
              </p>
            </div>

            <div className="bg-[#0B0C0E] border border-[#141518] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center font-bold font-mono mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Save to Gallery</h3>
              <p className="text-sm leading-relaxed">
                Tap Download. 16 parallel channels accelerate the transfer and save directly to your gallery folder.
              </p>
            </div>
          </div>

          {/* Google Play CTA Banner */}
          <div className="rounded-3xl p-8 bg-gradient-to-r from-[#0F140E] via-[#0A0D09] to-[#070A0F] border border-[#B7FF32]/30 flex flex-col sm:flex-row items-center justify-between gap-6 my-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Download TeleTorrent on Google Play</h3>
              <p className="text-sm text-zinc-400">Experience high-speed video saving with zero subscription tiers.</p>
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

      {/* Video FAQs */}
      <section className="bg-[#000000] py-20 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[800px]">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#F5F5F5] mb-3">
              Telegram Video Downloader FAQs
            </h2>
            <p className="text-[#8D919B] text-[15px]">
              Frequently asked questions about downloading and preserving Telegram video files.
            </p>
          </div>

          <div className="space-y-4">
            {videoFaqs.map((faq, index) => (
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
