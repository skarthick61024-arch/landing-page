import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/80 backdrop-blur-xl border-b border-[#141518] h-[64px] flex items-center">
      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo-round.jpg" alt="TeleTorrent Logo" className="w-8 h-8 rounded-full" />
          <span className="font-bold text-[16px] tracking-tight text-[#F5F5F5]">
            TeleTorrent
          </span>
        </Link>

        {/* Center: Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-[13px] font-medium text-[#8D919B] hover:text-[#F5F5F5] transition-colors">
            Product
          </Link>
          <Link href="/#features" className="text-[13px] font-medium text-[#8D919B] hover:text-[#F5F5F5] transition-colors">
            Features
          </Link>
          <Link href="/#how-it-works" className="text-[13px] font-medium text-[#8D919B] hover:text-[#F5F5F5] transition-colors">
            How it works
          </Link>
          <Link href="/about" className="text-[13px] font-medium text-[#8D919B] hover:text-[#F5F5F5] transition-colors">
            About
          </Link>
          <Link href="/help" className="text-[13px] font-medium text-[#8D919B] hover:text-[#F5F5F5] transition-colors">
            Support
          </Link>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex transition-transform hover:scale-105 focus:outline-none rounded-full overflow-hidden">
            <img src="/playstore.png" alt="Get it on Google Play" className="h-[40px] w-auto drop-shadow-md" />
          </button>
        </div>

      </div>
    </header>
  )
}
