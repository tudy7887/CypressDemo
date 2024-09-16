import { OpenNewAccountInterface } from "../interface/opennewaccountinterface"

export class OpenNewAccount implements OpenNewAccountInterface {
    // Elements
    private typeCombobox = '#type'
    private accountCombobox = '#fromAccountId'
    private createNewAccountButton = '[value="Open New Account"]'
    private newAccountText = '#newAccountId'

    // Implementation
    getTypeCombobox(): Cypress.Chainable<any> {
        return cy.get(this.typeCombobox)
    }
    getAccountCombobox(): Cypress.Chainable<any> {
        return cy.get(this.accountCombobox)
    }
    getCreateNewAccountButton(): Cypress.Chainable<any> {
        return cy.get(this.createNewAccountButton)
    }
    getNewAccountText(): Cypress.Chainable<any> {
        return cy.get(this.newAccountText)
    }
}