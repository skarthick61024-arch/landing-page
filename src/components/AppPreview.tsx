"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AppPreview.module.css';

const screenshots = [
  { id: 'downloads', title: 'Downloads', image: '/screenshots/photo_2026-07-13_22-39-36.jpg' },
  { id: 'completed', title: 'Completed', image: '/screenshots/photo_2026-07-13_22-39-39.jpg' },
  { id: 'telegram', title: 'Telegram Files', image: '/screenshots/photo_2026-07-13_22-39-33.jpg' },
  { id: 'settings', title: 'Settings', image: '/screenshots/photo_2026-07-13_22-39-42.jpg' },
  { id: 'disconnect', title: 'Disconnect Account', image: '/screenshots/photo_2026-07-13_22-07-09.jpg' }
];

export default function AppPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`section-padding ${styles.previewSection}`} id="preview">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">Designed for Android.</h2>
          <p className="text-subtitle">A native, premium experience with Material 3.</p>
        </div>

        <div className={styles.mockupContainer}>
          <div className={styles.phoneFrame}>
            <div className={styles.notch}></div>
            <div className={styles.screen}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={styles.screenshotImageWrapper}
                >
                  <Image 
                    src={screenshots[currentIndex].image} 
                    alt={screenshots[currentIndex].title}
                    fill
                    className={styles.screenshotImage}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <div className={styles.indicators}>
            {screenshots.map((item, index) => (
              <button
                key={item.id}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show ${item.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
