// Exam Data — aggregated from per-chapter files with harakat
import { chapter1Data } from './practiceData/chapter1';
import { chapter2Data } from './practiceData/chapter2';
import { chapter3Data } from './practiceData/chapter3';
import { chapter4Data } from './practiceData/chapter4';
import { chapter5Data } from './practiceData/chapter5';
import { chapter6Data } from './practiceData/chapter6';
import { chapter7Data } from './practiceData/chapter7';
import { chapter8Data } from './practiceData/chapter8';
import { chapter9Data } from './practiceData/chapter9';

export const examDataBySection = {
  ...chapter1Data,  // sec5-1  Tourism
  ...chapter2Data,  // sec6-2  Drugs
  ...chapter3Data,  // sec7-3  Night Rain
  ...chapter4Data,  // sec3-4  India
  ...chapter5Data,  // sec1-5  Munnar
  ...chapter6Data,  // sec2-6  Quran & Environment
  ...chapter7Data,  // sec8-7  Satisfied Life
  ...chapter8Data,  // sec4-8  The Stranger
  ...chapter9Data,  // sec9-9  Songs of Life

  // Fallback for sections without dedicated exam data
  default: {
    grammarChoices: [],
    singularPlural: [],
    fillBlanks: [],
    formQuestions: [],
    shortQA: [],
    longQA: []
  }
};

// Legacy named exports (kept for backward compatibility)
export const grammarChoices = [];
export const singularPlural = [];
export const fillBlanks = [];
export const formQuestions = [];
export const shortQA = [];
export const longQA = [];
