"use client";

import { Check, X } from 'lucide-react';
import styles from './ComparisonTable.module.css';

const features = [
  { name: 'Download Speed', teletorrent: 'High-speed parallel', browser: 'Standard', telegram: 'Throttled' },
  { name: 'Resume Support', teletorrent: true, browser: false, telegram: false },
  { name: 'Background Downloads', teletorrent: true, browser: false, telegram: false },
  { name: 'Direct to Storage', teletorrent: true, browser: true, telegram: false },
  { name: 'Pause & Manage', teletorrent: true, browser: true, telegram: false },
  { name: 'Ad-free Experience', teletorrent: true, browser: false, telegram: true }
];

export default function ComparisonTable() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">Why TeleTorrent?</h2>
          <p className="text-subtitle">See how we stack up against the alternatives.</p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th className={styles.highlight}>TeleTorrent</th>
                <th>Browser</th>
                <th>Telegram App</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i}>
                  <td className={styles.featureName}>{f.name}</td>
                  <td className={styles.highlight}>
                    {typeof f.teletorrent === 'boolean' ? (
                      f.teletorrent ? <Check className={styles.check} /> : <X className={styles.cross} />
                    ) : (
                      <span className={styles.textHighlight}>{f.teletorrent}</span>
                    )}
                  </td>
                  <td>
                    {typeof f.browser === 'boolean' ? (
                      f.browser ? <Check className={styles.check} /> : <X className={styles.cross} />
                    ) : (
                      <span>{f.browser}</span>
                    )}
                  </td>
                  <td>
                    {typeof f.telegram === 'boolean' ? (
                      f.telegram ? <Check className={styles.check} /> : <X className={styles.cross} />
                    ) : (
                      <span>{f.telegram}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
