/* ══════════════════════════════════════════════════════════════════════════
   Probability — what makes this app itself. Read by flow-library through
   core.project.js, which documents every field and hook.

   The storage and sync names are this project's alone. Once anyone has
   studied here, never change them: they are where the records live.
   ══════════════════════════════════════════════════════════════════════════ */

const PROJECT = {
  id: 'probability',
  name: 'Probability',
  storageKey: 'ssc4.prob.v1',
  sync: {
    live: 'ssc4_prob_v1',       users: 'ssc4_prob_users_v1',
    mock: 'ssc4_prob_mock_v1',  usersMock: 'ssc4_prob_users_mock_v1'
  },
  themeColor: { light: '#f6f3ea', dark: '#111d1b' },
  pyqLabel: 'GATE DA past papers',
  figZoom: true,
  studyMaps: [{
    title: 'Module 1',
    description: 'Combinatorial Analysis: the hard theoretical exercises',
    summary: '14 problems · 33 concepts · 3D prerequisite map',
    href: location.pathname.startsWith('/math/')
      ? '/math/probability/study-map/module-1/'
      : '../study-map/build/index.html'
  }, {
    title: 'Module 2',
    description: 'Axioms of Probability: the hard theoretical exercises',
    summary: '14 problems · 49 concepts · 3D prerequisite map',
    href: location.pathname.startsWith('/math/')
      ? '/math/probability/study-map/module-2/'
      : '../study-map-2/build/index.html'
  }],
  hooks: {}
};
