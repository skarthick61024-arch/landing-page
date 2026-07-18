"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ScreenshotsGallery.module.css';

const screenshots = [
  { id: 1, src: '/screenshots/photo_2026-07-13_22-07-09.jpg', alt: 'App Screenshot 1', title: 'Main Dashboard', desc: 'Manage all your active downloads.' },
  { id: 2, src: '/screenshots/photo_2026-07-13_22-39-33.jpg', alt: 'App Screenshot 2', title: 'Home Feed', desc: 'Discover parsed Telegram media.' },
  { id: 3, src: '/screenshots/photo_2026-07-13_22-39-36.jpg', alt: 'App Screenshot 3', title: 'Download Progress', desc: 'Real-time multi-threaded stats.' },
  { id: 4, src: '/screenshots/photo_2026-07-13_22-39-39.jpg', alt: 'App Screenshot 4', title: 'Settings Panel', desc: 'Configure network limits.' },
  { id: 5, src: '/screenshots/photo_2026-07-13_22-39-42.jpg', alt: 'App Screenshot 5', title: 'Media Player', desc: 'Built-in video player.' },
  { id: 6, src: '/screenshots/photo_2026-07-13_22-39-44.jpg', alt: 'App Screenshot 6', title: 'Smart Queue', desc: 'Prioritize your files.' }
];

export default function ScreenshotsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % screenshots.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + screenshots.length) % screenshots.length);
    }
  };

  return (
    <section id="screenshots" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">Pixel-perfect interface.</h2>
          <p className="text-subtitle">Take a closer look at the TeleTorrent experience.</p>
        </div>

        <div className={styles.gallery}>
          {screenshots.map((img, index) => (
            <motion.div 
              key={img.id}
              className={styles.mockupWrapper}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(index)}
            >
              <div className={styles.phoneMockup}>
                <div className={styles.notch}></div>
                <img src={img.src} alt={img.alt} className={styles.screenshot} loading="lazy" />
              </div>
              <div className={styles.caption}>
                <h4>{img.title}</h4>
                <p>{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className={styles.closeBtn}><X size={32} /></button>
            
            <button className={styles.navBtn} onClick={handlePrev}><ChevronLeft size={48} /></button>
            
            <motion.div 
              className={styles.lightboxContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={screenshots[selectedImage].src} alt="Enlarged screenshot" className={styles.enlargedImg} />
            </motion.div>
            
            <button className={styles.navBtn} onClick={handleNext}><ChevronRight size={48} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
