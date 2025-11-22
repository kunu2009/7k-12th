import { BaseEntity, Subject, ChapterProgress } from './index';

export interface User extends BaseEntity {
  uid: string;                // Firebase Auth UID
  email: string;
  displayName?: string;
  photoURL?: string;
  grade?: string;
  board?: string;
  subjects: Subject[];        // Subscribed subjects
  preferences: UserPreferences;
  role: 'student' | 'teacher' | 'admin';
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'hi' | 'mr';  // English, Hindi, Marathi
  notifications: {
    studyReminders: boolean;
    newContent: boolean;
    achievements: boolean;
  };
  accessibility: {
    fontSize: 'small' | 'medium' | 'large';
    highContrast: boolean;
    reduceMotion: boolean;
  };
}

export interface UserProgress {
  userId: string;
  overallProgress: number;     // 0-100
  subjectProgress: {
    [key in Subject]?: SubjectProgress;
  };
  streak: number;              // Days in a row
  lastActiveDate: Date;
  totalStudyTime: number;      // in minutes
}

export interface SubjectProgress {
  subject: Subject;
  overallProgress: number;
  chapters: ChapterProgress[];
  totalFlashcardsCompleted: number;
  totalMCQsCompleted: number;
  totalVideosWatched: number;
  studyTime: number;           // in minutes
  lastAccessedAt: Date;
}

export interface Achievement extends BaseEntity {
  userId: string;
  title: string;
  description: string;
  iconUrl: string;
  unlockedAt: Date;
  category: 'streak' | 'completion' | 'practice' | 'special';
}

export interface StudySession extends BaseEntity {
  userId: string;
  subject: Subject;
  chapterId?: string;
  activityType: 'flashcards' | 'mcqs' | 'video' | 'reading' | 'notes';
  duration: number;            // in seconds
  itemsCompleted: number;
  startedAt: Date;
  endedAt: Date;
}
