/****** https://github.com/Labush/JS ******/
const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let sLeft;
slider.scrollLeft = 0;

//clique sur le slider
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  sLeft = slider.scrollLeft;
});

// deplacement quand le curseur est sur le slider
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const dragged = x - startX;
  slider.scrollLeft = sLeft - dragged;
}); 

// quand on est en dehors du slider
slider.addEventListener('mouseleave', () => {
  isDown = false;
});
// quand on relache
slider.addEventListener('mouseup', () => {
  isDown = false;
});
