const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitCheckForm);

function onSubmitCheckForm(evt) {
	evt.preventDefault();
	
	const { email, password } = evt.currentTarget.elements;

	if (!email.value || !password.value) {
		alert('All fields must be filled');
		return; 
	} else {
		const formData = {
		email: email.value,
		password: password.value,
		};	
		
		console.log(formData);

		evt.currentTarget.reset();
	};	
};
