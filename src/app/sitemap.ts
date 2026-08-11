import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.teletorrent.me';
  
  const routes = [
    '',
    '/telegram-downloader',
    '/telegram-video-downloader',
    '/telegram-file-downloader',
    '/telegram-media-downloader',
    '/telegram-document-downloader',
    '/telegram-download-manager',
    '/about',
    '/privacy',
    '/terms',
    '/contact',
    '/help'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : (route.includes('downloader') || route.includes('manager') ? 0.9 : 0.6),
  }));
}
