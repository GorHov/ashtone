document.addEventListener("DOMContentLoaded", function () {
    let hamburgerMenu = document.querySelector(".hamburger-menu");
    let closeMenu = document.querySelector(".close");
    let nav = document.querySelector("nav");

    hamburgerMenu.addEventListener("click", function () {
        nav.classList.toggle("nav-open");
        closeMenu.style.display = "block";
    });

    closeMenu.addEventListener("click", function () {
        nav.classList.remove("nav-open");
        closeMenu.style.display = "none";
    });
});

const header = document.querySelector('.header');
let scrollPrev = 0;

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled > 200 && scrolled > scrollPrev) {
    header.classList.add('out');
  } else {
    header.classList.remove('out');
  }
  
  scrollPrev = scrolled;
});

