/**
 * Economics Chapter Connections
 * Migrated from 7K-ECO to unified-study-hub
 * 
 * Adjacency list representing knowledge graph connections between chapters
 * Used for navigating between related topics and building learning paths
 */

import type { ChapterConnections } from '@/types/economics';

export const connections: ChapterConnections = {
  1: [2, 8],      // Intro -> Utility Analysis, National Income
  2: [1, 3, 4],   // Utility Analysis -> Intro, Demand, Elasticity
  3: [2, 4, 5, 6], // Demand -> Utility, Elasticity, Supply, Markets
  4: [2, 3, 5],   // Elasticity -> Utility, Demand, Supply
  5: [3, 4, 6],   // Supply -> Demand, Elasticity, Markets
  6: [3, 5],      // Markets -> Demand, Supply
  7: [8, 9],      // Index Numbers -> National Income, Public Finance
  8: [1, 7, 9],   // National Income -> Intro, Index Numbers, Public Finance
  9: [8, 10, 11], // Public Finance -> National Income, Financial Markets, Foreign Trade
  10: [9],        // Financial Markets -> Public Finance
  11: [9],        // Foreign Trade -> Public Finance
};

/**
 * Get connected chapters for a given chapter ID
 */
export function getConnectedChapters(chapterId: number): number[] {
  return connections[chapterId] || [];
}

/**
 * Check if two chapters are connected
 */
export function areChaptersConnected(chapter1: number, chapter2: number): boolean {
  const connections1 = connections[chapter1] || [];
  return connections1.includes(chapter2);
}

export default connections;
