let burger = document.querySelector('.toggle');
let nav = document.querySelector('.navigation');
burger.addEventListener('click', function(event) {
  burger.classList.toggle('toggle--activ');
  nav.classList.toggle('navigation--close');
});
nav.classList.remove('navigation--nojs--nojs');

