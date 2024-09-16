import { WelcomeInterface } from "../../parabank/interface/welcomeinterface"

export function injectParaBankWelcomeInterface(object: WelcomeInterface): void {
    welcomeInterface = object
}

var welcomeInterface: WelcomeInterface
declare global {
    namespace Cypress {
        interface Chainable{
            paraBankCheckWelcomeMessageText(username: string): Chainable<any>
        }
    }
}

Cypress.Commands.add('paraBankCheckWelcomeMessageText', 
    (username: string) => { 
        welcomeInterface.getWelcomeMessageText().
        should('have.text', welcomeInterface.getWelcomeExpectedMessage(username))
    }
)


