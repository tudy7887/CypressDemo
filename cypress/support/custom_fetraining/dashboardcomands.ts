import { DashBoardInterface } from "../../fetraining/interfaces/dashboardinterface"
import { feTrainingDateToString } from "../../util/helpers"

export function injectFeTrainingDashBoardInterface(object: DashBoardInterface): void {
    dashBoardInterface = object
}

var dashBoardInterface: DashBoardInterface
declare global {
    namespace Cypress {
        interface Chainable{
            feTrainingToggleWeekendsCheckBox(state: boolean): Chainable<any>
            feTrainingToggleCalendarCheckBox(state: boolean): Chainable<any>
            feTrainingEnterEventTitle(title: string): Chainable<any>
            feTrainingClickListButton(): Chainable<any>
            feTrainingClickDayButton(): Chainable<any>
            feTrainingClickWeekButton(): Chainable<any>
            feTrainingClickMonthButton(): Chainable<any>
            feTrainingClickTodayButton(): Chainable<any>
            feTrainingClickDeleteEventButton(): Chainable<any>
            feTrainingClickCreateEventButton(): Chainable<any>
            feTrainingClickCancelEventButton(): Chainable<any>
            feTrainingClickCellCalendar(date: Date): Chainable<any>
            feTrainingClickPreviousButton(times: number): Chainable<any>
            feTrainingClickForwardButton(times: number): Chainable<any>
            feTrainingClickCancelEventDisplayButton(): Chainable<any>
            feTrainingClickMoreEventsLink(date: Date): Chainable<any>
            feTrainingClickCalendarEventObject(date: Date, index: number): Chainable<any>
            feTrainingClickPopupEventObject(index: number): Chainable<any>
            feTrainingGetMonthYearText(): string
            feTrainingCheckMonthYearText(expectedMonthYearText: string): Chainable<any>
            feTrainingCheckWeeksColumnVisible(): Chainable<any>
            feTrainingCheckWeeksColumnNotVisible(): Chainable<any>
            feTrainingCheckWeekendsColumnVisible(): Chainable<any>
            feTrainingCheckWeekendsColumnNotVisible(): Chainable<any>
            feTrainingCheckCalendarVisible(): Chainable<any>
            feTrainingCheckCalendarNotVisible(): Chainable<any>
            feTrainingCheckAddEventPopupVisible(): Chainable<any>
            feTrainingCheckAddEventPopupNotVisible(): Chainable<any>
            feTrainingCheckCalendarEventTitle(date: Date, index:number, expectedTitle: string): Chainable<any>
            feTrainingCheckPopupEventTitle(index:number, expectedTitle: string): Chainable<any>
            feTrainingCheckEventDetails(expectedTitle: string, expectedStartDate:Date): Chainable<any>
            feTrainingMoveCalendarEventObject(index: number, dateFrom: Date, dateTo: Date): Chainable<any>
            feTrainingMovePopupEventObject(index:number, dateTo: Date): Chainable<any>
            feTrainingCheckCalendarEventNotVisible(date: Date, index:number): Chainable<any>
        }
    }
}

Cypress.Commands.add('feTrainingToggleWeekendsCheckBox', 
    (state: boolean) => { 
        if(state){
            dashBoardInterface.getToggleWeekendsCheckBox().
            check()
        }
        else{
            dashBoardInterface.getToggleWeekendsCheckBox().
            uncheck()
        }
    }
)
Cypress.Commands.add('feTrainingToggleCalendarCheckBox', 
    (state: boolean) => { 
        if(state){
            dashBoardInterface.getToggleCalendarCheckBox().
            check()
        }
        else{
            dashBoardInterface.getToggleCalendarCheckBox().
            uncheck()
        }
    }
)
Cypress.Commands.add('feTrainingEnterEventTitle', 
    (title: string) => { 
        dashBoardInterface.getEventTitle().
        clear()
        if(title != ''){
            dashBoardInterface.getEventTitle().
            type(title)
        }
    }
)
Cypress.Commands.add('feTrainingClickListButton', 
    () => { 
        dashBoardInterface.getListButton().
        click()
    }
)
Cypress.Commands.add('feTrainingClickDayButton', 
    () => { 
        dashBoardInterface.getDayButton().
        click()
    }
)
Cypress.Commands.add('feTrainingClickWeekButton', 
    () => { 
        dashBoardInterface.getWeekButton().
        click()
    }
)
Cypress.Commands.add('feTrainingClickMonthButton', 
    () => { 
        dashBoardInterface.getMonthButton().
        click()
    }
)
Cypress.Commands.add('feTrainingClickTodayButton', 
    () => { 
        dashBoardInterface.getTodayButton().
        click({force: true})
    }
)
Cypress.Commands.add('feTrainingClickDeleteEventButton', 
    () => { 
        dashBoardInterface.getDeleteEventButton().
        click()
    }
)
Cypress.Commands.add('feTrainingClickCreateEventButton', 
    () => { 
        dashBoardInterface.getCreateEventButton().
        click()
    }
)
Cypress.Commands.add('feTrainingClickCancelEventButton', 
    () => { 
        dashBoardInterface.getCancelEventButton().
        click()
    }
)
Cypress.Commands.add('feTrainingClickCellCalendar', 
    (date: Date) => { 
        dashBoardInterface.getDateCell(feTrainingDateToString(date)).
        click()
    }
)
Cypress.Commands.add('feTrainingClickPreviousButton', 
    (times: number) => {
        for(var i = 0; i < times; i++){
            dashBoardInterface.getPreviousButton().
            click()
        }    
    }
)
Cypress.Commands.add('feTrainingClickForwardButton', 
    (times: number) => {
        for(var i = 0; i < times; i++){
            dashBoardInterface.getForwardButton().
            click()
        }    
    }
)
Cypress.Commands.add('feTrainingClickCancelEventDisplayButton', 
    () => { 
        dashBoardInterface.getCancelEventDisplayButton().
        click()
    }
)
Cypress.Commands.add('feTrainingGetMonthYearText', 
    () => { 
        dashBoardInterface.getMonthYearText().
        invoke('text').
        then( text => {
            return text
        })
    }
)
Cypress.Commands.add('feTrainingCheckMonthYearText', 
    (expectedMonthYearText: string) => {
        dashBoardInterface.getMonthYearText().
        should('have.text', expectedMonthYearText) 
    }
)
Cypress.Commands.add('feTrainingCheckWeeksColumnVisible', 
    () => { 
        dashBoardInterface.getMondayColumn().
        should('be.visible')
        dashBoardInterface.getTuesdayColumn().
        should('be.visible')
        dashBoardInterface.getWednesdayColumn().
        should('be.visible')
        dashBoardInterface.getThursdayColumn().
        should('be.visible')
        dashBoardInterface.getFridayColumn().
        should('be.visible')
    }
)
Cypress.Commands.add('feTrainingCheckWeeksColumnNotVisible', 
    () => {
        dashBoardInterface.getMondayColumn().
        should('not.exist')
        dashBoardInterface.getTuesdayColumn().
        should('not.exist')
        dashBoardInterface.getWednesdayColumn().
        should('not.exist')
        dashBoardInterface.getThursdayColumn().
        should('not.exist')
        dashBoardInterface.getFridayColumn().
        should('not.exist')
    }
)
Cypress.Commands.add('feTrainingCheckWeekendsColumnVisible', 
    () => { 
        dashBoardInterface.getSaturdayColumn().
        should('be.visible')
        dashBoardInterface.getSundayColumn().
        should('be.visible')
    }
)
Cypress.Commands.add('feTrainingCheckWeekendsColumnNotVisible', 
    () => {
        dashBoardInterface.getSaturdayColumn().
        should('not.exist')
        dashBoardInterface.getSundayColumn().
        should('not.exist')
    }
)
Cypress.Commands.add('feTrainingCheckCalendarVisible', 
    () => { 
        dashBoardInterface.getCalendar().
        should('be.visible')
    }
)
Cypress.Commands.add('feTrainingCheckCalendarNotVisible', 
    () => {
        dashBoardInterface.getCalendar().
        should('not.exist')
    }
)
Cypress.Commands.add('feTrainingCheckAddEventPopupVisible', 
    () => { 
        dashBoardInterface.getAddEventPopup().
        should('be.visible')
    }
)
Cypress.Commands.add('feTrainingCheckAddEventPopupNotVisible', 
    () => {
        dashBoardInterface.getAddEventPopup().
        should('not.exist')
    }
)
Cypress.Commands.add('feTrainingCheckCalendarEventTitle', 
    (date: Date, index: number, expectedTitle: string) => {
        dashBoardInterface.getCalendarEventObject(feTrainingDateToString(date), index).
        should('have.text', expectedTitle)
    }
)
Cypress.Commands.add('feTrainingCheckPopupEventTitle', 
    (index:number, expectedTitle: string) => {
        dashBoardInterface.getPopupEventObject(index).
        should('have.text', expectedTitle)

    }
)
Cypress.Commands.add('feTrainingCheckEventDetails', 
    (expectedTitle: string, expectedStartDate:Date) => {
        dashBoardInterface.getEventDetailsTitle().
        should('have.text', expectedTitle)
        dashBoardInterface.getEventDetailsStartDate().
        should('have.text', feTrainingDateToString(expectedStartDate))
    }
)
Cypress.Commands.add('feTrainingClickMoreEventsLink', 
    (date: Date) => {
        dashBoardInterface.getMoreEventsLink(feTrainingDateToString(date)).
        click()
    }
)
Cypress.Commands.add('feTrainingClickCalendarEventObject', 
    (date: Date, index: number) => {
        dashBoardInterface.getCalendarEventObject(feTrainingDateToString(date), index).
        click()   
    }
)
Cypress.Commands.add('feTrainingClickPopupEventObject', 
    (index: number) => {
        dashBoardInterface.getPopupEventObject(index).
        click()   
    }
)
Cypress.Commands.add('feTrainingMoveCalendarEventObject', 
    (index: number, dateFrom: Date, dateTo: Date) => { 
        dashBoardInterface.getCalendarEventObject(feTrainingDateToString(dateFrom), index).
        realMouseDown({button: 'left', position: 'center'}).
        realMouseMove(0, 10, { position: 'center' }).
        then(() =>{
            dashBoardInterface.getDateCell(feTrainingDateToString(dateTo)).
            realMouseMove(0, 0, { position: 'center' }).
            realMouseUp()
        }).
        wait(500)
    }
)
Cypress.Commands.add('feTrainingMovePopupEventObject', 
    (index: number, dateTo: Date) => { 
        dashBoardInterface.getPopupEventObject(index).
        realMouseDown({button: 'left', position: 'center'}).
        realMouseMove(0, 10, { position: 'center' }).
        then(() =>{
            dashBoardInterface.getDateCell(feTrainingDateToString(dateTo)).
            realMouseMove(0, 0, { position: 'top' }).
            realMouseUp()
        }).
        wait(500)
    }
)
Cypress.Commands.add('feTrainingCheckCalendarEventNotVisible', 
    (date: Date, index: number) => {
        dashBoardInterface.getCalendarEventObject(feTrainingDateToString(date), index).
        should('not.exist')
    }
)

