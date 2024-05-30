
const myBody = document.querySelector('body');
const myBtn = myBody.querySelector('.change-color');
const mySpan = myBody.querySelector('.color');

myBtn.addEventListener('click', event => {
  const result = myBody.style.backgroundColor = getRandomHexColor(); 
  mySpan.textContent = result;
  });



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
