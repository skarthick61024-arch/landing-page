"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, LayoutDashboard, Sparkles, HelpCircle, FileText } from "lucide-react"

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
      {/* Mobile Header (Sticky Top) */}
      <header className="md:hidden sticky top-0 z-40 w-full bg-[#000000]/80 backdrop-blur-xl border-b border-[#141518] h-[64px] flex items-center px-5 justify-between">
        <Link href="/" className="flex items-center gap-2.5 z-50">
          <img src="/logo-round.jpg" alt="TeleTorrent Logo" className="w-8 h-8 rounded-full" />
          <span className="font-bold text-[16px] tracking-tight text-[#F5F5F5]">TeleTorrent</span>
        </Link>
        <button 
          className="text-[#F5F5F5] focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Modern Sidebar (Desktop Persistent, Mobile Drawer) */}
      <aside 
        className={`fixed top-0 left-0 h-full w-[260px] bg-[#101114] border-r border-[#141518] z-50 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}`}
      >
        {/* Logo Area */}
        <div className="h-[80px] flex items-center px-8 border-b border-[#141518] shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-round.jpg" alt="TeleTorrent Logo" className="w-8 h-8 rounded-full" />
            <span className="font-bold text-[18px] tracking-tight text-[#F5F5F5]">TeleTorrent</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col gap-1 py-6 pl-6 pr-0 overflow-y-auto">
          <div className="text-[12px] font-bold text-[#8D919B] tracking-wider uppercase mb-4 px-2">Menu</div>
          {navLinks.map((link) => {
            const isActive = activeHref === link.href || (activeHref.startsWith('/blog') && link.name === 'Blog');
            return (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={(e) => {
                setIsOpen(false)
                setActiveHref(link.href)
                
                if (link.href.startsWith("/#") && pathname === "/") {
                  e.preventDefault()
                  const targetId = link.href.replace("/#", "")
                  const elem = document.getElementById(targetId)
                  if (elem) {
                    elem.scrollIntoView({ behavior: "smooth" })
                    // Manually push state so URL updates without breaking smooth scroll
                    window.history.pushState(null, '', link.href)
                  }
                }
              }}
              className={`text-[15px] font-medium py-3.5 pl-4 flex items-center gap-3 transition-colors ${isActive ? 'nav-item-active text-[#B7FF32]' : 'text-[#8D919B] hover:text-[#F5F5F5] rounded-l-[24px]'}`}
            >
              {link.icon}
              {link.name}
            </Link>
          )})}
        </nav>

        {/* CTA Bottom */}
        <div className="p-6 border-t border-[#141518] shrink-0">
          <a href="https://play.google.com/store/apps/details?id=com.teletorrent.app" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center transition-transform hover:scale-105 focus:outline-none rounded-full overflow-hidden">
            <img src="/playstore.png" alt="Get it on Google Play" className="h-[48px] w-auto drop-shadow-md" />
          </a>
        </div>
      </aside>
    </>
  )
}
