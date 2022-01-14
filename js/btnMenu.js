
/*usar $ para variavel que guarda referencia do html */
document.querySelector('.btnMenu_open').addEventListener('click' , function(){
    document.querySelector('.menu').classList.add('menu_open'); /*adiciona na classe menu o menu_open
    classList é para manipular lista de classe*/ 
})

document.querySelector('.btnMenu_close').addEventListener('click' , function(){
    document.querySelector('.menu').classList.remove('menu_open') /*remove da classe menu o menu_open
    classList é para manipular lista de classe*/ 
})

