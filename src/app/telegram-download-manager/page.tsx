import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram Download Manager – Resume & Queue | TeleTorrent",
  description: "The ultimate Telegram download manager for Android. Control your downloads from Saved Messages with queue management, live speeds, and automatic resume.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-download-manager",
  },
  openGraph: {
    title: "Telegram Download Manager – Resume & Queue | TeleTorrent",
    description: "The ultimate Telegram download manager for Android. Control your downloads from Saved Messages with queue management, live speeds, and automatic resume.",
    url: "https://www.teletorrent.me/telegram-download-manager",
    type: "website",
  }
}

export default function TelegramDownloadManagerPage() {
  return (
    <>
      <HeroSection 
        title="Telegram Download Manager" 
        subtitle="Take full control of your Telegram downloads. Queue files, track live speeds, and easily manage your storage." 
      />
      <ComparisonSection />
      
      <section className="bg-[#000000] py-16 border-t border-[#141518]">
        <div className="container mx-auto px-5 md:px-12 max-w-[800px] text-[#8D919B]">
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">A True Download Manager for Telegram</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            Don't settle for the basic save functionality found in most chat apps. Our dedicated Telegram download manager brings desktop-class control to your Android device, allowing you to queue multiple files, track bandwidth usage in real time, and manage your storage efficiently. Because it connects directly and exclusively to your personal Saved Messages, it acts as a true bridge between your private Telegram cloud storage and your local device.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Advanced Resume Capabilities</h2>
          <p className="text-[15px] leading-[1.6] mb-8">
            Internet dropped? Switching between Wi-Fi and mobile data on your commute? TeleTorrent intelligently pauses and resumes your transfers, making it the most robust Telegram download manager available today. You no longer have to worry about a 2GB file failing at 99%. Our engine handles the heavy lifting, allowing you to queue dozens of files from your Saved Messages and walk away.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Complete Transfer Control</h2>
          <p className="text-[15px] leading-[1.6]">
            The Telegram download manager provides detailed insights into active connections, exact download speeds, and precise ETAs, ensuring you have total control over how and when your personal files are saved to your device.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
