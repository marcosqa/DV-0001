import CompraElements from '../elements/compra/CompraElements'
import HomePageElements from '../elements/homePage/HomePageElements'

class CompraPage {

    static acessarModuloDeCompra() {
        HomePageElements.opcaoDeMenuDeCompra().click()
        cy.contains('Estoque').click({ force: true })
        CompraElements.blocoDeCompra()
            .should('be.visible').and('contain.text', 'Compra')
    }

    static acessarFuncionalidadeDeInserirCompraSemImportarXml() {
        cy.intercept('**/app/importacaoXmlCompra.php?janela=0').as('novaJanelaParaInserirCompra')
        CompraElements.linkCompraDoBlocoDeCompra().click()
        CompraElements.inserirCompra().click({ force: true })
        CompraElements.radioButtonNaoParaImportarXmlDaNota().check()
        cy.wait('@novaJanelaParaInserirCompra')
    }

    static preencherCamposObrigatoriosIniciaisParaCompra(fornecedor, filialDeRecebimento, filial, tipoDeComprovante) {
        let numeroRandomicoDeNota = Math.round(Math.random() * 100000000)

        CompraElements.inputNomeDeFornecedor().type('TIM ', { delay: 100 })
        cy.contains(fornecedor).click({ force: true })
        CompraElements.selectFilialDeRecebimento().select(filialDeRecebimento)
        CompraElements.selectFilial().select(filial)
        CompraElements.selectTipoDeComprovante().select(tipoDeComprovante)
        CompraElements.inputNumeroDaCompra().type(numeroRandomicoDeNota)
        CompraElements.radioButtonSimDisponivelEmEstoque().should('be.checked')
    }

    static preencherCamposParaCompraDeAcessorio(iniciaisDoModeloDeAcessorio,modeloDoAcessorio, quantidadeDeAcessorios) {
        cy.intercept('**/app/ajaxCompraImposto.php').as('blocoDeImpostos')
        CompraElements.botaoAdicionarAcessorio().click()
        CompraElements.inputNomeDoModeloDeAcessorio().type(iniciaisDoModeloDeAcessorio,{delay:100})
        cy.contains(modeloDoAcessorio).click({force:true})
        CompraElements.inputValorTotalDeCompraDeAcessorio().type('10000')
        CompraElements.inputQuantidadeDeAcessorios().type(quantidadeDeAcessorios)
        CompraElements.radioButtonPagamentoEmDinheiro().check()
        cy.wait('@blocoDeImpostos')
    }

    static clicarNoBotaoSalvar() {
        CompraElements.botaoSalvar().click()
    }

    static validarCompraRealizadaComSucesso() {
        cy.intercept('**/app/sql.php').as('respostaDeGravacaoDeCompra')
        cy.intercept('**/app/listaCompra.php?janela=0').as('janelaDeRespostaDeVenda')
        cy.wait('@respostaDeGravacaoDeCompra')
        cy.wait('@janelaDeRespostaDeVenda')
        CompraElements.textoDaJanelaDeAviso().should('contain.text', 'Compra cadastrada com sucesso!')
    }

}

export default CompraPage