/*** https://github.com/Labush/JS ********/

const target = document.getElementById("target");
let array = ["Premier texte.", "Deuxième texte.", "Troisième texte."];
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
