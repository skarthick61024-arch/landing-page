import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram Video Downloader – Download Telegram Videos | TeleTorrent",
  description: "Download Telegram videos easily with TeleTorrent. Save high-quality videos and MP4s from Telegram directly to your local device storage with resume support.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-video-downloader",
  },
  openGraph: {
    title: "Telegram Video Downloader – Download Telegram Videos | TeleTorrent",
    description: "Download Telegram videos easily with TeleTorrent. Save high-quality videos and MP4s from Telegram directly to your local device.",
    url: "https://www.teletorrent.me/telegram-video-downloader",
    type: "website",
  }
}

export default function TelegramVideoDownloaderPage() {
  return (
    <>
      <HeroSection 
        title="Telegram Video Downloader" 
        subtitle="Download Telegram videos in their original high quality. Background saving, pause and resume, and simple file management." 
      />
      <ComparisonSection />
      
      <section className="bg-[#000000] py-16 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[800px] text-[#8D919B]">
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Best Way to Download Telegram Videos</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            Stop losing your favorite clips in endless chat histories. Our Telegram video downloader lets you save MP4s, MKVs, and high-definition media directly from your Saved Messages to your phone.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Background Video Saving</h2>
          <p className="text-[15px] leading-[1.6]">
            Downloading a 2GB movie file? No problem. TeleTorrent manages background connections flawlessly, allowing you to use other apps while your Telegram video downloads in the background.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
