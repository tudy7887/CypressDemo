export interface AccountsDetailInterface {
    getNumberText(): Cypress.Chainable<any>
    getTypeText(): Cypress.Chainable<any>
    getBalanceText(): Cypress.Chainable<any>
    getAvailableText(): Cypress.Chainable<any>
    getDatesList(): Cypress.Chainable<any>
    getTransactionList(): Cypress.Chainable<any>
    getDebitList(): Cypress.Chainable<any>
    getCreditList(): Cypress.Chainable<any>
}