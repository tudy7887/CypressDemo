export interface DashBoardInterface {
    getMonthYearText(): Cypress.Chainable<any>
    getDateCell(date: string): Cypress.Chainable<any>
    getAddEventPopup(): Cypress.Chainable<any>
    getEventTitle(): Cypress.Chainable<any>
    getCreateEventButton(): Cypress.Chainable<any>
    getCancelEventButton(): Cypress.Chainable<any>
    getMondayColumn(): Cypress.Chainable<any>
    getTuesdayColumn(): Cypress.Chainable<any>
    getWednesdayColumn(): Cypress.Chainable<any>
    getThursdayColumn(): Cypress.Chainable<any>
    getFridayColumn(): Cypress.Chainable<any>
    getSaturdayColumn(): Cypress.Chainable<any>
    getSundayColumn(): Cypress.Chainable<any>
    getPreviousButton(): Cypress.Chainable<any>
    getForwardButton(): Cypress.Chainable<any>
    getTodayButton(): Cypress.Chainable<any>
    getMonthButton(): Cypress.Chainable<any>
    getWeekButton(): Cypress.Chainable<any>
    getDayButton(): Cypress.Chainable<any>
    getListButton(): Cypress.Chainable<any>
    getToggleCalendarCheckBox(): Cypress.Chainable<any>
    getToggleWeekendsCheckBox(): Cypress.Chainable<any>
    getCalendar(): Cypress.Chainable<any>
    getCancelEventDisplayButton(): Cypress.Chainable<any>
    getDeleteEventButton(): Cypress.Chainable<any>
    getPopupEventObject(index:number): Cypress.Chainable<any>
    getCalendarEventObject(date: string, index:number): Cypress.Chainable<any>
    getMoreEventsLink(date: string): Cypress.Chainable<any>
    getEventDetailsStartDate(): Cypress.Chainable<any>
    getEventDetailsEndDate(): Cypress.Chainable<any>
    getEventDetailsTitle(): Cypress.Chainable<any>
}