import { initial } from "cypress/types/lodash"
import { AccountsOverviewInterface } from "../../parabank/interface/accountsoverviewinterface"

export function injectParaBankAccountsOverviewInterface(object: AccountsOverviewInterface): void {
    accountsOverviewInterface = object
}

var accountsOverviewInterface: AccountsOverviewInterface
declare global {
    namespace Cypress {
        interface Chainable{
            paraBankClickAccount(index: number): Chainable<any>
            paraBankCheckAccount(index: number, expectedNumber: string, expectedBalance: string, expectedAvailable: string): Chainable<any>
            paraBankCheckAccountsTotal(expectedTotal: string): Chainable<any>
            paraBankGetAccountNumber(index: number): Chainable<string>
        }
    }
}

Cypress.Commands.add('paraBankClickAccount', 
    (index: number) => {
        accountsOverviewInterface.getAccountList().
        eq(index).
        click()
    }
)
Cypress.Commands.add('paraBankGetAccountNumber', 
    (index: number) => {
        return accountsOverviewInterface.getAccountList().
        eq(index).
        invoke("text")
    }
)
Cypress.Commands.add('paraBankCheckAccount', 
    (index: number, expectedNumber: string, expectedBalance: string, expectedAvailable: string) => { 
        accountsOverviewInterface.getAccountList().
        eq(index).
        should('have.text', expectedNumber)
        accountsOverviewInterface.getBalanceListPlusTotal().
        eq(index).
        should('have.text', expectedBalance)
        accountsOverviewInterface.getAvailableList().
        eq(index).
        should('have.text', expectedAvailable)
    }
)
Cypress.Commands.add('paraBankCheckAccountsTotal', 
    (expectedTotal: string) => { 
        accountsOverviewInterface.getBalanceListPlusTotal().
        last().
        should('have.text', expectedTotal)
    }
)


