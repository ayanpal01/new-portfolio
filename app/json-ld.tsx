export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://www.ayanpal.tech/#person",
        "name": "Ayan Pal",
        "alternateName": ["ayanpal01", "Ayan", "ayan pal"],
        "url": "https://www.ayanpal.tech",
        "image": {
            "@type": "ImageObject",
            "url": "https://www.ayanpal.tech/ayan-pal-full-stack-developer.jpg",
            "caption": "Ayan Pal - Full Stack Developer"
        },
        "sameAs": [
            "https://github.com/ayanpal01",
            "https://www.linkedin.com/in/ayanpal01",
            "https://twitter.com/ayanpal01",
            "https://x.com/ayanpal01",
            "https://www.instagram.com/ayan.pal__"
        ],
        "jobTitle": "Full Stack Developer",
        "description": "Ayan Pal (ayanpal01) is a professional Full Stack Developer from Kolkata, India, specializing in React, Next.js, React Native, Node.js, and modern web application development.",
        "knowsAbout": [
            "Full Stack Development",
            "React.js",
            "Next.js",
            "React Native",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "Web Development",
            "Mobile App Development",
            "UI/UX Design",
            "MongoDB",
            "Express.js",
            "Tailwind CSS"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "nationality": {
            "@type": "Country",
            "name": "India"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "addressCountry": "IN"
        },
        "email": "work.ayanpal@gmail.com",
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Adamas University"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.ayanpal.tech/#website",
        "url": "https://www.ayanpal.tech",
        "name": "Ayan Pal - Full Stack Developer Portfolio",
        "description": "Official portfolio website of Ayan Pal (ayanpal01), Full Stack Developer",
        "publisher": {
            "@id": "https://www.ayanpal.tech/#person"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.ayanpal.tech/?s={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const profilePageSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "dateCreated": "2025-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "mainEntity": {
            "@id": "https://www.ayanpal.tech/#person"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ayanpal.tech"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
