const first = document.querySelector('.first');
const vanish = document.querySelector('.vanish');
const last = document.querySelector('.last');
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');


    hamburger.addEventListener('click', () => {
        first.classList.toggle('up');
        vanish.classList.toggle('vanished');
        last.classList.toggle('down');
        menu.classList.toggle('on');
        hamburger.classList.toggle('color');
    });

//
const hidden = document.querySelector('.select-list');
const select = document.querySelector('.select');
const moving = document.querySelector('.moving');

select.addEventListener('click', () =>{
    hidden.classList.toggle('hidden');
    moving.classList.toggle('rotate');
});

//
