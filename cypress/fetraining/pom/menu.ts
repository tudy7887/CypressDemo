import { MenuInterface } from "../interfaces/menuinterface"

export class Menu implements MenuInterface {
    // Elements
    private logoutButton = '.logout'
    private trainingButton = '.trainings'
    private dashboardButton = '.dashboard'
    private emailButton = '#userNameDisplay'

    // Implementation
    getLogoutButton(): Cypress.Chainable<any> {
        return cy.get(this.logoutButton)
    }
    getTrainingButton(): Cypress.Chainable<any> {
        return cy.get(this.trainingButton)
    }
    getDashboardButton(): Cypress.Chainable<any> {
        return cy.get(this.dashboardButton)
    }
    getEmailButton(): Cypress.Chainable<any> {
        return cy.get(this.emailButton)
    }
}