import { Download, FileKey, Smartphone, Info } from 'lucide-react';
import styles from './DownloadSection.module.css';

export default function DownloadSection() {
  return (
    <section id="download" className={`container section-padding ${styles.downloadSection}`}>
      <div className={styles.header}>
        <h2 className="text-h2">Get TeleTorrent</h2>
        <p className="text-subtitle">Install the latest version directly to your device.</p>
      </div>

      <div className={`glass-panel ${styles.downloadCard}`}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className="text-h3">Latest Release</h3>
            <p className={styles.version}>Version 2.0.1 (Stable)</p>
          </div>
          <a href="/teletorrent.apk" download="teletorrent.apk" className={`btn btn-primary ${styles.mainBtn}`}>
            <Download size={20} /> Download APK (12.6 MB)
          </a>
        </div>

        <div className={styles.specsGrid}>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Release Date</span>
            <span className={styles.specValue}>October 24, 2026</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}><Smartphone size={14} /> Android Requirement</span>
            <span className={styles.specValue}>Android 10.0+ (API 29)</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Architecture</span>
            <span className={styles.specValue}>Universal (arm64-v8a, armeabi-v7a)</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}><FileKey size={14} /> Digital Signature</span>
            <span className={styles.specValue}>Verified & Signed by TeleTorrent Inc.</span>
          </div>
        </div>

        <div className={styles.checksumBox}>
          <div className={styles.checksumHeader}>
            <span className={styles.specLabel}>SHA-256 Checksum</span>
            <button className={styles.copyBtn}>Copy</button>
          </div>
          <code className={styles.checksum}>
            a8f5f167f44f4964e6c998dee827110c8d1544a434c442345e691232b7a9f81a
          </code>
        </div>

        <div className={styles.releaseNotes}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Info size={16} /> Release Notes
          </h4>
          <ul>
            <li>Added dynamic Material 3 theming support.</li>
            <li>Improved parsing speed for large Telegram video links.</li>
            <li>Fixed a bug where downloads paused incorrectly on Wi-Fi drop.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
