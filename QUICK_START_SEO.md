# Quick SEO Setup Commands

## Immediate Actions (Copy & Paste These)

### 1. Rename Images
```bash
cd public
mv ayan1.jpg ayan-pal-full-stack-developer.jpg
mv ayan2.jpg ayanpal01-developer-portfolio.jpg
mv "ayan pal Banner.png" ayan-pal-banner.png
cd ..
```

### 2. Update Hero Component Image Reference
The image reference in hero.tsx needs to be updated manually to:
```tsx
src="/ayan-pal-full-stack-developer.jpg"
```

### 3. Install SEO Packages
```bash
npm install next-sitemap
```

### 4. Create next-sitemap.config.js
```bash
cat > next-sitemap.config.js << 'EOF'
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ayanpal.tech',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
  },
}
EOF
```

### 5. Add to package.json scripts
```bash
npm pkg set scripts.postbuild="next-sitemap"
```

### 6. Build and Test
```bash
npm run build
```

---

## Google Search Console Setup

1. Go to: https://search.google.com/search-console
2. Add property: `https://www.ayanpal.tech`
3. Verify ownership (use HTML tag method in layout.tsx)
4. Submit sitemap: `https://www.ayanpal.tech/sitemap.xml`
5. Request indexing for homepage

---

## Social Media Quick Updates

### GitHub (Priority #1)
- Bio: "Ayan Pal - Full Stack Developer | React, Next.js, Node.js"
- Website: https://www.ayanpal.tech
- Location: Kolkata, West Bengal, India
- Name: Ayan Pal

### LinkedIn
- Headline: "Ayan Pal | Full Stack Developer | React • Next.js • Node.js • React Native"
- Custom URL: linkedin.com/in/ayanpal01 (verify it's set)
- Website in Contact Info: https://www.ayanpal.tech
- Featured: Add your portfolio link

### X/Twitter
- Name: Ayan Pal
- Bio: "Ayan Pal (ayanpal01) | Full Stack Developer 🚀 React • Next.js • Node.js | 📍 Kolkata | 🌐 ayanpal.tech"
- Website: https://www.ayanpal.tech

### Instagram
- Name: Ayan Pal | Developer
- Bio:
```
Ayan Pal (ayanpal01)
💻 Full Stack Developer
🎨 React • Next.js • Node.js
📍 Kolkata, India
👇 Portfolio
```
- Link: https://www.ayanpal.tech

---

## First Week Content Plan

### Day 1: LinkedIn Post
```
I'm Ayan Pal (ayanpal01), a Full Stack Developer from Kolkata, India. 

Just launched my portfolio website showcasing my work in:
🚀 React & Next.js
⚡ React Native
🔧 Node.js & Express
💾 MongoDB

Check it out: ayanpal.tech

#AyanPal #FullStackDeveloper #React #NextJS #WebDevelopment
```

### Day 2: Twitter Thread
```
🧵 Hi, I'm Ayan Pal (ayanpal01) - Full Stack Developer

Here's what I do:

1/ Build scalable web apps with React & Next.js
2/ Create cross-platform mobile apps with React Native  
3/ Design robust backends with Node.js & MongoDB

Portfolio: ayanpal.tech

#buildinpublic #webdev
```

### Day 3: GitHub README Update
Update your GitHub profile README with:
- Your name prominently
- Link to ayanpal.tech
- Your tech stack
- Current projects

### Day 4: Dev.to Article
Title: "Hi, I'm Ayan Pal - My Journey as a Full Stack Developer"
- Include your name 10+ times
- Link to your portfolio
- Showcase your projects
- Add professional photo

---

## Analytics Setup

### Google Analytics 4
1. Go to: https://analytics.google.com
2. Create property for "ayanpal.tech"
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add to app/layout.tsx

### Google Tag Manager (Optional)
For advanced tracking

---

## Quick Wins (30 Minutes)

1. ✅ Rename main image file
2. ✅ Update GitHub bio + website link
3. ✅ Update LinkedIn headline
4. ✅ Post on LinkedIn introducing yourself
5. ✅ Submit site to Google Search Console
6. ✅ Add Google Analytics

---

## Monitoring Commands

### Check if site is indexed
```bash
# Google search:
site:ayanpal.tech

# Check specific page:
site:ayanpal.tech "Ayan Pal"
```

### Check backlinks
```bash
# Google search:
link:ayanpal.tech
```

---

## Weekly Tasks

**Monday:**
- Post on LinkedIn about your work
- Check Google Search Console for new queries

**Wednesday:**
- Engage in developer communities
- Comment on tech blogs with name in profile

**Friday:**
- Create content (blog, tweet, etc.)
- Monitor rankings for your name

---

## Testing Your SEO

### Rich Results Test
https://search.google.com/test/rich-results
Enter: https://www.ayanpal.tech

### Schema Validator  
https://validator.schema.org/
Enter: https://www.ayanpal.tech

### Page Speed
https://pagespeed.web.dev/
Enter: https://www.ayanpal.tech

### Mobile-Friendly Test
https://search.google.com/test/mobile-friendly
Enter: https://www.ayanpal.tech

---

Done! 🚀
