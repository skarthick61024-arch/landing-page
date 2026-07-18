"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveServices() {
  const [activeService, setActiveService] = React.useState(0);

  const services = [
    {
      title: "Download Manager",
      image: "/mockups/photo_2026-07-13_22-39-39.jpg",
    },
    {
      title: "Network Monitor",
      image: "/mockups/photo_2026-07-13_22-39-44.jpg",
    },
    {
      title: "Storage Control",
      image: "/mockups/photo_2026-07-13_22-39-50 - Copy.jpg",
    },
    {
      title: "Advanced Settings",
      image: "/mockups/photo_2026-07-13_22-39-55 - Copy.jpg",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#141414]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Our Core</h2>
          <span className="bg-primary text-black font-bold px-4 py-1 rounded-full text-lg">Features</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start bg-[#1C1C1C] rounded-[3rem] p-6 md:p-12 shadow-2xl border border-white/5">
          
          {/* Left Side: Services List */}
          <div className="flex flex-col gap-4">
            <p className="text-white/60 mb-8 max-w-md leading-relaxed">
              We engineered TeleTorrent with features that empower you to take total control over your downloads, ensuring reliability and blazing fast speeds.
            </p>

            <div className="flex flex-col gap-3">
              {services.map((service, idx) => {
                const isActive = activeService === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveService(idx)}
                    className={cn(
                      "flex items-center gap-6 px-6 py-4 rounded-full transition-all duration-300 group text-left",
                      isActive 
                        ? "bg-white text-black font-bold shadow-lg" 
                        : "bg-transparent text-white/50 hover:text-white hover:bg-white/5 font-medium"
                    )}
                  >
                    <span className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors",
                      isActive ? "bg-black text-white" : "bg-white/10 text-white/50 group-hover:text-white"
                    )}>
                      {idx + 1}
                    </span>
                    <span className="text-lg flex-1">{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Image Showcase */}
          <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] bg-[#0F0F0F] rounded-[2.5rem] p-4 flex items-center justify-center overflow-hidden border border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-[280px] aspect-[1/2] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* View More Button Overlay */}
            <div className="absolute bottom-8 right-8 z-10">
              <button className="flex items-center gap-2 bg-primary text-black font-bold px-6 py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Explore Feature
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Star Icon */}
            <div className="absolute top-8 right-8 text-primary opacity-50">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
