import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"

export const metadata: Metadata = {
  title: "Telegram Download Manager – Resume & Manage Downloads | TeleTorrent",
  description: "The ultimate Telegram download manager for Android. Take control of your downloads with queue management, live speeds, and automatic resume support.",
  alternates: {
    canonical: "https://www.teletorrent.me/telegram-download-manager",
  },
  openGraph: {
    title: "Telegram Download Manager – Resume & Manage Downloads | TeleTorrent",
    description: "The ultimate Telegram download manager for Android. Take control of your downloads with queue management, live speeds, and automatic resume support.",
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
            Don't settle for basic save functionality. Our Telegram download manager brings desktop-class control to your Android device, allowing you to queue multiple files and track bandwidth usage in real time.
          </p>
          <h2 className="text-[24px] font-bold text-[#F5F5F5] mb-4">Advanced Resume Capabilities</h2>
          <p className="text-[15px] leading-[1.6]">
            Internet dropped? Switching between Wi-Fi and mobile data? TeleTorrent intelligently pauses and resumes your transfers, making it the most robust Telegram download manager available.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <ProductShowcaseSection />
      <FAQSection />
    </>
  )
}
