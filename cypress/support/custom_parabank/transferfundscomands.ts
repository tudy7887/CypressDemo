import { TransferFundsInterface } from "../../parabank/interface/transferfundsinterface"

export function injectParaBankTransferFundsInterface(object: TransferFundsInterface): void {
    transferFundsInterface = object
}

var transferFundsInterface: TransferFundsInterface
declare global {
    namespace Cypress {
        interface Chainable{
            paraBankClickTransferFundButton(): Chainable<any>
            paraBankEnterTransferFundData(from: string, to: string, amount: string): Chainable<any>
            paraBankCheckTransferFundSuccssfullText(from: string, to: string, amount: string): Chainable<any>
            paraBankCheckTransferFundError(expectedMessage: string): Chainable<any>
        }
    }
}

Cypress.Commands.add('paraBankClickTransferFundButton', 
    () => { 
        transferFundsInterface.getTransferButton().
        click()
    }
)
Cypress.Commands.add('paraBankEnterTransferFundData', 
    (from: string, to: string, amount:string) => { 
        transferFundsInterface.getAmountField().
        clear()
        if(amount != ''){
            transferFundsInterface.getAmountField().
            type(amount)
        }
        transferFundsInterface.getFromAccountCombobox().
        select(from)
        transferFundsInterface.getToAccountCombobox().
        select(to)
    }
)
Cypress.Commands.add('paraBankCheckTransferFundSuccssfullText', 
    (from: string, to: string, amount:string) => {
        var expectedMessage = transferFundsInterface.getTransferFundsExpectedSuccssfullText(from, to, amount) 
        transferFundsInterface.getTransferButton().
        should('have.text', expectedMessage)
    }
)
Cypress.Commands.add('paraBankCheckTransferFundError', 
    (expectedMessage: string) => { 
        transferFundsInterface.getTransferFundsError().
        should('have.text', expectedMessage)
    }
)


