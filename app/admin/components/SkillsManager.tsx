'use client';

import { useState, useEffect } from 'react';
import { 
  SkillCategory, 
  getSkills, 
  addSkill, 
  updateSkill, 
  deleteSkill 
} from '@/lib/firebase-utils';

export default function SkillsManager() {
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingSkill, setEditingSkill] = useState<SkillCategory | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    category: '',
    icon: '',
    skills: '',
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'shadow-blue-500/50'
  });

  const colorOptions = [
    { color: 'from-blue-500 to-cyan-500', glow: 'shadow-blue-500/50' },
    { color: 'from-green-500 to-emerald-500', glow: 'shadow-green-500/50' },
    { color: 'from-purple-500 to-pink-500', glow: 'shadow-purple-500/50' },
    { color: 'from-orange-500 to-red-500', glow: 'shadow-orange-500/50' },
  ];

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const data = await getSkills();
      setSkills(data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const skillData = {
        ...formData,
        skills: formData.skills.split(',').map(s => s.trim()),
      };

      if (editingSkill?.id) {
        await updateSkill(editingSkill.id, skillData);
      } else {
        await addSkill(skillData);
      }

      await fetchSkills();
      resetForm();
    } catch (error) {
      console.error('Error saving skill:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this skill category?')) {
      try {
        await deleteSkill(id);
        await fetchSkills();
      } catch (error) {
        console.error('Error deleting skill:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      category: '',
      icon: '',
      skills: '',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'shadow-blue-500/50'
    });
    setEditingSkill(null);
    setShowForm(false);
  };

  const startEdit = (skill: SkillCategory) => {
    setEditingSkill(skill);
    setFormData({
      category: skill.category,
      icon: skill.icon,
      skills: skill.skills.join(', '),
      color: skill.color,
      glowColor: skill.glowColor
    });
    setShowForm(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-2 text-slate-300">
          <div className="w-6 h-6 border-2 border-slate-600 border-t-cyan-500 rounded-full animate-spin"></div>
          Loading skills...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-200">Manage Skills</h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors"
        >
          Add Skill Category
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-200">
                {editingSkill ? 'Edit Skill Category' : 'Add New Skill Category'}
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
                  Category Name
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
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
                  placeholder="🎨"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Skills (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                  placeholder="React, Next.js, TypeScript"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Color Theme
                </label>
                <select
                  value={formData.color}
                  onChange={(e) => {
                    const selected = colorOptions.find(opt => opt.color === e.target.value);
                    if (selected) {
                      setFormData({ 
                        ...formData, 
                        color: selected.color,
                        glowColor: selected.glow
                      });
                    }
                  }}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200"
                >
                  {colorOptions.map((option) => (
                    <option key={option.color} value={option.color}>
                      {option.color}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors"
                >
                  {editingSkill ? 'Update Category' : 'Add Category'}
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

      {/* Skills List */}
      <div className="grid gap-4">
        {skills.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400">No skill categories found. Add your first category!</p>
          </div>
        ) : (
          skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-slate-200">
                      {skill.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((skillName, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-full text-sm text-slate-300"
                      >
                        {skillName}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => startEdit(skill)}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-md hover:bg-blue-500/30 transition-colors text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => skill.id && handleDelete(skill.id)}
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
  );
}