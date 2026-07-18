import { Shield, Lock, HardDrive, UserX } from 'lucide-react';
import styles from './SecuritySection.module.css';

const securityFeatures = [
  { icon: <HardDrive size={32} />, title: "Local Files", desc: "Files stay exactly where they belong: on your local storage." },
  { icon: <Lock size={32} />, title: "Encrypted", desc: "End-to-end encrypted communication via the Telegram API." },
  { icon: <Shield size={32} />, title: "No Extra Permissions", desc: "We only ask for the permissions absolutely necessary to write files." },
  { icon: <UserX size={32} />, title: "No Tracking", desc: "Zero analytics, zero telemetry. Your privacy is paramount." }
];

export default function SecuritySection() {
  return (
    <section className={`container section-padding ${styles.security}`}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Shield size={48} className={styles.mainIcon} />
          <h2 className="text-h2">Uncompromising Security</h2>
          <p className="text-subtitle">
            TeleTorrent is built with privacy first. We don't want your data.
          </p>
        </div>

        <div className={styles.grid}>
          {securityFeatures.map((feat, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{feat.icon}</div>
              <h3 className={styles.title}>{feat.title}</h3>
              <p className={styles.desc}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
