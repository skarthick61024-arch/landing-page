import { AboutSection } from "@/components/sections/AboutSection"

export const metadata = {
  title: 'About | TeleTorrent',
  description: 'Learn more about TeleTorrent.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 min-h-[80vh]">
      <AboutSection />
    </div>
  )
}
