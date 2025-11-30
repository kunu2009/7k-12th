/**
 * Economics Data Module
 * Unified Study Hub - Economics Subject Data
 * 
 * This module exports all economics-related data for use in the application.
 * 
 * Contents:
 * - Chapters: 11 chapters covering HSC Economics syllabus
 * - Study Materials: Summaries, Must-Know facts, Flashcards, MCQs, Reels per chapter
 * - Interactive Charts: Visualization configs for each chapter
 * - Mock Papers: 3 full mock papers for board exam practice
 * - Connections: Knowledge graph of chapter relationships
 */

// ============================================================================
// Chapters
// ============================================================================
export { economicsChapters, default as chapters } from './chapters';
export type { EconomicsChapterSimple } from '@/types/economics';

// ============================================================================
// Study Materials
// ============================================================================
export { 
  studyMaterials,
  type StudyMaterials,
  type StudyMaterialsMap,
  type StudyMaterialFlashcard,
  type StudyMaterialMCQ,
  type StudyMaterialReel,
} from './study-materials';

// ============================================================================
// Interactive Charts
// ============================================================================
export { 
  interactiveCharts,
  default as charts,
} from './interactive-charts';
export type { 
  InteractiveChartType,
  InteractiveChartConfig,
  InteractiveChartsMap,
} from '@/types/economics';

// ============================================================================
// Mock Papers
// ============================================================================
export { 
  mockPapers,
  mockPaper1,
  mockPaper2,
  mockPaper3,
  default as papers,
} from './mock-papers';
export type {
  MockPaper,
  MockPaperQuestion,
  MockPaperSection,
} from '@/types/economics';

// ============================================================================
// Connections (Knowledge Graph)
// ============================================================================
export { 
  connections,
  getConnectedChapters,
  areChaptersConnected,
  default as chapterConnections,
} from './connections';
export type { ChapterConnections } from '@/types/economics';

// ============================================================================
// Convenience Functions
// ============================================================================

/**
 * Get chapter by ID
 */
export function getChapterById(id: number) {
  const { economicsChapters } = require('./chapters');
  return economicsChapters.find((ch: { id: number }) => ch.id === id);
}

/**
 * Get study materials for a chapter
 */
export function getStudyMaterialsByChapterId(chapterId: number) {
  const { studyMaterials } = require('./study-materials');
  return studyMaterials[chapterId];
}

/**
 * Get interactive chart config for a chapter
 */
export function getChartConfigByChapterId(chapterId: number) {
  const { interactiveCharts } = require('./interactive-charts');
  return interactiveCharts[chapterId];
}

/**
 * Get flashcards for a chapter
 */
export function getFlashcardsByChapterId(chapterId: number) {
  const materials = getStudyMaterialsByChapterId(chapterId);
  return materials?.flashcards || [];
}

/**
 * Get MCQs for a chapter
 */
export function getMCQsByChapterId(chapterId: number) {
  const materials = getStudyMaterialsByChapterId(chapterId);
  return materials?.mcqs || [];
}

/**
 * Get all chapters count
 */
export const TOTAL_CHAPTERS = 11;

/**
 * Get all mock papers count
 */
export const TOTAL_MOCK_PAPERS = 3;
