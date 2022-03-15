/****https://github.com/Labush/JS****/

const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')

burger.addEventListener('click', () => {
  nav.classList.toggle('open')
  burger.classList.toggle('open')
})

document.querySelector('.content').addEventListener('click', () => {
  nav.classList.remove('open')
  burger.classList.remove('open')
})

/*** PARALLAX ***/
const parallax = document.getElementById('img_avocat');
const parallax_menu = document.getElementById('img_menu_1');
const parallax_news = document.getElementById('img');
const parallax_newsletter = document.getElementById('newsletter');

window.addEventListener('scroll', () => {

  console.log(window.scrollY);

  if (window.scrollY > 220) {
    parallax.style.marginTop = '85px';
    parallax.style.transitionDuration = '0.25s';
    parallax.style.opacity = '100';
  }
  else if (window.scrollY < 220) {
    parallax.style.marginTop = '0px';
    parallax.style.transitionDuration = '0.25s';
    parallax.style.opacity = '0.40';
  }

  if (window.scrollY > 750) {
    parallax_menu.style.marginTop = '0px';
    parallax_menu.style.transitionDuration = '0.20s';
    parallax_menu.style.opacity = '100';
  }
  else if (window.scrollY < 750) {
    parallax_menu.style.marginTop = '-50px';
    parallax_menu.style.transitionDuration = '0.20s';
    parallax_menu.style.opacity = '0.40';
  }
  
  /**** */
  if (window.scrollY > 2070) {
    parallax_news.style.marginTop = '75px';
    parallax_news.style.transitionDuration = '0.25s';
    parallax_news.style.opacity = '100';
  }
  else if (window.scrollY < 2070) {
    parallax_news.style.marginTop = '0px';
    parallax_news.style.transitionDuration = '0.25s';
    parallax_news.style.opacity = '0.40';
  }


  if (window.scrollY > 1970) {
    parallax_newsletter.style.marginTop = '250px';
    parallax_newsletter.style.transitionDuration = '0.7s';
    parallax_newsletter.style.opacity = '100';
  }
  else if (window.scrollY < 1970) {
    parallax_newsletter.style.marginTop = '0px';
    parallax_newsletter.style.transitionDuration = '0.7s';
    parallax_newsletter.style.opacity = '0.40';
  }


})


