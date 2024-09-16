import { AccountsDetailInterface } from "../interface/accountsdetailinterface"

export class AccountsDetail implements AccountsDetailInterface {
    // Elements
    private numberText = '#accountId'
    private typeText = '#accountType'
    private balanceText = '#balance'
    private availableText = '#availableBalance'
    private datesList = '#transactionTable > tbody >* td:nth-child(1)'
    private transactionList = '#transactionTable > tbody >* td:nth-child(2) > a'
    private debitList = '#transactionTable > tbody >* td:nth-child(3)'
    private creditList = '#transactionTable > tbody >* td:nth-child(4)'

    // Implementation
    getNumberText(): Cypress.Chainable<any> {
        return cy.get(this.numberText)
    }
    getTypeText(): Cypress.Chainable<any> {
        return cy.get(this.typeText)
    }
    getBalanceText(): Cypress.Chainable<any> {
        return cy.get(this.balanceText)
    }
    getAvailableText(): Cypress.Chainable<any> {
        return cy.get(this.availableText)
    }
    getDatesList(): Cypress.Chainable<any> {
        return cy.get(this.datesList)
    }
    getTransactionList(): Cypress.Chainable<any> {
        return cy.get(this.transactionList)
    }
    getDebitList(): Cypress.Chainable<any> {
        return cy.get(this.debitList)
    }
    getCreditList(): Cypress.Chainable<any> {
        return cy.get(this.creditList)
    }
}