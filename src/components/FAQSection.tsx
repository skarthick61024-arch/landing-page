"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQSection() {
  const faqs = [
    {
      question: "How do I download Telegram files?",
      answer:
        "Simply copy the media link from Telegram and paste it into TeleTorrent, or use our native Telegram integration to forward files directly to the app for instant downloading.",
    },
    {
      question: "Can I resume downloads?",
      answer:
        "Yes! TeleTorrent fully supports pausing and resuming downloads. If your connection drops, the app will automatically resume from where it left off.",
    },
    {
      question: "Is TeleTorrent free?",
      answer:
        "Yes, TeleTorrent is completely free to use with all core features included. We believe in providing the best download manager experience for everyone.",
    },
    {
      question: "Does it support background downloading?",
      answer:
        "Absolutely. You can start a download and close the app. TeleTorrent will continue downloading your files safely in the background.",
    },
    {
      question: "Where are files saved?",
      answer:
        "Files are saved directly to your device's local storage. You can customize the exact download location in the Settings menu.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/50">
            Everything you need to know about TeleTorrent.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
