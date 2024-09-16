import { today, setcurrentMonthYearText, FeTrainingEventAPI } from "../util/helpers"

export class FeTrainingActualData{
    // Private Fields
    private authenticateAPI = 'http://apptest.go.ro:8080/api/v1/auth/authenticate'
    private getEventListAPI = 'http://apptest.go.ro:8080/api/v1/event'
    private getEventAPI = 'http://apptest.go.ro:8080/api/v1/event/get'
    private deleteEventAPI = 'http://apptest.go.ro:8080/api/v1/event/delete'
    private createEventAPI = 'http://apptest.go.ro:8080/api/v1/event/save'
    private errorEmailRequiered = 'Email is required'
    private errorPasswordRequiered = 'Password is required'
    private errorAccessForbiddenr = 'Access forbidden!'
    private errorTextColor = 'rgb(255, 0, 0)'
    private username = 'tudor.niculae@email.com'
    private password = 'tudor7887'
    private currentDate = today()
    private currentMonthYearText = setcurrentMonthYearText(today())
    private apiEvent1 = {
        id: 'm14u67tw',
        title: 'API Event 1'
    }
    private apiEvent2 = {
        id: 'm14u6e99',
        title: 'API Event 2'
    }

    // Public Methods
    public getApiEvent1(): FeTrainingEventAPI{
        return this.apiEvent1
    }
    public getApiEvent2(): FeTrainingEventAPI{
        return this.apiEvent2
    }
    public getAuthenticateAPI(): string{
        return this.authenticateAPI
    }
    public getGetEventListAPI(user: string): string{
        return `${this.getEventListAPI}/${user}/list`
    }
    public getGetEventAPI(user: string, event: string): string{
        return `${this.getEventAPI}/${user}/${event}`
    }
    public getDeleteEventAPI(event: string): string{
        return `${this.deleteEventAPI}/${event}`
    }
    public getCreateEventAPI(): string{
        return this.createEventAPI
    }
    public getErrorEmailRequiered(): string{
        return this.errorEmailRequiered
    }
    public getErrorPasswordRequiered(): string{
        return this.errorPasswordRequiered
    }
    public getErrorAccessForbidden(): string{
        return this.errorAccessForbiddenr
    }
    public getErrorTextColor(): string{
        return this.errorTextColor
    }
    public getUsername(): string{
        return this.username
    }
    public getPassword(): string{
        return this.password
    }
    public setCurrentDate(date: Date){
        this.currentDate = date
        setcurrentMonthYearText(date)
    }
    public getCurrentDate(): Date{
        return this.currentDate
    }
    public getCurrentMonthYearText(): string{
        return this.currentMonthYearText
    }
    
}