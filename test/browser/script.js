document.addEventListener('DOMContentLoaded', () => {
	/* Version */
	const version = document.getElementById('version');
	version.textContent = emailValidator.version;

	/* Validation */
	const submitBtn = document.getElementById('submit');
	const emailInput = document.getElementById('email');
	const status = document.getElementById('status');

	const validateEmail = () => {
		const email = emailInput.value;

		if (emailValidator.test(email)) {
			status.textContent = '✔️ This email is valid!';
			console.log(`✔️ ${email}`);
		} else {
			status.textContent = '❎ Email is NOT valid!';
			console.log(`❎ ${email}`);
		}
	};

	submitBtn.addEventListener('click', validateEmail);

	emailInput.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			validateEmail();
		}
	});
});