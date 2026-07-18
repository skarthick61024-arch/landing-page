"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "Is TeleTorrent safe to use?",
    answer: "Yes, absolutely. TeleTorrent communicates directly with Telegram's official API. Your data is encrypted and we do not store any files or personal information on our servers."
  },
  {
    question: "Where are files stored on my device?",
    answer: "You have complete control over this. TeleTorrent uses Android's native Storage Access Framework, allowing you to choose exactly which folder or external SD card you want your files saved to."
  },
  {
    question: "Does it support large files?",
    answer: "Yes! TeleTorrent is specifically optimized for large files (like 2GB+ movies or archives). It uses multi-threaded downloading to ensure you get the maximum possible speed your network allows."
  },
  {
    question: "Does it require a Telegram login?",
    answer: "Yes, to access private files and your own chats, you need to log in with your Telegram account securely. This is handled using the official Telegram TDLib client."
  },
  {
    question: "Can I resume downloads if I lose connection?",
    answer: "Definitely. TeleTorrent supports seamless pausing and resuming. If your network drops or you close the app, the download can be resumed from exactly where it left off."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.faqSection}`} id="faq">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">Frequently Asked Questions</h2>
          <p className="text-subtitle">Got questions? We've got answers.</p>
        </div>

        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${isOpen ? styles.open : ''}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={styles.faqAnswerContainer}
                    >
                      <div className={styles.faqAnswer}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
