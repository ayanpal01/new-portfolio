export function generatePersonSchema(options: { url?: string } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.ayanpal.tech/#person",
    name: "Ayan Pal",
    url: options.url || "https://www.ayanpal.tech",
    image: "https://www.ayanpal.tech/ayan-pal-full-stack-developer.jpg",
    jobTitle: "Full-Stack Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      "https://github.com/ayanpal01",
      "https://linkedin.com/in/ayanpal01",
      "https://x.com/ayanpal01",
      "https://www.instagram.com/ayanpal.exe/"
    ],
    description: "Ayan Pal is a Full-Stack Web Developer from Kolkata, India. Specializing in React, Next.js, React Native, Node.js, TypeScript, and modern web technologies."
  };
}
