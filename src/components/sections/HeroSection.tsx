"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, File, PlaySquare, FolderArchive, Smartphone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text */}
          <div className="max-w-[480px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-[3.5rem] font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
                The Ultimate Telegram File Downloader for Android.
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl font-normal text-muted-foreground mb-8 max-w-[480px]"
            >
              Fast, secure, and reliable background downloads. Support for massive video and document files with smart resume capabilities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-5 mb-10"
            >
              <Button size="lg" className="rounded-full gap-2 text-[13px] font-semibold h-11 px-7 bg-foreground text-background hover:bg-foreground/90">
                Download App
              </Button>
              <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                <span className="text-foreground">Available on</span>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M4 2v20l17-10z"/></svg>
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4"
            >
              <div>
                <p className="font-semibold text-lg tracking-tight mb-0.5">65k+</p>
                <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Downloads</p>
              </div>
              <div>
                <p className="font-semibold text-lg tracking-tight mb-0.5">34k+</p>
                <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Active Users</p>
              </div>
              <div>
                <p className="font-semibold text-lg tracking-tight mb-0.5">4.9/5</p>
                <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Average Rating</p>
              </div>
            </motion.div>
          </div>

          {/* Right Mockup Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full h-[500px] md:h-[640px] rounded-[40px] bg-[#0A0A0A] flex justify-center items-end overflow-hidden"
          >
            {/* Ambient Screen Glow */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[400px] bg-white/10 blur-[100px] rounded-full pointer-events-none" />
            
            {/* The Phone Image */}
            <div className="relative z-10 w-[280px] md:w-[320px] flex flex-col translate-y-2 md:translate-y-8">
              <img 
                src="/app-mockup.png" 
                alt="TeleTorrent App Interface" 
                className="w-full h-auto object-contain drop-shadow-[0_-20px_80px_rgba(255,255,255,0.05)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
