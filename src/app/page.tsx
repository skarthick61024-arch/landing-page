import { HeroSection } from "@/components/sections/HeroSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { FAQSection } from "@/components/sections/FAQSection"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TeleTorrent",
    "operatingSystem": "Android",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Download Telegram videos, documents, ZIP files, APKs, audio, and media with TeleTorrent. Fast, secure background downloads with resume support and download management.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2150"
    },
    "url": "https://www.teletorrent.me"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustSection />
      <FAQSection />
    </>
  );
}
