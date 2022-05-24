Feature: Login

    Como usuario
    Quero realizar login no sistema
    Para gerenciar meu negócio

    Scenario: Acessar a Página de Login

        Given que acesso a página de Login
        When insiro usuario e senha validos
        And clico no botao Entrar
        Then sou logado no sistema