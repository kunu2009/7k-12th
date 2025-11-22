export type Subject = 'economics' | 'political-science' | 'history' | 'upsc';

export type ResourceType = 'pdf' | 'note' | 'pyq' | 'board-paper' | 'video';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Metadata {
  author?: string;
  tags?: string[];
  description?: string;
}

export interface Chapter extends BaseEntity {
  chapterId: string;          // Unique identifier (e.g., "eco-1", "polsci-2")
  subject: Subject;
  number: number;             // Chapter number
  title: string;
  description: string;
  content: string;            // Main text content
  summary?: string;           // AI-generated or manual summary
  thumbnailUrl?: string;
  isPublished: boolean;
  order: number;              // Display order
}

export interface ChapterProgress {
  chapterId: string;
  subject: Subject;
  completionPercentage: number;
  flashcardsCompleted: number;
  flashcardsTotal: number;
  mcqsCompleted: number;
  mcqsTotal: number;
  videosWatched: number;
  videosTotal: number;
  lastAccessedAt: Date;
}
