/// <reference types="cypress" />

class LoginElements {

    static botaoEntrar() {
        return cy.get('#div-login > input')
    }

    static inputEmail() {
        return cy.get('#us_email')
    }

    static inputSenha() {
        return cy.get('#us_senha')
    }

    static botaoFecharComunicado() {
        return cy.get('#fechar_modal')
    }
}
export default LoginElements

