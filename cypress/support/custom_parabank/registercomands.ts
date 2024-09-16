import { RegisterInterface } from "../../parabank/interface/registerInterface"
import { ParaBankUser } from "../../util/helpers"

export function injectParaBankRegisterInterface(object: RegisterInterface): void {
    registerInterface = object
}

var registerInterface: RegisterInterface
declare global {
    namespace Cypress {
        interface Chainable{
            paraBankEnterRegisterData(user: ParaBankUser): Chainable<any>
            paraBankClickRegisterButton(): Chainable<any>
        }
    }
}

Cypress.Commands.add('paraBankEnterRegisterData', 
    (user: ParaBankUser) => { 
        registerInterface.getFirstNameField().
        clear()
        if(user.firstName){
            registerInterface.getFirstNameField().
            type(user.firstName)
        }
        registerInterface.getLastNameField().
        clear()
        if(user.lastName){
            registerInterface.getLastNameField().
            type(user.lastName)
        }
        registerInterface.getAddressField().
        clear()
        if(user.adress){
            registerInterface.getAddressField().
            type(user.adress)
        }
        registerInterface.getZipCodeField().
        clear()
        if(user.zip){
            registerInterface.getZipCodeField().
            type(user.zip)
        }
        registerInterface.getSsnField().
        clear()
        if(user.ssn){
            registerInterface.getSsnField().
            type(user.ssn)
        }
        registerInterface.getCityField().
        clear()
        if(user.city){
            registerInterface.getCityField().
            type(user.city)
        }
        registerInterface.getPhoneField().
        clear()
        if(user.phone){
            registerInterface.getPhoneField().
            type(user.phone)
        }
        registerInterface.getStateField().
        clear()
        if(user.state){
            registerInterface.getStateField().
            type(user.state)
        }
        registerInterface.getUsernameField().
        clear()
        if(user.username){
            registerInterface.getUsernameField().
            type(user.username)
        }
        registerInterface.getPasswordField().
        clear()
        registerInterface.getPasswordConfirmationField().
        clear()
        if(user.password){
            registerInterface.getPasswordField().
            type(user.password)
            registerInterface.getPasswordConfirmationField().
            type(user.password)
        }
    }
)
Cypress.Commands.add('paraBankClickRegisterButton', 
    () => { 
        registerInterface.getRegisterButton().
        click()
    }
)


