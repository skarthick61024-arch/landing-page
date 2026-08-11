import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { DownloadExperienceSection } from "@/components/sections/DownloadExperienceSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { SEOContentSection } from "@/components/sections/SEOContentSection"
import { FAQSection } from "@/components/sections/FAQSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ComparisonSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ProductShowcaseSection />
      <DownloadExperienceSection />
      <TrustSection />
      <SEOContentSection />
      <FAQSection />
    </>
  )
}
