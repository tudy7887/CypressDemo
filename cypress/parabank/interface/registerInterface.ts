export interface RegisterInterface {
    getFirstNameField(): Cypress.Chainable<any>
    getLastNameField(): Cypress.Chainable<any>
    getAddressField(): Cypress.Chainable<any>
    getCityField(): Cypress.Chainable<any>
    getStateField(): Cypress.Chainable<any>
    getZipCodeField(): Cypress.Chainable<any>
    getPhoneField(): Cypress.Chainable<any>
    getSsnField(): Cypress.Chainable<any>
    getUsernameField(): Cypress.Chainable<any>
    getPasswordField(): Cypress.Chainable<any>
    getPasswordConfirmationField(): Cypress.Chainable<any>
    getRegisterButton(): Cypress.Chainable<any>
}