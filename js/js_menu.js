const $mobile = document.querySelector('.mobile')
const $btnMenuOpen = document.querySelector('.btnMenu_open')
const $btnMenuClose = document.querySelector('.btnMenu_close')

$btnMenuOpen.addEventListener('click', function(){
$mobile.classList.add('menu_open')

})


$btnMenuClose.addEventListener('click', function(){
$mobile.classList.remove('menu_open')

})