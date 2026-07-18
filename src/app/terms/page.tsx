import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | TeleTorrent',
  description: 'Terms and conditions for using the TeleTorrent app.',
  alternates: {
    canonical: 'https://teletorrent.app/terms',
  },
};

export default function TermsPage() {
  return (
    <main style={{ paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '32px' }}>Terms of Service</h1>
        <div style={{ fontSize: '1.125rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '24px' }}>Last updated: July 2026</p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--md-sys-color-on-background)', fontWeight: 700, margin: '32px 0 16px 0' }}>1. Usage Restrictions</h2>
          <p style={{ marginBottom: '24px' }}>TeleTorrent is a third-party client for Telegram. By using our app, you must abide by the official Telegram Terms of Service. We do not host, provide, or take responsibility for the media downloaded via our platform.</p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--md-sys-color-on-background)', fontWeight: 700, margin: '32px 0 16px 0' }}>2. Liability</h2>
          <p style={{ marginBottom: '24px' }}>The app is provided "as is", without warranty of any kind. In no event shall the developers be liable for any claim, damages, or other liability.</p>
        </div>
      </div>
    </main>
  );
}
