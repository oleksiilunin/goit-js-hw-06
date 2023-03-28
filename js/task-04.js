const counterSpan = document.querySelector('#value');
let counterValue = Number(counterSpan.textContent);
// let counterValue = 0;


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

function decrementValue () {
	counterValue -= 1;
	counterSpan.textContent = counterValue;
};
function incrementValue () {
	counterValue += 1;
	counterSpan.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementValue);
incrementBtn.addEventListener('click', incrementValue);
