import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { ScreenShowcaseSection } from "@/components/sections/ScreenShowcaseSection"

export const metadata = {
  title: 'Platform | TeleTorrent',
  description: 'See how the TeleTorrent platform works.',
  alternates: {
    canonical: 'https://www.teletorrent.me/platform',
  },
  openGraph: {
    title: 'Platform | TeleTorrent',
    description: 'See how the TeleTorrent platform works.',
    url: 'https://www.teletorrent.me/platform',
    type: 'website',
  },
}

export default function PlatformPage() {
  return (
    <div className="pt-24 pb-16 min-h-[80vh]">
      <HowItWorksSection />
      <ScreenShowcaseSection />
    </div>
  )
}
