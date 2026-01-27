import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.ayanpal.tech',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: 'https://www.ayanpal.tech/#experience',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.ayanpal.tech/#projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://www.ayanpal.tech/#skills',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.ayanpal.tech/#contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
    ];
}
