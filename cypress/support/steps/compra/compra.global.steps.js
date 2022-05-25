/// <reference types="cypress" />

import CompraPage from '../../pages/Compra.page'

When(/^acesso o modulo de compra$/, () => {
    CompraPage.acessarModuloDeCompra()
})

Given(/^acesso a funcionalidade de inserir compra sem importar o XML da nota$/, () => {
    CompraPage.acessarFuncionalidadeDeInserirCompraSemImportarXml()
})

When(/^preencho todos os campos obrigatórios para compra de um Acessorio$/, () => {
    CompraPage.preencherCamposObrigatoriosIniciaisParaCompra(Cypress.env('CYPRESS_FORNECEDOR_1'),Cypress.env('CYPRESS_FILIAL_RECEBIMENTO'),Cypress.env('CYPRESS_FILIAL'),'Nota Fiscal')
    CompraPage.preencherCamposParaCompraDeAcessorio(Cypress.env('CYPRESS_CARACTERES_INICIAIS_DE_MODELO_DE_ACESSORIO'),Cypress.env('CYPRESS_MODELO_ACESSORIO'),'1')
})

When(/^clico no botao Salvar$/, () => {
    CompraPage.clicarNoBotaoSalvar()
})

Then(/^a compra é realizada com sucesso$/, () => {
    return true
})
