Feature: Login

    Como usuario
    Quero realizar venda de meus produtos
    Para os clientes da minha rede

    Background: Usuario deve estar logado no sistema

        Given que acesso a página de Login
        When insiro usuario e senha validos
        And clico no botao Entrar
        Then sou logado no sistema

    Scenario: Realizar venda de produto

        Given que acesso a funcionalidade de inserir venda
        When insiro os campos obrigatórios da venda do produto
        And escolho realizar o pagamento em dinheiro
        Then recebo a mensagem de venda realizada com sucesso