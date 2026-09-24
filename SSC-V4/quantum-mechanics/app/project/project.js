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
  hooks: {}
};
