import { LoginInterface } from "../interface/logininterface"

export class Login implements LoginInterface {
    // Elements
    private usernameField = '[name="username"]'
    private passwordField = '[name="password"]'
    private loginButton = '[value="Log In"]'
    private registerLink = '#loginPanel > p:nth-child(3) > a'
    private loginError = '#rightPanel > p'
    private customerLoginText = '#leftPanel > h2'

    // Constants
    customerLogin = 'Customer Login'

    // Implementation
    getUsernameField(): Cypress.Chainable<any> {
        return cy.get(this.usernameField)
    }
    getPasswordField(): Cypress.Chainable<any> {
        return cy.get(this.passwordField)
    }
    getLoginButton(): Cypress.Chainable<any> {
        return cy.get(this.loginButton)
    }
    getRegisterLink(): Cypress.Chainable<any> {
        return cy.get(this.registerLink)
    }
    getLoginError(): Cypress.Chainable<any> {
        return cy.get(this.loginError)
    }
    getcustomerLoginText(): Cypress.Chainable<any> {
        return cy.get(this.customerLoginText)
    }
}