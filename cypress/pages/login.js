import BasePage from "./basePage"

const username = "[data-test='username']"
const userPassword = "[data-test='password']"
const submitButton = "[data-test='login-button']"


export default class LoginPage extends BasePage {

    loginCommands(userName,password){
        cy.get(username).type(userName)
        cy.get(userPassword).type(password)
        cy.get(submitButton).click()
        return this;
    }

    getLoginPage(){
        return cy.get(signInPage)
    }
    getWrongCredsError(){
        return cy.get(wrongCredsError)
    }
    clickSignOutButton(){
        return cy.get(signOutButton).click()
    }

    loginScenarios(){
        return cy.get("hello world!").should('have.text', "hello world!")
    }


}

