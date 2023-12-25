declare module '@sefinek/email-validator' {
    /**
     * Function used for validating an email address.
     *
     * @param {string} email - The email address to validate.
     * @example
     * const emailValidator = require('@sefinek/email-validator');
     * const email = 'example@example.com';
     *
     * if (emailValidator.test(email)) {
     *    console.log(`Email ${email} is valid!`);
     * } else {
     *    console.log(`Email ${email} is NOT valid!`);
     * }
     * @returns {boolean} - Returns true if the email address is valid, otherwise false.
     */
    export function test(email: string): boolean;

    /**
     * The version of the `email-validator` module.
     */
    export const version: string;
}
