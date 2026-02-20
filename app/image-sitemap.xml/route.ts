import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://www.ayanpal.tech';
    
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    
    <!-- Homepage with images -->
    <url>
        <loc>${baseUrl}</loc>
        <image:image>
            <image:loc>${baseUrl}/ayan1.jpg</image:loc>
            <image:caption>Ayan Pal - Full Stack Web Developer from Kolkata, India</image:caption>
            <image:title>Ayan Pal Full Stack Web Developer</image:title>
            <image:geo_location>Kolkata, West Bengal, India</image:geo_location>
        </image:image>
    </url>
    
    <!-- About Ayan Pal page with all images -->
    <url>
        <loc>${baseUrl}/about-ayan-pal</loc>
        <image:image>
            <image:loc>${baseUrl}/ayan1.jpg</image:loc>
            <image:caption>Ayan Pal - Full Stack Web Developer from Kolkata, India</image:caption>
            <image:title>Ayan Pal Full Stack Web Developer</image:title>
            <image:geo_location>Kolkata, West Bengal, India</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>${baseUrl}/ayan-pal-img3.jpg</image:loc>
            <image:caption>Ayan Pal Software Developer - Building Modern Web Applications</image:caption>
            <image:title>Ayan Pal Software Developer Portfolio</image:title>
            <image:geo_location>Kolkata, India</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>${baseUrl}/ayan-pal-img4.jpg</image:loc>
            <image:caption>Ayan Pal - React Native Mobile App Developer</image:caption>
            <image:title>Ayan Pal React Native Developer</image:title>
            <image:geo_location>Kolkata, India</image:geo_location>
        </image:image>
    </url>
    
    <!-- About Ayan Pal Developer page with all images -->
    <url>
        <loc>${baseUrl}/about-ayan-pal-developer</loc>
        <image:image>
            <image:loc>${baseUrl}/ayan1.jpg</image:loc>
            <image:caption>Ayan Pal Developer - Full Stack Web Developer from Kolkata, India specializing in React and Next.js</image:caption>
            <image:title>Ayan Pal Full Stack Web Developer from India</image:title>
            <image:geo_location>Kolkata, West Bengal, India</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>${baseUrl}/ayan-pal-img3.jpg</image:loc>
            <image:caption>Ayan Pal Software Developer - Professional web developer creating scalable applications with MongoDB and Firebase</image:caption>
            <image:title>Ayan Pal Web Developer Portfolio</image:title>
            <image:geo_location>Kolkata, India</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>${baseUrl}/ayan-pal-img4.jpg</image:loc>
            <image:caption>Ayan Pal - React Native Mobile App Developer creating cross-platform applications</image:caption>
            <image:title>Ayan Pal React Native Developer</image:title>
            <image:geo_location>Kolkata, India</image:geo_location>
        </image:image>
    </url>
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
