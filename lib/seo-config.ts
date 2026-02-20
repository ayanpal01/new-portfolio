export const SEO_CONFIG = {
  baseUrl: 'https://www.ayanpal.tech',
  siteName: 'Ayan Pal',
  siteTitle: 'Ayan Pal (ayanpal01) - Full Stack Developer | React & Next.js Expert',
  siteDescription: 'Ayan Pal (@ayanpal01) - Full Stack Developer from Kolkata specializing in React, Next.js & Node.js. Professional portfolio, projects & tech insights.',
  
  author: {
    name: 'Ayan Pal',
    username: 'ayanpal01',
    email: 'work.ayanpal@gmail.com',
    location: 'Kolkata, West Bengal, India',
    jobTitle: 'Full Stack Developer',
    bio: 'Full Stack Developer and Tech Creator specializing in React, Next.js, React Native, and Node.js',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/ayanpal01',
    twitter: 'https://twitter.com/ayanpal01',
    github: 'https://github.com/ayanpal01',
    facebook: 'https://facebook.com/ayan.pal.3304',
    instagram: 'https://instagram.com/ayan.pal__',
    youtube: 'https://youtube.com/@ayanpal01',
    medium: 'https://medium.com/@ayanpal01',
  },

  keywords: [
    'Ayan Pal',
    'ayanpal01',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Software Developer Kolkata',
    'Tech Creator',
    'Web Developer India',
  ],

  openGraph: {
    type: 'profile',
    locale: 'en_US',
    image: {
      url: '/ayan-pal-full-stack-developer.jpg',
      width: 1200,
      height: 630,
      alt: 'Ayan Pal - Full Stack Developer (ayanpal01)',
    },
  },
} as const;

export const ENTITY_ID = `${SEO_CONFIG.baseUrl}/#person`;
export const WEBSITE_ID = `${SEO_CONFIG.baseUrl}/#website`;
export const WEBPAGE_ID = `${SEO_CONFIG.baseUrl}/#webpage`;
export const IMAGE_ID = `${SEO_CONFIG.baseUrl}/#primaryimage`;
