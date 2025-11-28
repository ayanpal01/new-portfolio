'use client';

import { useState, useEffect } from 'react';
import { PersonalData, getPersonalData, updatePersonalData } from '@/lib/firebase-utils';

export default function PersonalDataManager() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    resumeUrl: '',
    techStack: ''
  });

  useEffect(() => {
    fetchPersonalData();
  }, []);

  const fetchPersonalData = async () => {
    try {
      const data = await getPersonalData();
      if (data) {
        setFormData({
          name: data.name,
          title: data.title,
          description: data.description,
          resumeUrl: data.resumeUrl,
          techStack: data.techStack.join(', ')
        });
      }
    } catch (error) {
      console.error('Error fetching personal data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      const personalData: PersonalData = {
        ...formData,
        techStack: formData.techStack.split(',').map(tech => tech.trim())
      };

      await updatePersonalData(personalData);
      alert('Personal data updated successfully!');
    } catch (error) {
      console.error('Error saving personal data:', error);
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
          Loading personal data...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-200 mb-2">Personal Information</h2>
        <p className="text-slate-400">Manage your personal details and hero section content</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Professional Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 h-24 resize-none"
              placeholder="A brief description about yourself..."
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Resume URL
            </label>
            <input
              type="url"
              value={formData.resumeUrl}
              onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
              placeholder="/resume.pdf or https://..."
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Tech Stack (comma separated)
            </label>
            <input
              type="text"
              value={formData.techStack}
              onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
              placeholder="Flutter, React, Next.js, Node.js, TypeScript"
              required
            />
            <p className="text-slate-400 text-xs mt-1">
              These will be displayed as badges in the hero section
            </p>
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
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm {formData.name || 'Your Name'}
          </h1>
          <p className="text-lg text-slate-300">
            {formData.title || 'Your Professional Title'}
          </p>
          <p className="text-slate-400">
            {formData.description || 'Your description will appear here...'}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {formData.techStack.split(',').filter(tech => tech.trim()).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-full text-sm text-slate-300"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}