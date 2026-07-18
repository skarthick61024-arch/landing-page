import { Zap, Send, PlaySquare, CloudDownload, ListTree, Bell, Play, Shield, Lock, Smartphone } from 'lucide-react';
import styles from './FeaturesSection.module.css';

const features = [
  { icon: <Zap size={24} />, title: "Ultra Fast Downloads", description: "Multi-threaded downloading to max out your connection speed." },
  { icon: <Send size={24} />, title: "Telegram Integration", description: "Directly parse and download from Telegram messages." },
  { icon: <PlaySquare size={24} />, title: "Resume Downloads", description: "Never lose progress. Pause and resume large files anytime." },
  { icon: <CloudDownload size={24} />, title: "Background Downloads", description: "Close the app and let downloads finish seamlessly in the background." },
  { icon: <ListTree size={24} />, title: "Smart Queue", description: "Prioritize files, set limits, and manage your download queue automatically." },
  { icon: <Bell size={24} />, title: "Native Notifications", description: "Get real-time progress updates directly in your Android notification shade." },
  { icon: <Play size={24} />, title: "Open With Any Player", description: "Stream or play downloaded media in VLC, MX Player, or your favorite app." },
  { icon: <Shield size={24} />, title: "Secure Downloads", description: "Files are verified and downloaded securely without corruption." },
  { icon: <Lock size={24} />, title: "Privacy First", description: "No tracking, no telemetry. What you download stays on your device." },
  { icon: <Smartphone size={24} />, title: "Material 3 UI", description: "A beautifully crafted, modern Android experience with dynamic colors." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className={`container section-padding ${styles.features}`}>
      <div className={styles.header}>
        <h2 className="text-h2">Everything you need.</h2>
        <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          TeleTorrent is built with premium features designed to give you the ultimate downloading experience on Android.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feat, idx) => (
          <div key={idx} className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
              {feat.icon}
            </div>
            <h3 className={styles.title}>{feat.title}</h3>
            <p className={styles.description}>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
