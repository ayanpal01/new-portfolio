import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Library | Ayan Pal',
  description: 'Collection of resources, tools, and bookmarks curated by Ayan Pal',
};

export default function LibraryPage() {
  const resources = [
    {
      category: 'Development Tools',
      items: [
        { name: 'Next.js', url: 'https://nextjs.org', description: 'The React Framework for Production' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com', description: 'A utility-first CSS framework' },
        { name: 'Framer Motion', url: 'https://www.framer.com/motion', description: 'Animation library for React' },
      ]
    },
    {
      category: 'Learning Resources',
      items: [
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Web development documentation' },
        { name: 'LeetCode', url: 'https://leetcode.com', description: 'Platform for coding practice' },
        { name: 'TypeScript Docs', url: 'https://www.typescriptlang.org/docs', description: 'Official TypeScript documentation' },
      ]
    },
    {
      category: 'Design Inspiration',
      items: [
        { name: 'Dribbble', url: 'https://dribbble.com', description: 'Design inspiration community' },
        { name: 'Awwwards', url: 'https://www.awwwards.com', description: 'Web design awards' },
        { name: 'Behance', url: 'https://www.behance.net', description: 'Creative work showcase' },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-zinc-600 hover:text-black text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Library
          </h1>
          <p className="text-xl text-zinc-600">
            A curated collection of resources, tools, and inspiration that I find useful.
          </p>
        </div>

        {/* Resources */}
        <div className="space-y-12">
          {resources.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIdx) => (
                  <a
                    key={itemIdx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-white border border-zinc-200 rounded-xl hover:shadow-lg hover:border-zinc-300 transition-all"
                  >
                    <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-zinc-600">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
