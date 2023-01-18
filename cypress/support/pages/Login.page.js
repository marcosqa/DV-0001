import LoginElements from '../elements/login/LoginElements'


class LoginPage {

    static acessarPaginaDeLogin() {
        cy.visit('/')

    }

    static inserirDadosDeLoginValidos() {
        LoginElements.inputUsername().type(Cypress.env('CYPRESS_EMAIL'))
        LoginElements.inputPassword().type(Cypress.env('CYPRESS_SENHA'))

    }

    static clicarNoBotaoLogin() {
        LoginElements.botaoLogin().click()

    }

}


export default LoginPage

