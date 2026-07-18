"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function ScreenshotGallery() {
  // Using multiple placeholder mockups for the gallery
  const screenshots = [
    "/mockups/photo_2026-07-13_22-39-33.jpg",
    "/mockups/photo_2026-07-13_22-39-36.jpg",
    "/mockups/photo_2026-07-13_22-39-39.jpg",
    "/mockups/photo_2026-07-13_22-39-42.jpg",
    "/mockups/photo_2026-07-13_22-39-44.jpg",
    "/mockups/photo_2026-07-13_22-39-50 - Copy.jpg",
    "/mockups/photo_2026-07-13_22-39-55 - Copy.jpg",
  ];

  return (
    <section id="screenshots" className="py-24 bg-[#0F0F0F] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Beautifully Designed
          </h2>
          <p className="text-lg text-white/50">
            A premium interface crafted with extreme attention to detail.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-x-auto pb-8 hide-scrollbar">
        <div className="flex gap-6 px-4 md:px-8 w-max mx-auto">
          {screenshots.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative aspect-[1/2] w-[260px] md:w-[300px] shrink-0 rounded-[2.5rem] border-[8px] border-border/50 bg-background shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={src}
                alt={`TeleTorrent Screenshot ${idx + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
