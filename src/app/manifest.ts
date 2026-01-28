import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'D Egiiterian Kitchen & Cafe',
        short_name: 'D Egiiterian',
        description: 'Nashik\'s Premium Egg-centric Fine Dining Experience',
        start_url: '/',
        display: 'standalone',
        background_color: '#050505',
        theme_color: '#FFD000',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
