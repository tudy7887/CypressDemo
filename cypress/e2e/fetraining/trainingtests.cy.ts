import { FeTrainingActualData } from "../../actualdata/fetrainingactualdata"
import { Login } from "../../fetraining/pom/login"
import { Menu } from "../../fetraining/pom/menu"
import { Training } from "../../fetraining/pom/training"
import { injectFeTrainingLoginInterface } from "../../support/custom_fetraining/logincomands"
import { injectFeTrainingMenuInterface } from "../../support/custom_fetraining/menucomands"
import { injectFeTrainingTrainingInterface } from "../../support/custom_fetraining/trainingcomands"
import { FeTrainingEventList } from "../../util/helpers"

var feTrainingActualData = new FeTrainingActualData()
var loginInterface = new Login()
var menuInterface = new Menu()
var trainingInterface = new Training()
var authenticate = () => {
  cy.session('FeTrainingLogin', () => {
    cy.visit('/login').
      feTrainingEnterLoginData(feTrainingActualData.getUsername(), feTrainingActualData.getPassword()).
      feTrainingClickLoginButton().
      feTrainingCheckEmailButton(feTrainingActualData.getUsername()).
      log('User logged in and session saved.')
  })
}

before(() => {
  // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  Cypress.config('baseUrl', Cypress.env('feTrainingBaseUrl'))
  injectFeTrainingTrainingInterface(trainingInterface)
  injectFeTrainingLoginInterface(loginInterface)
  injectFeTrainingMenuInterface(menuInterface)
})

after(() => {
  Cypress.session.clearAllSavedSessions()
})

beforeEach('User LogIn', () => {
  authenticate()
})

describe('Training Page Tests:', () => {
  it.only('Move All Bench To Monday And Back', () => {
    cy.visit('/trainings')
    var first: string = '', second: string = '', third: string = '', forth: string = ''
    cy.feTrainingGetTrainingProgramElementText(0, FeTrainingEventList.bench).then(text => first = text ).
    feTrainingGetTrainingProgramElementText(1, FeTrainingEventList.bench).then(text => second = text ).
    feTrainingGetTrainingProgramElementText(2, FeTrainingEventList.bench).then(text => third = text ).
    feTrainingGetTrainingProgramElementText(3, FeTrainingEventList.bench).then(text => forth = text ).
    feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.bench, FeTrainingEventList.monday).then(() => {
      cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.bench, FeTrainingEventList.monday).then(() => {
        cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.bench, FeTrainingEventList.monday).then(() => {
          cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.bench, FeTrainingEventList.monday).then(() => {   
            cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.monday, first).
            feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.monday, second).
            feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.monday, third).
            feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.monday, forth).
            feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.monday, FeTrainingEventList.bench).then(() => {
              cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.monday, FeTrainingEventList.bench).then(() => {
                cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.monday, FeTrainingEventList.bench).then(() => {
                  cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.monday, FeTrainingEventList.bench).then(() => {
                    cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.bench, first).
                    feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.bench, second).
                    feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.bench, third).
                    feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.bench, forth)
                  })
                })
              })
            })
          })
        })
      })
    })
  })

  it('Move All Bench To Tuesday And Back', () => {
    cy.visit('/trainings')
    var first: string, second: string, third: string, forth: string
    cy.feTrainingGetTrainingProgramElementText(0, FeTrainingEventList.bench).then(text => first = text ).
    feTrainingGetTrainingProgramElementText(1, FeTrainingEventList.bench).then(text => second = text ).
    feTrainingGetTrainingProgramElementText(2, FeTrainingEventList.bench).then(text => third = text ).
    feTrainingGetTrainingProgramElementText(3, FeTrainingEventList.bench).then(text => forth = text ).
    feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.bench, FeTrainingEventList.tuesday).then(() => {
      cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.bench, FeTrainingEventList.tuesday).then(() => {
        cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.bench, FeTrainingEventList.tuesday).then(() => {
          cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.bench, FeTrainingEventList.tuesday).then(() => { 
            cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.tuesday, first).
            feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.tuesday, second).
            feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.tuesday, third).
            feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.tuesday, forth).
            feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.tuesday, FeTrainingEventList.bench).then(() => {
              cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.tuesday, FeTrainingEventList.bench).then(() => {
                cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.tuesday, FeTrainingEventList.bench).then(() => {
                  cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.tuesday, FeTrainingEventList.bench).then(() => {
                    cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.bench, first).
                    feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.bench, second).
                    feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.bench, third).
                    feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.bench, forth)
                  })
                })
              })
            })
          })
        })
      })
    })
  })

  it('Move All Bench To Wednesday And Back', () => {
    cy.visit('/trainings')
    var first: string, second: string, third: string, forth: string
    cy.feTrainingGetTrainingProgramElementText(0, FeTrainingEventList.bench).then(text => first = text ).
    feTrainingGetTrainingProgramElementText(1, FeTrainingEventList.bench).then(text => second = text ).
    feTrainingGetTrainingProgramElementText(2, FeTrainingEventList.bench).then(text => third = text ).
    feTrainingGetTrainingProgramElementText(3, FeTrainingEventList.bench).then(text => forth = text ).
    feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.bench, FeTrainingEventList.wednesday).then(() => {
      cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.bench, FeTrainingEventList.wednesday).then(() => {
        cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.bench, FeTrainingEventList.wednesday).then(() => {
          cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.bench, FeTrainingEventList.wednesday).then(() => {  
            cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.wednesday, first).
            feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.wednesday, second).
            feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.wednesday, third).
            feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.wednesday, forth).
            feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.wednesday, FeTrainingEventList.bench).then(() => {
              cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.wednesday, FeTrainingEventList.bench).then(() => {
                cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.wednesday, FeTrainingEventList.bench).then(() => {
                  cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.wednesday, FeTrainingEventList.bench).then(() => {
                    cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.bench, first).
                    feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.bench, second).
                    feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.bench, third).
                    feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.bench, forth)
                  })
                })
              })
            })
          })
        })
      })
    })
  })

  it('Move All Bench To ThursDay And Back', () => {
    cy.visit('/trainings')
    var first: string, second: string, third: string, forth: string
    cy.feTrainingGetTrainingProgramElementText(0, FeTrainingEventList.bench).then(text => first = text ).
    feTrainingGetTrainingProgramElementText(1, FeTrainingEventList.bench).then(text => second = text ).
    feTrainingGetTrainingProgramElementText(2, FeTrainingEventList.bench).then(text => third = text ).
    feTrainingGetTrainingProgramElementText(3, FeTrainingEventList.bench).then(text => forth = text ).
    feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.bench, FeTrainingEventList.thursday).then(() => {
      cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.bench, FeTrainingEventList.thursday).then(() => {
        cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.bench, FeTrainingEventList.thursday).then(() => {
          cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.bench, FeTrainingEventList.thursday).then(() => {        
            cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.thursday, first).
            feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.thursday, second).
            feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.thursday, third).
            feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.thursday, forth).
            feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.thursday, FeTrainingEventList.bench).then(() => {
              cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.thursday, FeTrainingEventList.bench).then(() => {
                cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.thursday, FeTrainingEventList.bench).then(() => {
                  cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.thursday, FeTrainingEventList.bench).then(() => {
                    cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.bench, first).
                    feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.bench, second).
                    feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.bench, third).
                    feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.bench, forth)
                  })
                })
              })
            })
          })
        })
      })
    })
  })

  it('Move All Bench To Friday And Back', () => {
    cy.visit('/trainings')
    var first: string, second: string, third: string, forth: string
    cy.feTrainingGetTrainingProgramElementText(0, FeTrainingEventList.bench).then(text => first = text ).
    feTrainingGetTrainingProgramElementText(1, FeTrainingEventList.bench).then(text => second = text ).
    feTrainingGetTrainingProgramElementText(2, FeTrainingEventList.bench).then(text => third = text ).
    feTrainingGetTrainingProgramElementText(3, FeTrainingEventList.bench).then(text => forth = text ).
    feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.bench, FeTrainingEventList.friday).then(() => {
      cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.bench, FeTrainingEventList.friday).then(() => {
        cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.bench, FeTrainingEventList.friday).then(() => {
          cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.bench, FeTrainingEventList.friday).then(() => {
            cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.friday, first).
            feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.friday, second).
            feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.friday, third).
            feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.friday, forth).
            feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.friday, FeTrainingEventList.bench).then(() => {
              cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.friday, FeTrainingEventList.bench).then(() => {
                cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.friday, FeTrainingEventList.bench).then(() => {
                  cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.friday, FeTrainingEventList.bench).then(() => {
                    cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.bench, first).
                    feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.bench, second).
                    feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.bench, third).
                    feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.bench, forth)
                  })
                })
              })
            })
          })
        })
      })
    })
  })

  it('Move All Bench To Saturday And Back', () => {
    cy.visit('/trainings')
    var first: string, second: string, third: string, forth: string
    cy.feTrainingGetTrainingProgramElementText(0, FeTrainingEventList.bench).then(text => first = text ).
    feTrainingGetTrainingProgramElementText(1, FeTrainingEventList.bench).then(text => second = text ).
    feTrainingGetTrainingProgramElementText(2, FeTrainingEventList.bench).then(text => third = text ).
    feTrainingGetTrainingProgramElementText(3, FeTrainingEventList.bench).then(text => forth = text ).
    feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.bench, FeTrainingEventList.saturday).then(() => {
      cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.bench, FeTrainingEventList.saturday).then(() => {
        cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.bench, FeTrainingEventList.saturday).then(() => {
          cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.bench, FeTrainingEventList.saturday).then(() => {     
            cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.saturday, first).
            feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.saturday, second).
            feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.saturday, third).
            feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.saturday, forth).
            feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.saturday, FeTrainingEventList.bench).then(() => {
              cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.saturday, FeTrainingEventList.bench).then(() => {
                cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.saturday, FeTrainingEventList.bench).then(() => {
                  cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.saturday, FeTrainingEventList.bench).then(() => {
                    cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.bench, first).
                    feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.bench, second).
                    feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.bench, third).
                    feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.bench, forth)
                  })
                })
              })
            })
          })
        })
      })
    })
  })

  it('Move All Bench To Sunday And Back', () => {
    cy.visit('/trainings')
    var first: string, second: string, third: string, forth: string
    cy.feTrainingGetTrainingProgramElementText(0, FeTrainingEventList.bench).then(text => first = text ).
    feTrainingGetTrainingProgramElementText(1, FeTrainingEventList.bench).then(text => second = text ).
    feTrainingGetTrainingProgramElementText(2, FeTrainingEventList.bench).then(text => third = text ).
    feTrainingGetTrainingProgramElementText(3, FeTrainingEventList.bench).then(text => forth = text ).
    feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.bench, FeTrainingEventList.sunday).then(() => {
      cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.bench, FeTrainingEventList.sunday).then(() => {
        cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.bench, FeTrainingEventList.sunday).then(() => {
          cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.bench, FeTrainingEventList.sunday).then(() => {       
            cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.sunday, first).
            feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.sunday, second).
            feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.sunday, third).
            feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.sunday, forth).
            feTrainingMoveTrainingProgramElement(3, FeTrainingEventList.sunday, FeTrainingEventList.bench).then(() => {
              cy.feTrainingMoveTrainingProgramElement(2, FeTrainingEventList.sunday, FeTrainingEventList.bench).then(() => {
                cy.feTrainingMoveTrainingProgramElement(1, FeTrainingEventList.sunday, FeTrainingEventList.bench).then(() => {
                  cy.feTrainingMoveTrainingProgramElement(0, FeTrainingEventList.sunday, FeTrainingEventList.bench).then(() => {
                    cy.feTrainingCheckTrainingProgramElementText(0, FeTrainingEventList.bench, first).
                    feTrainingCheckTrainingProgramElementText(1, FeTrainingEventList.bench, second).
                    feTrainingCheckTrainingProgramElementText(2, FeTrainingEventList.bench, third).
                    feTrainingCheckTrainingProgramElementText(3, FeTrainingEventList.bench, forth)
                  })
                })
              })
            })
          })
        })
      })
    })
  })

})