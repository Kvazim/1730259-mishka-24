let byBtn = document.querySelectorAll('.product__button');
let modalClose = document.querySelector('.modal');
let modalCont = document.querySelector('.modal-container');

byBtn.forEach(function(byBtn) {

    byBtn.addEventListener('click', function(event) {
        modalClose.classList.remove('modal--close');
    });
});

//закрытие окна по escape
window.addEventListener("keydown", function (e) {

    if (e.which == 27) {
        modalClose.classList.add('modal--close');
    };
});

//закрытие окна по клику на область
const someAction = () => modalClose.classList.add('modal--close');

window.addEventListener('click', (e) => {

    if (e.target !== modalCont && !modalCont.contains(e.target)) {
        someAction();
    };
});
