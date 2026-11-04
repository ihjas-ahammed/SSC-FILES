import { chapter1Units } from './chapter1/index';

import { previewUnit } from './chapter5_preview';
import { unit1 as c5_u1 } from './chapter5_1';
import { unit2 as c5_u2 } from './chapter5_2';
import { practiceUnit } from './chapter5_practice';
import { unit3 } from './chapter5/chapter5_3';
import { unit4 } from './chapter5/chapter5_4';
import { unit5 } from './chapter5/chapter5_5';
import { unit6 } from './chapter5/chapter5_6';
import { unit7 } from './chapter5/chapter5_7';
import { unit8 } from './chapter5/chapter5_8';
import { unit9 } from './chapter5/chapter5_9';
import { unit10 } from './chapter5/chapter5_10';
import { unit11 } from './chapter5/chapter5_11';
import { unit12 } from './chapter5/chapter5_12';

import { previewUnit2 } from './chapter6/chapter6_preview';
import { unit61 } from './chapter6/chapter6_1';
import { unit62, unit63 } from './chapter6/chapter6_3';
import { unit64, unit65, unit66, unit67, unit68, unit69, unit70 } from './chapter6/chapter6_7';
import { unit71 } from './chapter6/chapter6_8';
import { unit72 } from './chapter6/chapter6_9';
import { unit73 } from './chapter6/chapter6_10';
import { unit74 } from './chapter6/chapter6_11';
import { practiceUnit2 } from './chapter6/chapter6_practice';

import { previewUnit3 } from './chapter4/chapter4_preview';
import { unit81 } from './chapter4/chapter4_1';
import { unit82 } from './chapter4/chapter4_2';
import { unit83 } from './chapter4/chapter4_3';
import { unit84 } from './chapter4/chapter4_4';
import { unit85 } from './chapter4/chapter4_5';
import { unit86 } from './chapter4/chapter4_6';
import { unit87 } from './chapter4/chapter4_7';
import { unit88 } from './chapter4/chapter4_8';
import { unit89 } from './chapter4/chapter4_9';
import { unit90 } from './chapter4/chapter4_10';
import { unit91 } from './chapter4/chapter4_11';
import { practiceUnit3 } from './chapter4/chapter4_practice';

import { u4_1, u4_2, u4_3, u4_4 } from './chapter8/chapter8_1';
import { u4_5, u4_6, u4_7, u4_8 } from './chapter8/chapter8_2';
import { practiceUnit4 } from './chapter8/chapter8_practice';

import { u6_1 } from './chapter2/chapter2_1';
import { u6_2 } from './chapter2/chapter2_2';
import { u6_3 } from './chapter2/chapter2_3';
import { u6_4 } from './chapter2/chapter2_4';
import { previewUnit_ch2 } from './chapter2/chapter2_preview';
import { practiceUnit_ch2 } from './chapter2/chapter2_practice';

import { u7_1 } from './chapter3/chapter3_1';
import { u7_2 } from './chapter3/chapter3_2';
import { u7_3 } from './chapter3/chapter3_3';
import { u7_4 } from './chapter3/chapter3_4';

import { u8_1 } from './chapter7/chapter7_1';
import { u8_2 } from './chapter7/chapter7_2';
import { u8_3 } from './chapter7/chapter7_3';
import { u8_4 } from './chapter7/chapter7_4';

import { u9_1 } from './chapter9/chapter9_1';
import { u9_2 } from './chapter9/chapter9_2';
import { u9_3 } from './chapter9/chapter9_3';

export const sections = [
  {
    id: "sec5-1",
    sectionNumber: 1,
    title: "السِّيَاحَةُ حَيَاةٌ وَالسَّفَرُ مَعْرِفَةٌ",
    units: chapter1Units
  },
  {
    id: "sec6-2",
    sectionNumber: 2,
    title: "لِبَاسِي كَانَ مَعَ أُمِّي",
    units: [previewUnit_ch2, u6_1, u6_2, u6_3, u6_4, practiceUnit_ch2]
  },
  {
    id: "sec7-3",
    sectionNumber: 3,
    title: "مَطَرُ اللَّيْلِ",
    units: [u7_1, u7_2, u7_3, u7_4]
  },
  {
    id: "sec3-4",
    sectionNumber: 4,
    title: "الهند... أرض الحكمة والأساطير",
    units: [
      previewUnit3,
      unit81, unit82, unit83, unit84, unit85, unit86,
      unit87, unit88, unit89, unit90, unit91,
      practiceUnit3
    ]
  },
  {
    id: "sec1-5",
    sectionNumber: 5,
    title: "رحلة إلى مونار",
    units: [
      previewUnit, c5_u1, c5_u2, unit3, unit4, unit5, unit6,
      unit7, unit8, unit9, unit10, unit11, unit12, practiceUnit
    ]
  },
  {
    id: "sec2-6",
    sectionNumber: 6,
    title: "الْقُرْآنُ وَالْبِيئَةُ",
    units: [
      previewUnit2,
      unit61, unit62, unit63, unit64, unit65, unit66,
      unit67, unit68, unit69, unit70,
      unit71, unit72, unit73, unit74,
      practiceUnit2
    ]
  },
  {
    id: "sec8-7",
    sectionNumber: 7,
    title: "عَيْشَةٌ رَاضِيَةٌ",
    units: [u8_1, u8_2, u8_3, u8_4]
  },
  {
    id: "sec4-8",
    sectionNumber: 8,
    title: "الغريب",
    units: [
      u4_1, u4_2, u4_3, u4_4, u4_5, u4_6, u4_7, u4_8, practiceUnit4
    ]
  },
  {
    id: "sec9-9",
    sectionNumber: 9,
    title: "مِنْ أَغَانِي الْحَيَاةِ",
    units: [u9_1, u9_2, u9_3]
  }
];