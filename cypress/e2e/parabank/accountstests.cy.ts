import { ParaBankActualData } from "../../actualdata/parabankactualdata"
import { AccountsDetail } from "../../parabank/pom/accountsdetail"
import { AccountsOverview } from "../../parabank/pom/accountsoverview"
import { Login } from "../../parabank/pom/login"
import { Menu } from "../../parabank/pom/menu"
import { OpenNewAccount } from "../../parabank/pom/opennewaccount"
import { Register } from "../../parabank/pom/register"
import { TransferFunds } from "../../parabank/pom/transferfunds"
import { Welcome } from "../../parabank/pom/welcome"
import { injectParaBankAccountsDetailInterface } from "../../support/custom_parabank/accountsdetailcomands"
import { injectParaBankAccountsOverviewInterface } from "../../support/custom_parabank/accountsoverwiewcomands"
import { injectParaBankLoginInterface } from "../../support/custom_parabank/logincomands"
import { injectFeTrainingMenuInterface } from "../../support/custom_parabank/menucomands"
import { injectParaBankOpenNewAccountInterface } from "../../support/custom_parabank/opennewaccountcomands"
import { injectParaBankRegisterInterface } from "../../support/custom_parabank/registercomands"
import { injectParaBankTransferFundsInterface } from "../../support/custom_parabank/transferfundscomands"
import { injectParaBankWelcomeInterface } from "../../support/custom_parabank/welcomecomands"
import { displayCashInParabankFormat, newDate, ParaBankAccountType, paraBankDateToString, today } from "../../util/helpers"

var paraBankActualData = new ParaBankActualData()
var loginInterface = new Login()
var registerInterface = new Register()
var welcomeInterface = new Welcome()
var menuInterface = new Menu()
var accountsDetailInterface = new AccountsDetail()
var accountsOverviewInterface = new AccountsOverview()
var openNewAccountInterface = new OpenNewAccount()
var transferFundsInterface = new TransferFunds()
var register = () => {
  paraBankActualData.generateNewUser()
  cy.visit('/register.htm').
  paraBankEnterRegisterData(paraBankActualData.getUser()).
  paraBankClickRegisterButton().
  paraBankCheckWelcomeMessageText(paraBankActualData.getUser().username).
  log('User logged in and session saved.')
}
var authenticate = () => {
  cy.session('ParaBankLogin', () => {
    cy.visit('/index.htm').
    paraBankEnterLoginData(paraBankActualData.getUser().username, paraBankActualData.getUser().password).
    paraBankClickLoginButton().
    log('User logged in and session saved.')
  })
}

before(() => {
  // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  Cypress.config('baseUrl', Cypress.env('paraBankBaseUrl'))
  injectParaBankRegisterInterface(registerInterface)
  injectParaBankLoginInterface(loginInterface)
  injectParaBankAccountsDetailInterface(accountsDetailInterface)
  injectParaBankAccountsOverviewInterface(accountsOverviewInterface)
  injectParaBankOpenNewAccountInterface(openNewAccountInterface)
  injectParaBankTransferFundsInterface(transferFundsInterface)
  injectParaBankWelcomeInterface(welcomeInterface)
  injectFeTrainingMenuInterface(menuInterface)
  register()
})

after(() => {
  Cypress.session.clearAllSavedSessions()
})

beforeEach('User LogIn', () => {
  authenticate()
})

describe('Para Bank Tests', () => {
  it('CInitial Account', () => {
    cy.visit('/overview.htm').
    paraBankClickAccountOverviewMenu().
    paraBankGetAccountNumber(0).then((expectedAccountNumber) => {
      cy.paraBankCheckAccount(0, 
        expectedAccountNumber, 
        displayCashInParabankFormat(paraBankActualData.getTotalCash()), 
        displayCashInParabankFormat(paraBankActualData.getTotalCash())).
      paraBankClickAccount(0).
      paraBankCheckAccountDetails(expectedAccountNumber, 
        ParaBankAccountType.checking, 
        displayCashInParabankFormat(paraBankActualData.getTotalCash()), 
        displayCashInParabankFormat(paraBankActualData.getTotalCash()))
    })
  })

  it('Open New Checking Account', () => {
    cy.visit('/overview.htm').
    paraBankClickAccountOverviewMenu().
    paraBankGetAccountNumber(0).then(baseAccountNumber => {
      cy.paraBankClickOpenNewAccountMenu().
      paraBankOpenNewAccount(baseAccountNumber, ParaBankAccountType.checking).
      paraBankCheckNewAccountTextVisible().
      paraBankGetNewAccountText().
      then(newAccountNumber => {
        cy.paraBankClickAccountOverviewMenu().
        paraBankCheckAccount(1, 
          newAccountNumber, 
          displayCashInParabankFormat(paraBankActualData.getNewAccountStartCash()), 
          displayCashInParabankFormat(paraBankActualData.getNewAccountStartCash())).
        paraBankClickAccount(1).
        paraBankCheckAccountDetails(newAccountNumber, 
          ParaBankAccountType.checking, 
          displayCashInParabankFormat(paraBankActualData.getNewAccountStartCash()), 
          displayCashInParabankFormat(paraBankActualData.getNewAccountStartCash())).
        paraBankCheckAccountTransaction(0, paraBankDateToString(today()), '', displayCashInParabankFormat(paraBankActualData.getNewAccountStartCash()))
      })
    })
  })

  it('Open New Saving Account', () => {
    cy.visit('/overview.htm').
    paraBankClickAccountOverviewMenu().
    paraBankGetAccountNumber(0).then(baseAccountNumber => {
      cy.paraBankClickOpenNewAccountMenu().
      paraBankOpenNewAccount(baseAccountNumber, ParaBankAccountType.checking).
      paraBankCheckNewAccountTextVisible().
      paraBankGetNewAccountText().
      then(newAccountNumber => {
        cy.paraBankClickAccountOverviewMenu().
        paraBankCheckAccount(2, 
          newAccountNumber, 
          displayCashInParabankFormat(paraBankActualData.getNewAccountStartCash()), 
          displayCashInParabankFormat(paraBankActualData.getNewAccountStartCash())).
        paraBankClickAccount(2).
        paraBankCheckAccountDetails(newAccountNumber, 
          ParaBankAccountType.checking, 
          displayCashInParabankFormat(paraBankActualData.getNewAccountStartCash()), 
          displayCashInParabankFormat(paraBankActualData.getNewAccountStartCash())).
        paraBankCheckAccountTransaction(0, paraBankDateToString(today()), '', displayCashInParabankFormat(paraBankActualData.getNewAccountStartCash()))
      })
    })
  })

  it('Transfer Between Accounts', () => {
    var amount = 200
    var newTotalAcountCash = amount + paraBankActualData.getNewAccountStartCash()
    cy.visit('/overview.htm').
    paraBankClickAccountOverviewMenu().
    paraBankGetAccountNumber(0).then(baseAccountNumber => {
      cy.paraBankClickOpenNewAccountMenu().
      paraBankOpenNewAccount(baseAccountNumber, ParaBankAccountType.checking).
      paraBankCheckNewAccountTextVisible().
      paraBankGetNewAccountText().
      then(newAccountNumber => {
        cy.paraBankClickTransferFundsMenu().
        paraBankEnterTransferFundData(baseAccountNumber, newAccountNumber, amount.toString()).
        paraBankClickTransferFundButton().
        paraBankClickAccountOverviewMenu().
        paraBankCheckAccount(3, newAccountNumber, displayCashInParabankFormat(newTotalAcountCash), displayCashInParabankFormat(newTotalAcountCash)).
        paraBankClickAccount(3).
        paraBankCheckAccountDetails(newAccountNumber, ParaBankAccountType.checking, displayCashInParabankFormat(newTotalAcountCash), displayCashInParabankFormat(newTotalAcountCash)).
        paraBankCheckAccountTransaction(1, paraBankDateToString(today()), '', displayCashInParabankFormat(amount))
      })
    })
  })
})