/// <reference types="cypress" />

class CompraElements {

    static opcaoDeMenuDeCompra() {
        return cy.get('[title="Compra"] > .menu-list__link')
    }

    static opcaoDeEstoqueDentroDeCompra() {
        return cy.get('#main-menu > ul > li:nth-child(5) > ul > li:nth-child(2) > a')
    }

    static blocoDeCompra() {
        return cy.get('#subCapa > :nth-child(1)')
    }

    static linkCompraDoBlocoDeCompra() {
        return cy.get('#GrupoMenuModulo15')
    }

    static inserirCompra() {
        return cy.get('#inserir-compraMenuModulo15')
    }

    static radioButtonNaoParaImportarXmlDaNota() {
        return cy.get('#opcao_compra3')
    }

    static inputNomeDeFornecedor() {
        return cy.get('#for_id_aux')
    }

    static selectFilialDeRecebimento() {
        return cy.get('#ff_id')
    }

    static selectFilial() {
        return cy.get('#fi_id')
    }

    static selectTipoDeComprovante() {
        return cy.get('#co_comp')
    }

    static inputNumeroDaCompra() {
        return cy.get('#co_comp_num')
    }

    static selectTipoDeMovimentacao() {
        return cy.get('#tm_id')
    }

    static radioButtonSimDisponivelEmEstoque() {
        return cy.get('#co_aceite1')
    }

    static botaInserirProduto() {
        return cy.get('#compraProduto > .box-card__content > .form-std > .form-line > .bt-main')
    }

    static botaoAdicionarProdutoDeUsoInterno() {
        return cy.get('#compraProdutoUsoConsumo > .box-card__content > .form-std > .form-line > .bt-main')
    }

    static botaoAdicionarAcessorio() {
        return cy.get('#compraAcessorio > .box-card__content > .form-std > .form-line > .bt-main')
    }

    static botaoVoltar() {
        return cy.get('.bt-back')
    }


    static botaoSalvar() {
        return cy.get('#btnSalvar')
    }

    static textoDaJanelaDeAviso() {
        return cy.get('#aviso_texto')
    }

    static inputNomeDoModeloDeAcessorio() {
        return cy.get('#ac_ac_id2_aux')
    }

    static inputValorTotalDeCompraDeAcessorio() {
        return cy.get('#ac_valor_total2')
    }

    static inputQuantidadeDeAcessorios() {
        return cy.get('#ac_ac_qtde2')
    }

    static radioButtonPagamentoEmDinheiro() {
        return cy.get('#fp_id_tp_1')
    }
}
export default CompraElements

