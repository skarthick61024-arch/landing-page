import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-background w-4 h-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </div>
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
          <span className="text-[13px] font-semibold hidden sm:inline-block cursor-pointer">Sign Up</span>
          <Button asChild size="sm" className="hidden sm:inline-flex rounded-full px-7 h-9 text-[13px] font-semibold bg-foreground text-background hover:bg-foreground/90">
            <Link href="/">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
