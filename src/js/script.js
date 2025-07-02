 // Optional: Dropdown Hover auf Desktop – keine extra JS nötig, CSS reicht hier.
  // Falls du auf Touch-Geräten Probleme hast, hier ein kleines Skript, das Hover bei Touch verhindert

  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // Touch-Geräte: Hover deaktivieren (damit Dropdown nur klickbar ist)
    document.querySelectorAll('.navbar-nav > .dropdown').forEach(function (dropdown) {
      dropdown.removeEventListener('mouseenter', null);
      dropdown.removeEventListener('mouseleave', null);
    });
  }
