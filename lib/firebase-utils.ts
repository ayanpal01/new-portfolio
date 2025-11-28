import { db } from '@/lib/firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore';

export interface ProjectData {
  id?: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  imageUrl?: string;
}

export interface SkillCategory {
  id?: string;
  category: string;
  icon: string;
  skills: string[];
  color: string;
  glowColor: string;
}

export interface ExperienceData {
  id?: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: string;
}

export interface PersonalData {
  name: string;
  title: string;
  description: string;
  resumeUrl: string;
  techStack: string[];
}

export interface ContactData {
  title: string;
  subtitle: string;
  socialPlatforms: {
    instagram: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    github: string;
    youtube: string;
  };
}

// Projects CRUD operations
export const getProjects = async (): Promise<ProjectData[]> => {
  const querySnapshot = await getDocs(collection(db, 'projects'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as ProjectData));
};

export const addProject = async (project: Omit<ProjectData, 'id'>): Promise<string> => {
  const docRef = await addDoc(collection(db, 'projects'), project);
  return docRef.id;
};

export const updateProject = async (id: string, project: Partial<ProjectData>): Promise<void> => {
  await updateDoc(doc(db, 'projects', id), project);
};

export const deleteProject = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'projects', id));
};

// Skills CRUD operations
export const getSkills = async (): Promise<SkillCategory[]> => {
  const querySnapshot = await getDocs(collection(db, 'skills'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as SkillCategory));
};

export const addSkill = async (skill: Omit<SkillCategory, 'id'>): Promise<string> => {
  const docRef = await addDoc(collection(db, 'skills'), skill);
  return docRef.id;
};

export const updateSkill = async (id: string, skill: Partial<SkillCategory>): Promise<void> => {
  await updateDoc(doc(db, 'skills', id), skill);
};

export const deleteSkill = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'skills', id));
};

// Experience CRUD operations
export const getExperiences = async (): Promise<ExperienceData[]> => {
  const querySnapshot = await getDocs(collection(db, 'experiences'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as ExperienceData));
};

export const addExperience = async (experience: Omit<ExperienceData, 'id'>): Promise<string> => {
  const docRef = await addDoc(collection(db, 'experiences'), experience);
  return docRef.id;
};

export const updateExperience = async (id: string, experience: Partial<ExperienceData>): Promise<void> => {
  await updateDoc(doc(db, 'experiences', id), experience);
};

export const deleteExperience = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'experiences', id));
};

// Personal data operations
export const getPersonalData = async (): Promise<PersonalData | null> => {
  const docRef = doc(db, 'settings', 'personal');
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() as PersonalData : null;
};

export const updatePersonalData = async (data: PersonalData): Promise<void> => {
  await setDoc(doc(db, 'settings', 'personal'), data);
};

// Contact data operations
export const getContactData = async (): Promise<ContactData | null> => {
  const docRef = doc(db, 'settings', 'contact');
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() as ContactData : null;
};

export const updateContactData = async (data: ContactData): Promise<void> => {
  await setDoc(doc(db, 'settings', 'contact'), data);
};