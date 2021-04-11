
let burgerMenu = document.querySelector('.burgerMenu');
function burgerMenuChange() {
  burgerMenu.classList.toggle("change");
}
burgerMenu.addEventListener('click', burgerMenuChange);

