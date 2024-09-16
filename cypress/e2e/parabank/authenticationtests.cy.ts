import { ParaBankActualData } from "../../actualdata/parabankactualdata"
import { AccountsOverview } from "../../parabank/pom/accountsoverview"
import { Login } from "../../parabank/pom/login"
import { Menu } from "../../parabank/pom/menu"
import { Register } from "../../parabank/pom/register"
import { Welcome } from "../../parabank/pom/welcome"
import { injectParaBankAccountsOverviewInterface } from "../../support/custom_parabank/accountsoverwiewcomands"
import { injectParaBankLoginInterface } from "../../support/custom_parabank/logincomands"
import { injectFeTrainingMenuInterface } from "../../support/custom_parabank/menucomands"
import { injectParaBankRegisterInterface } from "../../support/custom_parabank/registercomands"
import { injectParaBankWelcomeInterface } from "../../support/custom_parabank/welcomecomands"
import { displayCashInParabankFormat } from "../../util/helpers"

var paraBankActualData = new ParaBankActualData()
var loginInterface = new Login()
var registerInterface = new Register()
var welcomeInterface = new Welcome()
var menuInterface = new Menu()
var accountsOverviewInterface = new AccountsOverview()
var register = () => {
  cy.visit('/register.htm').
  paraBankEnterRegisterData(paraBankActualData.getUser()).
  paraBankClickRegisterButton().
  paraBankCheckWelcomeMessageText(paraBankActualData.getUser().username).
  paraBankClickLogOutMenu()
}

before(() => {
  // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  Cypress.config('baseUrl', Cypress.env('paraBankBaseUrl'))
  injectParaBankRegisterInterface(registerInterface)
  injectParaBankLoginInterface(loginInterface)
  injectParaBankWelcomeInterface(welcomeInterface)
  injectFeTrainingMenuInterface(menuInterface)
  injectParaBankAccountsOverviewInterface(accountsOverviewInterface)
  paraBankActualData.generateNewUser()
  register()
})

describe('Login Page Tests', () => {
  it('Check No Login Data Error', () => {
    cy.visit('/index.htm').
    paraBankEnterLoginData('', '').
    paraBankClickLoginButton().
    paraBankCheckLoginError(paraBankActualData.getErrorNoLoginData())
  })

  it('Check No Username Error', () => {
    cy.visit('/index.htm').
    paraBankEnterLoginData('', 'asdasd').
    paraBankClickLoginButton().
    paraBankCheckLoginError(paraBankActualData.getErrorNoLoginData())
  })

  it('Check No Password Error', () => {
    cy.visit('/index.htm').
    paraBankEnterLoginData('asdasdas', '').
    paraBankClickLoginButton().
    paraBankCheckLoginError(paraBankActualData.getErrorNoLoginData())
  })
  
  it('Check Wrong Login Data Error', () => {
    cy.visit('/index.htm').
    paraBankEnterLoginData('sdfsdf', 'sfdsdfs').
    paraBankClickLoginButton().
    paraBankCheckLoginError(paraBankActualData.getErrorWrongLoginData())
  })

  it('Check Successfull Login', () => {
    cy.visit('/index.htm').
    paraBankEnterLoginData(paraBankActualData.getUser().username, paraBankActualData.getUser().password).
    paraBankClickLoginButton().
    paraBankCheckAccountsTotal(displayCashInParabankFormat(paraBankActualData.getTotalCash()))
  })

  it('Check Successfull Logout', () => {
    cy.visit('/index.htm').
    paraBankEnterLoginData(paraBankActualData.getUser().username, paraBankActualData.getUser().password).
    paraBankClickLoginButton().
    paraBankCheckAccountsTotal(displayCashInParabankFormat(paraBankActualData.getTotalCash())).
    paraBankClickLogOutMenu().
    paraBankCheckCustomerLoginText()
  })
})