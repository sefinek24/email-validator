const emailValidator = require('./index.js');
const testEmail = 'contact@sefinek.net';

if (emailValidator.test(testEmail)) {
	console.log(`Email ${testEmail} is valid!`);
} else {
	console.log(`Email ${testEmail} is NOT valid!`);
}