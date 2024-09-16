import { generateRandomParaBankUser, ParaBankUser } from '../util/helpers';
export class ParaBankActualData {
    // Private Fields
    private errorNoLoginData = 'Please enter a username and password.'
    private errorWrongLoginData = 'The username and password could not be verified.'
    private newAccountStartCash = 100.00
    private totalCash = 50000.00
    private user: ParaBankUser = generateRandomParaBankUser()

    // Public Methods 
    public getErrorNoLoginData(): string{
        return this.errorNoLoginData
    }
    public getErrorWrongLoginData(): string{
        return this.errorWrongLoginData
    }
    public getNewAccountStartCash(): number{
        return this.newAccountStartCash
    }
    public getTotalCash(): number{
        return this.totalCash
    }
    public getUser(): ParaBankUser{
        return this.user
    }
    public generateNewUser(): void{
        this.user = generateRandomParaBankUser()
    }
}