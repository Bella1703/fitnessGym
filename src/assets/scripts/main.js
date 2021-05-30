//
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





let header = document.querySelector('.header');

function sticToTheTop() {
    let windowTop = -document.documentElement.getBoundingClientRect().top;
    console.log(windowTop);
    if (windowTop < 40) {
      let headerTop = 40 - windowTop;
      header.style.top = headerTop + 'px';
    }
  if (windowTop > 95) {
    header.style.top = '0';
  }
}

window.addEventListener('scroll', sticToTheTop);
