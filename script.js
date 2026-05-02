// ── HIDE NAV ON SCROLL DOWN, SHOW ON SCROLL UP ──
(function(){
  var nav = document.getElementById('navbar');
  var lastY = 0;
  var ticking = false;

  function updateNav(){
    var y = window.scrollY;
    if(y < 80){
      nav.classList.remove('nav-hidden');
    } else if(y > lastY + 4){
      // Scrolling DOWN — hide
      nav.classList.add('nav-hidden');
      // Also close mobile menu
      document.getElementById('navLinks').classList.remove('open');
    } else if(y < lastY - 2){
      // Scrolling UP — show immediately
      nav.classList.remove('nav-hidden');
    }
    nav.classList.toggle('scrolled', y > 50);
    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function(){
    if(!ticking){ window.requestAnimationFrame(updateNav); ticking = true; }
  }, {passive: true});
})();

// ── MOBILE NAV TOGGLE ──
function toggleNav(){
  document.getElementById('navLinks').classList.toggle('open');
}