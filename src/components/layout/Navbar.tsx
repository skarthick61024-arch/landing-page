import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto max-w-7xl w-[95%] bg-background/80 backdrop-blur-md border border-border/40 rounded-2xl md:rounded-full mt-4">
      <div className="px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-new.jpg" alt="TeleTorrent Logo" className="w-8 h-8 rounded-full" />
          <span className="font-bold text-lg tracking-tight">TeleTorrent</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-muted-foreground">
          <Link href="/" className="text-foreground transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/platform" className="hover:text-foreground transition-colors">
            Platform
          </Link>
          <Link href="/features" className="hover:text-foreground transition-colors">
            Features <span className="ml-1 opacity-50">▾</span>
          </Link>
          <Link href="/pricing" className="hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-6">
        </div>
      </div>
    </header>
  )
}
