import { FeTrainingActualData } from '../../actualdata/fetrainingactualdata';
import { DashBoard } from "../../fetraining/pom/dashboard"
import { Login } from "../../fetraining/pom/login"
import { Menu } from "../../fetraining/pom/menu"
import { injectFeTrainingDashBoardInterface } from "../../support/custom_fetraining/dashboardcomands"
import { injectFeTrainingLoginInterface } from "../../support/custom_fetraining/logincomands"
import { injectFeTrainingMenuInterface } from "../../support/custom_fetraining/menucomands"
import { getDifferenceBetweenDates, newDate, setcurrentMonthYearText, today } from "../../util/helpers"

var feTrainingActualData = new FeTrainingActualData()
var datesList = [newDate(2023, 3, 25), newDate(2023, 11, 2), newDate(2025, 11, 15), newDate(2025, 6, 6)]
var loginInterface = new Login()
var menuInterface = new Menu()
var dashBoardInterface = new DashBoard()
var authenticate = () => {
  cy.session('FeTrainingLogin', () => {
    cy.visit('/login').
      feTrainingEnterLoginData(feTrainingActualData.getUsername(), feTrainingActualData.getPassword()).
      feTrainingClickLoginButton().
      feTrainingCheckEmailButton(feTrainingActualData.getUsername()).
      log('User logged in and session saved.')
  })
}
var gotodate = (date: Date) => {
  var difference = getDifferenceBetweenDates(feTrainingActualData.getCurrentDate(), date)
  var currentMonthYearText = setcurrentMonthYearText(date)
  if (difference < 0) {
    difference = Math.abs(difference)
    cy.feTrainingClickPreviousButton(difference).
      feTrainingCheckMonthYearText(currentMonthYearText)
  }
  else if (difference > 0) {
    cy.feTrainingClickForwardButton(difference).
      feTrainingCheckMonthYearText(currentMonthYearText)
  }
  feTrainingActualData.setCurrentDate(date)
}

before(() => {
  // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  Cypress.config('baseUrl', Cypress.env('feTrainingBaseUrl'))
  injectFeTrainingDashBoardInterface(dashBoardInterface)
  injectFeTrainingLoginInterface(loginInterface)
  injectFeTrainingMenuInterface(menuInterface)
})

after(() => {
  Cypress.session.clearAllSavedSessions()
})

beforeEach('User LogIn', () => {
  authenticate()
})

describe('DashBoard Page Tests:', () => {
  it('Togle Calendar Off', () => {
    cy.visit('/dashboard').
      feTrainingToggleCalendarCheckBox(false).
      feTrainingCheckCalendarNotVisible()
  })

  it('Togle Calendar On', () => {
    cy.visit('/dashboard').
      feTrainingToggleCalendarCheckBox(true).
      feTrainingCheckCalendarVisible()
  })

  it('Togle Weekends Off', () => {
    cy.visit('/dashboard').
      feTrainingToggleCalendarCheckBox(true).
      feTrainingToggleWeekendsCheckBox(false).
      feTrainingCheckWeeksColumnVisible().
      feTrainingCheckWeekendsColumnNotVisible()
  })

  it('Togle Weekends On', () => {
    cy.visit('/dashboard').
      feTrainingToggleCalendarCheckBox(true).
      feTrainingToggleWeekendsCheckBox(true).
      feTrainingCheckWeeksColumnVisible().
      feTrainingCheckWeekendsColumnVisible()
  })

  it('Today Month Year Text', () => {
    cy.visit('/dashboard').
      feTrainingToggleCalendarCheckBox(true).
      feTrainingToggleWeekendsCheckBox(true).
      feTrainingClickTodayButton().
      feTrainingCheckMonthYearText(feTrainingActualData.getCurrentMonthYearText())
  })

  it('Navigate To Multiple Dates', () => {
    cy.visit('/dashboard').
      feTrainingToggleCalendarCheckBox(true).
      feTrainingToggleWeekendsCheckBox(true).
      feTrainingClickTodayButton()
    datesList.forEach(function (date) {
      gotodate(date)
    })
    feTrainingActualData.setCurrentDate(today())
  })

  it('Create An Event Today', () => {
    cy.visit('/dashboard')
    var eventTitle = 'Event Example'
    cy.feTrainingToggleCalendarCheckBox(true).
      feTrainingToggleWeekendsCheckBox(true).
      feTrainingClickTodayButton().
      feTrainingClickCellCalendar(feTrainingActualData.getCurrentDate()).
      feTrainingCheckAddEventPopupVisible().
      feTrainingEnterEventTitle(eventTitle).
      feTrainingClickCreateEventButton().
      feTrainingCheckCalendarEventTitle(feTrainingActualData.getCurrentDate(), 0, eventTitle).
      feTrainingClickCalendarEventObject(feTrainingActualData.getCurrentDate(), 0).
      feTrainingCheckEventDetails(eventTitle, feTrainingActualData.getCurrentDate()).
      feTrainingClickDeleteEventButton()
  })

  it('Move An Event Tomorrow', () => {
    cy.visit('/dashboard')
    var eventTitle = 'Event Example'
    var tomorrow: Date = new Date(feTrainingActualData.getCurrentDate())
    tomorrow.setDate(tomorrow.getDate() + 1)
    cy.feTrainingToggleWeekendsCheckBox(true).
      feTrainingClickTodayButton().
      feTrainingClickCellCalendar(feTrainingActualData.getCurrentDate()).
      feTrainingCheckAddEventPopupVisible().
      feTrainingEnterEventTitle(eventTitle).
      feTrainingClickCreateEventButton().
      feTrainingCheckCalendarEventTitle(feTrainingActualData.getCurrentDate(), 0, eventTitle).
      feTrainingClickCalendarEventObject(feTrainingActualData.getCurrentDate(), 0).
      feTrainingCheckEventDetails(eventTitle, feTrainingActualData.getCurrentDate()).
      feTrainingClickCancelEventDisplayButton().
      feTrainingMoveCalendarEventObject(0, feTrainingActualData.getCurrentDate(), tomorrow).
      feTrainingCheckCalendarEventTitle(tomorrow, 0, eventTitle).
      feTrainingClickCalendarEventObject(tomorrow, 0).
      feTrainingCheckEventDetails(eventTitle, feTrainingActualData.getCurrentDate()).
      feTrainingClickDeleteEventButton()
  })

})