export interface LoginInterface {
    getUsernameField(): Cypress.Chainable<any>
    getPasswordField(): Cypress.Chainable<any>
    getLoginButton(): Cypress.Chainable<any>
    getRegisterLink(): Cypress.Chainable<any>
    getLoginError(): Cypress.Chainable<any>
    getcustomerLoginText(): Cypress.Chainable<any>
    customerLogin: string
}