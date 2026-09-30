/* ══════════════════════════════════════════════════════════════════════════
   The project seam: the one place flow-library learns WHICH app it is.

   Everything in flow-library is shared by every study system. What makes an
   app itself — its name, where its progress is stored, what it looks like,
   any extra behaviour — is declared by the project in app/project/project.js
   as a single `PROJECT` object, loaded before this file:

     PROJECT = {
       id, name,                      required — name is shown in the chrome
       storageKey,                    required — localStorage key for progress
       sync: { live, mock,            required — Firebase namespaces; mock and
               users, usersMock,                 live must never share one
               db },                  optional — Firebase RTDB URL override
       themeColor: { light, dark },   optional — browser chrome colour
       realLine: true,                optional — draw the real-line widget
                                        (comp.realline.js) under inequalities
       pyqLabel: 'JAM past papers',   optional — what the level-4 rung is called (default shown)
       figZoom: true,                 optional — click a rendered diagram to open it
                                        full-screen with zoom (comp.zoom.js)
       hooks: {                       optional — each is called if present
         home(ctx)   -> Node|null     a hero placed above the home dashboard
         theme(dark)                  after light/dark is applied
         ready()                      once, after the signed-in app is up
       }
     }

   A missing required field is a fatal error rather than a silent default:
   two projects falling back to the same storage key would overwrite each
   other's progress in the same browser.
   ══════════════════════════════════════════════════════════════════════════ */

const Project = (function () {

  if (typeof PROJECT === 'undefined') {
    throw new Error('app/project/project.js did not define PROJECT');
  }

  const REQUIRED = ['id', 'name', 'storageKey', 'sync.live', 'sync.mock', 'sync.users', 'sync.usersMock'];
  const get = (o, path) => path.split('.').reduce((v, k) => (v == null ? v : v[k]), o);
  const missing = REQUIRED.filter(k => !get(PROJECT, k));
  if (missing.length) {
    throw new Error('PROJECT is missing ' + missing.join(', ') + ' (app/project/project.js)');
  }

  PROJECT.themeColor = Object.assign({ light: '#faf8f4', dark: '#101216' }, PROJECT.themeColor);
  PROJECT.hooks = PROJECT.hooks || {};
  PROJECT.pyqLabel = PROJECT.pyqLabel || 'JAM past papers';
  document.documentElement.setAttribute('data-project', PROJECT.id);

  /* A broken hook must not take the app down with it: the hooks are
     decoration and extras, the study loop underneath is shared and tested. */
  function hook(name) {
    const fn = PROJECT.hooks[name];
    if (typeof fn !== 'function') return null;
    try {
      return fn.apply(PROJECT, Array.prototype.slice.call(arguments, 1));
    } catch (err) {
      console.error('PROJECT.hooks.' + name + ' failed:', err);
      return null;
    }
  }

  return { hook: hook };
})();
