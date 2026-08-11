"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, LayoutDashboard, Sparkles, HelpCircle, FileText, Download } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const [activeHref, setActiveHref] = useState("/")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveHref(window.location.pathname + window.location.hash)
    }
  }, [pathname])

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const navLinks = [
    { name: "Product", href: "/", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Features", href: "/#features", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Blog", href: "/blog", icon: <FileText className="w-5 h-5" /> },
    { name: "Support", href: "/help", icon: <HelpCircle className="w-5 h-5" /> },
  ]

  return (
    <>
      {/* Modern Floating Pill Sidebar (Desktop Only) */}
      <aside 
        className="hidden md:flex fixed top-4 left-4 h-[calc(100vh-32px)] w-[80px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50 flex-col items-center"
      >
        {/* Logo Area */}
        <div className="h-[100px] flex items-center justify-center shrink-0 w-full mt-2">
          <Link href="/" className="flex items-center justify-center w-12 h-12 bg-white/10 border border-white/20 rounded-full hover:scale-105 transition-transform shadow-inner" title="TeleTorrent Home">
            <img src="/logo-round.jpg" alt="TeleTorrent Logo" className="w-9 h-9 rounded-full" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col gap-6 items-center py-6 w-full overflow-y-auto no-scrollbar">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href || (activeHref.startsWith('/blog') && link.name === 'Blog');
            return (
            <Link 
              key={link.name} 
              href={link.href}
              title={link.name}
              onClick={(e) => {
                setIsOpen(false)
                setActiveHref(link.href)
                
                if (link.href.startsWith("/#") && pathname === "/") {
                  e.preventDefault()
                  const targetId = link.href.replace("/#", "")
                  const elem = document.getElementById(targetId)
                  if (elem) {
                    elem.scrollIntoView({ behavior: "smooth" })
                    window.history.pushState(null, '', link.href)
                  }
                }
              }}
              className={`relative flex items-center justify-center w-12 h-12 transition-all rounded-[18px] group ${isActive ? 'text-[#B7FF32] bg-[#B7FF32]/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
            >
              {isActive && (
                <div className="absolute inset-0 border border-[#B7FF32]/50 rounded-[18px] shadow-[0_0_12px_rgba(183,255,50,0.2)]"></div>
              )}
              {link.icon}
            </Link>
          )})}
        </nav>

        {/* CTA Bottom */}
        <div className="h-[100px] flex items-center justify-center shrink-0 w-full mb-2">
          <a href="https://play.google.com/store/apps/details?id=com.teletorrent.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all focus:outline-none rounded-full shadow-inner" title="Get it on Google Play">
            <img src="/play-store-icon.png" alt="Get it on Google Play" className="w-8 h-8 object-contain" />
          </a>
        </div>
      </aside>
    </>
  )
}
