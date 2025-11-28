'use client';

import { useState, useEffect } from 'react';
import { ContactData, getContactData, updateContactData } from '@/lib/firebase-utils';

export default function ContactManager() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    instagram: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    github: '',
    youtube: ''
  });

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const data = await getContactData();
      if (data) {
        setFormData({
          title: data.title,
          subtitle: data.subtitle,
          instagram: data.socialPlatforms.instagram || '',
          twitter: data.socialPlatforms.twitter || '',
          facebook: data.socialPlatforms.facebook || '',
          linkedin: data.socialPlatforms.linkedin || '',
          github: data.socialPlatforms.github || '',
          youtube: data.socialPlatforms.youtube || ''
        });
      }
    } catch (error) {
      console.error('Error fetching contact data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      const contactData: ContactData = {
        title: formData.title,
        subtitle: formData.subtitle,
        socialPlatforms: {
          instagram: formData.instagram,
          twitter: formData.twitter,
          facebook: formData.facebook,
          linkedin: formData.linkedin,
          github: formData.github,
          youtube: formData.youtube
        }
      };

      await updateContactData(contactData);
      alert('Contact data updated successfully!');
    } catch (error) {
      console.error('Error saving contact data:', error);
      alert('Error saving data. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-2 text-slate-300">
          <div className="w-6 h-6 border-2 border-slate-600 border-t-cyan-500 rounded-full animate-spin"></div>
          Loading contact data...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-200 mb-2">Contact Information</h2>
        <p className="text-slate-400">Manage your contact section and social media links</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section Headers */}
        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Section Content</h3>
          
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Section Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Section Subtitle
              </label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                required
              />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Social Media Links</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <span className="flex items-center gap-2">
                  📸 Instagram
                </span>
              </label>
              <input
                type="url"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                placeholder="https://instagram.com/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <span className="flex items-center gap-2">
                  🐦 Twitter
                </span>
              </label>
              <input
                type="url"
                value={formData.twitter}
                onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                placeholder="https://twitter.com/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <span className="flex items-center gap-2">
                  👤 Facebook
                </span>
              </label>
              <input
                type="url"
                value={formData.facebook}
                onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                placeholder="https://facebook.com/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <span className="flex items-center gap-2">
                  💼 LinkedIn
                </span>
              </label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <span className="flex items-center gap-2">
                  💻 GitHub
                </span>
              </label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                placeholder="https://github.com/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <span className="flex items-center gap-2">
                  📺 YouTube
                </span>
              </label>
              <input
                type="url"
                value={formData.youtube}
                onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                placeholder="https://youtube.com/@username"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                Saving...
              </div>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </form>

      {/* Preview */}
      <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">Preview</h3>
        <div className="space-y-3">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {formData.title || 'Connect With Me'}
          </h2>
          <p className="text-slate-400">
            {formData.subtitle || 'Find me on social media platforms'}
          </p>
          
          <div className="grid grid-cols-3 gap-2 pt-4">
            {Object.entries({
              instagram: '📸',
              twitter: '🐦',
              facebook: '👤',
              linkedin: '💼',
              github: '💻',
              youtube: '📺'
            }).map(([platform, icon]) => {
              const url = formData[platform as keyof typeof formData];
              return url ? (
                <div
                  key={platform}
                  className="flex items-center gap-2 text-cyan-400 text-sm"
                >
                  <span>{icon}</span>
                  <span>{platform}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}