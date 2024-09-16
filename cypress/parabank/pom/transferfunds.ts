import { TransferFundsInterface } from "../interface/transferfundsinterface"

export class TransferFunds implements TransferFundsInterface {
    // Elements
    private amountField = '#amount'
    private fromAccountCombobox = '#fromAccountId'
    private toAccountCombobox = '#toAccountId'
    private transferButton = '[value="Transfer"]'
    private transferFundsError = '#showError > p'
    private transferFundSuccessfulText = '#showResult > p:nth-child(2)'

    // Implementation
    getAmountField(): Cypress.Chainable<any> {
        return cy.get(this.amountField)
    }
    getFromAccountCombobox(): Cypress.Chainable<any> {
        return cy.get(this.fromAccountCombobox)
    }
    getToAccountCombobox(): Cypress.Chainable<any> {
        return cy.get(this.toAccountCombobox)
    }
    getTransferButton(): Cypress.Chainable<any> {
        return cy.get(this.transferButton)
    }
    getTransferFundsError(): Cypress.Chainable<any> {
        return cy.get(this.transferFundsError)
    }
    getTransferFundSuccessfulText(): Cypress.Chainable<any> {
        return cy.get(this.transferFundSuccessfulText)
    }
    getTransferFundsExpectedSuccssfullText(from: string, to: string, amount:string): string {
        return `${amount}.00 has been transferred from account #${from} to account #${to}.`
    }
}