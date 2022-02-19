/*** https://github.com/Labush/JS ***/
const target = document.getElementById('target');
let array = ["Mon texte typing."]

// target.textContent = array[0];
let i = 0;
// console.log(array[0].length)


const apparition = () => {
    const lettre = document.createElement("span");
    target.appendChild(lettre);
    lettre.textContent += array[0][i];
}

// recursive
const loop = () => {
    setTimeout(() => {
        if (i < array[0].length) {
            apparition();
            i++;
            loop();
        }
    }, 100)
}
loop();