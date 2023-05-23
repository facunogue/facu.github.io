const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');

ham.addEventListener('click', () =>{
    enlaces.classList.toggle('activado');
})

$(document).ready(main);

var contador = 1;

function main(){
    $('.menu').click(function(){
        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        }else{
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
}