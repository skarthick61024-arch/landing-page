"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Film, BookOpen, HelpCircle, Home } from "lucide-react"

export function BottomNav() {
  const pathname = usePathname()
  
  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40" aria-label="Mobile Navigation Dock">
      <div className="bg-[#0D0F14]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-between gap-1">
        
        <Link 
          href="/" 
          aria-label="Home" 
          className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${
            pathname === "/" ? "text-[#B7FF32] bg-white/[0.06]" : "text-zinc-400 hover:text-white"
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Home</span>
        </Link>

        <Link 
          href="/telegram-movie-downloader" 
          aria-label="Movie Downloader" 
          className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${
            pathname === "/telegram-movie-downloader" ? "text-[#B7FF32] bg-white/[0.06]" : "text-zinc-400 hover:text-white"
          }`}
        >
          <Film className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Movies</span>
        </Link>

        {/* Center Prominent Google Play Store Button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.teletorrent.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center px-4 py-1.5 bg-[#B7FF32] hover:bg-[#c6ff4d] text-black font-extrabold rounded-xl shadow-lg shadow-[#B7FF32]/25 active:scale-95 transition-transform"
          aria-label="Install TeleTorrent from Google Play Store"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 relative shrink-0">
              <Image 
                src="/play-store-icon.png" 
                alt="Google Play" 
                width={16} 
                height={16} 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="text-[11px] uppercase tracking-wider font-extrabold">Play Store</span>
          </div>
          <span className="text-[8px] font-mono text-black/80 font-bold">Free • 12MB</span>
        </a>

        <Link 
          href="/blog" 
          aria-label="Blog & Guides" 
          className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${
            pathname.startsWith("/blog") ? "text-[#B7FF32] bg-white/[0.06]" : "text-zinc-400 hover:text-white"
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Guides</span>
        </Link>

        <Link 
          href="/help" 
          aria-label="Support & FAQ" 
          className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${
            pathname === "/help" ? "text-[#B7FF32] bg-white/[0.06]" : "text-zinc-400 hover:text-white"
          }`}
        >
          <HelpCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Help</span>
        </Link>

      </div>
    </div>
  )
}
