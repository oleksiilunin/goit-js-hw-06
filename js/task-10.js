function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const divConrolsEl = document.querySelector('#controls');
const divContainerEl = document.querySelector('#boxes');
const buttonCreateBoxes = document.querySelector('[data-create]');
const buttonDestroyBoxes = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls.input');

buttonCreateBoxes.addEventListener('click', onClickButtonCreate);
buttonDestroyBoxes.addEventListener('click', onClickButtonDestroy);

function onClickButtonCreate() {
  const amount = new Array(Number(inputEl.textContent));

  function createBoxes(amount) { 
    amount.map(
      
    )
  };

};






// inputEl.addEventListener()
// console.log(inputEl);
console.log(document.querySelector('#controls.input'));

function createBoxes(amount) { 

};

