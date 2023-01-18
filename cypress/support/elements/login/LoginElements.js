class LoginElements {



    static inputUsername() {
        return cy.get('[data-test="username"]')
    }

    static inputPassword() {
        return cy.get('[data-test="password"]')
    }

    static botaoLogin() {
        return cy.get('[data-test="login-button"]')
    }
}
export default LoginElements

