declare namespace Cypress {
    interface Chainable<Subject> {
        feTrainingToggleWeekendsCheckBox(stateundefined : any): Chainable<any>
        feTrainingToggleCalendarCheckBox(stateundefined : any): Chainable<any>
        feTrainingEnterEventTitle(titleundefined : string): Chainable<any>
        feTrainingClickListButton(): Chainable<any>
        feTrainingClickDayButton(): Chainable<any>
        feTrainingClickWeekButton(): Chainable<any>
        feTrainingClickMonthButton(): Chainable<any>
        feTrainingClickTodayButton(): Chainable<any>
        feTrainingClickDeleteEventButton(): Chainable<any>
        feTrainingClickCreateEventButton(): Chainable<any>
        feTrainingClickCancelEventButton(): Chainable<any>
        feTrainingClickCellCalendar(dateundefined : Date): Chainable<any>
        feTrainingClickPreviousButton(timesundefined : number): Chainable<any>
        feTrainingClickForwardButton(timesundefined : number): Chainable<any>
        feTrainingClickCancelEventDisplayButton(): Chainable<any>
        feTrainingGetMonthYearText(): Chainable<any>
        feTrainingCheckMonthYearText(expectedMonthYearTextundefined : string): Chainable<any>
        feTrainingCheckWeeksColumnVisible(): Chainable<any>
        feTrainingCheckWeeksColumnNotVisible(): Chainable<any>
        feTrainingCheckWeekendsColumnVisible(): Chainable<any>
        feTrainingCheckWeekendsColumnNotVisible(): Chainable<any>
        feTrainingCheckCalendarVisible(): Chainable<any>
        feTrainingCheckCalendarNotVisible(): Chainable<any>
        feTrainingCheckAddEventPopupVisible(): Chainable<any>
        feTrainingCheckAddEventPopupNotVisible(): Chainable<any>
        feTrainingCheckCalendarEventTitle(dateundefined : Date, indexundefined : number, expectedTitleundefined : string): Chainable<any>
        feTrainingCheckPopupEventTitle(indexundefined : number, expectedTitleundefined : string): Chainable<any>
        feTrainingCheckEventDetails(expectedTitleundefined : string, expectedStartdateundefined : Date): Chainable<any>
        feTrainingClickMoreEventsLink(dateundefined : Date): Chainable<any>
        feTrainingClickCalendarEventObject(dateundefined : Date, indexundefined : number): Chainable<any>
        feTrainingClickPopupEventObject(indexundefined : number): Chainable<any>
        feTrainingMoveCalendarEventObject(indexundefined : number, dateFromundefined : Date, dateToundefined : Date): Chainable<any>
        feTrainingMovePopupEventObject(indexundefined : number, dateToundefined : Date): Chainable<any>
        feTrainingEnterLoginData(emailundefined : string, passwordundefined : string): Chainable<any>
        feTrainingClickLoginButton(force? : any): Chainable<any>
        feTrainingCheckForbidenAccessErrorNotVisible(): Chainable<any>
        feTrainingCheckEmailRequiredErrorNotVisible(): Chainable<any>
        feTrainingCheckPasswordRequiredErrorNotVisible(): Chainable<any>
        feTrainingCheckForbidenAccessError(expectedMessageundefined : string, expectedColorundefined : string): Chainable<any>
        feTrainingCheckEmailRequiredError(expectedMessageundefined : string, expectedColorundefined : string): Chainable<any>
        feTrainingCheckPasswordRequiredError(expectedMessageundefined : string, expectedColorundefined : string): Chainable<any>
        feTrainingClickLogoutButton(): Chainable<any>
        feTrainingClickTrainingButton(): Chainable<any>
        feTrainingClickEmailButton(): Chainable<any>
        feTrainingClickDashboardButton(): Chainable<any>
        feTrainingCheckEmailButton(emailundefined : string): Chainable<any>
        feTrainingClickGenerateAllButton(): Chainable<any>
        feTrainingMoveTrainingProgramElement(elementindexundefined : number, fromundefined : FeTrainingEventList, toundefined : FeTrainingEventList): Chainable<any>
        feTrainingCheckTrainingProgramElementText(elementindexundefined : number, fromundefined : FeTrainingEventList, expectedTextundefined : string): Chainable<any>
        feTrainingGetTrainingProgramElementText(elementindexundefined : number, fromundefined : FeTrainingEventList): Chainable<any>
        paraBankClickAccountTransaction(indexundefined : number): Chainable<any>
        paraBankCheckAccountDetails(expectedNumberundefined : string, expectedTypeundefined : ParaBankAccountType, expectedBalanceundefined : string, expectedAvailableundefined : string): Chainable<any>
        paraBankCheckAccountTransaction(indexundefined : number, expectedDateundefined : string, expectedDebitundefined : string, expectedCreditundefined : string): Chainable<any>
        paraBankClickAccount(indexundefined : number): Chainable<any>
        paraBankGetAccountNumber(indexundefined : number): Chainable<any>
        paraBankCheckAccount(indexundefined : number, expectedNumberundefined : string, expectedBalanceundefined : string, expectedAvailableundefined : string): Chainable<any>
        paraBankCheckAccountsTotal(expectedTotalundefined : string): Chainable<any>
        paraBankClickLoginButton(): Chainable<any>
        paraBankClickRegisterLink(): Chainable<any>
        paraBankEnterLoginData(usernameundefined : string, passwordundefined : string): Chainable<any>
        paraBankCheckCustomerLoginText(): Chainable<any>
        paraBankCheckLoginError(expectedMessageundefined : string): Chainable<any>
        paraBankClickOpenNewAccountMenu(): Chainable<any>
        paraBankClickAccountOverviewMenu(): Chainable<any>
        paraBankClickTransferFundsMenu(): Chainable<any>
        paraBankClickBillPayMenu(): Chainable<any>
        paraBankClickFindTransactionsMenu(): Chainable<any>
        paraBankClickUpdateContractInfoMenu(): Chainable<any>
        paraBankClickRequestLoanMenu(): Chainable<any>
        paraBankClickLogOutMenu(): Chainable<any>
        paraBankClickNewAccount(): Chainable<any>
        paraBankOpenNewAccount(accountundefined : string, typeundefined : ParaBankAccountType): Chainable<any>
        paraBankGetNewAccountText(): Chainable<any>
        paraBankCheckNewAccountTextVisible(): Chainable<any>
        paraBankEnterRegisterData(userundefined : ParaBankUser): Chainable<any>
        paraBankClickRegisterButton(): Chainable<any>
        paraBankClickTransferFundButton(): Chainable<any>
        paraBankEnterTransferFundData(fromundefined : string, toundefined : string, amountundefined : string): Chainable<any>
        paraBankCheckTransferFundSuccssfullText(fromundefined : string, toundefined : string, amountundefined : string): Chainable<any>
        paraBankCheckTransferFundError(expectedMessageundefined : string): Chainable<any>
        paraBankCheckWelcomeMessageText(usernameundefined : string): Chainable<any>
  }
}