import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InteractiveServices } from "@/components/InteractiveServices";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Divider } from "@/components/Divider";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { FAQSection } from "@/components/FAQSection";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />
      <Hero />
      
      {/* Decorative Divider */}
      <Divider />
      
      {/* Split Layout Features */}
      <FeatureShowcase
        title="Turning ideas into Masterpieces"
        description="We bridge the gap between ideas and impact by crafting experiences that are strategic, intentional, and built for speed."
        imageSrc="/mockups/photo_2026-07-13_22-39-42.jpg"
        imageAlt="TeleTorrent Layout Showcase"
      />

      <InteractiveServices />
      
      {/* Another Divider */}
      <Divider />

      <FeaturesGrid />
      
      <ScreenshotGallery />
      
      {/* Let's wrap FAQ inside a dark container since FAQSection originally used system theme */}
      <div className="bg-[#0F0F0F] text-white">
        <FAQSection />
      </div>

      <FooterCTA />
    </main>
  );
}
