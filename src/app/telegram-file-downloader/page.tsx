import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram File Downloader – Manage Telegram Files | TeleTorrent",
  description: "The ultimate Telegram file downloader. Download APKs, ZIP archives, and raw data files securely from your Saved Messages with desktop-class management.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-file-downloader",
  },
  openGraph: {
    title: "Telegram File Downloader – Manage Telegram Files | TeleTorrent",
    description: "The ultimate Telegram file downloader. Download APKs, ZIP archives, and raw data files securely from your Saved Messages with desktop-class management.",
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
            Not just limited to standard media, our powerful Telegram file downloader supports downloading APKs, ZIP archives, raw executables, and proprietary file formats. If a file can be sent over Telegram and stored in your Saved Messages, TeleTorrent can download it securely to your local Android storage. This makes it an invaluable tool for developers, IT professionals, and power users who use Telegram as a personal backup drive.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Organized File Management</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            Keep track of your downloads effortlessly. See precise file sizes, live transfer speeds, and accurate ETA estimates, bringing desktop-class file management directly to your Android phone. Because our Telegram file downloader exclusively accesses your own Saved Messages, your file list remains organized and secure, completely separate from public channel spam.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Take Control of Your Data</h2>
          <p className="text-[15px] leading-[1.6]">
            Simply forward the files you need to keep into your Saved Messages, and TeleTorrent will display them in a clean, manageable queue. You have full control to start, pause, and organize your raw file downloads exactly how you need them.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
