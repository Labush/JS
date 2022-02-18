/** https://github.com/Labush/JS ****/
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY); // valeur en pixel de ce qui a été scrollé

    if (window.scrollY > 145) {
        nav.style.marginTop = '0px';
    }
    else if (window.scrollY < 145) {
        nav.style.marginTop = '-50px';
    }
})