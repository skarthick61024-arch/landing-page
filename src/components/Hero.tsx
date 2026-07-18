"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const trustBadges = [
    { label: "Background", sub: "Downloads" },
    { label: "100%", sub: "Resume Support" },
    { label: "Ultra", sub: "Fast Speeds" },
    { label: "Secure", sub: "Native Android" },
  ];

  return (
    <section className="relative bg-[#0F0F0F] pt-0 overflow-hidden">
      
      {/* Top White Arch */}
      <div className="relative bg-white pt-40 pb-48 px-4 rounded-b-[4rem] md:rounded-b-[8rem] z-10 flex flex-col items-center">
        {/* Yellow/Green Star Decoration */}
        <motion.div 
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-32 left-10 md:left-32 text-primary"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black leading-[1.05]">
            The Fastest Telegram <br />
            Download Manager
          </h1>
          
          <p className="text-lg md:text-xl text-black/60 font-medium max-w-2xl leading-relaxed">
            Download files faster, resume dropped connections, and manage your media securely on Android.
          </p>

          <a href="/teletorrent.apk" download>
            <button className="mt-4 bg-primary text-white hover:bg-primary/90 h-14 px-8 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl shadow-primary/30 transition-transform hover:scale-105">
              <Download className="h-5 w-5" />
              Get Started
            </button>
          </a>
        </motion.div>
      </div>

      {/* Mockup & Floating Stats Container */}
      <div className="relative -mt-24 md:-mt-32 z-20 container mx-auto px-4 flex flex-col items-center pb-24">
        
        {/* 3D Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-[300px] md:w-[400px] aspect-[1/2] mx-auto z-20"
        >
          <div className="w-full h-full rounded-[3rem] md:rounded-[4rem] border-[12px] border-black/10 bg-black shadow-2xl overflow-hidden relative">
            <Image
              src="/mockups/photo_2026-07-13_22-39-33.jpg"
              alt="TeleTorrent App"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Floating Stats Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:-mt-16 relative z-30 bg-[#1A1A1A] border border-white/5 shadow-2xl rounded-[2rem] px-6 py-6 md:px-12 md:py-8 flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-16 w-full max-w-4xl"
        >
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">
                {badge.label}
              </span>
              <span className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-widest">
                {badge.sub}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
