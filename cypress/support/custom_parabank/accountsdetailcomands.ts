import { AccountsDetailInterface } from "../../parabank/interface/accountsdetailinterface"
import { ParaBankAccountType } from "../../util/helpers"

export function injectParaBankAccountsDetailInterface(object: AccountsDetailInterface): void {
    accountsDetailInterface = object
}

var accountsDetailInterface: AccountsDetailInterface
declare global {
    namespace Cypress {
        interface Chainable{
            paraBankClickAccountTransaction(index: number): Chainable<any>
            paraBankCheckAccountDetails(expectedNumber: string, expectedType: ParaBankAccountType, expectedBalance: string, expectedAvailable: string): Chainable<any>
            paraBankCheckAccountTransaction(index: number, expectedDate: string, expectedDebit: string, expectedCredit: string): Chainable<any>
        }
    }
}

Cypress.Commands.add('paraBankClickAccountTransaction', 
    (index: number) => {
        accountsDetailInterface.getTransactionList().
        eq(index).
        click()
    }
)
Cypress.Commands.add('paraBankCheckAccountDetails', 
    (expectedNumber: string, expectedType: ParaBankAccountType, expectedBalance: string, expectedAvailable: string) => { 
        accountsDetailInterface.getNumberText().
        should('have.text', expectedNumber)
        accountsDetailInterface.getTypeText().
        should('have.text', expectedType)
        accountsDetailInterface.getBalanceText().
        should('have.text', expectedBalance)
        accountsDetailInterface.getAvailableText().
        should('have.text', expectedAvailable)
    }
)
Cypress.Commands.add('paraBankCheckAccountTransaction', 
    (index: number, expectedDate: string, expectedDebit: string, expectedCredit: string) => { 
        accountsDetailInterface.getDatesList().
        eq(index).
        should('have.text', expectedDate)
        accountsDetailInterface.getDebitList().
        eq(index).
        should('have.text', expectedDebit)
        accountsDetailInterface.getCreditList().
        eq(index).
        should('have.text', expectedCredit)
    }
)


