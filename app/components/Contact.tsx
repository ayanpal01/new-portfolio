'use client';

import { useState } from 'react';
import { usePortfolioData } from '../../hooks/usePortfolioData';

export default function Contact() {
  const [socialInput, setSocialInput] = useState('');
  const [socialResponse, setSocialResponse] = useState('');
  const [showSocialResponse, setShowSocialResponse] = useState(false);
  const { data: portfolioData, isLoading } = usePortfolioData();

  const { contact } = portfolioData;
  const { socialPlatforms } = contact;

  if (isLoading) {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-6 h-6 border-2 border-slate-600 border-t-cyan-500 rounded-full animate-spin"></div>
              Loading contact info...
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleSocialCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = socialInput.toLowerCase().trim();
      
      if (socialPlatforms[command as keyof typeof socialPlatforms]) {
        setSocialResponse(`✓ Opening ${command}...`);
        setShowSocialResponse(true);
        setTimeout(() => {
          window.open(socialPlatforms[command as keyof typeof socialPlatforms], '_blank');
          setSocialInput('');
          setShowSocialResponse(false);
        }, 500);
      } else {
        setSocialResponse(`Command not found. Try: instagram, twitter, facebook, linkedin, github, youtube`);
        setShowSocialResponse(true);
        setTimeout(() => {
          setShowSocialResponse(false);
        }, 3000);
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {contact.title}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        {/* Social Terminal */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-700/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-slate-400 text-xs ml-2 font-mono">social-connect</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="text-slate-500 text-xs mb-4">
                Type a platform name and press Enter to visit
              </div>

              {/* Available Commands */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                {Object.keys(socialPlatforms).map((platform) => (
                  <div key={platform} className="flex items-center gap-2 text-slate-400 text-xs">
                    <span className="text-cyan-400">→</span>
                    <span>{platform}</span>
                  </div>
                ))}
              </div>

              {/* Input Line */}
              <div className="flex items-center gap-2 bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700">
                <span className="text-green-400">$</span>
                <span className="text-blue-400">connect</span>
                <input
                  type="text"
                  value={socialInput}
                  onChange={(e) => setSocialInput(e.target.value)}
                  onKeyDown={handleSocialCommand}
                  placeholder="platform name..."
                  className="flex-1 bg-transparent border-none outline-none text-slate-300 placeholder-slate-600 text-sm"
                />
                <span className="inline-block w-1.5 h-3.5 bg-green-400 animate-pulse"></span>
              </div>

              {/* Response */}
              {showSocialResponse && (
                <div className="text-slate-400 text-xs px-4 animate-fade-in">
                  {socialResponse}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            Designed & Developed by <span className="text-cyan-400 font-semibold">{portfolioData.footer.developer}</span> using{' '}
            {portfolioData.footer.technologies?.map((tech, index) => (
              <span key={tech}>
                <span className="text-slate-300">{tech}</span>
                {index < portfolioData.footer.technologies.length - 1 && ' & '}
              </span>
            )) || 'React'}
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © {portfolioData.footer.copyrightYear} All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
