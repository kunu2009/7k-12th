/**
 * Economics-specific type definitions
 * Based on 7K-ECO data structures, following unified-study-hub type conventions
 */

import { BaseEntity, DifficultyLevel, Chapter } from './index';

// ============================================================================
// Chapter & Content Types
// ============================================================================

export interface EconomicsChapter extends Omit<Chapter, 'subject'> {
  subject: 'economics';
  topics?: string[];           // e.g., ["Microeconomics", "Demand Analysis"]
}

/**
 * Simple chapter structure (used for chapter list/navigation)
 */
export interface EconomicsChapterSimple {
  id: number;
  title: string;
  description: string;
  content: string;
}

// ============================================================================
// Study Materials Types
// ============================================================================

export interface EconomicsFlashcard {
  id: number;
  question: string;
  answer: string;
  explanation?: string;
  difficulty?: DifficultyLevel;
  tags?: string[];
}

export interface EconomicsMCQ {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty?: DifficultyLevel;
  tags?: string[];
}

export interface EconomicsReel {
  id: number;
  title: string;
  description: string;
  concept: string;
  visualType: 'animated-diagram' | 'chart' | 'infographic' | 'comparison' | 'flow' | 'bar-chart' | 'line-chart' | 'illustration' | 'pie-chart' | 'timeline' | 'balance-scale' | 'icons';
  keyFrames: string[];
}

export interface EconomicsStudyMaterial {
  chapterId: number;
  summary: string;
  mustKnow: string[];
  flashcards: EconomicsFlashcard[];
  mcqs: EconomicsMCQ[];
  reels: EconomicsReel[];
}

export type EconomicsStudyMaterialsMap = Record<number, EconomicsStudyMaterial>;

// ============================================================================
// Interactive Charts Types
// ============================================================================

export type InteractiveChartType =
  | 'microMacro'
  | 'utility'
  | 'demand'
  | 'elasticity'
  | 'supplyDemand'
  | 'marketStructure'
  | 'indexNumbers'
  | 'nationalIncome'
  | 'publicFinance'
  | 'financialMarkets'
  | 'foreignTrade';

export interface InteractiveChartConfig {
  chapterId: number;
  type: InteractiveChartType;
  title: string;
  description: string;
  insights?: string[];
}

export type InteractiveChartsMap = Record<number, InteractiveChartConfig>;

// ============================================================================
// Mock Paper Types
// ============================================================================

export interface MockPaperQuestion {
  text: string;
  options?: string[];
  answer: string;
  marks: number;
}

export interface MockPaperSection {
  title: string;
  instructions?: string;
  totalMarks: number;
  questions: MockPaperQuestion[];
}

export interface MockPaper {
  id?: string;
  title: string;
  totalMarks: number;
  duration: string;
  sections: MockPaperSection[];
}

// ============================================================================
// Notes & Bookmarks Types
// ============================================================================

export interface EconomicsNote extends BaseEntity {
  chapterId?: string;
  subject: 'economics';
  title: string;
  content: string;
  isPinned: boolean;
  color?: string;
}

export interface EconomicsBookmark extends BaseEntity {
  chapterId: string;
  subject: 'economics';
  contentType: 'flashcard' | 'mcq' | 'study-material';
  contentId: string;
  note?: string;
}

// ============================================================================
// Chapter Connections (for knowledge graph)
// ============================================================================

/**
 * Adjacency list representing connections between chapters
 * Key: chapter ID, Value: array of connected chapter IDs
 */
export type ChapterConnections = Record<number, number[]>;
