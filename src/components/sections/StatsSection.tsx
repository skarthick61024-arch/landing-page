"use client"

import { motion } from "framer-motion"
import { Download, Users, Star } from "lucide-react"

export function StatsSection() {
  const stats = [
    { value: "65K+", label: "Downloads", icon: <Download className="w-6 h-6 text-vibrantBlue" /> },
    { value: "34K+", label: "Active Users", icon: <Users className="w-6 h-6 text-vibrantBlue" /> },
    { value: "4.9/5", label: "Average Rating", icon: <Star className="w-6 h-6 text-vibrantBlue" /> },
  ]

  return (
    <section className="py-12 bg-white relative z-20 -mt-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 py-8 px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 w-full md:w-auto"
              >
                <div className="w-14 h-14 rounded-full bg-vibrantBlue/10 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    {stat.value}
                  </h2>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
