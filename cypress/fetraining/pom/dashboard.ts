import { DashBoardInterface } from "../interfaces/dashboardinterface"

export class DashBoard implements DashBoardInterface {
    // Elements
    private monthYearText = '#fc-dom-1'
    private addEventPopup = '#createEvent > div > div'
    private eventObject = '.fc-event-main'
    private moreEventsLink = '.fc-more-link'
    private cancelEventDisplayButton = '#viewCancelEventButton'
    private deleteEventButton = '#viewDeleteEventButton'
    private eventDetailsTitle = '#viewEventTitle'
    private eventDetailsStartDate = '#viewEventStartDate'
    private eventDetailsEndDate = '#viewEventEndDate'
    private eventDisplayPopup = '.fc-popover-body'
    private calendar = 'full-calendar'
    private eventTitle = '#eventTitle'
    private createEventButton = '#createEventButton'
    private cancelEventButton = '#createEvent > div > div > form > button:nth-child(3)'
    private mondayColumn = '[aria-label="Monday"]'
    private tuesdayColumn = '[aria-label="Tuesday"]'
    private wednesdayColumn = '[aria-label="Wednesday"]'
    private thursdayColumn = '[aria-label="Thursday"]'
    private fridayColumn = '[aria-label="Friday"]'
    private saturdayColumn = '[aria-label="Saturday"]'
    private sundayColumn = '[aria-label="Sunday"]'
    private previousButton = '[title^="Previous"]'
    private forwardButton = '[title^="Next"]'
    private todayButton = '[title^="This"]'
    private monthButton = '[title="month view"]'
    private weekButton = '[title="week view"]'
    private dayButton = '[title="day view"]'
    private listButton = '[title="list view"]'
    private toggleCalendarCheckBox = 'div:nth-child(2) > label > input[type=checkbox]'
    private toggleWeekendsCheckBox = 'div:nth-child(3) > label > input[type=checkbox]'

    // Implementation
    getCalendarEventObject(date: string, index:number): Cypress.Chainable<any> {
        return cy.get(`[data-date="${date}"] ${this.eventObject}`).eq(index)
    }
    getPopupEventObject(index:number): Cypress.Chainable<any> {
        return cy.get(`${this.eventDisplayPopup} ${this.eventObject}`).eq(index)
    }
    getMoreEventsLink(date: string): Cypress.Chainable<any> {
        return cy.get(`[data-date="${date}"] ${this.moreEventsLink}`)
    }
    getEventDetailsTitle(): Cypress.Chainable<any> {
        return cy.get(this.eventDetailsTitle)
    }
    getEventDetailsStartDate(): Cypress.Chainable<any> {
        return cy.get(this.eventDetailsStartDate)
    }
    getEventDetailsEndDate(): Cypress.Chainable<any> {
        return cy.get(this.eventDetailsEndDate)
    }
    getDeleteEventButton(): Cypress.Chainable<any> {
        return cy.get(this.deleteEventButton)
    }
    getCancelEventDisplayButton(): Cypress.Chainable<any> {
        return cy.get(this.cancelEventDisplayButton)
    }
    getCalendar(): Cypress.Chainable<any> {
        return cy.get(this.calendar)
    }
    getMonthYearText(): Cypress.Chainable<any> {
        return cy.get(this.monthYearText)
    }
    getDateCell(date: string): Cypress.Chainable<any>{
        return cy.get('[data-date="' + date + '"]')
    }
    getAddEventPopup(): Cypress.Chainable<any> {
        return cy.get(this.addEventPopup)
    }
    getEventTitle(): Cypress.Chainable<any> {
        return cy.get(this.eventTitle)
    }
    getCreateEventButton(): Cypress.Chainable<any> {
        return cy.get(this.createEventButton)
    }
    getCancelEventButton(): Cypress.Chainable<any> {
        return cy.get(this.cancelEventButton)
    }
    getMondayColumn(): Cypress.Chainable<any> {
        return cy.get(this.mondayColumn)
    }
    getTuesdayColumn(): Cypress.Chainable<any> {
        return cy.get(this.tuesdayColumn)
    }
    getWednesdayColumn(): Cypress.Chainable<any> {
        return cy.get(this.wednesdayColumn)
    }
    getThursdayColumn(): Cypress.Chainable<any> {
        return cy.get(this.thursdayColumn)
    }
    getFridayColumn(): Cypress.Chainable<any> {
        return cy.get(this.fridayColumn)
    }
    getSaturdayColumn(): Cypress.Chainable<any> {
        return cy.get(this.saturdayColumn)
    }
    getSundayColumn(): Cypress.Chainable<any> {
        return cy.get(this.sundayColumn)
    }
    getPreviousButton(): Cypress.Chainable<any> {
        return cy.get(this.previousButton)
    }
    getForwardButton(): Cypress.Chainable<any> {
        return cy.get(this.forwardButton)
    }
    getTodayButton(): Cypress.Chainable<any> {
        return cy.get(this.todayButton)
    }
    getMonthButton(): Cypress.Chainable<any> {
        return cy.get(this.monthButton)
    }
    getWeekButton(): Cypress.Chainable<any> {
        return cy.get(this.weekButton)
    }
    getDayButton(): Cypress.Chainable<any> {
        return cy.get(this.dayButton)
    }
    getListButton(): Cypress.Chainable<any> {
        return cy.get(this.listButton)
    }
    getToggleCalendarCheckBox(): Cypress.Chainable<any> {
        return cy.get(this.toggleCalendarCheckBox)
    }
    getToggleWeekendsCheckBox(): Cypress.Chainable<any> {
        return cy.get(this.toggleWeekendsCheckBox)
    }
}