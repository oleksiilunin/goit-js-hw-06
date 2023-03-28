const inputEl = document.querySelector('#validation-input');
const inputTextLength = Number(inputEl.getAttribute('data-length'));
inputEl.addEventListener('blur', onValidCount);

function onValidCount(evt) {
	if (evt.currentTarget.value.length === inputTextLength) {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
	} else {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid');

	};
};