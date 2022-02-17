/*** https://github.com/Labush/JS ***/
const showLink = document.querySelector('#showLink');
showLink.addEventListener('click', () => {
    document.querySelector('.content_hide').style.display = 'block';
})
const hideLink = document.querySelector('#hideLink');
hideLink.addEventListener('click', () => {
    document.querySelector('.content_hide').style.display = 'none';
})

const showLink1 = document.querySelector('#showLink1');
showLink1.addEventListener('click', () => {
    document.querySelector('.content_hide1').style.display = 'block';
})
const hideLink1 = document.querySelector('#hideLink1');
hideLink1.addEventListener('click', () => {
    document.querySelector('.content_hide1').style.display = 'none';
})

const showLink2 = document.querySelector('#showLink2');
showLink2.addEventListener('click', () => {
    document.querySelector('.content_hide2').style.display = 'block';
})
const hideLink2 = document.querySelector('#hideLink2');
hideLink2.addEventListener('click', () => {
    document.querySelector('.content_hide2').style.display = 'none';
})