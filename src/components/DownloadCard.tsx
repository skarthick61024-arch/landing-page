"use client";

import { Download, Info, CheckCircle2 } from 'lucide-react';
import styles from './DownloadCard.module.css';

export default function DownloadCard() {
  return (
    <section id="download" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.cardGlow} />
          
          <div className={styles.content}>
            <h2 className="text-h2">Ready to download faster?</h2>
            <p className="text-subtitle">Get the latest version of TeleTorrent for Android.</p>
            
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Version</span>
                <span className={styles.value}>1.2.0</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Size</span>
                <span className={styles.value}>24.5 MB</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Requires</span>
                <span className={styles.value}>Android 8.0+</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Updated</span>
                <span className={styles.value}>Oct 24, 2026</span>
              </div>
            </div>

            <button className={`btn btn-primary ${styles.downloadBtn}`}>
              <Download size={24} />
              Download APK
            </button>

            <div className={styles.checksum}>
              <Info size={14} />
              <span>SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span>
            </div>
            
            <div className={styles.guarantee}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>100% Free, Secure and Open-Core.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
