export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ayan Pal",
        "alternateName": "ayanpal01",
        "url": "https://ayanpal.tech",
        "image": ["https://ayanpal.tech/ayan1.jpg", "https://ayanpal.tech/ayan2.jpg", "https://ayanpal.tech/ayan3.jpg", "https://ayanpal.tech/ayan4.jpg", "https://ayanpal.tech/ayan5.jpg", "https://ayanpal.tech/ayan6.jpg", "https://ayanpal.tech/ayan7.jpg", "https://ayanpal.tech/ayan8.jpg", "https://ayanpal.tech/ayan9.jpg", "https://ayanpal.tech/ayan10.jpg"],
        "sameAs": [
            "https://github.com/ayanpal01",
            "https://www.instagram.com/ayan.pal__",
            "https://twitter.com/ayanpal01",
            "https://www.linkedin.com/in/ayanpal01"
        ],
        "jobTitle": "Full Stack Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "description": "Full Stack Developer specializing in React, Next.js, and mobile app development."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
