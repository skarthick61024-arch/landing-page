"use client";

import { Check, X, Minus } from 'lucide-react';
import styles from './Comparison.module.css';

const criteria = [
  { name: "Download Speed", teletorrent: "Max Speed (Multi-thread)", browser: "Average", telegram: "Average" },
  { name: "Background Downloads", teletorrent: true, browser: true, telegram: false },
  { name: "Resume Support", teletorrent: true, browser: "Sometimes", telegram: true },
  { name: "Parallel Downloads", teletorrent: "Unlimited", browser: "Limited", telegram: "Limited" },
  { name: "Storage Control", teletorrent: "Full Control", browser: "Downloads Folder", telegram: "App Cache" },
  { name: "Open Media Directly", teletorrent: true, browser: false, telegram: true }
];

export default function Comparison() {
  const renderValue = (val: string | boolean) => {
    if (val === true) return <Check className={styles.iconCheck} size={20} />;
    if (val === false) return <X className={styles.iconCross} size={20} />;
    if (val === "Sometimes") return <Minus className={styles.iconMinus} size={20} />;
    return val;
  };

  return (
    <section className={`section-padding ${styles.comparisonSection}`} id="comparison">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">Why TeleTorrent?</h2>
          <p className="text-subtitle">See how we compare against the alternatives.</p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Features</th>
                <th className={styles.highlightCol}>TeleTorrent</th>
                <th>Browser</th>
                <th>Telegram App</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((item, index) => (
                <tr key={index}>
                  <td className={styles.featureName}>{item.name}</td>
                  <td className={styles.highlightCol}>{renderValue(item.teletorrent)}</td>
                  <td>{renderValue(item.browser)}</td>
                  <td>{renderValue(item.telegram)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
