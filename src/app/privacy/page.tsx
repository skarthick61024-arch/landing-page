import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TeleTorrent',
  description: 'TeleTorrent respects your privacy. Learn how we handle data and why we require zero permissions.',
  alternates: {
    canonical: 'https://teletorrent.app/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '32px' }}>Privacy Policy</h1>
        <div style={{ fontSize: '1.125rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '24px' }}>Last updated: July 2026</p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--md-sys-color-on-background)', fontWeight: 700, margin: '32px 0 16px 0' }}>1. Introduction</h2>
          <p style={{ marginBottom: '24px' }}>TeleTorrent is built with privacy as its core foundation. Because our app interfaces directly with Telegram's official TDLib API, we do not intercept, monitor, or store any of your data.</p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--md-sys-color-on-background)', fontWeight: 700, margin: '32px 0 16px 0' }}>2. Data Collection</h2>
          <p style={{ marginBottom: '24px' }}>We collect exactly zero personal information. Your Telegram login happens locally on your device directly with Telegram servers. Our app does not have its own backend server.</p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--md-sys-color-on-background)', fontWeight: 700, margin: '32px 0 16px 0' }}>3. Permissions</h2>
          <p style={{ marginBottom: '24px' }}>We only request the Android Storage permission in order to save the downloaded videos and files to your local Downloads folder.</p>
        </div>
      </div>
    </main>
  );
}
