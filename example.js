const emailValidator = require('./src/index.js');
const email = 'contact@sefinek.net';

if (emailValidator.test(email)) {
	console.log(`Email ${email} is valid.`);
} else {
	console.log(`Email ${email} is NOT valid!`);
}