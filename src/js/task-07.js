const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', changeFontSize)

function changeFontSize(evt) {
	spanEl.style.fontSize = `${evt.currentTarget.valueAsNumber}px`;
};