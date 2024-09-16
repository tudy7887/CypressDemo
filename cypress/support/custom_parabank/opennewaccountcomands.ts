import { OpenNewAccountInterface } from "../../parabank/interface/opennewaccountinterface"
import { ParaBankAccountType } from "../../util/helpers"

export function injectParaBankOpenNewAccountInterface(object: OpenNewAccountInterface): void {
    openNewAccountInterface = object
}

var openNewAccountInterface: OpenNewAccountInterface
declare global {
    namespace Cypress {
        interface Chainable{
            paraBankClickNewAccount(): Chainable<any>
            paraBankOpenNewAccount(account: string, type: ParaBankAccountType): Chainable<any>
            paraBankGetNewAccountText(): Chainable<string>
            paraBankCheckNewAccountTextVisible(): Chainable<any>
        }
    }
}

Cypress.Commands.add('paraBankClickNewAccount', 
    () => { 
        openNewAccountInterface.getNewAccountText().
        click()
    }
)
Cypress.Commands.add('paraBankOpenNewAccount', 
    (account: string, type: ParaBankAccountType) => { 
        openNewAccountInterface.getTypeCombobox().
        select(type).
        then(() => {
            openNewAccountInterface.getAccountCombobox().should('have.value', account).
            select(account).
            then(() => {
                openNewAccountInterface.getCreateNewAccountButton().
                click()
            })
        })
    }
)
Cypress.Commands.add('paraBankGetNewAccountText', 
    () => { 
        return openNewAccountInterface.getNewAccountText().
        invoke('text')
    }
)
Cypress.Commands.add('paraBankCheckNewAccountTextVisible', 
    () => { 
        openNewAccountInterface.getNewAccountText().
        should('be.visible')
    }
)