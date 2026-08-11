"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNav() {
  const pathname = usePathname()
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#000000]/90 backdrop-blur-xl border-t border-[#141518] pb-safe">
      <div className="flex items-center justify-around h-[64px] px-2">
        
        <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-[#8D919B] hover:text-[#F5F5F5] transition-colors">
          <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          <span className="text-[10px] font-medium tracking-wide">Home</span>
        </Link>
        
        <Link href="/#features" className="flex flex-col items-center justify-center w-full h-full text-[#8D919B] hover:text-[#F5F5F5] transition-colors">
          <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
          <span className="text-[10px] font-medium tracking-wide">Features</span>
        </Link>
        
        <Link href="/about" className="flex flex-col items-center justify-center w-full h-full text-[#8D919B] hover:text-[#F5F5F5] transition-colors">
          <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
          <span className="text-[10px] font-medium tracking-wide">About</span>
        </Link>

        <Link href="/help" className="flex flex-col items-center justify-center w-full h-full text-[#8D919B] hover:text-[#F5F5F5] transition-colors">
          <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          <span className="text-[10px] font-medium tracking-wide">Support</span>
        </Link>

      </div>
    </div>
  )
}
