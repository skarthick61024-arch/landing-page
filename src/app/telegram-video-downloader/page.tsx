import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram Video Downloader – Save Telegram Videos | TeleTorrent",
  description: "Use TeleTorrent as your Telegram video downloader. Save high-quality MP4s and MKVs directly from your Saved Messages to your Android device for offline viewing.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-video-downloader",
  },
  openGraph: {
    title: "Telegram Video Downloader – Save Telegram Videos | TeleTorrent",
    description: "Use TeleTorrent as your Telegram video downloader. Save high-quality MP4s and MKVs directly from your Saved Messages to your Android device for offline viewing.",
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
            Stop losing your favorite video clips and movies in endless chat histories. Our specialized Telegram video downloader lets you easily save MP4s, MKVs, and high-definition media directly from your own personal Saved Messages straight to your phone's internal storage or SD card. By focusing solely on your Saved Messages, you never have to sift through noisy groups to find the video you want to download.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Background Video Saving</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            Downloading a massive 4K movie file? No problem at all. TeleTorrent manages background connections flawlessly, allowing you to use other apps while your Telegram video downloads in the background. If you lose connection while commuting, our robust resume support ensures your video download pauses and restarts automatically without losing progress or wasting your mobile data.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Build Your Offline Library</h2>
          <p className="text-[15px] leading-[1.6]">
            We've built this Telegram video downloader to handle the largest media files Telegram allows. Just forward the video to your Saved Messages, open TeleTorrent, and start your high-speed download instantly. It's the perfect companion for building your offline media library for long flights or commutes.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
