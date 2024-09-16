export interface AccountsOverviewInterface {
    getAccountList(): Cypress.Chainable<any>
    getBalanceListPlusTotal(): Cypress.Chainable<any>
    getAvailableList(): Cypress.Chainable<any>
}