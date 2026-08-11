import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram File Downloader – Download Telegram Files | TeleTorrent",
  description: "Use TeleTorrent as your primary Telegram file downloader. Manage, organize, and download any Telegram file type directly to your Android device safely.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-file-downloader",
  },
  openGraph: {
    title: "Telegram File Downloader – Download Telegram Files | TeleTorrent",
    description: "Use TeleTorrent as your primary Telegram file downloader. Manage, organize, and download any Telegram file type safely.",
    url: "https://www.teletorrent.me/telegram-file-downloader",
    type: "website",
  }
}

export default function TelegramFileDownloaderPage() {
  return (
    <>
      <HeroSection 
        title="Telegram File Downloader" 
        subtitle="Download Telegram files of any format. Your personal utility for saving and organizing raw files from Telegram." 
      />
      <ComparisonSection />
      
      <section className="bg-[#000000] py-16 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[800px] text-[#8D919B]">
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Universal Telegram File Downloader</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            Not just limited to media, our Telegram file downloader supports APKs, ZIPs, executables, and proprietary formats. If it can be sent over Telegram, TeleTorrent can download it securely to your local storage.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Organized File Management</h2>
          <p className="text-[15px] leading-[1.6]">
            Keep track of your downloads effortlessly. See precise file sizes, transfer speeds, and ETA, bringing desktop-class file management to your Android phone.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
