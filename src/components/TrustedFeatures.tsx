"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play, Pause, DownloadCloud, Bell, ListOrdered, HardDrive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TrustedFeatures() {
  const features = [
    { name: "Resume", icon: Play },
    { name: "Pause", icon: Pause },
    { name: "Background Download", icon: DownloadCloud },
    { name: "Notifications", icon: Bell },
    { name: "Queue", icon: ListOrdered },
    { name: "File Manager", icon: HardDrive },
  ];

  return (
    <section className="py-12 bg-background border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted Core Features
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="rounded-2xl border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground pr-2">
                      {feature.name}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
