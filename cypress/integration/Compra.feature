Feature: Compra

    Como proprietario
    Quero realizar compras de meu fornecedor
    Para o meu estoque

    Background: Acessar modulo de compra

        Given que acesso a página de Login
        When insiro usuario e senha validos
        And clico no botao Entrar
        Then sou logado no sistema
        And acesso o modulo de compra

    Scenario: Realizar Compra de Acessorio    

    Given acesso a funcionalidade de inserir compra sem importar o XML da nota
    When preencho todos os campos obrigatórios para compra de um Acessorio
    And clico no botao Salvar
    Then a compra é realizada com sucesso
    
