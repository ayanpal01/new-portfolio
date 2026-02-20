import { generatePersonSchema } from '@/lib/seo-utils';

export default function JsonLd() {
    const personSchema = generatePersonSchema({
        url: "https://www.ayanpal.tech",
    });

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.ayanpal.tech/#website",
        "url": "https://www.ayanpal.tech",
        "name": "Ayan Pal",
        "alternateName": "ayanpal01",
        "description": "Official portfolio website of Ayan Pal (ayanpal01), Full Stack Developer and Tech Creator",
        "inLanguage": "en-US",
        "isPartOf": {
            "@id": "https://www.ayanpal.tech/#webpage"
        },
        "about": {
            "@id": "https://www.ayanpal.tech/#person"
        },
        "publisher": {
            "@id": "https://www.ayanpal.tech/#person"
        },
        "copyrightHolder": {
            "@id": "https://www.ayanpal.tech/#person"
        },
        "copyrightYear": 2026,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.ayanpal.tech/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.ayanpal.tech/#webpage",
        "url": "https://www.ayanpal.tech",
        "name": "Ayan Pal - Full Stack Developer Portfolio",
        "isPartOf": {
            "@id": "https://www.ayanpal.tech/#website"
        },
        "about": {
            "@id": "https://www.ayanpal.tech/#person"
        },
        "primaryImageOfPage": {
            "@id": "https://www.ayanpal.tech/#primaryimage"
        },
        "datePublished": "2025-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Ayan Pal (@ayanpal01) - Full Stack Developer from Kolkata specializing in React, Next.js & Node.js",
        "inLanguage": "en-US",
        "potentialAction": [{
            "@type": "ReadAction",
            "target": ["https://www.ayanpal.tech"]
        }]
    };

    const profilePageSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": "https://www.ayanpal.tech/#profilepage",
        "url": "https://www.ayanpal.tech",
        "name": "Ayan Pal - Professional Profile",
        "dateCreated": "2025-02-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "mainEntity": {
            "@id": "https://www.ayanpal.tech/#person"
        },
        "mainEntityOfPage": {
            "@id": "https://www.ayanpal.tech/#webpage"
        },
        "isPartOf": {
            "@id": "https://www.ayanpal.tech/#website"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.ayanpal.tech/#breadcrumb",
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
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.ayanpal.tech/#organization",
        "name": "ayanpal01",
        "alternateName": "Ayan Pal",
        "url": "https://www.ayanpal.tech",
        "logo": {
            "@id": "https://www.ayanpal.tech/#primaryimage"
        },
        "founder": {
            "@id": "https://www.ayanpal.tech/#person"
        },
        "sameAs": [
            "https://www.linkedin.com/in/ayanpal01",
            "https://twitter.com/ayanpal01",
            "https://github.com/ayanpal01",
            "https://facebook.com/ayan.pal.3304",
            "https://instagram.com/ayan.pal__",
            "https://youtube.com/@think-with-ayan",
            "https://medium.com/@ayanpal01"
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                key="website-schema"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
                key="webpage-schema"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
                key="profilepage-schema"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                key="breadcrumb-schema"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                key="organization-schema"
            />
        </>
    );
}
