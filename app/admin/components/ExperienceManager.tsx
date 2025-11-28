'use client';

import { useState, useEffect } from 'react';
import { 
  ExperienceData, 
  getExperiences, 
  addExperience, 
  updateExperience, 
  deleteExperience 
} from '@/lib/firebase-utils';

export default function ExperienceManager() {
  const [experiences, setExperiences] = useState<ExperienceData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingExperience, setEditingExperience] = useState<ExperienceData | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    type: 'work' as 'work' | 'education',
    title: '',
    organization: '',
    period: '',
    description: '',
    icon: ''
  });

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const data = await getExperiences();
      setExperiences(data);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingExperience?.id) {
        await updateExperience(editingExperience.id, formData);
      } else {
        await addExperience(formData);
      }

      await fetchExperiences();
      resetForm();
    } catch (error) {
      console.error('Error saving experience:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteExperience(id);
        await fetchExperiences();
      } catch (error) {
        console.error('Error deleting experience:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      type: 'work',
      title: '',
      organization: '',
      period: '',
      description: '',
      icon: ''
    });
    setEditingExperience(null);
    setShowForm(false);
  };

  const startEdit = (experience: ExperienceData) => {
    setEditingExperience(experience);
    setFormData({
      type: experience.type,
      title: experience.title,
      organization: experience.organization,
      period: experience.period,
      description: experience.description,
      icon: experience.icon
    });
    setShowForm(true);
  };

  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-2 text-slate-300">
          <div className="w-6 h-6 border-2 border-slate-600 border-t-cyan-500 rounded-full animate-spin"></div>
          Loading experiences...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-200">Manage Experience & Education</h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors"
        >
          Add Entry
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-200">
                {editingExperience ? 'Edit Entry' : 'Add New Entry'}
              </h3>
              <button
                onClick={resetForm}
                className="text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as 'work' | 'education' })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                >
                  <option value="work">Work Experience</option>
                  <option value="education">Education</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Title/Position
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
                  Organization/Institution
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Period
                </label>
                <input
                  type="text"
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                  placeholder="e.g., Nov 2023 - Nov 2024"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 h-20 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Icon (Emoji)
                </label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                  placeholder="💼 for work, 🎓 for education"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors"
                >
                  {editingExperience ? 'Update Entry' : 'Add Entry'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Work Experience Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
          💼 Work Experience
        </h3>
        <div className="grid gap-4">
          {workExperiences.length === 0 ? (
            <div className="text-center py-8 bg-slate-800/20 border border-slate-700/30 rounded-xl">
              <p className="text-slate-400">No work experience added yet.</p>
            </div>
          ) : (
            workExperiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{experience.icon}</span>
                      <h4 className="text-lg font-semibold text-slate-200">
                        {experience.title}
                      </h4>
                    </div>
                    <p className="text-cyan-400 font-medium mb-1">
                      {experience.organization}
                    </p>
                    <p className="text-slate-400 text-sm mb-2">
                      {experience.period}
                    </p>
                    <p className="text-slate-300 text-sm">
                      {experience.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => startEdit(experience)}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-md hover:bg-blue-500/30 transition-colors text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => experience.id && handleDelete(experience.id)}
                      className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 rounded-md hover:bg-red-500/30 transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
          🎓 Education
        </h3>
        <div className="grid gap-4">
          {educationExperiences.length === 0 ? (
            <div className="text-center py-8 bg-slate-800/20 border border-slate-700/30 rounded-xl">
              <p className="text-slate-400">No education entries added yet.</p>
            </div>
          ) : (
            educationExperiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{experience.icon}</span>
                      <h4 className="text-lg font-semibold text-slate-200">
                        {experience.title}
                      </h4>
                    </div>
                    <p className="text-purple-400 font-medium mb-1">
                      {experience.organization}
                    </p>
                    <p className="text-slate-400 text-sm mb-2">
                      {experience.period}
                    </p>
                    <p className="text-slate-300 text-sm">
                      {experience.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => startEdit(experience)}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-md hover:bg-blue-500/30 transition-colors text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => experience.id && handleDelete(experience.id)}
                      className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 rounded-md hover:bg-red-500/30 transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}