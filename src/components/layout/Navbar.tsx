"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
    { name: "Product", href: "/#features" },
    { name: "Features", href: "/#features" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/help" },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#000000]/80 backdrop-blur-xl border-b border-[#141518] h-[64px] flex items-center">
        <div className="container mx-auto px-5 md:px-8 max-w-[1240px] flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5 z-50">
            <img src="/logo-round.jpg" alt="TeleTorrent Logo" className="w-8 h-8 rounded-full" />
            <span className="font-bold text-[16px] tracking-tight text-[#F5F5F5]">
              TeleTorrent
            </span>
          </Link>

          {/* Center: Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[13px] font-medium text-[#8D919B] hover:text-[#F5F5F5] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: CTA & Hamburger */}
          <div className="flex items-center gap-4 z-50">
            <button className="hidden md:flex transition-transform hover:scale-105 focus:outline-none rounded-full overflow-hidden">
              <img src="/playstore.png" alt="Get it on Google Play" className="h-[40px] w-auto drop-shadow-md" />
            </button>
            <button 
              className="flex md:hidden text-[#F5F5F5] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Modern Side Nav */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#101114] border-l border-[#1A1A1A] z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-[80px] px-6 pb-8 ${isOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"}`}
      >
        <nav className="flex flex-col gap-6 flex-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[18px] font-semibold text-[#F5F5F5] hover:text-[#B7FF32] transition-colors flex items-center border-b border-[#1A1A1A] pb-4"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-8">
          <button className="w-full flex justify-center transition-transform hover:scale-105 focus:outline-none rounded-full overflow-hidden">
            <img src="/playstore.png" alt="Get it on Google Play" className="h-[48px] w-auto drop-shadow-md" />
          </button>
        </div>
      </div>
    </>
  )
}
