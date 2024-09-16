import { FeTrainingEventList } from "../../util/helpers"
import { TrainingInterface } from "../interfaces/traininginterface"

export class Training implements TrainingInterface {
    // Elements
    private trainingElement = 'div.cdk-drag'
    private generateAllButton = 'body > app-root > app-trainings > div:nth-child(1) > section > div > button'
    private listsDictionary : Record<FeTrainingEventList, string> = {
        0: '#cdk-drop-list-0',
        1: '#cdk-drop-list-1',
        2: '#cdk-drop-list-2',
        3: '#cdk-drop-list-3',
        4: '#cdk-drop-list-4',
        5: '#cdk-drop-list-5',
        6: '#cdk-drop-list-6',
        7: '#cdk-drop-list-7',
    }

    // Implementation
    getTrainingElement(day:FeTrainingEventList, index:number): Cypress.Chainable<any> {
        return cy.get(this.listsDictionary[day]).children(this.trainingElement).eq(index)
    }
    getTrainingList(day:FeTrainingEventList): Cypress.Chainable<any> {
        return cy.get(this.listsDictionary[day])
    }
    getGenerateAllButton(): Cypress.Chainable<any> {
        return cy.get(this.generateAllButton)
    }
}