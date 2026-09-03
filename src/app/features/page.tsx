import { FeaturesSection } from "@/components/sections/FeaturesSection"

export const metadata = {
  title: 'Features | TeleTorrent',
  description: 'Explore the features of TeleTorrent.',
  alternates: {
    canonical: 'https://www.teletorrent.me/features',
  },
  openGraph: {
    title: 'Features | TeleTorrent',
    description: 'Explore the features of TeleTorrent.',
    url: 'https://www.teletorrent.me/features',
    type: 'website',
  },
}

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-16 min-h-[80vh]">
      <FeaturesSection />
    </div>
  )
}
