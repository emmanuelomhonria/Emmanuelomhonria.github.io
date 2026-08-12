// Calendly booking buttons (contact page only).
//
// Progressive enhancement by design: every button is a real <a> whose
// href is the Calendly page. This script upgrades the click to an
// in-page popup. If Calendly's script is blocked, slow, or still
// loading, we simply do not preventDefault and the link navigates —
// so booking always works, JS or not.
(function () {
  var links = document.querySelectorAll('[data-calendly]');
  if (!links.length) return;

  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function isDark() {
    var chosen = document.documentElement.getAttribute('data-theme');
    return chosen ? chosen === 'dark' : media.matches;
  }

  // Match the popup to the site's palette. Note: Calendly only honors
  // these color params on paid plans; on free they are ignored and the
  // widget renders in its own default light styling.
  function themedUrl(base) {
    var dark = isDark();
    var params = [
      'hide_gdpr_banner=1',
      'background_color=' + (dark ? '1A1F1C' : 'E9E2CE'),
      'text_color=' + (dark ? 'E7E1D2' : '232A26'),
      'primary_color=' + (dark ? 'DC8A64' : '93412A')
    ].join('&');
    return base + (base.indexOf('?') === -1 ? '?' : '&') + params;
  }

  Array.prototype.forEach.call(links, function (link) {
    link.addEventListener('click', function (event) {
      // Let the browser handle new-tab / new-window intents normally.
      if (event.metaKey || event.ctrlKey || event.shiftKey ||
          event.altKey || event.button !== 0) {
        return;
      }
      if (typeof Calendly === 'undefined' || !Calendly.initPopupWidget) {
        return; // Fall through to the href.
      }
      event.preventDefault();
      Calendly.initPopupWidget({ url: themedUrl(link.getAttribute('data-calendly')) });
    });
  });
})();
