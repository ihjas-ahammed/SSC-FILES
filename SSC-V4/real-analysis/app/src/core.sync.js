/* ══════════════════════════════════════════════════════════════════════════
   Multi-device sync.

   Firebase Realtime Database over plain REST — no SDK, no npm, no auth
   handshake, nothing to load before the app can start. One GET and one PUT.

   The key is the learner's name and roll number. That is a pass key, not a
   password: anyone who knows both can read and write that record, and the UI
   says so plainly rather than implying a login. It is the right trade for a
   personal study record that has to follow one person between a phone and a
   laptop with no account to create.

   Every sync MERGES before it writes (Store.mergeStates), so two devices that
   both worked offline lose nothing and the order they reconnect in does not
   matter. Overwriting instead of merging is how a week of work disappears.
   ══════════════════════════════════════════════════════════════════════════ */

const Sync = (function () {

  const DB = 'https://task-dominion-default-rtdb.asia-southeast1.firebasedatabase.app';

  /* Mock and validated pools keep SEPARATE STORES — progress and the sign-in
     register both. Their ids do not mean the same things, and a name typed
     into the test build must never appear in, or merge with, the real record.
     This is the only place that mapping is decided.

        live   ssc4_ra_v1        ssc4_users_v1
        mock   ssc4_ra_mock_v1   ssc4_users_mock_v1

     AGY owns the live pair; see "Publishing" in HOOK_agy.md. */
  const LIVE = () => (typeof DATA_KIND !== 'undefined' && DATA_KIND === 'live');
  const NS = () => LIVE() ? 'ssc4_ra_v1' : 'ssc4_ra_mock_v1';
  const USERS = () => LIVE() ? 'ssc4_users_v1' : 'ssc4_users_mock_v1';

  let syncing = false;
  let pushT = 0;
  let last = { at: 0, ok: null, msg: '' };
  const watchers = [];

  const slug = s => String(s || '').toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  /* name + roll -> one stable key. Both are required: a roll number alone
     collides across colleges, a name alone collides across people.

     The separator is '--', not '.': a Realtime Database key may not contain
     '.', '$', '#', '[', ']' or '/', and a dotted key is rejected outright with
     "Invalid token in path". slug() collapses runs of separators, so '--' can
     never be produced by either half and the split stays unambiguous. */
  function keyFor(name, roll) {
    const a = slug(name), b = slug(roll);
    return (a && b) ? a + '--' + b : '';
  }

  const identity = () => Store.identity();

  function key() {
    const id = identity();
    return keyFor(id.name, id.roll);
  }

  const on = () => !!key();
  const url = () => DB + '/' + NS() + '/' + encodeURIComponent(key()) + '.json';
  const userUrl = () => DB + '/' + USERS() + '/' + encodeURIComponent(key()) + '.json';

  function announce(ok, msg) {
    last = { at: Date.now(), ok: ok, msg: msg };
    watchers.forEach(function (fn) { try { fn(last); } catch (e) { /* a watcher must never break a sync */ } });
  }

  const watch = fn => { watchers.push(fn); return last; };
  const status = () => ({ on: on(), key: key(), syncing: syncing, last: last });

  /* ── the one operation: pull, merge, push ─────────────────────────────── */
  function now(opts) {
    const o = opts || {};
    if (!on()) return Promise.resolve({ ok: false, msg: 'Not connected.' });
    if (syncing) return Promise.resolve({ ok: false, msg: 'Already syncing.' });
    if (!window.fetch) return Promise.resolve({ ok: false, msg: 'This browser cannot sync.' });

    syncing = true;
    announce(null, 'Syncing…');
    const before = Store.tally();

    return window.fetch(url(), { cache: 'no-store' })
      .then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)))
      .then(function (remote) {
        let rs = null;
        if (remote && typeof remote === 'object' && typeof remote.payload === 'string') {
          try { rs = JSON.parse(remote.payload); } catch (e) { rs = null; }
        }
        const merged = Store.mergeStates(Store.snapshot(), rs);
        Store.adopt(merged, true);   /* quiet: do not re-trigger the auto-push */

        const body = JSON.stringify({
          payload: JSON.stringify(Store.snapshot()),
          updated: Date.now(),
          device: Store.pref('syncName', '') + ' · ' + (navigator.platform || 'device')
        });
        return window.fetch(url(), {
          method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: body
        }).then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          const after = Store.tally();
          const gained = {
            notes: after.notes - before.notes,
            proofs: after.proofs - before.proofs,
            cards: after.cards - before.cards,
            omr: after.omr - before.omr
          };
          const bits = [];
          if (gained.notes > 0) bits.push(gained.notes + ' ' + DOM.plural(gained.notes, 'note'));
          if (gained.proofs > 0) bits.push(gained.proofs + ' ' + DOM.plural(gained.proofs, 'proof'));
          if (gained.cards > 0) bits.push(gained.cards + ' ' + DOM.plural(gained.cards, 'card'));
          if (gained.omr > 0) bits.push(gained.omr + ' ' + DOM.plural(gained.omr, 'question'));
          const msg = bits.length
            ? 'Merged in ' + bits.join(', ') + ' from your other device'
            : 'Everything already in sync';
          syncing = false;
          announce(true, msg);
          if (bits.length && o.reload !== false && typeof Router !== 'undefined') Router.reload();
          if (!o.quiet) DOM.announce(msg + '.');
          return { ok: true, msg: msg, gained: gained };
        });
      })
      .catch(function (err) {
        syncing = false;
        const msg = /Failed to fetch|NetworkError/i.test(String(err && err.message))
          ? 'Offline — your progress is saved here and will sync when you are back.'
          : 'Sync failed: ' + ((err && err.message) || err);
        announce(false, msg);
        if (!o.quiet) DOM.announce(msg);
        return { ok: false, msg: msg };
      });
  }

  const schedule = () => {
    if (!on()) return;
    window.clearTimeout(pushT);
    pushT = window.setTimeout(() => now({ quiet: true, reload: false }), 1500);
  };

  /* ── signing in ──────────────────────────────────────────────────────────
     Registers the key in the sign-in store (or touches it if it is already
     there), then does a normal merge-sync so an existing record arrives before
     the first screen is drawn. Being offline is NOT a reason to refuse entry:
     the local record still opens, and the next sync reconciles it. */
  function hello() {
    if (!on()) return Promise.resolve({ ok: false, msg: 'Not signed in.' });
    if (!window.fetch) return now({ quiet: true }).then(r => Object.assign({ returning: null }, r));

    const id = identity();
    return window.fetch(userUrl(), { cache: 'no-store' })
      .then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)))
      .then(function (rec) {
        const returning = !!(rec && rec.created);
        return window.fetch(userUrl(), {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: id.name, roll: id.roll,
            created: (rec && rec.created) || Date.now(),
            seen: Date.now(),
            visits: ((rec && rec.visits) || 0) + 1
          })
        }).then(() => returning);
      })
      .then(function (returning) {
        return now({ quiet: true }).then(function (r) {
          return {
            ok: true, returning: returning,
            msg: returning
              ? 'Welcome back — ' + (r.ok ? r.msg.charAt(0).toLowerCase() + r.msg.slice(1) : 'working offline for now')
              : 'New record created for ' + id.name + '.'
          };
        });
      })
      .catch(function () {
        return { ok: false, offline: true,
          msg: 'Offline — opening the record stored on this device. It will sync when you are back.' };
      });
  }

  /* ── connecting ──────────────────────────────────────────────────────── */
  function connect(name, roll) {
    const k = keyFor(name, roll);
    if (!k) return Promise.resolve({ ok: false, msg: 'Both a name and a roll number are needed.' });
    Store.signIn(name, roll);
    return now({ quiet: false });
  }

  function disconnect() {
    Store.signOut();
    announce(null, 'Signed out. Progress stays on this device.');
  }

  /* ── wiring ──────────────────────────────────────────────────────────── */
  /* Sync is automatic and has no button. Three things wake it: a change you
     made (pushed through `schedule`), coming back to the tab or the network,
     and a slow heartbeat while the tab is open — the last one is what makes a
     phone left on a desk pick up the laptop's work without being asked. */
  const PULL_EVERY = 60e3;

  function start() {
    Store.onChange(schedule);
    if (!on()) return;
    now({ quiet: true });
    /* coming back to the tab is the moment the other device's work matters */
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) now({ quiet: true });
    });
    window.addEventListener('online', function () { now({ quiet: true }); });
    window.setInterval(function () {
      if (document.hidden || !navigator.onLine) return;
      now({ quiet: true });
    }, PULL_EVERY);
  }

  return { start, hello, connect, disconnect, now, status, watch, identity, keyFor, on };
})();
