"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is TeleTorrent?",
    answer: "TeleTorrent is a dedicated download manager for Android designed specifically to fetch, organize, and manage large files, videos, and documents directly from your Telegram account."
  },
  {
    question: "How do I download Telegram files?",
    answer: "Simply log in with your Telegram account securely, browse your chats or saved messages, select the files you want, and hit download. TeleTorrent handles the rest in the background."
  },
  {
    question: "Does TeleTorrent support background downloads?",
    answer: "Yes, fully. Unlike the official Telegram app which might stop downloading when closed or when the screen is locked, TeleTorrent keeps your downloads running reliably in the background."
  },
  {
    question: "Can I download videos?",
    answer: "Absolutely. You can download any video format (MP4, MKV, WEBM, etc.) regardless of size. TeleTorrent is optimized for large media files."
  },
  {
    question: "Does it support documents?",
    answer: "Yes. PDFs, Word documents, ZIP archives, APKs, and any other file type shared on Telegram can be downloaded effortlessly."
  },
  {
    question: "Can I resume downloads?",
    answer: "Yes. If your connection drops or you need to pause a download, TeleTorrent allows you to resume exactly from where you left off without starting over."
  },
  {
    question: "Is it secure?",
    answer: "Your login happens directly via the standard secure protocols, and we do not store your passwords or intercept your messages."
  },
  {
    question: "Is my data private?",
    answer: "Your downloaded files are stored locally on your device. We do not track your download history or share any personal information with third parties."
  },
]

export function FAQSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">Frequently Asked Questions</h2>
          <p className="text-lg md:text-xl font-normal text-muted-foreground">
            Everything you need to know about TeleTorrent.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-xl py-6 text-foreground">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm font-normal text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
