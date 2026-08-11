// Theme toggle. The pre-paint half of this lives inline in
// _layouts/default.html — it has to run before first paint to avoid a
// flash of the wrong theme, so it cannot wait on this file.
//
// Three states: no stored choice means "follow the OS", which we
// represent by leaving data-theme off the root entirely and letting
// the prefers-color-scheme block in style.css decide.
(function () {
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    return root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
  }

  function label(button) {
    button.setAttribute(
      'aria-label',
      current() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }

  var buttons = document.querySelectorAll('.theme-toggle');

  Array.prototype.forEach.call(buttons, function (button) {
    label(button);
    button.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        // Private mode / storage disabled: the choice just won't persist.
      }
      Array.prototype.forEach.call(buttons, label);
    });
  });

  // Keep following the OS as long as the reader hasn't picked a side.
  var onChange = function () {
    if (!root.hasAttribute('data-theme')) {
      Array.prototype.forEach.call(buttons, label);
    }
  };
  if (media.addEventListener) {
    media.addEventListener('change', onChange);
  } else if (media.addListener) {
    media.addListener(onChange);
  }
})();
