// Source - https://stackoverflow.com/a/73346486
// Posted by code, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-27, License - CC BY-SA 4.0

const root = document.querySelector(":root"); // we first get the root element
for(let i = 0; i < 10; i++) {
  root.style.setProperty(`--rando${i}`, `${Math.floor(Math.random() * 1500) + 10}px`);
}

const enterBtn = document.getElementById('enter-btn');
const background = document.getElementById('background');

enterBtn.addEventListener('click', () => {

 
  background.style.transformOrigin = '60% 40%';


  background.classList.add('zoom-in');

 
  setTimeout(() => {
    window.location.href = 'vessel.html';
  }, 1500); 
});