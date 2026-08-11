import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram Document Downloader – Download Telegram Documents | TeleTorrent",
  description: "Securely download Telegram documents, PDFs, Excel sheets, and work files. TeleTorrent is the professional's choice for fetching files.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-document-downloader",
  },
  openGraph: {
    title: "Telegram Document Downloader – Download Telegram Documents | TeleTorrent",
    description: "Securely download Telegram documents, PDFs, Excel sheets, and work files.",
    url: "https://www.teletorrent.me/telegram-document-downloader",
    type: "website",
  }
}

export default function TelegramDocumentDownloaderPage() {
  return (
    <>
      <HeroSection 
        title="Telegram Document Downloader" 
        subtitle="The safest way to download work documents, PDFs, and archives from your Telegram Saved Messages." 
      />
      <ComparisonSection />
      
      <section className="bg-[#000000] py-16 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[800px] text-[#8D919B]">
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Save Important Documents</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            Professionals use our Telegram document downloader to securely fetch massive PDFs, corporate archives, and critical spreadsheets sent over Telegram. Skip the slow web interfaces and download natively.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Reliable File Retrieval</h2>
          <p className="text-[15px] leading-[1.6]">
            Never lose progress on a 500MB corporate ZIP file again. With our built-in resume features, downloading documents from Telegram is finally reliable and stress-free.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
