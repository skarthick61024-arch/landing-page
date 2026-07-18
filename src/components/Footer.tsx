import Link from 'next/link';
import { Code, Send, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="support" className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="TeleTorrent" />
            TeleTorrent
          </Link>
          <p className={styles.description}>
            The ultimate companion app for your Telegram media. Download large files faster securely on Android.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Telegram"><Send size={20} /></a>
            <a href="#" aria-label="Code"><Code size={20} /></a>
            <a href="#" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>

        <div className={styles.links}>
          <h4>Product</h4>
          <ul>
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#screenshots">Screenshots</Link></li>
            <li><Link href="#download">Download APK</Link></li>
            <li><Link href="#reviews">Reviews</Link></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Support</h4>
          <ul>
            <li><Link href="#faq">FAQ</Link></li>
            <li><a href="#">Telegram Community</a></li>
            <li><a href="#">Report a Bug</a></li>
            <li><a href="#">Feature Request</a></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">DMCA Policy</a></li>
            <li><a href="#">Open Source Licenses</a></li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} TeleTorrent Inc. All rights reserved.</p>
        <p>Version 2.0.1 Stable</p>
      </div>
    </footer>
  );
}
