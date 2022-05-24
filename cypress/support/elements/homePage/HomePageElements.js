/// <reference types="cypress" />

class HomePageElements {

    static botaoRealizarVenda() {
        return cy.get('.bt-selling')
    }
}
export default HomePageElements

