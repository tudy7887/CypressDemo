import { FeTrainingEventList } from "../../util/helpers"

export interface TrainingInterface {
    getTrainingElement(day:FeTrainingEventList, index:number): Cypress.Chainable<any>
    getTrainingList(day:FeTrainingEventList): Cypress.Chainable<any>
    getGenerateAllButton(): Cypress.Chainable<any>
}