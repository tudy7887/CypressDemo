import { jwtDecode } from "jwt-decode"

export function fetchUserIdFromJWT(jwt: string) {
    let decodedJwt: any = jwtDecode(jwt)
    return decodedJwt.userId
}

export function fetchUserExpDateFromJWT(jwt: string) {
    let decodedJwt: any = jwtDecode(jwt)
    return decodedJwt.exp
}

function getRandomNumber(length: number): string {
    return Math.random().toString().substring(2, length + 2);
}

export function displayCashInParabankFormat(cash: number) {
    return `$${Number(cash).toFixed(2)}`
}

export function generateRandomParaBankUser(): ParaBankUser {
    return {
        firstName: 'Ion',
        lastName: 'Popescu',
        adress: 'Str. Horea, Nr. 12',
        city: 'Cluj-Napoca',
        state: 'Cluj',
        ssn: getRandomNumber(9),
        zip: getRandomNumber(6),
        phone: getRandomNumber(10),
        password: 'pasword1234',
        username: `ionpopescu${getRandomNumber(4)}`
    }
}

var months: Record<number, string> = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

export function getMonthName(month: number): string {
    return months[month]
}

export function setcurrentMonthYearText(date: Date): string {
    return `${getMonthName(date.getMonth())} ${date.getFullYear()}`
}

export function getDifferenceBetweenDates(currentDate: Date, newDate: Date): number {
    var yearDiffrence = newDate.getFullYear() - currentDate.getFullYear()
    var monthDiffrence = newDate.getMonth() - currentDate.getMonth()
    return 12 * yearDiffrence + monthDiffrence
}

export function feTrainingDateToString(date: Date): string {
    var year = formatYearMonthDay(date.getFullYear())
    var month = formatYearMonthDay(date.getMonth() + 1)
    var day = formatYearMonthDay(date.getDate())
    return `${year}-${month}-${day}`
}

export function paraBankDateToString(date: Date): string {
    var year = formatYearMonthDay(date.getFullYear())
    var month = formatYearMonthDay(date.getMonth() + 1)
    var day = formatYearMonthDay(date.getDate())
    return `${month}-${day}-${year}`
}

export function newDate(year: number, month: number, day: number): Date {
    return new Date(year, month - 1, day)
}

export function today(): Date {
    return new Date()
}

function formatYearMonthDay(input: number): string {
    if (input < 10) {
        return `0${input}`
    }
    return input.toString()
}

export enum FeTrainingEventList {
    bench,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
}

export enum ParaBankAccountType {
    saving = 'SAVINGS',
    checking = 'CHECKING'
}

export interface ParaBankUser {
    firstName: string,
    lastName: string,
    adress: string,
    city: string,
    state: string,
    ssn: string,
    zip: string,
    phone: string,
    password: string,
    username: string
}

export interface FeTrainingEventAPI {
    id: string,
    title: string,
}
