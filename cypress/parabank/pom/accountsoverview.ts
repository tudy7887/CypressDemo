import { AccountsOverviewInterface } from "../interface/accountsoverviewinterface"

export class AccountsOverview implements AccountsOverviewInterface {
    // Elements
    private accountList = 'td:nth-child(1) > a'
    private balanceListPlusTotal = 'td:nth-child(2)'
    private availableList = 'td:nth-child(3)'

    // Implementation
    getAccountList(): Cypress.Chainable<any> {
        return cy.get(this.accountList)
    }
    getBalanceListPlusTotal(): Cypress.Chainable<any> {
        return cy.get(this.balanceListPlusTotal)
    }
    getAvailableList(): Cypress.Chainable<any> {
        return cy.get(this.availableList)
    }
}