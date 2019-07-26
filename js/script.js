const nav = document.getElementById('overlay');
const burgerMenu = document.getElementById('burger-menu');
const closeBtn = document.getElementById('closebtn');

burgerMenu.onclick = () => {
  nav.style.width = '100%';
};

closeBtn.onclick = () => {
  nav.style.width = '0';
}

nav.onclick = e => {
  if (e.target.tagName === 'A' && window.innerWidth < 768) {
    nav.style.width = '0';
  }
}

window.onresize = () => {
  if (window.innerWidth > 767) {
    nav.style.width = 'auto';
  } else {
    nav.style.width = '0';
  }
}

