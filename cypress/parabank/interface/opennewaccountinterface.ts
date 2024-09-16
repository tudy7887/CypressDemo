export interface OpenNewAccountInterface {
    getTypeCombobox(): Cypress.Chainable<any>
    getAccountCombobox(): Cypress.Chainable<any>
    getCreateNewAccountButton(): Cypress.Chainable<any>
    getNewAccountText(): Cypress.Chainable<any>
}