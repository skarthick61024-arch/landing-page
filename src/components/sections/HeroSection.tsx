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
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/20 px-3 py-1.5 text-xs font-medium text-foreground">
                <div className="w-4 h-4 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-[8px] text-background">AI</span>
                </div>
                Powered by TeleTorrent Advanced Engine
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-[3.5rem] font-semibold tracking-[-0.04em] text-foreground leading-[1.05] mb-4">
                AI That Adapts to Your Needs Across Every Task.
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-[15px] text-muted-foreground mb-8 max-w-[420px] leading-relaxed font-medium"
            >
              An intelligent AI assistant that streamlines tasks, boosts productivity, and enhances creativity — tailored just for you.
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
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.6 13.9c0-3.3 2.7-4.9 2.8-4.9-1.5-2.2-3.9-2.5-4.7-2.6-2-.2-3.9 1.2-4.9 1.2-1 0-2.6-1.1-4.3-1.1-2.2 0-4.3 1.3-5.5 3.3-2.3 4-1.2 10.4 1 13.6 1.1 1.6 2.4 3.4 4.2 3.3 1.7-.1 2.4-1.2 4.4-1.2 2 0 2.6 1.2 4.4 1.1 1.8-.1 2.9-1.7 4-3.3 1.3-2 1.8-3.9 1.8-4-1.7-.6-3.2-2.3-3.2-4.4z"/><path d="M15.1 4.2c.9-1.1 1.5-2.6 1.4-4.2-1.4.1-3 .9-3.9 2-1 1-1.7 2.6-1.5 4.1 1.6.1 3-1 3.9-2z"/></svg>
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
                <p className="font-semibold text-lg tracking-tight mb-0.5">22k+</p>
                <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Active Users</p>
              </div>
            </motion.div>
          </div>

          {/* Right Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-[600px] flex items-center justify-center lg:justify-end pr-0 md:pr-8"
          >
            {/* The Phone */}
            <div className="relative w-[300px] h-[600px] bg-background border-[10px] border-[#F1F1F1] rounded-[48px] overflow-hidden flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.12)]">
              {/* Fake Status Bar */}
              <div className="h-6 w-full flex justify-between items-center px-6 pt-1">
                <span className="text-[10px] font-semibold tracking-tight">9:41</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-2.5 bg-foreground rounded-sm" />
                  <div className="w-3 h-2.5 bg-foreground rounded-sm" />
                </div>
              </div>
              
              {/* App UI */}
              <div className="flex-1 p-5 flex flex-col gap-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg tracking-tight">Downloads</h3>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground">
                    <Download className="w-4 h-4" />
                  </div>
                </div>

                {/* Download Card 1 */}
                <div className="p-3 bg-muted/30 rounded-2xl flex items-center gap-3 border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-background border border-border/50 text-foreground flex items-center justify-center shrink-0">
                    <PlaySquare className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate tracking-tight">Video_1080p.mkv</p>
                    <div className="flex justify-between text-[9px] text-muted-foreground mt-1 mb-1.5 font-medium">
                      <span>1.2 GB / 2.4 GB</span>
                      <span>12 MB/s</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[50%]" />
                    </div>
                  </div>
                </div>

                {/* Download Card 2 */}
                <div className="p-3 bg-muted/30 rounded-2xl flex items-center gap-3 border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-background border border-border/50 text-foreground flex items-center justify-center shrink-0">
                    <FolderArchive className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate tracking-tight">Project_Assets.zip</p>
                    <div className="flex justify-between text-[9px] text-muted-foreground mt-1 mb-1.5 font-medium">
                      <span>350 MB / 350 MB</span>
                      <span className="text-foreground">Completed</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[100%]" />
                    </div>
                  </div>
                </div>

                {/* Download Card 3 */}
                <div className="p-3 bg-muted/30 rounded-2xl flex items-center gap-3 border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-background border border-border/50 text-foreground flex items-center justify-center shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate tracking-tight">App_V9.apk</p>
                    <div className="flex justify-between text-[9px] text-muted-foreground mt-1 mb-1.5 font-medium">
                      <span>Pause</span>
                      <span>68 MB</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground w-[30%]" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Nav */}
              <div className="h-16 border-t border-border/50 flex justify-around items-center px-4 text-muted-foreground bg-background">
                <div className="flex flex-col items-center gap-1 text-foreground">
                  <Download className="w-4 h-4" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <File className="w-4 h-4 opacity-50" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 opacity-50">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
