export interface TransferFundsInterface {
    getAmountField(): Cypress.Chainable<any>
    getFromAccountCombobox(): Cypress.Chainable<any>
    getToAccountCombobox(): Cypress.Chainable<any>
    getTransferButton(): Cypress.Chainable<any>
    getTransferFundsError(): Cypress.Chainable<any>
    getTransferFundSuccessfulText(): Cypress.Chainable<any>
    getTransferFundsExpectedSuccssfullText(from: string, to: string, amount:string): string
}