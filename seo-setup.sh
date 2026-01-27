#!/bin/bash

# SEO Quick Setup Script for Ayan Pal Portfolio
# Run this script to complete critical SEO tasks

echo "🚀 Ayan Pal Portfolio - SEO Quick Setup"
echo "========================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo ""

# Step 1: Rename images
echo "Step 1/5: Renaming images for SEO..."
cd public || exit

if [ -f "ayan1.jpg" ]; then
    mv ayan1.jpg ayan-pal-full-stack-developer.jpg
    echo "✅ Renamed ayan1.jpg → ayan-pal-full-stack-developer.jpg"
else
    echo "ℹ️  ayan1.jpg already renamed or not found"
fi

if [ -f "ayan2.jpg" ]; then
    mv ayan2.jpg ayanpal01-developer-portfolio.jpg
    echo "✅ Renamed ayan2.jpg → ayanpal01-developer-portfolio.jpg"
else
    echo "ℹ️  ayan2.jpg already renamed or not found"
fi

if [ -f "ayan pal Banner.png" ]; then
    mv "ayan pal Banner.png" ayan-pal-banner.png
    echo "✅ Renamed 'ayan pal Banner.png' → ayan-pal-banner.png"
else
    echo "ℹ️  Banner already renamed or not found"
fi

cd ..
echo ""

# Step 2: Install next-sitemap if not installed
echo "Step 2/5: Checking dependencies..."
if ! grep -q "next-sitemap" package.json; then
    echo "📦 Installing next-sitemap..."
    npm install --save-dev next-sitemap
    echo "✅ next-sitemap installed"
else
    echo "✅ next-sitemap already installed"
fi
echo ""

# Step 3: Create next-sitemap config
echo "Step 3/5: Creating sitemap configuration..."
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
    additionalSitemaps: [
      'https://www.ayanpal.tech/sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/admin/*'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
}
EOF
echo "✅ Created next-sitemap.config.js"
echo ""

# Step 4: Update package.json scripts
echo "Step 4/5: Updating build scripts..."
# Check if postbuild script exists
if grep -q "\"postbuild\":" package.json; then
    echo "ℹ️  postbuild script already exists"
else
    # Use npm pkg to add the script
    npm pkg set scripts.postbuild="next-sitemap"
    echo "✅ Added postbuild script to package.json"
fi
echo ""

# Step 5: Show next steps
echo "Step 5/5: Setup complete! ✅"
echo ""
echo "========================================"
echo "🎉 CRITICAL TASKS COMPLETED"
echo "========================================"
echo ""
echo "✅ Images renamed for SEO"
echo "✅ Sitemap configuration created"
echo "✅ Build scripts updated"
echo ""
echo "========================================"
echo "📋 NEXT STEPS (REQUIRED)"
echo "========================================"
echo ""
echo "1. Update image references in code:"
echo "   File: components/hero.tsx (line ~143)"
echo "   Change: src=\"/ayan1.jpg\""
echo "   To: src=\"/ayan-pal-full-stack-developer.jpg\""
echo ""
echo "   File: app/layout.tsx (line ~41)"
echo "   Change: url: \"https://www.ayanpal.tech/ayan1.jpg\""
echo "   To: url: \"https://www.ayanpal.tech/ayan-pal-full-stack-developer.jpg\""
echo ""
echo "2. Build your project:"
echo "   npm run build"
echo ""
echo "3. Deploy to production"
echo ""
echo "4. Set up Google Search Console:"
echo "   → https://search.google.com/search-console"
echo "   → Add property: https://www.ayanpal.tech"
echo "   → Verify ownership"
echo "   → Submit sitemap: https://www.ayanpal.tech/sitemap.xml"
echo ""
echo "5. Update social profiles:"
echo "   → GitHub: Add website link"
echo "   → LinkedIn: Update headline + add portfolio"
echo "   → Twitter: Update bio + add website"
echo ""
echo "6. Create first LinkedIn post:"
echo "   → Introduce yourself as Ayan Pal (ayanpal01)"
echo "   → Share your portfolio link"
echo "   → Use hashtags: #AyanPal #FullStackDeveloper"
echo ""
echo "========================================"
echo "📚 DOCUMENTATION"
echo "========================================"
echo ""
echo "Review these files for complete guidance:"
echo "  • SEO_QUICK_REFERENCE.md - Quick action items"
echo "  • SEO_IMPLEMENTATION_SUMMARY.md - Complete overview"
echo "  • IMAGE_SEO_GUIDE.md - Image optimization details"
echo "  • SEO_STRATEGY_CHECKLIST.md - 30-day plan"
echo ""
echo "========================================"
echo "🚀 You're ready to dominate Google search!"
echo "========================================"
echo ""
