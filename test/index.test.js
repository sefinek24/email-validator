const emailValidator = require('../index.js');

describe('Email Validation Tests', () => {
	test('Valid email', () => {
		expect(emailValidator.test('contact@sefinek.net')).toBe(true);
	});

	test('Email without domain', () => {
		expect(emailValidator.test('example@')).toBe(false);
	});

	test('Email without user name', () => {
		expect(emailValidator.test('@example.com')).toBe(false);
	});

	test('Email without @', () => {
		expect(emailValidator.test('example.com')).toBe(false);
	});

	test('Email with multiple @', () => {
		expect(emailValidator.test('exa@mple@example.com')).toBe(false);
	});

	test('Email with spaces', () => {
		expect(emailValidator.test('ex ample@example.com')).toBe(false);
	});

	test('Email with leading spaces', () => {
		expect(emailValidator.test(' example@example.com')).toBe(false);
	});

	test('Email with trailing spaces', () => {
		expect(emailValidator.test('example@example.com ')).toBe(false);
	});

	test('Email with invalid characters', () => {
		expect(emailValidator.test('exa*mple@example.com')).toBe(false);
	});

	test('User name part too long', () => {
		expect(emailValidator.test(`${'a'.repeat(65)}@example.com`)).toBe(false);
	});

	test('Domain part too long', () => {
		expect(emailValidator.test(`example@${'a'.repeat(256)}`)).toBe(false);
	});

	test('Subdomain part too long', () => {
		expect(emailValidator.test(`example@${'a'.repeat(64)}.com`)).toBe(false);
	});

	test('Email without top-level domain', () => {
		expect(emailValidator.test('example@example')).toBe(false);
	});

	test('Email with numeric domain', () => {
		expect(emailValidator.test('example@1234.com')).toBe(true);
	});

	test('Email with hyphen in domain', () => {
		expect(emailValidator.test('example@exa-mple.com')).toBe(true);
	});

	test('Email with underscore in user name', () => {
		expect(emailValidator.test('ex_ample@example.com')).toBe(true);
	});

	test('Email with plus in user name', () => {
		expect(emailValidator.test('ex+ample@example.com')).toBe(true);
	});

	test('Email with dot in user name', () => {
		expect(emailValidator.test('ex.ample@example.com')).toBe(true);
	});

	test('Email with consecutive dots', () => {
		expect(emailValidator.test('ex..ample@example.com')).toBe(false);
	});

	test('Email with dot at the start of user name', () => {
		expect(emailValidator.test('.example@example.com')).toBe(false);
	});

	test('Email with dot at the end of user name', () => {
		expect(emailValidator.test('example.@example.com')).toBe(false);
	});

	test('Email with dot at the start of domain', () => {
		expect(emailValidator.test('example@.example.com')).toBe(false);
	});

	test('Email with dot at the end of domain', () => {
		expect(emailValidator.test('example@example.com.')).toBe(false);
	});

	test('Email with international characters', () => {
		expect(emailValidator.test('üñîçøðé@example.com')).toBe(true);
	});

	test('Domain with international characters', () => {
		expect(emailValidator.test('example@üñîçøðé.com')).toBe(true);
	});

	test('Email with long domain', () => {
		expect(emailValidator.test(`example@${'a'.repeat(63)}.com`)).toBe(true);
	});

	test('Email with the subdomain', () => {
		expect(emailValidator.test('example@sub.example.com')).toBe(true);
	});

	test('Email with single character user name', () => {
		expect(emailValidator.test('e@example.com')).toBe(true);
	});

	test('Email with single character domain', () => {
		expect(emailValidator.test('example@a.com')).toBe(true);
	});

	test('Email with numeric user name', () => {
		expect(emailValidator.test('1234@example.com')).toBe(true);
	});

	test('Email with all allowed special characters', () => {
		expect(emailValidator.test('user+mailbox/department=shipping@example.com')).toBe(true);
	});
});
