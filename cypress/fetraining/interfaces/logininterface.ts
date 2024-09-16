export interface LoginInterface {
    getEmailField(): Cypress.Chainable<any>
    getPassworFieldd(): Cypress.Chainable<any>
    getLoginButton(): Cypress.Chainable<any>
    getForbiddenAccessError(): Cypress.Chainable<any>
    getEmailRequiredError(): Cypress.Chainable<any>
    getPasswordRequiredError(): Cypress.Chainable<any>
}

