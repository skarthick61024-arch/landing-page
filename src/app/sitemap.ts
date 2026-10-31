import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.teletorrent.me';
  const currentDate = new Date().toISOString();

  // All core static landing and tool routes
  const staticRouteConfigs: Array<{
    path: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/telegram-movie-downloader', priority: 0.95, changeFrequency: 'daily' },
    { path: '/telegram-downloader', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/telegram-video-downloader', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/telegram-file-downloader', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/telegram-download-manager', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/telegram-media-downloader', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/telegram-document-downloader', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/features', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/platform', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.9, changeFrequency: 'daily' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/help', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.65, changeFrequency: 'monthly' },
    { path: '/report-problem', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/delete-account', priority: 0.4, changeFrequency: 'yearly' },
  ];

  // Static routes with language alternates for Google Search Console
  const staticPages: MetadataRoute.Sitemap = staticRouteConfigs.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        'en-IN': `${baseUrl}${path}`,
        'en-US': `${baseUrl}${path}`,
        'x-default': `${baseUrl}${path}`,
      },
    },
  }));

  // Dynamic Blog posts with hreflang alternates
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString() || currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
    alternates: {
      languages: {
        'en-IN': `${baseUrl}/blog/${post.slug}`,
        'en-US': `${baseUrl}/blog/${post.slug}`,
        'x-default': `${baseUrl}/blog/${post.slug}`,
      },
    },
  }));

  return [...staticPages, ...blogPages];
}
