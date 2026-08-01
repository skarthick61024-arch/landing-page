"use client"

import { motion } from "framer-motion"

const screens = [
  { name: "Saved Messages", offset: 0, z: 40, delay: 0 },
  { name: "Active Downloads", offset: 1, z: 30, delay: 0.1 },
  { name: "Completed Files", offset: 2, z: 20, delay: 0.2 },
  { name: "Settings", offset: 3, z: 10, delay: 0.3 },
]

export function ScreenShowcaseSection() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">A beautiful native experience</h2>
          <p className="text-lg md:text-xl font-normal text-muted-foreground">
            Carefully crafted interfaces that feel right at home on your device.
          </p>
        </div>

        <div className="relative h-[600px] flex justify-center perspective-[2000px]">
          {screens.map((screen, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 100, rotateY: -10 }}
              whileInView={{ opacity: 1, x: screen.offset * 120 - 180, rotateY: -15, scale: 1 - screen.offset * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: screen.delay, ease: "easeOut" }}
              className="absolute top-0 w-[280px] h-[580px] bg-background border-[6px] border-foreground/10 rounded-[40px] premium-shadow flex flex-col overflow-hidden"
              style={{ zIndex: screen.z }}
            >
              {/* Fake Status Bar */}
              <div className="h-6 w-full flex justify-between items-center px-5 pt-2 bg-muted/20">
                <span className="text-[9px] font-medium">9:41</span>
                <div className="flex gap-1">
                  <div className="w-2.5 h-2 bg-foreground rounded-[2px]" />
                  <div className="w-2.5 h-2 bg-foreground rounded-[2px]" />
                </div>
              </div>
              
              {/* Screen Content */}
              <div className="flex-1 bg-muted/20 p-4">
                <div className="h-10 border-b border-border/50 mb-4 flex items-end pb-2">
                  <h3 className="font-semibold text-lg">{screen.name}</h3>
                </div>
                
                {/* Mockup generic list items */}
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="h-14 bg-background rounded-xl p-3 flex items-center gap-3 shadow-sm border border-border/30">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="h-2.5 bg-muted rounded w-3/4" />
                        <div className="h-2 bg-muted rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
