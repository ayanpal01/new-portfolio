import { SEO_CONFIG } from './seo-config';

interface PersonSchemaOptions {
    url?: string;
    additionalProperties?: Record<string, any>;
}

export function generatePersonSchema(options: PersonSchemaOptions = {}) {
    const { url = SEO_CONFIG.baseUrl, additionalProperties = {} } = options;

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SEO_CONFIG.baseUrl}/#person`,
        "name": "Ayan Pal",
        "givenName": "Ayan",
        "familyName": "Pal",
        "alternateName": "ayanpal01",
        "additionalName": ["ayanpal01", "@ayanpal01"],
        "url": SEO_CONFIG.baseUrl,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        },
        "image": {
            "@type": "ImageObject",
            "@id": `${SEO_CONFIG.baseUrl}/#primaryimage`,
            "url": `${SEO_CONFIG.baseUrl}/ayan-pal-developer.jpg`,
            "caption": "Ayan Pal - Full Stack Web Developer from India",
            "width": 1200,
            "height": 630,
            "inLanguage": "en-US"
        },
        "sameAs": [
            SEO_CONFIG.social.linkedin,
            SEO_CONFIG.social.github,
            SEO_CONFIG.social.twitter,
            SEO_CONFIG.social.facebook,
            SEO_CONFIG.social.instagram,
            SEO_CONFIG.social.youtube,
            SEO_CONFIG.social.medium,
            "https://x.com/ayanpal01"
        ],
        "jobTitle": "Full-Stack Web Developer",
        "disambiguatingDescription": "Full-Stack Web Developer from India specializing in modern web technologies, AI-powered applications, and software engineering. Not the author or public speaker.",
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Full Stack Developer",
            "occupationLocation": {
                "@type": "City",
                "name": "Kolkata"
            },
            "estimatedSalary": {
                "@type": "MonetaryAmountDistribution",
                "name": "Freelance"
            }
        },
        "description": "Ayan Pal (ayanpal01) is a professional Full-Stack Web Developer from Kolkata, India, specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered web application development.",
        "knowsAbout": ["Web Development",
            "React.js",
            "Next.js",
            "React Native",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "Web Development",
            "Mobile App Development",
            "Software Engineering",
            "AI-Powered Applications",
            "Machine Learning Integration",
            "UI/UX Design",
            "MongoDB",
            "Express.js",
            "Tailwind CSS",
            "Progressive Web Apps",
            "RESTful APIs",
            "GraphQL",
            "Cloud Computing APIs",
            "GraphQL"
        ],
        "knowsLanguage": ["en-US", "hi-IN", "bn-IN"],
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance",
            "url": SEO_CONFIG.baseUrl
        },
        "nationality": {
            "@type": "Country",
            "name": "India"
        },
        "homeLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kolkata",
                "addressRegion": "West Bengal",
                "addressCountry": "IN"
            }
        },
        "email": SEO_CONFIG.author.email,
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Adamas University",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            }
        },
        "brand": {
            "@type": "Brand",
            "name": "ayanpal01",
            "logo": {
                "@id": `${SEO_CONFIG.baseUrl}/#primaryimage`
            }
        },
        "identifier": [
            {
                "@type": "PropertyValue",
                "propertyID": "username",
                "value": "ayanpal01"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "email",
                "value": SEO_CONFIG.author.email
            }
        ],
        ...additionalProperties
    };
}
