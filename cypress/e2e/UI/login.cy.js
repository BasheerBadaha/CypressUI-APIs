import LoginPage from "../../pages/login"
import { user } from "../../fixtures/users"
import { urls } from "../../fixtures/urls"

const login = new LoginPage

describe('template spec', () => {
  it('Successful Login', () => {
    login.navigate(urls.baseUrl)
    login.loginCommands(user.usernames.user1, user.passwords.correctPassword)
    cy.get('.header_label').should('be.visible')
  }),
  it('New Test', () =>{
    //cy.UIlogin(user.usernames.user1, user.passwords.user1)
  })
})