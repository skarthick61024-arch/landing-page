import { Check, X } from 'lucide-react';
import styles from './ComparisonSection.module.css';

export default function ComparisonSection() {
  return (
    <section className={`container section-padding ${styles.comparison}`}>
      <div className={styles.header}>
        <h2 className="text-h2">Why TeleTorrent?</h2>
        <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          See how we stack up against the alternatives for downloading Telegram media.
        </p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thFeature}>Feature</th>
              <th className={styles.thTele}>TeleTorrent</th>
              <th className={styles.thCompetitor}>Telegram App</th>
              <th className={styles.thCompetitor}>Browsers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Background Downloads</td>
              <td className={styles.tdTele}><Check className={styles.check} size={20} /></td>
              <td><X className={styles.cross} size={20} /></td>
              <td><Check className={styles.check} size={20} /></td>
            </tr>
            <tr>
              <td>Multi-threaded Speeds</td>
              <td className={styles.tdTele}><Check className={styles.check} size={20} /></td>
              <td><X className={styles.cross} size={20} /></td>
              <td><X className={styles.cross} size={20} /></td>
            </tr>
            <tr>
              <td>Direct Telegram Link parsing</td>
              <td className={styles.tdTele}><Check className={styles.check} size={20} /></td>
              <td><Check className={styles.check} size={20} /></td>
              <td><X className={styles.cross} size={20} /></td>
            </tr>
            <tr>
              <td>Resume Failed Downloads</td>
              <td className={styles.tdTele}><Check className={styles.check} size={20} /></td>
              <td><X className={styles.cross} size={20} /></td>
              <td><Check className={styles.check} size={20} /></td>
            </tr>
            <tr>
              <td>Advanced Queue Management</td>
              <td className={styles.tdTele}><Check className={styles.check} size={20} /></td>
              <td><X className={styles.cross} size={20} /></td>
              <td><X className={styles.cross} size={20} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
