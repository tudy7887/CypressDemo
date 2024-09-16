import { TrainingInterface } from "../../fetraining/interfaces/traininginterface"
import { FeTrainingEventList } from "../../util/helpers"

export function injectFeTrainingTrainingInterface(object: TrainingInterface): void {
    trainingInterface = object
}

var trainingInterface: TrainingInterface
declare global {
    namespace Cypress {
        interface Chainable {
            feTrainingClickGenerateAllButton(): Chainable<any>
            feTrainingMoveTrainingProgramElement(elementindex: number, from: FeTrainingEventList, to: FeTrainingEventList): Chainable<any>
            feTrainingCheckTrainingProgramElementText(elementindex: number, from: FeTrainingEventList, expectedText: string): Chainable<any>
            feTrainingGetTrainingProgramElementText(elementindex: number, from: FeTrainingEventList): Chainable<string>
        }
    }
}

Cypress.Commands.add('feTrainingClickGenerateAllButton',
    () => {
        trainingInterface.getGenerateAllButton().
            click()
    }
)
Cypress.Commands.add('feTrainingMoveTrainingProgramElement',
    (elementindex: number, from: FeTrainingEventList, to: FeTrainingEventList) => {
        trainingInterface.getTrainingElement(from, elementindex).
            realMouseDown({ button: 'left', position: 'center' }).
            realMouseMove(0, 10, { position: 'center' }).
            then(() => {
                trainingInterface.getTrainingList(to).
                    realMouseMove(0, 0, { position: 'top' }).
                    realMouseUp()
            }).
            wait(500)
    }
)
Cypress.Commands.add('feTrainingCheckTrainingProgramElementText',
    (elementindex: number, from: FeTrainingEventList, expectedText: string) => {
        trainingInterface.getTrainingElement(from, elementindex).
            should('have.text', expectedText)
    }
)
Cypress.Commands.add('feTrainingGetTrainingProgramElementText',
    (elementindex: number, from: FeTrainingEventList) => {
        return trainingInterface.getTrainingElement(from, elementindex).
        invoke('text')
    }
)
