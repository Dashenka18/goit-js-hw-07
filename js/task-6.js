
const buttons = document.querySelectorAll('button');
const myInput = document.querySelector('input');
const boxes = document.querySelector('#boxes');
 

const btnCreate = buttons[0];
const btnDestroy = buttons[1];

btnCreate.addEventListener('click', (event) => {
      const amount = myInput.value;
      if (amount >= 1 && amount <= 100){
        createBoxes(amount);
        myInput.value = '';
      } 
    });

  btnDestroy.addEventListener('click', () => {
      destroyBoxes();
  });




  const createBoxes = amount =>  {
      destroyBoxes(); 
      for (let i = 0; i < amount; i++) {
          const box = document.createElement('div');
          const size = 30 + i * 10;
          box.style.backgroundColor = getRandomHexColor();
          const boxInside = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`; 
          boxes.insertAdjacentHTML('beforeend', boxInside);
      } 
  }

  const destroyBoxes = () => {
      boxes.innerHTML = '';
  }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
