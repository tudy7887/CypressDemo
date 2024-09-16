import { LoginInterface } from "../../parabank/interface/logininterface"

export function injectParaBankLoginInterface(object: LoginInterface): void {
    loginInterface = object
}

var loginInterface: LoginInterface
declare global {
    namespace Cypress {
        interface Chainable{
            paraBankClickLoginButton(): Chainable<any>
            paraBankClickRegisterLink(): Chainable<any>
            paraBankEnterLoginData(username: string, password: string): Chainable<any>
            paraBankCheckCustomerLoginText(): Chainable<any>
            paraBankCheckLoginError(expectedMessage: string): Chainable<any>
        }
    }
}

Cypress.Commands.add('paraBankClickLoginButton', 
    () => { 
        loginInterface.getLoginButton().
        click()
    }
)
Cypress.Commands.add('paraBankClickRegisterLink', 
    () => { 
        loginInterface.getRegisterLink().
        click()
    }
)
Cypress.Commands.add('paraBankEnterLoginData', 
    (username: string, password: string) => { 
        loginInterface.getUsernameField().
        clear()
        if(username != ''){
            loginInterface.getUsernameField().
            type(username)
        }
        loginInterface.getPasswordField().
        clear()
        if(password != ''){
            loginInterface.getPasswordField().
            type(password)
        }
    }
)
Cypress.Commands.add('paraBankCheckCustomerLoginText', 
    () => { 
        loginInterface.getcustomerLoginText().
        should('be.visible').
        and('have.text', loginInterface.customerLogin)
    }
)
Cypress.Commands.add('paraBankCheckLoginError', 
    (expectedMessage:string) => { 
        loginInterface.getLoginError().
        should('be.visible').
        and('have.text', expectedMessage)
    }
)


