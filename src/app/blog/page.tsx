import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | TeleTorrent',
  description: 'Read the latest guides, tips, and tutorials on how to download files from Telegram seamlessly using TeleTorrent.',
  alternates: {
    canonical: 'https://teletorrent.app/blog',
  },
};

const POSTS = [
  { slug: 'how-to-download-telegram-videos', title: 'How to Download Telegram Videos Fast', date: 'July 13, 2026' },
  { slug: 'best-telegram-download-manager', title: 'The Best Telegram Download Manager of 2026', date: 'June 28, 2026' },
  { slug: 'telegram-file-download-guide', title: 'Ultimate Guide to Telegram File Downloads', date: 'May 15, 2026' },
  { slug: 'resume-telegram-downloads', title: 'How to Resume Broken Telegram Downloads', date: 'April 10, 2026' },
];

export default function BlogPage() {
  return (
    <main style={{ paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '40px' }}>Blog & Guides</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {POSTS.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none' }}>
              <div style={{ padding: '24px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', transition: 'box-shadow 0.2s ease' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '8px' }}>{post.date}</div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--md-sys-color-primary)', fontWeight: 700, margin: 0 }}>{post.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
