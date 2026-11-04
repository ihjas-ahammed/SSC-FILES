/* ══════════════════════════════════════════════════════════════════════════
   Optics — what makes this app itself. Read by flow-library through
   core.project.js, which documents every field and hook.

   The storage and sync names are this project's alone. Once anyone has
   studied here, never change them: they are where the records live.
   ══════════════════════════════════════════════════════════════════════════ */

const PROJECT = {
  id: 'optics',
  name: 'Optics',
  storageKey: 'ssc4.op.v1',
  sync: {
    live: 'ssc4_op_v1',       users: 'ssc4_op_users_v1',
    mock: 'ssc4_op_mock_v1',  usersMock: 'ssc4_op_users_mock_v1'
  },
  themeColor: { light: '#fbf6ee', dark: '#0b0a10' },
  pyqLabel: 'Question bank',
  studyMapLabel: 'Stellar Map',
  studyMaps: [{
    title: 'Module I: Geometrical Optics',
    description: "Fermat's principle, spherical surfaces and the thin lens",
    summary: '14 PYQs · 17 concepts · 3D prerequisite map',
    href: location.pathname.includes('/build/') ? '../study-map/build/index.html' : 'study-map/build/index.html'
  }],
  figZoom: true,
  hooks: {}
};
