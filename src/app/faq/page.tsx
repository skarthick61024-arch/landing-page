import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | TeleTorrent',
  description: 'Find answers to common questions about TeleTorrent, the fastest Telegram downloader for Android. Learn how to download videos, manage files, and more.',
  alternates: {
    canonical: 'https://teletorrent.app/faq',
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to download Telegram files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TeleTorrent allows you to download any file or video from Telegram directly in the background. Just copy the message link or share it to TeleTorrent, and it will handle the rest at maximum speed."
        }
      },
      {
        "@type": "Question",
        "name": "Is TeleTorrent safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. TeleTorrent uses Telegram's official TDLib (Telegram Database Library) and connects directly to Telegram's secure servers. We do not store your data, messages, or login credentials."
        }
      },
      {
        "@type": "Question",
        "name": "Where are downloaded files stored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Files are stored directly in your device's native Downloads folder, making them instantly accessible to any media player or file manager."
        }
      },
      {
        "@type": "Question",
        "name": "Does it support large files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. TeleTorrent supports downloading files up to 2GB (or 4GB for Telegram Premium users) without any artificial limits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I resume downloads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, TeleTorrent supports pause and resume functionality natively, allowing you to stop large downloads and continue them later without losing progress."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <FAQ />
      </main>
    </>
  );
}
