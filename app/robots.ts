import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // API routes ko bots se hide karna best practice hai
    },
    sitemap: 'https://organicmushroomsfarm.com/sitemap-main.xml',
  };
}
