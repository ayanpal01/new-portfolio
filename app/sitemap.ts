import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.ayanpal.tech';

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date().toISOString();
    
    const routes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/about-ayan-pal`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/about-ayan-pal-developer`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ];

    return routes;
}
