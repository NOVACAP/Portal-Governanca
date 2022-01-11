const $menu = document.querySelector('.menu')
const $btnMenuOpen = document.querySelector('.btnMenu_open') /*usar $ para variavel que guarda referencia do html */
$btnMenuOpen.addEventListener('click' , function(){
    $menu.classList.add('menu_open'); /*adiciona na classe menu o menu_open
    classList é para manipular lista de classe*/ 
})

const $btnMenuClose = document.querySelector('.btnMenu_close')
$btnMenuClose.addEventListener('click' , function(){
    $menu.classList.remove('menu_open') /*remove da classe menu o menu_open
    classList é para manipular lista de classe*/ 
})

/*Lembrar: tirar as const para evitar consumo de memória */