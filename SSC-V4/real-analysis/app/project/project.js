/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis — what makes this app itself. Read by the shared code in
   flow-library through core.project.js; the field contract is documented
   there. Everything the two study systems share lives in flow-library.

   The storage and sync names predate the split and must never change: they
   are where every learner's existing record already lives.
   ══════════════════════════════════════════════════════════════════════════ */

const PROJECT = {
  id: 'real-analysis',
  name: 'Real Analysis',
  storageKey: 'ssc4.level1.v1',
  sync: {
    live: 'ssc4_ra_v1',       users: 'ssc4_users_v1',
    mock: 'ssc4_ra_mock_v1',  usersMock: 'ssc4_users_mock_v1'
  },
  themeColor: { light: '#faf8f4', dark: '#101216' },
  hooks: {}
};
