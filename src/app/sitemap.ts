import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.teletorrent.me';
  
  const staticRoutes = [
    '',
    '/telegram-downloader',
    '/telegram-video-downloader',
    '/telegram-file-downloader',
    '/telegram-media-downloader',
    '/telegram-document-downloader',
    '/telegram-download-manager',
    '/blog',
    '/about',
    '/privacy',
    '/terms',
    '/contact',
    '/help'
  ];

  const blogRoutes = blogPosts.map(post => `/blog/${post.slug}`);
  const routes = [...staticRoutes, ...blogRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : (route.includes('downloader') || route.includes('manager') ? 0.9 : 0.6),
  }));
}
