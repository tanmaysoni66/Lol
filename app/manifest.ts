import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Organic Mushrooms Farm - Commercial Cultivation & Setup',
    short_name: 'OrganicMushroom',
    description: 'Commercial Mushroom Training, Turnkey Farm Setup, and F1 Hybrid Spawn Pan-India & Globally.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf5ff',
    theme_color: '#7C3AED',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
