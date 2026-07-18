"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export function FeatureShowcase({
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
}: FeatureShowcaseProps) {
  return (
    <section className="py-20 md:py-32 bg-[#0F0F0F] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
            reversed ? "lg:grid-flow-col-dense" : ""
          )}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={cn("flex flex-col gap-6", reversed ? "lg:col-start-2" : "")}
          >
            <div className="flex items-center gap-3 mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
              </svg>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {title.split(' ').map((word, i, arr) => 
                  i === arr.length - 1 ? <span key={i} className="text-white/60 block">{word}</span> : <span key={i}>{word} </span>
                )}
              </h2>
            </div>
            
            <p className="text-lg text-white/50 font-medium leading-relaxed max-w-md">
              {description}
            </p>
          </motion.div>

          {/* Image / Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "relative w-full max-w-[320px] mx-auto lg:max-w-[400px]",
              reversed ? "lg:col-start-1" : ""
            )}
          >
            <div className="relative aspect-[1/2] w-full rounded-[3rem] border border-white/10 bg-[#1A1A1A] p-2 shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
