let burger = document.querySelector('.toggle');
let nav = document.querySelector('.navigation');
let map = document.querySelector('.map');
burger.addEventListener('click', function(event) {
  burger.classList.toggle('toggle--activ');
  nav.classList.toggle('navigation--close');
});
nav.classList.remove('navigation--nojs');
map.classList.remove('map--nojs');
