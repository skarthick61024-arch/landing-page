import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram Document Downloader – Save Work Files | TeleTorrent",
  description: "Securely download PDFs, Excel sheets, and work documents. The professional Telegram document downloader for saving files from your Saved Messages.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-document-downloader",
  },
  openGraph: {
    title: "Telegram Document Downloader – Save Work Files | TeleTorrent",
    description: "Securely download PDFs, Excel sheets, and work documents. The professional Telegram document downloader for saving files from your Saved Messages.",
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
            Professionals increasingly use our Telegram document downloader to securely fetch massive PDFs, corporate archives, and critical spreadsheets that they've backed up to Telegram. Skip the slow web interfaces and generic apps—download your important work files natively. By restricting our application to only read from your personal Saved Messages, we ensure a focused, professional environment where you can quickly find and download your business documents without the distraction of social chats.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Reliable File Retrieval</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            Never lose progress on a 500MB corporate ZIP file or a massive design PDF again. With our built-in resume features, downloading heavy documents from Telegram is finally reliable and stress-free. If you are on the move and switch from Wi-Fi to a cellular network, our Telegram document downloader handles the transition gracefully.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Perfect for Professionals</h2>
          <p className="text-[15px] leading-[1.6]">
            Just forward your important contracts, presentations, or data dumps to your Saved Messages, and TeleTorrent will ensure they are downloaded completely and securely to your Android device for offline access during your next meeting or flight.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
