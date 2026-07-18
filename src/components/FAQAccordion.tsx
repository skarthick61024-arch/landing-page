"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQAccordion.module.css';

const faqs = [
  { q: 'Is it safe to use TeleTorrent?', a: 'Yes. TeleTorrent only uses the official Telegram API and MTProto 2.0. We do not store your data or files.' },
  { q: 'Where are the downloaded files stored?', a: 'Files are downloaded directly to your devices local storage. You can access them via any file manager or open them directly in the app.' },
  { q: 'Does it support large files?', a: 'Absolutely! You can download files up to 2GB (or 4GB for Telegram Premium users), fully utilizing Telegrams maximum file size limits.' },
  { q: 'Does it require a Telegram login?', a: 'Yes. To access and download files sent to your Telegram account, you must log in securely via the official Telegram API.' },
  { q: 'Can I resume broken downloads?', a: 'Yes. TeleTorrent fully supports pausing and resuming downloads, even after app restarts or network interruptions.' }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">Frequently Asked Questions</h2>
          <p className="text-subtitle">Everything you need to know about TeleTorrent.</p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  className={styles.icon} 
                  style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.answerWrapper}
                  >
                    <div className={styles.answer}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
