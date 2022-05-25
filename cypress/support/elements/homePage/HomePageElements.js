/// <reference types="cypress" />

class HomePageElements {

    static opcaoDeMenuDeCompra () {
        return cy.get('[title="Compra"] > .menu-list__link')
    }

}
export default HomePageElements

