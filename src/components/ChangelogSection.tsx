import styles from './ChangelogSection.module.css';

const logs = [
  { version: "v2.0.1", date: "October 24, 2026", type: "Stable", updates: ["Added dynamic Material 3 theming", "Improved parsing for extremely large files", "Fixed Wi-Fi drop bug"] },
  { version: "v1.9.4", date: "September 10, 2026", type: "Stable", updates: ["Introduced Smart Queue management", "Optimized background battery usage", "UI enhancements"] },
  { version: "v1.8.0", date: "July 15, 2026", type: "Stable", updates: ["Initial Telegram API integration", "Multi-threaded downloading beta", "Bug fixes"] }
];

export default function ChangelogSection() {
  return (
    <section className={`container section-padding ${styles.changelog}`}>
      <div className={styles.header}>
        <h2 className="text-h2">Changelog</h2>
        <p className="text-subtitle">Constant improvements to deliver the best experience.</p>
      </div>

      <div className={styles.timeline}>
        {logs.map((log, idx) => (
          <div key={idx} className={styles.logEntry}>
            <div className={styles.meta}>
              <span className={styles.version}>{log.version}</span>
              <span className={styles.date}>{log.date}</span>
              <span className={styles.badge}>{log.type}</span>
            </div>
            <ul className={styles.updates}>
              {log.updates.map((update, i) => (
                <li key={i}>{update}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
