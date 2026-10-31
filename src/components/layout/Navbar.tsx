"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck
} from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Live Engine", href: "/#engine-demo" },
    { name: "Movie Downloader", href: "/telegram-movie-downloader", badge: "HOT" },
    { name: "Tools Hub", href: "/#tools-hub" },
    { name: "Guides & Blog", href: "/blog" },
    { name: "FAQ", href: "/#faq" },
  ]

  return (
    <>
      {/* Top Floating Glass Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "py-3 bg-[#060709]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)]" 
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF32] rounded-xl"
              title="TeleTorrent Home"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-[#B7FF32] via-[#06B6D4] to-emerald-400 group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(183,255,50,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                  <Image 
                    src="/logo-round.jpg" 
                    alt="TeleTorrent Official Logo" 
                    width={36} 
                    height={36} 
                    className="w-full h-full object-cover rounded-full" 
                    priority 
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg md:text-xl tracking-tight text-white flex items-center gap-1.5">
                  TeleTorrent
                  <span className="w-2 h-2 rounded-full bg-[#B7FF32] animate-pulse"></span>
                </span>
                <span className="text-[10px] font-mono text-[#8D919B] tracking-wider uppercase hidden sm:block">
                  TurboStream™ 5G Engine
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/" && typeof window !== "undefined" && window.location.hash === link.href.replace("/", ""))
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                      isActive 
                        ? "text-[#B7FF32] bg-[#B7FF32]/10" 
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.name}
                    {link.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-sm">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right Action Area: Pure Google Play */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Jio &amp; Airtel 5G Ready
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 bg-[#B7FF32] hover:bg-[#c6ff4d] text-black font-extrabold text-xs md:text-sm px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(183,255,50,0.35)] hover:shadow-[0_0_30px_rgba(183,255,50,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF32]"
              >
                <div className="w-4 h-4 relative shrink-0">
                  <Image 
                    src="/play-store-icon.png" 
                    alt="Google Play" 
                    width={16} 
                    height={16} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span>Get it on Google Play</span>
              </a>
            </div>

            {/* Mobile Action Area */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#B7FF32] text-black font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm"
              >
                <div className="w-3.5 h-3.5 relative shrink-0">
                  <Image 
                    src="/play-store-icon.png" 
                    alt="Google Play" 
                    width={14} 
                    height={14} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span>Play Store</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF32]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#B7FF32]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 mx-4 p-5 bg-[#0D0F14]/98 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                    {link.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </Link>
              ))}

              <div className="h-[1px] bg-white/[0.08] my-2"></div>

              <div className="flex items-center justify-between px-4 py-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 rounded-xl">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Google Play Protect Verified
                </span>
                <span>Free Download</span>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full flex items-center justify-center gap-2 bg-[#B7FF32] text-black font-extrabold text-sm py-3.5 rounded-2xl shadow-lg shadow-[#B7FF32]/20"
              >
                <div className="w-4 h-4 relative shrink-0">
                  <Image 
                    src="/play-store-icon.png" 
                    alt="Google Play" 
                    width={16} 
                    height={16} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span>Install from Google Play</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
