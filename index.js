const { version } = require('./package.json');

const MAIN_REGEX = /^[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const ASTERISK_REGEX = /\*/;

const emailValidator = {
	test: email => {
		if (!email) return false;

		const emailParts = email.split('@');
		if (emailParts.length !== 2) return false;

		const account = emailParts[0];
		const address = emailParts[1];
		if (account.length > 64 || address.length > 255) return false;

		if (ASTERISK_REGEX.test(email)) return false;

		if (account.startsWith('.') || account.endsWith('.') || address.startsWith('.') || address.endsWith('.') || account.includes('..') || address.includes('..')) {
			return false;
		}

		const domainParts = address.split('.');
		for (const part of domainParts) {
			if (part.length === 0 || part.length > 63) {
				return false;
			}
		}

		return MAIN_REGEX.test(email);
	},

	version,
};

module.exports = emailValidator;