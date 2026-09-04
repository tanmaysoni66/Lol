import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://organicmushroomsfarm.com';
  const routes = [
    '',
    '/about',
    '/training',
    '/equipment',
    '/mushroom-types',
    '/consultation',
    '/turnkey-projects',
    '/spawn-seed',
    '/states',
    '/gallery',
    '/faq',
    '/contact',
    '/enquiry',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
