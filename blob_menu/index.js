/***** https://github.com/Labush/JS *******/

let menu = document.getElementById ("menu") ;
let blob = document.getElementById("blob");

let burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    blob.classList.toggle("open");
    if (menu.style.display == "block"){
       menu.style.display = "none";
    } else {
       menu.style.display = "block";
    }

    // 
})