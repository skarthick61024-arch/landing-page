import type { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `${title} | TeleTorrent Blog`,
    description: `Read our comprehensive guide on ${title.toLowerCase()} using TeleTorrent.`,
    alternates: {
      canonical: `https://teletorrent.app/blog/${params.slug}`,
    },
  };
}

export default function BlogPost({ params }: Props) {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://teletorrent.app/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://teletorrent.app/blog"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": title
    }]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px', fontSize: '0.875rem' }}>
            <Link href="/blog" style={{ color: 'var(--md-sys-color-on-surface-variant)', textDecoration: 'none' }}>&larr; Back to Blog</Link>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '32px' }}>{title}</h1>
          <div style={{ fontSize: '1.125rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '24px' }}>
              Welcome to our guide on {title.toLowerCase()}. TeleTorrent is the definitive solution for Android users who need a robust background downloader.
            </p>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--md-sys-color-on-background)', fontWeight: 700, margin: '32px 0 16px 0' }}>Why You Need a Dedicated Downloader</h2>
            <p style={{ marginBottom: '24px' }}>
              Often, the official app kills background processes to save battery, breaking your downloads. TeleTorrent uses native Android background services to prevent this.
            </p>
            {/* Placeholder content for CMS */}
          </div>
        </div>
      </main>
    </>
  );
}
