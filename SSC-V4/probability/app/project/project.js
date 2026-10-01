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
  themeColor: { light: '#faf8f4', dark: '#101216' },
  hooks: {}
};
