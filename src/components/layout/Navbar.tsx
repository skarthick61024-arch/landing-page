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

      {/* Modern Floating Pill Sidebar (Desktop Persistent, Mobile Drawer) */}
      <aside 
        className={`fixed top-4 left-4 h-[calc(100vh-32px)] w-[80px] bg-[#000000] border border-[#1A1A1A] rounded-[40px] shadow-2xl z-50 flex flex-col items-center transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo Area */}
        <div className="h-[100px] flex items-center justify-center shrink-0 w-full mt-2">
          <Link href="/" className="flex items-center justify-center w-12 h-12 bg-[#101114] border border-[#1A1A1A] rounded-full hover:scale-105 transition-transform" title="TeleTorrent Home">
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
              className={`relative flex items-center justify-center w-12 h-12 transition-all rounded-[18px] group ${isActive ? 'text-[#B7FF32]' : 'text-[#8D919B] hover:text-[#FFFFFF]'}`}
            >
              {isActive && (
                <div className="absolute inset-0 border border-[#B7FF32] rounded-[18px] opacity-80 shadow-[0_0_12px_rgba(183,255,50,0.15)]"></div>
              )}
              {link.icon}
            </Link>
          )})}
        </nav>

        {/* CTA Bottom */}
        <div className="h-[100px] flex items-center justify-center shrink-0 w-full mb-2">
          <a href="https://play.google.com/store/apps/details?id=com.teletorrent.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-[#101114] border border-[#1A1A1A] hover:bg-[#B7FF32] text-[#F5F5F5] hover:text-[#000000] transition-colors focus:outline-none rounded-full" title="Get it on Google Play">
            <Download className="w-5 h-5" />
          </a>
        </div>
      </aside>
    </>
  )
}
