window.addEventListener('scroll',()=>{
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 50);
})


const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');
const activeNav = document.querySelector('activeNav');

burger.addEventListener('click',()=>{
  nav.classList.toggle('activeNav');
  burger.classList.toggle('open')
})


const links = document.querySelectorAll(".page-btn");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
/*const homeBtn = document.querySelectorAll(".home-btn");

function x(){
  homeBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  });
}
x();*/
