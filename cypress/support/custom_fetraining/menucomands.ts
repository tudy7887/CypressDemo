import { MenuInterface } from "../../fetraining/interfaces/menuinterface"

export function injectFeTrainingMenuInterface(object: MenuInterface): void {
    menuInterface = object
}

var menuInterface: MenuInterface
declare global {
    namespace Cypress {
        interface Chainable{
            feTrainingClickLogoutButton(): Chainable<any>
            feTrainingClickTrainingButton(): Chainable<any>
            feTrainingClickEmailButton(): Chainable<any>
            feTrainingCheckEmailButton(email: string): Chainable<any>
            feTrainingClickDashboardButton(): Chainable<any>
            feTrainingCheckAppVisible(): Chainable<any>
            feTrainingCheckAppNotVisible(): Chainable<any>
        }
    }
}

Cypress.Commands.add('feTrainingCheckAppVisible', 
    () => { 
        menuInterface.getLogoutButton().
        should('be.visible')
        menuInterface.getTrainingButton().
        should('be.visible')
        menuInterface.getDashboardButton().
        should('be.visible')
        menuInterface.getEmailButton().
        should('be.visible')
    }
)
Cypress.Commands.add('feTrainingCheckAppNotVisible', 
    () => { 
        menuInterface.getLogoutButton().
        should('not.exist')
        menuInterface.getTrainingButton().
        should('not.exist')
        menuInterface.getDashboardButton().
        should('not.exist')
        menuInterface.getEmailButton().
        should('not.exist')
    }
)
Cypress.Commands.add('feTrainingClickLogoutButton', 
    () => { 
        menuInterface.getLogoutButton().
        click() 
    }
)
Cypress.Commands.add('feTrainingClickTrainingButton', 
    () => {
        menuInterface.getTrainingButton().
        click() 
    }
)
Cypress.Commands.add('feTrainingClickEmailButton', 
    () => { 
        menuInterface.getEmailButton().
        click() 
    }
)
Cypress.Commands.add('feTrainingClickDashboardButton', 
    () => { 
        menuInterface.getDashboardButton().
        click() 
    }
)
Cypress.Commands.add('feTrainingCheckEmailButton', 
    (email: string) => { 
        menuInterface.getEmailButton().
        should('have.text', email) 
    }
)


