/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics — what makes this app itself. Read by the shared code in
   flow-library through core.project.js; the field contract is documented
   there. The look is in theme.css, the extra behaviour in effects.js.

   The storage and sync names predate the split and must never change: they
   are where every learner's existing record already lives.
   ══════════════════════════════════════════════════════════════════════════ */

const PROJECT = {
  id: 'quantum-mechanics',
  name: 'Quantum Mechanics',
  storageKey: 'ssc4.qm.v1',
  sync: {
    live: 'ssc4_qm_v1',       users: 'ssc4_qm_users_v1',
    mock: 'ssc4_qm_mock_v1',  usersMock: 'ssc4_qm_users_mock_v1'
  },
  themeColor: { light: '#f3f6fb', dark: '#05080f' },
  figZoom: true,
  studyMaps: [{
    title: 'Module 3',
    description: 'Mathematical Tools of Quantum Mechanics',
    summary: '16 problems · 157 concepts · 3D prerequisite map',
    href: location.pathname.startsWith('/phy/')
      ? '/phy/quantum-mechanics/study-map/module-3/'
      : '../study-map/build/index.html'
  }, {
    title: 'Module 4',
    description: 'Solution of the Schrödinger Equation for 3D Problems',
    summary: '13 problems · 166 concepts · 3D prerequisite map',
    href: location.pathname.startsWith('/phy/')
      ? '/phy/quantum-mechanics/study-map/module-4/'
      : '../study-map-4/build/index.html'
  }],
  hooks: {}
};
