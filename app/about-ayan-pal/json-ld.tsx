import { generatePersonSchema } from '@/lib/seo-utils';

export default function AboutJsonLd() {
    const personSchema = generatePersonSchema({
        url: "https://www.ayanpal.tech/about-ayan-pal",
    });

    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://www.ayanpal.tech/about-ayan-pal#aboutpage",
        "url": "https://www.ayanpal.tech/about-ayan-pal",
        "name": "About Ayan Pal - Full-Stack Web Developer",
        "description": "Ayan Pal is a Full-Stack Web Developer from Kolkata, India. Specializing in React, Next.js, React Native, Node.js, TypeScript, and modern web technologies. Passionate about building innovative digital solutions.",
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
        "@id": "https://www.ayanpal.tech/about-ayan-pal#breadcrumb",
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
                "name": "About Ayan Pal",
                "item": {
                    "@type": "WebPage",
                    "@id": "https://www.ayanpal.tech/about-ayan-pal",
                    "url": "https://www.ayanpal.tech/about-ayan-pal"
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
