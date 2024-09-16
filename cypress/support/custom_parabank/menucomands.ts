import { MenuInterface } from "../../parabank/interface/menuinterface"

export function injectFeTrainingMenuInterface(object: MenuInterface): void {
    menuInterface = object
}

var menuInterface: MenuInterface
declare global {
    namespace Cypress {
        interface Chainable{
            paraBankClickOpenNewAccountMenu(): Chainable<any>
            paraBankClickAccountOverviewMenu(): Chainable<any>
            paraBankClickTransferFundsMenu(): Chainable<any>
            paraBankClickBillPayMenu(): Chainable<any>
            paraBankClickFindTransactionsMenu(): Chainable<any>
            paraBankClickUpdateContractInfoMenu(): Chainable<any>
            paraBankClickRequestLoanMenu(): Chainable<any>
            paraBankClickLogOutMenu(): Chainable<any>
        }
    }
}

Cypress.Commands.add('paraBankClickOpenNewAccountMenu', 
    () => { 
        menuInterface.getOpenNewAccountMenu().
        click()
    }
)
Cypress.Commands.add('paraBankClickAccountOverviewMenu', 
    () => { 
        menuInterface.getAccountOverviewMenu().
        click()
    }
)
Cypress.Commands.add('paraBankClickTransferFundsMenu', 
    () => { 
        menuInterface.getTransferFundsMenu().
        click()
    }
)
Cypress.Commands.add('paraBankClickBillPayMenu', 
    () => { 
        menuInterface.getBillPayMenu().
        click()
    }
)
Cypress.Commands.add('paraBankClickFindTransactionsMenu', 
    () => { 
        menuInterface.getFindTransactionsMenu().
        click()
    }
)
Cypress.Commands.add('paraBankClickUpdateContractInfoMenu', 
    () => { 
        menuInterface.getUpdateContractInfoMenu().
        click()
    }
)
Cypress.Commands.add('paraBankClickRequestLoanMenu', 
    () => { 
        menuInterface.getRequestLoanMenu().
        click()
    }
)
Cypress.Commands.add('paraBankClickLogOutMenu', 
    () => { 
        menuInterface.getLogOutMenu().
        click()
    }
)


