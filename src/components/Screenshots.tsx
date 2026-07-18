"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './Screenshots.module.css';

const screenshots = [
  { id: 1, title: 'Downloads', image: '/screenshots/photo_2026-07-13_22-39-36.jpg' },
  { id: 2, title: 'Completed', image: '/screenshots/photo_2026-07-13_22-39-39.jpg' },
  { id: 3, title: 'Telegram Files', image: '/screenshots/photo_2026-07-13_22-39-33.jpg' },
  { id: 4, title: 'Settings', image: '/screenshots/photo_2026-07-13_22-39-42.jpg' },
  { id: 5, title: 'Disconnect Account', image: '/screenshots/photo_2026-07-13_22-07-09.jpg' }
];

export default function Screenshots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className={`section-padding ${styles.screenshotsSection}`} id="screenshots">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">See it in action.</h2>
          <p className="text-subtitle">A glimpse of the premium Material 3 experience.</p>
        </div>

        <div className={styles.carouselContainer}>
          <button className={`${styles.navButton} ${styles.prevButton}`} onClick={scrollLeft} aria-label="Previous screenshot">
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.carousel} ref={containerRef}>
            {screenshots.map((item) => (
              <motion.div 
                key={item.id} 
                className={styles.mockupWrapper}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(item.id)}
              >
                <div className={styles.phoneFrame}>
                  <div className={styles.notch}></div>
                  <div className={styles.screen}>
                    <Image src={item.image} alt={item.title} fill className={styles.screenshotImage} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={scrollRight} aria-label="Next screenshot">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.phoneFrameLarge}>
              <div className={styles.notchLarge}></div>
              <div className={styles.screenLarge}>
                {selectedImage && (
                  <Image 
                    src={screenshots.find(s => s.id === selectedImage)?.image || ''} 
                    alt={screenshots.find(s => s.id === selectedImage)?.title || ''} 
                    fill 
                    className={styles.screenshotImage} 
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
