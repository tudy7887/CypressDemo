import { WelcomeInterface } from "../interface/welcomeinterface"

export class Welcome implements WelcomeInterface {
    // Elements
    private welcomeMessageText = '#rightPanel > h1'

    // Implementation
    getWelcomeMessageText(): Cypress.Chainable<any> {
        return cy.get(this.welcomeMessageText)
    }
    getWelcomeExpectedMessage(username: string): string{
        return `Welcome ${username}`
    }
}