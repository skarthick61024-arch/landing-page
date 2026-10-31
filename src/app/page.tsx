import { HeroSection } from "@/components/sections/HeroSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { SEOContentSection } from "@/components/sections/SEOContentSection"
import { CTASection } from "@/components/sections/CTASection"
import { BlogHighlightSection } from "@/components/sections/BlogHighlightSection"
import { FAQSection } from "@/components/sections/FAQSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ComparisonSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ProductShowcaseSection />
      <SEOContentSection />
      <CTASection />
      <BlogHighlightSection />
      <FAQSection />
    </>
  )
}
