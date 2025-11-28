'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import ProjectsManager from '../components/ProjectsManager';
import SkillsManager from '../components/SkillsManager';
import ExperienceManager from '../components/ExperienceManager';
import PersonalDataManager from '../components/PersonalDataManager';
import ContactManager from '../components/ContactManager';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    if (status === 'loading') return; // Still loading
    if (!session || session.user.role !== 'admin') {
      router.push('/admin/login');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="flex items-center gap-2 text-slate-300">
          <div className="w-6 h-6 border-2 border-slate-600 border-t-cyan-500 rounded-full animate-spin"></div>
          Loading...
        </div>
      </div>
    );
  }

  if (!session || session.user.role !== 'admin') {
    return null;
  }

  const tabs = [
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'personal', label: 'Personal', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectsManager />;
      case 'skills':
        return <SkillsManager />;
      case 'experience':
        return <ExperienceManager />;
      case 'personal':
        return <PersonalDataManager />;
      case 'contact':
        return <ContactManager />;
      default:
        return <ProjectsManager />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio Admin
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">
                Welcome, {session.user.name}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 sticky top-24">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-cyan-400'
                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderActiveComponent()}
          </div>
        </div>
      </div>
    </div>
  );
}