import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram Downloader – Download Telegram Files | TeleTorrent",
  description: "TeleTorrent is a dedicated Telegram downloader. Securely fetch files, media, and documents directly from your Saved Messages with high-speed resume support.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-downloader",
  },
  openGraph: {
    title: "Telegram Downloader – Download Telegram Files | TeleTorrent",
    description: "TeleTorrent is a dedicated Telegram downloader. Securely fetch files, media, and documents directly from your Saved Messages with high-speed resume support.",
    url: "https://www.teletorrent.me/telegram-downloader",
    type: "website",
  }
}

export default function TelegramDownloaderPage() {
  return (
    <>
      <HeroSection 
        title="Telegram Downloader" 
        subtitle="The ultimate Telegram file downloader. Save your media, documents, and archives instantly with native Android performance." 
      />
      <ComparisonSection />
      
      <section className="bg-[#000000] py-16 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[800px] text-[#8D919B]">
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Dedicated Telegram File Downloader</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            When you need a reliable Telegram downloader, standard browsers and generic file managers often fail to provide a seamless experience. TeleTorrent provides a dedicated, native Android environment for your Telegram downloads, ensuring maximum transfer speeds and complete resume capabilities for large files.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Why Choose a Specialized Downloader?</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            Generic tools don't understand Telegram's unique infrastructure. By allowing you to securely log directly into your account and access your personal Saved Messages, our Telegram downloader bypasses generic limitations, letting you grab massive files reliably. We specifically focus on your Saved Messages rather than public channels, ensuring your downloads are strictly personal files you have explicitly forwarded or saved yourself.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Your Personal High-Speed Drive</h2>
          <p className="text-[15px] leading-[1.6]">
            Whether you are trying to pull down a massive 2GB video you stored in your Saved Messages for offline viewing, or you need to recover a batch of important ZIP archives you backed up months ago, TeleTorrent handles it all. By restricting access to just your own Saved Messages, we provide a clean, clutter-free workspace that turns Telegram into your personal, high-speed cloud drive, completely separate from your daily chat threads.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
