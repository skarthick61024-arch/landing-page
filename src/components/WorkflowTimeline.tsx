"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Link2, Cpu, Download, PlayCircle, CheckCircle } from "lucide-react";

export function WorkflowTimeline() {
  const steps = [
    {
      title: "Paste Telegram Link",
      description: "Copy the media link from Telegram and paste it into TeleTorrent.",
      icon: Link2,
    },
    {
      title: "Analyze",
      description: "We instantly analyze the link to prepare your download.",
      icon: Cpu,
    },
    {
      title: "Start Download",
      description: "Your download begins immediately with maximum possible speed.",
      icon: Download,
    },
    {
      title: "Resume Anytime",
      description: "Pause and resume safely without losing any progress.",
      icon: PlayCircle,
    },
    {
      title: "Complete",
      description: "File is saved to your local storage, ready to use.",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">
            A seamless workflow designed to get your files as quickly as possible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex items-center gap-8 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pl-16 lg:pl-24" : "md:pr-16 lg:pr-24 text-left md:text-right"
                    }`}
                  >
                    <div className="bg-card border border-border p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
