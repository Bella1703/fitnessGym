
let burgerMenu = document.querySelector('.burgerMenu');
function menuChange() {
  burgerMenu.classList.toggle("change");
  document.body.querySelector('.nav').classList.toggle('nav_mobile');
  document.body.querySelector('.nav-list').classList.toggle('nav-list_mobile');
}
burgerMenu.addEventListener('click', menuChange);



