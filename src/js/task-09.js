function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

const onChangeColorBtn = buttonEl.addEventListener('click', onClick);

function onClick(evt) {
  spanEl.textContent = getRandomHexColor();
  // console.log(spanEl.textContent);
  bodyEl.style.backgroundColor = spanEl.textContent;
}
