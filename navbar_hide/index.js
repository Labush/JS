/** https://github.com/Labush/JS ****/
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (window.scrollY > 145) {
        nav.style.marginTop = '0px';
    }
    else if (window.scrollY < 145) {
        nav.style.marginTop = '-50px';
    }
})
