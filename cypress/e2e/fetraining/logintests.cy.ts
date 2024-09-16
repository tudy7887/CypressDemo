import { FeTrainingActualData } from "../../actualdata/fetrainingactualdata"
import { Login } from "../../fetraining/pom/login"
import { Menu } from "../../fetraining/pom/menu"
import { injectFeTrainingLoginInterface } from "../../support/custom_fetraining/logincomands"
import { injectFeTrainingMenuInterface } from "../../support/custom_fetraining/menucomands"

var feTrainingActualData = new FeTrainingActualData()
var loginInterface = new Login()
var menuInterface = new Menu()

before(() => {
  // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  Cypress.config('baseUrl', Cypress.env('feTrainingBaseUrl'))
  injectFeTrainingLoginInterface(loginInterface)
  injectFeTrainingMenuInterface(menuInterface)
})

describe('Login Page Tests:', () => {
  it('Check Email Requiered And Password Requiered Error', () => {
    cy.visit('/login').
    feTrainingEnterLoginData('', 'asdasd').
    feTrainingClickLoginButton(true).
    feTrainingCheckEmailRequiredError(feTrainingActualData.getErrorEmailRequiered(), feTrainingActualData.getErrorTextColor())
  })

  it('Check Password Requiered Error', () => {
    cy.visit('/login').
    feTrainingEnterLoginData('sdasd', '').
    feTrainingClickLoginButton(true).
    feTrainingCheckPasswordRequiredError(feTrainingActualData.getErrorPasswordRequiered(), feTrainingActualData.getErrorTextColor())
  })

  it('Check Email Requiered and Password Requiered Error', () => {
    cy.visit('/login').
    feTrainingEnterLoginData('', '').
    feTrainingClickLoginButton(true).
    feTrainingCheckEmailRequiredError(feTrainingActualData.getErrorEmailRequiered(), feTrainingActualData.getErrorTextColor()).
    feTrainingCheckPasswordRequiredError(feTrainingActualData.getErrorPasswordRequiered(), feTrainingActualData.getErrorTextColor())
  })

  it('Check Email Requiered, Password Requiered and Access Forbiden Error Not Displayed', () => {
    cy.visit('/login').
    feTrainingEnterLoginData('sdsdfsdf', 'sdfsdfssd').
    feTrainingCheckEmailRequiredErrorNotVisible().
    feTrainingCheckPasswordRequiredErrorNotVisible().
    feTrainingCheckForbidenAccessErrorNotVisible()
  })

  it('Check Access Forbiden Error', () => {
    cy.visit('/login').
    feTrainingEnterLoginData('sdasd', 'asdasd').
    feTrainingClickLoginButton().
    feTrainingCheckForbidenAccessError(feTrainingActualData.getErrorAccessForbidden(), feTrainingActualData.getErrorTextColor())
  })

  it('Check Successful Login', () => {
    cy.visit('/login').
    feTrainingEnterLoginData(feTrainingActualData.getUsername(), feTrainingActualData.getPassword()).
    feTrainingClickLoginButton().
    feTrainingCheckEmailButton(feTrainingActualData.getUsername())
  })

})
