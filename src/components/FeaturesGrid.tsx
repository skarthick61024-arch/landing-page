"use client";

import * as React from "react";
import { Play, DownloadCloud, ListOrdered, Smartphone, Bell, Search, Send, HardDrive } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      title: "Resume Downloads",
      description: "Connection dropped? Resume from where it stopped.",
      icon: Play,
    },
    {
      title: "Background",
      description: "Keep downloading even when the app is closed.",
      icon: DownloadCloud,
    },
    {
      title: "Smart Queue",
      description: "Manage multiple files effortlessly in a queue.",
      icon: ListOrdered,
    },
    {
      title: "Native Android",
      description: "Built for Android with Material You design.",
      icon: Smartphone,
    },
    {
      title: "Notifications",
      description: "Real-time updates directly in your status bar.",
      icon: Bell,
    },
    {
      title: "Fast Search",
      description: "Instantly find your downloaded files built-in.",
      icon: Search,
    },
    {
      title: "Integration",
      description: "Intercept Telegram links with just one tap.",
      icon: Send,
    },
    {
      title: "Storage Control",
      description: "Manage cache and free up space easily.",
      icon: HardDrive,
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#0F0F0F] relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Header Block like the image */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Advanced
          </h2>
          <span className="bg-primary text-black font-bold px-6 py-2 rounded-full text-xl md:text-2xl">
            Features
          </span>
        </div>

        {/* Outer Dark Grey Container */}
        <div className="bg-[#1C1C1C] rounded-[3rem] p-6 md:p-12 border border-white/5 shadow-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-5 flex flex-col gap-4 shadow-lg hover:-translate-y-1 transition-transform cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F0F0F0] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-bold text-black text-lg leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-black/60 text-sm font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
