import faker from '@faker-js/faker'
import LoginElements from '../../elements/login/LoginElements'
class LoginPage {

    static acessarPaginaDeLogin() {
        cy.visit('/')
    }

    static inserirDadosDeLoginValidos() {
        LoginElements.inputEmail().type(Cypress.env('CYPRESS_EMAIL'))
        LoginElements.inputSenha().type(Cypress.env('CYPRESS_SENHA'))
    }

    static clicarNoBotaoEntrar() {
        LoginElements.botaoEntrar().click()
    }

    static validarLoginRealizadoComSucessoFechandoPossivelComunicado() {
        cy.comandoCustomizadoParaComunicadosEAvisosAoAcessarUmapagina('Notícia')
        
    }
}

export default LoginPage

