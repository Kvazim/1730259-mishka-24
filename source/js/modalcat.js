const btncard = document.querySelectorAll('.card__button');
const modalClose = document.querySelector('.modal');
const modalCont = document.querySelector('.modal-container');

btncard.forEach(function(cardbtn) {

    cardbtn.addEventListener('click', function(event) {
        modalClose.classList.remove('modal--close');
    });
});

//закрытие окна по escape
window.addEventListener('keydown', function (e) {

    if (e.which == 27) {
        modalClose.classList.add('modal--close');
    };
});

//закрытие окна по клику на область
const someAction = () => modalClose.classList.add('modal--close');

window.addEventListener('click', (e) => {

    if (e.target !== modalCont && !modalCont.contains(e.target)) {
        someAction();
    }
});
