export interface MenuInterface {
    getOpenNewAccountMenu(): Cypress.Chainable<any>
    getAccountOverviewMenu(): Cypress.Chainable<any>
    getTransferFundsMenu(): Cypress.Chainable<any>
    getBillPayMenu(): Cypress.Chainable<any>
    getFindTransactionsMenu(): Cypress.Chainable<any>
    getUpdateContractInfoMenu(): Cypress.Chainable<any>
    getRequestLoanMenu(): Cypress.Chainable<any>
    getLogOutMenu(): Cypress.Chainable<any>
}