import { Zap, Activity, Infinity, Smartphone } from 'lucide-react';
import styles from './FeaturesRowSection.module.css';

const features = [
  { icon: <Zap size={32} />, title: "High Quality", desc: "You can download all your files without losing quality. We directly capture the original Telegram file." },
  { icon: <Activity size={32} />, title: "Fast Downloading", desc: "Using advanced multi-threading, quickly download your desired videos from Telegram with just a few simple clicks." },
  { icon: <Infinity size={32} />, title: "Unlimited Download", desc: "Through this platform, you can download files anywhere, anytime, without limiting the number of downloads." },
  { icon: <Smartphone size={32} />, title: "Support All Devices", desc: "TeleTorrent is an Android native platform that integrates seamlessly with your mobile operating system." }
];

export default function FeaturesRowSection() {
  return (
    <section id="features" className={`container section-padding ${styles.featuresRow}`}>
      <div className={styles.header}>
        <p className="text-subtitle" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Why To Choose</p>
        <h2 className="text-h2">TeleTorrent <span style={{ color: 'var(--color-emerald)' }}>Downloader</span></h2>
      </div>

      <div className={styles.grid}>
        {features.map((feat, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.iconWrapper}>{feat.icon}</div>
            <h3 className={styles.title}>{feat.title}</h3>
            <p className={styles.desc}>{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
