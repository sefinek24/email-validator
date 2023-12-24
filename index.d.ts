declare module 'email-validator' {
    /**
     * Validates an email address.
     *
     * @param {string} email - The email address to validate.
     * @returns {boolean} - True if the email is valid, false otherwise.
     */
    export function test(email: string): boolean;

    /**
     * The version of the `email-validator` module.
     */
    export const version: string;
}
