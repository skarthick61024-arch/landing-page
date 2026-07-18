"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function Divider() {
  const items = ["Fast", "Secure", "Reliable", "Native Android", "Background Downloads"];

  return (
    <div className="py-12 bg-black border-y border-white/10 overflow-hidden flex whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex items-center gap-12 text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-white/90 shrink-0"
      >
        {/* Repeat list multiple times for infinite scroll effect */}
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, idx) => (
              <React.Fragment key={`${i}-${idx}`}>
                <span>{item}</span>
                <span className="text-primary text-4xl">✦</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
