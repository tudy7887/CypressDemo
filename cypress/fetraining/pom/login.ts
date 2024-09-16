import { LoginInterface } from "../interfaces/logininterface"

export class Login implements LoginInterface {
    // Elements
    private emailField = '#userEmail'
    private passwordField = '#userPassword'
    private loginButton = '#submitButton'
    private errorForbiddenAccess = '#errorForbiddenAccess'
    private errorEmailRequired = '.errorEmailMandatory'
    private errorPasswordRequired = '.errorPasswordMandatory'

    // Implementation
    getEmailField(): Cypress.Chainable<any> {
        return cy.get(this.emailField)
    }
    getPassworFieldd(): Cypress.Chainable<any> {
        return cy.get(this.passwordField)
    }
    getLoginButton(): Cypress.Chainable<any> {
        return cy.get(this.loginButton)
    }
    getForbiddenAccessError(): Cypress.Chainable<any> {
        return cy.get(this.errorForbiddenAccess)
    }
    getEmailRequiredError(): Cypress.Chainable<any> {
        return cy.get(this.errorEmailRequired)
    }
    getPasswordRequiredError(): Cypress.Chainable<any> {
        return cy.get(this.errorPasswordRequired)
    }
}

