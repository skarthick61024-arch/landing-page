import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, ShieldCheck, Zap } from 'lucide-react';
import styles from '@/components/PlayStoreHeader.module.css';

export const metadata: Metadata = {
  title: 'Download TeleTorrent APK | Free Telegram Downloader',
  description: 'Download the latest version of TeleTorrent for Android. Experience high-speed background downloads for Telegram videos and files.',
  alternates: {
    canonical: 'https://teletorrent.app/download',
  },
};

export default function DownloadPage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.03em' }}>
          Get TeleTorrent
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '40px', lineHeight: 1.6 }}>
          Download the most powerful, secure, and fully-featured Telegram downloader for Android. Always free, zero ads.
        </p>

        <a 
          href="https://github.com/teletorrent/app/releases/latest/download/teletorrent.apk" 
          className="btn btn-primary"
          style={{ padding: '16px 32px', fontSize: '1.25rem', borderRadius: '9999px', display: 'inline-flex', gap: '12px', boxShadow: '0 8px 24px rgba(118, 184, 63, 0.3)' }}
        >
          <Download size={24} />
          <span>Download APK (v1.2.0)</span>
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '64px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={32} color="var(--md-sys-color-primary)" />
            <span style={{ fontWeight: 600 }}>100% Secure</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--md-sys-color-on-surface-variant)' }}>Verified by Play Protect</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Zap size={32} color="var(--md-sys-color-primary)" />
            <span style={{ fontWeight: 600 }}>Max Speed</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--md-sys-color-on-surface-variant)' }}>Multi-thread engine</span>
          </div>
        </div>
      </div>
    </main>
  );
}
