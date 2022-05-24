/// <reference types="cypress" />

import LoginPage from '../../pages/login/Login.page'

Given(/^que acesso a página de Login$/, () => {
    LoginPage.acessarPaginaDeLogin()
})

When(/^insiro usuario e senha validos$/, () => {
    LoginPage.inserirDadosDeLoginValidos()
})


When(/^clico no botao Entrar$/, () => {
    LoginPage.clicarNoBotaoEntrar()
})


Then(/^sou logado no sistema$/, () => {
    return true
})
