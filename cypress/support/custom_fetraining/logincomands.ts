import { LoginInterface } from '../../fetraining/interfaces/logininterface';
export function injectFeTrainingLoginInterface(object: LoginInterface): void {
    loginInterface = object
}

var loginInterface: LoginInterface
declare global {
    namespace Cypress {
        interface Chainable{
            feTrainingEnterLoginData(email: string, password:string): Chainable<any>
            feTrainingClickLoginButton(force?: boolean): Chainable<any>
            feTrainingCheckForbidenAccessErrorNotVisible(): Chainable<any>
            feTrainingCheckEmailRequiredErrorNotVisible(): Chainable<any>
            feTrainingCheckPasswordRequiredErrorNotVisible(): Chainable<any>
            feTrainingCheckForbidenAccessError(expectedMessage: string, expectedColor: string): Chainable<any>
            feTrainingCheckEmailRequiredError(expectedMessage: string, expectedColor: string): Chainable<any>
            feTrainingCheckPasswordRequiredError(expectedMessage: string, expectedColor: string): Chainable<any>
        }
    }
}

Cypress.Commands.add('feTrainingEnterLoginData', 
    (email: string, password:string ) => {
        loginInterface.getEmailField().
        clear()
        if(email != ''){
            loginInterface.getEmailField().
            type(email)
        }
        loginInterface.getPassworFieldd().
        clear()
        if(password != ''){
            loginInterface.getPassworFieldd().
            type(password)
        }
    }
)
Cypress.Commands.add('feTrainingClickLoginButton', 
    (force?: boolean) => { 
        loginInterface.getLoginButton().
        click({ force: force })
    }
)
Cypress.Commands.add('feTrainingCheckForbidenAccessErrorNotVisible', 
    () => {
        loginInterface.getForbiddenAccessError().
        should('not.exist')
    }
)
Cypress.Commands.add('feTrainingCheckEmailRequiredErrorNotVisible', 
    () => {
        loginInterface.getEmailRequiredError().
        should('not.exist')
    }
)
Cypress.Commands.add('feTrainingCheckPasswordRequiredErrorNotVisible', 
    () => {
        loginInterface.getPasswordRequiredError().
        should('not.exist')
    }
)
Cypress.Commands.add('feTrainingCheckForbidenAccessError', 
    (expectedMessage: string, expectedColor: string ) => {
        loginInterface.getForbiddenAccessError().
        should('be.visible').
        and('contain.text', expectedMessage).
        and('have.css','color', expectedColor)  // 'rgb(255, 0, 0)'
    }
)
Cypress.Commands.add('feTrainingCheckEmailRequiredError', 
    (expectedMessage: string, expectedColor: string ) => {
        loginInterface.getEmailRequiredError().
        should('be.visible').
        and('contain.text', expectedMessage).
        and('have.css','color', expectedColor)  // 'rgb(255, 0, 0)'
    }
)
Cypress.Commands.add('feTrainingCheckPasswordRequiredError', 
    (expectedMessage: string, expectedColor: string ) => {
        loginInterface.getPasswordRequiredError().
        should('be.visible').
        and('contain.text', expectedMessage).
        and('have.css','color', expectedColor)  // 'rgb(255, 0, 0)'
    }
)


