export interface WelcomeInterface {
    getWelcomeMessageText(): Cypress.Chainable<any>
    getWelcomeExpectedMessage(username: string): string
}