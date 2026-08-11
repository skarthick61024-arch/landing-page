import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is a Telegram downloader?",
      answer: "A Telegram downloader is an application that allows you to easily find, manage, and download media and files directly from your Telegram account, specifically from your Saved Messages."
    },
    {
      question: "How can I download Telegram videos?",
      answer: "With TeleTorrent, simply forward the video to your Telegram Saved Messages, open the TeleTorrent app, and tap download. The video will be saved directly to your device."
    },
    {
      question: "Can I download Telegram files?",
      answer: "Yes, TeleTorrent supports downloading any file type available on Telegram. Whether it's documents, media, or archives, you can manage and download them seamlessly."
    },
    {
      question: "What files does TeleTorrent support?",
      answer: "TeleTorrent supports videos, documents, ZIP archives, APK files, audio tracks, and all other standard media types that Telegram allows you to send and receive."
    },
    {
      question: "Can I download Telegram documents?",
      answer: "Absolutely. TeleTorrent is perfect for downloading large PDFs, Word documents, Excel sheets, and other professional files directly from your Telegram account."
    },
    {
      question: "Can I download ZIP files from Telegram?",
      answer: "Yes, you can easily download ZIP and RAR archives. TeleTorrent manages the download process so you can access your compressed files securely."
    },
    {
      question: "Can I resume interrupted downloads?",
      answer: "Yes, TeleTorrent features full resume support for interrupted or paused downloads, ensuring you never have to restart large file transfers from scratch."
    },
    {
      question: "Does TeleTorrent work on Android?",
      answer: "Yes, TeleTorrent is natively built for Android, offering a smooth, optimized experience for managing and downloading your Telegram files on the go."
    },
    {
      question: "Is TeleTorrent free?",
      answer: "TeleTorrent is completely free to use with zero ads and no premium tiers required for core downloading functionality."
    },
    {
      question: "Does TeleTorrent require Telegram login?",
      answer: "Yes, to securely access your Saved Messages and download your files, you need to log in to your Telegram account through the TeleTorrent app."
    }
  ]

  return (
    <section className="bg-[#0B0C0E] py-24 md:py-32 border-t border-[#141518]">
      <div className="container mx-auto px-5 md:px-12 max-w-[800px]">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#F5F5F5] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#8D919B]">
            Everything you need to know about downloading files with TeleTorrent.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-[#141518]">
              <AccordionTrigger className="text-[#F5F5F5] hover:text-[#B7FF32] text-left text-[15px] md:text-[16px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#8D919B] text-[14px] md:text-[15px] leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
