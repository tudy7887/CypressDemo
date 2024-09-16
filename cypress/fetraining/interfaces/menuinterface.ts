export interface MenuInterface {
    getLogoutButton(): Cypress.Chainable<any>
    getTrainingButton(): Cypress.Chainable<any>
    getDashboardButton(): Cypress.Chainable<any>
    getEmailButton(): Cypress.Chainable<any>
}