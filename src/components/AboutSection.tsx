import styles from './AboutSection.module.css';
import { Target, Code, Map } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className={`container section-padding ${styles.aboutSection}`}>
      <div className={styles.header}>
        <h2 className="text-h2">About TeleTorrent</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Target size={40} className={styles.icon} />
          <h3 className="text-h3">Mission</h3>
          <p className="text-subtitle">
            To provide a completely free, highly secure, and blazing fast file management experience for heavy Telegram users. We believe that accessing your media should never be a bottleneck.
          </p>
        </div>
        <div className={styles.card}>
          <Code size={40} className={styles.icon} />
          <h3 className="text-h3">Technology</h3>
          <p className="text-subtitle">
            Built directly on top of the native Telegram Database Library (TDLib), utilizing advanced multi-threaded background networking APIs to guarantee maximum bandwidth saturation.
          </p>
        </div>
        <div className={styles.card}>
          <Map size={40} className={styles.icon} />
          <h3 className="text-h3">Roadmap</h3>
          <p className="text-subtitle">
            Currently focusing on a built-in media streaming engine to let you watch files as they download. In the future, we plan to expand to desktop platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
