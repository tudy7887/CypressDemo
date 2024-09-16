import { MenuInterface } from "../interface/menuinterface"

export class Menu implements MenuInterface {
    // Elements
    private openNewAccountMenu = '#leftPanel > ul > li:nth-child(1) > a'
    private accountOverviewMenu = '#leftPanel > ul > li:nth-child(2) > a'
    private transferFundsMenu = '#leftPanel > ul > li:nth-child(3) > a'
    private billPayMenu = '#leftPanel > ul > li:nth-child(4) > a'
    private findTransactionsMenu = '#leftPanel > ul > li:nth-child(5) > a'
    private updateContractInfoMenu = '#leftPanel > ul > li:nth-child(6) > a'
    private requestLoanMenu = '#leftPanel > ul > li:nth-child(7) > a'
    private logOutMenu = '#leftPanel > ul > li:nth-child(8) > a'

    // Implementation
    getOpenNewAccountMenu(): Cypress.Chainable<any> {
        return cy.get(this.openNewAccountMenu)
    }
    getAccountOverviewMenu(): Cypress.Chainable<any> {
        return cy.get(this.accountOverviewMenu)
    }
    getTransferFundsMenu(): Cypress.Chainable<any> {
        return cy.get(this.transferFundsMenu)
    }
    getBillPayMenu(): Cypress.Chainable<any> {
        return cy.get(this.billPayMenu)
    }
    getFindTransactionsMenu(): Cypress.Chainable<any> {
        return cy.get(this.findTransactionsMenu)
    }
    getUpdateContractInfoMenu(): Cypress.Chainable<any> {
        return cy.get(this.updateContractInfoMenu)
    }
    getRequestLoanMenu(): Cypress.Chainable<any> {
        return cy.get(this.requestLoanMenu)
    }
    getLogOutMenu(): Cypress.Chainable<any> {
        return cy.get(this.logOutMenu)
    }
}