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


/*** typing effect ***/

const target = document.getElementById("target");
let array = ["Romain Junri.", "coach sportif diplômé.", "préparateur physique."];
let mot = 0;
let i = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[mot][i];

  setTimeout(() => {
    letter.remove();
  }, 3000);
};

const loop = () => {
  setTimeout(() => {
    if (mot >= array.length) {
      mot = 0;
      i = 0;
      loop();
    } else if (i < array[mot].length) {
      createLetter();
      i++;
      loop();
    } else {
      mot++;
      i = 0;
      setTimeout(() => {
        loop();
      }, 3000);
    }
  }, 85);
};
loop();

/**** faq */
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

/**** FAQ : faire disparaitre le bouton d'ouvrir au clique, et le faire réapparaitre****/
const credit_un = document.getElementById('credit_un');
credit_un.addEventListener('click', () => {
    credit_un.style.visibility = 'hidden';
})
document.getElementById('credit_un_return').addEventListener('click', () => {
    credit_un.style.visibility = 'visible';
})
/***/
const credit_deux = document.getElementById('credit_deux');
credit_deux.addEventListener('click', () => {
    credit_deux.style.visibility = 'hidden';
})
document.getElementById('credit_deux_return').addEventListener('click', () => {
    credit_deux.style.visibility = 'visible';
})
/***/
const credit_trois = document.getElementById('credit_trois');
credit_trois.addEventListener('click', () => {
    credit_trois.style.visibility = 'hidden';
})
document.getElementById('credit_trois_return').addEventListener('click', () => {
    credit_trois.style.visibility = 'visible';
})
/***/
