import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { HelpCircle, ArrowRight } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "What is TeleTorrent?",
      answer: "TeleTorrent is an ultra-fast Android download manager and Telegram downloader powered by our proprietary TurboStream™ parallel engine. It uses 16 concurrent acceleration channels, background downloading, byte-level auto-resume, and direct export to your phone gallery to make downloading 4K movies and large files effortless."
    },
    {
      question: "How do I download Telegram movies to my phone gallery in India?",
      answer: "Forward the movie file (MKV, MP4, etc.) to your Telegram Saved Messages chat. Open TeleTorrent on your Android device, and tap Download. The movie is accelerated across 16 parallel channels and saved directly to your physical /Movies folder, becoming instantly visible in your default Gallery, VLC, and MX Player."
    },
    {
      question: "Does TeleTorrent maximize Jio 5G and Airtel 5G download speeds?",
      answer: "Yes! Standard Telegram throttles single-stream client connections. TeleTorrent opens 16 simultaneous TurboStream parallel channels to bypass client limits and achieve peak download speeds up to 60+ MB/s on Jio 5G, Airtel 5G, and high-speed fiber Wi-Fi networks across India without paying for third-party bots."
    },
    {
      question: "Can I resume interrupted or paused Telegram movie downloads?",
      answer: "Yes. TeleTorrent provides 100% byte-perfect auto-resume. If your connection drops in an elevator or switches between mobile data and Wi-Fi, the download pauses automatically and resumes from the exact byte where it left off, saving gigabytes of cellular data."
    },
    {
      question: "Does TeleTorrent download in the background when my phone screen is locked?",
      answer: "Yes. TeleTorrent runs as an official Android Foreground Service with low-power wake-locks, ensuring heavy multi-gigabyte files download reliably even when your screen is locked or while you are using other apps like YouTube or Instagram."
    },
    {
      question: "Is TeleTorrent safe and free on Google Play Store?",
      answer: "Yes, TeleTorrent is 100% free to download on the Google Play Store with zero subscription tiers. It is verified by Google Play Protect, ensuring zero malware, zero third-party proxies, and safe direct cloud connections."
    },
    {
      question: "Are multi-audio tracks and embedded subtitles preserved?",
      answer: "Yes. TeleTorrent downloads the exact bit-for-bit MKV or MP4 container without re-encoding, preserving English, Hindi, Tamil, Telugu, and other multi-audio dubs, along with SRT/ASS subtitle tracks for cinema-grade playback."
    },
    {
      question: "What file types can I download from Telegram with TeleTorrent?",
      answer: "TeleTorrent supports all formats sent over Telegram: 4K MKV/MP4 videos, large ZIP and RAR archives, high-definition software packages, lossless FLAC audio, PDF documents, and photo albums up to 4GB+ per file."
    }
  ]

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#060709] border-t border-white/[0.08] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#B7FF32] uppercase tracking-wider mb-4">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Everything you need to know about downloading movies, videos, and large files from Telegram with TeleTorrent.
          </p>
        </div>

        {/* Accordion */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#0B0D12] border border-white/[0.08]">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-white/[0.06] last:border-b-0 pb-2"
              >
                <AccordionTrigger className="text-white hover:text-[#B7FF32] text-left text-base sm:text-lg font-bold py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-zinc-400">
          <span>Still have questions about TeleTorrent?</span>
          <Link href="/help" className="text-[#B7FF32] font-semibold hover:underline inline-flex items-center gap-1">
            Visit our Help Center &amp; Support Hub <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  )
}
