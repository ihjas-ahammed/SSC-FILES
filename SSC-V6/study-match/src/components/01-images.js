/* GPT Image illustrations. Both palettes are generated, with no CSS inversion. */
(function () {
  var SM = window.SM;
  SM.Images = {
    has: function (value) { return !!(value && typeof value.image === 'string'); },
    html: function (value, decorative) {
      var id = typeof value === 'string' ? value : value.image;
      var alt = decorative ? '' : (value.alt || 'Optics illustration');
      var sources = window.SM_IMAGE_SOURCES || {};
      return '<span class="generated-picture" data-image="' + SM.esc(id) + '">' +
        ['light', 'dark'].map(function (theme) {
          var name = id + '-' + theme + '.webp';
          return '<img class="generated-' + theme + '" src="' + SM.esc(sources[name] || ('images/' + name)) +
            '" alt="' + SM.esc(alt) + '" width="512" height="384" loading="lazy" decoding="async"' + (decorative ? ' aria-hidden="true"' : '') + '>';
        }).join('') + '</span>';
    }
  };
})();
