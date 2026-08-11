import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram Media Downloader – Save Telegram Media | TeleTorrent",
  description: "Download Telegram media, photos, audio, and videos flawlessly. TeleTorrent helps you save high-res media straight from Telegram into your gallery.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-media-downloader",
  },
  openGraph: {
    title: "Telegram Media Downloader – Save Telegram Media | TeleTorrent",
    description: "Download Telegram media, photos, audio, and videos flawlessly. TeleTorrent helps you save high-res media straight from Telegram.",
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
            Don't rely on Telegram's cache. With our Telegram media downloader, you can permanently save audio tracks, voice notes, and high-resolution images straight to your internal storage or SD card.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Fast Media Extractions</h2>
          <p className="text-[15px] leading-[1.6]">
            TeleTorrent is optimized for rapid media fetching. Queue up entire albums of media from your Saved Messages and let the app handle downloading everything in bulk while you go about your day.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
