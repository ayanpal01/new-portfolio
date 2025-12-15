'use client';

import { useState, useEffect } from 'react';
import {
  getProjects,
  getSkills,
  getExperiences,
  getPersonalData,
  getContactData,
  ProjectData,
  SkillCategory,
  ExperienceData,
  PersonalData,
  ContactData,
} from '@/lib/firebase-utils';

// Default fallback data structure
const defaultData = {
  personal: {
    name: "Ayan Pal",
    title: "Developer",
    description: "Loading...",
    resumeUrl: "/resume.pdf",
    techStack: ['React', 'Next.js'],
  },
  terminal: {
    commands: [
      { command: 'npm run dev', delay: 0 },
      { command: 'Server running on localhost:3000', delay: 1500 },
    ]
  },
  skills: {
    title: "Skills & Expertise",
    subtitle: "Technologies and tools I use to bring ideas to life",
    categories: [] as SkillCategory[]
  },
  projects: {
    title: "Featured Projects",
    subtitle: "A showcase of my recent work and side projects",
    items: [] as ProjectData[]
  },
  timeline: {
    title: "Experience & Education",
    subtitle: "My journey through professional work and academic learning",
    experience: [] as ExperienceData[],
    education: [] as ExperienceData[],
    stats: {
      experience: { value: "1+", label: "Years Experience" },
      currentPursuit: { value: "MCA", label: "Current Pursuit" },
      graduated: { value: "Student", label: "Status" }
    }
  },
  contact: {
    title: "Connect With Me",
    subtitle: "Find me on social media platforms",
    socialPlatforms: {
      instagram: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      github: '',
      youtube: '',
    }
  },
  footer: {
    developer: "Developer",
    technologies: ["Next.js", "Firebase"],
    copyrightYear: new Date().getFullYear()
  }
};

export function usePortfolioData() {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data from Firebase
        const [
          firebaseProjects,
          firebaseSkills,
          firebaseExperiences,
          firebasePersonal,
          firebaseContact
        ] = await Promise.all([
          getProjects().catch(() => []),
          getSkills().catch(() => []),
          getExperiences().catch(() => []),
          getPersonalData().catch(() => null),
          getContactData().catch(() => null)
        ]);

        // Update data with Firebase data
        setData(prevData => ({
          ...prevData,
          personal: firebasePersonal || prevData.personal,
          contact: firebaseContact ? {
            title: firebaseContact.title,
            subtitle: firebaseContact.subtitle,
            socialPlatforms: firebaseContact.socialPlatforms
          } : prevData.contact,
          projects: {
            ...prevData.projects,
            items: firebaseProjects
          },
          skills: {
            ...prevData.skills,
            categories: firebaseSkills
          },
          timeline: {
            ...prevData.timeline,
            experience: firebaseExperiences.filter((exp: ExperienceData) => exp.type === 'work'),
            education: firebaseExperiences.filter((exp: ExperienceData) => exp.type === 'education')
          },
          footer: {
            developer: firebasePersonal?.name || prevData.footer.developer,
            technologies: ["Next.js", "Firebase"],
            copyrightYear: new Date().getFullYear()
          }
        }));
      } catch (error) {
        console.error('Error fetching Firebase data:', error);
        // Keep using default data if Firebase fails
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
}