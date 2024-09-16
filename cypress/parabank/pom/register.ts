import { RegisterInterface } from "../interface/registerInterface"

export class Register implements RegisterInterface {
    // Elements
    private firstNameField = '#customer\\.firstName'
    private lastNameField = '#customer\\.lastName'
    private addressField = '#customer\\.address\\.street'
    private cityField = '#customer\\.address\\.city'
    private stateField = '#customer\\.address\\.state'
    private zipCodeField = '#customer\\.address\\.zipCode'
    private phoneField = '#customer\\.phoneNumber'
    private ssnField = '#customer\\.ssn'
    private usernameField = '#customer\\.username'
    private passwordField = '#customer\\.password'
    private passwordConfirmationField = '#repeatedPassword'
    private registerButton = '[value="Register"]'

    // Implementation
    getFirstNameField(): Cypress.Chainable<any> {
        return cy.get(this.firstNameField)
    }
    getLastNameField(): Cypress.Chainable<any> {
        return cy.get(this.lastNameField)
    }
    getAddressField(): Cypress.Chainable<any> {
        return cy.get(this.addressField)
    }
    getCityField(): Cypress.Chainable<any> {
        return cy.get(this.cityField)
    }
    getStateField(): Cypress.Chainable<any> {
        return cy.get(this.stateField)
    }
    getZipCodeField(): Cypress.Chainable<any> {
        return cy.get(this.zipCodeField)
    }
    getPhoneField(): Cypress.Chainable<any> {
        return cy.get(this.phoneField)
    }
    getSsnField(): Cypress.Chainable<any> {
        return cy.get(this.ssnField)
    }
    getUsernameField(): Cypress.Chainable<any> {
        return cy.get(this.usernameField)
    }
    getPasswordField(): Cypress.Chainable<any> {
        return cy.get(this.passwordField)
    }
    getPasswordConfirmationField(): Cypress.Chainable<any> {
        return cy.get(this.passwordConfirmationField)
    }
    getRegisterButton(): Cypress.Chainable<any> {
        return cy.get(this.registerButton)
    }
}