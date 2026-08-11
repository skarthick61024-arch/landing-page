"use client"

import { motion } from "framer-motion"

export function CompareSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            The Difference is Clear
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stop struggling with interrupted downloads. Experience the seamless workflow you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Frustrated User Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500" />
            <div className="h-64 w-full mb-8 rounded-2xl overflow-hidden relative">
              <img src="/animated_frustrated_user_1786422178399.png" alt="Frustrated User" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Using Standard Apps</h3>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex items-center justify-center gap-2">
                <span className="text-red-500 font-bold">✕</span> Downloads stop in background
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-red-500 font-bold">✕</span> No resume support
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-red-500 font-bold">✕</span> Frustrating experience
              </li>
            </ul>
          </motion.div>

          {/* Happy User Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-vibrantBlue/10 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-vibrantBlue" />
            <div className="h-64 w-full mb-8 rounded-2xl overflow-hidden relative">
              <img src="/animated_happy_user_1786422192133.png" alt="Happy User" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Using TeleTorrent</h3>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex items-center justify-center gap-2">
                <span className="text-vibrantBlue font-bold">✓</span> True background downloads
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-vibrantBlue font-bold">✓</span> Smart pause & resume
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-vibrantBlue font-bold">✓</span> Productive & relaxed
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
