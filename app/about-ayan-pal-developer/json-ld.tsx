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

    const imageObject1 = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "@id": "https://www.ayanpal.tech/ayan1.jpg#imageobject",
        "url": "https://www.ayanpal.tech/ayan1.jpg",
        "contentUrl": "https://www.ayanpal.tech/ayan1.jpg",
        "width": "400",
        "height": "500",
        "caption": "Ayan Pal - Full Stack Web Developer from Kolkata, India specializing in React and Next.js",
        "description": "Professional photo of Ayan Pal, a Full-Stack Web Developer from Kolkata, India, specializing in React, Next.js, and modern web technologies. Not an author or speaker.",
        "name": "Ayan Pal Full Stack Web Developer from India",
        "author": {
            "@type": "Person",
            "@id": "https://www.ayanpal.tech/#person",
            "name": "Ayan Pal"
        },
        "copyrightHolder": {
            "@type": "Person",
            "@id": "https://www.ayanpal.tech/#person",
            "name": "Ayan Pal"
        },
        "representativeOfPage": true
    };

    const imageObject2 = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "@id": "https://www.ayanpal.tech/ayan-pal-img3.jpg#imageobject",
        "url": "https://www.ayanpal.tech/ayan-pal-img3.jpg",
        "contentUrl": "https://www.ayanpal.tech/ayan-pal-img3.jpg",
        "width": "400",
        "height": "500",
        "caption": "Ayan Pal - web developer creating scalable applications with MongoDB and Firebase",
        "description": "Ayan Pal, Full-Stack Web Developer from India creating scalable and innovative web solutions with MongoDB, Firebase, React, and Next.js",
        "name": "Ayan Pal Web Developer Portfolio",
        "author": {
            "@type": "Person",
            "@id": "https://www.ayanpal.tech/#person",
            "name": "Ayan Pal"
        },
        "copyrightHolder": {
            "@type": "Person",
            "@id": "https://www.ayanpal.tech/#person",
            "name": "Ayan Pal"
        }
    };

    const imageObject3 = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "@id": "https://www.ayanpal.tech/ayan-pal-img4.jpg#imageobject",
        "url": "https://www.ayanpal.tech/ayan-pal-img4.jpg",
        "contentUrl": "https://www.ayanpal.tech/ayan-pal-img4.jpg",
        "width": "400",
        "height": "500",
        "caption": "Ayan Pal - React Native Mobile App Developer creating cross-platform applications",
        "description": "Ayan Pal, Full-Stack Developer specializing in web development",
        "name": "Ayan Pal React Native Developer",
        "author": {
            "@type": "Person",
            "@id": "https://www.ayanpal.tech/#person",
            "name": "Ayan Pal"
        },
        "copyrightHolder": {
            "@type": "Person",
            "@id": "https://www.ayanpal.tech/#person",
            "name": "Ayan Pal"
        }
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObject1) }}
                key="image1-schema"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObject2) }}
                key="image2-schema"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObject3) }}
                key="image3-schema"
            />
        </>
    );
}
