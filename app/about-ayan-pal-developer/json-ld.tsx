import { generatePersonSchema } from '@/lib/seo-utils';

export default function AboutJsonLd() {
    const personSchema = generatePersonSchema({
        url: "https://www.ayanpal.tech/about-ayan-pal-developer",
    });

    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://www.ayanpal.tech/about-ayan-pal-developer#aboutpage",
        "url": "https://www.ayanpal.tech/about-ayan-pal-developer",
        "name": "About Ayan Pal - Full-Stack Web Developer from India",
        "description": "Ayan Pal is a Full-Stack Web Developer from India, not the author or public speaker. Specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered web applications.",
        "mainEntity": {
            "@id": "https://www.ayanpal.tech/#person"
        },
        "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.ayanpal.tech/#website"
        },
        "inLanguage": "en-US",
        "datePublished": "2026-02-20T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.ayanpal.tech/about-ayan-pal-developer#breadcrumb",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": {
                    "@type": "WebPage",
                    "@id": "https://www.ayanpal.tech",
                    "url": "https://www.ayanpal.tech"
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Ayan Pal (Developer)",
                "item": {
                    "@type": "WebPage",
                    "@id": "https://www.ayanpal.tech/about-ayan-pal-developer",
                    "url": "https://www.ayanpal.tech/about-ayan-pal-developer"
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                key="person-schema"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
                key="aboutpage-schema"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                key="breadcrumb-schema"
            />
        </>
    );
}
