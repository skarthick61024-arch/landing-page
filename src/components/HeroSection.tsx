"use client";

import { Download } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroBg}>
        <div className={`container ${styles.content}`}>
          <div className={styles.topLogo}>
            <img src="/icon.png" alt="TeleTorrent" className={styles.smallLogo} />
          </div>
          
          <h1 className={styles.title}>
            Universal Telegram<br/>
            <span className="text-gradient">Downloader</span>
          </h1>
          
          <p className={styles.subtitle}>
            Do Not Lose Data! Explore TeleTorrent: A Free Solution<br/>
            To Quickly Download Videos Or Files With Just One Click!
          </p>
          
          <div className={styles.actionArea}>
            <div className={styles.inputMock}>
              <span className={styles.placeholder}>Download TeleTorrent APK...</span>
              <a href="/teletorrent.apk" download="teletorrent.apk" className={styles.downloadBtn}>
                Download
              </a>
            </div>
            
            <div className={styles.platforms}>
              <span>Supported Platforms:</span>
              <div className={styles.platformIcons}>
                <span className={styles.platformIcon}>Android</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved Bottom Edge SVG */}
        <div className={styles.curve}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="var(--bg-black)"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
