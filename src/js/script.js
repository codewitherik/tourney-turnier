 // Optional: Dropdown Hover auf Desktop – keine extra JS nötig, CSS reicht hier.
  // Falls du auf Touch-Geräten Probleme hast, hier ein kleines Skript, das Hover bei Touch verhindert

  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // Touch-Geräte: Hover deaktivieren (damit Dropdown nur klickbar ist)
    document.querySelectorAll('.navbar-nav > .dropdown').forEach(function (dropdown) {
      dropdown.removeEventListener('mouseenter', null);
      dropdown.removeEventListener('mouseleave', null);
    });
  }

  var firebaseconfig 

  const firebaseConfig = {
  apiKey: "AIzaSyB4lE7AatRUXt0tSKsNRrXn1N94c4gn60s",
  authDomain: "tourney-turnieplaner.firebaseapp.com",
  projectId: "tourney-turnieplaner",
  storageBucket: "tourney-turnieplaner.firebasestorage.app",
  messagingSenderId: "543729051769",
  appId: "1:543729051769:web:96c8d752e98e2b1640cca8"
};
