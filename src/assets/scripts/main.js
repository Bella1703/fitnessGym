
let burgerMenu = document.querySelector('.burgerMenu');
function menuChange() {

  if(burgerMenu.classList.contains("change")) {
    document.body.querySelector('.nav-list').classList.remove('nav-list__move-down');
    document.body.querySelector('.nav-list').classList.add('nav-list__move-up');
  }
  else {
    document.body.querySelector('.nav-list').classList.remove('nav-list__move-up');
    document.body.querySelector('.nav-list').classList.add('nav-list__move-down');
  }

  burgerMenu.classList.toggle("change");
}
burgerMenu.addEventListener('click', menuChange);



