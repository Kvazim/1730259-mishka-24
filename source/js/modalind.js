let bybtn = document.querySelectorAll('.product__button');
let modalClose = document.querySelector('.modal');
let modalCont = document.querySelector('.modal-container');
bybtn.forEach(function(bybtn){
    bybtn.addEventListener('click', function(event) {modalClose.classList.remove('modal--close');
    });
});
//закрытие окна по escape
window.addEventListener("keydown", function (e) {
    if (e.which == 27) {
        modalClose.classList.add('modal--close');
    };
});
//закрытие окна по клику на область
modalClose.addEventListener('click', function() {
    modalClose.classList.add('modal--close');
});
