import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram Downloader – Fast Telegram File Downloader | TeleTorrent",
  description: "TeleTorrent is the premier Telegram downloader. Easily fetch files, videos, and documents directly from your Saved Messages with high-speed resume support.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-downloader",
  },
  openGraph: {
    title: "Telegram Downloader – Fast Telegram File Downloader | TeleTorrent",
    description: "TeleTorrent is the premier Telegram downloader. Easily fetch files, videos, and documents directly from your Saved Messages.",
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
            When you need a reliable Telegram downloader, standard browsers often fail. TeleTorrent provides a dedicated environment for your Telegram downloads, ensuring maximum speeds and complete resume capabilities.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Why Choose a Specialized Downloader?</h2>
          <p className="text-[15px] leading-[1.6]">
            Generic tools don't understand Telegram's infrastructure. By logging directly into your account and accessing your Saved Messages, our Telegram downloader bypasses generic limits, letting you grab massive files securely.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
