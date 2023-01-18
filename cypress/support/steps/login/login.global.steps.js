import LoginPage from '../../pages/Login.page'

Given(/^que acesso a página de Login$/, () => {
    LoginPage.acessarPaginaDeLogin()

})

When(/^insiro usuario e senha validos$/, () => {
    LoginPage.inserirDadosDeLoginValidos()

})


When(/^clico no botao Entrar$/, () => {
    LoginPage.clicarNoBotaoLogin()

})


Then(/^sou logado no sistema$/, () => {

})
