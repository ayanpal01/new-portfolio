import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.ayanpal.tech';

export async function GET() {
    const currentDate = new Date().toISOString();
    
    const posts = [
        {
            title: "Ayan Pal (Developer) | Full-Stack Web Developer",
            description: "Ayan Pal is a Full-Stack Web Developer from India, specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered applications.",
            link: BASE_URL,
            pubDate: currentDate,
        },
        {
            title: "About Ayan Pal | Full-Stack Web Developer Portfolio",
            description: "Learn about Ayan Pal, a Full-Stack Web Developer from Kolkata, India. Passionate about React, Next.js, Node.js, TypeScript, and building innovative web applications.",
            link: `${BASE_URL}/about-ayan-pal`,
            pubDate: currentDate,
        },
        {
            title: "About Ayan Pal – Full-Stack Web Developer from India",
            description: "Ayan Pal is a Full-Stack Web Developer from India. Specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered applications.",
            link: `${BASE_URL}/about-ayan-pal-developer`,
            pubDate: currentDate,
        },
    ];

    const rssItems = posts
        .map(
            (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.link}</link>
      <guid isPermaLink="true">${post.link}</guid>
      <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
    </item>`
        )
        .join('');

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ayan Pal - Full-Stack Web Developer</title>
    <link>${BASE_URL}</link>
    <description>Ayan Pal is a Full-Stack Web Developer from India specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered applications.</description>
    <language>en-US</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

    return new Response(rssFeed, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
        },
    });
}
