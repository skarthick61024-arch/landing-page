import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram Media Downloader – High-Res Media | TeleTorrent",
  description: "The premier Telegram media downloader. Permanently save audio tracks, voice notes, and high-resolution images from your Saved Messages to your gallery.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-media-downloader",
  },
  openGraph: {
    title: "Telegram Media Downloader – High-Res Media | TeleTorrent",
    description: "The premier Telegram media downloader. Permanently save audio tracks, voice notes, and high-resolution images from your Saved Messages to your gallery.",
    url: "https://www.teletorrent.me/telegram-media-downloader",
    type: "website",
  }
}

export default function TelegramMediaDownloaderPage() {
  return (
    <>
      <HeroSection 
        title="Telegram Media Downloader" 
        subtitle="Save high-resolution photos, long audio tracks, and heavy video media from Telegram instantly." 
      />
      <ComparisonSection />
      
      <section className="bg-[#000000] py-16 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[800px] text-[#8D919B]">
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Dedicated Media Saver</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            Don't rely on Telegram's temporary cache to keep your important memories safe. With our dedicated Telegram media downloader, you can permanently save audio tracks, important voice notes, and uncompressed, high-resolution images straight to your internal storage or SD card. By working directly with your personal Saved Messages, you can easily curate exactly which media files you want to keep offline without worrying about them disappearing.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Fast Media Extractions</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            TeleTorrent is optimized specifically for rapid media fetching. You can queue up entire albums of media from your Saved Messages and let the application handle downloading everything in bulk while you go about your day. Unlike standard chat apps, our Telegram media downloader doesn't compress your files—you get the exact original quality you forwarded to your Saved Messages.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Protect Your Memories</h2>
          <p className="text-[15px] leading-[1.6]">
            Whether it's a massive collection of vacation photos, a folder of uncompressed FLAC audio files, or a series of important voice memos, our downloader ensures your media is saved safely and permanently on your device.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
