import { jwtDecode } from 'jwt-decode';
import { FeTrainingActualData } from '../../actualdata/fetrainingactualdata';
import { fetchUserIdFromJWT, feTrainingDateToString, getDifferenceBetweenDates, newDate, setcurrentMonthYearText, today } from "../../util/helpers"
import { should } from 'chai';
import { property } from 'cypress/types/lodash';

var feTrainingActualData = new FeTrainingActualData()
var actualToken: string = ''
var authenticate = (user: string, password: string) => {
    return cy.request({
        method: 'POST',
        url: feTrainingActualData.getAuthenticateAPI(),
        body: {
            "email": user,
            "password": password
        },
        failOnStatusCode: false
    })
}
var createEventToday = (token: string, id: string, title: string) => {
    var userId = fetchUserIdFromJWT(actualToken)
    var today: Date = new Date(feTrainingActualData.getCurrentDate())
    var tomorrow: Date = new Date(feTrainingActualData.getCurrentDate())
    tomorrow.setDate(tomorrow.getDate() + 1)
    return cy.request({
        method: 'POST',
        url: feTrainingActualData.getCreateEventAPI(),
        auth:{
            'bearer': token
        },
        body: {
            "customerIds": [userId],
            "eventStart": feTrainingDateToString(today),
            "eventEnd": feTrainingDateToString(tomorrow),
            "eventTitle": title,
            "id": id,
            "isAllDayEvent": "true"
        },
        failOnStatusCode: false
    })
}
var deleteEvent = (token: string, id: string) => {
    return cy.request({
        method: 'DELETE',
        url: feTrainingActualData.getDeleteEventAPI(id),
        auth:{
            'bearer': token
        },
        failOnStatusCode: false
    })
}
var getEvent = (token: string, user: string, event: string) => {
    return cy.request({
        method: 'GET',
        url: feTrainingActualData.getGetEventAPI(user, event),
        auth:{
            'bearer': token
        },
        failOnStatusCode: false
    })
}
var getEventList = (token: string, user: string) => {
    return cy.request({
        method: 'GET',
        url: feTrainingActualData.getGetEventListAPI(user),
        auth:{
            'bearer': token
        },
        failOnStatusCode: false
    })
}

before(() => {
    // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    authenticate(feTrainingActualData.getUsername(), feTrainingActualData.getPassword()).
    then(
        response =>{
            actualToken = response.body.token
        }
    )
})

after(() => {
    deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id)
    deleteEvent(actualToken, feTrainingActualData.getApiEvent2().id)
  })

describe('API Tests:', () => {
    it('Try Authenticate With Random Characters', () => {
        authenticate('asdasdada', 'asdadasd').
        then(
            response => {
                expect(response.status).to.be.eq(403)
                expect(response.body).to.be.undefined
            }
        )
    })

    it('Try Authenticate With Wrong Password', () => {
        authenticate(feTrainingActualData.getUsername(), `${feTrainingActualData.getPassword()}aasda`).
        then(
            response => {
                expect(response.status).to.be.eq(403)
                expect(response.body).to.be.undefined
            }
        )
    })

    it('Successfull Authentication', () => {
        authenticate(feTrainingActualData.getUsername(), feTrainingActualData.getPassword()).
        then(
            response => {
                expect(response.status).to.be.eq(200)
                expect(response.body).to.have.property('token')
            }
        )
    })

    it('Try Get Event List Without Token', () => {
        getEventList('', fetchUserIdFromJWT(actualToken)).
        then(
            response => {
                expect(response.status).to.be.eq(403)
                expect(response.body).to.be.empty
            }
        )
    })

    it('Try Get An Event Without Token', () => {
        createEventToday('', feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title)
        getEvent('', fetchUserIdFromJWT(actualToken), feTrainingActualData.getApiEvent1().id).
        then(
            response => {
                expect(response.status).to.be.eq(403)
                expect(response.body).to.be.empty
            }
        )
        deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id)
    })

    it('Try Create An Event Without Token', () => {
        createEventToday('', feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title).
        then(
            response => {
                expect(response.status).to.be.eq(403)
                expect(response.body).to.be.undefined
            }
        )
    })

    it('Try Delete An Event Without Token', () => {
        createEventToday(actualToken, feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title)
        deleteEvent('', feTrainingActualData.getApiEvent1().id).
        then(
            response => {
                expect(response.status).to.be.eq(403)
                expect(response.body).to.be.empty
            }
        )
        deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id)
    })

    it('Get Event List With 0 Events', () => {
        getEventList(actualToken, fetchUserIdFromJWT(actualToken)).
        then(
            response => {
                expect(response.status).to.be.eq(200)
                expect(response.body.data.events).to.be.empty
            }
        )
    })

    it('Get Event List With 1 Events', () => {
        createEventToday(actualToken, feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title)
        getEventList(actualToken, fetchUserIdFromJWT(actualToken)).
        then(
            response => {
                expect(response.status).to.be.eq(200)
                expect(response.body.data.events).to.have.length(1)
                expect(response.body.data.events[0].id).to.eq(feTrainingActualData.getApiEvent1().id)
                expect(response.body.data.events[0].title).to.eq(feTrainingActualData.getApiEvent1().title)
                
            }
        )
        deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id)
    })

    it('Get Event List With 2 Events', () => {
        createEventToday(actualToken, feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title)
        createEventToday(actualToken, feTrainingActualData.getApiEvent2().id, feTrainingActualData.getApiEvent2().title)
        getEventList(actualToken, fetchUserIdFromJWT(actualToken)).
        then(
            response => {
                expect(response.status).to.be.eq(200)
                expect(response.body.data.events).to.have.length(2)
                expect(response.body.data.events[0].id).to.eq(feTrainingActualData.getApiEvent1().id)
                expect(response.body.data.events[0].title).to.eq(feTrainingActualData.getApiEvent1().title)
                expect(response.body.data.events[1].id).to.eq(feTrainingActualData.getApiEvent2().id)
                expect(response.body.data.events[1].title).to.eq(feTrainingActualData.getApiEvent2().title)
            }
        )
        deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id)
        deleteEvent(actualToken, feTrainingActualData.getApiEvent2().id)
    })

    it('Try Get An Inexistent Event', () => {
        var wrongEventId = 'm14u67t2'
        createEventToday(actualToken, feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title)
        getEvent(actualToken, fetchUserIdFromJWT(actualToken), wrongEventId).
        then(
            response => {
                expect(response.status).to.be.eq(404)
                expect(response.body.message).to.be.eq(`No event with id ${wrongEventId} available.`)
            }
        )
        deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id)
    })

    it('Try Get An Event From Wrong User', () => {
        var wrongUserId = fetchUserIdFromJWT(actualToken) + 1
        createEventToday(actualToken, feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title)
        getEvent(actualToken, wrongUserId, feTrainingActualData.getApiEvent1().id).
        then(
            response => {
                expect(response.status).to.be.eq(400)
                expect(response.body.message).to.be.eq(`Not allowed.`)
            }
        )
        deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id)
    })

    it('Get An Event', () => {
        createEventToday(actualToken, feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title)
        getEvent(actualToken, fetchUserIdFromJWT(actualToken), feTrainingActualData.getApiEvent1().id).
        then(
            response => {
                expect(response.status).to.be.eq(200)
                expect(response.body.data.event.id).to.eq(feTrainingActualData.getApiEvent1().id)
                expect(response.body.data.event.title).to.eq(feTrainingActualData.getApiEvent1().title)
            }
        )
        deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id)
    })

    it('Create An Event', () => {
        createEventToday(actualToken, feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title).
        then(
            response => {
                expect(response.status).to.be.eq(200)
                expect(response.body.data.event.id).to.eq(feTrainingActualData.getApiEvent1().id)
                expect(response.body.data.event.title).to.eq(feTrainingActualData.getApiEvent1().title)
                expect(response.body.data.event.start).to.eq(feTrainingDateToString(feTrainingActualData.getCurrentDate()))
            }
        )
        deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id)
    })

    it('Try Delete An Inexistent Event', () => {
        var wrongEventId = 'm14u67t2'
        createEventToday(actualToken, feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title)
        deleteEvent(actualToken, wrongEventId).
        then(
            response => {
                expect(response.status).to.be.eq(404)
                expect(response.body.message).to.eq(`No event with id ${wrongEventId} available.`)         
            }
        )
        deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id)
    })

    it('Delete An Event', () => {
        createEventToday(actualToken, feTrainingActualData.getApiEvent1().id, feTrainingActualData.getApiEvent1().title)
        deleteEvent(actualToken, feTrainingActualData.getApiEvent1().id).
        then(
            response => {
                expect(response.status).to.be.eq(200)
                expect(response.body.httpStatus).to.eq('OK')       
                expect(response.body.data.deleted).to.eq(true)       
            }
        )
    })

})